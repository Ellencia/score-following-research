#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_tts.py  (로컬 MeloTTS 버전)
assets/scripts/*.txt 낭독 대본을 로컬 MeloTTS로 합성해
assets/audio/<key>_NN.mp3 로 자동 저장한다. 계정·키·월정액 0원, 오프라인.

────────────────────────────────────────────────────────────
설치 (1회)
1) PyTorch — RTX 5080은 sm_120이라 cu128 빌드 권장:
     pip install torch torchaudio --index-url https://download.pytorch.org/whl/cu128
   (GPU가 안 잡혀도 CPU로 동작합니다. 느릴 뿐.)
2) MeloTTS:
     pip install git+https://github.com/myshell-ai/MeloTTS.git
     python -m unidic download
   (한국어 G2P는 g2pkk가 자동 설치됨. MeloTTS가 torch를 CPU판으로 덮어쓰면
    위 1)의 cu128 torch를 다시 설치.)
3) mp3 인코딩:
     pip install pydub
     + ffmpeg 설치:  winget install Gyan.FFmpeg   (또는 choco install ffmpeg)

실행
   python generate_tts.py                    # 전체 14편
   python generate_tts.py 01_explanation     # 특정 key만 (여러 개 나열 가능)
   python generate_tts.py --overwrite        # 기존 mp3 덮어쓰기
   python generate_tts.py --speed 0.9        # 느리게(0.8~1.0), --device cpu, --bitrate 48k

처음 실행 시 한국어 모델을 HuggingFace에서 자동 다운로드한다(수십 MB).
────────────────────────────────────────────────────────────
"""
import os
import re
import sys
import glob
import argparse

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


def save_mp3(audio, sr, out_path, bitrate):
    import numpy as np
    from pydub import AudioSegment
    pcm = (np.clip(np.asarray(audio, dtype="float32"), -1.0, 1.0) * 32767.0).astype("<i2")
    seg = AudioSegment(pcm.tobytes(), frame_rate=int(sr), sample_width=2, channels=1)
    seg.export(out_path, format="mp3", bitrate=bitrate)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("keys", nargs="*", help="처리할 key (생략 시 전체)")
    ap.add_argument("--overwrite", action="store_true")
    ap.add_argument("--speed", type=float, default=1.0, help="0.8~1.0 느리게, 1.0 보통")
    ap.add_argument("--device", default="auto", help="auto | cuda:0 | cpu")
    ap.add_argument("--bitrate", default="64k", help="mp3 비트레이트 (48k~96k)")
    args = ap.parse_args()

    # 의존성 확인
    try:
        from melo.api import TTS
    except Exception as e:
        sys.exit("MeloTTS 미설치:\n  pip install git+https://github.com/myshell-ai/MeloTTS.git\n"
                 "  python -m unidic download\n(" + str(e) + ")")
    try:
        import pydub  # noqa: F401
    except Exception:
        sys.exit("pydub 미설치(mp3 인코딩 필요):  pip install pydub  + ffmpeg 설치")

    paths = sorted(glob.glob(os.path.join(SCRIPTS_DIR, "*.txt")))
    if not paths:
        sys.exit(f"대본이 없습니다: {SCRIPTS_DIR}")
    os.makedirs(AUDIO_DIR, exist_ok=True)

    print("MeloTTS 한국어 모델 로딩 중… (첫 실행은 다운로드로 시간이 걸립니다)")
    model = TTS(language="KR", device=args.device)
    spk_id = list(model.hps.data.spk2id.values())[0]
    sr = model.hps.data.sampling_rate
    print(f"모델 준비 완료. device={model.device}, sr={sr}\n")

    total_files = total_chars = 0
    for path in paths:
        key, sections = parse_script(path)
        if not key:
            print(f"  ! key 인식 실패, 건너뜀: {os.path.basename(path)}")
            continue
        if args.keys and key not in args.keys:
            continue
        print(f"■ {os.path.basename(path)}  (key={key}, 섹션 {len(sections)}개)")
        for i, sec in enumerate(sections, 1):
            out = os.path.join(AUDIO_DIR, f"{key}_{i:02d}.mp3")
            if os.path.exists(out) and not args.overwrite:
                print(f"  - {key}_{i:02d}.mp3  (이미 있음)")
                continue
            try:
                audio = model.tts_to_file(sec, spk_id, output_path=None, speed=args.speed, quiet=True)
                save_mp3(audio, sr, out, args.bitrate)
            except Exception as e:
                print(f"  ✗ {key}_{i:02d}.mp3 실패: {e}")
                continue
            kb = os.path.getsize(out) // 1024
            print(f"  ✓ {key}_{i:02d}.mp3  ({len(sec)}자 / {kb}KB)")
            total_files += 1
            total_chars += len(sec)

    print(f"\n완료: {total_files}개 mp3, 약 {total_chars:,}자.")
    print('다음:  git add assets/audio && git commit -m "TTS 음원 추가" && git push')


if __name__ == "__main__":
    main()
