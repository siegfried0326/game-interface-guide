# M3 컴포넌트 오버홀 구현 계획

> 작성일: 2026-03-03
> 상태: 진행 중

## Context

현재 Game UI/UX 사이트에는 34개 컴포넌트가 있지만, 각 컴포넌트의 하위 유형(sub-type)을 **간단한 기하학적 도형 SVG 일러스트**로 시각화하는 기능이 없음. M3 Material Design(https://m3.material.io/components)의 전체 컴포넌트 구조를 참고하여, 모든 컴포넌트에 M3 스타일의 하위 유형 카드를 추가하고 12개의 신규 컴포넌트를 생성하는 대규모 작업.

---

## Phase 0: 인프라 구축

**목표**: 데이터 파일 분할 + 새 렌더링 함수 + CSS 추가 (기존 기능 유지)

### 파일 변경

| 작업 | 파일 | 설명 |
|------|------|------|
| `data/` 디렉토리 생성 | 새 폴더 | 카테고리별 데이터 분할 |
| `data/data-core.js` 생성 | 새 파일 | `COMPONENT_CATEGORIES`, `CHECKLIST_DATA`, `UX_LAWS` 이동 |
| `data/data-game.js` 생성 | 새 파일 | 11개 게임 전용 컴포넌트 이동 |
| `data/data-ref-action.js` 생성 | 새 파일 | 액션 카테고리 참조 컴포넌트 + 신규 M3 컴포넌트 |
| `data/data-ref-input.js` 생성 | 새 파일 | 입력 카테고리 |
| `data/data-ref-display.js` 생성 | 새 파일 | 표시 카테고리 |
| `data/data-ref-nav.js` 생성 | 새 파일 | 내비게이션 카테고리 |
| `data/data-ref-feedback.js` 생성 | 새 파일 | 피드백 카테고리 |
| `data/data-ref-structure.js` 생성 | 새 파일 | 구조 카테고리 |
| `index.html` 수정 | 기존 파일 | `<script src="data.js">` → 9개 분할 파일 로드 |
| `app.js` 수정 | 기존 파일 | `renderM3SubTypes()` 함수 추가 (~30줄) |
| `app.js` | 기존 파일 | `renderComponentDetail()`에 m3SubTypes 렌더링 호출 삽입 |
| `app.js` | 기존 파일 | `renderReferenceComponent()`에서 `m3SubTypes` 우선 렌더링, `variants` 폴백 |
| `styles.css` | 기존 파일 | `.subtype-grid`, `.subtype-card`, `.subtype-illustration` CSS 추가 (~80줄) |

### 새 데이터 모델 (`m3SubTypes` 필드)

```javascript
m3SubTypes: [
    {
        name: 'Filled',           // M3 영문명
        nameKo: '필드 버튼',       // 한국어명
        description: '강조된 주요 액션 버튼. 게임에서 확인, 수락, 시작 등에 사용.',
        svg: '<svg viewBox="0 0 200 120">...</svg>',  // 간단한 기하학적 도형
        gameContext: '퀘스트 수락, 전투 시작, 아이템 구매'  // 게임 맥락 (선택)
    },
]
```

### SVG 디자인 규칙
- ViewBox: `0 0 200 120` (통일)
- 색상: `#374151`(주), `#e5e7eb`(배경), `#9ca3af`(보조), `#6b7280`(텍스트)
- 도형만 사용: `<rect>`, `<circle>`, `<line>`, `<text>`, `<path>`
- 다크 모드 호환 (중성 그레이 톤)

---

## Phase 1: 액션 카테고리 (7개 컴포넌트, ~20 SVG)

| 컴포넌트 | 상태 | 하위 유형 |
|----------|------|-----------|
| `buttons` (게임 전용) | m3SubTypes 추가 | Elevated, Filled, Filled tonal, Outlined, Text |
| `toggle` (기존 참조) | m3SubTypes 추가 | Selected, Unselected, With icon |
| `icon-buttons` | **신규** | Standard, Filled, Filled tonal, Outlined |
| `fab` | **신규** | FAB, Small FAB, Large FAB |
| `extended-fab` | **신규** | Extended FAB |
| `button-groups` | **신규** | Connected, Split |
| `segmented-buttons` | **신규** | Single-select, Multi-select |

---

## Phase 2: 입력/선택 카테고리 (8개 컴포넌트, ~24 SVG)

| 컴포넌트 | 상태 | 하위 유형 |
|----------|------|-----------|
| `checkbox` | m3SubTypes 추가 | Checked, Unchecked, Indeterminate, Error |
| `radio` | m3SubTypes 추가 | Selected, Unselected |
| `slider` | m3SubTypes 추가 | Continuous, Centered, Discrete, Range |
| `chips` | m3SubTypes 추가 | Assist, Filter, Input, Suggestion |
| `inputfield` | m3SubTypes 추가 | Filled, Outlined |
| `dropdown` | m3SubTypes 추가 | Standard, Compact |
| `search` | m3SubTypes 추가 | Search bar, Search view |
| `date-pickers` | **신규** | Docked, Modal, Modal input, Modal range |

---

## Phase 3: 피드백 카테고리 (6개 컴포넌트, ~14 SVG)

| 컴포넌트 | 상태 | 하위 유형 |
|----------|------|-----------|
| `badges` | m3SubTypes 추가 | Small, Large |
| `snackbar` | m3SubTypes 추가 | Single-line, Two-line, With action |
| `tooltips` (게임 전용) | m3SubTypes 추가 | Plain, Rich |
| `loading` | m3SubTypes 추가 | Spinner, Skeleton, Shimmer |
| `progress` (게임 전용) | m3SubTypes 추가 | Circular det/indet, Linear det/indet |
| `dialogs` (게임 전용) | m3SubTypes 추가 | Basic, Full-screen, List |

---

## Phase 4: 표시/구조 카테고리 (9개 컴포넌트, ~25 SVG)

| 컴포넌트 | 상태 | 하위 유형 |
|----------|------|-----------|
| `cards` (게임 전용) | m3SubTypes 추가 | Elevated, Filled, Outlined |
| `carousel` | m3SubTypes 추가 | Multi-browse, Hero, Full-screen, Uncontained |
| `lists` | m3SubTypes 추가 | One-line, Two-line, Three-line |
| `sheets` | m3SubTypes 추가 | Standard bottom, Modal bottom, Standard side, Modal side |
| `divider` | m3SubTypes 추가 | Full-width, Inset, Middle inset |
| `menus` | m3SubTypes 추가 | Menu, Submenu |
| `datatable` | m3SubTypes 추가 | Basic, Sortable, Paginated |
| `accordion` | m3SubTypes 추가 | Single-expand, Multi-expand |
| `toolbars` | **신규** | Compressed, Standard, Expanded |

---

## Phase 5: 내비게이션 카테고리 (10개 컴포넌트, ~16 SVG)

| 컴포넌트 | 상태 | 하위 유형 |
|----------|------|-----------|
| `navigation` (게임 전용) | m3SubTypes 추가 | Tab-based, Sidebar, Bottom bar |
| `appbar` | m3SubTypes 추가 | Small, Medium, Large, Bottom |
| `tabs` | m3SubTypes 추가 | Primary, Secondary |
| `breadcrumb` | m3SubTypes 추가 | Standard, Collapsed |
| `pagination` | m3SubTypes 추가 | Number, Infinite scroll |
| `stepper` | m3SubTypes 추가 | Horizontal, Vertical |
| `nav-bar` | **신규** | With label, Without label |
| `nav-drawer` | **신규** | Standard, Modal |
| `nav-rail` | **신규** | Standard |
| `fab-menu` | **신규** | FAB menu |

---

## Phase 6: 마무리

- 전체 SVG 일관성 검토 (크기, 색상, 선 두께)
- 다크 모드 전체 테스트
- 모바일 반응형 테스트
- `index.html` 메타 태그 업데이트 (컴포넌트 수)
- 기존 `data.js` 삭제
- 커밋 & 푸시

---

## 요약

| 항목 | 수량 |
|------|------|
| 최종 컴포넌트 수 | ~46개 (기존 34 + 신규 12) |
| 생성할 SVG 일러스트 | ~99개 |
| 수정 파일 | `app.js`, `styles.css`, `index.html` |
| 신규 파일 | 9개 데이터 파일 (`data/` 하위) |
| 삭제 파일 | `data.js` (분할 완료 후) |
