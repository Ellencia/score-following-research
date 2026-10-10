# FINDINGS — Score Following 아카이브 질의 인덱스

다른 프로젝트(cello-follower, tab-ripper, score-ocr 등) 세션이 "문헌에 X에 대한 근거가 있나"를 확인할 때 쓰는 **주장 단위 색인**. 논문 분석 13편(templates/NN_analysis.html)과 종합 문서 9편에서 뽑았다. 2026-10-10 생성.

## 쓰는 법

1. 키워드로 grep 한다. 예: `rg "침묵|쉼표" FINDINGS.md`, `rg "첼로" FINDINGS.md`, `rg "지연" FINDINGS.md`.
2. 행의 **위치** 열로 원문 절을 Read 한다. 위치 접두어와 파일 대응은 아래 표.
3. 수치는 아카이브 문서에 적힌 것을 그대로 옮겼다. 아카이브 문서 자체가 논문 요약이므로 인용 전에는 원 논문을 본다.
4. "없음·못 찾음"도 색인 대상이다. 공백을 확인하려면 §15를 먼저 본다.

| 위치 접두어 | 파일 |
|---|---|
| `NN_analysis` | `templates/NN_analysis.html` (사이트의 논문 카드 "분석 보고서"), 원문 PDF는 `papers/NN_*` |
| `00_논문_관계도` | `00_논문_관계도와_흐름.md` |
| `10_landscape` | `10_2025_2026_landscape.md` |
| `11_데이터셋_인벤토리` | `11_데이터셋_인벤토리.md` |
| `12_페이지터너_권고` | `12_페이지터너_적용_권고.md` |
| `13_일렉기타_첼로_옵션` | `13_일렉기타_첼로_종합옵션.md` |
| `14_제작_로드맵` | `14_제작_로드맵.md` |
| `15_솔로개발자_로드맵` | `15_솔로개발자_로드맵.md` |
| `17_입자필터_심층` | `17_입자필터_심층.md` |
| `18_2026_하반기` | `18_2026_하반기_동향.md` |

논문 번호: 01 Arzt 2016 · 02 Dorfer 2016 · 03 Dorfer 2018 · 04 Henkel 2020 · 05 Henkel 2021 · 06 Lee 2022 · 07 Zeitler 2024 · 08 Pillay 2024 · 09 Bukey 2024 · 10 Park 2025 (Matchmaker) · 11 Peter 2025 (Transcribe-and-Track) · 12 Hu 2025 (Causal-AMT) · 13 Chang 2025 (RUMAA)

**등급**: ✔ 논문의 수치·명시 주장을 아카이브가 원문 확인 / ○ 2차 출처·아카이브 해석·권고 / ? 아카이브가 미확인·추정으로 표시.
**출처 "아카이브 판정"** = 논문이 아니라 이 아카이브 문서의 판단.

## 갱신 규칙

새 문서(`NN_*.md` 또는 `templates/NN_analysis.html`)를 추가하면 그 문서의 행을 해당 §에 추가한다. 행이 없는 문서는 색인에 없는 문서다.

## 주의: 문서 간 충돌·내부 불일치 (색인 작성 중 발견, 미수정)

- **Bach10 악기 구성(2026-10-10 수정됨)**: 13_일렉기타_첼로_옵션 §옵션 3이 "Bach10에 첼로 솔로 포함"이라 썼었으나 06_analysis·17_입자필터_심층대로 바이올린·클라리넷·테너색소폰·바순 4중주. 첼로 솔로는 QualScofo 쪽. md·템플릿 모두 고침(docx는 미수정).
- 12_analysis(Hu 2025) §상세 요약 본문의 10 ms 수치(TP2 25.21, TP1 25.40)가 §방법론 표(TP1 9.58, TP2 29.84)와 불일치. 표 세부 수치는 색인에서 뺌.
- 174 ms AMT 지연의 주체: 11_analysis는 Kwon-Jeong-Nam 2020, 12_analysis는 Mobile-AMT. 원문 확인 필요.
- 10_analysis(Park 2025) 연주·작품 수: 본문 184·93 vs 표1 177·77.
- 07_analysis 신뢰구간 표기 96%·95% 혼재.
- 01_analysis(Arzt 2016)는 원본 PDF 열람 실패 상태에서 색인 조각으로 재구성된 보고서. ✔ 행도 원문 재확인 권장.
- Pillay HeurMiT: 논문 폴더명은 Pillay2024, 10_landscape는 Pillay 2025(arXiv 2503.06348). 같은 논문.

---

## 1. 시작점 검출·초기화

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| 작품 미지정 시 전사→tempo-invariant fingerprint로 대규모 DB에서 작품·위치 식별 | Arzt 2016 | 01_analysis §상세 요약 | ✔ |
| 쿼리를 창 15 notes·hop 5로 자르고 sub-query당 상위 100 위치 후보를 가설 추적기에 투입 | Arzt 2016 | 01_analysis §상세 요약 | ✔ |
| 각 agent는 작품·위치·템포 가설과 누적 점수를 유지(rule-based multi-agent) | Arzt 2016 | 01_analysis §상세 요약 | ✔ |
| ring buffer 크기 50, median normalization 등 구현 힌트 제공(PDF p.98) | Arzt 2016 | 01_analysis §방법론과 데이터 | ✔ |
| 96% 신뢰구간 60~120 ms 정렬 정밀도는 실시간 추종의 부트스트랩에 충분 | Zeitler 2024 | 07_analysis §실무적 함의와 응용 | ○ |
| HeurMiT 링 버퍼 20, 초기 5회는 stabilization 단계 | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| P25/P39/P41은 안정화 단계 전에 추적을 잃음 | Pillay 2024 | 08_analysis §상세 요약 | ✔ |
| OLTW-Arzt backward-forward는 잘못된 초기 정합을 사후 수정 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 심볼 OLTW도 표준 OLTW의 window initialization 유지 | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| 시작 위치 모를 때 사전분포를 기준 녹음 전체에 균일하게 깔고 몇 번 반복 후 수렴 | Montecchio & Cont 2011 (ISMIR) | 17_입자필터_심층 §Montecchio & Cont, ISMIR 2011 — 시작점을 모르는 정렬 (서지 확인) | ✔ |
| 균일 사전분포 시작 시 리샘플링 임계값을 높여야 함, 아니면 가설이 일찍 사라져 복구 불가 | Montecchio & Cont 2011 (ISMIR) | 17_입자필터_심층 §Montecchio & Cont, ISMIR 2011 — 시작점을 모르는 정렬 (서지 확인) | ✔ |
| 입자 수 기준 녹음 1초당 60개, Ns=10⁵에서 오디오 1분을 2.29 s에 처리 | Montecchio & Cont 2011 (ISMIR) | 17_입자필터_심층 §Montecchio & Cont, ISMIR 2011 — 시작점을 모르는 정렬 (서지 확인) | ✔ |
| 초반 수렴 구간 흔들림은 오프라인 역방향 입자필터로 교정, 실시간에는 쓸 수 없음 | Montecchio & Cont 2011 (ISMIR) | 17_입자필터_심층 §(b) 시작점 검출 | ✔ |
| DLB·BeatNet도 균일 초기화로 즉시 출력을 냄 | Heydari & Duan 2021, Heydari 외 2021 | 17_입자필터_심층 §(b) 시작점 검출 | ✔ |
| 시작점은 다섯 문제 중 입자필터가 가장 직접적 답을 주는 항목 | 아카이브 판정 | 17_입자필터_심층 §(b) 시작점 검출 | ○ |
| align.step 무장 게이트(FLAT 0.5·LOCK 2 s)와 입자필터의 비용·수렴 구간 오출력 비교 자료 없음 | 아카이브 판정 | 17_입자필터_심층 §(b) 시작점 검출 | ○ |
| Duan–Pardo는 모든 입자를 1박에서 시작(시작점 탐색 없음) | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| Xiong은 입자 1000개를 위치 0, 템포 0.5~2배 균일로 시작 | Xiong & Izmirli 2012 | 17_입자필터_심층 §Xiong & Izmirli, ICMC 2012 — 점프 탐색용 입자 집단 (서지 확인) | ✔ |
| Otsuka 근처 악보 온셋 없으면 폭 3σ_k(σ_k=1박) 범위에서 무작위 위치 제안 | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| 카운트인 4박을 두드려 BPM 보정하는 단순 calibration 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 48. 클릭 트랙 자동 동기화 [엽기 약간] ★★★ G·C | ○ |
| 박수 두 번으로 정해둔 위치(예: 마디 1)로 자동 jump 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 56. 박수 / 손가락 튕김 명시 동기화 ★★ G·C | ○ |
| 곡 시작 후 첫 30초로 사용자 tempo/timbre 분포를 fit하는 test-time 적응 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 20. Few-shot test-time 적응 ★★★★ G·C | ○ |
| Accomplice는 처음부터 끝까지 추적 대신 섹션 큐잉·시작 모드 GUI 제공 | Dannenberg 2026 | 18_2026_하반기 §Accomplice — 키보드 연주 컴퓨터 반주 (NIME 2026, 목록 확인·초록 스니펫) | ○ |

## 2. 반복·D.C.·점프·이탈 복구

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| 구조적 변형(repeats·jumps)은 이 thesis가 완전히 닫지 못한 과제로 후속 연구가 인용 | Arzt 2016 | 01_analysis §비판적 평가 | ○ |
| 구조 차이는 검색·가설추적·tempo model 결합으로 부분 우회·흡수하는 방향 | Arzt 2016 | 01_analysis §선행연구와 비교 | ○ |
| 반복 구조 부분에서 모델이 두 후보 위치에 동시에 큰 확률을 줌 | Dorfer 2016 | 02_analysis §비판적 평가 | ✔ |
| MM-Loc은 매 시점 독립 예측이라 반복 악구에서 위치가 튐 | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| 속도로 점진 진행하므로 반복 악구의 큰 모드 점프가 구조적으로 차단된다는 저자 해석 | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| 추적 윈도 [x−b, x+b] 이탈 시 에피소드를 곡 처음으로 리셋(학습 환경) | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| snippet 기반 추적은 한번 어긋나면 회복 불가, 전체 페이지 관측으로 돌파 | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 반복 마디·da capo 처리 메커니즘 없음, 저자가 future work로 미룸 | Henkel 2020 | 04_analysis §비판적 평가 | ✔ |
| LSTM 장기 맥락으로 반복 패턴 처리 가능성을 열었다 | Henkel 2020 | 04_analysis §비판적 평가 | ○ |
| confidence 점수로 다중 후보를 점수화할 수 있으나 본 논문은 Top-1만 평가 | Henkel 2021 | 05_analysis §비판적 평가 | ○ |
| 후속 방향으로 multi-hypothesis tracking 시사 | Henkel 2021 | 05_analysis §후속 연구와 핵심 참고문헌 | ○ |
| BPSD 11개 버전은 반복부 차이를 제거해 동일 timeline 공유(반복 처리 미평가) | Zeitler 2024 | 07_analysis §방법론과 데이터 | ✔ |
| 반복 패턴·템포 불일치로 HeurMiT는 실용 부족 | Pillay 2024 | 08_analysis §핵심 요약 | ✔ |
| 연속 버퍼 예측 사용 상한 5회, 유효 범위 -48~+96 샘플 | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| 컨텍스트 밖 이탈 시 전역 검색(Out-of-Context Global Search) 제안 | Pillay 2024 | 08_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 자동 jump 처리(Shan) MAcc MeSA-13 0.33, SMR 0.36 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| repeat 포함 부분집합 M13_R MAcc 0.20 → 0.83 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| 사용자가 jump 시작/끝 마디 두 번 클릭, 페이지당 6초 미만 | Bukey 2024 | 09_analysis §방법론과 데이터 | ✔ |
| jump 라벨로 마디 박스를 unrolled 논리 순서로 재배열 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| 정렬은 librosa 표준 DTW, 자동 jump 처리 없음 | Bukey 2024 | 09_analysis §방법론과 데이터 | ✔ |
| 권장 설정은 R†(repeat만 라벨링) | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| Dal segno·D.S. al coda 등 inter-measure jump가 핵심 도전 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| OLTW-Arzt가 Total AR 일관되게 높아 추적 실패에 강함 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 오차 2초(2비트) 초과는 추적 실패로 통계 제외 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 절대 오차 10 s 한 번이라도 초과 시 lost 판정 | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| 심볼 OLTW는 unfold된 악보를 가정 | Peter 2025 | 11_analysis §후속 연구와 핵심 참고문헌 | ○ |
| MIDI엔 repeat·D.S./D.C./Coda 없어 기존 정렬은 unfold 의존 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| MusicXML repeat 기호를 ABC-interleaved로 직접 처리 | Chang 2025 | 13_analysis §핵심 요약 | ✔ |
| repeat 악보 F_align RUMAA 98.4 vs Nakamura HMM 36.4 | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| repeat 악보 hDTW+sym 28.2, GlueNote 12.7 | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| 학습 시 ABC 20%에 임의 마디 반복 추가, 오디오도 반복 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| T3 Edit 태그는 Match/Insert/Delete/Repeat | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| JumpDTW·Shan-Tsai는 image 악보 repeat 시도, 일반화 어려움 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| JLTR: 페이지당 ~6초 클릭으로 repeat 라벨, MAcc 33%→82% | Bukey 2024 | 00_논문_관계도 §두 갈래 노선: 고전 신호 처리와 학습 기반의 분기 | ✔ |
| Shan & Tsai식 자동 jump 처리가 실데이터에서 MAcc 0.33-0.36으로 무너짐 | Bukey 2024 | 00_논문_관계도 §누가 누구를 어떻게 인용·발전시켰는가 | ✔ |
| RUMAA 반복 악보 F_align 98.4 vs 베이스라인 12.7-36.4(최대 87% drop) | Chang 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| 반복·점프·da capo·cadenza 자동 처리는 Grachten 2013부터 Lee 2022까지 미해결 명시 | 아카이브 판정 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ○ |
| JLTR은 반복 모드 점프를 인간 라벨로 운영적으로 닫았을 뿐, 완전 자동 아님 | 아카이브 판정 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ○ |
| 반복은 JLTR 두 클릭 UX가 비용 효율 최고, RUMAA는 1분·피아노 한정이라 백엔드 부적합 | 아카이브 판정 | 12_페이지터너_권고 §Repeat 처리 | ○ |
| 추적 실패 시 화면 탭 한 번으로 OLTW window 재초기화(PIANO PRECISION 참고) | 아카이브 판정 | 12_페이지터너_권고 §오류 복구 UX | ○ |
| Nakamura-Koutaki LBD: MIDI follower로 errors·repeats·large skips 처리 명시 | Nakamura-Koutaki 2025 | 10_landscape §Nakamura-Koutaki 2025 — 로보 합주 시스템 (ISMIR 2025 LBD #419) | ○ |
| RUMAA 사전 정렬로 반복 구조 파악→unfolded score→Matchmaker 실시간 추적 결합 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 7. RUMAA 사전 정렬 + Matchmaker 실시간 ★★★ G·C | ○ |
| 마디 노드·점프 엣지(반복/D.S./Coda) 그래프 위 Viterbi/Beam search 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 18. Score graph search (jump-aware) ★★★★ G·C | ○ |
| confidence 임계 아래면 N초 전으로 돌아가 재결정하는 backtracking 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 52. Backtracking 정렬 [엽기 약간] ★★★ G·C | ○ |
| looper 사용 감지 시 score를 진행시키지 않고 머무르기 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 46. Looper detection (일렉기타 전용) ★★★ G | ○ |
| MVP 조건: 반복·D.S.·Coda 점프 1회 이상 포함, 추적 상실 시 1초 안 복구 | 아카이브 판정 | 14_제작_로드맵 §MVP의 정의 | ○ |
| JLTR 반복 라벨링은 가장 마지막에, 직선 2페이지를 먼저 ship | 아카이브 판정 | 15_솔로개발자_로드맵 §[2단계 1~3개월] 2페이지 + 수동 안전망 먼저 | ○ |
| Xiong: 5박 잘라낸 녹음에서 점프 입자 0.065~0.298 s vs 일반 PF 0.101~4.699 s | Xiong & Izmirli 2012 | 17_입자필터_심층 §Xiong & Izmirli, ICMC 2012 — 점프 탐색용 입자 집단 (서지 확인) | ✔ |
| Xiong: 원본 그대로면 점프 입자 0.060~0.136 s vs 일반 0.059~0.103 s로 약간 손해 | Xiong & Izmirli 2012 | 17_입자필터_심층 §Xiong & Izmirli, ICMC 2012 — 점프 탐색용 입자 집단 (서지 확인) | ✔ |
| Xiong: 확률 0.97로 정상 추적, 아니면 U(−C,C) 점프, 점프 입자 B는 10% 상한 | Xiong & Izmirli 2012 | 17_입자필터_심층 §Xiong & Izmirli, ICMC 2012 — 점프 탐색용 입자 집단 (서지 확인) | ✔ |
| Xiong: B 입자가 75% 넘으면 A/B 라벨 교체 = 점프 확정(히스테리시스) | Xiong & Izmirli 2012 | 17_입자필터_심층 §Xiong & Izmirli, ICMC 2012 — 점프 탐색용 입자 집단 (서지 확인) | ✔ |
| Xiong: 10박·15박 생략은 둘 다 나빠지나 제안이 덜 나빠짐(그림만) | Xiong & Izmirli 2012 | 17_입자필터_심층 §Xiong & Izmirli, ICMC 2012 — 점프 탐색용 입자 집단 (서지 확인) | ✔ |
| Xiong은 chroma 우도+점프 탐색 입자를 정량 평가한 계보 내 유일 논문 | 아카이브 판정 | 17_입자필터_심층 §Xiong & Izmirli, ICMC 2012 — 점프 탐색용 입자 집단 (서지 확인) | ○ |
| Montecchio: 반복 생략 Op.7 n.2를 전이 pdf 수정으로 입자 점프 처리, 정량 평가 없음 | Montecchio 2012 (박사논문) | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| Otsuka: 점프/반복 처리 안 함, 랜드마크 검출 시 입자 주입은 제안만 | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| Otsuka가 "반복/생략 처리"한다는 검색 요약은 Nakamura 2015 초록이 섞인 오류 | 아카이브 판정 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| Otsuka 확신도: 상위 2% 가중치 비율이 0.08 넘게 떨어지면 위치 보고 중단, 0.07 오르면 재개 | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| Nakamura 2015: 미리 정해진 반복만 다루는 방식은 임의 반복 확장 시 계산량 문제 | Nakamura 2015 | 17_입자필터_심층 §(c) 반복/D.C. 점프 | ✔ |
| Duan–Pardo: 점프 처리 없음, "한번 길을 잃으면 제자리 찾기 매우 어렵다" | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| Concatenator: 확률 p_d(0.9~0.99)로 +1, 아니면 균일 점프, P=1000 | Tralie & Cantil 2024 | 17_입자필터_심층 §2024~2026 — 입자필터는 아니지만 구조가 같은 것 | ✔ |
| 목적지가 악보에 적힌 점프는 목적지에 입자 소수 주입이 싸고 선례 있음 | 아카이브 판정 | 17_입자필터_심층 §(c) 반복/D.C. 점프 | ○ |
| cello-follower 문제는 반복 생략이며 이는 정확히 Montecchio Op.7 n.2 사례 | 아카이브 판정 | 17_입자필터_심층 §(c) 반복/D.C. 점프 | ○ |
| 이탈 중 들썩임 제거는 추론기가 아닌 출력 정책(확신도 게이트·히스테리시스)의 몫 | 아카이브 판정 | 17_입자필터_심층 §(a) 이탈(틀림·건너뜀) 중 추정 위치가 들썩임 | ○ |
| 그 출력 정책을 OLTW 위에 얹을 수 있다는 것은 구조 추론이며 논문 근거 없음 | 아카이브 판정 | 17_입자필터_심층 §(a) 이탈(틀림·건너뜀) 중 추정 위치가 들썩임 | ○ |
| 평균 출력은 두 가설 사이 엉뚱한 위치를 낼 수 있음(Cont HDR 경고) | Cont 2013 HDR | 17_입자필터_심층 §(a) 이탈(틀림·건너뜀) 중 추정 위치가 들썩임 | ✔ |
| OLTW는 점프 기본 불가, 다중 추적기·JumpDTW(오프라인) 별도 장치 필요 | 아카이브 판정 | 17_입자필터_심층 §입자필터 vs HMM vs OLTW | ○ |
| HMM은 전이행렬에 점프 명시(Pardo–Birmingham 2005, Nakamura 2015) | 아카이브 판정 | 17_입자필터_심층 §입자필터 vs HMM vs OLTW | ○ |
| Ryry(AMT 2014)는 오류·반복·점프 대응을 내세우나 세부 미확인 | Yamamoto 외 후속 | 17_입자필터_심층 §Yamamoto, Sako, Kitamura, ICASSP 2013 — 입자필터 아님 (서지 확인) | ? |
| OMR이 반복 기호를 놓치면 추론기가 무엇이든 반복/D.C. 문제는 풀 수 없음 | 아카이브 판정 | 17_입자필터_심층 §인접 프로젝트 메모 (문헌 아님, 구조 관찰) | ○ |
| CODA break mode: 점프 후 1초 안 시스템 복구 78%, 평균 0.72 s | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| CODA 반복 벤치: 테스트 94곡 중 66곡에 반복 131개 주석, 28곡은 무작위 점프 | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| CODA는 반복·D.C. 복구를 정량화한 첫 벤치마크 | 아카이브 판정 | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ○ |
| break mode는 Otsuka 확신도 스위칭·Xiong 점프 입자와 같은 계열 출력 정책 | 아카이브 판정 | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ○ |
| 반복 생략 복구는 CODA break mode 벤치(MSMD 131개 반복)가 첫 비교 대상 | 아카이브 판정 | 18_2026_하반기 §결론 — 5개월의 한 줄과 응용 권고 | ○ |
| DTW 경로 국소 구간을 FlexDTW로 재실행해 신뢰도 추정, 비지도 AUROC 0.970 | Pratapneni, Yuan, Tsai 2026 | 18_2026_하반기 §Estimating the Reliability of DTW Alignments Using Circumstantial Evidence (ISMIR 2026, 확인) | ✔ |
| Match 형식 확장: 가상 포인터 음표로 리허설 반복 등 다대다 대응 인코딩 | Chiruthapudi 외 2026 | 18_2026_하반기 §A Flexible Encoding Model for Non-Unique Note Alignments (MEC 2026, 확인) | ✔ |

## 3. 침묵·조율·비연주 구간·연주 오류

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| hand-crafted feature는 저품질 녹음·fortepiano·튜닝 편차에서 false positive·onset 누락 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| BPSD는 역사적 vinyl(노이즈/피치 드리프트) 녹음을 포함 | Zeitler 2024 | 07_analysis §방법론과 데이터 | ✔ |
| ASM 정렬기는 indel(gap) penalty·장식음 매칭 단계로 삽입·누락 음 처리 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| 즉흥 연주·잡음 강건성·마이크 입력은 다루지 않음 | Lee 2022 | 06_analysis §비판적 평가 | ✔ |
| 후속 과제로 실연 오디오 온라인 디노이징/디리버브 제시 | Lee 2022 | 06_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 룸 마이크 녹음 ≤0.05초 9.4%로 급락(합성 오디오 overfit) | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 마이크 잡음·청중 소음 등 실제 연주 조건 일반화는 미검증 | Dorfer 2018 | 03_analysis §비판적 평가 | ○ |
| 후속 신경망 문헌도 tempo variation·mistakes·robustness를 같은 언어로 다룸 | Arzt 2016 | 01_analysis §실무적 함의와 응용 | ○ |
| MIDIOgre 5종 증강(음 추가·삭제 등) 확률 0.1 적용 | Pillay 2024 | 08_analysis §상세 요약 | ✔ |
| MIDIOgre 증강 ablation, 통계적으로 유의한 차이 없음 | Pillay 2024 | 08_analysis §상세 요약 | ✔ |
| HMM은 음 지속 구간에서 멈추는 sticky behavior | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 음표 10%를 ±5 semitone 변형·삭제하는 score 증강 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| 실수 검출 F correct/extra/missed 99.5/89.2/95.3 | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| 기존 최고 correct/extra/missed 99.3/77.0/94.5 | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| 합성 실수 증강이 실제 실수 분포와 맞는지 미검증 | Chang 2025 | 13_analysis §비판적 평가 | ○ |
| 쉼표 상태 RBPF: 모차르트 misalign 14.29%→쉼표만 2.41%, 둘 다 1.92% | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 라흐마니노프: 확장 없음 22.58%, 쉼표만 16.11%, 둘 다 15.25% | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 쉼표 위치 전이: 울림→울림 0.8, 울림→쉼 0.2, 쉼→쉼 1.0 | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 음량 우도 울림 N(−30 dB)·쉼 N(−70 dB), 쉼 상태에선 스펙트럼 우도 1로 고정 | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 악보상 울림 위치는 무조건 울림 가정(피아노), 성악이면 바꿔야 한다고 명시 | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 침묵 처리 핵심은 입자필터가 아니라 "쉼 상태에선 관측을 끈다"는 구조, HMM·DTW로 이식 가능(추론) | 아카이브 판정 | 17_입자필터_심층 §(d) 조율·침묵 구간 | ○ |
| cello-follower의 울림 쉼표+SILENT_STAY는 이미 같은 발상 | 아카이브 판정 | 17_입자필터_심층 §(d) 조율·침묵 구간 | ○ |
| Duan chroma 각도: 한쪽만 무음이면 θ=π/2, 둘 다 무음이면 θ=0 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| Otsuka LHA는 쉼표에서 어떤 관측이든 벌점을 줘 실패 | Otsuka 외 2011 (ISMIR) | 17_입자필터_심층 §Otsuka 외, ISMIR 2011 — LHA 관측모델 (서지 확인) | ✔ |
| BeatNet 정보 게이트: activation 약한 프레임에서 리샘플링 건너뜀 | Heydari 외 2021 | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ✔ |
| 입자필터 score following 중 조율 소리를 다룬 논문 찾지 못함 | 아카이브 판정 | 17_입자필터_심층 §(d) 조율·침묵 구간 | ? |
| 잡음만 있는 테이크 14개 모두 버림(오탐 0), 단 오프라인 직선 구간 찾기 | Montecchio & Cont 2011 (ISMIR) | 17_입자필터_심층 §Montecchio & Cont, ISMIR 2011 — 시작점을 모르는 정렬 (서지 확인) | ✔ |
| STRAdi: 오디오 트래커보다 강건, 특히 바이올린이 쉬는 구간에서 강함(수치 미확인) | Lee·Park·Nam 2026 (STRAdi) | 18_2026_하반기 §STRAdi — 바이올린 실시간 전사 + 추적 (ISMIR 2026, 확인) | ? |
| CODA break mode는 무음으로 촉발되어 반복 구조를 몰라도 임의 점프에서 복구 | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| fermata·페이지 전환·쉼표 후 진입에서 audio follower가 흔들림, gesture+breath로 보완 | Choi-Kwon-Nam 2025 | 10_landscape §Choi-Kwon-Nam 2025 — Multimodal Flutist Onset Timing (ISMIR 2025 paper #12, pp. 100-106) | ○ |
| Rach3: 반복·재시작·실수·멈춤이 들어간 장시간 리허설 피아노 MIDI | Morsi 외 2025 | 10_landscape §Morsi-Chiruthapudi-Peter-Pilkov-Bishop-Maezawa-Serra-Cancino-Chacón 2025 — Rach3 MIDI Dataset (ISMIR 2025 paper #56, pp. 484-491) | ○ |
| RUMAA는 alignment+transcription+mistake detection 세 task 통합 | Chang 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| piano·violin·guitar 세 악기에서 score alignment+error detection 시연(LBD) | Primenta 외 2025 | 10_landscape §Primenta-Loth-Tang-Riley-Dixon-Benetos 2025 — Multi-instrument 통합 데모 (ISMIR 2025 LBD #482) | ○ |
| 페이지 끝 fermata에서 audio가 사라지면 OLTW가 앞으로 misalign할 수 있음 | 아카이브 판정 | 14_제작_로드맵 §MVP가 *못 할 가능성이 높은* 경우 — 미리 인정 | ○ |
| fermata·ritardando 견디려면 박자 X-1→X 평균 tempo 정상 범위를 추가 조건으로 | 아카이브 판정 | 12_페이지터너_권고 §페이지 전환 트리거 설계 | ○ |
| 연습실 사용자의 마디 반복·처음 복귀·멈춤 행동이 follower baseline 과제 | 아카이브 판정 | 11_데이터셋_인벤토리 §Rach3 — A Computational Approach to Study Piano Rehearsals (ISMIR 2025) | ○ |

## 4. 다성부·합주·반주

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| multi-agent 추적기로 복잡한 오케스트라 음악까지 다룬다고 기여 요약 | Arzt 2016 | 01_analysis §핵심 요약 | ✔ |
| 피아노에서는 잘 동작하나 두 symphony에서 문제를 보임 | Arzt 2016 | 01_analysis §비판적 평가 | ✔ |
| 오케스트라는 MIDI 합성이 어려워 실제 연주를 참조로 쓰는 편이 유리 | Arzt 2016 | 01_analysis §상세 요약 | ✔ |
| 여러 performance를 참조로 여러 on-line tracker를 병렬 실행 후 결합 | Arzt 2016 | 01_analysis §방법론과 데이터 | ✔ |
| 단성·단일 스태프 피아노 한정, 다성은 후속 과제 | Dorfer 2016 | 02_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| Mutopia(다성) 완주율 A2C 74% vs MM-Loc 61% | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| REINFORCE_bl은 다성에서 5일 이상 학습해도 성능 불량 | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| 전신(WoRMS 2019, 단성)을 다성 피아노로 확장 | Henkel 2020 | 04_analysis §선행연구와 비교 | ✔ |
| Bach10 4성부(violin/clarinet/sax/bassoon)에서 NSGT-CQT Online rpt 0.743 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| BWV846 Fugue(다성)가 Prelude(단성)보다 rp 약 5%p 우위 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| 컴퓨터 반주엔 75-80% 정밀도 부족, 평균 latency µl만큼 미리 보는 후처리 제안 | Lee 2022 | 06_analysis §실무적 함의와 응용 | ✔ |
| 보컬·관현악 등 비피아노 일반화는 future work | Zeitler 2024 | 07_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 폴리포니를 128행 피아노 롤의 다중 활성 셀로 표현 | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| 반주 출력은 OSC over UDP로 DAW에 전달하는 설계 | Pillay 2024 | 08_analysis §상세 요약 | ✔ |
| Bloch & Dannenberg 1985, 그룹화로 단성 DP를 다성 확장 | Pillay 2024 | 08_analysis §선행연구와 비교 | ✔ |
| 두 staff면 treble+bass, 아니면 treble 가정 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| Matchmaker가 ACCompanion 자동 반주의 추적 모듈로 사용 | Park 2025 | 10_analysis §핵심 요약 | ✔ |
| 평가 전부 솔로 피아노, 합주엔 데이터·특징 추가 필요 | Park 2025 | 10_analysis §비판적 평가 | ✔ |
| 악보 측은 동시 onset 음표를 pitch set 한 칸으로 묶음 | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| 자동 반주엔 174 ms 미래 예측(extrapolation) 필요 | Peter 2025 | 11_analysis §핵심 요약 | ✔ |
| ACCompanion은 Disklavier 약 200 ms 기계 지연을 미래 예측 처리 | Peter 2025 | 11_analysis §선행연구와 비교 | ✔ |
| networked ensemble 지연 한계 20-30 ms | Hu 2025 | 12_analysis §선행연구와 비교 | ✔ |
| Bach10 1성부 align rate: SF-Pitch 88.4±15.6, SF-Chroma 81.0±19.5, Scorealign 86.5±6.7 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| Bach10 4성부 align rate: SF-Pitch 96.4±3.3, SF-Chroma 92.8±6.2, Scorealign 88.3±7.2 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| 성부 수가 늘수록 오히려 잘 됨, 단성의 긴·잦은 반복음이 이상치 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| Soundprism 실연주 Bach 합창: AAE 2성부 0.17박→4성부 0.12박, Scorealign보다 좋음 | Duan & Pardo 2011 (Soundprism) | 17_입자필터_심층 §Duan & Pardo, Soundprism (IEEE JSTSP 2011) (서지 확인) | ✔ |
| Soundprism 무작위 음열 합성에선 크게 나쁨(템포 변동 0~30%에서 AR 약 45%, 50 ms) | Duan & Pardo 2011 (Soundprism) | 17_입자필터_심층 §Duan & Pardo, Soundprism (IEEE JSTSP 2011) (서지 확인) | ✔ |
| Li 외 2019 TISMIR 실내악 시청각 연결이 Duan 추적기를 그대로 사용 | Li 외 2019 | 17_입자필터_심층 §Duan & Pardo, Soundprism (IEEE JSTSP 2011) (서지 확인) | ✔ |
| 다른 파트는 잡음이 아니라 관측모델 일부(전체 악보 템플릿)로, 추론기와 독립 | 아카이브 판정 | 17_입자필터_심층 §(e) 4중주(다른 파트 소리 섞임) | ○ |
| cello-follower 4중주 시뮬 PASS가 "전 파트 템플릿"으로 나온 것과 문헌 방향 일치 | 아카이브 판정 | 17_입자필터_심층 §(e) 4중주(다른 파트 소리 섞임) | ○ |
| 같은 데이터에서 다중 음고 관측(SF-Pitch)이 chroma(SF-Chroma)보다 일관되게 나음 | Duan & Pardo 2011 | 17_입자필터_심층 §(e) 4중주(다른 파트 소리 섞임) | ✔ |
| 자기 파트 악보만으로 섞인 소리에서 한 파트 추적·현악4중주 첼로 파트 추적 설정 못 찾음 | 아카이브 판정 | 17_입자필터_심층 §(e) 4중주(다른 파트 소리 섞임) | ? |
| LHA로 악기 혼합비 미지 시 적응, 단 오디오 1초 처리에 약 10초 | Otsuka 외 2011 (ISMIR) | 17_입자필터_심층 §Otsuka 외, ISMIR 2011 — LHA 관측모델 (서지 확인) | ✔ |
| RWC 재즈 20곡(피아노~빅밴드) 중 16곡에서 Antescofo보다 오차 작음, 평균 절대오차 69% 감소 | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| 브람스 6중주 테이크 20개 중 19개 정답, Tensio 현악4중주 35개 중 26개 정렬 | Montecchio & Cont 2011 (ISMIR) | 17_입자필터_심층 §Montecchio & Cont, ISMIR 2011 — 시작점을 모르는 정렬 (서지 확인) | ✔ |
| Dense-Sparse DTW: 협주곡에서 솔로만 추적, Concerto Accompaniment Benchmark 공개 | Tsai-Dey-Özer-Müller 2025 | 10_landscape §Tsai-Dey-Özer-Müller 2025 — Dense-Sparse DTW (ICASSP 2025) | ○ |
| basso continuo(즉흥 화성 반주) 환경 alignment의 첫 본격 정량 평가 | Chiruthapudi 외 2025 | 10_landscape §Chiruthapudi-Štefunko-Hajič jr.-Cancino-Chacón 2025 — Basso Continuo (CMMR 2025) | ○ |
| 첼로 협주곡은 stem separation(Demucs)으로 첼로 분리 후 정렬 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 51. Stem separation 후 정렬 ★★★★ C | ○ |
| Arzt 2016은 오케스트라 포함 다성·실연 시연 | Arzt 2016 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| 앙상블 속 피아노를 크기+위상으로 전사, PCD-K(협주곡 피아노 70발췌) 공개 | Kim, Park, Nam 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| "다른 파트가 섞인 소리에서 한 파트" 설정이 cello-follower 4중주 문제와 같음(단 피아노) | 아카이브 판정 | 18_2026_하반기 §C. 실시간·저지연 AMT | ○ |
| KRAISLER: 피아노-바이올린 이중주 20발췌 약 25분, 바이올린 음표·비트 주석 | Kim 외 2026 (TISMIR) | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ✔ |
| LiveBand 등 실시간 반주 생성은 악보를 따라가지 않음, 페이지 터너와 무관 | 아카이브 판정 | 18_2026_하반기 §D. 실시간 반주 생성 — score following 아님 | ○ |
| Accomplice: MIDI 악보를 따라가 MIDI·O2·OSC 동기 출력하는 반주 시스템, 오픈소스 | Dannenberg 2026 | 18_2026_하반기 §Accomplice — 키보드 연주 컴퓨터 반주 (NIME 2026, 목록 확인·초록 스니펫) | ○ |
| 합주 환경 자원 부족: chamber·대규모 ensemble 자원 여전히 부족 | 아카이브 판정 | 11_데이터셋_인벤토리 §한계와 빈 공간 | ○ |

## 5. 템포 변화·루바토

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| 현재 템포는 forward보다 정확한 backward path 기울기로 계산 | Arzt 2016 | 01_analysis §상세 요약 | ✔ |
| tempo model은 여러 해석을 실시간 재조합해 tempo hypothesis 생성 | Arzt 2016 | 01_analysis §방법론과 데이터 | ✔ |
| 라흐마니노프 Op.23 No.5에서 beat 약 130 감속·190 가속, 연주 간 차 큼 | Arzt 2016 | 01_analysis §방법론과 데이터 | ✔ |
| 학습 템포에 가까운 연주에만 작동, 큰 템포 변화는 후속 과제 | Dorfer 2016 | 02_analysis §비판적 평가 | ✔ |
| 행동은 픽셀 속도 증감/유지 3개, Δv_pxl은 Nottingham 0.5·Mutopia 1.0 | Dorfer 2018 | 03_analysis §방법론과 데이터 | ✔ |
| 이산 3행동이라 미세 템포 변화 추종에 한계, 연속 제어 확장은 future | Dorfer 2018 | 03_analysis §비판적 평가 | ✔ |
| 시점별 최적 템포 변화 지도학습은 sparse 타깃 탓에 0 근처 trivial 해로 빠짐 | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| 학습 시 0.5–1.5배 7가지 tempo augmentation 적용 | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 학습 시 오디오 0.5–2배 랜덤 템포 변환 증강 | Henkel 2021 | 05_analysis §상세 요약 | ✔ |
| TuneApp Conductor는 박 IOI로 다음 박을 예측해 phase vocoder로 재생 속도 조정 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| OLTW 가중치 (0.5,1,1), search band 약 23초≈500프레임, MaxRunCount로 기울기 제약 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| 템포 ±5 BPM만 어긋나도 misalign rate 50% 초과 | Pillay 2024 | 08_analysis §상세 요약 | ✔ |
| 원인으로 cross-correlation의 비-스케일 불변성 지목 | Pillay 2024 | 08_analysis §비판적 평가 | ✔ |
| 휴리스틱 변화율 허용 범위 0.5~1.5 | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| 후속: 온셋 전용·멀티스케일 교차상관으로 템포 민감도 완화 | Pillay 2024 | 08_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 참조 오디오는 작품 평균 BPM으로 FluidSynth 합성 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| OLTW-Arzt는 tempo-aware 확장 포함 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| HMM 베이스라인은 tempo model 미결합(저자 명시) | Park 2025 | 10_analysis §비판적 평가 | ✔ |
| tempo EMA t_s = t_c·d + (1−d)·t_p로 경로별 갱신 | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| tempo matrix로 외부 tempo model 없이 다중 경로 추적 | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| 최적 설정 window 20, timing weight c=2.0, dw₀=1 | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| 템포 모델만 넣으면 모차르트 misalign 14.29%→39.05%로 오히려 악화 | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 쇼팽 Etude에서도 템포 모델이 약간 해로웠음 | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 템포는 악보 온셋 통과 시에만 변경(σ=0.1), log2 bpm 척도 | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| 위치는 결정적, 템포만 온셋/오프셋 통과 시 랜덤워크(σ_v=악보 템포 1/4), 범위 1/2~2배 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| 입자별 템포 대신 직전 프레임 입자 평균 템포를 써 템포 확산 방지 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| 등속 전이, σ1=템포 변동, σ2=템포 안 바꾸는 국소 어긋남 | Montecchio & Cont 2011 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| 마주르카 최대 오차 1.24~4.42 s는 주로 곡 끝 rallentando | Montecchio & Cont 2011 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| Op.68 n.3: 템포 변경 직후 같은 화음 12번 반복으로 새 템포 추정 불가, 선율 재개 시 복구 | Montecchio & Cont 2011 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| 박 간격 proposal = 온셋 자기상관 × 악보 템포 ±θ 창(θ=15 bpm) | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| Otsuka 실패 곡(6~14)의 원인은 잔향과 템포 요동 | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| Antescofo: 위치는 이산 semi-Markov, 템포는 칼만필터 시간 에이전트 | Cont 2010, Cont 2013 HDR | 17_입자필터_심층 §Antescofo와의 관계 — 템포-위치 결합 상태공간 (Cont 2010, Cuvillier & Cont 2014) | ✔ |
| "템포 노이즈를 온셋에서만" 휴리스틱을 HMM 쪽에서 이론화(시간 일관성 조건) | Cuvillier & Cont 2014 | 17_입자필터_심층 §Antescofo와의 관계 — 템포-위치 결합 상태공간 (Cont 2010, Cuvillier & Cont 2014) | ○ |
| Dorfer 2018: 출력을 속도 제어 RL로 바꿔 Nottingham 완주율 0.43→0.96 | Dorfer 2018 | 00_논문_관계도 §두 갈래 노선: 고전 신호 처리와 학습 기반의 분기 | ✔ |
| Peter 2025: pitch error + path-wise tempo 기반 time error 결합 거리, tempo matrix | Peter 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| 페이지 전환 조건에 path-wise tempo matrix로 평균 tempo 정상 범위 확인 권장 | 아카이브 판정 | 12_페이지터너_권고 §페이지 전환 트리거 설계 | ○ |
| OLTW-Arzt는 ±50% 이상 급격한 템포 변동에서 lost가 잦음 | 아카이브 판정 | 14_제작_로드맵 §MVP가 *못 할 가능성이 높은* 경우 — 미리 인정 | ○ |
| 즉흥 연주의 큰 표현적 일탈에 강건한 follower(PDF 미확보, 분석 경량) | Jiang-Maezawa-Xia 2025 | 10_landscape §Jiang-Maezawa-Xia 2025 — Improvised Performance Following (ICASSP 2025) | ○ |
| Beat This! Live: GTZAN 비트 F1 80.6→86.7, 다운비트 56.5→74.1(BeatNet+ 대비) | Juhász, Widmer, Schlüter 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| Beat This! Live는 score following 템포 사전정보로 쓸 수 있음 | 아카이브 판정 | 18_2026_하반기 §C. 실시간·저지연 AMT | ○ |
| 사용자 과거 연주로 개인 tempo curve·expression 분포 prior 학습 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 42. 연주자 자신의 학습된 timing 분포 [엽기 약간] ★★★★ G·C | ○ |
| 시연곡은 자유 템포(rubato) 큰 표현적 패시지를 명시적으로 배제 | 아카이브 판정 | 14_제작_로드맵 §MVP가 *못 할 가능성이 높은* 경우 — 미리 인정 | ○ |

## 6. 지연 시간·실시간성·연산량

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| 1.2초(40프레임) 발췌 오른쪽 끝을 타깃 온셋에 정렬, 5프레임 시프트(미래 정보 없음) | Dorfer 2016 | 02_analysis §상세 요약 | ✔ |
| 지연·시간 일관성·실시간 성능은 정량 평가하지 않음 | Dorfer 2016 | 02_analysis §비판적 평가 | ○ |
| 에이전트 입력은 20 FPS, 40프레임(2초) 스펙트로그램 컨텍스트 | Dorfer 2018 | 03_analysis §방법론과 데이터 | ✔ |
| 오디오 인코더 CB(40프레임 2초)가 FB(단일 프레임)·NTC보다 우수 | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 약 50 ms 단위 오디오 프레임마다 즉시 시트 위치 출력(hop 1102, 약 20 fps) | Henkel 2021 | 05_analysis §상세 요약 | ✔ |
| YOLO 계열이라 약 20 fps 오디오 입력에 실시간 처리 가능 | Henkel 2021 | 05_analysis §실무적 함의와 응용 | ○ |
| 일반 CQT는 실시간성이 부족해 sliCQ로 대체 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| latency 표준편차/평균 σl/µl을 평가 지표로 정의 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| 평가 사양 Intel i7-8700, 16 GB RAM, Ubuntu 20.04, FFTW로 FFT 가속 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| raw feature는 transcription 부산물이라 추가 계산 비용 없음 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| HeurMiT 지연 1.1±0.19 ms(CUDA), 6.07±1.70 ms(CPU) | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| Flippy(OLTW) 지연 1678.77±729.09 ms | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| 입력·알고리즘이 달라 지연 직접 비교는 부당(저자 명시) | Pillay 2024 | 08_analysis §비판적 평가 | ✔ |
| 빠른 패시지에서 지각 가능한 지연 동반 | Pillay 2024 | 08_analysis §상세 요약 | ✔ |
| MiniTyke 파라미터 49,280개, 곱셈-덧셈 약 605.55M | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| 추론 빈도 f_e=10 Hz, 윈도우 ~5.21 s, 컨텍스트 ~13.02 s | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| JLTR은 오프라인 정렬, 실시간 아님 | Bukey 2024 | 09_analysis §비판적 평가 | ✔ |
| OLTW-Arzt Cython 구현으로 0.07 ms 추론 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| Dixon 1.22 ms vs Arzt 0.07 ms 차는 구현 차 일부 반영 | Park 2025 | 10_analysis §비판적 평가 | ○ |
| LSE 지연 0.91 ms, CQT 추출 지연 42.58 ms | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 지연은 I/O 제외, i9-9900K·M4·M2 Pro 평균 | Park 2025 | 10_analysis §방법론과 데이터 | ✔ |
| 실시간 AMT 지연 174 ms는 페이지 터너엔 충분 | Peter 2025 | 11_analysis §실무적 함의와 응용 | ✔ |
| AMT 32 ms hop이 ≤25 ms 분위의 천장 | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| SOTA online AMT 지연 128-320 ms, 인터랙션 요구는 30 ms 이하 | Hu 2025 | 12_analysis §핵심 요약 | ✔ |
| Mobile-AMT SE층 때문에 실제 지연은 약 10 초 | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| 중앙 정렬 2048 Hann STFT 자체가 64 ms lookahead | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| 10 ms 지연은 정확도 손실 크고 30 ms면 비causal 수준 회복 | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| Mobile-AMT 320 GFLOPs/3 s, Causal-AMT 160 GFLOPs/3 s | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| 10 ms는 imperceptible 목표(Wessel-Wright, McPherson) | Hu 2025 | 12_analysis §선행연구와 비교 | ✔ |
| wall-clock 추론 시간 미측정, future work | Hu 2025 | 12_analysis §방법론과 데이터 | ✔ |
| RUMAA는 약 1분 청크 offline 처리, 실시간 미지원 | Chang 2025 | 13_analysis §핵심 요약 | ✔ |
| Causal-AMT: 30 ms 지연에서 비-causal 수준 정확도, 10 ms는 정확도 손실 큼 | Hu 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| Mobile-AMT 보고 지연 174 ms에 SE 층 10초 lookahead가 숨어 있음 | Hu 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| Transcribe-and-Track의 AMT 지연 174 ms | Peter 2025 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| Henkel 2021 CYOLO ~20 fps 실시간 | Henkel 2021 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| Pillay 2024 1D-CNN 매처 추론 1.1 ms | Pillay 2024 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| Matchmaker는 라이브 audio device 입력 지원 | Park 2025 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| 174→30 ms 단축은 페이지 터너엔 큰 차이 없으나 자동 반주 확장 시 결정적 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 A — 피아노 (1순위 MVP) | ○ |
| Causal-AMT는 160 GFLOPs 작은 모델이라 모바일에서도 실시간 가능 | 아카이브 판정 | 12_페이지터너_권고 §데이터 프라이버시 | ○ |
| 입자 오디오-악보 500·오디오-오디오 200, i5 2.4 GHz 단일 코어 약 150,000개까지 실시간 | Montecchio & Cont 2011 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| Otsuka: T=1 s마다 L=2.5 s 버퍼로 갱신, 처리 200~300 ms, T초 앞 예측 출력 | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| Otsuka ISMIR판: T=0.5 s, 창 1.5 s, 입자 300개 | Otsuka 외 2011 (ISMIR) | 17_입자필터_심층 §Otsuka 외, ISMIR 2011 — LHA 관측모델 (서지 확인) | ✔ |
| Soundprism 추적기 고유 지연은 hop 10 ms, 분리 포함 Matlab 실시간보다 약 3배 느림 | Duan & Pardo 2011 (Soundprism) | 17_입자필터_심층 §Duan & Pardo, Soundprism (IEEE JSTSP 2011) (서지 확인) | ✔ |
| Duan: 프레임 46 ms, hop 10 ms | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| PF 프레임당 O(N)로 악보 길이 무관, 단 불확실할수록 N 증가, 관측 계산이 지배 | Cont 2013 HDR, Otsuka | 17_입자필터_심층 §입자필터 vs HMM vs OLTW | ✔ |
| BeatNet 스스로 "SMC의 높은 계산 비용"을 한계로 적음 | Heydari 외 2021 | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ✔ |
| Korzeniowski 2013 프레임 50 ms, FFT 4096 | Korzeniowski 외 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| CODA 프레임당 12.8 ms | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| FuSiLi 추론 시 Sinkhorn 불필요로 37 ms→5 ms, 오프라인 | Bukey 외 2026 (FuSiLi) | 18_2026_하반기 §FuSiLi — 전역 지도로 국소 다중모달 정렬 (ISMIR 2026, 확인) | ✔ |
| Band-Split RNN AMT: 룩어헤드 0에서 note-with-offset F1 +8.5포인트, 지연 −34 ms, 100 ms 미만 | Kusaka & Maezawa 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| Harmonica nano 26.3K 파라미터, 실시간의 1,622.5배 속도(지연 수치 없음) | Ou 외 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| ClassicPitch 50K 미만 CNN, 잡음 많은 역사 녹음에서도 안정 | Venohr & Weiß 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| Matchmaker v0.3.0에 1 ms 폴링 추가 | Matchmaker 릴리스 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| MIDI pickup이 음표 직접 검출해 AMT 불필요, 지연 ~10 ms | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 30. MIDI Pickup 하드웨어 (Jam Origin / Boss GP-10) ★★ G | ○ |
| EMG로 stroke 직전 약 50ms 활성 감지해 onset 선행 예측 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 36. EMG 근전도 센서 [엽기 약간] ★★★★★ C | ○ |
| 30 ms 지연 환경 정확도를 평가할 표준 데이터셋 없음 | 아카이브 판정 | 11_데이터셋_인벤토리 §한계와 빈 공간 | ○ |

## 7. 정확도 벤치마크(정렬 오차 수치)

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| on-line tracking 허용오차 0.25초 기준 대략 0.71–0.97, 1초 기준 0.91–1.00 | Arzt 2016 | 01_analysis §비판적 평가 | ✔ |
| 테스트 top-1 버킷 정확도 54.64%, top-2 84.36% | Dorfer 2016 | 02_analysis §핵심 요약 | ✔ |
| top-1 train 79.28% vs test 54.64%로 일반화 격차 큼 | Dorfer 2016 | 02_analysis §비판적 평가 | ✔ |
| test 한 버킷 폭 이내 81.18%, NPDmax 절댓값 평균 test 0.0647 | Dorfer 2016 | 02_analysis §방법론과 데이터 | ✔ |
| 실제 피아노 연주에서 한 버킷 폭 이내 71.72%, 평균 NPD 0.0402 | Dorfer 2016 | 02_analysis §방법론과 데이터 | ✔ |
| Nottingham 완주율 A2C 96% vs MM-Loc 43% | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| Mutopia 평균 오차 A2C 19.25 px(약 5mm) vs MM-Loc 62.34 px | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| CB 모델 F1 0.843, 평균 오차 1.25 cm, 중앙값 0.51 cm | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| ≤0.05초 정렬 비율 CB 73.3% vs OMR 44.7% | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| ≤5초에서는 OMR 97.4%가 CB 93.7%보다 robust | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 룸 녹음 ≤0.05초 CB 9.4% vs OMR 22.6% | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 합성 풀세트 0.05초 CYOLO-IR 0.830 vs CUNet 0.733 | Henkel 2021 | 05_analysis §방법론과 데이터 | ✔ |
| 룸 녹음 0.05초 CYOLO-IR 0.563 vs CUNet 0.094 | Henkel 2021 | 05_analysis §상세 요약 | ✔ |
| IR 증강으로 룸 녹음 0.05초 약 0.306 → 0.563 | Henkel 2021 | 05_analysis §비판적 평가 | ✔ |
| 룸 녹음 OMR 베이스라인 0.226@0.05s, 0.974@5.00s | Henkel 2021 | 05_analysis §비판적 평가 | ✔ |
| Bach10 rpt(θe=300 ms) Offline 0.989/0.986, Pseudo Online 0.641, NSGT Online 0.743 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| BWV846 rpt Offline 0.957/0.976, Pseudo Online 0.662, NSGT Online 0.797 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| ASM은 Bach10 10곡 모두 rp 1.00, MAE 0, mismatch 0 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| NSGT Online 0.743이 MIREX 기준 모든 audio-to-audio 방식 능가 주장(간접 비교) | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| ASAP에서 T2_RAW_OF mean 21 ms / 95% 99 ms, DK_SYM_OF도 능가 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| BPSD RAW_OF가 SYM_O 대비 outlier 감소 T1 234→121 ms, T2 466→207 ms | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| Gulda 1958 95% conf. 788 ms → T3 fine-tune 후 80 ms, MB97은 103 ms | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| T3로 평균 95% conf. 약 62 ms, beat-tracking tolerance(70 ms) 수준 | Zeitler 2024 | 07_analysis §핵심 요약 | ✔ |
| chroma 단독은 onset 명확한 피아노에서 alignment error 100% 증가([11]) | Zeitler 2024 | 07_analysis §방법론과 데이터 | ✔ |
| frame+onset 결합이 chroma 단독보다 alignment error 절반(Ewert 2009) | Zeitler 2024 | 07_analysis §선행연구와 비교 | ✔ |
| θ=100 ms Flippy r_e 54.05%, e_i 43.69±42.23 ms | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| θ=100 ms HeurMiT r_e 77.24%, e_i 40.91±26.74 ms | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| MiniTyke val_acc 94%, 피아노롤 교차상관 기준 88% | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| MeSA-13 MAcc 자동 0.72, R 0.82, M+R 0.86, M+R+S 0.88 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| raw onset 확률이 thresholded·frame·piano roll보다 우수 | Bukey 2024 | 09_analysis §방법론과 데이터 | ✔ |
| OLTW가 HMM보다 AAE·Total AR 모두 우위 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| LSE 특징 MAE 241.85 ms로 5종 중 최저 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| AR 허용 오차 50 ms-2000 ms, piece-wise·total 보고 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 평가 연주는 오프라인 정렬 MAE < 100 ms만 포함 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 전사 MIDI robust 91.67%, ≤100 ms 88.33%, ≤25 ms 39.08% | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| 전사 MIDI ≤500 ms 분위 97.37% | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| 녹음 MIDI 상한 robust 94.44%, ≤100 ms 96.19%, ≤25 ms 93.50% | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| audio OLTW NC robust 88.89%, ≤100 ms 73.02%, ≤25 ms 32.02% | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| audio OLTW NS ≤100 ms 71.44%, ≤25 ms 28.75% | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| audio OLTW LNCO robust 72.22% | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| 비반복 F_align RUMAA 98.4 vs Nakamura HMM 99.0 | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| F_align 허용 오차 ±50 ms | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| hierarchical cross-attention이 concat보다 1% 정확 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| Arzt 2016: piano Chopin/Mozart 0.25초 허용 추적률 0.71-0.97 | Arzt 2016 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| Dorfer 2018: 합성 단성 Nottingham 96% 완주 | Dorfer 2018 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| Henkel 2020: 합성 환경 OMR 없이 ≤0.05초 정렬 비율 73.3% | Henkel 2020 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| Henkel 2020: 룸 마이크 ≤0.05초 9.4%, OMR 기반 22.6%의 절반 이하 | Henkel 2020 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| Henkel 2021: IR augmentation으로 룸 0.05초 정확도 0.563, 합성 0.830 | Henkel 2021 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| Transcribe-and-Track: robustness 91.67%, ≤100 ms quantile 88% | Peter 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| transcribe-then-track 교체로 ≤100 ms 분위 73%→88% | Peter 2025 | 12_페이지터너_권고 §시나리오 A — 피아노 (1순위 MVP) | ✔ |
| RUMAA 비-반복 악보 F_align 98.4, SOTA HMM 99.0과 1% 차이 | Chang 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| Zeitler: 실시간 score following 부트스트랩으로 60~120ms 정밀도면 충분 | Zeitler 2024 | 00_논문_관계도 §누가 누구를 어떻게 인용·발전시켰는가 | ✔ |
| Matchmaker: 184 연주 비교에서 OLTW-Arzt+LSE가 정확도·지연 균형 최고 | Park 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| Matchmaker가 Henle 난이도와 정확도 상관 r=0.24 보고 | Park 2025 | 13_일렉기타_첼로_옵션 §옵션 23. Curriculum learning (쉬운 곡→어려운 곡) ★★ G·C | ✔ |
| DTW 결과를 CRNN(piano roll+CQT)으로 보정해 정렬 정확도 최대 20% 개선 | Murgul 외 2025 | 10_landscape §Murgul-Reiser-Heizmann-Seibert 2025 — DTW + CRNN 후처리 (arXiv:2506.22237) | ○ |
| 합성 클라리넷 단선율 평균 0.09~0.13 s, 최대 0.23~0.71 s | Montecchio & Cont 2011 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| 쇼팽 마주르카 8곡×4연주 오디오-악보 평균 0.11~0.34 s, 최대 1.24~4.42 s | Montecchio & Cont 2011 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| 같은 RBPF에서 템플릿만 바꿔 라흐마니노프 misalign 12.31%→0.75% | Korzeniowski & Widmer 2013 | 17_입자필터_심층 §Korzeniowski, Krebs, Arzt, Widmer, ICMC 2013 — 쉼표와 템포의 RBPF (서지 확인) | ✔ |
| Bach10 align rate(250 ms) 중앙값 SF-Pitch 96.5, SF-Chroma 93.4, Scorealign 88.1 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| Li-Duan: 중앙값 align rate·분산 개선, 실연주에선 길 잃은 이상치 증가 | Li & Duan 2015/2016 | 17_입자필터_심층 §Li & Duan, ISMIR 2015 / TASLP 2016 — 피아노 서스테인 (서지 확인) | ✔ |
| MIREX 2010~2020 상태공간 제출은 Duan 2010 하나(49.11%), 상위권은 모두 DTW | Lee 2022 (2차 인용) | 17_입자필터_심층 §분야가 입자필터를 버린 일곱 가지 이유 (원문 근거) | ○ |
| CODA MSMD 합성 오디오 ≤0.10 s .914 vs CYOLO-SB .837 | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| CODA 실제 피아노 ≤0.10 s .743, 마디 .891, 시스템 .953 (CYOLO-SB .630/.829/.917) | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| 오프라인 DP 정렬: 평균 86 ms, 중앙값 21 ms, 50 ms 이내 83.7% ((n)ASAP 300여) | Peter, Hu, Widmer 2026 | 18_2026_하반기 §Precise and Simple Audio-to-Score Alignment (MEC 2026, 확인) | ✔ |
| 같은 조건 오디오-오디오 DTW: 평균 135 ms, 중앙값 49 ms, 50 ms 이내 53.2% | Peter, Hu, Widmer 2026 | 18_2026_하반기 §Precise and Simple Audio-to-Score Alignment (MEC 2026, 확인) | ✔ |
| FuSiLi MSMD 프레임 단위 top-1 정확도 30%(전역 기준선 16%) | Bukey 외 2026 (FuSiLi) | 18_2026_하반기 §FuSiLi — 전역 지도로 국소 다중모달 정렬 (ISMIR 2026, 확인) | ✔ |
| matchmaker_benchmark 리더보드 등재 1개(Pitch matcher example, tracking rate 0.2055) | Matchmaker Benchmark | 18_2026_하반기 §Matchmaker Benchmark — 공개 리더보드 (확인) | ✔ |
| 벤치 지표 tracking rate·beat median·ms median·beat_median_all·RTF, 146개 연주 | Matchmaker Benchmark | 18_2026_하반기 §Matchmaker Benchmark — 공개 리더보드 (확인) | ✔ |
| 중복 note id 버그로 85곡에서 parangonar 계열 4개 미완주(수정됨) | Matchmaker 커밋 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| JLTR measure-level 지표 MDiff/MAcc/MErr/MDev 정의 | Bukey 2024 | 00_논문_관계도 §누가 누구를 어떻게 인용·발전시켰는가 | ✔ |
| Henkel 2020은 픽셀 단위+음악적 시간 오차 임계값 5단계로 평가 | Henkel 2020 | 00_논문_관계도 §사용자가 직접 읽을 추천 순서 | ✔ |
| 성공 trial = 박자 오차 95퍼센타일 ≤ 임계 AND 전환 누락 0 AND 개입 ≤1, 5회 중 4회 | 아카이브 판정 | 15_솔로개발자_로드맵 §0. 한 줄 전략과 성공의 정의 | ○ |
| GT는 추적기 출력이 아닌 독립 소스(수동 탭·메트로놈 박자그리드)로, held-out 5~8곡 | 아카이브 판정 | 15_솔로개발자_로드맵 §0. 한 줄 전략과 성공의 정의 | ○ |
| 게이트0b: chroma OLTW onset 정렬오차 합격선 ≤300~500ms 분위 | 아카이브 판정 | 15_솔로개발자_로드맵 §[이번 주말] 생존 스파이크 — 두 게이트 | ○ |

## 8. 악기별(피아노 외: 첼로·기타·바이올린·현악)

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| QualScofo는 cello·octet·orchestra·piano 등 5그룹 16곡 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| QualScofo는 솔로 첼로~로맨틱 오케스트라, 스튜디오/라이브 혼재 | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| Bach10은 violin/clarinet/sax/bassoon 4성부, rpt 0.743(NSGT Online) | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| 두 symphony(오케스트라)에서 추적 문제 | Arzt 2016 | 01_analysis §비판적 평가 | ✔ |
| 다양한 악기 편성 대응은 후속 과제 | Dorfer 2016 | 02_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| MSMD 피아노 단일, 다양한 악기 일반화 미검증 | Henkel 2020 | 04_analysis §비판적 평가 | ○ |
| 다중 악기·보컬·챔버/오케스트라 일반화 미검증 | Henkel 2021 | 05_analysis §비판적 평가 | ○ |
| pitched onset 명확한 피아노 한정, 보컬·관현악·타악 미검증 | Zeitler 2024 | 07_analysis §비판적 평가 | ✔ |
| 학습이 MAESTRO 피아노뿐, 다성 악기 일반화 근거 좁음 | Pillay 2024 | 08_analysis §비판적 평가 | ○ |
| 후속: 다양한 악기·보컬 데이터로 확장 | Pillay 2024 | 08_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| MeSA-13 일부 비-피아노 포함, 근거는 2곡뿐 | Bukey 2024 | 09_analysis §비판적 평가 | ○ |
| 다른 악기·합주 평가엔 데이터셋·특징 추가 필요(저자 명시) | Park 2025 | 10_analysis §비판적 평가 | ✔ |
| Batik 솔로 피아노만, 비-피아노 검증 추가 필요 | Peter 2025 | 11_analysis §비판적 평가 | ○ |
| Cowley 2025(바이올린 등)·GOAT 2025(전기기타) AMT 대입 제안 | Peter 2025 | 11_analysis §후속 연구와 핵심 참고문헌 | ○ |
| 피아노 한정, violin/cello/guitar 저지연 AMT 확장 제안 | Hu 2025 | 12_analysis §후속 연구와 핵심 참고문헌 | ○ |
| pre-training은 multi-instrument, fine-tune·평가는 피아노만 | Chang 2025 | 13_analysis §비판적 평가 | ✔ |
| GP+HMM follower: 바이올린·오보에·플루트·4성부 찬송가 평가, 2025년 유일한 비-피아노 정량 | Cowley 2025 | 10_landscape §Cowley 2025 — GP+HMM 통계 추론 score follower (arXiv:2502.10426) | ○ |
| Spectral-Mixture GP로 약 18 ms 프레임마다 음고 추론 + duration-HMM 위치 추적 | Cowley 2025 | 10_landscape §Cowley 2025 — GP+HMM 통계 추론 score follower (arXiv:2502.10426) | ○ |
| Cowley 2025는 첼로 적용 가능성이 가장 검증된 baseline | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 2. Cowley 2025 GP+HMM ★★ C | ○ |
| 첼로 솔로가 든 공개 follower 평가셋은 Lee 2022 QualScofo(정성)뿐, Bach10엔 첼로 없음 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 3. Lee 2022 Flippy(분석 6번) — QualScofo cello 재현 ★★ C | ○ |
| piano·violin·guitar 세 악기 alignment+error detection 시연, 정식 논문·코드 없음 | Primenta 외 2025 | 10_landscape §Primenta-Loth-Tang-Riley-Dixon-Benetos 2025 — Multi-instrument 통합 데모 (ISMIR 2025 LBD #482) | ○ |
| STRAdi: 완전 인과 바이올린 전사기+기호 트래커, 첫 바이올린 정량 following | Lee·Park·Nam 2026 (STRAdi) | 18_2026_하반기 §STRAdi — 바이올린 실시간 전사 + 추적 (ISMIR 2026, 확인) | ✔ |
| STRAdi: VioPTT CRNN 개조, MUSC·MOSA 바이올린, 16 kHz, onset 50 ms·offset 20%·피치 50 cent 기준 | Lee·Park·Nam 2026 (STRAdi) | 18_2026_하반기 §STRAdi — 바이올린 실시간 전사 + 추적 (ISMIR 2026, 확인) | ✔ |
| 첼로는 바이올린과 onset 약함·비브라토·쉼을 공유, STRAdi 전사기 첼로 이식이 학습 노선 첫 후보 | 아카이브 판정 | 18_2026_하반기 §STRAdi — 바이올린 실시간 전사 + 추적 (ISMIR 2026, 확인) | ○ |
| 학습 없는 chroma DTW가 G0~G3 통과했으므로 그 노선 실패 시에만 STRAdi 노선 필요 | 아카이브 판정 | 18_2026_하반기 §STRAdi — 바이올린 실시간 전사 + 추적 (ISMIR 2026, 확인) | ○ |
| 솔로 플루트 Syrinx·Density 21.5 각 23개 연주 다중 참조 정렬, 오프라인 | Thibaud 외 2026 | 18_2026_하반기 §그 외 정렬 (확인 수준 병기) | ✔ |
| Band-Split RNN AMT는 기타에서 평가한 첫 저지연 AMT(어떤 기타 데이터셋인지 미확인) | Kusaka & Maezawa 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| TART audio→MIDI F50 81.35%, Tab F1 71.8% | TART 2026 (UC Berkeley) | 18_2026_하반기 §후속 추적 결과 | ○ |
| Noise2Fret: 확산으로 줄·프렛 생성, GuitarSet·GOAT로 평가 | Simionato & Bigo 2026 | 18_2026_하반기 §G. foundation model / diffusion | ○ |
| 첼리스트 시선 행동(초견→연주) 연구, 유일한 첼로 전용 자료 | Ritchie & Sharpe 2026 | 18_2026_하반기 §H. 페이지터너·악보 읽기 인터페이스 | ○ |
| 바이올린 관련 자원: KRAISLER, VioTech, VIOLET·VioLM(합성), OSSQ-OMR | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| Duan Bach10은 바이올린·클라리넷·테너색소폰·바순 4중주 합창곡 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| 세 PF 계보 모두 단선율 반복음·장음에서 길을 잃고 복구 어려움 보고 | Duan–Pardo, Montecchio, Otsuka | 17_입자필터_심층 §먼저 결론 | ✔ |
| 반복음 두 개 연속 구간 국소 오정렬(온셋 검출 없음), 입자 늘리면 완화 | Montecchio & Cont 2011 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| 자원 성숙도 피아노 ⭐5·일렉기타 ⭐3·바이올린 ⭐2·첼로 ⭐1 | 아카이브 판정 | 12_페이지터너_권고 §4가지 사용자 시나리오 | ○ |
| 첼로 monophonic/weakly polyphonic 특성이 chroma에 우호적일 가능성 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 D — 첼로 (4순위) | ○ |
| 비브라토 폭 ±50 cents 이상이면 chroma 12-bin 양자화가 흔들림 | 아카이브 판정 | 14_제작_로드맵 §MVP가 *못 할 가능성이 높은* 경우 — 미리 인정 | ○ |
| 실제 첼로 비브라토 ±50~100cents·6~8Hz로 거의 항상 임계 위 = 첼로 디폴트 | 아카이브 판정 | 15_솔로개발자_로드맵 §[3단계 3~6개월] 풀 MVP + 첼로 follower 확장 | ○ |
| 비브라토 완화책: CQT+median smoothing / 비브라토 대역 저역통과 | 아카이브 판정 | 15_솔로개발자_로드맵 §[3단계 3~6개월] 풀 MVP + 첼로 follower 확장 | ○ |
| 첼로 시연곡 = 정상 비브라토+느린 템포+onset 명확(피치카토 섞임) | 아카이브 판정 | 15_솔로개발자_로드맵 §[3단계 3~6개월] 풀 MVP + 첼로 follower 확장 | ○ |
| 일렉기타 distortion이 강하면 harmonic 분포 비표준이라 chroma 흔들림 → clean tone 한정 | 아카이브 판정 | 14_제작_로드맵 §MVP가 *못 할 가능성이 높은* 경우 — 미리 인정 | ○ |
| audio OLTW는 일렉기타 distortion·effects에 약해 symbol 도메인 정렬이 강건 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 B — 일렉기타 (2순위) | ○ |
| Guitar Pro→MusicXML 변환 시 slide·bend·vibrato가 깔끔히 안 될 수 있음 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 B — 일렉기타 (2순위) | ○ |
| 일렉기타는 DI/픽업 직접 입력 가능, transcription 정확도 1.5-2× 가능 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 29. 일렉기타 DI 신호 직접 사용 ★ G | ○ |
| 일렉기타를 먼저 권함: DI로 환경 변동 축소, GOAT+Causal-AMT 공개, 코드가 chroma에 잘 잡힘 | 아카이브 판정 | 14_제작_로드맵 §어느 악기를 먼저 — 일렉기타 vs 첼로 | ○ |
| 첼로 활 IMU(MPU-6050 ~$5, BT 포함 ~$30)로 onset 보조 신호 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 27. 활(Bow) IMU 센서 ★★★★ C | ○ |
| 일렉기타 effects에도 f0·onset 보존, GOAT 재앰핑으로 distortion-invariant 학습 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 47. Effects-aware feature extraction (일렉기타 전용) ★★★★ G | ○ |
| 첼로 1순위 조합: 활 IMU + Cowley GP+HMM + 사용자 데이터 점진 수집 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §한 줄 결론 | ○ |
| Matchmaker 벤치 메타에 URMP(44줄, 예 01_Jupiter_vn_vc)·KRAISLER 있으나 평가 fold는 피아노만 | Matchmaker Benchmark | 18_2026_하반기 §Matchmaker Benchmark — 공개 리더보드 (확인) | ✔ |

## 9. 알고리즘 비교(DTW·OLTW·HMM·입자필터·학습 기반)

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| tracker는 graphical model이 아닌 on-line DTW 기반이라고 명시 | Arzt 2016 | 01_analysis §선행연구와 비교 | ✔ |
| distance normalization+harmonic/onset 결합이 개별 특징보다 강건·정확 | Arzt 2016 | 01_analysis §방법론과 데이터 | ✔ |
| 모듈이 많아 end-to-end 적응이 어렵다는 후속 신경망 문헌의 비판 | Arzt 2016 | 01_analysis §비판적 평가 | ○ |
| 위치 MSE 회귀는 학습 어렵고 성능 낮아 soft-target 버킷 분류 채택 | Dorfer 2016 | 02_analysis §상세 요약 | ✔ |
| RL(MDP) 정식화가 독립 위치 예측(MM-Loc)보다 우월 | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| A2C(16 병렬 환경, t_max=15)의 분산 감소가 다성에서 본질적 | Dorfer 2018 | 03_analysis §상세 요약 | ✔ |
| CoordConv 시도에도 좌표 직접 (x,y) 회귀가 어려웠음 | Henkel 2020 | 04_analysis §비판적 평가 | ✔ |
| segmentation→bbox 회귀로 바꿔 CUNet을 모든 임계값에서 능가 | Henkel 2021 | 05_analysis §선행연구와 비교 | ✔ |
| 동일 OLTW에서 sliCQ가 FFT pseudo-CQT보다 약 10%p 우수(Bach10) | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| HMM 계열(Antescofo)은 리뷰만 하고 직접 구현하지 않음 | Lee 2022 | 06_analysis §선행연구와 비교 | ✔ |
| O(onset 12d+표준 DTW 1.5,1.5,2) vs OF(frame cosine+onset DLNCO, MrMsDTW) 비교 | Zeitler 2024 | 07_analysis §방법론과 데이터 | ✔ |
| raw가 항상 우월하진 않음, BPSD에서 FB_RAW_OF가 T2보다 강건한 사례 | Zeitler 2024 | 07_analysis §비판적 평가 | ✔ |
| 1D-CNN 잠재 교차상관 + 휴리스틱 vs OLTW(Flippy) | Pillay 2024 | 08_analysis §핵심 요약 | ✔ |
| 교차상관 O(1) vs OLTW O(max(p,s)) | Pillay 2024 | 08_analysis §비판적 평가 | ✔ |
| Peter 2023 offline DRL + attention score follower | Pillay 2024 | 08_analysis §선행연구와 비교 | ✔ |
| hierarchical DTW 대신 표준 DTW + 사람 라벨 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| OLTW-Dixon·OLTW-Arzt·HMM을 동일 인터페이스로 비교 | Park 2025 | 10_analysis §핵심 요약 | ✔ |
| OLTW-Arzt + LSE가 정확도·지연 균형 최적 베이스라인 | Park 2025 | 10_analysis §핵심 요약 | ✔ |
| Arzt-Widmer 2015 multi-reference 사상 부분 채택 | Park 2025 | 10_analysis §선행연구와 비교 | ✔ |
| audio OLTW는 정확도 plateau, 4종 특징 ablation이 근거 | Peter 2025 | 11_analysis §비판적 평가 | ✔ |
| directional weights dw₀·dw₁·dw₂로 방향별 차등 패널티 | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| Nakamura HMM 비반복 SOTA F_align 99.0 | Chang 2025 | 13_analysis §선행연구와 비교 | ✔ |
| 정렬·전사·실수 검출을 transformer 한 모델로 통합 | Chang 2025 | 13_analysis §핵심 요약 | ✔ |
| Matchmaker: OLTW-Dixon·OLTW-Arzt·HMM 동일 인터페이스 비교, OLTW-Arzt+LSE 권고 | Park 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| 4종 audio 특징(NS·NC·LNSO·LNCO) ablation으로 audio OLTW 정확도 plateau 입증 | Peter 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| 고전 노선은 특징 표현력이 천장, 학습 노선은 합성 과적합·반복 모드 점프 실패 | 아카이브 판정 | 00_논문_관계도 §두 갈래 노선: 고전 신호 처리와 학습 기반의 분기 | ○ |
| Murgul은 DTW 출력을 학습, Zeitler는 DTW 입력을 학습 — 정반대 hybrid | 아카이브 판정 | 10_landscape §Murgul-Reiser-Heizmann-Seibert 2025 — DTW + CRNN 후처리 (arXiv:2506.22237) | ○ |
| DL 기반 score following이 아직 deployment에 부적합함을 정량으로 인정 | Pillay 2025 | 10_landscape §Pillay 2025 — HeurMiT 1D-CNN + 휴리스틱 (arXiv:2503.06348) | ○ |
| Soft-DTW gradient가 blurred target을 암묵 가정, corrected loss 제안 | Zeitler-Müller 2025 | 10_landscape §Zeitler-Müller 2025 — Reformulating Soft DTW (ISMIR 2025, paper_0004) | ○ |
| 입자필터 score following 계보는 2010~2013년에 사실상 끝남 | 아카이브 판정 | 17_입자필터_심층 §먼저 결론 | ○ |
| 병목은 추론기 아닌 관측모델: Otsuka 입자 1500→6000에도 개선 없음 | Otsuka 외 2011 | 17_입자필터_심층 §분야가 입자필터를 버린 일곱 가지 이유 (원문 근거) | ✔ |
| Cont HDR: PF 실시간 사용 미성숙, 불확실 시 평균 디코딩이 심각한 문제 | Cont 2013 HDR | 17_입자필터_심층 §분야가 입자필터를 버린 일곱 가지 이유 (원문 근거) | ✔ |
| 효율 이산화 HMM이 33개 조건 중 32개에서 원 모델보다 나아 PF 속도 이점 제거 | Krebs, Böck, Widmer 2015 | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ✔ |
| 고정 격자 HMM 최고 성능이나 복잡, PF는 빠르지만 downbeat에서 약간 못함 | Krebs, Böck, Widmer 2015 | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ✔ |
| PF는 확률적이라 같은 입력에도 실행마다 다름, 10회 반복 평균이 관행 | 아카이브 판정 | 17_입자필터_심층 §입자필터 vs HMM vs OLTW | ✔ |
| HMM·HSMM·OLTW는 결정적, OLTW는 불확실성 지표 직접 없음(누적 비용만) | 아카이브 판정 | 17_입자필터_심층 §입자필터 vs HMM vs OLTW | ○ |
| Montecchio PF가 HMM보다 "일관되게 우수, 파라미터 이탈에 강건" 서술, 수치표 없음 | Montecchio 2012 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| Cont 2006 계층 HMM+PF 디코딩은 "극도로 복잡"해 Antescofo로 이동 | Cont 2006, Cont 2013 HDR | 17_입자필터_심층 §Cont 2006 ICASSP — 폐기된 출발점 (서지 확인, 세부 미확인) | ✔ |
| Soundprism 입자 100은 자주 길 잃고 1000이면 드묾, 1000 채택 | Duan & Pardo 2011 (Soundprism) | 17_입자필터_심층 §Duan & Pardo, Soundprism (IEEE JSTSP 2011) (서지 확인) | ✔ |
| 입자는 보통 0.5박 이내에 모여 평균·MAP·중앙값 차이 거의 없음 | Duan & Pardo 2011 (Soundprism) | 17_입자필터_심층 §Duan & Pardo, Soundprism (IEEE JSTSP 2011) (서지 확인) | ✔ |
| Li-Duan의 입자필터 쪽 신규 기여 없음, PF는 부차적 역할 | Lee 2022 | 17_입자필터_심층 §Li & Duan, ISMIR 2015 / TASLP 2016 — 피아노 서스테인 (서지 확인) | ✔ |
| Yamamoto 2013은 segmental CRF+delayed-decision Viterbi로 PF 아님(초록 기준) | Yamamoto 외 2013 | 17_입자필터_심층 §Yamamoto, Sako, Kitamura, ICASSP 2013 — 입자필터 아님 (서지 확인) | ? |
| PF 아님 확인: Lin 2020(ODTW), Wada 2017(온라인 DTW), Burloiu 2016, Jiang & Raphael 2019(스위칭 칼만) | 아카이브 판정 | 17_입자필터_심층 §2024~2026 — 입자필터는 아니지만 구조가 같은 것 | ✔ |
| 2015년 이후 PF는 박자 추적(BeatNet, DLB)에서 신경망 activation 위에 살아남음 | 아카이브 판정 | 17_입자필터_심층 §먼저 결론 | ✔ |
| DLB 입자 1000개(300개로도 비슷), 2배/절반 템포 탐색 입자 혼합 | Heydari & Duan 2021 | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ✔ |
| BeatNet은 박 추적 1500 + downbeat 250 입자 직렬 | Heydari 외 2021 | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ✔ |
| Krebs·Holzapfel·Cemgil·Widmer 2015 meter 추론 PF 세부 미확인 | Krebs 외 2015 (TASLP) | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ? |
| Hainsworth & Macleod 2004 오디오 박자 추적 PF 두 가지(초록 기준) | Hainsworth & Macleod 2004 | 17_입자필터_심층 §템포·박자 추적 입자필터 계보 (요지) | ? |
| 직접 만든다면 Duan–Pardo식이 가장 단순(2차원, 1000 입자, chroma 각도 우도) | 아카이브 판정 | 17_입자필터_심층 §공개 코드 현황 | ○ |
| PF로 바꿀 때 비용: 비결정성, 입자 수 조정, 다봉 평균 오류, 단선율 반복음 약점 잔존 | 아카이브 판정 | 17_입자필터_심층 §종합 | ○ |
| 2026년 PF가 논문 없이 Matchmaker 코드로 돌아옴(#56, #66) | Matchmaker 릴리스 | 17_입자필터_심층 §먼저 결론 | ✔ |
| 오프라인 DP 정렬은 전사 없이 음색 적응, 단 피아노 88건반 필터뱅크 | Peter, Hu, Widmer 2026 | 18_2026_하반기 §Precise and Simple Audio-to-Score Alignment (MEC 2026, 확인) | ✔ |
| Masked Diffusion 박자 추적(Korzeniowski 공저) | Foscarin, Korzeniowski, Vogl 2026 | 18_2026_하반기 §G. foundation model / diffusion | ? |
| N개 follower 병렬 실행 후 vote/median으로 최종 위치 결정 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 53. Multi-tracker ensemble (vote) ★★★ G·C | ○ |

## 10. 전사 후 추적(transcribe-then-track)·AMT

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| 쿼리 오디오를 전사해 noisy note list를 만든 뒤 fingerprint로 DB 매칭 | Arzt 2016 | 01_analysis §상세 요약 | ✔ |
| 전사 노이즈가 fingerprint·후속 추적 단계로 오차 누적될 수 있음 | Arzt 2016 | 01_analysis §비판적 평가 | ○ |
| transcription 모델의 raw onset/frame 확률(88 pitch×N)을 DTW 입력으로 사용 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| SYM은 thresholding 탓에 음표 길이가 들쭉날쭉해 정렬 불안정 유발 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| MusicNet 학습 T1이 MAESTRO 학습 T2보다 BPSD에서 강건 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| 도메인 시프트 크면 unaligned audio–score 페어로 transcription 모델 fine-tune 권고 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| MT3처럼 token 출력 모델은 raw 확률 접근이 어려워 future work | Zeitler 2024 | 07_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| Chen & Jang 2019 CQT+DTW+RNN onset 검출은 미적용, future work | Lee 2022 | 06_analysis §비판적 평가 | ✔ |
| 오디오→MIDI는 BasicPitch 위임, end-to-end 미평가 | Pillay 2024 | 08_analysis §비판적 평가 | ✔ |
| Onsets and Frames raw onset 확률을 DTW 특징으로 사용 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| 학습된 특징(Zeitler 2024 등) 미비교, 후속 과제 | Park 2025 | 10_analysis §비판적 평가 | ○ |
| AMT는 Kwon-Jeong-Nam 2020, 174 ms, 교체 가능 블랙박스 | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| 전사 오류 감수해도 심볼 정렬이 audio보다 정확·강건 | Peter 2025 | 11_analysis §상세 요약 | ✔ |
| 거리 pd = e^P + c·e^T, pitch 오차는 이진 | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| Zeitler-Maman-Müller 2024가 오프라인 원형 | Peter 2025 | 11_analysis §선행연구와 비교 | ✔ |
| triangular→binary point target으로 후처리 lookahead 제거 | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| shift-tolerant loss는 최고지만 systematic delay로 미채택 | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| velocity conditioning 제거(A2)로 10 ms F1 25.77 | Hu 2025 | 12_analysis §방법론과 데이터 | ✔ |
| Causal-AMT onset F1 10 ms 31.55 vs Mobile-AMT 18.26 | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| 30 ms tolerance에선 Mobile-AMT 66.80 vs Causal 37.38 | Hu 2025 | 12_analysis §상세 요약 | ✔ |
| 비대칭 윈도우는 spectral leakage 20 dB 증가 | Hu 2025 | 12_analysis §비판적 평가 | ○ |
| score-informed 전사 (n)ASAP F_on 99.1, F_off-vel 93.6 | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| score-free F_off-vel 76.0/75.8, hFT-T 89.5·IS-CRF 93.0 | Chang 2025 | 13_analysis §비판적 평가 | ✔ |
| 오디오를 음표 시퀀스로 변환 후 심볼 도메인 OLTW, robustness 91.67%·≤100 ms 88% | Peter 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| Peter 2025는 Kwon-Jeong-Nam AMT를 사전학습 모듈로 사용 | Peter 2025 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| Zeitler: transcription raw onset/frame 확률을 thresholding 없이 MrMsDTW 입력으로 | Zeitler 2024 | 00_논문_관계도 §두 갈래 노선: 고전 신호 처리와 학습 기반의 분기 | ✔ |
| JLTR: Onsets and Frames raw onset probability + librosa ordinary DTW | Bukey 2024 | 00_논문_관계도 §두 갈래 노선: 고전 신호 처리와 학습 기반의 분기 | ✔ |
| Zeitler·Bukey가 "thresholding 이전 확률이 좋은 정렬 특징"을 독립적으로 동시 보고 | 아카이브 판정 | 00_논문_관계도 §누가 누구를 어떻게 인용·발전시켰는가 | ○ |
| Causal-AMT: 모든 conv strict causal, SE 제거, acoustic stack 공유, 비대칭 STFT | Hu 2025 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| RUMAA: CLaMP2 M3 + YourMT3+ 사전학습 encoder + 6-block cross-attention decoder | Chang 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| 일렉기타는 GOAT+Guitar-TECHS로 Causal-AMT fine-tune 후 심볼 OLTW 권고 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 B — 일렉기타 (2순위) | ○ |
| GOAT 30시간+aug로 fine-tune 시 RTX 4090 한 대 약 48-72시간 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 B — 일렉기타 (2순위) | ○ |
| 48~72h는 순수 학습시간, 전처리·정합 포함 part-time 6~10주 | 아카이브 판정 | 15_솔로개발자_로드맵 §3. 기술 리스크와 대비책 (정직하게) | ○ |
| AMT 1차 우회 = MIDI pickup(~$200, ~10ms, distortion 무관, GPU 0) | 아카이브 판정 | 15_솔로개발자_로드맵 §3. 기술 리스크와 대비책 (정직하게) | ○ |
| transcribe-then-track 구조를 바이올린에 이은 것이 STRAdi, score following 코드는 미공개 | Lee·Park·Nam 2026 (STRAdi) | 18_2026_하반기 §후속 추적 결과 | ✔ |
| JKU는 2026-05 이후 새 실시간 피아노 전사 논문 없음 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| Band-Split RNN: 서브밴드 완전 인과 인코더, 지연 허용 시 유연 룩어헤드 | Kusaka & Maezawa 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| MuScriptor 1.3B, Multi F1 48.2 vs YourMT3+ 21.9(수치 스니펫만) | Rouard 외 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ○ |
| MuQ 특징 A2S: 클래식 SER 4.98%(기존 15.3%), 팝 20.92% | Cummins 외 2026 (SheetSage-A2S) | 18_2026_하반기 §G. foundation model / diffusion | ✔ |
| A2S 인코더(MERT 등) 동결·LoRA·전체 미세조정 비교, 오류율 3% 미만 | Hidalgo-Centeno 외 2026 | 18_2026_하반기 §G. foundation model / diffusion | ✔ |
| 약정렬 데이터를 이분 그래프 매칭으로 onset 스냅 | Saha 외 2026 (Snapping Matters) | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| Mobile-AMT acoustic distribution shift augmentation 또는 GOAT 재앰핑 결합 권장 | 아카이브 판정 | 11_데이터셋_인벤토리 §사용 가이드: 데이터셋 결합의 두 가지 함정 | ○ |
| 비-피아노에서 transcribe-then-track plateau 돌파를 같은 ablation으로 입증하면 첫 결과 | 아카이브 판정 | 12_페이지터너_권고 §분야 기여로 환원 가능한 지점 | ○ |
| MIDI pickup이 transcription 단계를 하드웨어로 대체 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 30. MIDI Pickup 하드웨어 (Jam Origin / Boss GP-10) ★★ G | ○ |

## 11. 데이터셋

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| Chopin 154작품(9:38:36), Mozart 13(1:23:56), 총 326작품 942,238 스코어 노트 | Arzt 2016 | 01_analysis §방법론과 데이터 | ✔ |
| ground truth 정렬은 Chopin·Mozart corpus뿐이라 평가셋도 이 둘에 한정 | Arzt 2016 | 01_analysis §방법론과 데이터 | ✔ |
| Nottingham MIDI 첫 트랙을 Lilypond 렌더링+Fluidsynth Steinway 합성 | Dorfer 2016 | 02_analysis §상세 요약 | ✔ |
| 실연 평가는 AvantGrand N2로 친 Bach Minuet G(BWV Anh.114) 1곡 | Dorfer 2016 | 02_analysis §방법론과 데이터 | ✔ |
| Nottingham 296곡(187/63/46), Mutopia 479곡(360/19/100) | Dorfer 2018 | 03_analysis §방법론과 데이터 | ✔ |
| MSMD 정제판 353/19/94곡, 945/28/125 페이지, 자동 정렬 오류 수동 보정 | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| MSMD 실연 녹음 16곡 25 페이지(Direct Out+Room mic) | Henkel 2020 | 04_analysis §방법론과 데이터 | ✔ |
| OpenAIRLib+MicIRP의 IR 500여 개를 매 epoch 컨볼루션 증강 | Henkel 2021 | 05_analysis §상세 요약 | ✔ |
| QualScofo 16곡, 1717-1905 클래식 2분 이내 발췌+PDF/MIDI/MusicXML+실연 오디오 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| QualScofo는 연주자 숙련도 다양성이 부족 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| BWV846(MAESTRO)은 ASM으로 ground truth 자동 생성 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| MIREX는 2018년 이후 제출 0건, 데이터셋 비공개 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| BPSD 32 소나타 1악장×11 버전=352 트랙, 약 41시간 7분, WK64 수동 마디 주석 | Zeitler 2024 | 07_analysis §방법론과 데이터 | ✔ |
| ASAP 부분집합 Beethoven 1악장 13개 Disklavier 녹음, 약 103분 | Zeitler 2024 | 07_analysis §방법론과 데이터 | ✔ |
| ASAP이 MAESTRO 기반이라 T2 결과는 train/test 분리 보장 어려움 | Zeitler 2024 | 07_analysis §비판적 평가 | ✔ |
| MAESTRO V3 ~200시간, MIDI/오디오 정렬 ~3 ms | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| (n)ASAP 44곡 평가, 26곡·4곡은 GT 생성 한계로 제외 | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| MeSA-13 13곡(실연+스캔 악보), repeat 포함 2곡 | Bukey 2024 | 09_analysis §방법론과 데이터 | ✔ |
| SMR 100곡 중 measure detection 일치 60곡 사용 | Bukey 2024 | 09_analysis §방법론과 데이터 | ✔ |
| (n)ASAP 59·Batik 30·Vienna4x22 88 연주 | Park 2025 | 10_analysis §방법론과 데이터 | ✔ |
| 합계 247,035 음표, 7.74 시간, Henle 난이도 6.11 | Park 2025 | 10_analysis §방법론과 데이터 | ✔ |
| 본문 184 연주·93 작품 vs 표1 177·77, 불일치 | Park 2025 | 10_analysis §방법론과 데이터 | ? |
| Batik-plays-Mozart 30곡 1인 연주 + FluidSynth 악보 오디오 | Peter 2025 | 11_analysis §방법론과 데이터 | ✔ |
| MAESTRO v3 16 kHz mono, 3 s 세그먼트, 229-bin mel | Hu 2025 | 12_analysis §방법론과 데이터 | ✔ |
| (n)ASAP 222 MusicXML + 519 연주로 학습 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| test는 20 movement·50 recording, 6명 작곡가 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| 정렬 Vienna(Gasser 2023), 실수 검출 STPD | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| score·performance 증강으로 데이터 10배 확장 | Chang 2025 | 13_analysis §상세 요약 | ✔ |
| GOAT: 일렉기타 DI 5.9시간 + 재앰핑 29.5시간 + Guitar Pro 탭, CC-BY 4.0 | Loth 외 2025 | 11_데이터셋_인벤토리 §GOAT — Guitar Octave Adventure Tablatures (ISMIR 2025) | ✔ |
| Guitar-TECHS: 기법·화음·스케일을 multi-mic + DI + per-string MIDI 픽업으로 녹음 | Pedroza 외 2025 | 11_데이터셋_인벤토리 §Guitar-TECHS — 기타 연주 기법 데이터셋 (ICASSP 2025) | ✔ |
| PianoVAM: 21시간 audio+video+MIDI+hand landmarks+fingering, 아마추어 Disklavier | Kim 외 2025 | 11_데이터셋_인벤토리 §PianoVAM — Piano Visual-Audio-MIDI (ISMIR 2025) | ✔ |
| Rach3: 장시간 피아노 리허설 MIDI(시간 미명시), dataset.rach3project.com | Morsi 외 2025 | 11_데이터셋_인벤토리 §Rach3 — A Computational Approach to Study Piano Rehearsals (ISMIR 2025) | ✔ |
| PDMX: 250,000편 이상 public domain MusicXML, audio 없음 | Long 외 2025 | 11_데이터셋_인벤토리 §PDMX — Public Domain Music XML (ICASSP 2025) | ✔ |
| Sheet Music Benchmark: multi-genre 시트 이미지 + Humdrum \*\*kern | Martinez-Sevilla 외 2025 | 11_데이터셋_인벤토리 §Sheet Music Benchmark — OMR 공통 벤치 (ISMIR 2025) | ✔ |
| Guitar-TECHS·PianoVAM·SMB 라이선스는 직접 확인 못함 | 아카이브 판정 | 11_데이터셋_인벤토리 §신규 데이터셋 6종 한눈에 | ? |
| 기존 (n)ASAP·MAESTRO·Batik·Vienna4x22·MeSA-13·SMR은 모두 피아노/키보드 | 아카이브 판정 | 11_데이터셋_인벤토리 §도입: 데이터셋의 무게가 알고리즘의 무게를 넘은 시점 | ○ |
| PDMX 합성(FluidSynth) 학습 모델은 in-the-wild에서 정확도 큰 폭 하락 가능 | 아카이브 판정 | 11_데이터셋_인벤토리 §사용 가이드: 데이터셋 결합의 두 가지 함정 | ○ |
| GOAT CC-BY 4.0은 attribution 요구, 학습 데이터 라이선스가 결과물 제한 | 아카이브 판정 | 11_데이터셋_인벤토리 §사용 가이드: 데이터셋 결합의 두 가지 함정 | ○ |
| JLTR 평가 데이터 MeSA-13 13곡 + SMR 60곡으로 작아 신뢰구간 넓음 | Bukey 2024 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| Matchmaker 평가: (n)ASAP·Batik·Vienna4x22 184 연주 | Park 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| Concerto Accompaniment Benchmark: GitHub HMC-MIR/PianoConcertoAccompaniment | Tsai 외 2025 | 10_landscape §Tsai-Dey-Özer-Müller 2025 — Dense-Sparse DTW (ICASSP 2025) | ○ |
| URMP(2018, Rochester) 바이올린 자원 존재, 2025-2026 신규 violin-paired 없음 | 아카이브 판정 | 11_데이터셋_인벤토리 §한계와 빈 공간 | ○ |
| Bach10 파트 조합: 단성 40+2중주 60+3중주 40+4중주 10 = 150곡 | Duan & Pardo 2011 | 17_입자필터_심층 §Duan & Pardo, ICASSP 2011 — 2차원 상태공간 (서지 확인) | ✔ |
| 쇼팽 마주르카 8곡×4연주(Mazurka Project 주석) 평가 | Montecchio & Cont 2011, Xiong 2012 | 17_입자필터_심층 §Montecchio & Cont, ICASSP 2011 — 통합 SMC 정렬 (서지 확인) | ✔ |
| RWC 재즈 20곡, N=1500, θ=15 bpm으로 평가 | Otsuka 외 2011 | 17_입자필터_심층 §Otsuka 외, EURASIP JASP 2011 — 로봇 합주용 입자필터 (서지 확인) | ✔ |
| MAPS 합성 25곡 + 실연주 25곡, 곡마다 10회 반복 실행 | Li & Duan 2015/2016 | 17_입자필터_심층 §Li & Duan, ISMIR 2015 / TASLP 2016 — 피아노 서스테인 (서지 확인) | ✔ |
| KRAISLER: 피아노-바이올린 이중주 20발췌 약 25분, CC-BY 4.0, zenodo 21082251 | Kim 외 2026 (TISMIR) | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ✔ |
| KRAISLER 주석 방식이 cello-follower 4중주 실녹음 정답의 선례 | 아카이브 판정 | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ○ |
| BSED: 베토벤 교향곡 20발췌×5버전 약 37분, BSD 62시간 학습셋 | Berendes 외 2026 (TISMIR) | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ○ |
| SKY-Piano 다중모달 피아노 연주(목록만) | Bae 외 2026 | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ? |
| PCD-K: 협주곡 피아노 파트 Disklavier 재연주 70발췌, zenodo 21528883 | Kim, Park, Nam 2026 | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ✔ |
| SheetSage-A2S: 61시간, 9,468클립 | Cummins 외 2026 | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ✔ |
| OSSQ-OMR: 현악4중주 116곡, 시스템 이미지 24,544장 | Kim, Liu, Valero-Mas, Jeong 2026 | 18_2026_하반기 §E. 데이터셋 (11번 문서 이후 추가분) | ○ |
| CODA: MSMD 테스트 94곡 중 66곡에 반복 131개 수작업 주석 | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| GAPS: 클래식 기타 14시간, 악보-오디오 정렬, 200명 이상, score following 용도 명시 | QMUL 2024 | 18_2026_하반기 §누락 보충 (2026-05 이전, 10번 문서에 없던 것) | ○ |
| YTSV: 1,300시간 이상 유튜브 악보 영상 쌍 | U-MusT (Sogang·SNU·CMU) | 18_2026_하반기 §G. foundation model / diffusion | ✔ |
| 공개셋은 본인 100% 권리만, GOAT·PDMX·FluidSynth 파생물은 내부 학습 전용 | 아카이브 판정 | 15_솔로개발자_로드맵 §4. 현실 절차 체크리스트 (첫 데이터 전 1회 동결) | ○ |
| 사용자 첼로 데이터 1년 100시간 이상이면 분야 최초 첼로 paired 데이터셋 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 D — 첼로 (4순위) | ○ |

## 12. 악보 이미지·OMR·sheet-image following

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| OMR은 오케스트라 악보 등 복잡한 자료에서 신뢰성이 낮음 | Dorfer 2016 | 02_analysis §상세 요약 | ✔ |
| 스태프 이미지 40×390과 스펙트로그램 40×136을 직접 정렬한 첫 시도 | Dorfer 2016 | 02_analysis §상세 요약 | ✔ |
| saliency상 네트워크가 note head와 음가 구분용 stem에 주목 | Dorfer 2016 | 02_analysis §비판적 평가 | ✔ |
| 스태프를 가로로 이어 붙인 연속 악보 스트림으로 페이지 확장 제안 | Dorfer 2016 | 02_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 악보 슬라이딩 윈도 160×512를 80×256으로 다운스케일 입력 | Dorfer 2018 | 03_analysis §방법론과 데이터 | ✔ |
| referring image segmentation으로 전체 페이지(393×278) 추적, U-Net+FiLM | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 정답 마스크는 폭 10 px, 높이는 staff 높이에 적응 | Henkel 2020 | 04_analysis §상세 요약 | ✔ |
| 페이지 전환은 단순 hack으로 처리 | Henkel 2020 | 04_analysis §비판적 평가 | ✔ |
| 스캔/사진 악보 평가 데이터셋 큐레이션은 future work | Henkel 2020 | 04_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 박스 폭 30 px 고정, 높이는 staff 높이, anchor (11,26)(11,34)(11,45) | Henkel 2021 | 05_analysis §상세 요약 | ✔ |
| bar/system 단위 계층 bbox로 정렬 라벨 없는 스캔·사진본 활용 제안 | Henkel 2021 | 05_analysis §실무적 함의와 응용 | ✔ |
| bootleg score에 measure detection 전처리 결합 | Bukey 2024 | 09_analysis §핵심 요약 | ✔ |
| 마디 이미지를 짧은 변 900px로 리사이즈 후 검출 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| OMR로 key/clef 안정적 획득 어려워 C major 가정 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| 단순 가정이 DTW 전역 최적성과 결합해 잘 동작 | Bukey 2024 | 09_analysis §상세 요약 | ✔ |
| bootleg 행렬 {0,1}^{48M×88}, 마디당 48행 | Bukey 2024 | 09_analysis §방법론과 데이터 | ✔ |
| measure detection은 Waloschek 2019 모델 사용 | Bukey 2024 | 09_analysis §선행연구와 비교 | ✔ |
| 손글씨·복잡한 volta/segno 검증 제한적 | Bukey 2024 | 09_analysis §비판적 평가 | ○ |
| OMR 자동 repeat 검출이 완전 자동화의 마지막 단계 | Bukey 2024 | 09_analysis §후속 연구와 핵심 참고문헌 | ○ |
| MusicXML→ABC 마디당 최대 64자, M3 bar patching | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| OMR 없이 sheet image로 score following 가능함을 첫 입증(단성, 단일 staff) | Dorfer 2016 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| 전체 페이지 audio-conditioned U-Net+FiLM, OMR 의존성 제거 | Henkel 2020 | 00_논문_관계도 §두 갈래 노선: 고전 신호 처리와 학습 기반의 분기 | ✔ |
| CYOLO bbox 회귀 + IR augmentation으로 합성-실제 갭 절반 | Henkel 2021 | 00_논문_관계도 §두 갈래 노선: 고전 신호 처리와 학습 기반의 분기 | ✔ |
| JLTR: bootleg score + measure detection으로 in-the-wild 스캔에서 작동 | Bukey 2024 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| JLTR·RUMAA는 score 디지털화를 가정해 OMR 정확도가 전체 정확도 천장 | 아카이브 판정 | 11_데이터셋_인벤토리 §Sheet Music Benchmark — OMR 공통 벤치 (ISMIR 2025) | ○ |
| CODA: 시스템→마디→음표 계단식 예측, CYOLO-SB 기준선 | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| FuSiLi: CLIP ViT·LAION-CLAP을 악보 이미지-오디오 쌍으로 미세조정해 프레임 정렬 | Bukey 외 2026 (FuSiLi) | 18_2026_하반기 §FuSiLi — 전역 지도로 국소 다중모달 정렬 (ISMIR 2026, 확인) | ✔ |
| Measure for Measure MCR: SMB zero-shot 6.38% vs 기존 SOTA 35.92% | Hornbogen & Valentin 2026 | 18_2026_하반기 §F. OMR — 사진→악보 | ✔ |
| 카메라 촬영 OpenScore Quartets 페이지 MCR 9.91% vs 기존 56.23% | Hornbogen & Valentin 2026 | 18_2026_하반기 §F. OMR — 사진→악보 | ✔ |
| MCR은 46샘플 인간 연구에서 수정 노력과 가장 잘 맞음, DINOv2 184M·PDMX 학습 | Hornbogen & Valentin 2026 | 18_2026_하반기 §F. OMR — 사진→악보 | ✔ |
| Measure for Measure arXiv·코드 미확인 | 아카이브 판정 | 18_2026_하반기 §F. OMR — 사진→악보 | ? |
| MCR은 score-ocr의 "곡당 남는 손일" 지표를 겨냥 | 아카이브 판정 | 18_2026_하반기 §F. OMR — 사진→악보 | ○ |
| OSSQ-OMR NED 3.6%(합성) / 5.9%(스캔) | Kim 외 2026 | 18_2026_하반기 §F. OMR — 사진→악보 | ○ |
| Debussy 자필: SOTA zero-shot SER 80% 초과, 미세조정 후 51~64% | Scheithauer 외 2026 | 18_2026_하반기 §F. OMR — 사진→악보 | ✔ |
| Smashcima 합성으로 실 필사본 OMR 도메인 적응 | Mayer 외 2026 | 18_2026_하반기 §F. OMR — 사진→악보 | ✔ |
| Audiveris 5.11.0(2026-07-11): 개인 shape set, L2 정규화, 두께 다른 오선 처리 | Audiveris 릴리스 | 18_2026_하반기 §F. OMR — 사진→악보 | ✔ |
| score-ocr은 Audiveris 5.10 기준이라 5.11.0으로 재측정 대상 | 아카이브 판정 | 18_2026_하반기 §F. OMR — 사진→악보 | ○ |
| U-MusT: 이미지·기호·오디오 단일 Transformer 상호 번역, OMR SER 24.58%→13.67% | U-MusT 2025/2026 | 18_2026_하반기 §G. foundation model / diffusion | ✔ |
| LISzT: OMR→웹오디오 실시간 추적 데모(제목만, 본문·수치 미확인) | Park & Nam 2026 (KSMI) | 18_2026_하반기 §Soft Online Time Warping + Kalman Tempo Filtering / LISzT 데모 (KSMI 2026, 목록만 확인) | ? |
| Henkel 본인 신작 없음, 방법론은 CODA가 이어받음 | 아카이브 판정 | 18_2026_하반기 §공백 재판정 (2026-10 기준) | ✔ |
| OMR이 반복 기호를 놓치면 반복/D.C. 추적 불가(구조 기호 정확 판독 필요) | 아카이브 판정 | 17_입자필터_심층 §인접 프로젝트 메모 (문헌 아님, 구조 관찰) | ○ |
| Transcoda, 손글씨 단성 전체 페이지 OMR(스니펫만) | Rosello 외 2026 등 | 18_2026_하반기 §F. OMR — 사진→악보 | ○ |
| 유튜브 탭 영상·탭 OCR 2026 학술 논문 없음, U-MusT/YTSV는 오선보 영상 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| 유일한 비학술 선례는 LLM vision으로 탭 영역 검출(youtube-guitar-tab-parser) | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ○ |

## 13. 공개 코드·라이브러리·도구

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| 공개 코드 저장소·실험 패키지 링크는 확인 못함(부재 단정 안 함) | Arzt 2016 | 01_analysis §방법론과 데이터 | ? |
| madmom·Lasagne 사용, 코드 URL 없음, 데모 영상은 Dropbox | Dorfer 2016 | 02_analysis §방법론과 데이터 | ✔ |
| 코드 github CPJKU/score_following_game, 환경은 OpenAI Gym | Dorfer 2018 | 03_analysis §서지 정보와 접근 범위 | ✔ |
| 코드 github CPJKU/audio_conditioned_unet, madmom 사용 | Henkel 2020 | 04_analysis §서지 정보와 접근 범위 | ✔ |
| 코드·데이터 CPJKU/cyolo_score_following 공개 예정 | Henkel 2021 | 05_analysis §서지 정보와 접근 범위 | ✔ |
| flippy-fyp 조직에 follower·정량/정성 testbench·QualScofo GPLv3 공개 | Lee 2022 | 06_analysis §서지 정보와 접근 범위 | ✔ |
| 코드 합계 약 10,145 LoC, 저장소별 README·Reproduction Suite | Lee 2022 | 06_analysis §방법론과 데이터 | ✔ |
| 코드 공개 명시 없음, Sync Toolbox(MrMsDTW+FB) 사용 | Zeitler 2024 | 07_analysis §방법론과 데이터 | ✔ |
| MIDIOgre MIT 공개(github.com/a-pillay/MIDIOgre) | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| Flippy는 Lee 공개 저장소 사용 | Pillay 2024 | 08_analysis §방법론과 데이터 | ✔ |
| 코드 github.com/irmakbky/jltr-alignment 공개 | Bukey 2024 | 09_analysis §서지 정보와 접근 범위 | ✔ |
| 웹 라벨링 UI, 결과는 logical-order JSON | Bukey 2024 | 09_analysis §방법론과 데이터 | ✔ |
| Matchmaker github.com/pymatchmaker/matchmaker 공개 | Park 2025 | 10_analysis §서지 정보와 접근 범위 | ✔ |
| partitura로 MusicXML/MIDI/MEI 입력, beat 위치 반환 | Park 2025 | 10_analysis §상세 요약 | ✔ |
| 실시간 멀티스레드 / 시뮬레이션 단일 스레드 모드 | Park 2025 | 10_analysis §방법론과 데이터 | ✔ |
| 의사코드·하이퍼파라미터 전부 실림, 코드 공개는 미확인 | Peter 2025 | 11_analysis §비판적 평가 | ? |
| Causal-AMT 코드 공개 본문 명시, baseline 제공 목적 | Hu 2025 | 12_analysis §서지 정보와 접근 범위 | ✔ |
| 코드 공개 명시 없음, M3·YourMT3+·TorchScale은 공개 | Chang 2025 | 13_analysis §방법론과 데이터 | ✔ |
| Matchmaker: partitura로 MusicXML/MIDI/MEI 입력, 두 줄 API, pip 설치 | Park 2025 | 00_논문_관계도 §세 번째 갈래: 2025년의 차세대 노선 | ✔ |
| 패키지명은 `pymatchmaker`, `matchmaker`는 다른 패키지 | 아카이브 판정 | 15_솔로개발자_로드맵 §[이번 주말] 생존 스파이크 — 두 게이트 | ○ |
| Matchmaker v0.3.0(2026-05-25): MusicXML 템포 파싱, Outer-product·Pitch-IOI HMM, parangonar, PF #56 | Matchmaker 릴리스 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| Korzeniowski식 PF follower #66(2026-08-31), methods.yaml 플러그인 #67(10-05) | Matchmaker 릴리스 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| PF에 공유 RNG로 실행 순서 따라 결과 달라지는 비결정성 버그, 수정됨 | Matchmaker 커밋 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| matchmaker_benchmark는 PR 한 번으로 제출하는 리더보드 | Matchmaker Benchmark | 18_2026_하반기 §Matchmaker Benchmark — 공개 리더보드 (확인) | ✔ |
| MEC 2026 정렬 워크숍 Colab: github.com/pymatchmaker/mec2026_alignment_workshop | Cancino-Chacón 외 2026 | 18_2026_하반기 §그 외 정렬 (확인 수준 병기) | ✔ |
| parangonar: github.com/sildater/parangonar (Precise and Simple 정렬 코드) | Peter, Hu, Widmer 2026 | 18_2026_하반기 §Precise and Simple Audio-to-Score Alignment (MEC 2026, 확인) | ✔ |
| Lee 2022 flippy: testbench+QualScofo+follower 약 1만 LoC, GPLv3 | Lee 2022 | 00_논문_관계도 §사용자가 직접 읽을 추천 순서 | ✔ |
| JLTR 코드 github irmakbky/jltr-alignment, 웹 라벨링 인터페이스 공개 | Bukey 2024 | 00_논문_관계도 §사용자가 직접 읽을 추천 순서 | ✔ |
| Henkel 2021 코드 공개 | Henkel 2021 | 00_논문_관계도 §사용자가 직접 읽을 추천 순서 | ✔ |
| Hu 2025 30 ms baseline 오픈소스 | Hu 2025 | 00_논문_관계도 §핵심 contribution 매트릭스 | ✔ |
| MIDIOgre(github a-pillay/MIDIOgre) MIDI augmentation 도구 | Pillay 2025 | 10_landscape §Pillay 2025 — HeurMiT 1D-CNN + 휴리스틱 (arXiv:2503.06348) | ○ |
| GOAT 코드+데이터 github JackJamesLoth/GOAT-Dataset | Loth 외 2025 | 11_데이터셋_인벤토리 §GOAT — Guitar Octave Adventure Tablatures (ISMIR 2025) | ✔ |
| Cowley 2025 코드 공개 여부 명시 안 됨 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 C — 바이올린 (3순위) | ? |
| STRAdi github seingreen/STRAdi Apache-2.0 v1.0.0, 전사 모델만·SF 미공개 | Lee·Park·Nam 2026 (STRAdi) | 18_2026_하반기 §STRAdi — 바이올린 실시간 전사 + 추적 (ISMIR 2026, 확인) | ✔ |
| CODA github ValleyC/CODA | Yang·Chen·Han 2026 (CODA) | 18_2026_하반기 §CODA — 계단식 불연속 인식 이미지 기반 추적 (ISMIR 2026, 확인) | ✔ |
| FuSiLi github irmakbky/fusili | Bukey 외 2026 (FuSiLi) | 18_2026_하반기 §FuSiLi — 전역 지도로 국소 다중모달 정렬 (ISMIR 2026, 확인) | ✔ |
| Time to Align! 3개 시간 도메인 정렬 Python 라이브러리 (github TimeToAlign/timetoalign) | Hentschel 외 2026 | 18_2026_하반기 §그 외 정렬 (확인 수준 병기) | ○ |
| ClassicPitch 오픈 웨이트 github yannik-venohr/classic-pitch | Venohr & Weiß 2026 | 18_2026_하반기 §C. 실시간·저지연 AMT | ✔ |
| Cosmodoit 연주-악보 정렬·특징 추출 파이프라인(목록만) | Guichaoua 외 2026 | 18_2026_하반기 §그 외 정렬 (확인 수준 병기) | ? |
| Montecchio Pd/Max `[audioalign]` 공개 여부 미확인 | Montecchio 2012 | 17_입자필터_심층 §공개 코드 현황 | ? |
| Duan–Pardo·Li–Duan·Otsuka·Korzeniowski RBPF 코드 찾지 못함 | 아카이브 판정 | 17_입자필터_심층 §공개 코드 현황 | ? |
| adamnemecek/ScoreFollower: iOS PF+KL 템플릿, 미완성·라이선스 없음 | 아카이브 판정 | 17_입자필터_심층 §공개 코드 현황 | ✔ |
| BeatNet·1D-StateSpace(mjhydri) Python 박자 추적 PF 공개 | Heydari 외 | 17_입자필터_심층 §공개 코드 현황 | ✔ |
| bayesbeat(flokadillo) MATLAB, 코드 BSD·모델 CC BY-NC-SA | Krebs 외 | 17_입자필터_심층 §공개 코드 현황 | ✔ |
| TheConcatenator(ctralie) Python 균일 점프 PF, 범용 SMC nchopin/particles·johnhw/pfilter | 아카이브 판정 | 17_입자필터_심층 §공개 코드 현황 | ✔ |
| 논문 저자 공식 Python PF 재구현 없음, Matchmaker가 사실상 유일 유지 Python PF follower | 아카이브 판정 | 17_입자필터_심층 §공개 코드 현황 | ○ |
| YTSV github MALerLab/youtube-score-video-dataset | U-MusT | 18_2026_하반기 §G. foundation model / diffusion | ✔ |
| youtube-guitar-tab-parser: 프레임 샘플링+LLM vision 탭 검출(Show HN, 스니펫) | rohin-garg | 18_2026_하반기 §후속 추적 결과 | ○ |

## 14. 페이지 터너 UI·제품 설계·권고

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| Concertgebouw 알펜 교향곡 공연에 악보·영상·설명 텍스트 동기화 시연 | Arzt 2016 | 01_analysis §핵심 요약 | ✔ |
| 2008 자동 페이지 넘김 논문이 실용 응용 가능성 실증 | Arzt 2016 | 01_analysis §선행연구와 비교 | ✔ |
| 비전은 데이터 준비 없이 어떤 클래식 악보든 작동하는 score following | Dorfer 2016 | 02_analysis §실무적 함의와 응용 | ✔ |
| 페이지 내 정밀 위치로 페이지 끝 도달 감지가 자연스럽게 구현 가능 | Henkel 2020 | 04_analysis §실무적 함의와 응용 | ○ |
| 박스 출력은 페이지 위 하이라이트를 그리기 쉬워 UI에 자연스러움 | Henkel 2021 | 05_analysis §실무적 함의와 응용 | ○ |
| TuneApp Conductor 두 변형을 실제 배포, 사용자 테스트에서 호평 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| 75-80% 정밀도는 APT·연주 분석 등 관대한 응용엔 충분하다고 저자 표현 | Lee 2022 | 06_analysis §비판적 평가 | ✔ |
| 정성 testbench(Electron/React)로 follower 출력을 악보 위에서 시각 검증 | Lee 2022 | 06_analysis §상세 요약 | ✔ |
| 동기화 파이프라인에서 raw feature를 기본 옵션으로 채택 권고 | Zeitler 2024 | 07_analysis §상세 요약 | ✔ |
| 템포 변동 작은 곡의 연습 동반·자동 페이지 넘김에 적합 | Pillay 2024 | 08_analysis §실무적 함의와 응용 | ○ |
| IMSLP 악보+녹음 마디 정렬로 대규모 데이터셋 구축 | Bukey 2024 | 09_analysis §실무적 함의와 응용 | ○ |
| 라벨링 시간을 곡당 수십 분에서 페이지당 ~6초로 단축 | Bukey 2024 | 09_analysis §실무적 함의와 응용 | ○ |
| mm.run() 위치를 페이지 경계와 비교해 페이지 터너 구현 | Park 2025 | 10_analysis §실무적 함의와 응용 | ○ |
| 174 ms 지연은 페이지 터너·자막엔 그대로 사용 가능 | Peter 2025 | 11_analysis §핵심 요약 | ✔ |
| ≤100 ms 88%로 자막·교습 시각화에 즉시 사용 가능 | Peter 2025 | 11_analysis §실무적 함의와 응용 | ○ |
| 페이지 터너엔 지연 단축 이득 작음 | Hu 2025 | 12_analysis §실무적 함의와 응용 | ○ |
| 위치·정오·실수를 한 번에 알려주는 학습 도구 가능 | Chang 2025 | 13_analysis §실무적 함의와 응용 | ○ |
| offline 정렬 결과를 실시간 follower 학습 데이터로 활용 | Chang 2025 | 13_analysis §실무적 함의와 응용 | ○ |
| 피아노 MVP: Matchmaker + OLTW-Arzt+LSE + JLTR 반복 UX, MusicXML 업로드 | 아카이브 판정 | 12_페이지터너_권고 §시나리오 A — 피아노 (1순위 MVP) | ○ |
| 페이지 경계 N 마디 전부터 준비: 마지막 마디 시작 시 로드, 마지막 박자 진입 시 fade-in | 아카이브 판정 | 12_페이지터너_권고 §페이지 전환 트리거 설계 | ○ |
| 사용자 녹음을 서버로 보내지 않는 on-device 처리 권장 | 아카이브 판정 | 12_페이지터너_권고 §데이터 프라이버시 | ○ |
| 단계 로드맵: 피아노 MVP 4-6주, JLTR UX 2-3주, OMR 4-6주, 기타 fine-tune 6-8주 | 아카이브 판정 | 12_페이지터너_권고 §단계별 개발 로드맵 (권장) | ○ |
| 페이지 터너 user study는 N≥15 권장, 학술 기여 지점 | 아카이브 판정 | 12_페이지터너_권고 §분야 기여로 환원 가능한 지점 | ○ |
| 손 랜드마크로 페이지 마지막 마디 도달 시 미리 넘김 가능 | 아카이브 판정 | 11_데이터셋_인벤토리 §PianoVAM — Piano Visual-Audio-MIDI (ISMIR 2025) | ○ |
| 보수 MVP 아키텍처 A 채택 옵션 1·8·33·34·35 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §아키텍처 A: 보수적 MVP (4-6주, 단독 개발자 가능) | ○ |
| 워치 햅틱: 페이지 전환 30초 전 약한 진동, 10초 전 강한 진동 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 33. 스마트워치 햅틱 알림 ★★ G·C | ○ |
| 시선 추적 페이지 터너(Tabone 2020)의 후속이 18개월 동안 없음 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 32. 시선 추적 (Tabone 2020 후속) ★★★★ G·C | ○ |
| 원격 친구/선생님 페이지 넘김을 모든 옵션의 비교 baseline으로 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 54. 친구 / 선생님 원격 페이지 터너 ★ G·C | ○ |
| 확률 분포 출력("마디 12 70%")으로 정직한 불확실성 UX 제안 | 아카이브 판정 | 13_일렉기타_첼로_옵션 §옵션 22. Symbolic music regression [엽기 약간] ★★★★ G·C | ○ |
| MVP 5조건: 2~4페이지 완주, 점프 1회+, 자동 전환, 1초 복구, 5회 중 4회 | 아카이브 판정 | 14_제작_로드맵 §MVP의 정의 | ○ |
| MVP 지표: 완주 5회 중 4회, 전환 ±2초, 복구 1초, 라벨링 페이지당 6초 이하, 깨짐 0 | 아카이브 판정 | 14_제작_로드맵 §MVP 검증 지표 (구체적) | ○ |
| MVP에서 안 함: OMR·AMT fine-tune·무대·카메라/IMU·distortion·모바일 | 아카이브 판정 | 14_제작_로드맵 §MVP에서 명시적으로 *안 하는* 것 | ○ |
| 시연곡 조건: clean tone, 비브라토 적음, 자유 템포 작음, 페이지 끝 fermata 없음 | 아카이브 판정 | 14_제작_로드맵 §MVP가 *못 할 가능성이 높은* 경우 — 미리 인정 | ○ |
| 1주차 검증: Matchmaker가 논문 보고 ASAP 정확도 ±5% 안인지 확인 | 아카이브 판정 | 14_제작_로드맵 §6주 단계별 작업 목록 | ○ |
| 최소 ship선 = 추적 시각화 + 수동 전환으로 끊김 없이 완주 | 아카이브 판정 | 15_솔로개발자_로드맵 §0. 한 줄 전략과 성공의 정의 | ○ |
| 핵심 지표는 추적 정확도가 아닌 곡당 사용자 보정 횟수·완주율 | 아카이브 판정 | 15_솔로개발자_로드맵 §0. 한 줄 전략과 성공의 정의 | ○ |
| 수동 fallback(발페달/음성)을 1차 시스템으로 먼저 확보 | 아카이브 판정 | 15_솔로개발자_로드맵 §[2단계 1~3개월] 2페이지 + 수동 안전망 먼저 | ○ |
| 누적 3개월 어떤 악기로도 5중3 미달이면 제품 중단, 데이터/user study로 피벗 | 아카이브 판정 | 15_솔로개발자_로드맵 §[2단계 1~3개월] 2페이지 + 수동 안전망 먼저 | ○ |
| 게이트0b 실패 시 chroma→CQT/NSGT(Lee Flippy)로 Processor 특징 한 줄 교체 | 아카이브 판정 | 15_솔로개발자_로드맵 §[이번 주말] 생존 스파이크 — 두 게이트 | ○ |
| user study는 인간대상연구, IRB 리드타임 4~8주, 불가 시 N=1 autoethnography | 아카이브 판정 | 15_솔로개발자_로드맵 §4. 현실 절차 체크리스트 (첫 데이터 전 1회 동결) | ○ |
| 8~12h/주에서는 active 1 + queued 1 WIP 상한 | 아카이브 판정 | 15_솔로개발자_로드맵 §2. 세 트랙의 교차 (병렬 환상 제거) | ○ |
| 페이지 넘김을 시선으로 정할 때 첼리스트 시선 연구가 유일한 첼로 자료 | 아카이브 판정 | 18_2026_하반기 §H. 페이지터너·악보 읽기 인터페이스 | ○ |
| SMC 2026 eye-tracking 악보 읽기 파일럿(제목만 확인) | Schneider 2026 | 18_2026_하반기 §H. 페이지터너·악보 읽기 인터페이스 | ? |
| 2026 하반기 변화는 12·15번 권고를 바꾸지 않음, 재료만 추가 | 아카이브 판정 | 18_2026_하반기 §결론 — 5개월의 한 줄과 응용 권고 | ○ |

## 15. 공백·미해결 질문·한계

| 주장/수치 | 출처 | 위치 | 등급 |
|---|---|---|---|
| 원본 PDF 403/404로 직접 열람 실패, 색인 조각(ix, p.46·47·67·87·98)으로 재구성 | Arzt 2016 | 01_analysis §후속 연구와 핵심 참고문헌 | ? |
| 영문 abstract 전체는 직접 확인되지 않음 | Arzt 2016 | 01_analysis §서지 정보와 접근 범위 | ? |
| 실제 연주를 참조로 써도 off-line alignment·symbolic score가 필요 | Arzt 2016 | 01_analysis §비판적 평가 | ✔ |
| 정량평가는 피아노·서양 고전 canon 중심으로 치우침 | Arzt 2016 | 01_analysis §방법론과 데이터 | ○ |
| 재즈·자유 템포·비서양·불완전 스코어엔 바로 일반화 어려움 | Arzt 2016 | 01_analysis §비판적 평가 | ○ |
| 단성·단일 스태프·피아노·학습 템포 근처에서만 작동하는 proof-of-concept | Dorfer 2016 | 02_analysis §비판적 평가 | ✔ |
| 실연 평가는 정성 시연과 1곡 단일 수치뿐, 신뢰 구간 불명 | Dorfer 2016 | 02_analysis §비판적 평가 | ○ |
| 평가 전부 합성 오디오, 실제 연주 일반화 미검증 | Dorfer 2018 | 03_analysis §비판적 평가 | ○ |
| 실제 오디오에 마디 단위 보상 미세조정은 언급만, 실증 안 함 | Dorfer 2018 | 03_analysis §비판적 평가 | ✔ |
| 윈도 폭 b·픽셀 속도 단위 민감도 분석 없음 | Dorfer 2018 | 03_analysis §비판적 평가 | ○ |
| 합성 오디오에 overfit, 룸 녹음 일반화 실패를 저자 인정 | Henkel 2020 | 04_analysis §비판적 평가 | ✔ |
| 반복 구조·LSTM 오디오 이력 용량 분석·리버브 증강이 future work | Henkel 2020 | 04_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 합성–실제 갭의 추가 축소엔 실제 데이터 직접 활용이 필요(저자 인정) | Henkel 2021 | 05_analysis §비판적 평가 | ✔ |
| 5초 임계값에선 OMR이 여전히 경쟁력, IR로도 닫히지 않은 영역 | Henkel 2021 | 05_analysis §비판적 평가 | ○ |
| 박스 폭 30 px는 임의 상수라 박스 폭의 의미론이 약함 | Henkel 2021 | 05_analysis §비판적 평가 | ○ |
| 코로나로 실연 환경 테스트 못함, 즉흥·잡음·마이크 입력 미다룸 | Lee 2022 | 06_analysis §비판적 평가 | ✔ |
| MIREX 우월성은 비공개 데이터 탓에 직접 아닌 간접 비교 | Lee 2022 | 06_analysis §비판적 평가 | ○ |
| sliCQ·OLTW·ASM 모두 기존 기법, 새로움은 결합·구현·공개 | Lee 2022 | 06_analysis §비판적 평가 | ○ |
| 저음역 처리·onset 검출 개선 미적용, OLTW backward path 탐색 등이 future | Lee 2022 | 06_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 피아노 한정 평가, 비피아노 일반화는 future work | Zeitler 2024 | 07_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| transitive consistency 평가는 필요조건일 뿐 충분조건 아님(저자 인정) | Zeitler 2024 | 07_analysis §비판적 평가 | ✔ |
| T3 fine-tuning은 BPSD 단일 데이터셋에서만 입증 | Zeitler 2024 | 07_analysis §비판적 평가 | ○ |
| 이상 조건에서도 θ=100 ms misalign 77%, 실용 부족 | Pillay 2024 | 08_analysis §비판적 평가 | ✔ |
| 휴리스틱이 곡별 튜닝 요구, 범용 목표 미달 | Pillay 2024 | 08_analysis §비판적 평가 | ○ |
| BasicPitch 포함 end-to-end 성능은 미지수 | Pillay 2024 | 08_analysis §비판적 평가 | ○ |
| 완전 자동 아님, 인간 jump 라벨 필수 | Bukey 2024 | 09_analysis §비판적 평가 | ✔ |
| 평가 소규모(MeSA-13 13곡, SMR 60곡) | Bukey 2024 | 09_analysis §비판적 평가 | ○ |
| 조성 멀거나 전조 잦은 곡에서 pitch 가정 실패 가능 | Bukey 2024 | 09_analysis §비판적 평가 | ○ |
| non-Western·비-피아노 일반화는 윤리 섹션 명시 한계 | Bukey 2024 | 09_analysis §후속 연구와 핵심 참고문헌 | ✔ |
| 평가 전부 솔로 피아노 | Park 2025 | 10_analysis §비판적 평가 | ✔ |
| Vienna4x22는 4작품뿐, 작품 일반화 신중 | Park 2025 | 10_analysis §비판적 평가 | ○ |
| Batik 30곡·1인 피아니스트, 통계 신뢰도 한계 | Peter 2025 | 11_analysis §비판적 평가 | ○ |
| multi-reference(Arzt-Widmer 2015) 미사용 | Peter 2025 | 11_analysis §비판적 평가 | ○ |
| MAESTRO 단일 평가, in-the-wild 강건성 future work | Hu 2025 | 12_analysis §비판적 평가 | ✔ |
| 30 ms 알고리즘 지연이 실제 30 ms 안에 드는지 미검증 | Hu 2025 | 12_analysis §비판적 평가 | ○ |
| 1분 넘는 오디오에서 정렬·실수 검출 정확도 급락 | Chang 2025 | 13_analysis §비판적 평가 | ✔ |
| repeat 평가는 K331·D783 두 곡뿐 | Chang 2025 | 13_analysis §비판적 평가 | ○ |
| score-free offset 약점은 offset annotation 일관성 탓(저자) | Chang 2025 | 13_analysis §비판적 평가 | ✔ |
| online(streaming) RUMAA 가능 여부는 열린 질문 | Chang 2025 | 13_analysis §후속 연구와 핵심 참고문헌 | ○ |
| 2025~2026-05 18개월 동안 첼로 전용 follower 한 편도 없음 | 아카이브 판정 | 10_landscape §공백 영역 — 2025-2026에 *없는* 것들 | ○ |
| 2026-10 기준 첼로 following 논문 여전히 없음 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| 일렉기타 follower는 LBD #482 시연뿐 정식 논문 없음 | 아카이브 판정 | 10_landscape §공백 영역 — 2025-2026에 *없는* 것들 | ○ |
| GOAT·Guitar-TECHS 사용 기타 정렬·following 논문 없음 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| 비피아노 정량 follower: 바이올린은 메워짐(STRAdi), 첼로·기타는 안 메워짐 | 아카이브 판정 | 18_2026_하반기 §공백 재판정 (2026-10 기준) | ✔ |
| 첼로 전용 paired audio-score 데이터셋 없음 | 아카이브 판정 | 11_데이터셋_인벤토리 §한계와 빈 공간 | ○ |
| 대규모 violin 자원 부족, 2025-2026 신규 violin-paired 자원 없음 | 아카이브 판정 | 11_데이터셋_인벤토리 §한계와 빈 공간 | ○ |
| latency-aware 실시간 평가 표준 데이터셋 부재 | 아카이브 판정 | 11_데이터셋_인벤토리 §한계와 빈 공간 | ○ |
| chamber music·대규모 ensemble 자원 부족 | 아카이브 판정 | 11_데이터셋_인벤토리 §한계와 빈 공간 | ○ |
| 13편 어디에도 chroma OLTW 비-피아노 정량 없음(최대 리스크) | 아카이브 판정 | 15_솔로개발자_로드맵 §3. 기술 리스크와 대비책 (정직하게) | ○ |
| MERT/MuQ 오디오-악보 정렬 논문 없음, FuSiLi(이미지-오디오)로 부분적만 메워짐 | 아카이브 판정 | 18_2026_하반기 §공백 재판정 (2026-10 기준) | ✔ |
| diffusion 기반 alignment 없음(확산은 탭 전사·비트·반주 생성에만) | 아카이브 판정 | 18_2026_하반기 §공백 재판정 (2026-10 기준) | ✔ |
| 페이지 터너 user study 없음, NIME·CHI·UIST 2025에도 없음 | 아카이브 판정 | 10_landscape §공백 영역 — 2025-2026에 *없는* 것들 | ○ |
| 페이지 터너 user study 2026-10에도 안 메워짐, CODA도 사용자 연구 없음 | 아카이브 판정 | 18_2026_하반기 §공백 재판정 (2026-10 기준) | ✔ |
| CHI/UIST 2026 페이지터너 논문 미확인(찾지 못함) | 아카이브 판정 | 18_2026_하반기 §H. 페이지터너·악보 읽기 인터페이스 | ? |
| Henkel·IRCAM 라인 침묵 지속, CMU 라인은 깨짐 | 아카이브 판정 | 18_2026_하반기 §공백 재판정 (2026-10 기준) | ✔ |
| 13편 중 재즈·팝·비서양·즉흥 본격 평가 없음 | 아카이브 판정 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ○ |
| ≤0.05초 80%+룸 녹음+실시간 동시 충족 주장 논문 없음 | 아카이브 판정 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ○ |
| 합성-실제 도메인 갭 미해결(Henkel 2021 룸 0.563 vs 합성 0.830) | Henkel 2021 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ✔ |
| 반복·점프 자동 처리("사람을 빼는" 한 발자국) 여전히 열림 | 아카이브 판정 | 00_논문_관계도 §풀린 문제와 풀리지 않은 문제 | ○ |
| score following 평가 방법 자체가 아직 닫히지 않은 문제 | 아카이브 판정 | 00_논문_관계도 §사용자가 직접 읽을 추천 순서 | ○ |
| 2015~2026 입자필터 주 추론기 새 SF 논문 못 찾음("없다"가 아니라 "못 찾음") | 아카이브 판정 | 17_입자필터_심층 §먼저 결론 | ? |
| 2015~2026 바이올린·성악 입자필터 score following 논문 검색에서 못 찾음 | 아카이브 판정 | 17_입자필터_심층 §미확인으로 남긴 것 | ? |
| 입자필터로 조율 소리를 다룬 논문 못 찾음 | 아카이브 판정 | 17_입자필터_심층 §미확인으로 남긴 것 | ? |
| 조율(악보 밖 소리)은 PF·비PF 모두 근거 없음 | 아카이브 판정 | 17_입자필터_심층 §종합 | ? |
| 자기 파트 악보만으로 섞인 소리에서 한 파트 추적, 현악4중주 실녹음 첼로 파트 추적 설정 못 찾음 | 아카이브 판정 | 17_입자필터_심층 §(e) 4중주(다른 파트 소리 섞임) | ? |
| Montecchio ICASSP 원문 평가 세부 미확인(학위논문 수치로 대체) | 아카이브 판정 | 17_입자필터_심층 §미확인으로 남긴 것 | ? |
| Korzeniowski 2013 입자 수 본문에 없음 | 아카이브 판정 | 17_입자필터_심층 §미확인으로 남긴 것 | ? |
| Hainsworth와 Krebs TASLP 수치 미확인 | 아카이브 판정 | 17_입자필터_심층 §미확인으로 남긴 것 | ? |
| Otsuka "ICASSP/ISMIR 2010판" 존재 여부 미확인, IROS 2009 PF 여부 미확인 | 아카이브 판정 | 17_입자필터_심층 §미확인으로 남긴 것 | ? |
| PF 출력 정책을 OLTW에 이식 가능하다는 논문 근거 없음 | 아카이브 판정 | 17_입자필터_심층 §(a) 이탈(틀림·건너뜀) 중 추정 위치가 들썩임 | ○ |
| align.step 무장 게이트 대 PF 초기화 비교 자료 없음 | 아카이브 판정 | 17_입자필터_심층 §(b) 시작점 검출 | ○ |
| 임의 건너뜀에 대한 정량 근거는 Xiong 2012(ICMC 단편) 하나뿐 | 아카이브 판정 | 17_입자필터_심층 §(c) 반복/D.C. 점프 | ○ |
| STRAdi·Kusaka-Maezawa·Measure for Measure·Thibaud의 arXiv판·상세 수치표 못 찾음 | 아카이브 판정 | 18_2026_하반기 §조사 한계 | ? |
| arXiv 2026-05~10 cs.SD 전체를 한 건씩 훑지 못함(키워드·저자 검색으로 보완) | 아카이브 판정 | 18_2026_하반기 §조사 한계 | ? |
| RUMAA 후속·Primenta 다악기 정식 논문 미발견 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| Cowley GP+HMM 후속 미발견 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| Guitar-TECHS 사용 2026 논문 미확인 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ? |
| 유튜브 탭 영상·탭 OCR 2026 학술 논문 없음 | 아카이브 판정 | 18_2026_하반기 §후속 추적 결과 | ✔ |
| ISMIR 2026 LBD 목록 미공개(lbds.json 빈 배열) | 아카이브 판정 | 18_2026_하반기 §학회별 현황 | ✔ |
| ICASSP 2026 음악 논문 57편 중 score following·정렬 없음, SMC 2026도 없음 | 아카이브 판정 | 18_2026_하반기 §학회별 현황 | ✔ |
| DAFx 2026 관련 논문 미확인, CMMR 2026 개최 여부 미확인 | 아카이브 판정 | 18_2026_하반기 §학회별 현황 | ? |
| Matchmaker Zenodo판(17706341)이 Park 2025와 같은 작업인지 확인 필요 | 아카이브 판정 | 18_2026_하반기 §누락 보충 (2026-05 이전, 10번 문서에 없던 것) | ? |
| Matchmaker 벤치 평가 fold는 피아노 3개 데이터셋뿐, 비피아노 미포함 | 아카이브 판정 | 18_2026_하반기 §Matchmaker Benchmark — 공개 리더보드 (확인) | ✔ |
| Jiang-Maezawa-Xia 2025는 유료라 PDF 확보 불가, 분석 경량 | 아카이브 판정 | 10_landscape §Jiang-Maezawa-Xia 2025 — Improvised Performance Following (ICASSP 2025) | ? |
| Band-Split RNN AMT가 평가한 기타 데이터셋 미확인 | 아카이브 판정 | 18_2026_하반기 §C. 실시간·저지연 AMT | ? |
| Precise and Simple은 피아노 필터뱅크라 첼로 적용엔 검증 필요 | 아카이브 판정 | 18_2026_하반기 §Precise and Simple Audio-to-Score Alignment (MEC 2026, 확인) | ○ |
| MERT/MuQ를 비-피아노 SF에 처음 적용하는 것이 가장 큰 미개척 기회, 2026-10에도 유효 | 아카이브 판정 | 18_2026_하반기 §공백 재판정 (2026-10 기준) | ○ |

