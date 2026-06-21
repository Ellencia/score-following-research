#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_tts.py  (edge-tts 버전)
assets/scripts/*.txt 낭독 대본을 Microsoft Edge 무료 신경망 음성으로 합성해
assets/audio/<key>_NN.mp3 로 자동 저장한다.
계정·API키·카드·월정액 0원 (인증 없음). 설치는 파이썬 패키지 하나.
인터넷 연결 필요(Edge 읽어주기 서비스 사용). mp3 직접 출력이라 ffmpeg/torch/mecab 불필요.

────────────────────────────────────────────────────────────
설치 (1회)
   pip install edge-tts
   (환경이 꼬여 있으면 깨끗한 새 환경 권장:
      conda create -n tts python=3.11 -y && conda activate tts && pip install edge-tts)

실행
   python generate_tts.py 01_explanation          # 먼저 한 편 테스트
   python generate_tts.py                          # 전체 14편
   python generate_tts.py --overwrite              # 기존 mp3 덮어쓰기
   python generate_tts.py --voice ko-KR-HyunsuMultilingualNeural
   python generate_tts.py --rate=-10%              # 느리게 (대시 때문에 = 로 붙여 쓸 것)

화자(--voice):
   ko-KR-SunHiNeural   여, 기본 (안정적)
   ko-KR-InJoonNeural  남
   ko-KR-HyunsuMultilingualNeural  여, 매우 자연(권장해볼 만)
속도(--rate): +0%(기본) / -10%(느리게) / +10%(빠르게)   ※ 반드시  --rate=-10%  형태로
────────────────────────────────────────────────────────────
"""
import os
import re
import sys
import glob
import argparse
import asyncio

try:                       # Windows cp949 콘솔에서 유니코드 출력 크래시 방지
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

try:
    import edge_tts
except Exception:
    sys.exit("edge-tts 미설치:  pip install edge-tts")

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


async def synth(text, voice, rate, out_path):
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(out_path)


async def run(args):
    paths = sorted(glob.glob(os.path.join(SCRIPTS_DIR, "*.txt")))
    if not paths:
        sys.exit(f"대본이 없습니다: {SCRIPTS_DIR}")
    os.makedirs(AUDIO_DIR, exist_ok=True)

    total_files = total_chars = 0
    for path in paths:
        key, sections = parse_script(path)
        if not key:
            print(f"  ! key 인식 실패, 건너뜀: {os.path.basename(path)}")
            continue
        if args.keys and key not in args.keys:
            continue
        print(f"# {os.path.basename(path)}  (key={key}, 섹션 {len(sections)}개)")
        for i, sec in enumerate(sections, 1):
            out = os.path.join(AUDIO_DIR, f"{key}_{i:02d}.mp3")
            if os.path.exists(out) and not args.overwrite:
                print(f"  - {key}_{i:02d}.mp3  (이미 있음)")
                continue
            try:
                await synth(sec, args.voice, args.rate, out)
            except Exception as e:
                print(f"  [X] {key}_{i:02d}.mp3 실패: {e}")
                continue
            kb = os.path.getsize(out) // 1024
            print(f"  [OK] {key}_{i:02d}.mp3  ({len(sec)}자 / {kb}KB)")
            total_files += 1
            total_chars += len(sec)

    print(f"\n완료: {total_files}개 mp3, 약 {total_chars:,}자.")
    print('다음:  git add assets/audio && git commit -m "TTS 음원 추가" && git push')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("keys", nargs="*", help="처리할 key (생략 시 전체)")
    ap.add_argument("--overwrite", action="store_true")
    ap.add_argument("--voice", default=os.environ.get("EDGE_TTS_VOICE", "ko-KR-SunHiNeural"))
    ap.add_argument("--rate", default=os.environ.get("EDGE_TTS_RATE", "+0%"),
                    help="예: --rate=-10% (느리게). 대시 때문에 반드시 = 로 붙여 쓸 것")
    args = ap.parse_args()
    asyncio.run(run(args))


if __name__ == "__main__":
    main()
