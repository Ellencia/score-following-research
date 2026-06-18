# Score Following 연구 프로젝트 (13편 정리 + 페이지 터너 기획)

> **악보 따라가기(Score Following)** 분야 논문 13편을 분석·해설하고, 그 결과를 자동 페이지 넘김(page-turner) 애플리케이션 제작 계획으로 응축한 단독 웹 아카이브입니다.
>
> *A self-contained web archive analyzing 13 Score Following papers (2016–2025) and distilling them into a page-turner application roadmap. Korean.*

## 🔗 바로 보기 (어디서든)

**👉 https://ellencia.github.io/score-following-research/**

브라우저만 있으면 PC·모바일 어디서든 열람할 수 있습니다. 설치 불필요.

- **논문 13편**: 각 논문마다 *분석 보고서* + *비전공자 해설* 두 가지 글
- **종합 문서 5종**: 관계도와 흐름 · 마스터 용어집 · 2025–2026 분야 동향 · 데이터셋 인벤토리 · 적용 권고
- **인터랙티브**: 논문 관계 마인드맵, 용어 위에 마우스를 올리면 뜨는 용어 카드, Mermaid 다이어그램

## 🎧 시간이 없을 때 — 듣기용 오디오 대본

읽을 시간이 없다면 [오디오_대본.md](오디오_대본.md)를 음성으로 들으세요. 약 25~30분 분량으로 분야 전체를 귀로 흡수할 수 있도록 구어체로 썼습니다. (TTS 변환 방법은 파일 상단 안내 참고)

## 📚 무엇을 다루나 — 한눈에

악보 따라가기는 "사람이 연주하면 컴퓨터가 악보의 현재 위치를 실시간으로 짚어내는" 기술입니다. 이 아카이브는 13편을 **세 갈래**로 정리합니다.

1. **고전 신호처리 노선** (DTW/OLTW) — Arzt 2016, Lee 2022, Zeitler 2024, Bukey 2024
2. **학습 기반 노선** (CNN → RL → U-Net → YOLO) — Dorfer 2016/2018, Henkel 2020/2021, Pillay 2024 (대부분 JKU 한 그룹의 5년 연속작)
3. **2025 차세대 4부품** — Matchmaker(평가 라이브러리) · Transcribe-and-Track(패러다임) · Low-Latency AMT(<30 ms) · RUMAA(transformer + 반복기호)

관통하는 한 줄: **"audio OLTW가 정확도 plateau에 도달했고, transcribe-then-track으로 패러다임이 이동했다."**

그리고 이 정리는 결국 **일렉기타 clean-tone 페이지 터너 MVP(6주)** 라는 실용 목표로 수렴합니다 ([14_제작_로드맵.md](14_제작_로드맵.md)).

## 🖥️ 로컬에서 실행하기

웹앱은 문서를 `templates/`에서 동적으로 `fetch`하므로 `index.html`을 파일로 직접 열면 동작하지 않습니다. **로컬 서버**가 필요합니다.

```bash
# 저장소 폴더에서
python -m http.server 8000
# 그 다음 브라우저에서 http://localhost:8000 접속
```

또는 `npx http-server` 도 됩니다.

## 📂 저장소 구조

```
index.html                  # 단독 웹앱 (진입점)
glossary.js                 # 용어집 hover 카드 데이터
js/mermaid.min.js           # 다이어그램 렌더러
css/styles.css              # 스타일
templates/                  # 모달에 표시되는 문서 (논문별 analysis/explanation + topic 5종)
papers/                     # 논문별 정리 폴더 (분석_보고서.docx, 비전공자_해설.docx, 원본.pdf)
00~14_*.md / *.docx         # 종합 문서 원본 (Markdown + Word)
오디오_대본.md               # 듣기용 나레이션 대본
Tier 1/2/3/                 # 중요도별 원문 PDF
accessibility_audit.md      # 접근성 점검 기록
```

## 📄 출처와 이용

본 아카이브의 **분석·해설·종합 문서**는 본 프로젝트의 창작물입니다. 포함된 **논문 PDF**는 각 저자·학회에 저작권이 있으며(대부분 arXiv 공개본), 연구·학습 목적의 참고용으로 수록했습니다. 원저작권자의 권리가 우선합니다.

분석 내용은 각 논문이 명시한 사실에 근거했으나, 해석·요약 과정의 오류 가능성이 있으니 인용 시 원문을 확인하시기 바랍니다.
