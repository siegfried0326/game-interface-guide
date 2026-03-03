# PRD: UX 법칙 시스템 (prd_ux_laws)

> 문서 버전: 1.0 | 최종 수정: 2026-03-03 | 기능 코드: F-02

---

## 1. 기능 개요

20개의 UX 법칙을 4개 카테고리(행동/인지/기억/경험)로 분류하여, 각 법칙이 **게임 UI/UX에서 어떻게 적용되는지** 시각적 다이어그램과 함께 설명합니다.

---

## 2. UX 법칙 목록

### 2.1 행동 카테고리 (4개)

사용자의 물리적 행동과 반응 속도에 관한 원칙입니다.

| # | ID | 이름 (한) | 이름 (영) | 핵심 원리 |
|---|----|-----------|-----------|----------|
| 1 | `fitts-law` | 피츠의 법칙 | Fitts's Law | 타겟 크기가 클수록, 가까울수록 빠르게 선택 |
| 2 | `doherty-threshold` | 도허티 임계값 | Doherty Threshold | 응답 시간 400ms 이하일 때 몰입도 극대화 |
| 3 | `feedback-principle` | 피드백 원칙 | Feedback Principle | 모든 행동에 즉각적 피드백 필수 |
| 4 | `goal-gradient` | 목표 기울기 효과 | Goal Gradient Effect | 목표에 가까워질수록 동기부여 강화 |

### 2.2 인지 카테고리 (8개)

사용자가 정보를 처리하고 이해하는 방식에 관한 원칙입니다.

| # | ID | 이름 (한) | 이름 (영) |
|---|----|-----------|-----------|
| 1 | `hicks-law` | 힉의 법칙 | Hick's Law |
| 2 | `miller-law` | 밀러의 법칙 | Miller's Law |
| 3 | `aesthetic-usability` | 심미적 사용성 효과 | Aesthetic-Usability Effect |
| 4 | `teslers-law` | 테슬러의 법칙 | Tesler's Law |
| 5 | `law-proximity` | 근접성의 법칙 | Law of Proximity |
| 6 | `progressive-disclosure` | 점진적 노출 | Progressive Disclosure |
| 7 | `law-similarity` | 유사성의 법칙 | Law of Similarity |
| 8 | `law-pragnanz` | 프래그난츠의 법칙 | Law of Pragnanz |
| 9 | `recognition-recall` | 재인 vs 회상 | Recognition Over Recall |

### 2.3 기억 카테고리 (4개)

사용자가 정보를 기억하고 회상하는 패턴에 관한 원칙입니다.

| # | ID | 이름 (한) | 이름 (영) |
|---|----|-----------|-----------|
| 1 | `von-restorff` | 폰 레스토프 효과 | Von Restorff Effect |
| 2 | `peak-end-rule` | 피크-엔드 규칙 | Peak-End Rule |
| 3 | `serial-position` | 계열 위치 효과 | Serial Position Effect |
| 4 | `zeigarnik-effect` | 자이가르닉 효과 | Zeigarnik Effect |

### 2.4 경험 카테고리 (4개)

사용자의 전반적인 경험과 기대에 관한 원칙입니다.

| # | ID | 이름 (한) | 이름 (영) |
|---|----|-----------|-----------|
| 1 | `jakobs-law` | 야콥의 법칙 | Jakob's Law |
| 2 | `consistency` | 일관성의 원칙 | Principle of Consistency |
| 3 | `recognition-recall` | 재인 vs 회상 | Recognition Over Recall |
| 4 | `postel-law` | 포스텔의 법칙 | Postel's Law |

---

## 3. 페이지 구성

### 3.1 목록 페이지 (`#/ux-laws`)

`renderUXLaws()` 함수가 담당합니다.

```
┌──────────────────────────────────────┐
│ 브레드크럼: 홈 / UX 법칙              │
├──────────────────────────────────────┤
│ 제목 + 설명                          │
├──────────────────────────────────────┤
│ ● 행동                              │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│ │법칙1 │ │법칙2 │ │법칙3 │ │법칙4 │   │
│ └─────┘ └─────┘ └─────┘ └─────┘   │
├──────────────────────────────────────┤
│ ● 인지                              │
│ ┌─────┐ ┌─────┐ ┌─────┐ ...       │
│ └─────┘ └─────┘ └─────┘           │
├──────────────────────────────────────┤
│ ● 기억                              │
│ ...                                  │
├──────────────────────────────────────┤
│ ● 경험                              │
│ ...                                  │
└──────────────────────────────────────┘
```

각 법칙 카드에 표시되는 정보:
- SVG 시각적 다이어그램 (`visual`)
- 법칙 이름 (`name`)
- 영문 이름 (`nameEn`)
- 핵심 원리 (`principle`)
- 카테고리 태그 (`category`)

### 3.2 상세 페이지 (`#/ux-laws/{id}`)

`renderUXLawDetail(lawId)` 함수가 담당합니다.

```
┌──────────────────────────────────────┐
│ [히어로 영역] 카테고리별 색상 배경     │
│   ← 모든 법칙                        │
│   [SVG 시각 다이어그램]               │
│   카테고리명                          │
│   법칙 이름 (한글)                    │
│   영문 이름                          │
├──────────────────────────────────────┤
│ 정의: 핵심 원리 (강조 인용)           │
├──────────────────────────────────────┤
│ NOTE: 카테고리 설명 + 법칙 역할       │
├──────────────────────────────────────┤
│ Takeaways                            │
│  ① 핵심 원리 상세 설명               │
│  ② 게임 UI 적용 방법                 │
├──────────────────────────────────────┤
│ 게임에서의 활용 (상세 설명)           │
├──────────────────────────────────────┤
│ 관련 컴포넌트 (역방향 연동)           │
│ - relatedLaws에 이 법칙이 포함된 컴포넌트 표시 │
├──────────────────────────────────────┤
│ 같은 카테고리의 법칙                  │
│ - 동일 카테고리의 다른 법칙 카드 목록  │
└──────────────────────────────────────┘
```

### 3.3 카테고리별 테마 색상

| 카테고리 | 색상 코드 | 용도 |
|----------|----------|------|
| 행동 | `#c75c3a` (주황-갈색) | 히어로 배경, 태그, Takeaway 번호 |
| 인지 | `#2a6496` (파랑) | 히어로 배경, 태그, Takeaway 번호 |
| 기억 | `#7b4fa0` (보라) | 히어로 배경, 태그, Takeaway 번호 |
| 경험 | `#2a8a6a` (초록) | 히어로 배경, 태그, Takeaway 번호 |

---

## 4. 데이터 구조

```javascript
// UX_LAWS 배열의 각 항목
{
    id: 'fitts-law',                      // URL 경로용 고유 ID
    name: '피츠의 법칙',                   // 한국어 이름
    nameEn: "Fitts's Law",               // 영문 이름
    principle: '대상까지의 이동 시간은...',  // 핵심 원리 (1줄)
    description: '타겟의 크기가...',        // 상세 설명 (2-3줄)
    gameApplication: '중요한 액션 버튼...',  // 게임 UI 적용 가이드 (2-3줄)
    category: '행동',                      // 행동/인지/기억/경험 중 하나
    visual: '<svg viewBox="0 0 200 120">...</svg>'
    // 법칙의 개념을 시각적으로 표현한 200x120 SVG
}
```

---

## 5. 컴포넌트 ↔ UX 법칙 연동

### 5.1 정방향 연동 (컴포넌트 → 법칙)

각 컴포넌트의 `relatedLaws` 배열에 관련 UX 법칙 ID를 명시합니다.

```javascript
// 컴포넌트 상세 페이지 하단에 "관련 UX 법칙" 섹션으로 표시
relatedLaws: ['fitts-law', 'feedback-principle', 'aesthetic-usability']
```

### 5.2 역방향 연동 (법칙 → 컴포넌트)

UX 법칙 상세 페이지에서 해당 법칙을 참조하는 모든 컴포넌트를 자동으로 찾아 표시합니다.

```javascript
// app.js 내 renderUXLawDetail에서 동적으로 검색
const relatedComps = Object.values(COMPONENTS)
    .filter(c => c.relatedLaws && c.relatedLaws.includes(law.id));
```

---

## 6. 사이드바 네비게이션

UX 법칙은 사이드바에서 카테고리별로 그룹핑됩니다.

```
UX 법칙
├── UX 법칙 개요          → #/ux-laws
├── ⚡ 행동 (4)
│   ├── 피츠의 법칙        → #/ux-laws/fitts-law
│   ├── 도허티 임계값      → #/ux-laws/doherty-threshold
│   ├── 피드백 원칙        → #/ux-laws/feedback-principle
│   └── 목표 기울기 효과   → #/ux-laws/goal-gradient
├── ℹ 인지 (8)
│   └── ...
├── 📍 기억 (4)
│   └── ...
└── ❤ 경험 (4)
    └── ...
```

---

## 7. 구현 위치

| 항목 | 파일 | 위치 |
|------|------|------|
| 목록 렌더러 | `app.js` | `renderUXLaws()` (974행~) |
| 상세 렌더러 | `app.js` | `renderUXLawDetail()` (1022행~) |
| 사이드바 UX법칙 섹션 | `app.js` | `renderSidebar()` 내 `uxCatOrder` 루프 |
| UX 법칙 데이터 | `data.js` | `UX_LAWS` 배열 (2253행~2454행) |
| 목록 카드 스타일 | `styles.css` | `.ux-law-card`, `.ux-law-visual`, `.ux-law-tag` |
| 상세 히어로 스타일 | `styles.css` | `.ux-law-hero`, `.ux-law-body`, `.ux-law-takeaways` |
