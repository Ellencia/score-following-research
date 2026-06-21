#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_tts.py
assets/scripts/*.txt 낭독 대본을 네이버 CLOVA Voice API로 합성해
assets/audio/<key>_NN.mp3 로 자동 저장한다. (붙여넣기 0회)

────────────────────────────────────────────────────────────
준비 (1회)
1) NCP(네이버 클라우드 플랫폼) 콘솔 → AI·Application Service → CLOVA Voice → 이용 신청
2) Application 등록 → 인증정보(API Gateway)에서 키 두 개 발급:
     X-NCP-APIGW-API-KEY-ID,  X-NCP-APIGW-API-KEY
3) 환경변수 설정
   PowerShell:
     $env:NCP_CLOVA_ID="발급받은_KEY_ID"
     $env:NCP_CLOVA_SECRET="발급받은_KEY_SECRET"
   bash:
     export NCP_CLOVA_ID=...   ;  export NCP_CLOVA_SECRET=...
4) pip install requests          (선택: pip install pydub  + ffmpeg → 섹션 내 이어붙이기 깔끔)

실행
   python generate_tts.py                       # 전체 14편
   python generate_tts.py 01_explanation        # 특정 key만 (여러 개 나열 가능)
   python generate_tts.py --overwrite           # 기존 mp3 덮어쓰기
   python generate_tts.py --speaker vdain --speed 1   # 화자/속도 변경

화자(speaker) 예: nara(여,기본), vdain(다인,여), vyuna(유나,여), vgoeun, vhyeri,
   ndain, jinho(남), nminyoung … (NCP 콘솔의 speaker 목록 참고. 더빙 톤은 v*/n* 프리미엄 계열)
속도(speed): -5(빠름) ~ 5(느림), 0=보통. 낭독은 1~2 추천.
────────────────────────────────────────────────────────────
"""
import os
import re
import sys
import time
import glob
import argparse

try:
    import requests
except ImportError:
    sys.exit("requests 가 필요합니다:  pip install requests")

BASE = os.path.dirname(os.path.abspath(__file__))
SCRIPTS_DIR = os.path.join(BASE, "assets", "scripts")
AUDIO_DIR = os.path.join(BASE, "assets", "audio")
API_URL = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts"

KEY_RE = re.compile(r"assets/audio/(.+)_\d+\.mp3")
MARKER_RE = re.compile(r"^──\s*섹션")
SENT_RE = re.compile(r"[^.!?。…\n]+[.!?。…]?\s*")


def parse_script(path):
    """대본 파일 → (key, [섹션 텍스트, ...])"""
    with open(path, encoding="utf-8") as f:
        lines = f.read().splitlines()

    key = None
    for ln in lines:
        m = KEY_RE.search(ln)
        if m:
            key = m.group(1)
            break

    seps = [i for i, l in enumerate(lines) if l.strip().startswith("====")]
    body = lines[seps[1] + 1:] if len(seps) >= 2 else lines

    sections, cur = [], []
    for l in body:
        if MARKER_RE.match(l.strip()):
            txt = "\n".join(cur).strip()
            if txt:
                sections.append(txt)
            cur = []
        else:
            cur.append(l)
    txt = "\n".join(cur).strip()
    if txt:
        sections.append(txt)
    return key, sections


def chunk_text(text, max_chars):
    """문장 경계로 max_chars 이하 조각으로 분할"""
    chunks, buf = [], ""
    for para in text.split("\n"):
        para = para.strip()
        if not para:
            continue
        if len(para) <= max_chars:
            pieces = [para]
        else:
            pieces = [m.group(0) for m in SENT_RE.finditer(para)] or [para]
        for p in pieces:
            p = p.strip()
            if not p:
                continue
            if len(p) > max_chars:           # 한 문장이 너무 길면 강제 분할
                for i in range(0, len(p), max_chars):
                    chunks.append(p[i:i + max_chars])
                continue
            if len(buf) + len(p) + 1 > max_chars and buf:
                chunks.append(buf.strip())
                buf = p
            else:
                buf = (buf + " " + p).strip()
    if buf.strip():
        chunks.append(buf.strip())
    return chunks


def synth(text, speaker, speed):
    headers = {
        "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
        "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
        "Content-Type": "application/x-www-form-urlencoded",
    }
    data = {
        "speaker": speaker, "text": text, "format": "mp3",
        "volume": "0", "speed": str(speed), "pitch": "0", "sampling-rate": "24000",
    }
    r = requests.post(API_URL, headers=headers, data=data, timeout=60)
    if r.status_code != 200:
        raise RuntimeError(f"API {r.status_code}: {r.text[:300]}")
    return r.content


def join_mp3(chunks_bytes, out_path):
    if len(chunks_bytes) == 1:
        with open(out_path, "wb") as f:
            f.write(chunks_bytes[0])
        return
    try:                                     # 깔끔한 이어붙이기 (pydub + ffmpeg)
        import io
        from pydub import AudioSegment
        seg = AudioSegment.empty()
        for b in chunks_bytes:
            seg += AudioSegment.from_file(io.BytesIO(b), format="mp3")
        seg.export(out_path, format="mp3")
    except Exception:                        # 폴백: 바이트 단순 연결(대개 재생 OK)
        with open(out_path, "wb") as f:
            for b in chunks_bytes:
                f.write(b)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("keys", nargs="*", help="처리할 key (생략 시 전체)")
    ap.add_argument("--overwrite", action="store_true")
    ap.add_argument("--speaker", default=os.environ.get("NCP_CLOVA_SPEAKER", "nara"))
    ap.add_argument("--speed", default=os.environ.get("NCP_CLOVA_SPEED", "1"))
    ap.add_argument("--max-chars", type=int, default=int(os.environ.get("NCP_CLOVA_MAXCHARS", "900")))
    ap.add_argument("--sleep", type=float, default=0.3)
    args = ap.parse_args()

    global CLIENT_ID, CLIENT_SECRET
    CLIENT_ID = os.environ.get("NCP_CLOVA_ID")
    CLIENT_SECRET = os.environ.get("NCP_CLOVA_SECRET")
    if not CLIENT_ID or not CLIENT_SECRET:
        sys.exit("환경변수 NCP_CLOVA_ID / NCP_CLOVA_SECRET 를 먼저 설정하세요.")

    os.makedirs(AUDIO_DIR, exist_ok=True)
    paths = sorted(glob.glob(os.path.join(SCRIPTS_DIR, "*.txt")))
    if not paths:
        sys.exit(f"대본이 없습니다: {SCRIPTS_DIR}")

    total_chars = total_files = 0
    for path in paths:
        key, sections = parse_script(path)
        if not key:
            print(f"  ! key 인식 실패, 건너뜀: {os.path.basename(path)}")
            continue
        if args.keys and key not in args.keys:
            continue
        print(f"\n■ {os.path.basename(path)}  (key={key}, 섹션 {len(sections)}개)")
        for i, sec in enumerate(sections, 1):
            out = os.path.join(AUDIO_DIR, f"{key}_{i:02d}.mp3")
            if os.path.exists(out) and not args.overwrite:
                print(f"  - {os.path.basename(out)}  (이미 있음, --overwrite로 갱신)")
                continue
            chunks = chunk_text(sec, args.max_chars)
            try:
                audio = [synth(c, args.speaker, args.speed) for c in chunks]
                if args.sleep:
                    time.sleep(args.sleep)
            except Exception as e:
                print(f"  ✗ {os.path.basename(out)} 실패: {e}")
                print("    (speaker 코드/한도 확인. --max-chars 를 낮춰보세요)")
                continue
            join_mp3(audio, out)
            kb = os.path.getsize(out) // 1024
            print(f"  ✓ {os.path.basename(out)}  ({len(sec)}자 / {len(chunks)}요청 / {kb}KB)")
            total_chars += len(sec)
            total_files += 1

    print(f"\n완료: {total_files}개 mp3, 약 {total_chars:,}자 합성.")
    print("다음:  git add assets/audio && git commit -m \"TTS 음원 추가\" && git push")


if __name__ == "__main__":
    main()
