#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_tts.py
assets/scripts/*.txt 낭독 대본 → assets/audio/<key>_NN.mp3

백엔드 2종(--engine):
  edge  (기본)  Microsoft edge-tts. 무료·무계정, 인터넷 필요. mp3 직접 출력.
                설치:  pip install edge-tts
  melo          로컬 MeloTTS. 오프라인, GPU/CPU. mp3 인코딩에 pydub+ffmpeg 필요.

────────────────────────────────────────────────────────────
[로컬 MeloTTS 설치 계획]  ※ 이 PC는 base=py3.13(mecab 빌드 실패),
   pytorch-env=cu121(RTX5080 sm_120 미지원). 그래서 전용 새 env를 만든다.

  conda create -n sftts python=3.11 -y
  conda activate sftts
  # (A) GPU로 — RTX 5080 = sm_120 → cu128 필요:
  pip install torch torchaudio --index-url https://download.pytorch.org/whl/cu128
  # (B) GPU 안 써도 됨(설치 가벼움, 느릴 뿐): 위 줄 대신
  #   pip install torch torchaudio
  pip install git+https://github.com/myshell-ai/MeloTTS.git
  python -m unidic download
  pip install pydub numpy        # ffmpeg는 이미 설치돼 있음

실행 (sftts env에서):
  python generate_tts.py --engine melo 01_explanation        # 테스트
  python generate_tts.py --engine melo --overwrite           # 전체 재생성
  python generate_tts.py --engine melo --device cpu          # GPU 문제 시 CPU 강제
  python generate_tts.py --engine melo --speed 0.9           # 느리게

[edge 실행]
  python generate_tts.py 01_explanation
  python generate_tts.py --voice ko-KR-HyunsuMultilingualNeural --rate=-10%
화자(edge): ko-KR-SunHiNeural(기본,여), ko-KR-InJoonNeural(남), ko-KR-HyunsuMultilingualNeural(여)
────────────────────────────────────────────────────────────
"""
import os
import re
import sys
import glob
import argparse

try:                       # Windows cp949 콘솔에서 유니코드 출력 크래시 방지
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

BASE = os.path.dirname(os.path.abspath(__file__))
SCRIPTS_DIR = os.path.join(BASE, "assets", "scripts")
AUDIO_DIR = os.path.join(BASE, "assets", "audio")

KEY_RE = re.compile(r"assets/audio/(.+)_\d+\.mp3")
MARKER_RE = re.compile(r"^──\s*섹션")


def parse_script(path):
    """대본 파일 → (key, [섹션 텍스트, ...])"""
    with open(path, encoding="utf-8") as f:
        lines = f.read().splitlines()
    key = next((KEY_RE.search(l).group(1) for l in lines if KEY_RE.search(l)), None)
    seps = [i for i, l in enumerate(lines) if l.strip().startswith("====")]
    body = lines[seps[1] + 1:] if len(seps) >= 2 else lines
    sections, cur = [], []
    for l in body:
        if MARKER_RE.match(l.strip()):
            t = "\n".join(cur).strip()
            if t:
                sections.append(t)
            cur = []
        else:
            cur.append(l)
    t = "\n".join(cur).strip()
    if t:
        sections.append(t)
    return key, sections


def iter_targets(args):
    """(path, key, sections) 순회 + key 필터"""
    paths = sorted(glob.glob(os.path.join(SCRIPTS_DIR, "*.txt")))
    if not paths:
        sys.exit(f"대본이 없습니다: {SCRIPTS_DIR}")
    os.makedirs(AUDIO_DIR, exist_ok=True)
    for path in paths:
        key, sections = parse_script(path)
        if not key:
            print(f"  ! key 인식 실패: {os.path.basename(path)}")
            continue
        if args.keys and key not in args.keys:
            continue
        yield path, key, sections


# ───────────────────────── edge-tts 백엔드 ─────────────────────────
def run_edge(args):
    import asyncio
    try:
        import edge_tts
    except Exception:
        sys.exit("edge-tts 미설치:  pip install edge-tts")

    async def go():
        nf = nc = 0
        for path, key, sections in iter_targets(args):
            print(f"# {os.path.basename(path)}  (key={key}, 섹션 {len(sections)}개)")
            for i, sec in enumerate(sections, 1):
                out = os.path.join(AUDIO_DIR, f"{key}_{i:02d}.mp3")
                if os.path.exists(out) and not args.overwrite:
                    print(f"  - {key}_{i:02d}.mp3  (이미 있음)")
                    continue
                try:
                    await edge_tts.Communicate(sec, args.voice, rate=args.rate).save(out)
                except Exception as e:
                    print(f"  [X] {key}_{i:02d}.mp3 실패: {e}")
                    continue
                print(f"  [OK] {key}_{i:02d}.mp3  ({len(sec)}자 / {os.path.getsize(out)//1024}KB)")
                nf += 1
                nc += len(sec)
        print(f"\n완료(edge): {nf}개 mp3, 약 {nc:,}자.")
    asyncio.run(go())


# ───────────────────────── MeloTTS 백엔드 ─────────────────────────
def run_melo(args):
    try:
        from melo.api import TTS
    except Exception as e:
        sys.exit("MeloTTS 미설치(파일 상단 [설치 계획] 참고):\n" + str(e))
    try:
        import numpy as np
        from pydub import AudioSegment
    except Exception:
        sys.exit("pydub/numpy 필요:  pip install pydub numpy  (+ ffmpeg)")

    def save_mp3(audio, sr, out_path):
        pcm = (np.clip(np.asarray(audio, dtype="float32"), -1.0, 1.0) * 32767.0).astype("<i2")
        AudioSegment(pcm.tobytes(), frame_rate=int(sr), sample_width=2, channels=1
                     ).export(out_path, format="mp3", bitrate=args.bitrate)

    print("MeloTTS 한국어 모델 로딩 중… (첫 실행은 다운로드)")
    model = TTS(language="KR", device=args.device)
    spk = list(model.hps.data.spk2id.values())[0]
    sr = model.hps.data.sampling_rate
    print(f"device={model.device}, sr={sr}\n")

    nf = nc = 0
    for path, key, sections in iter_targets(args):
        print(f"# {os.path.basename(path)}  (key={key}, 섹션 {len(sections)}개)")
        for i, sec in enumerate(sections, 1):
            out = os.path.join(AUDIO_DIR, f"{key}_{i:02d}.mp3")
            if os.path.exists(out) and not args.overwrite:
                print(f"  - {key}_{i:02d}.mp3  (이미 있음)")
                continue
            try:
                audio = model.tts_to_file(sec, spk, output_path=None, speed=args.speed, quiet=True)
                save_mp3(audio, sr, out)
            except Exception as e:
                print(f"  [X] {key}_{i:02d}.mp3 실패: {e}")
                continue
            print(f"  [OK] {key}_{i:02d}.mp3  ({len(sec)}자 / {os.path.getsize(out)//1024}KB)")
            nf += 1
            nc += len(sec)
    print(f"\n완료(melo): {nf}개 mp3, 약 {nc:,}자.")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("keys", nargs="*", help="처리할 key (생략 시 전체)")
    ap.add_argument("--engine", choices=["edge", "melo"], default="edge")
    ap.add_argument("--overwrite", action="store_true")
    ap.add_argument("--bitrate", default="64k", help="(melo) mp3 비트레이트")
    # edge
    ap.add_argument("--voice", default=os.environ.get("EDGE_TTS_VOICE", "ko-KR-SunHiNeural"))
    ap.add_argument("--rate", default=os.environ.get("EDGE_TTS_RATE", "+0%"),
                    help="(edge) 예: --rate=-10%% 처럼 느리게 (대시는 = 로 붙여 쓸 것)")
    # melo
    ap.add_argument("--speed", type=float, default=1.0, help="(melo) 0.8~1.0 느리게")
    ap.add_argument("--device", default="auto", help="(melo) auto | cuda:0 | cpu")
    args = ap.parse_args()

    print(f"[엔진={args.engine}]  대본={SCRIPTS_DIR}\n")
    (run_melo if args.engine == "melo" else run_edge)(args)
    print('다음:  git add assets/audio && git commit -m "TTS 음원 갱신" && git push')


if __name__ == "__main__":
    main()
