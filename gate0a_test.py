# -*- coding: utf-8 -*-
"""게이트0a 검증 스크립트 — pymatchmaker 설치·정렬 파이프라인 생존 확인.

실행: python gate0a_test.py
전제: pip install pymatchmaker  (패키지명 주의 — 'matchmaker' 아님!)
      리눅스/WSL2 권장. fluidsynth 미설치 시 자동으로 additive synth로 우회.

하는 일:
  1) 16마디(64음표) 단음 멜로디 MusicXML 생성
  2) bpm 90으로 합성 오디오(가짜 연주) 생성
  3) Matchmaker OLTW로 오프라인 추적 (simulation mode, 마이크 불필요)
  4) 메트로놈 GT 대비 onset 오차 측정 (고정 오프셋 제거 전/후)

합격 기준(설치 검증): 끝 beat까지 추적 완료 + 오프셋 제거 후 95퍼센타일 ≤ 500ms
※ 이건 chroma 성능 검증이 아님. 게이트0b(본인 실연주 녹음)는 별도.
"""
import sys
import warnings

sys.stdout.reconfigure(encoding="utf-8")  # Windows 콘솔 한글 깨짐 방지
warnings.filterwarnings("ignore")

import numpy as np
import soundfile as sf
import partitura as pt
from partitura.score import Note, Part, TimeSignature
from partitura.utils.synth import synthesize

BPM = 90
SR = 44100
SCORE_FILE = "gate0a_melody16.musicxml"
PERF_FILE = "gate0a_perf.wav"

# ── fluidsynth 없으면 additive synth로 우회 ─────────────────────────
try:
    import fluidsynth  # noqa: F401
    print("[i] fluidsynth 사용 가능 — 기본 경로")
except ImportError:
    pt.save_wav_fluidsynth = pt.save_wav
    print("[i] fluidsynth 없음 — partitura additive synth로 우회 (테스트엔 충분)")

# ── 1) 16마디 단음 멜로디 생성 ──────────────────────────────────────
part = Part("P0", "melody", quarter_duration=4)
part.add(TimeSignature(4, 4), start=0)
pitches = [60, 62, 64, 65, 67, 69, 71, 72]
names = {0: "C", 2: "D", 4: "E", 5: "F", 7: "G", 9: "A", 11: "B"}
t = 0
for bar in range(16):
    for beat in range(4):
        midi = pitches[(bar * 2 + beat) % 8] + (12 if bar % 4 == 3 else 0)
        part.add(Note(step=names[midi % 12], octave=midi // 12 - 1,
                      alter=None, id=f"n{t}"), start=t * 4, end=(t + 1) * 4)
        t += 1
pt.score.add_measures(part)
pt.save_musicxml(part, SCORE_FILE)
score = pt.load_musicxml(SCORE_FILE)
print(f"[1] 악보 생성: {len(score.note_array())}음표, 64 beats")

# ── 2) 합성 연주 오디오 ─────────────────────────────────────────────
audio = synthesize(score, samplerate=SR, bpm=BPM)
sf.write(PERF_FILE, audio, SR)
dur = len(audio) / SR
print(f"[2] 연주 wav: {dur:.1f}초 (bpm {BPM})")

# ── 3) Matchmaker 추적 (오프라인 simulation — 마이크 불필요) ────────
from matchmaker import Matchmaker  # noqa: E402

mm = Matchmaker(score_file=SCORE_FILE, performance_file=PERF_FILE,
                input_type="audio")
positions = np.array(list(mm.run(verbose=False)))
frame_rate = len(positions) / dur
print(f"[3] 추적 완료: {len(positions)}프레임, beat {positions[0]:.2f} → {positions[-1]:.2f}")

# ── 4) onset 오차 측정 ──────────────────────────────────────────────
errors = []
for beat in range(64):
    gt = beat * (60 / BPM)
    idx = int(np.argmax(positions >= beat))
    if positions[idx] >= beat:
        errors.append((idx / frame_rate - gt) * 1000)
e = np.array(errors)
bias = np.median(e)
r = np.abs(e - bias)
print(f"[4] 평가 음표 {len(e)}/64")
print(f"    부호오차 mean {e.mean():+.0f}ms / std {e.std():.0f}ms (고정 오프셋 = 지연+박자 양자화)")
print(f"    오프셋({bias:.0f}ms) 제거 후: 중앙값 {np.median(r):.0f}ms | "
      f"95퍼센타일 {np.percentile(r, 95):.0f}ms | ≤300ms {np.mean(r <= 300) * 100:.0f}%")

ok = positions[-1] >= 60 and np.percentile(r, 95) <= 500
print(f"\n{'✅ 게이트0a 통과' if ok else '❌ 게이트0a 실패'} — "
      f"{'파이프라인 생존. 다음은 게이트0b(본인 녹음 실측).' if ok else '위 로그 확인 필요.'}")
