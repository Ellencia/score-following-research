# -*- coding: utf-8 -*-
"""게이트0b 실측 스크립트 — 본인 실연주 녹음으로 chroma OLTW 정렬오차 측정.

로드맵 15번의 '가장 위험한 가정 실측': chroma가 비-피아노(첼로/일렉기타)에서
작동하는가. 실패해도 성공 — 어디서 깨지는지가 데이터다. 여러 특징(processor)을
한 번에 돌려 로드맵의 분기(chroma→CQT 등)를 즉석 비교한다.

녹음 프로토콜(중요 — GT가 박자그리드이므로):
  * 메트로놈을 켜고 그 박자에 맞춰 연주할 것 (BPM 고정, 루바토 금지)
  * 첼로: 무반주 16마디, 정상 비브라토 / 일렉기타: clean DI 16마디
  * 44.1kHz wav 권장. 같은 곡의 MusicXML을 MuseScore로 입력.

실행(WSL):
  ~/sf/bin/python gate0b_test.py --score 곡.musicxml --perf 녹음.wav --bpm 80
  옵션: --features chroma,lse,cqt_spectral_flux   --label cello_16bar
합격선(특징별): 끝까지 완주(마지막 beat의 95% 이상 도달) AND 오프셋 제거 후
  95퍼센타일 ≤ 500ms. chroma 실패 + 다른 특징 통과 → 로드맵 분기 발동.
결과는 gate0b_results.json에 누적(데이터 적재 원칙: 실패도 기록).
"""
import argparse
import datetime
import json
import os
import sys
import warnings

sys.stdout.reconfigure(encoding="utf-8")
warnings.filterwarnings("ignore")

import numpy as np
import soundfile as sf
import partitura as pt

# fluidsynth 없으면 partitura additive synth로 우회 (gate0a와 동일한 패치)
try:
    import fluidsynth  # noqa: F401
except ImportError:
    pt.save_wav_fluidsynth = pt.save_wav

PASS_P95_MS = 500       # 로드맵 게이트0b 합격선(느슨한 쪽; 300ms이 목표선)
COMPLETE_RATIO = 0.95   # '완주'로 인정할 최종 beat 도달 비율
# 주의: matchmaker 0.3.0의 "cqt_spectral_flux"는 오프라인 모드에서 내부 버그
# (prev_magnitude shape 불일치)로 워커 스레드가 죽고 행업됨 → 기본 목록에서 제외.


class FeatureTimeout(Exception):
    pass


def eval_feature(score_file, perf_file, bpm, total_beats, dur, feat):
    """한 특징으로 추적 → (완주여부, 지표 dict). 실패는 예외 대신 None 지표."""
    import signal
    from matchmaker import Matchmaker
    mm = Matchmaker(score_file=score_file, performance_file=perf_file,
                    input_type="audio", processor=feat)
    # 워치독: matchmaker 내부 스레드가 죽으면 run()이 영원히 대기하므로 강제 탈출
    budget = int(max(120, dur * 6))

    def _alarm(signum, frame):
        raise FeatureTimeout(f"{budget}초 초과 — 내부 행업 의심(해당 processor 버그 가능)")
    old = signal.signal(signal.SIGALRM, _alarm)
    signal.alarm(budget)
    try:
        positions = np.array(list(mm.run(verbose=False)))
    finally:
        signal.alarm(0)
        signal.signal(signal.SIGALRM, old)
    if len(positions) < 10:
        return {"feature": feat, "error": "추적 프레임 부족"}
    frame_rate = len(positions) / dur
    last = float(positions[-1])
    complete = last >= COMPLETE_RATIO * total_beats

    errors = []
    for beat in range(int(total_beats)):
        gt = beat * (60.0 / bpm)
        idx = int(np.argmax(positions >= beat))
        if positions[idx] >= beat:
            errors.append((idx / frame_rate - gt) * 1000.0)
    e = np.array(errors)
    if len(e) < 4:
        return {"feature": feat, "error": "평가 가능한 beat 부족", "last_beat": last}
    bias = float(np.median(e))
    r = np.abs(e - bias)

    # 드리프트 진단: 부호오차가 beat에 따라 선형으로 커지면 연주가 메트로놈과
    # 점점 벌어진 것 → GT(박자그리드) 신뢰 불가. 오차가 아니라 녹음 문제로 안내.
    beats_idx = np.arange(len(e), dtype=float)
    slope = float(np.polyfit(beats_idx, e, 1)[0])          # ms per beat
    total_drift = slope * len(e)                            # 곡 전체 누적 드리프트
    drift_bad = abs(total_drift) > 800                      # 전체 0.8초 이상 벌어지면 경고

    return {
        "feature": feat,
        "complete": bool(complete),
        "last_beat": round(last, 2),
        "total_beats": int(total_beats),
        "beats_evaluated": int(len(e)),
        "bias_ms": round(bias),
        "median_ms": round(float(np.median(r))),
        "p95_ms": round(float(np.percentile(r, 95))),
        "le300_pct": round(float(np.mean(r <= 300) * 100)),
        "drift_ms_per_beat": round(slope, 1),
        "drift_total_ms": round(total_drift),
        "drift_warning": bool(drift_bad),
        "pass": bool(complete and np.percentile(r, 95) <= PASS_P95_MS),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--score", required=True, help="MusicXML 악보")
    ap.add_argument("--perf", required=True, help="본인 연주 wav (메트로놈 동반)")
    ap.add_argument("--bpm", type=float, required=True, help="녹음 시 메트로놈 BPM")
    ap.add_argument("--features", default="chroma,lse",
                    help="비교할 processor 이름들(쉼표 구분). cqt_spectral_flux는 0.3.0 오프라인 버그로 기본 제외")
    ap.add_argument("--label", default="", help="기록용 라벨 (예: cello_16bar_vibrato)")
    ap.add_argument("--out", default="gate0b_results.json", help="누적 기록 파일")
    args = ap.parse_args()

    info = sf.info(args.perf)
    dur = info.frames / info.samplerate
    score = pt.load_musicxml(args.score)
    na = score.note_array()
    total_beats = float(np.max(na["onset_beat"] + na["duration_beat"]))
    print(f"[i] 악보 {len(na)}음표 / {total_beats:.0f} beats, 녹음 {dur:.1f}초, bpm {args.bpm}")

    results = []
    for feat in [f.strip() for f in args.features.split(",") if f.strip()]:
        print(f"\n── processor = {feat} ──")
        try:
            m = eval_feature(args.score, args.perf, args.bpm, total_beats, dur, feat)
        except Exception as ex:
            m = {"feature": feat, "error": f"{type(ex).__name__}: {ex}"}
        results.append(m)
        if "error" in m:
            print(f"  [X] 실패: {m['error']}")
            continue
        print(f"  완주: {'예' if m['complete'] else f'아니오 (beat {m['last_beat']}/{m['total_beats']}에서 중단)'}")
        print(f"  오프셋({m['bias_ms']}ms) 제거 후: 중앙값 {m['median_ms']}ms | "
              f"95퍼센타일 {m['p95_ms']}ms | ≤300ms {m['le300_pct']}%")
        if m.get("drift_warning"):
            print(f"  ⚠ 템포 드리프트 감지: beat당 {m['drift_ms_per_beat']}ms, 누적 {m['drift_total_ms']}ms")
            print(f"    → 연주가 메트로놈과 점점 벌어짐. 위 수치는 정렬 성능이 아니라 녹음 문제일 수 있음.")
            print(f"    → 더 느린 BPM으로 재녹음하거나, 메트로놈을 이어폰으로 들으며 다시 시도 권장.")
        else:
            print(f"  드리프트: 누적 {m['drift_total_ms']}ms — GT 신뢰 가능 (박자 유지 잘됨)")
        print(f"  판정: {'✅ 통과' if m['pass'] else '❌ 미달'} (완주 + p95 ≤ {PASS_P95_MS}ms)")

    # ── 종합 판정 + 로드맵 분기 안내 ─────────────────────────────────
    ok = {m["feature"]: m.get("pass", False) for m in results}
    print("\n══ 게이트0b 종합 ══")
    if ok.get("chroma"):
        print("✅ chroma 통과 — 로드맵 기본 경로(Matchmaker+chroma) 유지. 1단계(직선 곡 추적) 진행.")
    else:
        winners = [f for f, p in ok.items() if p]
        if winners:
            print(f"⚠ chroma 미달, 그러나 {', '.join(winners)} 통과 → 로드맵 분기 발동: "
                  f"Processor를 '{winners[0]}'로 교체하고 1단계 진행.")
        else:
            print("❌ 전 특징 미달 — negative result도 자산. 녹음 조건(메트로놈 정합, 클리핑, "
                  "튜닝)을 먼저 점검하고, 그래도 같으면 hard-case로 태깅 후 기록.")

    # ── 누적 기록 (실패 포함 — 데이터 적재 원칙) ─────────────────────
    entry = {
        "ts": datetime.datetime.now().isoformat(timespec="seconds"),
        "label": args.label or os.path.basename(args.perf),
        "score": os.path.basename(args.score), "perf": os.path.basename(args.perf),
        "bpm": args.bpm, "results": results,
    }
    log = []
    if os.path.exists(args.out):
        try:
            log = json.load(open(args.out, encoding="utf-8"))
        except Exception:
            pass
    log.append(entry)
    json.dump(log, open(args.out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"\n[기록] {args.out} 에 누적 저장 ({len(log)}회차)")


if __name__ == "__main__":
    main()
