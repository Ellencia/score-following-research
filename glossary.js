// =============================================================================
// 마스터 용어집 — 100+ 항목 (00_마스터_용어집.md에서 자동 생성)
// =============================================================================
//
// 구조:
//   key      : <dfn data-term="..."> 키. 자동 마킹의 표적.
//   label    : 카드 헤더에 표시되는 한글 + 영문 정식 명칭
//   short    : 한 줄 요약(첫 문장)
//   long     : 본문 설명(여러 문장)
//   category : §섹션 번호와 이름
//   papers   : 등장 논문 번호 목록(문자열)
//   aliases  : 자동 마킹 시 매칭할 한·영 표기 모음
//
// 자동 마킹 규칙:
//   - 본문 로드 시점에 .auto-glossary 컨테이너 안에서 *첫 등장*만 자동 래핑
//   - 이미 <dfn>·<code>·<a>·<h1-3>·<pre>·<kbd> 안에 있는 텍스트는 건너뜀
// =============================================================================

window.__SF_GLOSSARY = {

  "Score Following": {
    label: "악보 따라가기 / 음악 추적 · Score Following / Music Tracking",
    short: "컴퓨터가 마이크로 들어오는 라이브 연주를 들으며, 매 순간 연주자가 악보의 어느 마디·어느 음을 치고 있는지 실시간으로 짚어내는 기술. 노래방 화면이 가사를 따라가는 것의 음악 버전이라고 보면 된다.",
    long:  "<p>컴퓨터가 마이크로 들어오는 라이브 연주를 들으며, 매 순간 연주자가 악보의 어느 마디·어느 음을 치고 있는지 실시간으로 짚어내는 기술. 노래방 화면이 가사를 따라가는 것의 음악 버전이라고 보면 된다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "1,2,3,4,5,6,7,8",
    aliases: ["Score Following","Music Tracking","악보 따라가기","음악 추적"]
  },

  "Score Identification": {
    label: "작품 식별 · Score Identification",
    short: "들리는 음악이 도대체 어느 작품인지 자체를 알아내는 단계. 곡명을 모를 때 도서관에서 곡 제목부터 찾아주는 사서의 일에 해당한다.",
    long:  "<p>들리는 음악이 도대체 어느 작품인지 자체를 알아내는 단계. 곡명을 모를 때 도서관에서 곡 제목부터 찾아주는 사서의 일에 해당한다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "1",
    aliases: ["Score Identification","작품 식별"]
  },

  "Score Position": {
    label: "악보 위치 · Score Position",
    short: "특정 작품 안에서의 정확한 마디·박자 좌표. 지도로 치면 도시 이름을 넘어 그 도시의 어느 골목 어느 번지수까지 찍는 일이다.",
    long:  "<p>특정 작품 안에서의 정확한 마디·박자 좌표. 지도로 치면 도시 이름을 넘어 그 도시의 어느 골목 어느 번지수까지 찍는 일이다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "1,2,4,5,8",
    aliases: ["Score Position","악보 위치"]
  },

  "Audio-to-Score Alignment": {
    label: "오디오–악보 정렬 · Audio-to-Score Alignment",
    short: "녹음된 음악과 악보 위 위치를 짝짓는 일.",
    long:  "<p>녹음된 음악과 악보 위 위치를 짝짓는 일. 영화의 자막을 장면과 맞추는 일의 음악 버전이다. 오프라인 정렬(녹음 전체를 보고 사후에 가장 정확하게 맞춤, 본 분야의 9번째 논문 Bukey 2024가 대표)과 온라인 정렬(실시간 score following)로 나뉜다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "1,2,6,7,9",
    aliases: ["Audio-to-Score Alignment","오디오–악보 정렬"]
  },

  "Audio Synchronization": {
    label: "오디오 동기화 · Audio Synchronization",
    short: "같은 곡의 두 녹음(또는 악보와 녹음)을 같은 시간자 위에 올려놓고, \"여기 이 시점이 저쪽 그 시점\"이라고 대응시키는 작업.",
    long:  "<p>같은 곡의 두 녹음(또는 악보와 녹음)을 같은 시간자 위에 올려놓고, \"여기 이 시점이 저쪽 그 시점\"이라고 대응시키는 작업.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "7",
    aliases: ["Audio Synchronization","오디오 동기화"]
  },

  "APT": {
    label: "자동 페이지 넘김 · Automatic Page Turning (APT)",
    short: "손이 바쁜 연주자를 위해 태블릿이 알아서 악보를 넘겨주는 기능. 이 분야의 가장 친숙한 응용 중 하나다.",
    long:  "<p>손이 바쁜 연주자를 위해 태블릿이 알아서 악보를 넘겨주는 기능. 이 분야의 가장 친숙한 응용 중 하나다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "1,3,4,5,6,8",
    aliases: ["Automatic Page Turning (APT)","Automatic Page Turning","APT","자동 페이지 넘김"]
  },

  "Computer Accompaniment": {
    label: "컴퓨터 반주 · Computer Accompaniment",
    short: "사람이 솔로를 치면 컴퓨터가 반주를 따라 쳐 주는 시스템. 1984년 이 분야의 출발점이 되었다.",
    long:  "<p>사람이 솔로를 치면 컴퓨터가 반주를 따라 쳐 주는 시스템. 1984년 이 분야의 출발점이 되었다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "1,3,5,6,8",
    aliases: ["Computer Accompaniment","컴퓨터 반주"]
  },

  "Polyphonic Music": {
    label: "다성 음악 · Polyphonic Music",
    short: "여러 성부 또는 여러 음이 동시에 울리는 음악. 피아노가 대표적이다. 단성 매칭만으로는 따라잡기 어렵다.",
    long:  "<p>여러 성부 또는 여러 음이 동시에 울리는 음악. 피아노가 대표적이다. 단성 매칭만으로는 따라잡기 어렵다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "3,5,6,8",
    aliases: ["Polyphonic Music","다성 음악"]
  },

  "Monophonic Music": {
    label: "단성 음악 · Monophonic Music",
    short: "한 번에 한 음만 울리는 멜로디. 누가 휘파람을 부는 상황을 떠올리면 된다. 트럼펫·플루트·사람 목소리가 대표적이다.",
    long:  "<p>한 번에 한 음만 울리는 멜로디. 누가 휘파람을 부는 상황을 떠올리면 된다. 트럼펫·플루트·사람 목소리가 대표적이다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "2,3,8",
    aliases: ["Monophonic Music","단성 음악"]
  },

  "In-the-Wild": {
    label: "자연 환경 · In-the-Wild",
    short: "합성 MIDI나 깨끗한 스튜디오 녹음 같은 인공 데이터가 아니라, 실제 콘서트 녹음 + 사람이 스캔한 종이 악보처럼 잡음과 변형이 섞인 진짜 데이터를 가리키는 표현.",
    long:  "<p>합성 MIDI나 깨끗한 스튜디오 녹음 같은 인공 데이터가 아니라, 실제 콘서트 녹음 + 사람이 스캔한 종이 악보처럼 잡음과 변형이 섞인 진짜 데이터를 가리키는 표현. Bukey 2024는 이 환경의 오프라인 정렬을 목표로 한다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "9",
    aliases: ["In-the-Wild","자연 환경"]
  },

  "Repeat Sign": {
    label: "반복 기호 / 점프 · Repeat Sign / Jump",
    short: "악보에서 \"이 부분을 다시 한 번\", \"처음으로 돌아가서\"를 뜻하는 기호. 같은 마디 그림이 시간선상 두 번 이상 연주되게 만들어, 정렬 시 \"녹음의 어느 구간이 몇 번째 연주인지\"를 가려내야 하는 문제를 일으킨다.",
    long:  "<p>악보에서 \"이 부분을 다시 한 번\", \"처음으로 돌아가서\"를 뜻하는 기호. 같은 마디 그림이 시간선상 두 번 이상 연주되게 만들어, 정렬 시 \"녹음의 어느 구간이 몇 번째 연주인지\"를 가려내야 하는 문제를 일으킨다.</p>",
    category: "§1 문제 정의 관련 용어",
    papers: "9",
    aliases: ["Repeat Sign","Jump","반복 기호","점프"]
  },

  "DTW": {
    label: "동적 시간 휨 · Dynamic Time Warping (DTW)",
    short: "두 시계열을 시간 축에서 늘리고 줄이며 가장 잘 겹치게 맞추는 방법. 같은 곡이라도 사람마다 빠르기가 달라 길이가 다른데, 한쪽 시간 축을 고무줄처럼 늘려 다른 쪽과 정렬한다. 1970년대 음성 인식에서 출발했다.",
    long:  "<p>두 시계열을 시간 축에서 늘리고 줄이며 가장 잘 겹치게 맞추는 방법. 같은 곡이라도 사람마다 빠르기가 달라 길이가 다른데, 한쪽 시간 축을 고무줄처럼 늘려 다른 쪽과 정렬한다. 1970년대 음성 인식에서 출발했다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "1,2,3,6,7,9",
    aliases: ["Dynamic Time Warping (DTW)","Dynamic Time Warping","DTW","동적 시간 휨"]
  },

  "OLTW": {
    label: "실시간 DTW · On-line DTW (OLTW)",
    short: "일반 DTW가 녹음 끝난 뒤 전체를 한 번에 정렬하는 데 비해, 들어오는 신호에 즉시 한 프레임씩 정렬을 갱신하는 변형. 2005년 Dixon이 제안했고 score following의 1세대 강력한 베이스라인이다.",
    long:  "<p>일반 DTW가 녹음 끝난 뒤 전체를 한 번에 정렬하는 데 비해, 들어오는 신호에 즉시 한 프레임씩 정렬을 갱신하는 변형. 2005년 Dixon이 제안했고 score following의 1세대 강력한 베이스라인이다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "1,6,8",
    aliases: ["On-line DTW (OLTW)","On-line DTW","OLTW","실시간 DTW"]
  },

  "Backward Path": {
    label: "역방향 경로 · Backward Path",
    short: "정렬 결과를 현재 시점에서 거꾸로 거슬러 그려본 자취. 앞만 보고 추정하기보다 한 박자 늦게라도 뒤를 돌아보면 템포를 더 정확히 가늠할 수 있다는 직관을 활용한다.",
    long:  "<p>정렬 결과를 현재 시점에서 거꾸로 거슬러 그려본 자취. 앞만 보고 추정하기보다 한 박자 늦게라도 뒤를 돌아보면 템포를 더 정확히 가늠할 수 있다는 직관을 활용한다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "1",
    aliases: ["Backward Path","역방향 경로"]
  },

  "MrMsDTW": {
    label: "멀티스케일 DTW · MrMsDTW",
    short: "큰 단위에서 거친 정렬을 잡고 점점 세밀하게 좁혀가는 효율적 변형. Sync Toolbox에 구현되어 있다.",
    long:  "<p>큰 단위에서 거친 정렬을 잡고 점점 세밀하게 좁혀가는 효율적 변형. Sync Toolbox에 구현되어 있다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "7",
    aliases: ["MrMsDTW","멀티스케일 DTW"]
  },

  "HMM": {
    label: "은닉 마르코프 모델 · Hidden Markov Model (HMM)",
    short: "보이지 않는 상태(악보 위치)를 확률적으로 추정하는 고전 통계 모델. 음표 진행을 상태 전이로 본다.",
    long:  "<p>보이지 않는 상태(악보 위치)를 확률적으로 추정하는 고전 통계 모델. 음표 진행을 상태 전이로 본다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "2,8",
    aliases: ["Hidden Markov Model (HMM)","Hidden Markov Model","HMM","은닉 마르코프 모델"]
  },

  "ASM": {
    label: "근사 문자열 매칭 · Approximate String Matching (ASM)",
    short: "두 문자열의 거의 비슷한 매칭을 찾는 알고리즘. 자동 맞춤법 검사기처럼 음표 줄을 글자열로 보고 닮은 짝짓기를 찾는다. Needleman-Wunsch 같은 편집 거리 계열이 대표적이다.",
    long:  "<p>두 문자열의 거의 비슷한 매칭을 찾는 알고리즘. 자동 맞춤법 검사기처럼 음표 줄을 글자열로 보고 닮은 짝짓기를 찾는다. Needleman-Wunsch 같은 편집 거리 계열이 대표적이다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "6",
    aliases: ["Approximate String Matching (ASM)","Approximate String Matching","ASM","근사 문자열 매칭"]
  },

  "Tempo Model": {
    label: "템포 모델 · Tempo Model",
    short: "지금 연주가 빠른지 느린지를 추정하고 다음 위치 예측에 반영하는 보조 장치. 메트로놈을 머릿속에 굴리는 부지휘자의 역할이다.",
    long:  "<p>지금 연주가 빠른지 느린지를 추정하고 다음 위치 예측에 반영하는 보조 장치. 메트로놈을 머릿속에 굴리는 부지휘자의 역할이다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "1",
    aliases: ["Tempo Model","템포 모델"]
  },

  "Tempo Curve": {
    label: "템포 곡선 · Tempo Curve",
    short: "한 곡이 진행되는 동안 빠르기가 어떻게 변했는지를 그린 그래프. 같은 쇼팽 곡이라도 연주자마다 곡선 모양이 꽤 다르다.",
    long:  "<p>한 곡이 진행되는 동안 빠르기가 어떻게 변했는지를 그린 그래프. 같은 쇼팽 곡이라도 연주자마다 곡선 모양이 꽤 다르다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "1",
    aliases: ["Tempo Curve","템포 곡선"]
  },

  "Beat Tracking": {
    label: "박 추적 · Beat Tracking",
    short: "음악에서 박이 어디 있는지 찾는 일. 사용자가 휴대폰을 박자에 맞춰 흔드는 식으로 직접 알려주는 단순 형태도 있다.",
    long:  "<p>음악에서 박이 어디 있는지 찾는 일. 사용자가 휴대폰을 박자에 맞춰 흔드는 식으로 직접 알려주는 단순 형태도 있다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "6",
    aliases: ["Beat Tracking","박 추적"]
  },

  "Multi-agent Hypothesis Tracking": {
    label: "다중 에이전트 가설 추적 · Multi-agent Hypothesis Tracking",
    short: "여러 가능성을 동시에 살려 두고 시간이 지나면서 점수가 높은 가설만 남기는 방식. 형사 여러 명이 동시에 다른 용의자를 탐문하다 증거가 쌓이는 쪽으로 수사력을 모으는 모습과 비슷하다.",
    long:  "<p>여러 가능성을 동시에 살려 두고 시간이 지나면서 점수가 높은 가설만 남기는 방식. 형사 여러 명이 동시에 다른 용의자를 탐문하다 증거가 쌓이는 쪽으로 수사력을 모으는 모습과 비슷하다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "1",
    aliases: ["Multi-agent Hypothesis Tracking","다중 에이전트 가설 추적"]
  },

  "Heuristic": {
    label: "휴리스틱 · Heuristic",
    short: "\"보통은 이렇다\"는 상식적 규칙. 단조 증가, 변화율 제한 등이 score follower의 휴리스틱으로 자주 쓰인다.",
    long:  "<p>\"보통은 이렇다\"는 상식적 규칙. 단조 증가, 변화율 제한 등이 score follower의 휴리스틱으로 자주 쓰인다.</p>",
    category: "§2 고전적 정렬·추적 알고리즘",
    papers: "8",
    aliases: ["Heuristic","휴리스틱"]
  },

  "Spectrogram": {
    label: "스펙트로그램 · Spectrogram",
    short: "시간이 가로축, 주파수가 세로축인 소리의 사진. 1초 분량의 소리가 어떻게 변했는지를 한 장의 이미지로 볼 수 있다. 신경망이 오디오를 \"이미지처럼\" 다룰 때 표준 표현이다.",
    long:  "<p>시간이 가로축, 주파수가 세로축인 소리의 사진. 1초 분량의 소리가 어떻게 변했는지를 한 장의 이미지로 볼 수 있다. 신경망이 오디오를 \"이미지처럼\" 다룰 때 표준 표현이다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "2,3,4,5",
    aliases: ["Spectrogram","스펙트로그램"]
  },

  "Short-Time": {
    label: "FFT/STFT · (Short-Time) Fast Fourier Transform",
    short: "소리를 시간 구간별로 잘라 어떤 주파수가 얼마만큼 들어 있는가를 보여주는 사진을 만드는 기법. 일반 스펙트로그램이 그 결과다.",
    long:  "<p>소리를 시간 구간별로 잘라 어떤 주파수가 얼마만큼 들어 있는가를 보여주는 사진을 만드는 기법. 일반 스펙트로그램이 그 결과다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "6",
    aliases: ["(Short-Time) Fast Fourier Transform","Fast Fourier Transform","Short-Time","FFT","STFT"]
  },

  "Chroma Feature": {
    label: "크로마 특징 · Chroma Feature",
    short: "12음(도, 도샵, 레, ...)이 매 시점에 얼마나 강하게 들리는지 숫자로 나타낸 표현. 옥타브 차이는 무시해서 음악적 화성을 부각시킨다.",
    long:  "<p>12음(도, 도샵, 레, ...)이 매 시점에 얼마나 강하게 들리는지 숫자로 나타낸 표현. 옥타브 차이는 무시해서 음악적 화성을 부각시킨다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "7",
    aliases: ["Chroma Feature","크로마 특징"]
  },

  "CQT": {
    label: "상수 Q 변환 · Constant-Q Transform (CQT)",
    short: "사람이 음을 옥타브 단위로 듣는다는 점을 반영해, 낮은 음에는 큰 창, 높은 음에는 작은 창을 쓰는 특수한 주파수 분석. 균등한 비율로 음을 본다.",
    long:  "<p>사람이 음을 옥타브 단위로 듣는다는 점을 반영해, 낮은 음에는 큰 창, 높은 음에는 작은 창을 쓰는 특수한 주파수 분석. 균등한 비율로 음을 본다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "6",
    aliases: ["Constant-Q Transform (CQT)","Constant-Q Transform","CQT","상수 Q 변환"]
  },

  "sliCQ": {
    label: "슬라이스 CQT · sliCQ / NSGT-CQT",
    short: "일반 CQT를 실시간으로 돌릴 수 있도록 작은 조각으로 잘라 처리하는 알고리즘. 비-정상 가버 변환에 기반한다.",
    long:  "<p>일반 CQT를 실시간으로 돌릴 수 있도록 작은 조각으로 잘라 처리하는 알고리즘. 비-정상 가버 변환에 기반한다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "6",
    aliases: ["sliCQ","NSGT-CQT","슬라이스 CQT"]
  },

  "Onset": {
    label: "음표 시작점 · Onset",
    short: "건반이 눌리는 그 순간. 피아노에서는 박자감을 결정하는 가장 또렷한 시간 단서다.",
    long:  "<p>건반이 눌리는 그 순간. 피아노에서는 박자감을 결정하는 가장 또렷한 시간 단서다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "1,7,9",
    aliases: ["Onset","음표 시작점"]
  },

  "Frame Activity": {
    label: "프레임 활성 · Frame Activity",
    short: "어느 시점에 어떤 음이 울리고 있는가(시작이 아닌 지속). 오랫동안 누른 건반은 onset은 한 번이지만 frame은 길게 이어진다.",
    long:  "<p>어느 시점에 어떤 음이 울리고 있는가(시작이 아닌 지속). 오랫동안 누른 건반은 onset은 한 번이지만 frame은 길게 이어진다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "7",
    aliases: ["Frame Activity","프레임 활성"]
  },

  "Harmonic Feature": {
    label: "화성 특징 · Harmonic Feature",
    short: "어떤 음들이 함께 울려 만드는 화음 색을 나타내는 특징. 정규화된 onset 특징과 결합해 안정적인 정렬에 쓰인다.",
    long:  "<p>어떤 음들이 함께 울려 만드는 화음 색을 나타내는 특징. 정규화된 onset 특징과 결합해 안정적인 정렬에 쓰인다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "1",
    aliases: ["Harmonic Feature","화성 특징"]
  },

  "Feature Normalization": {
    label: "특징량 정규화 · Feature Normalization",
    short: "들어오는 소리에서 뽑은 수치들을 일정 스케일로 맞춰 두는 작업. 마이크가 갑자기 커지거나 음 하나가 유난히 강해도 알고리즘이 흔들리지 않게 만든다.",
    long:  "<p>들어오는 소리에서 뽑은 수치들을 일정 스케일로 맞춰 두는 작업. 마이크가 갑자기 커지거나 음 하나가 유난히 강해도 알고리즘이 흔들리지 않게 만든다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "1",
    aliases: ["Feature Normalization","특징량 정규화"]
  },

  "Raw Feature": {
    label: "원시 특징 · Raw Feature",
    short: "신경망이 0/1 결정을 내리기 직전, 마지막 층에서 흘러나오는 0~1 사이 연속 확률값. 이산화하면서 잃어버리는 모호함의 정보까지 그대로 살린다.",
    long:  "<p>신경망이 0/1 결정을 내리기 직전, 마지막 층에서 흘러나오는 0~1 사이 연속 확률값. 이산화하면서 잃어버리는 모호함의 정보까지 그대로 살린다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "7",
    aliases: ["Raw Feature","원시 특징"]
  },

  "SYM": {
    label: "심볼릭 특징 · Symbolic Feature (SYM)",
    short: "raw 확률에 임계값을 적용해 0/1로 잘라낸 결과. 깔끔하지만 모호함이 사라진다.",
    long:  "<p>raw 확률에 임계값을 적용해 0/1로 잘라낸 결과. 깔끔하지만 모호함이 사라진다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "7",
    aliases: ["Symbolic Feature (SYM)","Symbolic Feature","SYM","심볼릭 특징"]
  },

  "Piano Roll": {
    label: "피아노 롤 · Piano Roll",
    short: "가로축 시간, 세로축 128개 MIDI 음 번호로 음을 표시한 격자. 다성 음악의 표현이 자연스럽다.",
    long:  "<p>가로축 시간, 세로축 128개 MIDI 음 번호로 음을 표시한 격자. 다성 음악의 표현이 자연스럽다.</p>",
    category: "§3 신호 처리·특징량",
    papers: "8,9",
    aliases: ["Piano Roll","피아노 롤"]
  },

  "Raw Onset Probability": {
    label: "음표 시작 확률 · Raw Onset Probability",
    short: "채보 신경망(예: Onsets and Frames)이 \"이 시점에 이 음이 시작될 가능성\"으로 출력한 0~1 사이 연속 확률값.",
    long:  "<p>채보 신경망(예: Onsets and Frames)이 \"이 시점에 이 음이 시작될 가능성\"으로 출력한 0~1 사이 연속 확률값. Bukey 2024는 이 값을 임계값으로 0/1 piano roll로 자르지 않고 그대로 DTW 입력으로 사용해, 정보 손실을 줄이고 정렬 정확도를 크게 높였다(MAcc 0.46 → 0.88).</p>",
    category: "§3 신호 처리·특징량",
    papers: "9",
    aliases: ["Raw Onset Probability","음표 시작 확률"]
  },

  "CNN": {
    label: "합성곱 신경망 · Convolutional Neural Network (CNN)",
    short: "사진을 작은 패치 단위로 훑으며 특징을 잡아내는 신경망. 글자 모양 → 단어 → 문장 순으로 점차 큰 의미를 잡는 것과 비슷하다.",
    long:  "<p>사진을 작은 패치 단위로 훑으며 특징을 잡아내는 신경망. 글자 모양 → 단어 → 문장 순으로 점차 큰 의미를 잡는 것과 비슷하다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "2,3,4,8",
    aliases: ["Convolutional Neural Network (CNN)","Convolutional Neural Network","CNN","합성곱 신경망"]
  },

  "Multi-modal": {
    label: "멀티모달 · Multi-modal",
    short: "그림과 소리, 두 감각을 한꺼번에 쓰는 사람처럼 서로 다른 종류의 입력을 동시에 다루는 방식.",
    long:  "<p>그림과 소리, 두 감각을 한꺼번에 쓰는 사람처럼 서로 다른 종류의 입력을 동시에 다루는 방식.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "2,4,5",
    aliases: ["Multi-modal","멀티모달"]
  },

  "Encoder–Decoder": {
    label: "인코더–디코더 · Encoder–Decoder",
    short: "인코더가 이미지를 작게 압축해 의미를 뽑고, 디코더가 다시 원래 크기로 복원하면서 픽셀별 답을 만드는 구조.",
    long:  "<p>인코더가 이미지를 작게 압축해 의미를 뽑고, 디코더가 다시 원래 크기로 복원하면서 픽셀별 답을 만드는 구조.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "4",
    aliases: ["Encoder–Decoder","인코더–디코더"]
  },

  "U-Net": {
    label: "U-Net",
    short: "인코더와 디코더 사이를 건너뛰기 연결로 이어 위치 정보를 잃지 않게 만든 segmentation 전용 신경망. 원래는 의료영상용.",
    long:  "<p>인코더와 디코더 사이를 건너뛰기 연결로 이어 위치 정보를 잃지 않게 만든 segmentation 전용 신경망. 원래는 의료영상용.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "4",
    aliases: ["U-Net"]
  },

  "Long Short-Term Memory": {
    label: "LSTM · Long Short-Term Memory",
    short: "시간 순서가 있는 데이터에서 지금까지 무슨 일이 있었는지를 기억하는 순환 신경망. 오디오의 장기 맥락 담당.",
    long:  "<p>시간 순서가 있는 데이터에서 지금까지 무슨 일이 있었는지를 기억하는 순환 신경망. 오디오의 장기 맥락 담당.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "4",
    aliases: ["Long Short-Term Memory","LSTM"]
  },

  "Embedding": {
    label: "임베딩 · Embedding",
    short: "그림이나 소리 같은 복잡한 입력을 짧은 숫자 벡터로 압축한 표현. 각자 키워드 메모를 만든다고 보면 된다.",
    long:  "<p>그림이나 소리 같은 복잡한 입력을 짧은 숫자 벡터로 압축한 표현. 각자 키워드 메모를 만든다고 보면 된다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "2,4",
    aliases: ["Embedding","임베딩"]
  },

  "Latent Representation": {
    label: "잠재 표현 · Latent Representation",
    short: "신경망이 데이터를 압축해 만들어 둔, 핵심만 남긴 숫자 벡터. 비교가 빠르고 노이즈에 둔감해진다.",
    long:  "<p>신경망이 데이터를 압축해 만들어 둔, 핵심만 남긴 숫자 벡터. 비교가 빠르고 노이즈에 둔감해진다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "8",
    aliases: ["Latent Representation","잠재 표현"]
  },

  "End-to-End": {
    label: "종단간 학습 · End-to-End",
    short: "입력에서 출력까지 전 과정을 데이터로부터 한꺼번에 배우는 방식. 사람이 중간 규칙을 손으로 만들지 않는다.",
    long:  "<p>입력에서 출력까지 전 과정을 데이터로부터 한꺼번에 배우는 방식. 사람이 중간 규칙을 손으로 만들지 않는다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "2,3,4",
    aliases: ["End-to-End","종단간 학습"]
  },

  "Feature-wise Linear Modulation": {
    label: "FiLM 조건화 · Feature-wise Linear Modulation",
    short: "한쪽 신경망(오디오)의 출력으로 다른 쪽(악보)의 내부 특징 지도를 곱하고 더해 주의를 돌리는 트릭. 색 필터 안경을 갈아 끼우는 일에 비유된다.",
    long:  "<p>한쪽 신경망(오디오)의 출력으로 다른 쪽(악보)의 내부 특징 지도를 곱하고 더해 주의를 돌리는 트릭. 색 필터 안경을 갈아 끼우는 일에 비유된다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "4,5",
    aliases: ["Feature-wise Linear Modulation","FiLM 조건화"]
  },

  "RL": {
    label: "강화학습 · Reinforcement Learning (RL)",
    short: "시행착오로 점수를 최대화하는 행동을 배우는 기계학습. 알파고가 바둑을 배운 방법, 아타리 게임을 익힌 방법이다.",
    long:  "<p>시행착오로 점수를 최대화하는 행동을 배우는 기계학습. 알파고가 바둑을 배운 방법, 아타리 게임을 익힌 방법이다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "3",
    aliases: ["Reinforcement Learning (RL)","Reinforcement Learning","RL","강화학습"]
  },

  "Agent": {
    label: "에이전트 / 환경 / 상태 / 행동 / 보상 · Agent / Environment / State / Action / Reward",
    short: "강화학습의 5요소. 게임 속 주인공(에이전트)이 무대(환경)에서 자기 시야(상태)를 보고 선택지(행동)를 골라 점수(보상)를 받는다.",
    long:  "<p>강화학습의 5요소. 게임 속 주인공(에이전트)이 무대(환경)에서 자기 시야(상태)를 보고 선택지(행동)를 골라 점수(보상)를 받는다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "3",
    aliases: ["Agent","Environment","State","Action","Reward","에이전트","환경","상태","행동","보상"]
  },

  "Policy": {
    label: "정책 / 가치 함수 · Policy / Value Function",
    short: "어떤 상태에서 어떤 행동을 고를지 정하는 규칙(정책)과, 지금 상태가 앞으로 점수를 얼마나 받을 수 있는 좋은 상태인지 평가하는 함수(가치).",
    long:  "<p>어떤 상태에서 어떤 행동을 고를지 정하는 규칙(정책)과, 지금 상태가 앞으로 점수를 얼마나 받을 수 있는 좋은 상태인지 평가하는 함수(가치).</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "3",
    aliases: ["Policy","Value Function","정책","가치 함수"]
  },

  "Advantage Actor-Critic": {
    label: "A2C · Advantage Actor-Critic",
    short: "정책망(액터)과 가치망(크리틱)을 함께 학습시키는 강화학습 알고리즘. 16개 게임을 병렬로 플레이해 안정적으로 빠르게 학습된다.",
    long:  "<p>정책망(액터)과 가치망(크리틱)을 함께 학습시키는 강화학습 알고리즘. 16개 게임을 병렬로 플레이해 안정적으로 빠르게 학습된다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "3",
    aliases: ["Advantage Actor-Critic","A2C"]
  },

  "Object Detection": {
    label: "객체 검출 / 경계 상자 · Object Detection / Bounding Box",
    short: "이미지에서 어떤 것이 어디에 있는지 동시에 찾아내는 분야.",
    long:  "<p>이미지에서 어떤 것이 어디에 있는지 동시에 찾아내는 분야. 얼굴 인식의 노란 박스가 대표 사례. score following에서는 음표·화음을 감싸는 박스를 그리고, Bukey 2024에서는 마디(measure)의 사각 경계를 표시하는 데 쓰인다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "5,9",
    aliases: ["Object Detection","Bounding Box","객체 검출","경계 상자"]
  },

  "Coordinate Regression": {
    label: "좌표 회귀 · Coordinate Regression",
    short: "그림 위 (x, y) 좌표를 신경망이 직접 숫자로 출력하는 방식. 점 하나로 콕 찍는 것이라 출력의 명료함이 떨어질 수 있다.",
    long:  "<p>그림 위 (x, y) 좌표를 신경망이 직접 숫자로 출력하는 방식. 점 하나로 콕 찍는 것이라 출력의 명료함이 떨어질 수 있다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "4",
    aliases: ["Coordinate Regression","좌표 회귀"]
  },

  "Intersection over Union": {
    label: "IoU · Intersection over Union",
    short: "예측 박스와 정답 박스가 겹치는 면적을 두 박스 합집합으로 나눈 비율. 0이면 안 겹친 것, 1이면 완벽히 겹친 것.",
    long:  "<p>예측 박스와 정답 박스가 겹치는 면적을 두 박스 합집합으로 나눈 비율. 0이면 안 겹친 것, 1이면 완벽히 겹친 것.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "5",
    aliases: ["Intersection over Union","IoU"]
  },

  "You Only Look Once": {
    label: "YOLO · You Only Look Once",
    short: "이미지를 한 번에 훑어 박스와 신뢰 점수를 동시에 뽑아내는 빠른 객체 검출 모델 계열. 실시간 응용에 적합.",
    long:  "<p>이미지를 한 번에 훑어 박스와 신뢰 점수를 동시에 뽑아내는 빠른 객체 검출 모델 계열. 실시간 응용에 적합.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "5",
    aliases: ["You Only Look Once","YOLO"]
  },

  "AMT": {
    label: "자동 채보 · Automatic Music Transcription (AMT)",
    short: "오디오 녹음을 듣고 어떤 음을 언제 쳤는지를 음표(또는 MIDI)로 받아쓰는 인공지능.",
    long:  "<p>오디오 녹음을 듣고 어떤 음을 언제 쳤는지를 음표(또는 MIDI)로 받아쓰는 인공지능.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "7,8,9",
    aliases: ["Automatic Music Transcription (AMT)","Automatic Music Transcription","AMT","자동 채보"]
  },

  "Onsets and Frames": {
    label: "Onsets and Frames",
    short: "음표 시작점과 지속 프레임을 동시에 예측하는 대표적인 채보 신경망. raw feature 추출 모델로도 자주 쓰인다.",
    long:  "<p>음표 시작점과 지속 프레임을 동시에 예측하는 대표적인 채보 신경망. raw feature 추출 모델로도 자주 쓰인다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "7,9",
    aliases: ["Onsets and Frames"]
  },

  "BasicPitch": {
    label: "BasicPitch",
    short: "Spotify가 공개한 가벼운 다성 채보 모델. 오디오를 받아 음을 자동으로 받아쓴다.",
    long:  "<p>Spotify가 공개한 가벼운 다성 채보 모델. 오디오를 받아 음을 자동으로 받아쓴다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "8",
    aliases: ["BasicPitch"]
  },

  "Cross-correlation": {
    label: "교차상관 · Cross-correlation",
    short: "작은 패턴이 큰 신호 어디에 가장 잘 맞나를 모든 위치에서 비교하는 신호처리 기본 연산. score follower에서는 컨텍스트와 윈도우의 매칭 위치를 찾는 데 쓴다.",
    long:  "<p>작은 패턴이 큰 신호 어디에 가장 잘 맞나를 모든 위치에서 비교하는 신호처리 기본 연산. score follower에서는 컨텍스트와 윈도우의 매칭 위치를 찾는 데 쓴다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "8",
    aliases: ["Cross-correlation","교차상관"]
  },

  "Fine-tuning": {
    label: "미세조정 · Fine-tuning",
    short: "이미 잘 학습된 모델을 새 데이터에 짧게 재훈련해 적응시키는 기법. 까다로운 옛날 녹음에 모델을 길들일 때 쓴다.",
    long:  "<p>이미 잘 학습된 모델을 새 데이터에 짧게 재훈련해 적응시키는 기법. 까다로운 옛날 녹음에 모델을 길들일 때 쓴다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "7",
    aliases: ["Fine-tuning","미세조정"]
  },

  "Data Augmentation": {
    label: "데이터 증강 · Data Augmentation",
    short: "학습 데이터를 일부러 변형해 불려 모델이 다양한 상황에 강해지도록 하는 기법. IR 잔향, MIDI 변형 등이 사례다.",
    long:  "<p>학습 데이터를 일부러 변형해 불려 모델이 다양한 상황에 강해지도록 하는 기법. IR 잔향, MIDI 변형 등이 사례다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "5,8",
    aliases: ["Data Augmentation","데이터 증강"]
  },

  "Bootleg Score": {
    label: "부틀렉 악보 · Bootleg Score",
    short: "악보 이미지에서 음표 머리(notehead)와 오선(staff line)만 추려 만든 단순 흑백 격자 표현.",
    long:  "<p>악보 이미지에서 음표 머리(notehead)와 오선(staff line)만 추려 만든 단순 흑백 격자 표현. 정식 OMR 전체보다 가볍고 인쇄·스캔 변형에 강건하다. Bukey 2024는 마디 단위로 잘라 동일 크기로 리사이즈한 뒤 그 위에서 검출해 일관성을 높였다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "9",
    aliases: ["Bootleg Score","부틀렉 악보"]
  },

  "Transcription Model": {
    label: "음표 검출 모델 · Transcription Model",
    short: "오디오를 입력받아 어떤 음표가 언제 시작·지속되는지를 예측하는 신경망.",
    long:  "<p>오디오를 입력받아 어떤 음표가 언제 시작·지속되는지를 예측하는 신경망. AMT의 핵심 부품으로, 본 분야에서는 Onsets and Frames, BasicPitch 등이 자주 쓰인다. Bukey 2024는 그 출력 확률을 정렬 입력으로 직접 사용한다.</p>",
    category: "§4 딥러닝/신경망 관련 용어",
    papers: "7,8,9",
    aliases: ["Transcription Model","음표 검출 모델"]
  },

  "Multi-modal Sheet Music Dataset": {
    label: "MSMD · Multi-modal Sheet Music Dataset",
    short: "악보 이미지와 그에 대응하는 합성 피아노 오디오·MIDI를 정렬해 놓은 공개 데이터셋. 시각·청각 멀티모달 학습의 표준 벤치마크다.",
    long:  "<p>악보 이미지와 그에 대응하는 합성 피아노 오디오·MIDI를 정렬해 놓은 공개 데이터셋. 시각·청각 멀티모달 학습의 표준 벤치마크다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "4,5",
    aliases: ["Multi-modal Sheet Music Dataset","MSMD"]
  },

  "MAESTRO Dataset": {
    label: "MAESTRO · MAESTRO Dataset",
    short: "약 200시간의 피아노 연주를 MIDI와 오디오로 정밀 정렬한 공개 데이터셋. Disklavier 녹음으로 만들어졌다.",
    long:  "<p>약 200시간의 피아노 연주를 MIDI와 오디오로 정밀 정렬한 공개 데이터셋. Disklavier 녹음으로 만들어졌다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "6,8",
    aliases: ["MAESTRO Dataset","MAESTRO"]
  },

  "Nottingham Dataset": {
    label: "Nottingham · Nottingham Dataset",
    short: "영국 민요 단성 멜로디 모음. 강화학습 score follower의 비교적 쉬운 출발 데이터셋으로 자주 쓰인다.",
    long:  "<p>영국 민요 단성 멜로디 모음. 강화학습 score follower의 비교적 쉬운 출발 데이터셋으로 자주 쓰인다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "3",
    aliases: ["Nottingham Dataset","Nottingham"]
  },

  "n": {
    label: "(n)ASAP · (n)ASAP Dataset",
    short: "큰 템포 변동과 다양한 숙련도를 포함한 평가용 데이터셋. Aligned Scores and Performances.",
    long:  "<p>큰 템포 변동과 다양한 숙련도를 포함한 평가용 데이터셋. Aligned Scores and Performances.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "7,8",
    aliases: ["(n)ASAP Dataset","ASAP Dataset","(n)ASAP","ASAP"]
  },

  "Bach10 Dataset": {
    label: "Bach10 · Bach10 Dataset",
    short: "4성부 합창곡 10곡으로 구성된, 정량 평가의 사실상 표준이 된 데이터셋.",
    long:  "<p>4성부 합창곡 10곡으로 구성된, 정량 평가의 사실상 표준이 된 데이터셋.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "6",
    aliases: ["Bach10 Dataset","Bach10"]
  },

  "Beethoven Piano Sonata Dataset": {
    label: "BPSD · Beethoven Piano Sonata Dataset",
    short: "베토벤 32 소나타 1악장을 11명의 연주자가 친 녹음 모음. 모던 스튜디오부터 1935년 vinyl까지 음향 다양성이 큰 도전적 셋.",
    long:  "<p>베토벤 32 소나타 1악장을 11명의 연주자가 친 녹음 모음. 모던 스튜디오부터 1935년 vinyl까지 음향 다양성이 큰 도전적 셋.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "7",
    aliases: ["Beethoven Piano Sonata Dataset","BPSD"]
  },

  "QualScofo Dataset": {
    label: "QualScofo · QualScofo Dataset",
    short: "Lee 2022가 만들어 공개한 정성 평가용 음악 데이터셋. 첼로 솔로부터 로맨틱 오케스트라까지 16곡.",
    long:  "<p>Lee 2022가 만들어 공개한 정성 평가용 음악 데이터셋. 첼로 솔로부터 로맨틱 오케스트라까지 16곡.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "6",
    aliases: ["QualScofo Dataset","QualScofo"]
  },

  "Music Information Retrieval Evaluation eXchange": {
    label: "MIREX · Music Information Retrieval Evaluation eXchange",
    short: "음악 정보 검색 분야의 공식 평가 대회. 2018년 이후 score following 분야 참가가 사실상 끊겼다.",
    long:  "<p>음악 정보 검색 분야의 공식 평가 대회. 2018년 이후 score following 분야 참가가 사실상 끊겼다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "6",
    aliases: ["Music Information Retrieval Evaluation eXchange","MIREX"]
  },

  "Alignment Error": {
    label: "정렬 오차 · Alignment Error",
    short: "정렬 결과가 정답에서 얼마나 시간적으로 떨어져 있는지 측정한 값(밀리초 단위). 낮을수록 좋다.",
    long:  "<p>정렬 결과가 정답에서 얼마나 시간적으로 떨어져 있는지 측정한 값(밀리초 단위). 낮을수록 좋다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "3,4,5,7,8",
    aliases: ["Alignment Error","정렬 오차"]
  },

  "rpt": {
    label: "추적 비율 / 정밀률 · Tracking Ratio / Total Precision Rate (rpt)",
    short: "임계값(예: 300 ms) 안에서 맞춘 음표의 비율. 본 분야에서 가장 많이 쓰는 단일 점수다.",
    long:  "<p>임계값(예: 300 ms) 안에서 맞춘 음표의 비율. 본 분야에서 가장 많이 쓰는 단일 점수다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "6",
    aliases: ["Tracking Ratio","Total Precision Rate (rpt)","Total Precision Rate","rpt","추적 비율","정밀률"]
  },

  "Misalignment Rate": {
    label: "미스얼라인 비율 · Misalignment Rate",
    short: "정해진 허용 오차(예: 100 ms)를 넘긴 음의 비율. 낮을수록 좋다.",
    long:  "<p>정해진 허용 오차(예: 100 ms)를 넘긴 음의 비율. 낮을수록 좋다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "8",
    aliases: ["Misalignment Rate","미스얼라인 비율"]
  },

  "θe": {
    label: "허용 오차창 · Tolerance Window / Misalignment Threshold (θe)",
    short: "정답에서 몇 ms까지 벗어나도 맞다고 칠 것인가의 기준선. 표준은 300 ms다.",
    long:  "<p>정답에서 몇 ms까지 벗어나도 맞다고 칠 것인가의 기준선. 표준은 300 ms다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "6,8",
    aliases: ["Tolerance Window","Misalignment Threshold (θe)","Misalignment Threshold","θe","허용 오차창"]
  },

  "Normalized Pixel Distance": {
    label: "정규화 픽셀 거리 · Normalized Pixel Distance",
    short: "예측 점과 진짜 점 사이의 거리를 이미지 가로폭으로 나눈 값. 종이 크기에 상관없이 비교할 수 있다.",
    long:  "<p>예측 점과 진짜 점 사이의 거리를 이미지 가로폭으로 나눈 값. 종이 크기에 상관없이 비교할 수 있다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "2",
    aliases: ["Normalized Pixel Distance","정규화 픽셀 거리"]
  },

  "Saliency Map": {
    label: "살리언시 맵 · Saliency Map",
    short: "신경망이 결정을 내리며 어떤 픽셀에 주의를 더 두었는지 색으로 표시한 그림. 채점할 때 어디를 읽었는지 형광펜으로 칠하는 셈이다.",
    long:  "<p>신경망이 결정을 내리며 어떤 픽셀에 주의를 더 두었는지 색으로 표시한 그림. 채점할 때 어디를 읽었는지 형광펜으로 칠하는 셈이다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "2",
    aliases: ["Saliency Map","살리언시 맵"]
  },

  "MAcc": {
    label: "마디 단위 정렬 정확도 · Measure-level Alignment Accuracy (MAcc)",
    short: "정렬 결과를 마디(measure) 단위로 평가한 지표.",
    long:  "<p>정렬 결과를 마디(measure) 단위로 평가한 지표. 예측한 마디가 정답 마디와 일치하는 비율로, 시간 기준 ms 오차와 달리 \"몇 번째 마디인가\"의 정답률을 직접 잰다. Bukey 2024가 핵심 지표로 보고한다(33% → 82%).</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "9",
    aliases: ["Measure-level Alignment Accuracy (MAcc)","Measure-level Alignment Accuracy","MAcc","마디 단위 정렬 정확도"]
  },

  "MeSA-13 Dataset": {
    label: "MeSA-13 · MeSA-13 Dataset",
    short: "Bukey 2024가 평가에 사용한 13곡 규모의 in-the-wild audio + scanned PDF 악보 데이터셋.",
    long:  "<p>Bukey 2024가 평가에 사용한 13곡 규모의 in-the-wild audio + scanned PDF 악보 데이터셋. 이 중 반복 기호를 포함한 곡은 2곡으로 작은 표본이지만, 반복 처리의 효과를 직접 확인할 수 있다.</p>",
    category: "§5 데이터·평가 관련 용어",
    papers: "9",
    aliases: ["MeSA-13 Dataset","MeSA-13"]
  },

  "Symbolic Fingerprinting": {
    label: "기호적 지문 · Symbolic Fingerprinting",
    short: "음표 패턴을 곡마다 고유한 지문으로 압축해 두는 기법. Shazam이 노래를 알아내는 방식의 악보판 사촌이다.",
    long:  "<p>음표 패턴을 곡마다 고유한 지문으로 압축해 두는 기법. Shazam이 노래를 알아내는 방식의 악보판 사촌이다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "1",
    aliases: ["Symbolic Fingerprinting","기호적 지문"]
  },

  "Real-performance Reference": {
    label: "실연주 참조 · Real-performance Reference",
    short: "컴퓨터 합성 MIDI 대신 사람이 실제로 녹음한 연주를 비교 기준으로 쓰는 방식. 교과서 발음 대신 원어민 발음으로 외국어를 배우는 셈이다.",
    long:  "<p>컴퓨터 합성 MIDI 대신 사람이 실제로 녹음한 연주를 비교 기준으로 쓰는 방식. 교과서 발음 대신 원어민 발음으로 외국어를 배우는 셈이다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "1",
    aliases: ["Real-performance Reference","실연주 참조"]
  },

  "Musical Instrument Digital Interface": {
    label: "MIDI · Musical Instrument Digital Interface",
    short: "음을 어떤 음을 언제 누르고 떼었는지의 숫자로 표현하는 형식. 오디오가 아닌 악보에 가까운 데이터다.",
    long:  "<p>음을 어떤 음을 언제 누르고 떼었는지의 숫자로 표현하는 형식. 오디오가 아닌 악보에 가까운 데이터다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "6",
    aliases: ["Musical Instrument Digital Interface","MIDI"]
  },

  "MusicXML": {
    label: "MusicXML",
    short: "악보를 XML 텍스트로 표기한 형식. 화면에 그릴 수 있는 디지털 악보의 표준 중 하나.",
    long:  "<p>악보를 XML 텍스트로 표기한 형식. 화면에 그릴 수 있는 디지털 악보의 표준 중 하나.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "6",
    aliases: ["MusicXML"]
  },

  "Optical Music Recognition": {
    label: "OMR · Optical Music Recognition",
    short: "악보 이미지를 읽어 디지털 악보(MIDI 등)로 변환하는 기술. 종종 오류가 생겨 추적의 약점이 된다. Bukey 2024는 OMR 전체 대신 마디 검출 + bootleg score만으로 단순화한다.",
    long:  "<p>악보 이미지를 읽어 디지털 악보(MIDI 등)로 변환하는 기술. 종종 오류가 생겨 추적의 약점이 된다. Bukey 2024는 OMR 전체 대신 마디 검출 + bootleg score만으로 단순화한다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "4,9",
    aliases: ["Optical Music Recognition","OMR"]
  },

  "Disklavier": {
    label: "Disklavier",
    short: "야마하의 자동 연주/녹음 피아노. 연주자가 친 음을 정확한 MIDI로 동시에 기록할 수 있어 정답 라벨 생성에 자주 쓰인다.",
    long:  "<p>야마하의 자동 연주/녹음 피아노. 연주자가 친 음을 정확한 MIDI로 동시에 기록할 수 있어 정답 라벨 생성에 자주 쓰인다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "7",
    aliases: ["Disklavier"]
  },

  "Domain Shift": {
    label: "도메인 시프트 / 합성-실제 갭 · Domain Shift / Synthetic-to-Real Gap",
    short: "학습 데이터와 실제 사용 데이터 분포 차이. 예: 모던 스튜디오 녹음으로만 배운 모델이 1958년 vinyl을 만나면 성능이 떨어지는 현상.",
    long:  "<p>학습 데이터와 실제 사용 데이터 분포 차이. 예: 모던 스튜디오 녹음으로만 배운 모델이 1958년 vinyl을 만나면 성능이 떨어지는 현상.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "5,7",
    aliases: ["Domain Shift","Synthetic-to-Real Gap","도메인 시프트","합성-실제 갭"]
  },

  "Impulse Response": {
    label: "임펄스 응답 / IR 증강 · Impulse Response / IR Augmentation",
    short: "어떤 공간이 짧은 자극에 어떻게 반응하는지를 기록한 짧은 소리. 학습 도중 곱해 주면 그 공간에서 녹음한 듯한 효과를 모사할 수 있다.",
    long:  "<p>어떤 공간이 짧은 자극에 어떻게 반응하는지를 기록한 짧은 소리. 학습 도중 곱해 주면 그 공간에서 녹음한 듯한 효과를 모사할 수 있다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "5",
    aliases: ["Impulse Response","IR Augmentation","임펄스 응답","IR 증강"]
  },

  "Sliding Window": {
    label: "슬라이딩 윈도 · Sliding Window",
    short: "긴 악보 이미지에서 현재 위치 주변만 잘라낸 작은 창. 에이전트가 보는 범위에 해당한다.",
    long:  "<p>긴 악보 이미지에서 현재 위치 주변만 잘라낸 작은 창. 에이전트가 보는 범위에 해당한다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "3",
    aliases: ["Sliding Window","슬라이딩 윈도"]
  },

  "Page-level Tracking": {
    label: "페이지 단위 추적 · Page-level Tracking",
    short: "한 줄 짜리 조각이 아니라 악보 한 페이지 전체를 한꺼번에 보여주고 위치를 찾게 하는 방식. 한 줄에서 길을 잃어도 다른 줄에서 회복할 수 있다.",
    long:  "<p>한 줄 짜리 조각이 아니라 악보 한 페이지 전체를 한꺼번에 보여주고 위치를 찾게 하는 방식. 한 줄에서 길을 잃어도 다른 줄에서 회복할 수 있다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "4",
    aliases: ["Page-level Tracking","페이지 단위 추적"]
  },

  "Open Sound Control": {
    label: "OSC / DAW · Open Sound Control / Digital Audio Workstation",
    short: "OSC는 음악 장비/소프트웨어 사이에 메시지를 주고받는 네트워크 프로토콜. DAW는 Logic·Cubase·Ableton 같은 디지털 음악 작업 소프트웨어로 반주 생성을 담당한다.",
    long:  "<p>OSC는 음악 장비/소프트웨어 사이에 메시지를 주고받는 네트워크 프로토콜. DAW는 Logic·Cubase·Ableton 같은 디지털 음악 작업 소프트웨어로 반주 생성을 담당한다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "8",
    aliases: ["Open Sound Control","Digital Audio Workstation","OSC","DAW"]
  },

  "Testbench": {
    label: "Testbench",
    short: "평가 도구. 다른 연구자가 자기 시스템을 끼워 넣기만 하면 같은 기준으로 점수를 매겨 주는 표준화된 환경.",
    long:  "<p>평가 도구. 다른 연구자가 자기 시스템을 끼워 넣기만 하면 같은 기준으로 점수를 매겨 주는 표준화된 환경.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "6",
    aliases: ["Testbench"]
  },

  "Concert Synchronization": {
    label: "동기화 시각화 · Concert Synchronization",
    short: "콘서트홀에서 청중에게 라이브 음악과 동기화된 악보·영상·자막을 실시간으로 보여주는 응용. 2016년 콘세르트헤바우 시연이 대표적이다.",
    long:  "<p>콘서트홀에서 청중에게 라이브 음악과 동기화된 악보·영상·자막을 실시간으로 보여주는 응용. 2016년 콘세르트헤바우 시연이 대표적이다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "1",
    aliases: ["Concert Synchronization","동기화 시각화"]
  },

  "Measure Detection": {
    label: "마디 검출 · Measure Detection",
    short: "악보 이미지에서 각 마디(bar)의 사각 경계 상자를 자동으로 찾아 주는 시스템 모듈.",
    long:  "<p>악보 이미지에서 각 마디(bar)의 사각 경계 상자를 자동으로 찾아 주는 시스템 모듈. Bukey 2024는 기존 마디 검출기[21]의 출력을 받아 그 안에서 bootleg score를 만들고, 사용자가 클릭한 반복 정보를 마디 좌표에 매핑한다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "9",
    aliases: ["Measure Detection","마디 검출"]
  },

  "Human-in-the-Loop": {
    label: "인간 개입 학습 · Human-in-the-Loop",
    short: "알고리즘이 자동으로 풀기 어려운 부분만 사람이 짧게 라벨링해 주고 나머지는 시스템이 처리하는 협업 방식.",
    long:  "<p>알고리즘이 자동으로 풀기 어려운 부분만 사람이 짧게 라벨링해 주고 나머지는 시스템이 처리하는 협업 방식. Bukey 2024는 페이지당 6초 미만의 사람 클릭(반복 시작·끝)으로 정렬 정확도를 33%에서 82%로 끌어올린다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "9",
    aliases: ["Human-in-the-Loop","인간 개입 학습"]
  },

  "Offline Alignment": {
    label: "오프라인 정렬 · Offline Alignment",
    short: "연주가 끝난 뒤 녹음 파일과 악보 전체를 모두 가지고 있는 상태에서 가장 정확한 정렬 결과를 만들어 내는 방식.",
    long:  "<p>연주가 끝난 뒤 녹음 파일과 악보 전체를 모두 가지고 있는 상태에서 가장 정확한 정렬 결과를 만들어 내는 방식. 실시간 score following과 대비되며, 학습용 정답 데이터 생성·후처리·아카이빙에 쓴다. Bukey 2024가 대표적이다.</p>",
    category: "§6 시스템·응용 관련 용어",
    papers: "9",
    aliases: ["Offline Alignment","오프라인 정렬"]
  },

  "Matchmaker": {
    label: "Matchmaker 라이브러리 · Matchmaker",
    short: "KAIST + JKU 공동의 오픈 소스 Python score-following 라이브러리.",
    long:  "<p>KAIST + JKU 공동의 오픈 소스 Python score-following 라이브러리. pip install + 두 줄 API. OLTW-Dixon, OLTW-Arzt, HMM 세 알고리즘을 동일 인터페이스로 제공. partitura를 통해 MusicXML/MIDI/MEI 모두 지원.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "10",
    aliases: ["Matchmaker","Matchmaker 라이브러리"]
  },

  "OLTW-Arzt variant": {
    label: "OLTW-Arzt · OLTW-Arzt variant",
    short: "Arzt-Widmer 2008-2015의 backward-forward 전략 + tempo-aware 확장을 따른 OLTW.",
    long:  "<p>Arzt-Widmer 2008-2015의 backward-forward 전략 + tempo-aware 확장을 따른 OLTW. Cython 구현으로 0.07 ms 지연. Matchmaker 평가에서 가장 강한 baseline.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "10",
    aliases: ["OLTW-Arzt variant","OLTW-Arzt"]
  },

  "Log-spectral energy": {
    label: "log-spectral energy (LSE) · Log-spectral energy",
    short: "Dixon 2005에 영감받은 단순 STFT 기반 onset-sensitive 특징. Matchmaker의 5종 특징 비교에서 정확도와 지연 모두에서 가장 균형.",
    long:  "<p>Dixon 2005에 영감받은 단순 STFT 기반 onset-sensitive 특징. Matchmaker의 5종 특징 비교에서 정확도와 지연 모두에서 가장 균형.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "10",
    aliases: ["Log-spectral energy","log-spectral energy (LSE)","log-spectral energy","LSE"]
  },

  "Transcribe-then-track paradigm": {
    label: "transcribe-then-track · Transcribe-then-track paradigm",
    short: "\"오디오를 한 번 음표 시퀀스로 변환한 뒤 그 위에서 정렬\"하는 접근. 분석 11번이 audio OLTW의 정확도 plateau를 정량으로 입증하면서 분야의 새 패러다임으로 정착.",
    long:  "<p>\"오디오를 한 번 음표 시퀀스로 변환한 뒤 그 위에서 정렬\"하는 접근. 분석 11번이 audio OLTW의 정확도 plateau를 정량으로 입증하면서 분야의 새 패러다임으로 정착.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "11",
    aliases: ["Transcribe-then-track paradigm","transcribe-then-track"]
  },

  "Symbol-level tracker": {
    label: "심볼 레벨 트래커 · Symbol-level tracker",
    short: "transcribe-then-track의 두 번째 단계. transcribed 심볼 시퀀스와 score 심볼 시퀀스 간의 정렬을 직접 수행. 분석 11번이 새 OLTW 변형으로 구현.",
    long:  "<p>transcribe-then-track의 두 번째 단계. transcribed 심볼 시퀀스와 score 심볼 시퀀스 간의 정렬을 직접 수행. 분석 11번이 새 OLTW 변형으로 구현.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "11",
    aliases: ["Symbol-level tracker","심볼 레벨 트래커"]
  },

  "Path-wise tempo matrix": {
    label: "경로별 템포 행렬 · Path-wise tempo matrix",
    short: "OLTW의 각 cell에 그 cell로 도달하기까지의 추정 tempo를 저장하는 새 자료구조. 외부 tempo 모델 없이 multiple alternative paths가 각자의 tempo를 동시 추적 가능.",
    long:  "<p>OLTW의 각 cell에 그 cell로 도달하기까지의 추정 tempo를 저장하는 새 자료구조. 외부 tempo 모델 없이 multiple alternative paths가 각자의 tempo를 동시 추적 가능.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "11",
    aliases: ["Path-wise tempo matrix","경로별 템포 행렬"]
  },

  "Pairwise pitch+time distance": {
    label: "Pairwise distance metric (pitch + time) · Pairwise pitch+time distance",
    short: "분석 11번의 새 거리 함수 — pitch error(이산) + 시간 error(연속) × timing weight c. Peter 2023 ISMIR의 pitch-set 거리에서 확장.",
    long:  "<p>분석 11번의 새 거리 함수 — pitch error(이산) + 시간 error(연속) × timing weight c. Peter 2023 ISMIR의 pitch-set 거리에서 확장.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "11",
    aliases: ["Pairwise pitch+time distance","Pairwise distance metric (pitch + time)","Pairwise distance metric","pitch + time"]
  },

  "Accuracy plateau": {
    label: "정확도 plateau · Accuracy plateau",
    short: "분야가 audio OLTW로 도달한 한계. 2005년 Dixon-OLTW 이후 약 10년간 chroma·CQT 같은 hand-crafted 특징과 휴리스틱 강화로는 더 큰 도약이 어렵다는 정량 진단(분석 11번).",
    long:  "<p>분야가 audio OLTW로 도달한 한계. 2005년 Dixon-OLTW 이후 약 10년간 chroma·CQT 같은 hand-crafted 특징과 휴리스틱 강화로는 더 큰 도약이 어렵다는 정량 진단(분석 11번).</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "11",
    aliases: ["Accuracy plateau","정확도 plateau"]
  },

  "Online vs real-time AMT": {
    label: "online vs real-time · Online vs real-time AMT",
    short: "분석 12번의 핵심 구분. Online은 청크로 받아 점진 출력(100-300 ms 가능), real-time은 30 ms 이하 지연. 분야 통념의 무비판적 사용을 정조준.",
    long:  "<p>분석 12번의 핵심 구분. Online은 청크로 받아 점진 출력(100-300 ms 가능), real-time은 30 ms 이하 지연. 분야 통념의 무비판적 사용을 정조준.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "12",
    aliases: ["Online vs real-time AMT","online vs real-time"]
  },

  "Mobile-AMT": {
    label: "Mobile-AMT",
    short: "Kusaka-Maezawa EUSIPCO 2024의 SOTA online AMT.",
    long:  "<p>Kusaka-Maezawa EUSIPCO 2024의 SOTA online AMT. depthwise-separable conv + MobileNet V3 + SE. 174 ms 지연 보고. 분석 12번의 출발점이자 분석 11번의 transcription 모듈 후보.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "11,12",
    aliases: ["Mobile-AMT"]
  },

  "Causal-AMT": {
    label: "Causal-AMT",
    short: "분석 12번의 최종 모델.",
    long:  "<p>분석 12번의 최종 모델. 모든 conv를 strict causal로, SE 층 제거, acoustic stack 공유로 모델 크기 절반(160 GFLOPs). 30 ms 지연에서 비-causal 베이스라인 수준 정확도.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "12",
    aliases: ["Causal-AMT"]
  },

  "Strict causality": {
    label: "Strict causality",
    short: "신경망과 후처리 모두에서 미래 정보를 일절 사용하지 않는 처리 방식. 음악적 인터랙션의 필수 조건.",
    long:  "<p>신경망과 후처리 모두에서 미래 정보를 일절 사용하지 않는 처리 방식. 음악적 인터랙션의 필수 조건.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "12",
    aliases: ["Strict causality"]
  },

  "Squeeze-Excitation layer": {
    label: "Squeeze-Excitation (SE) · Squeeze-Excitation layer",
    short: "MobileNet V3의 채널 재가중 모듈. spatial 평균을 보므로 본질적으로 비-causal. 분석 12번이 Mobile-AMT의 숨은 10 초 lookahead 출처로 지적.",
    long:  "<p>MobileNet V3의 채널 재가중 모듈. spatial 평균을 보므로 본질적으로 비-causal. 분석 12번이 Mobile-AMT의 숨은 10 초 lookahead 출처로 지적.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "12",
    aliases: ["Squeeze-Excitation layer","Squeeze-Excitation (SE)","Squeeze-Excitation","SE"]
  },

  "Shifted asymmetric window": {
    label: "Shifted asymmetric STFT window · Shifted asymmetric window",
    short: "Hann 같은 대칭 윈도우 대신 reference point 미래 쪽으로 작게(예: 10 ms) 두는 비대칭 윈도우. lookahead를 줄이면서 최근 샘플 정보를 유지.",
    long:  "<p>Hann 같은 대칭 윈도우 대신 reference point 미래 쪽으로 작게(예: 10 ms) 두는 비대칭 윈도우. lookahead를 줄이면서 최근 샘플 정보를 유지.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "12",
    aliases: ["Shifted asymmetric window","Shifted asymmetric STFT window"]
  },

  "Regression target shapes": {
    label: "Triangular vs binary point target · Regression target shapes",
    short: "onset 주변에 삼각형으로 펼친 학습 target은 sub-frame 정확도를 가능하게 하나 lookahead 필요. 한 프레임만 1로 두는 binary target은 strict causal 가능.",
    long:  "<p>onset 주변에 삼각형으로 펼친 학습 target은 sub-frame 정확도를 가능하게 하나 lookahead 필요. 한 프레임만 1로 두는 binary target은 strict causal 가능.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "12",
    aliases: ["Regression target shapes","Triangular vs binary point target"]
  },

  "Shift-tolerant loss": {
    label: "Shift-tolerant loss",
    short: "±N 프레임 오차를 허용하는 BCE 변형. Foscarin et al. 2024 Beat this!에서 차용. 분석 12번이 strict causal 모델에서는 systematic delay 위험으로 채택 안 함.",
    long:  "<p>±N 프레임 오차를 허용하는 BCE 변형. Foscarin et al. 2024 Beat this!에서 차용. 분석 12번이 strict causal 모델에서는 systematic delay 위험으로 채택 안 함.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "12",
    aliases: ["Shift-tolerant loss"]
  },

  "RUMAA unified model": {
    label: "RUMAA 통합 모델 · RUMAA unified model",
    short: "QMUL의 transformer로 alignment + transcription + mistake detection 세 task를 한 forward pass에 처리.",
    long:  "<p>QMUL의 transformer로 alignment + transcription + mistake detection 세 task를 한 forward pass에 처리. 사전학습 score encoder(M3) + audio encoder(YourMT3+) + 6-block decoder.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["RUMAA unified model","RUMAA 통합 모델"]
  },

  "Hierarchical cross-attention": {
    label: "Hierarchical cross-attention",
    short: "RUMAA의 핵심 — self-attention 후 audio cross-attention, 그 다음 score cross-attention의 두 단계.",
    long:  "<p>RUMAA의 핵심 — self-attention 후 audio cross-attention, 그 다음 score cross-attention의 두 단계. 단순 concatenation 대비 1% 정확. \"transcribe first, then align\"의 인지적 절차 모사.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["Hierarchical cross-attention"]
  },

  "Tri-stream parallel decoding": {
    label: "Tri-stream parallel decoding",
    short: "RUMAA가 한 번의 forward pass로 세 채널(연주 transcription, 악보 alignment, edit operation)을 동시 생성. CP-Words(Hsiao 2021) 확장.",
    long:  "<p>RUMAA가 한 번의 forward pass로 세 채널(연주 transcription, 악보 alignment, edit operation)을 동시 생성. CP-Words(Hsiao 2021) 확장.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["Tri-stream parallel decoding"]
  },

  "ABC notation": {
    label: "ABC notation",
    short: "MusicXML보다 훨씬 간결한 텍스트 기반 음악 표기. 마디당 64자 정도면 거의 모든 클래식 악보 표현 가능. RUMAA의 score encoder 입력.",
    long:  "<p>MusicXML보다 훨씬 간결한 텍스트 기반 음악 표기. 마디당 64자 정도면 거의 모든 클래식 악보 표현 가능. RUMAA의 score encoder 입력.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["ABC notation"]
  },

  "Bar-level patching": {
    label: "Bar-level patching",
    short: "Character-level tokenizer로 받은 ABC를 마디 단위로 묶어 한 토큰으로 패킹하는 기법. RUMAA의 M3 score encoder가 사용. 768-dim bar-level token.",
    long:  "<p>Character-level tokenizer로 받은 ABC를 마디 단위로 묶어 한 토큰으로 패킹하는 기법. RUMAA의 M3 score encoder가 사용. 768-dim bar-level token.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["Bar-level patching"]
  },

  "M3 score encoder": {
    label: "Pre-trained score encoder (M3) · M3 score encoder",
    short: "CLaMP2(Wu et al. 2024)에서 가져온 사전학습 character-level + bar-level transformer. 다국어 multimodal MIR용. RUMAA의 score encoder.",
    long:  "<p>CLaMP2(Wu et al. 2024)에서 가져온 사전학습 character-level + bar-level transformer. 다국어 multimodal MIR용. RUMAA의 score encoder.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["M3 score encoder","Pre-trained score encoder (M3)","Pre-trained score encoder","M3"]
  },

  "YourMT3+ audio encoder": {
    label: "Pre-trained audio encoder (YourMT3+) · YourMT3+ audio encoder",
    short: "Chang et al. MLSP 2024의 multi-instrument transcription transformer. RUMAA의 frozen audio encoder.",
    long:  "<p>Chang et al. MLSP 2024의 multi-instrument transcription transformer. RUMAA의 frozen audio encoder.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["YourMT3+ audio encoder","Pre-trained audio encoder (YourMT3+)","Pre-trained audio encoder","YourMT3+"]
  },

  "Proxy task": {
    label: "Proxy task",
    short: "진짜 풀고 싶은 task의 대리 task.",
    long:  "<p>진짜 풀고 싶은 task의 대리 task. RUMAA가 세 proxy task(T1: Score-Aligned Performance Transcription, T2: Performance-Aligned Score Conversion, T3: Edit Operation Tagging)로 task 상호의존성 학습.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["Proxy task"]
  },

  "F_align": {
    label: "F_align",
    short: "RUMAA가 사용한 정렬 평가 지표. 매치+삽입+삭제 = TP, 미매치 예측 = FP, 미매치 정답 = FN. ±50 ms tolerance.",
    long:  "<p>RUMAA가 사용한 정렬 평가 지표. 매치+삽입+삭제 = TP, 미매치 예측 = FP, 미매치 정답 = FN. ±50 ms tolerance.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["F_align"]
  },

  "Mistake detection": {
    label: "Mistake detection",
    short: "연주에서 누락된 음(missed)·잘못 추가된 음(extra)·정확히 친 음(correct)을 가려내는 task. RUMAA가 alignment·transcription과 통합.",
    long:  "<p>연주에서 누락된 음(missed)·잘못 추가된 음(extra)·정확히 친 음(correct)을 가려내는 task. RUMAA가 alignment·transcription과 통합.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["Mistake detection"]
  },

  "Score-informed transcription": {
    label: "Score-informed transcription",
    short: "악보 정보를 활용해 audio→음표 변환의 정확도를 높이는 채보. RUMAA가 score-free 모드 대비 F_on 96.1 → 99.1로 향상 입증.",
    long:  "<p>악보 정보를 활용해 audio→음표 변환의 정확도를 높이는 채보. RUMAA가 score-free 모드 대비 F_on 96.1 → 99.1로 향상 입증.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "13",
    aliases: ["Score-informed transcription"]
  },

  "Reformulated Soft-DTW": {
    label: "Reformulated Soft-DTW",
    short: "Zeitler-Müller ISMIR 2025의 corrected loss. 약 라벨링(예: 마디 단위) audio↔score 데이터로 신경망 정렬 모델을 학습할 때 권장. 본 프로젝트의 Tier 2 정리.",
    long:  "<p>Zeitler-Müller ISMIR 2025의 corrected loss. 약 라벨링(예: 마디 단위) audio↔score 데이터로 신경망 정렬 모델을 학습할 때 권장. 본 프로젝트의 Tier 2 정리.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "(Tier 2)",
    aliases: ["Reformulated Soft-DTW"]
  },

  "Path-wise vs frame-wise tempo": {
    label: "Path-wise vs frame-wise tempo",
    short: "분석 11번의 path-wise는 OLTW 경로별로 tempo 추정, 외부 tempo 모델 의존 제거. 기존 Arzt 2010의 frame-wise tempo model과 대비.",
    long:  "<p>분석 11번의 path-wise는 OLTW 경로별로 tempo 추정, 외부 tempo 모델 의존 제거. 기존 Arzt 2010의 frame-wise tempo model과 대비.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "11",
    aliases: ["Path-wise vs frame-wise tempo"]
  },

  "MERT": {
    label: "Foundation model × score following · MERT/MusicFM/MuQ × alignment",
    short: "본 프로젝트가 다룬 18개월 동안 등장하지 않은 흐름. 음악 foundation model의 embedding을 Matchmaker의 Processor 자리에 끼워 넣는 정량 비교가 분야의 분명한 빈 공간.",
    long:  "<p>본 프로젝트가 다룬 18개월 동안 등장하지 않은 흐름. 음악 foundation model의 embedding을 Matchmaker의 Processor 자리에 끼워 넣는 정량 비교가 분야의 분명한 빈 공간.</p>",
    category: "§7 2025-2026 신규 개념",
    papers: "(공백 영역)",
    aliases: ["MERT","MusicFM","MuQ × alignment","Foundation model × score following"]
  },

};
