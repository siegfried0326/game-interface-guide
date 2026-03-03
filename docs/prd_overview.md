# PRD: 프로젝트 개요 (prd_overview)

> 문서 버전: 1.0 | 최종 수정: 2026-03-03 | 작성자: Patrick

---

## 1. 프로젝트 정보

| 항목 | 내용 |
|------|------|
| **프로젝트명** | Patrick's Game UI/UX Design |
| **목적** | 게임 UI/UX 디자이너를 위한 인터랙티브 레퍼런스 & 포트폴리오 사이트 |
| **타겟 사용자** | 게임 UI/UX 디자이너, 게임 개발자, UI 아티스트 |
| **배포 URL** | https://game-interface-guide.netlify.app |
| **GitHub** | https://github.com/siegfried0326/game-interface-guide |

---

## 2. 기술 스택

| 레이어 | 기술 | 비고 |
|--------|------|------|
| **프론트엔드** | HTML5 + CSS3 + Vanilla JS | 프레임워크 없는 순수 구현 |
| **라우팅** | Hash-based SPA Router | `window.location.hash` 기반 |
| **폰트** | Noto Sans KR + JetBrains Mono | Google Fonts CDN |
| **배포** | Netlify | 정적 호스팅, 자동 CDN |
| **버전관리** | Git + GitHub | `main` 브랜치 단일 운영 |
| **로컬 개발** | `python3 -m http.server` | 빌드 도구 불필요 |

### 빌드 & 배포 프로세스

```
로컬 개발 (python3 -m http.server 8080)
    │
    ├── git commit & push → GitHub (main 브랜치)
    │
    └── npx netlify deploy --prod → Netlify CDN 배포
```

> **참고**: 빌드 프로세스 없이 정적 파일을 그대로 배포합니다. `netlify.toml`에서 `publish = "."`으로 프로젝트 루트 전체를 배포합니다.

---

## 3. 파일 구조

```
GameUXUI/
│
├── index.html              # [진입점] HTML 레이아웃 (사이드바 + 메인 영역)
├── app.js                  # [핵심 로직] 라우터, 렌더러, 데모 인터랙션 (1,425줄)
├── data.js                 # [데이터] 컴포넌트/UX법칙/체크리스트 전체 데이터 (2,572줄)
├── styles.css              # [스타일] 라이트/다크 테마, 반응형 레이아웃 (2,440줄)
│
├── netlify.toml            # Netlify 배포 설정 (빌드, 리다이렉트, 캐시)
├── KakaoTalk_*.png         # 프로필 이미지 (OG 이미지 겸용)
│
├── docs/                   # PRD & 프로젝트 문서
│   ├── prd_overview.md     # 프로젝트 개요 (이 문서)
│   ├── prd_components.md   # 컴포넌트 시스템 기획
│   ├── prd_ux_laws.md      # UX 법칙 기능 기획
│   ├── prd_checklist.md    # 체크리스트 기능 기획
│   └── prd_demo_interaction.md  # 인터랙티브 데모 기획
│
├── PROGRESS.md             # 작업 현황 & TODO
├── README.md               # GitHub 리포지토리 소개
│
├── .netlify/               # Netlify 로컬 설정 (자동 생성)
└── .claude/                # Claude Code 설정
    └── launch.json         # 로컬 개발 서버 설정
```

### 파일별 역할

| 파일 | 줄 수 | 역할 |
|------|-------|------|
| `index.html` | 73줄 | DOM 구조 정의, 사이드바/메인영역 레이아웃, 스크립트 로드 순서 |
| `app.js` | 1,425줄 | SPA 라우터, 6개 페이지 렌더러, 11개 데모 렌더러, 글로벌 헬퍼 |
| `data.js` | 2,572줄 | COMPONENTS(34개), UX_LAWS(20개), CATEGORIES(7개), CHECKLIST(37항목) |
| `styles.css` | 2,440줄 | CSS 변수, 리셋, 사이드바, 컴포넌트 상세, 데모, 반응형 |

---

## 4. 아키텍처

### SPA 라우팅 흐름

```
사용자 URL 변경 (해시)
    │
    ▼
hashchange 이벤트 → route() 함수
    │
    ├── #/                    → renderHome()
    ├── #/components/{id}
    │   ├── type==='reference' → renderReferenceComponent(id)
    │   └── else              → renderComponentDetail(id)
    ├── #/ux-laws             → renderUXLaws()
    ├── #/ux-laws/{id}        → renderUXLawDetail(id)
    ├── #/checklist           → renderChecklist()
    └── (기타)                → renderHome()
```

### 데이터 흐름

```
data.js (전역 상수)
    │
    ├── COMPONENTS ──▶ renderComponentDetail() / renderReferenceComponent()
    │                  renderHome() (카드 목록)
    │
    ├── UX_LAWS ────▶ renderUXLaws() / renderUXLawDetail()
    │                  renderSidebar() (카테고리 목록)
    │
    ├── COMPONENT_CATEGORIES ──▶ renderSidebar() (네비게이션 그룹)
    │
    └── CHECKLIST_DATA ──▶ renderChecklist()
```

### 상태 관리 (localStorage)

| 키 | 용도 | 값 형태 |
|----|------|---------|
| `gameui-theme` | 테마 설정 | `'light'` / `'dark'` |
| `gameui-open-cats` | 사이드바 열림 상태 | `JSON 배열 (카테고리 ID)` |
| `gameui-checklist` | 체크리스트 체크 상태 | `JSON 객체 ({인덱스: true})` |
| `gameui-v3` | 테마 마이그레이션 플래그 | `'1'` |

---

## 5. 콘텐츠 규모

| 항목 | 수량 | 설명 |
|------|------|------|
| 게임 전용 컴포넌트 | 11개 | HUD, 인벤토리, 미니맵, 스킬바, 채팅, 프로그레스바, 버튼, 카드, 다이얼로그, 내비게이션, 툴팁 |
| 참조 컴포넌트 | 23개 | 토글, 체크박스, 라디오, 드롭다운, 슬라이더, 입력필드, 검색, 탭 등 |
| UX 법칙 | 20개 | 행동(4), 인지(8), 기억(4), 경험(4) |
| 체크리스트 | 37항목 | 7개 카테고리 |
| Anatomy 다이어그램 | 34개 | 모든 컴포넌트에 SVG 구조도 |
| 게임 화면 와이어프레임 | 11개 | 게임 전용 컴포넌트만 |
| 인터랙티브 데모 | 11개 | 게임 전용 컴포넌트만 |

---

## 6. 관련 PRD 문서

| 문서 | 내용 |
|------|------|
| [prd_components.md](./prd_components.md) | 컴포넌트 시스템 (게임전용 + 참조, Anatomy, 와이어프레임, 플랫폼) |
| [prd_ux_laws.md](./prd_ux_laws.md) | UX 법칙 시스템 (20개 법칙, 카테고리, 상세 페이지) |
| [prd_checklist.md](./prd_checklist.md) | UI/UX 체크리스트 (7개 카테고리, 로컬 저장) |
| [prd_demo_interaction.md](./prd_demo_interaction.md) | 인터랙티브 데모 & 인터랙션 (11개 데모, 글로벌 헬퍼) |
