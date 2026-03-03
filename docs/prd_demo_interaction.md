# PRD: 인터랙티브 데모 & 인터랙션 (prd_demo_interaction)

> 문서 버전: 1.0 | 최종 수정: 2026-03-03 | 기능 코드: F-03

---

## 1. 기능 개요

11개 게임 전용 컴포넌트에 **실제로 동작하는 인터랙티브 데모**를 제공합니다. 사용자가 컴포넌트의 동작 원리와 인터랙션 패턴을 직접 체험할 수 있습니다.

---

## 2. 데모 목록

| # | 컴포넌트 | 렌더 함수 | 주요 인터랙션 |
|---|----------|-----------|--------------|
| 1 | 버튼 | `renderButtonDemo()` | 클릭 시 눌림 효과, 비활성 상태, 장르별 4가지 스타일 |
| 2 | 프로그레스 바 | `renderProgressDemo()` | 데미지 시뮬레이션 (랜덤 감소), 자동 회복 애니메이션 |
| 3 | 툴팁 | `renderTooltipDemo()` | 아이템/무기/스킬/건물 정보 팝업 (장르별 디자인) |
| 4 | HUD | `renderHUDDemo()` | 체력바, 미니맵, 스킬바, 탄약/퀘스트 표시 (장르별) |
| 5 | 인벤토리 | `renderInventoryDemo()` | 드래그 앤 드롭 아이템 이동, 등급 색상, 수량 표시 |
| 6 | 스킬바 | `renderSkillbarDemo()` | 스킬 클릭 → 쿨다운 오버레이 타이머, 키바인딩 표시 |
| 7 | 채팅 | `renderChatDemo()` | 메시지 입력/전송, 채널별 색상 (시스템/플레이어/파티) |
| 8 | 미니맵 | `renderMinimapDemo()` | 클릭으로 플레이어 이동, NPC 자동 순찰 애니메이션 |
| 9 | 다이얼로그 | `renderDialogDemo()` | 확인/취소 버튼, 클릭 시 체크 표시 애니메이션 |
| 10 | 내비게이션 | `renderNavDemo()` | 탭 전환 (active 클래스 토글) |
| 11 | 카드 | `renderCardDemo()` | 장르별 카드 디자인 미리보기 (RPG/FPS/TPS/쿼터뷰) |

---

## 3. 데모 상세 사양

### 3.1 버튼 데모 (`renderButtonDemo`)

4가지 장르별 버튼 스타일을 제공합니다. (데모 영역에서는 RPG 스타일이 기본 표시)

- **RPG**: 판타지풍 골드 테두리, `⚔️ 공격하기` / `🛡️ 방어` / `🔮 마법 (MP 부족)` — 비활성 상태 포함
- **FPS**: 밀리터리 각진 스타일, `ENGAGE` / `LOADOUT` / 아이콘 버튼
- **TPS**: 글래스모피즘, 반투명 배경, 인터랙션 / 취소 / 원형 버튼
- **쿼터뷰**: 3D 눌림 효과, `🏠 건설하기` / 아이콘 그룹 / 세그먼트 버튼

### 3.2 프로그레스 바 데모 (`renderProgressDemo`)

- **데미지 시뮬레이션**: 클릭 시 각 바에서 랜덤(5~25%) 감소, 최소 5%까지
- **자동 회복**: 200ms 간격으로 2%씩 회복, 100% 도달 시 자동 중지
- **RPG**: HP(빨강) / MP(파랑) / EXP(금색) — 수치 표시
- **FPS**: HEALTH / SHIELD — 각진 바, 모노 폰트 수치
- **TPS**: 체력 / 스태미나 / 궁극기 — 둥근 바
- **쿼터뷰**: 건설 / 연구 / 생산 — 아이콘 포함

### 3.3 인벤토리 데모 (`renderInventoryDemo`)

- **15칸 그리드** (8개 아이템 + 7개 빈칸)
- **아이템**: 🗡(전설) / 🛡(에픽) / 🧪(x5) / 💎(레어) / 🍖(x12) / 📜(레어) / 🔮(에픽) / 🏹(일반)
- **드래그 앤 드롭**: HTML5 Drag API 사용, 아이템 위치 교환
  - `dragstart`: 드래그 시작, 투명도 0.4
  - `dragover`: 드롭 허용
  - `dragenter`: 아웃라인 표시
  - `dragleave`: 아웃라인 제거
  - `drop`: innerHTML과 클래스 교환
  - `dragend`: 투명도 복원

### 3.4 스킬바 데모 (`renderSkillbarDemo`)

- **장르별 스킬 세트**:
  - RPG: 8개 (⚔1, 🛡2, 🔮3, ❤4, ⚡5, 🔥6, 🌀7, 💫R)
  - FPS: 3개 (🔫1, 💣G, 🩹4)
  - TPS: 4개 (⚡Q, 🔥E, 🛡F, 💫R)
  - 쿼터뷰: 5개 (🏠B, ⚒V, 🗡A, 🏃M, 📜T)
- **쿨다운 효과**: 클릭 시 오버레이 표시 → 1초 간격 카운트다운 → 제거
- 기본 쿨다운: 3초 (data-cd 속성으로 개별 설정 가능)

### 3.5 채팅 데모 (`renderChatDemo`)

- **기본 메시지 4개**: 시스템(노란), 플레이어1, 파티원(초록), 플레이어2
- **입력**: Enter 키 또는 전송 버튼으로 메시지 추가
- **자동 스크롤**: 새 메시지 추가 시 하단으로 스크롤

### 3.6 미니맵 데모 (`renderMinimapDemo`)

- **원형 미니맵** (RPG/TPS) 또는 **사각 미니맵** (FPS/쿼터뷰)
- **플레이어 이동**: 맵 클릭 시 해당 위치로 600ms ease 이동
- **NPC 순찰**: 3초 간격 랜덤 위치 이동 (15~80% 범위)
- **존 표시**: 반투명 사각 영역으로 구역 구분
- **자동 정리**: 컨테이너가 DOM에서 제거되면 순찰 인터벌 자동 해제

### 3.7 다이얼로그 데모 (`renderDialogDemo`)

- **장르별 시나리오**:
  - RPG: ⚔️ 퀘스트 수락 (드래곤 퇴치)
  - FPS: MATCH FOUND (5v5 경쟁전)
  - TPS: 장비 강화 (파괴 경고)
  - 쿼터뷰: 🏰 동맹 제안
- **확인 버튼 피드백**: 클릭 시 텍스트 → `✓` → 1초 후 원래 텍스트

---

## 4. 글로벌 헬퍼 함수

데모 인터랙션을 위해 `window` 스코프에 등록된 전역 함수들입니다.

| 함수 | 용도 | 트리거 |
|------|------|--------|
| `animateBars(btn)` | 프로그레스 바 데미지 시뮬레이션 | 데미지 버튼 onclick |
| `startAutoHeal(btn)` | 자동 회복 시작/중지 토글 | 회복 버튼 onclick |
| `addChatMsg(genre)` | 채팅 메시지 추가 | Enter 키 / 전송 버튼 |
| `moveMinimapPlayer(e, el)` | 미니맵 플레이어 이동 | 미니맵 영역 onclick |
| `invDragStart(e)` | 인벤토리 드래그 시작 | ondragstart |
| `invDragOver(e)` | 드래그 오버 허용 | ondragover |
| `invDragEnter(e)` | 드래그 진입 표시 | ondragenter |
| `invDragLeave(e)` | 드래그 이탈 제거 | ondragleave |
| `invDrop(e)` | 드롭 시 아이템 교환 | ondrop |
| `invDragEnd(e)` | 드래그 종료 초기화 | ondragend |
| `updateChecklistProgress()` | 체크리스트 진행률 업데이트 | 체크박스 onchange |
| `toggleNavCategory(catId)` | 사이드바 카테고리 토글 | 카테고리 헤더 onclick |

---

## 5. 데모 라우팅

```javascript
// renderDemo(genre, compId) — 컴포넌트 ID별 데모 분기
function renderDemo(genre, compId) {
    if (compId === 'buttons')    → renderButtonDemo(container, genre)
    if (compId === 'progress')   → renderProgressDemo(container, genre)
    if (compId === 'tooltips')   → renderTooltipDemo(container, genre)
    if (compId === 'hud')        → renderHUDDemo(container, genre)
    if (compId === 'inventory')  → renderInventoryDemo(container, genre)
    if (compId === 'skillbar')   → renderSkillbarDemo(container, genre)
    if (compId === 'chat')       → renderChatDemo(container, genre)
    if (compId === 'minimap')    → renderMinimapDemo(container, genre)
    if (compId === 'dialogs')    → renderDialogDemo(container, genre)
    if (compId === 'navigation') → renderNavDemo(container, genre)
    if (compId === 'cards')      → renderCardDemo(container, genre)
    else → "데모 준비 중..." 표시
}
```

> **참고**: 현재 PC/모바일 탭 전환 시 데모는 변경되지 않습니다. 데모는 항상 `rpg` 장르 스타일로 고정 렌더링됩니다. (`renderDemo('rpg', compId)`)

---

## 6. 구현 위치

| 항목 | 파일 | 위치 |
|------|------|------|
| 데모 라우터 | `app.js` | `renderDemo()` (395행~424행) |
| 버튼 데모 | `app.js` | `renderButtonDemo()` (427행~469행) |
| 프로그레스 데모 | `app.js` | `renderProgressDemo()` (473행~553행) |
| 툴팁 데모 | `app.js` | `renderTooltipDemo()` (556행~606행) |
| HUD 데모 | `app.js` | `renderHUDDemo()` (610행~717행) |
| 인벤토리 데모 | `app.js` | `renderInventoryDemo()` (720행~759행) |
| 스킬바 데모 | `app.js` | `renderSkillbarDemo()` (762행~829행) |
| 채팅 데모 | `app.js` | `renderChatDemo()` (832행~850행) |
| 미니맵 데모 | `app.js` | `renderMinimapDemo()` (853행~879행) |
| 다이얼로그 데모 | `app.js` | `renderDialogDemo()` (882행~903행) |
| 내비게이션 데모 | `app.js` | `renderNavDemo()` (906행~926행) |
| 카드 데모 | `app.js` | `renderCardDemo()` (929행~971행) |
| 글로벌 헬퍼 | `app.js` | (1137행~1256행) |
| 데모 관련 스타일 | `styles.css` | `.demo-*` 클래스들 |
