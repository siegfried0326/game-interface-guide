# PRD: 컴포넌트 시스템 (prd_components)

> 문서 버전: 1.0 | 최종 수정: 2026-03-03 | 기능 코드: F-01

---

## 1. 기능 개요

34개의 게임 UI 컴포넌트를 **구조(Anatomy)**, **배치(게임 화면 와이어프레임)**, **플랫폼(PC/모바일)**, **가이드라인** 관점에서 체계적으로 제공하는 핵심 기능입니다.

---

## 2. 컴포넌트 분류

### 2.1 게임 전용 컴포넌트 (11개)

게임에만 존재하는 고유한 UI 컴포넌트입니다. 각각 **Anatomy**, **게임 화면 와이어프레임**, **PC/모바일 가이드**, **인터랙티브 데모**를 포함합니다.

| # | ID | 이름 | 설명 | 렌더러 |
|---|----|------|------|--------|
| 1 | `hud` | HUD | 체력, 미니맵, 스킬바 등 게임 중 항상 표시되는 정보 | `renderComponentDetail` |
| 2 | `inventory` | 인벤토리 | 아이템 관리 (그리드/리스트), 드래그 앤 드롭 | `renderComponentDetail` |
| 3 | `minimap` | 미니맵 | 게임 세계의 축소 지도, 플레이어/NPC/존 표시 | `renderComponentDetail` |
| 4 | `skillbar` | 스킬바 | 스킬 슬롯, 키바인딩, 쿨다운 표시 | `renderComponentDetail` |
| 5 | `chat` | 채팅 | 게임 내 텍스트 통신 (전체/팀/귓속말) | `renderComponentDetail` |
| 6 | `progress` | 프로그레스 바 | HP/MP/EXP, 로딩, 건설 진행 표시 | `renderComponentDetail` |
| 7 | `buttons` | 버튼 | 공격/스킬/아이템 등 액션 실행 | `renderComponentDetail` |
| 8 | `cards` | 카드 | 아이템/캐릭터/건물 정보 카드 | `renderComponentDetail` |
| 9 | `dialogs` | 다이얼로그 | 퀘스트 수락, 확인, 경고 등 모달 | `renderComponentDetail` |
| 10 | `navigation` | 내비게이션 | 메뉴, 탭바, 이동 UI | `renderComponentDetail` |
| 11 | `tooltips` | 툴팁 | 아이템/스킬 호버 시 상세 정보 팝업 | `renderComponentDetail` |

### 2.2 기본 UI 참조 컴포넌트 (23개)

Material Design 3 & Lithium Design System 기반의 범용 UI 컴포넌트를 게임 UI 관점에서 설명합니다. 각각 **Anatomy**, **변형(Variants)**, **게임 적용 설명**, **가이드라인**을 포함합니다.

| # | ID | 이름 | 카테고리 |
|---|----|------|----------|
| 1 | `badges` | 뱃지 | 표시 |
| 2 | `toggle` | 토글/스위치 | 액션 |
| 3 | `checkbox` | 체크박스 | 입력 |
| 4 | `radio` | 라디오 버튼 | 입력 |
| 5 | `dropdown` | 드롭다운 | 입력 |
| 6 | `slider` | 슬라이더 | 입력 |
| 7 | `inputfield` | 입력 필드 | 입력 |
| 8 | `search` | 검색 | 입력 |
| 9 | `tabs` | 탭 | 내비게이션 |
| 10 | `accordion` | 아코디언 | 구조 |
| 11 | `snackbar` | 스낵바/토스트 | 피드백 |
| 12 | `loading` | 로딩 | 표시 |
| 13 | `lists` | 리스트 | 표시 |
| 14 | `datatable` | 데이터 테이블 | 표시 |
| 15 | `chips` | 칩/태그 | 표시 |
| 16 | `appbar` | 앱 바 | 내비게이션 |
| 17 | `breadcrumb` | 브레드크럼 | 내비게이션 |
| 18 | `pagination` | 페이지네이션 | 내비게이션 |
| 19 | `stepper` | 스테퍼 | 내비게이션 |
| 20 | `menus` | 메뉴 | 액션 |
| 21 | `carousel` | 캐러셀 | 표시 |
| 22 | `sheets` | 시트 | 피드백 |
| 23 | `divider` | 디바이더 | 구조 |

### 2.3 사이드바 카테고리 그룹핑 (COMPONENT_CATEGORIES)

```
게임 전용 (6):  hud, inventory, minimap, skillbar, chat, progress
액션 (3):      buttons, toggle, menus
입력 (6):      inputfield, search, checkbox, radio, dropdown, slider
표시 (7):      cards, badges, chips, lists, datatable, carousel, loading
내비게이션 (6): navigation, appbar, tabs, breadcrumb, pagination, stepper
피드백 (4):    dialogs, tooltips, snackbar, sheets
구조 (2):      accordion, divider
```

> **참고**: 일부 게임 전용 컴포넌트(buttons, cards, dialogs, navigation, tooltips)는 게임 전용이지만, 해당하는 기능 카테고리에 분류됩니다.

---

## 3. 페이지 구성

### 3.1 게임 전용 컴포넌트 상세 페이지

`renderComponentDetail(compId)` 함수가 담당합니다.

```
┌──────────────────────────────────────┐
│ 브레드크럼: 홈 / 컴포넌트 / {이름}     │
├──────────────────────────────────────┤
│ 제목 + 상세 설명                      │
├──────────────────────────────────────┤
│ [Anatomy]                            │
│ ┌─────────────────────────────┐      │
│ │  SVG 다이어그램 (번호 콜아웃) │      │
│ └─────────────────────────────┘      │
│ 1. Container — 외부 컨테이너         │
│ 2. Label Text — 라벨 텍스트          │
│ ...                                  │
├──────────────────────────────────────┤
│ [게임 화면 배치]                      │
│ ┌─────────────────────────────┐      │
│ │  게임 화면 와이어프레임 (SVG)  │      │
│ │  (어두운 배경 + UI 요소 위치) │      │
│ └─────────────────────────────┘      │
├──────────────────────────────────────┤
│ [🖥️ PC] [📱 모바일]  ← 탭 전환      │
│ ┌─────────────────────────────┐      │
│ │  플랫폼별 제목/설명/특징 목록  │      │
│ └─────────────────────────────┘      │
├──────────────────────────────────────┤
│ [● 인터랙티브 데모]                   │
│ ┌─────────────────────────────┐      │
│ │  실시간 동작 데모 영역        │      │
│ └─────────────────────────────┘      │
├──────────────────────────────────────┤
│ [디자인 가이드라인]                    │
│ • 가이드라인 1                        │
│ • 가이드라인 2 ...                    │
├──────────────────────────────────────┤
│ [관련 UX 법칙]                        │
│ ┌────────┐ ┌────────┐               │
│ │ 법칙 1  │ │ 법칙 2  │  (클릭→이동) │
│ └────────┘ └────────┘               │
└──────────────────────────────────────┘
```

### 3.2 참조 컴포넌트 상세 페이지

`renderReferenceComponent(compId)` 함수가 담당합니다.

```
┌──────────────────────────────────────┐
│ 브레드크럼: 홈 / 컴포넌트 / {이름}     │
│ [참조 컴포넌트] 뱃지                  │
├──────────────────────────────────────┤
│ 제목 + 상세 설명                      │
├──────────────────────────────────────┤
│ [Anatomy]                            │
│ (게임 전용 컴포넌트와 동일 구조)       │
├──────────────────────────────────────┤
│ [변형 (Variants)]                    │
│ ┌────┐ ┌────┐ ┌────┐               │
│ │ 01 │ │ 02 │ │ 03 │  변형 카드     │
│ └────┘ └────┘ └────┘               │
├──────────────────────────────────────┤
│ [게임 UI 적용]                        │
│ 🎮 게임에서의 활용 설명               │
├──────────────────────────────────────┤
│ [디자인 가이드라인]                    │
│ ✓ 가이드라인 1                       │
│ ✓ 가이드라인 2 ...                   │
├──────────────────────────────────────┤
│ [관련 UX 법칙] (동일)                 │
└──────────────────────────────────────┘
```

---

## 4. 데이터 구조

### 4.1 게임 전용 컴포넌트 (data.js)

```javascript
{
    id: 'buttons',                       // URL 경로에 사용되는 고유 ID
    name: '버튼',                        // 화면에 표시되는 한국어 이름
    icon: '<svg>...</svg>',              // 24x24 SVG 아이콘
    summary: '요약 한 줄...',             // 홈페이지 카드에 표시
    description: '상세 설명 여러 줄...',   // 상세 페이지 상단에 표시

    guidelines: [                        // 디자인 가이드라인 배열
        '버튼의 최소 터치 영역은 44x44px...',
        '누를 수 있다는 것을 시각적으로...',
    ],

    anatomy: {                           // Anatomy 다이어그램
        svg: '<svg viewBox="0 0 400 250">...</svg>',
        parts: [
            { number: 1, name: 'Container', description: '외부 컨테이너' },
            { number: 2, name: 'Label Text', description: '라벨 텍스트' },
            // 번호 순서: 좌→우, 상→하
        ]
    },

    screenWireframe: '<svg viewBox="0 0 480 270">...</svg>',
    // 어두운 게임 화면 배경 + 해당 컴포넌트의 실제 배치 위치 표시

    platforms: {
        pc: {
            title: 'PC 버튼',
            description: 'PC 환경에서의 설계 지침...',
            features: [                  // 핵심 특징 목록
                'Hover/Focus/Active 등 세밀한 상태 피드백 필수',
                '키보드 단축키 표시 (예: Q, W, E, R)',
            ]
        },
        mobile: {
            title: '모바일 버튼',
            description: '모바일 환경에서의 설계 지침...',
            features: [
                '최소 터치 영역 44x44px 유지',
                '한 손 조작 가능한 하단 배치',
            ]
        }
    },

    relatedLaws: ['fitts-law', 'feedback-principle', ...]
    // UX_LAWS 배열의 id와 매칭
}
```

### 4.2 참조 컴포넌트 (data.js)

```javascript
{
    id: 'toggle',
    name: '토글/스위치',
    type: 'reference',                   // ← 이 필드로 게임전용/참조 구분

    // icon, summary, description, anatomy, guidelines, relatedLaws는 동일

    variants: [                          // 변형 목록 (게임전용에는 없음)
        { name: '기본 토글', description: 'ON/OFF 두 가지 상태...' },
        { name: '아이콘 토글', description: '아이콘으로 상태를 표현...' },
    ],

    gameApplication: '게임에서의 활용 설명 문자열...',
    // 게임전용에는 이 대신 platforms와 screenWireframe이 있음
}
```

---

## 5. Anatomy 다이어그램 규칙

### 5.1 번호 순서

모든 Anatomy 다이어그램의 콜아웃 번호는 다음 규칙을 따릅니다:

```
좌 → 우, 상 → 하

예시 (토글 컴포넌트):
  ①────────[Track]────────③ Label
       ②
      Thumb
```

- 동일한 높이(y좌표)에 있는 요소는 왼쪽부터 번호 부여
- 위쪽에 있는 요소가 더 빠른 번호

### 5.2 SVG 구조

```svg
<svg viewBox="0 0 400 250" fill="none">
    <!-- 컴포넌트 도형 -->
    <rect ... fill="#e5e7eb" stroke="#9ca3af"/>

    <!-- 콜아웃 원 + 번호 -->
    <circle cx="60" cy="60" r="14" fill="#374151"/>
    <text x="60" y="65" fill="white" font-size="12" font-weight="bold">1</text>

    <!-- 콜아웃 → 컴포넌트 연결선 (점선) -->
    <line x1="74" y1="60" x2="100" y2="80" stroke="#374151" stroke-dasharray="3"/>
</svg>
```

---

## 6. 플랫폼 탭 시스템

### 6.1 PC 탭 (파란색 `#3b82f6`)

- 마우스 + 키보드 인터랙션 기반
- 호버/포커스/우클릭 등 세밀한 상태 관리
- 키보드 단축키 바인딩 안내
- 최소 크기 32x32px (마우스 정밀도)

### 6.2 모바일 탭 (초록색 `#10b981`)

- 터치 인터랙션 기반
- 최소 터치 영역 44x44px (피츠의 법칙)
- 한 손 조작 가능한 하단 배치
- 스와이프, 핀치 등 제스처 활용

---

## 7. 구현 위치

| 항목 | 파일 | 위치 |
|------|------|------|
| 게임전용 렌더러 | `app.js` | `renderComponentDetail()` (281행~) |
| 참조 렌더러 | `app.js` | `renderReferenceComponent()` (1259행~) |
| 라우터 분기 | `app.js` | `route()` 함수 내 `type === 'reference'` 체크 |
| 컴포넌트 데이터 | `data.js` | `COMPONENTS` 객체 (5행~2252행) |
| 카테고리 데이터 | `data.js` | `COMPONENT_CATEGORIES` 배열 (2457행~) |
| Anatomy 스타일 | `styles.css` | `.comp-anatomy`, `.anatomy-diagram`, `.anatomy-parts` |
| 와이어프레임 스타일 | `styles.css` | `.screen-wireframe-section`, `.screen-wireframe` |
| 플랫폼 탭 스타일 | `styles.css` | `.genre-tab[data-genre="pc"]`, `[data-genre="mobile"]` |
