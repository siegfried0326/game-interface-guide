/* ============================================
   Game UI/UX - Component & UX Law Data
   ============================================ */

/*
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ 게임 UI/UX 디자인 라이브러리 — 전체 데이터 파일                           │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │                                                                         │
 * │ 이 파일은 게임 UI/UX 디자인 라이브러리에서 사용하는 모든 정적 데이터를       │
 * │ 정의합니다. SPA(Single Page Application)에서 data.js로 로드되어            │
 * │ app.js의 라우터와 렌더링 함수에서 참조됩니다.                              │
 * │                                                                         │
 * │ ── 전역 상수 4개 ──                                                      │
 * │                                                                         │
 * │ 1. COMPONENTS (Object)  — UI 컴포넌트 34개                              │
 * │    ├─ 게임 전용 컴포넌트 11개: buttons, cards, dialogs, hud, inventory,  │
 * │    │   navigation, progress, tooltips, minimap, skillbar, chat          │
 * │    │   → type 필드 없음, screenWireframe + platforms 포함               │
 * │    └─ 참조 컴포넌트 23개: badges, toggle, checkbox, radio, dropdown,    │
 * │       slider, inputfield, search, tabs, accordion, snackbar, loading,  │
 * │       lists, datatable, chips, appbar, breadcrumb, pagination,         │
 * │       stepper, menus, carousel, sheets, divider                        │
 * │       → type:'reference', variants + gameApplication 포함              │
 * │                                                                         │
 * │ 2. UX_LAWS (Array)      — UX 법칙 20개                                 │
 * │    → 피츠의 법칙, 힉의 법칙, 야콥의 법칙 등 게임 UX에 적용되는 법칙들      │
 * │    → 카테고리: 행동, 인지, 경험, 시각                                    │
 * │                                                                         │
 * │ 3. COMPONENT_CATEGORIES (Array) — 사이드바 카테고리 7개                  │
 * │    → 게임 전용, 액션, 입력, 표시, 내비게이션, 피드백, 구조                 │
 * │    → 사이드바 메뉴 렌더링 시 컴포넌트를 그룹화하는 데 사용                 │
 * │                                                                         │
 * │ 4. CHECKLIST_DATA (Array) — 게임 UI 체크리스트 7개 카테고리              │
 * │    → 정보구조, 레이아웃, 인터랙션, 시각 디자인, 콘텐츠, 접근성, 성능       │
 * │    → 각 항목에 우선순위(필수/권고)와 설명 포함                            │
 * │                                                                         │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

/*
 * COMPONENTS — UI 컴포넌트 데이터 (Object, 34개 항목)
 *
 * 키(key)는 컴포넌트 ID 문자열이며, 값(value)은 컴포넌트 상세 정보 객체입니다.
 * URL 해시 라우팅에서 #/components/{id} 형태로 사용됩니다.
 *
 * ── 게임 전용 컴포넌트 (11개) ──
 * buttons, cards, dialogs, hud, inventory, navigation,
 * progress, tooltips, minimap, skillbar, chat
 * → 공통 필드: id, name, icon, summary, description, guidelines,
 *   anatomy, relatedLaws, screenWireframe, platforms
 *
 * ── 참조 컴포넌트 (23개) ──
 * badges, toggle, checkbox, ... divider
 * → 공통 필드: id, name, type('reference'), icon, summary, description,
 *   anatomy, variants, gameApplication, guidelines, relatedLaws
 * → screenWireframe/platforms 없음, 대신 variants/gameApplication 포함
 */
const COMPONENTS = {

    /* ──────────────────────────────────────────────────
     * [게임 전용 컴포넌트 #1] 버튼 (buttons)
     * 아래 첫 번째 항목에 각 필드의 역할을 상세히 주석으로 설명합니다.
     * 나머지 게임 전용 컴포넌트도 동일한 구조를 따릅니다.
     * ────────────────────────────────────────────────── */
    buttons: {
        id: 'buttons',                // 고유 식별자 — URL 라우팅 키 (#/components/buttons)
        name: '버튼',                  // 화면에 표시되는 한국어 이름
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="4"/></svg>`,  // 사이드바/목록에 표시되는 SVG 아이콘
        summary: '게임에서 가장 기본적인 인터랙션 요소. 액션 실행, 메뉴 선택, 스킬 사용 등에 활용됩니다.',  // 목록에서 보이는 한 줄 요약
        description: `버튼은 게임 UI에서 가장 기본적이면서도 중요한 컴포넌트입니다. 플레이어의 의도를 시스템에 전달하는 핵심 인터페이스로, 명확한 시각적 피드백과 직관적인 상태 표현이 필수적입니다.

게임 버튼은 일반 웹/앱 버튼과 달리 장르의 세계관을 반영해야 합니다. RPG에서는 판타지풍 장식이, FPS에서는 밀리터리 스타일이, 캐주얼 게임에서는 둥글고 친근한 형태가 적합합니다.`,  // 상세 페이지에 표시되는 긴 설명 (백틱 템플릿 리터럴로 줄바꿈 포함)
        guidelines: [                 // 디자인 가이드라인 배열 — 상세 페이지 "가이드라인" 섹션에 렌더링
            '버튼의 최소 터치 영역은 44x44px을 유지하세요 (피츠의 법칙)',
            '누를 수 있다는 것을 시각적으로 명확히 표현하세요 (어포던스)',
            'Pressed/Hover/Disabled 등 모든 상태에 피드백을 제공하세요',
            '중요한 액션일수록 시각적 무게감을 높이세요 (시각적 위계)',
            '쿨다운, 비용 부족 등 비활성 상태를 명확히 구분하세요',
        ],
        anatomy: {                    // 해부도(anatomy) — 컴포넌트 구성 요소를 시각적으로 분해하여 보여주는 다이어그램
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Button shape -->
                <rect x="100" y="80" width="200" height="60" rx="12" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Background fill -->
                <rect x="102" y="82" width="196" height="56" rx="11" fill="#f3f4f6"/>
                <!-- Icon area -->
                <circle cx="145" cy="110" r="12" fill="#d1d5db" stroke="#9ca3af" stroke-width="1"/>
                <text x="145" y="114" text-anchor="middle" fill="#6b7280" font-size="12">★</text>
                <!-- Label text -->
                <text x="220" y="115" text-anchor="middle" fill="#374151" font-size="14" font-weight="600">Button Label</text>
                <!-- Callout 1: Container -->
                <circle cx="60" cy="60" r="14" fill="#374151"/><text x="60" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="74" y1="60" x2="100" y2="80" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Label Text -->
                <circle cx="340" cy="90" r="14" fill="#374151"/><text x="340" y="95" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="326" y1="95" x2="270" y2="110" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Icon -->
                <circle cx="100" cy="170" r="14" fill="#374151"/><text x="100" y="175" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="110" y1="157" x2="140" y2="122" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Background Fill -->
                <circle cx="340" cy="140" r="14" fill="#374151"/><text x="340" y="145" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="326" y1="138" x2="298" y2="120" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Border -->
                <circle cx="60" cy="140" r="14" fill="#374151"/><text x="60" y="145" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="74" y1="140" x2="100" y2="130" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,                  // svg: 해부도 SVG 마크업 — 번호 콜아웃(callout)으로 각 부위를 가리킴
            parts: [                  // parts: 해부도 번호 콜아웃에 대응하는 부위 설명 배열
                { number: 1, name: 'Container', description: '외부 컨테이너' },       // number: 콜아웃 번호, name: 영문 부위명, description: 한국어 설명
                { number: 2, name: 'Label Text', description: '라벨 텍스트' },
                { number: 3, name: 'Border/Outline', description: '테두리' },
                { number: 4, name: 'Background Fill', description: '배경 채움' },
                { number: 5, name: 'Icon', description: '선행 아이콘' },
            ]
        },
        m3SubTypes: [
            {
                name: 'Filled',
                nameKo: '필드 버튼',
                description: '배경이 채워진 주요 액션 버튼. 가장 높은 시각적 강조로 핵심 액션에 사용합니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="35" width="140" height="50" rx="25" fill="#374151"/>
                    <text x="100" y="65" text-anchor="middle" fill="white" font-size="13" font-weight="500">Button</text>
                </svg>`,
                gameContext: '퀘스트 수락, 전투 시작, 아이템 구매 등 핵심 CTA'
            },
            {
                name: 'Outlined',
                nameKo: '아웃라인 버튼',
                description: '테두리만 있는 중간 강조 버튼. Filled 버튼과 함께 사용하여 보조 액션을 표현합니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="35" width="140" height="50" rx="25" fill="none" stroke="#374151" stroke-width="1.5"/>
                    <text x="100" y="65" text-anchor="middle" fill="#374151" font-size="13" font-weight="500">Button</text>
                </svg>`,
                gameContext: '취소, 돌아가기, 건너뛰기 등 보조 액션'
            },
            {
                name: 'Filled Tonal',
                nameKo: '톤 필드 버튼',
                description: '부드러운 배경색의 버튼. Filled보다 낮은 강조로 보조 액션이나 토글 상태에 적합합니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="35" width="140" height="50" rx="25" fill="#e5e7eb"/>
                    <text x="100" y="65" text-anchor="middle" fill="#374151" font-size="13" font-weight="500">Button</text>
                </svg>`,
                gameContext: '필터 선택, 장비 탭 전환, 옵션 토글'
            },
            {
                name: 'Elevated',
                nameKo: '엘리베이티드 버튼',
                description: '그림자로 부유 효과를 주는 버튼. 배경과 분리가 필요할 때 사용합니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="33" y="40" width="140" height="50" rx="25" fill="#9ca3af" opacity="0.3"/>
                    <rect x="30" y="35" width="140" height="50" rx="25" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
                    <text x="100" y="65" text-anchor="middle" fill="#374151" font-size="13" font-weight="500">Button</text>
                </svg>`,
                gameContext: '맵 위 플로팅 UI, 게임 내 팝업 버튼'
            },
            {
                name: 'Text',
                nameKo: '텍스트 버튼',
                description: '컨테이너 없이 텍스트만으로 구성된 최소 강조 버튼. 부가 기능이나 링크형 액션에 사용합니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="100" y="65" text-anchor="middle" fill="#374151" font-size="13" font-weight="500">Button</text>
                    <line x1="60" y1="72" x2="140" y2="72" stroke="#374151" stroke-width="0.5" opacity="0.3"/>
                </svg>`,
                gameContext: '"더 보기", "건너뛰기", "세부정보" 등 부가 링크'
            }
        ],
        relatedLaws: ['fitts-law', 'feedback-principle', 'aesthetic-usability', 'doherty-threshold'],  // 관련 UX 법칙 ID 배열 — UX_LAWS의 id와 매칭되어 상세 페이지에서 링크로 표시
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Button Placement</text>
            <!-- Game view placeholder -->
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Top-right: Menu/Settings buttons -->
            <rect x="380" y="32" width="36" height="36" rx="4" stroke="#6b7280" stroke-width="1.5"/>
            <line x1="384" y1="36" x2="412" y2="64" stroke="#6b7280" stroke-width="0.5"/>
            <line x1="412" y1="36" x2="384" y2="64" stroke="#6b7280" stroke-width="0.5"/>
            <text x="398" y="82" fill="#9ca3af" font-size="7" text-anchor="middle">설정</text>
            <rect x="336" y="32" width="36" height="36" rx="4" stroke="#6b7280" stroke-width="1.5"/>
            <line x1="340" y1="36" x2="368" y2="64" stroke="#6b7280" stroke-width="0.5"/>
            <line x1="368" y1="36" x2="340" y2="64" stroke="#6b7280" stroke-width="0.5"/>
            <text x="354" y="82" fill="#9ca3af" font-size="7" text-anchor="middle">메뉴</text>
            <!-- Bottom-center: Action buttons -->
            <rect x="155" y="210" width="170" height="42" rx="6" stroke="#fbbf24" stroke-width="2" stroke-dasharray="0"/>
            <rect x="160" y="215" width="52" height="32" rx="4" fill="#fbbf2418" stroke="#fbbf24" stroke-width="1"/>
            <text x="186" y="235" fill="#fbbf24" font-size="9" text-anchor="middle">공격</text>
            <rect x="218" y="215" width="52" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2480" stroke-width="1"/>
            <text x="244" y="235" fill="#fbbf24" font-size="9" text-anchor="middle">스킬</text>
            <rect x="276" y="215" width="44" height="32" rx="4" fill="none" stroke="#fbbf2460" stroke-width="1"/>
            <text x="298" y="235" fill="#fbbf2499" font-size="9" text-anchor="middle">아이템</text>
            <text x="240" y="262" fill="#fbbf24" font-size="7" text-anchor="middle">▲ 액션 버튼 영역</text>
            <!-- Right side: Quick actions -->
            <rect x="430" y="120" width="36" height="36" rx="18" stroke="#60a5fa" stroke-width="1.5"/>
            <text x="448" y="142" fill="#60a5fa" font-size="14" text-anchor="middle">⟳</text>
            <rect x="430" y="164" width="36" height="36" rx="18" stroke="#60a5fa" stroke-width="1.5"/>
            <text x="448" y="186" fill="#60a5fa" font-size="12" text-anchor="middle">▶</text>
            <text x="448" y="210" fill="#60a5fa" font-size="6" text-anchor="middle">퀵 액션</text>
            <!-- Labels with lines -->
            <circle cx="430" cy="82" r="2" fill="#fbbf24"/>
            <line x1="430" y1="82" x2="418" y2="50" stroke="#fbbf2460" stroke-width="0.5" stroke-dasharray="2"/>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Button Placement</text>
            <!-- Left: Virtual joystick area -->
            <circle cx="95" cy="148" r="36" stroke="#ffffff20" stroke-width="1.5" stroke-dasharray="4"/>
            <circle cx="95" cy="148" r="14" fill="#ffffff10" stroke="#ffffff30" stroke-width="1"/>
            <text x="95" y="194" fill="#ffffff30" font-size="5" text-anchor="middle">이동 조이스틱</text>
            <!-- Top-left: Menu hamburger button -->
            <rect x="38" y="28" width="26" height="26" rx="6" fill="#ffffff10" stroke="#ffffff30" stroke-width="1"/>
            <line x1="44" y1="36" x2="58" y2="36" stroke="#ffffff50" stroke-width="1.5"/>
            <line x1="44" y1="41" x2="58" y2="41" stroke="#ffffff50" stroke-width="1.5"/>
            <line x1="44" y1="46" x2="58" y2="46" stroke="#ffffff50" stroke-width="1.5"/>
            <text x="51" y="64" fill="#ffffff40" font-size="5" text-anchor="middle">메뉴</text>
            <!-- Right: Main action button (Attack) — large circle -->
            <circle cx="418" cy="142" r="28" fill="#ef444420" stroke="#ef4444" stroke-width="1.5"/>
            <text x="418" y="146" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">공격</text>
            <text x="418" y="178" fill="#ef4444" font-size="5" text-anchor="middle">메인 액션</text>
            <!-- Right: Secondary action buttons -->
            <circle cx="375" cy="174" r="18" fill="#3b82f620" stroke="#3b82f6" stroke-width="1"/>
            <text x="375" y="178" fill="#3b82f6" font-size="7" text-anchor="middle">회피</text>
            <circle cx="452" cy="104" r="18" fill="#34d39920" stroke="#34d399" stroke-width="1"/>
            <text x="452" y="108" fill="#34d399" font-size="7" text-anchor="middle">상호</text>
            <!-- Center: Confirm/Cancel dialog example -->
            <rect x="155" y="55" width="170" height="100" rx="8" fill="#1a1b2690" stroke="#ffffff20" stroke-width="1"/>
            <text x="240" y="76" fill="#ffffff80" font-size="8" text-anchor="middle">아이템을 사용하시겠습니까?</text>
            <rect x="170" y="95" width="72" height="26" rx="6" fill="#3b82f6"/>
            <text x="206" y="112" fill="#fff" font-size="8" text-anchor="middle">확인</text>
            <rect x="248" y="95" width="64" height="26" rx="6" fill="none" stroke="#ffffff40" stroke-width="1"/>
            <text x="280" y="112" fill="#ffffff80" font-size="8" text-anchor="middle">취소</text>
            <text x="240" y="148" fill="#ffffff30" font-size="5" text-anchor="middle">버튼 계층 구조</text>
        </svg>`,
        },                      // screenWireframe: 게임 화면 내 해당 컴포넌트의 실제 배치를 보여주는 와이어프레임 SVG (게임 전용 컴포넌트에만 존재)
        platforms: {                  // platforms: 플랫폼별(PC/모바일) 디자인 가이드 — 게임 전용 컴포넌트에만 존재
            pc: {                     // pc: PC 환경 가이드
                title: 'PC 버튼',     // title: 플랫폼별 제목
                description: 'PC 환경에서는 마우스와 키보드를 활용한 정밀한 인터랙션이 가능합니다. 호버 상태 피드백, 키보드 단축키 바인딩, 우클릭 컨텍스트 메뉴 등 다양한 입력 방식을 지원해야 합니다.',  // description: 플랫폼별 상세 설명
                features: [           // features: 해당 플랫폼에서의 주요 디자인 포인트 배열
                    'Hover/Focus/Active 등 세밀한 상태 피드백 필수',
                    '키보드 단축키 표시 (예: Q, W, E, R)',
                    '작은 버튼도 가능 — 최소 32x32px (마우스 정밀도 활용)',
                    '우클릭 메뉴, 더블클릭 등 추가 인터랙션 지원',
                    '툴팁을 통한 상세 정보 제공 (마우스 호버 시)'
                ]
            },
            mobile: {                 // mobile: 모바일 환경 가이드
                title: '모바일 버튼',
                description: '모바일에서는 터치 기반 인터랙션이 핵심입니다. 엄지 도달 범위(Thumb Zone)를 고려한 배치와 충분한 터치 영역이 필수적이며, 호버 상태가 없으므로 시각적 어포던스가 더욱 중요합니다.',
                features: [
                    '최소 터치 영역 44x44px 유지 (Apple HIG 기준)',
                    '엄지 도달 범위(Thumb Zone) 기반 하단 배치',
                    '호버 상태 없음 — Press/Release 피드백 강화',
                    '햅틱 피드백으로 물리적 반응감 제공',
                    '버튼 간 최소 8px 간격으로 오터치 방지'
                ]
            },
        }
    },
    /* ── buttons 필드 설명 끝. 이하 cards ~ chat까지 동일 구조 (게임 전용 컴포넌트) ── */

    /* [게임 전용 #2] 카드 — 아이템/캐릭터/장비 정보를 카드 형태로 표시 */
    cards: {
        id: 'cards',
        name: '카드',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>`,
        summary: '아이템, 캐릭터, 퀘스트 등의 정보를 담는 컨테이너. 시각적 그룹핑과 스캔성을 높입니다.',
        description: '카드는 관련 정보를 하나의 시각적 단위로 묶어주는 컨테이너 컴포넌트입니다.',
        guidelines: [
            '카드 내 정보의 시각적 위계를 명확히 하세요',
            '호버/선택 상태에 분명한 피드백을 제공하세요',
            '카드 사이 일관된 간격을 유지하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Card container -->
                <rect x="120" y="20" width="160" height="210" rx="10" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Thumbnail area -->
                <rect x="128" y="28" width="144" height="80" rx="6" fill="#d1d5db"/>
                <text x="200" y="72" text-anchor="middle" fill="#9ca3af" font-size="11">Image</text>
                <!-- Title -->
                <rect x="128" y="118" width="100" height="12" rx="2" fill="#9ca3af"/>
                <!-- Description -->
                <rect x="128" y="140" width="144" height="8" rx="2" fill="#d1d5db"/>
                <rect x="128" y="154" width="110" height="8" rx="2" fill="#d1d5db"/>
                <!-- Action area -->
                <rect x="128" y="180" width="60" height="28" rx="6" fill="#d1d5db" stroke="#9ca3af" stroke-width="1"/>
                <text x="158" y="198" text-anchor="middle" fill="#6b7280" font-size="9">Action</text>
                <!-- Callout 1: Container -->
                <circle cx="60" cy="40" r="14" fill="#374151"/><text x="60" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="74" y1="44" x2="120" y2="60" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Thumbnail -->
                <circle cx="340" cy="50" r="14" fill="#374151"/><text x="340" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="326" y1="55" x2="272" y2="65" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Title -->
                <circle cx="340" cy="118" r="14" fill="#374151"/><text x="340" y="123" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="326" y1="118" x2="228" y2="118" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Description -->
                <circle cx="340" cy="155" r="14" fill="#374151"/><text x="340" y="160" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="326" y1="152" x2="272" y2="148" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Action Area -->
                <circle cx="60" cy="194" r="14" fill="#374151"/><text x="60" y="199" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="74" y1="194" x2="128" y2="194" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Container', description: '카드 컨테이너' },
                { number: 2, name: 'Thumbnail/Image', description: '썸네일 영역' },
                { number: 3, name: 'Title', description: '제목' },
                { number: 4, name: 'Description', description: '설명 텍스트' },
                { number: 5, name: 'Action Area', description: '액션 영역' },
            ]
        },
        m3SubTypes: [
            {
                name: 'Elevated',
                nameKo: '엘리베이티드 카드',
                description: '그림자로 부유감을 주는 카드. 배경에서 분리되어 돋보임.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="43" y="18" width="120" height="90" rx="12" fill="#9ca3af" opacity="0.2"/><rect x="40" y="15" width="120" height="90" rx="12" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/><rect x="50" y="25" width="100" height="40" rx="6" fill="#e5e7eb"/><rect x="50" y="75" width="70" height="8" rx="3" fill="#e5e7eb"/><rect x="50" y="88" width="50" height="6" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '아이템 카드, 캐릭터 프로필 카드'
            },
            {
                name: 'Filled',
                nameKo: '필드 카드',
                description: '배경색이 채워진 카드. 그림자 없이 색상으로 구분.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="15" width="120" height="90" rx="12" fill="#e5e7eb"/><rect x="50" y="25" width="100" height="40" rx="6" fill="#f9fafb"/><rect x="50" y="75" width="70" height="8" rx="3" fill="#9ca3af"/><rect x="50" y="88" width="50" height="6" rx="3" fill="#9ca3af"/></svg>`,
                gameContext: '인벤토리 슬롯, 스킬 목록 카드'
            },
            {
                name: 'Outlined',
                nameKo: '아웃라인 카드',
                description: '테두리만 있는 카드. 가장 낮은 시각적 강조.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="15" width="120" height="90" rx="12" fill="none" stroke="#374151" stroke-width="1.5"/><rect x="50" y="25" width="100" height="40" rx="6" fill="#e5e7eb"/><rect x="50" y="75" width="70" height="8" rx="3" fill="#e5e7eb"/><rect x="50" y="88" width="50" height="6" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '장비 비교 카드, 통계 카드'
            }
        ],
        relatedLaws: ['law-proximity', 'law-similarity', 'aesthetic-usability', 'law-pragnanz'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Card UI Layout</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Card hand area (bottom) -->
            <rect x="80" y="180" width="320" height="70" rx="6" stroke="#a78bfa" stroke-width="2"/>
            <rect x="95" y="188" width="48" height="56" rx="3" fill="#a78bfa18" stroke="#a78bfa" stroke-width="1"/>
            <line x1="99" y1="192" x2="139" y2="240" stroke="#a78bfa40" stroke-width="0.5"/>
            <line x1="139" y1="192" x2="99" y2="240" stroke="#a78bfa40" stroke-width="0.5"/>
            <rect x="150" y="185" width="48" height="56" rx="3" fill="#a78bfa25" stroke="#a78bfa" stroke-width="1.2"/>
            <line x1="154" y1="189" x2="194" y2="237" stroke="#a78bfa40" stroke-width="0.5"/>
            <line x1="194" y1="189" x2="154" y2="237" stroke="#a78bfa40" stroke-width="0.5"/>
            <rect x="205" y="188" width="48" height="56" rx="3" fill="#a78bfa18" stroke="#a78bfa" stroke-width="1"/>
            <rect x="260" y="188" width="48" height="56" rx="3" fill="#a78bfa18" stroke="#a78bfa" stroke-width="1"/>
            <rect x="315" y="188" width="48" height="56" rx="3" fill="#a78bfa18" stroke="#a78bfa" stroke-width="1"/>
            <text x="240" y="262" fill="#a78bfa" font-size="7" text-anchor="middle">▲ 카드 핸드 영역 (최대 5장)</text>
            <!-- Card detail panel (right side) -->
            <rect x="360" y="32" width="100" height="140" rx="4" stroke="#f472b6" stroke-width="1.5"/>
            <rect x="370" y="42" width="80" height="50" rx="2" fill="#f472b618" stroke="#f472b660" stroke-width="0.5"/>
            <line x1="370" y1="42" x2="450" y2="92" stroke="#f472b630" stroke-width="0.5"/>
            <line x1="450" y1="42" x2="370" y2="92" stroke="#f472b630" stroke-width="0.5"/>
            <text x="410" y="108" fill="#f472b6" font-size="7" text-anchor="middle">카드 이름</text>
            <rect x="370" y="115" width="80" height="6" rx="2" fill="#f472b620"/>
            <rect x="370" y="125" width="60" height="6" rx="2" fill="#f472b615"/>
            <rect x="370" y="135" width="70" height="6" rx="2" fill="#f472b615"/>
            <text x="410" y="158" fill="#f472b690" font-size="6" text-anchor="middle">코스트: ◆◆◆</text>
            <text x="410" y="180" fill="#f472b6" font-size="6" text-anchor="middle">카드 상세 →</text>
            <!-- Deck/Discard -->
            <rect x="20" y="196" width="44" height="52" rx="3" stroke="#6b728080" stroke-width="1" stroke-dasharray="3"/>
            <text x="42" y="226" fill="#6b7280" font-size="7" text-anchor="middle">덱</text>
            <text x="42" y="236" fill="#6b728080" font-size="6" text-anchor="middle">23장</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Card UI</text>
            <!-- Left: Character info card -->
            <rect x="40" y="32" width="110" height="164" rx="6" fill="#1a1b26" stroke="#a78bfa" stroke-width="1.5"/>
            <rect x="46" y="38" width="98" height="50" rx="4" fill="#a78bfa15"/>
            <text x="95" y="68" fill="#a78bfa" font-size="14" text-anchor="middle">⚔</text>
            <text x="95" y="102" fill="#ffffff90" font-size="8" text-anchor="middle">전사 Lv.45</text>
            <rect x="52" y="112" width="88" height="5" rx="2" fill="#ef444430"/>
            <rect x="52" y="112" width="60" height="5" rx="2" fill="#ef444490"/>
            <text x="52" y="108" fill="#ef4444" font-size="5">HP</text>
            <rect x="52" y="124" width="88" height="5" rx="2" fill="#3b82f630"/>
            <rect x="52" y="124" width="35" height="5" rx="2" fill="#3b82f690"/>
            <text x="52" y="120" fill="#3b82f6" font-size="5">MP</text>
            <text x="95" y="148" fill="#fbbf24" font-size="7" text-anchor="middle">★★★★</text>
            <text x="95" y="170" fill="#fbbf24" font-size="5" text-anchor="middle">ATK 245 · DEF 180</text>
            <text x="95" y="204" fill="#a78bfa" font-size="5" text-anchor="middle">캐릭터 카드</text>
            <!-- Center: Item reward card -->
            <rect x="168" y="36" width="110" height="140" rx="6" fill="#1a1b26" stroke="#fbbf24" stroke-width="1.5"/>
            <rect x="174" y="42" width="98" height="44" rx="4" fill="#fbbf2415"/>
            <text x="223" y="70" fill="#fbbf24" font-size="14" text-anchor="middle">🗡</text>
            <text x="223" y="96" fill="#ffffff90" font-size="7" text-anchor="middle">전설의 검</text>
            <text x="223" y="110" fill="#fbbf24" font-size="6" text-anchor="middle">ATK +120</text>
            <rect x="183" y="120" width="80" height="22" rx="5" fill="#fbbf2430" stroke="#fbbf24" stroke-width="0.5"/>
            <text x="223" y="135" fill="#fbbf24" font-size="7" text-anchor="middle">장착하기</text>
            <text x="223" y="186" fill="#fbbf24" font-size="5" text-anchor="middle">아이템 카드</text>
            <!-- Right: Quest card + Warning card -->
            <rect x="296" y="32" width="148" height="68" rx="6" fill="#1a1b26" stroke="#f59e0b60" stroke-width="1"/>
            <text x="370" y="50" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">새 퀘스트!</text>
            <text x="370" y="64" fill="#ffffff60" font-size="6" text-anchor="middle">드래곤 처치 (0/1)</text>
            <rect x="310" y="72" width="120" height="4" rx="2" fill="#f59e0b20"/>
            <rect x="310" y="72" width="12" height="4" rx="2" fill="#f59e0b60"/>
            <text x="370" y="90" fill="#f59e0b80" font-size="5" text-anchor="middle">보상: 5000 골드</text>
            <rect x="296" y="114" width="148" height="50" rx="6" fill="#1a1b26" stroke="#ef444460" stroke-width="1"/>
            <text x="370" y="134" fill="#ffffff60" font-size="6" text-anchor="middle">⚠ 체력이 낮습니다!</text>
            <rect x="310" y="142" width="120" height="4" rx="2" fill="#ef444430"/>
            <rect x="310" y="142" width="24" height="4" rx="2" fill="#ef444490"/>
            <text x="370" y="158" fill="#ef4444" font-size="5" text-anchor="middle">경고 카드</text>
            <rect x="296" y="178" width="148" height="24" rx="6" fill="#34d39910" stroke="#34d39960" stroke-width="1"/>
            <text x="370" y="194" fill="#34d399" font-size="6" text-anchor="middle">✓ 업적 달성: 첫 번째 승리</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 카드',
                description: 'PC에서 카드 UI는 넓은 화면을 활용한 그리드 레이아웃과 호버 시 상세 정보 확장이 가능합니다. 드래그 앤 드롭으로 카드 배치, 우클릭으로 빠른 액션 등 다양한 상호작용을 지원합니다.',
                features: [
                    '호버 시 카드 확대 및 상세 정보 표시',
                    '드래그 앤 드롭으로 카드 이동/배치',
                    '그리드 레이아웃 — 한 화면에 많은 카드 표시 가능',
                    '우클릭 컨텍스트 메뉴 (사용/분해/잠금 등)',
                    '키보드 방향키로 카드 선택 탐색'
                ]
            },
            mobile: {
                title: '모바일 카드',
                description: '모바일에서는 카드를 스와이프로 넘기거나 탭하여 상세 정보를 확인합니다. 화면 크기 제한으로 한 번에 표시할 카드 수를 제한하고, 캐러셀이나 스택 형태를 활용합니다.',
                features: [
                    '스와이프로 카드 넘기기 (캐러셀 패턴)',
                    '탭하여 카드 상세 정보 전체 화면 확장',
                    '핀치 줌으로 카드 확대/축소',
                    '길게 누르기(Long Press)로 퀵 액션 메뉴',
                    '한 줄 2~3열 그리드, 스크롤로 추가 카드 확인'
                ]
            },
        }
    },

    /* [게임 전용 #3] 다이얼로그 — 퀘스트 수락, 아이템 확인 등 모달 대화상자 */
    dialogs: {
        id: 'dialogs',
        name: '다이얼로그',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="3"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
        summary: '확인, 경고, 선택 등 사용자 결정이 필요한 모달 창. 게임 흐름을 중단시키므로 신중히 사용합니다.',
        description: '다이얼로그는 사용자의 명시적 결정이 필요할 때 표시하는 모달 컴포넌트입니다.',
        guidelines: [
            '게임 플레이 중에는 최소한으로 사용하세요',
            '긍정 액션을 시각적으로 강조하세요',
            'ESC 키로 닫을 수 있게 하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Overlay background -->
                <rect x="0" y="0" width="400" height="250" fill="#e5e7eb" opacity="0.4"/>
                <!-- Dialog container -->
                <rect x="80" y="35" width="240" height="180" rx="12" fill="#f9fafb" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Title bar -->
                <rect x="80" y="35" width="240" height="40" rx="12" fill="#e5e7eb"/>
                <rect x="80" y="55" width="240" height="20" fill="#e5e7eb"/>
                <text x="200" y="60" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Dialog Title</text>
                <!-- Close button -->
                <text x="300" y="58" text-anchor="middle" fill="#6b7280" font-size="14">x</text>
                <!-- Content area -->
                <rect x="96" y="90" width="208" height="60" rx="4" fill="#f3f4f6"/>
                <rect x="106" y="100" width="140" height="8" rx="2" fill="#d1d5db"/>
                <rect x="106" y="115" width="180" height="8" rx="2" fill="#d1d5db"/>
                <rect x="106" y="130" width="100" height="8" rx="2" fill="#d1d5db"/>
                <!-- Action buttons -->
                <rect x="196" y="170" width="56" height="28" rx="6" fill="#d1d5db"/><text x="224" y="188" text-anchor="middle" fill="#6b7280" font-size="9">Cancel</text>
                <rect x="258" y="170" width="56" height="28" rx="6" fill="#9ca3af"/><text x="286" y="188" text-anchor="middle" fill="white" font-size="9">OK</text>
                <!-- Callout 1: Overlay -->
                <circle cx="30" cy="20" r="14" fill="#374151"/><text x="30" y="25" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="44" y1="24" x2="80" y2="40" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Container -->
                <circle cx="370" cy="50" r="14" fill="#374151"/><text x="370" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="356" y1="55" x2="320" y2="70" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Title Bar -->
                <circle cx="30" cy="55" r="14" fill="#374151"/><text x="30" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="44" y1="55" x2="80" y2="55" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Content Area -->
                <circle cx="370" cy="120" r="14" fill="#374151"/><text x="370" y="125" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="356" y1="120" x2="304" y2="120" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Action Buttons -->
                <circle cx="370" cy="184" r="14" fill="#374151"/><text x="370" y="189" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="356" y1="184" x2="314" y2="184" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Overlay', description: '배경 오버레이' },
                { number: 2, name: 'Container', description: '다이얼로그 컨테이너' },
                { number: 3, name: 'Title Bar', description: '제목 바' },
                { number: 4, name: 'Content Area', description: '콘텐츠 영역' },
                { number: 5, name: 'Action Buttons', description: '액션 버튼' },
            ]
        },
        m3SubTypes: [
            {
                name: 'Basic',
                nameKo: '기본 다이얼로그',
                description: '제목, 내용, 액션 버튼으로 구성된 표준 대화상자.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="15" width="150" height="90" rx="12" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><text x="100" y="38" text-anchor="middle" fill="#374151" font-size="10" font-weight="bold">Title</text><text x="100" y="55" text-anchor="middle" fill="#6b7280" font-size="8">Description text here</text><rect x="45" y="72" width="48" height="20" rx="4" fill="none" stroke="#374151" stroke-width="1"/><text x="69" y="86" text-anchor="middle" fill="#374151" font-size="8">취소</text><rect x="107" y="72" width="48" height="20" rx="4" fill="#374151"/><text x="131" y="86" text-anchor="middle" fill="white" font-size="8">확인</text></svg>`,
                gameContext: '퀘스트 수락, 아이템 구매 확인, 경고 메시지'
            },
            {
                name: 'Full-screen',
                nameKo: '전체화면 다이얼로그',
                description: '화면 전체를 차지하는 대화상자. 복잡한 입력에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="190" height="110" rx="4" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="5" y="5" width="190" height="30" rx="4" fill="#374151"/><text x="40" y="24" fill="white" font-size="9">✕</text><text x="100" y="24" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Title</text><text x="170" y="24" fill="white" font-size="9">저장</text><rect x="20" y="50" width="160" height="12" rx="3" fill="#e5e7eb"/><rect x="20" y="70" width="120" height="10" rx="3" fill="#e5e7eb"/><rect x="20" y="88" width="140" height="10" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '캐릭터 생성, 상세 설정, 길드 가입 양식'
            },
            {
                name: 'List',
                nameKo: '리스트 다이얼로그',
                description: '목록에서 항목을 선택하는 다이얼로그.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="140" height="100" rx="12" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><text x="100" y="30" text-anchor="middle" fill="#374151" font-size="10" font-weight="bold">선택하세요</text><line x1="30" y1="36" x2="170" y2="36" stroke="#e5e7eb" stroke-width="1"/><circle cx="52" cy="52" r="6" fill="none" stroke="#374151" stroke-width="1.5"/><circle cx="52" cy="52" r="3" fill="#374151"/><text x="66" y="56" fill="#374151" font-size="9">옵션 A</text><circle cx="52" cy="72" r="6" fill="none" stroke="#9ca3af" stroke-width="1.5"/><text x="66" y="76" fill="#6b7280" font-size="9">옵션 B</text><circle cx="52" cy="92" r="6" fill="none" stroke="#9ca3af" stroke-width="1.5"/><text x="66" y="96" fill="#6b7280" font-size="9">옵션 C</text></svg>`,
                gameContext: '서버 선택, 난이도 선택, 채널 선택'
            }
        ],
        relatedLaws: ['hicks-law', 'jakobs-law', 'feedback-principle', 'consistency'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Dialog Overlay</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Dimmed overlay -->
            <rect x="10" y="24" width="460" height="236" rx="3" fill="#00000060"/>
            <!-- Dialog box (center) -->
            <rect x="100" y="55" width="280" height="170" rx="8" fill="#1e1f2e" stroke="#f59e0b" stroke-width="2"/>
            <!-- Close button -->
            <circle cx="365" cy="70" r="10" stroke="#6b7280" stroke-width="1"/>
            <text x="365" y="74" fill="#6b7280" font-size="10" text-anchor="middle">✕</text>
            <!-- Title area -->
            <rect x="130" y="70" width="160" height="12" rx="2" fill="#f59e0b30"/>
            <text x="210" y="80" fill="#f59e0b" font-size="9" text-anchor="middle">다이얼로그 제목</text>
            <!-- Content area -->
            <rect x="120" y="95" width="240" height="60" rx="4" stroke="#ffffff15" stroke-width="1"/>
            <rect x="130" y="105" width="180" height="6" rx="2" fill="#ffffff15"/>
            <rect x="130" y="117" width="160" height="6" rx="2" fill="#ffffff10"/>
            <rect x="130" y="129" width="200" height="6" rx="2" fill="#ffffff10"/>
            <text x="240" y="148" fill="#6b728080" font-size="6" text-anchor="middle">콘텐츠 영역</text>
            <!-- Action buttons -->
            <rect x="140" y="172" width="90" height="32" rx="6" fill="#f59e0b30" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="185" y="192" fill="#f59e0b" font-size="10" text-anchor="middle">확인</text>
            <rect x="250" y="172" width="90" height="32" rx="6" fill="none" stroke="#6b728060" stroke-width="1"/>
            <text x="295" y="192" fill="#6b7280" font-size="10" text-anchor="middle">취소</text>
            <!-- Labels -->
            <text x="240" y="235" fill="#f59e0b90" font-size="7" text-anchor="middle">모달 다이얼로그 — 배경 딤 처리 + 포커스 트랩</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Dialog</text>
            <!-- Darkened game background overlay -->
            <rect x="32" y="8" width="436" height="200" fill="#00000050"/>
            <!-- Center dialog box -->
            <rect x="100" y="30" width="280" height="160" rx="10" fill="#1a1b2e" stroke="#ffffff20" stroke-width="1"/>
            <!-- Dialog header -->
            <rect x="100" y="30" width="280" height="32" rx="10" fill="#3b82f620"/>
            <rect x="100" y="52" width="280" height="10" fill="#3b82f620"/>
            <text x="240" y="52" fill="#ffffff90" font-size="9" text-anchor="middle" font-weight="bold">상점 — 아이템 구매</text>
            <!-- Close button -->
            <circle cx="366" cy="46" r="10" fill="#ffffff10" stroke="#ffffff30" stroke-width="0.5"/>
            <text x="366" y="50" fill="#ffffff60" font-size="10" text-anchor="middle">×</text>
            <!-- Dialog content -->
            <text x="240" y="78" fill="#ffffff70" font-size="7" text-anchor="middle">치유의 물약을 구매하시겠습니까?</text>
            <!-- Item preview -->
            <rect x="195" y="86" width="90" height="40" rx="4" fill="#ffffff08" stroke="#ffffff15" stroke-width="0.5"/>
            <text x="240" y="106" fill="#34d399" font-size="14" text-anchor="middle">🧪</text>
            <text x="240" y="122" fill="#fbbf24" font-size="7" text-anchor="middle">💰 150G</text>
            <!-- Quantity selector -->
            <rect x="165" y="132" width="28" height="22" rx="4" fill="#ffffff10" stroke="#ffffff30" stroke-width="0.5"/>
            <text x="179" y="147" fill="#ffffff80" font-size="10" text-anchor="middle">−</text>
            <text x="240" y="147" fill="#ffffff" font-size="10" text-anchor="middle">3</text>
            <rect x="287" y="132" width="28" height="22" rx="4" fill="#ffffff10" stroke="#ffffff30" stroke-width="0.5"/>
            <text x="301" y="147" fill="#ffffff80" font-size="10" text-anchor="middle">+</text>
            <!-- Action buttons -->
            <rect x="125" y="162" width="100" height="24" rx="6" fill="#3b82f6"/>
            <text x="175" y="178" fill="#fff" font-size="8" text-anchor="middle">구매 (450G)</text>
            <rect x="255" y="162" width="100" height="24" rx="6" fill="none" stroke="#ffffff40" stroke-width="1"/>
            <text x="305" y="178" fill="#ffffff80" font-size="8" text-anchor="middle">취소</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 다이얼로그',
                description: 'PC에서 다이얼로그는 화면 중앙에 모달로 표시되며, ESC 키로 닫기, Tab으로 포커스 이동 등 키보드 인터랙션을 지원합니다. 넓은 화면을 활용해 더 많은 정보를 한번에 표시할 수 있습니다.',
                features: [
                    'ESC 키로 닫기, Enter로 확인 (키보드 네비게이션)',
                    '포커스 트랩 — 다이얼로그 안에서만 Tab 이동',
                    '배경 딤 + 클릭 시 닫기 옵션',
                    '최대 너비 480~600px, 중앙 정렬',
                    '애니메이션: 페이드+스케일 인/아웃'
                ]
            },
            mobile: {
                title: '모바일 다이얼로그',
                description: '모바일 다이얼로그는 화면 하단 시트(Bottom Sheet) 또는 전체 화면 모달로 표시됩니다. 터치 영역을 고려한 큰 버튼과 스와이프 닫기를 지원해야 합니다.',
                features: [
                    '하단 시트(Bottom Sheet) 패턴 활용 — 엄지 접근 용이',
                    '스와이프 다운으로 닫기 제스처 지원',
                    '버튼 세로 배치 — 전체 너비 사용',
                    '전체 화면 모달 (복잡한 내용의 경우)',
                    '뒤로 가기 버튼/제스처로 닫기 지원'
                ]
            },
        }
    },

    /* [게임 전용 #4] HUD — HP/MP 바, 미니맵, 스킬바 등 게임 화면 오버레이 UI */
    hud: {
        id: 'hud',
        name: 'HUD',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 7h3M14 7h3M7 12h10M7 17h5"/></svg>`,
        summary: 'Heads-Up Display. 체력, 미니맵, 탄약 등 게임 상태를 실시간으로 보여주는 오버레이 UI입니다.',
        description: 'HUD는 게임 플레이 중 항상 화면에 표시되는 정보 오버레이입니다.',
        guidelines: [
            '시야를 최소한으로 가리세요',
            '가장 중요한 정보를 화면 가장자리에 배치하세요',
            '전투 중에는 핵심 정보만 표시하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Game screen frame -->
                <rect x="20" y="10" width="360" height="230" rx="6" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
                <!-- Health bar (top-left) -->
                <rect x="35" y="25" width="120" height="14" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="37" y="27" width="80" height="10" rx="3" fill="#d1d5db"/>
                <!-- Resource bar (below health) -->
                <rect x="35" y="45" width="100" height="10" rx="3" fill="#e5e7eb" stroke="#9ca3af" stroke-width="0.8"/>
                <rect x="37" y="47" width="55" height="6" rx="2" fill="#d1d5db"/>
                <!-- Player info (top-left corner) -->
                <circle cx="40" cy="75" r="10" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <text x="55" y="79" fill="#6b7280" font-size="8">Lv.42</text>
                <!-- Minimap area (top-right) -->
                <rect x="300" y="25" width="65" height="65" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <circle cx="332" cy="57" r="3" fill="#9ca3af"/>
                <!-- Skill slots (bottom-center) -->
                <rect x="130" y="205" width="140" height="28" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="135" y="208" width="22" height="22" rx="3" fill="#d1d5db"/>
                <rect x="161" y="208" width="22" height="22" rx="3" fill="#d1d5db"/>
                <rect x="187" y="208" width="22" height="22" rx="3" fill="#d1d5db"/>
                <rect x="213" y="208" width="22" height="22" rx="3" fill="#d1d5db"/>
                <rect x="239" y="208" width="22" height="22" rx="3" fill="#d1d5db"/>
                <!-- Status icons (below minimap) -->
                <rect x="310" y="100" width="16" height="16" rx="3" fill="#d1d5db"/>
                <rect x="330" y="100" width="16" height="16" rx="3" fill="#d1d5db"/>
                <rect x="350" y="100" width="16" height="16" rx="3" fill="#d1d5db"/>
                <!-- 수정: 마커#1과 #2 간격을 넓혀 겹침 방지 (최소 30px 간격 확보) -->
                <!-- Callout 1: Health Bar -->
                <circle cx="210" cy="18" r="14" fill="#374151"/><text x="210" y="23" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="196" y1="22" x2="155" y2="30" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Resource Bar -->
                <circle cx="175" cy="58" r="14" fill="#374151"/><text x="175" y="63" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="161" y1="56" x2="135" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Player Info -->
                <circle cx="115" cy="80" r="14" fill="#374151"/><text x="115" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="101" y1="78" x2="75" y2="76" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Minimap -->
                <circle cx="295" cy="110" r="14" fill="#374151"/><text x="295" y="115" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="302" y1="97" x2="310" y2="85" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 6: Skill Slots -->
                <circle cx="100" cy="218" r="14" fill="#374151"/><text x="100" y="223" text-anchor="middle" fill="white" font-size="12" font-weight="bold">6</text>
                <line x1="114" y1="218" x2="130" y2="218" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Status Icons -->
                <circle cx="295" cy="145" r="14" fill="#374151"/><text x="295" y="150" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="305" y1="132" x2="325" y2="116" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Health Bar', description: '체력 바' },
                { number: 2, name: 'Resource Bar', description: '자원 바' },
                { number: 3, name: 'Player Info', description: '플레이어 정보' },
                { number: 4, name: 'Minimap Area', description: '미니맵 영역' },
                { number: 5, name: 'Status Icons', description: '상태 아이콘' },
                { number: 6, name: 'Skill Slots', description: '스킬 슬롯' },
            ]
        },
        relatedLaws: ['miller-law', 'law-proximity', 'progressive-disclosure', 'von-restorff'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — HUD Layout</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Top-Left: HP/MP -->
            <rect x="18" y="32" width="120" height="40" rx="4" stroke="#ef4444" stroke-width="1.5"/>
            <rect x="48" y="38" width="80" height="8" rx="3" fill="#ef444440"/>
            <rect x="48" y="38" width="56" height="8" rx="3" fill="#ef444490"/>
            <text x="24" y="45" fill="#ef4444" font-size="7">HP</text>
            <rect x="48" y="52" width="80" height="8" rx="3" fill="#3b82f640"/>
            <rect x="48" y="52" width="40" height="8" rx="3" fill="#3b82f690"/>
            <text x="24" y="59" fill="#3b82f6" font-size="7">MP</text>
            <text x="78" y="78" fill="#ef4444" font-size="6" text-anchor="middle">체력/자원 바</text>
            <!-- Top-Right: Minimap -->
            <rect x="390" y="32" width="72" height="72" rx="36" stroke="#fbbf24" stroke-width="1.5"/>
            <circle cx="426" cy="68" r="3" fill="#60a5fa"/>
            <circle cx="435" cy="58" r="2" fill="#ef4444"/>
            <text x="426" y="114" fill="#fbbf24" font-size="6" text-anchor="middle">미니맵</text>
            <!-- Bottom-Center: Skill Bar -->
            <rect x="140" y="218" width="200" height="34" rx="4" stroke="#a78bfa" stroke-width="1.5"/>
            <rect x="146" y="222" width="26" height="26" rx="3" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <rect x="176" y="222" width="26" height="26" rx="3" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <rect x="206" y="222" width="26" height="26" rx="3" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <rect x="236" y="222" width="26" height="26" rx="3" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <rect x="266" y="222" width="26" height="26" rx="3" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <rect x="296" y="222" width="26" height="26" rx="3" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <text x="240" y="264" fill="#a78bfa" font-size="6" text-anchor="middle">스킬 슬롯 바</text>
            <!-- Bottom-Left: Quick Items -->
            <rect x="18" y="218" width="100" height="34" rx="4" stroke="#34d399" stroke-width="1"/>
            <rect x="24" y="222" width="26" height="26" rx="3" fill="#34d39920"/>
            <rect x="54" y="222" width="26" height="26" rx="3" fill="#34d39920"/>
            <rect x="84" y="222" width="26" height="26" rx="3" fill="#34d39920"/>
            <text x="68" y="264" fill="#34d399" font-size="6" text-anchor="middle">퀵 아이템</text>
            <!-- Bottom-Right: Weapon/Ammo -->
            <rect x="362" y="218" width="100" height="34" rx="4" stroke="#f97316" stroke-width="1"/>
            <text x="412" y="240" fill="#f97316" font-size="10" text-anchor="middle">30 / 120</text>
            <text x="412" y="264" fill="#f97316" font-size="6" text-anchor="middle">무기/탄약</text>
            <!-- Center: Crosshair -->
            <line x1="234" y1="130" x2="246" y2="130" stroke="#ffffff40" stroke-width="1"/>
            <line x1="240" y1="124" x2="240" y2="136" stroke="#ffffff40" stroke-width="1"/>
            <!-- Right side: Quest tracker -->
            <rect x="380" y="120" width="82" height="50" rx="3" stroke="#fbbf2460" stroke-width="1"/>
            <rect x="386" y="126" width="60" height="5" rx="1" fill="#fbbf2430"/>
            <rect x="386" y="135" width="50" height="4" rx="1" fill="#ffffff10"/>
            <rect x="386" y="143" width="55" height="4" rx="1" fill="#ffffff10"/>
            <text x="421" y="162" fill="#fbbf2480" font-size="5" text-anchor="middle">퀘스트</text>
            <!-- XP bar (very bottom) -->
            <rect x="10" y="256" width="460" height="4" rx="2" fill="#a78bfa20"/>
            <rect x="10" y="256" width="180" height="4" rx="2" fill="#a78bfa60"/>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — HUD Layout</text>
            <!-- Top-Left: HP/MP bars -->
            <text x="38" y="38" fill="#ef4444" font-size="7">HP</text>
            <rect x="54" y="30" width="100" height="10" rx="4" fill="#ef444430"/>
            <rect x="54" y="30" width="70" height="10" rx="4" fill="#ef444490"/>
            <text x="104" y="38" fill="#fff" font-size="5" text-anchor="middle">350/500</text>
            <text x="38" y="52" fill="#3b82f6" font-size="7">MP</text>
            <rect x="54" y="44" width="80" height="8" rx="3" fill="#3b82f630"/>
            <rect x="54" y="44" width="40" height="8" rx="3" fill="#3b82f690"/>
            <text x="94" y="51" fill="#fff" font-size="4" text-anchor="middle">120/240</text>
            <!-- Top-Right: Mini minimap -->
            <circle cx="432" cy="50" r="24" stroke="#fbbf24" stroke-width="1.5" fill="none"/>
            <circle cx="432" cy="50" r="22" fill="#0a0b1060"/>
            <circle cx="432" cy="50" r="3" fill="#60a5fa"/>
            <circle cx="440" cy="42" r="2" fill="#ef4444"/>
            <circle cx="424" cy="58" r="2" fill="#34d399"/>
            <text x="432" y="80" fill="#fbbf24" font-size="5" text-anchor="middle">미니맵</text>
            <!-- Top-center: Notification -->
            <rect x="185" y="28" width="110" height="18" rx="4" fill="#f59e0b15" stroke="#f59e0b40" stroke-width="0.5"/>
            <text x="240" y="40" fill="#f59e0b80" font-size="6" text-anchor="middle">보스 등장!</text>
            <!-- Center: Crosshair -->
            <line x1="238" y1="104" x2="252" y2="104" stroke="#ffffff60" stroke-width="1.5"/>
            <line x1="245" y1="97" x2="245" y2="111" stroke="#ffffff60" stroke-width="1.5"/>
            <circle cx="245" cy="104" r="8" stroke="#ffffff30" stroke-width="0.5"/>
            <!-- Right side: Quest tracker -->
            <rect x="372" y="86" width="80" height="48" rx="3" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3"/>
            <rect x="378" y="92" width="60" height="5" rx="1" fill="#fbbf2430"/>
            <rect x="378" y="101" width="50" height="4" rx="1" fill="#ffffff10"/>
            <rect x="378" y="109" width="55" height="4" rx="1" fill="#ffffff10"/>
            <text x="412" y="130" fill="#fbbf2480" font-size="4" text-anchor="middle">퀘스트</text>
            <!-- Thumb zone label -->
            <text x="245" y="150" fill="#ffffff20" font-size="5" text-anchor="middle">엄지 조작 영역</text>
            <!-- Bottom-left: Virtual joystick -->
            <circle cx="92" cy="162" r="32" stroke="#ffffff20" stroke-width="1.5" stroke-dasharray="4"/>
            <circle cx="92" cy="162" r="12" fill="#ffffff10" stroke="#ffffff30" stroke-width="1"/>
            <text x="92" y="200" fill="#ffffff30" font-size="5" text-anchor="middle">조이스틱</text>
            <!-- Bottom-right: 2x2 skill buttons -->
            <rect x="372" y="142" width="30" height="30" rx="7" fill="#a78bfa18" stroke="#a78bfa60" stroke-width="1"/>
            <text x="387" y="161" fill="#a78bfa" font-size="8" text-anchor="middle">Q</text>
            <rect x="406" y="142" width="30" height="30" rx="7" fill="#a78bfa18" stroke="#a78bfa60" stroke-width="1"/>
            <text x="421" y="161" fill="#a78bfa" font-size="8" text-anchor="middle">W</text>
            <rect x="372" y="176" width="30" height="30" rx="7" fill="#a78bfa18" stroke="#a78bfa60" stroke-width="1"/>
            <text x="387" y="195" fill="#a78bfa" font-size="8" text-anchor="middle">E</text>
            <rect x="406" y="176" width="30" height="30" rx="7" fill="#a78bfa18" stroke="#a78bfa60" stroke-width="1"/>
            <text x="421" y="195" fill="#a78bfa" font-size="8" text-anchor="middle">R</text>
            <!-- Bottom-center: Quick item slots -->
            <rect x="180" y="180" width="28" height="28" rx="4" fill="#34d39920" stroke="#34d39960" stroke-width="0.5"/>
            <rect x="212" y="180" width="28" height="28" rx="4" fill="#34d39920" stroke="#34d39960" stroke-width="0.5"/>
            <rect x="244" y="180" width="28" height="28" rx="4" fill="#34d39920" stroke="#34d39960" stroke-width="0.5"/>
            <text x="226" y="176" fill="#34d399" font-size="5" text-anchor="middle">퀵 아이템</text>
            <!-- XP bar (very bottom of game area) -->
            <rect x="36" y="200" width="408" height="4" rx="2" fill="#a78bfa20"/>
            <rect x="36" y="200" width="160" height="4" rx="2" fill="#a78bfa60"/>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC HUD',
                description: 'PC HUD는 넓은 화면의 가장자리를 활용하여 다양한 정보를 동시에 표시합니다. 키보드 단축키와 마우스 오버 상호작용으로 추가 정보를 빠르게 확인할 수 있습니다.',
                features: [
                    '16:9 와이드스크린 기준 레이아웃',
                    '4코너 배치: HP(좌상), 미니맵(우상), 스킬바(하중), 퀘스트(우측)',
                    '단축키 표시 — 모든 HUD 요소에 키 바인딩 라벨',
                    '호버로 상세 정보 팝업 (스탯, 버프, 퀘스트 등)',
                    'UI 스케일링 옵션 제공 (80%~120%)'
                ]
            },
            mobile: {
                title: '모바일 HUD',
                description: '모바일 HUD는 제한된 화면에서 핵심 정보만 표시해야 합니다. 자동 숨김, 가상 조이스틱, 적응형 레이아웃으로 게임 화면을 최대한 확보합니다.',
                features: [
                    '정보 최소화 — 필수 요소만 상시 표시',
                    '가상 조이스틱 + 액션 버튼 영역 확보',
                    '세로/가로 모드 대응 레이아웃',
                    '전투 시 자동 축소 (Non-combat UI 숨김)',
                    '탭하여 상세 정보 확장 패턴'
                ]
            },
        }
    },

    /* [게임 전용 #5] 인벤토리 — 아이템 관리 그리드, 드래그앤드롭 슬롯 시스템 */
    inventory: {
        id: 'inventory',
        name: '인벤토리',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="8" y1="9" x2="8" y2="21"/><line x1="14" y1="9" x2="14" y2="21"/></svg>`,
        summary: '아이템 관리 시스템. 그리드 기반 슬롯, 드래그앤드롭, 아이템 등급 표시 등이 핵심입니다.',
        description: '인벤토리는 게임 내 아이템을 관리하는 컨테이너 시스템입니다.',
        guidelines: [
            '슬롯 크기를 일관되게 유지하세요',
            '아이템 등급을 색상으로 구분하세요',
            '드래그앤드롭을 지원하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Grid container -->
                <rect x="80" y="30" width="240" height="190" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Row 1 slots -->
                <rect x="95" y="45" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="150" y="45" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="205" y="45" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="260" y="45" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <!-- Row 2 slots -->
                <rect x="95" y="100" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="150" y="100" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="205" y="100" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="260" y="100" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <!-- Row 3 slots -->
                <rect x="95" y="155" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="150" y="155" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="205" y="155" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="260" y="155" width="48" height="48" rx="4" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <!-- Item icon in first slot -->
                <text x="119" y="76" text-anchor="middle" fill="#6b7280" font-size="18">⚔</text>
                <!-- Rarity border highlight on second slot -->
                <rect x="150" y="45" width="48" height="48" rx="4" fill="none" stroke="#9ca3af" stroke-width="2.5"/>
                <text x="174" y="76" text-anchor="middle" fill="#6b7280" font-size="18">🛡</text>
                <!-- Quantity badge -->
                <circle cx="290" cy="59" r="9" fill="#9ca3af"/><text x="290" y="63" text-anchor="middle" fill="white" font-size="8" font-weight="bold">5</text>
                <text x="284" y="76" text-anchor="middle" fill="#6b7280" font-size="18">🧪</text>
                <!-- Callout 1: Grid Container -->
                <circle cx="38" cy="40" r="14" fill="#374151"/><text x="38" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="52" y1="44" x2="80" y2="55" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Item Slot -->
                <circle cx="38" cy="125" r="14" fill="#374151"/><text x="38" y="130" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="52" y1="125" x2="95" y2="125" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Item Icon -->
                <circle cx="38" cy="75" r="14" fill="#374151"/><text x="38" y="80" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="52" y1="72" x2="107" y2="68" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Quantity Badge -->
                <circle cx="362" cy="50" r="14" fill="#374151"/><text x="362" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="348" y1="53" x2="299" y2="57" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- 수정: 마커#4를 위로 이동하고 수평 라인으로 변경하여 슬롯 관통 방지 -->
                <!-- Callout 4: Rarity Border -->
                <circle cx="362" cy="50" r="14" fill="#374151"/><text x="362" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="348" y1="50" x2="260" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 6: Tooltip Trigger -->
                <circle cx="362" cy="170" r="14" fill="#374151"/><text x="362" y="175" text-anchor="middle" fill="white" font-size="12" font-weight="bold">6</text>
                <line x1="348" y1="168" x2="308" y2="160" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Grid Container', description: '그리드 컨테이너' },
                { number: 2, name: 'Quantity Badge', description: '수량 뱃지' },
                { number: 3, name: 'Item Icon', description: '아이템 아이콘' },
                { number: 4, name: 'Rarity Border', description: '등급 테두리' },
                { number: 5, name: 'Item Slot', description: '아이템 슬롯' },
                { number: 6, name: 'Tooltip Trigger', description: '툴팁 트리거' },
            ]
        },
        relatedLaws: ['jakobs-law', 'law-proximity', 'recognition-recall', 'law-similarity'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Inventory Panel</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Semi-transparent overlay -->
            <rect x="10" y="24" width="460" height="236" rx="3" fill="#00000040"/>
            <!-- Left: Character equipment -->
            <rect x="30" y="40" width="140" height="200" rx="6" fill="#1a1b2e" stroke="#60a5fa" stroke-width="1.5"/>
            <text x="100" y="58" fill="#60a5fa" font-size="8" text-anchor="middle">장비 장착</text>
            <!-- Character silhouette -->
            <rect x="65" y="68" width="70" height="90" rx="4" stroke="#60a5fa40" stroke-width="1" stroke-dasharray="3"/>
            <line x1="65" y1="68" x2="135" y2="158" stroke="#60a5fa20" stroke-width="0.5"/>
            <line x1="135" y1="68" x2="65" y2="158" stroke="#60a5fa20" stroke-width="0.5"/>
            <!-- Equip slots -->
            <rect x="38" y="80" width="22" height="22" rx="3" fill="#60a5fa15" stroke="#60a5fa60" stroke-width="0.5"/>
            <text x="49" y="94" fill="#60a5fa60" font-size="5" text-anchor="middle">머리</text>
            <rect x="38" y="118" width="22" height="22" rx="3" fill="#60a5fa15" stroke="#60a5fa60" stroke-width="0.5"/>
            <text x="49" y="132" fill="#60a5fa60" font-size="5" text-anchor="middle">몸</text>
            <rect x="140" y="80" width="22" height="22" rx="3" fill="#60a5fa15" stroke="#60a5fa60" stroke-width="0.5"/>
            <text x="151" y="94" fill="#60a5fa60" font-size="5" text-anchor="middle">무기</text>
            <rect x="140" y="118" width="22" height="22" rx="3" fill="#60a5fa15" stroke="#60a5fa60" stroke-width="0.5"/>
            <text x="151" y="132" fill="#60a5fa60" font-size="5" text-anchor="middle">방패</text>
            <!-- Stats -->
            <rect x="40" y="170" width="120" height="60" rx="3" stroke="#60a5fa30" stroke-width="0.5"/>
            <text x="100" y="185" fill="#60a5fa80" font-size="6" text-anchor="middle">ATK: 142  DEF: 89</text>
            <text x="100" y="197" fill="#60a5fa60" font-size="6" text-anchor="middle">SPD: 35   LUK: 12</text>
            <!-- Right: Inventory Grid -->
            <rect x="190" y="40" width="270" height="200" rx="6" fill="#1a1b2e" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="325" y="58" fill="#fbbf24" font-size="8" text-anchor="middle">인벤토리 (24/30)</text>
            <!-- Grid Row 0 -->
            <rect x="200" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="232" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="264" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="296" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="328" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="360" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="392" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="424" y="68" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <!-- Grid Row 1 -->
            <rect x="200" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="232" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="264" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="296" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="328" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="360" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="392" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="424" y="100" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <!-- Grid Row 2 -->
            <rect x="200" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="232" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="264" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="296" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="328" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="360" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="392" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="424" y="132" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <!-- Grid Row 3 -->
            <rect x="200" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="232" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="264" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="296" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="328" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="360" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="392" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="424" y="164" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <!-- Grid Row 4 -->
            <rect x="200" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="232" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="264" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="296" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="328" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="360" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="392" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <rect x="424" y="196" width="28" height="28" rx="3" fill="#fbbf2408" stroke="#fbbf2430" stroke-width="0.5"/>
            <!-- Some filled slots -->
            <rect x="200" y="68" width="28" height="28" rx="3" fill="#fbbf2425"/>
            <rect x="232" y="68" width="28" height="28" rx="3" fill="#fbbf2425"/>
            <rect x="264" y="68" width="28" height="28" rx="3" fill="#a78bfa25"/>
            <rect x="200" y="100" width="28" height="28" rx="3" fill="#fbbf2415"/>
            <!-- Sort/Filter -->
            <text x="425" y="58" fill="#fbbf2480" font-size="6">정렬 ▼</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Inventory</text>
            <!-- Semi-transparent overlay -->
            <rect x="32" y="8" width="436" height="200" fill="#00000050"/>
            <!-- Left panel: Character equipment -->
            <rect x="40" y="28" width="120" height="176" rx="6" fill="#1a1b26" stroke="#a78bfa60" stroke-width="1"/>
            <text x="100" y="44" fill="#a78bfa" font-size="7" text-anchor="middle">장비</text>
            <!-- Character silhouette -->
            <rect x="66" y="52" width="68" height="80" rx="4" fill="#a78bfa10" stroke="#a78bfa30" stroke-width="0.5"/>
            <text x="100" y="98" fill="#a78bfa40" font-size="20" text-anchor="middle">👤</text>
            <!-- Equipment slots (3x2) -->
            <rect x="48" y="140" width="28" height="28" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="62" y="158" fill="#ffffff30" font-size="8" text-anchor="middle">🗡</text>
            <rect x="80" y="140" width="28" height="28" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="94" y="158" fill="#ffffff30" font-size="8" text-anchor="middle">🛡</text>
            <rect x="112" y="140" width="28" height="28" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="126" y="158" fill="#ffffff30" font-size="8" text-anchor="middle">🎩</text>
            <rect x="48" y="172" width="28" height="28" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <rect x="80" y="172" width="28" height="28" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <rect x="112" y="172" width="28" height="28" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <!-- Right panel: Inventory grid -->
            <rect x="170" y="28" width="280" height="176" rx="6" fill="#1a1b26" stroke="#fbbf2460" stroke-width="1"/>
            <text x="310" y="44" fill="#fbbf24" font-size="7" text-anchor="middle">인벤토리 (24/40)</text>
            <!-- 6x3 grid -->
            <rect x="180" y="52" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="216" y="52" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="252" y="52" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="288" y="52" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="324" y="52" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="360" y="52" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="396" y="52" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="180" y="88" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="216" y="88" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="252" y="88" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="288" y="88" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="324" y="88" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="360" y="88" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="396" y="88" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="180" y="124" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="216" y="124" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="252" y="124" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="288" y="124" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="324" y="124" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="360" y="124" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <rect x="396" y="124" width="32" height="32" rx="4" fill="#fbbf2410" stroke="#fbbf2440" stroke-width="0.5"/>
            <!-- Sample items in slots -->
            <text x="196" y="74" fill="#ef4444" font-size="10" text-anchor="middle">⚔</text>
            <text x="232" y="74" fill="#a78bfa" font-size="10" text-anchor="middle">🧪</text>
            <text x="268" y="74" fill="#fbbf24" font-size="10" text-anchor="middle">🗡</text>
            <!-- Bottom: Sort/Filter tabs -->
            <rect x="180" y="164" width="50" height="18" rx="4" fill="#3b82f630" stroke="#3b82f6" stroke-width="0.5"/>
            <text x="205" y="176" fill="#3b82f6" font-size="6" text-anchor="middle">전체</text>
            <rect x="234" y="164" width="50" height="18" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="259" y="176" fill="#ffffff60" font-size="6" text-anchor="middle">무기</text>
            <rect x="288" y="164" width="50" height="18" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="313" y="176" fill="#ffffff60" font-size="6" text-anchor="middle">방어구</text>
            <rect x="342" y="164" width="50" height="18" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="367" y="176" fill="#ffffff60" font-size="6" text-anchor="middle">소비</text>
            <!-- Gold display -->
            <text x="420" y="176" fill="#fbbf24" font-size="7" text-anchor="middle">💰 12,450</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 인벤토리',
                description: 'PC 인벤토리는 넓은 화면을 활용한 그리드 시스템과 드래그 앤 드롭이 핵심입니다. 키보드 단축키, 우클릭 메뉴, 아이템 비교 등 다양한 상호작용을 지원합니다.',
                features: [
                    '6~8열 그리드 레이아웃 (다수 아이템 한번에 표시)',
                    '드래그 앤 드롭으로 아이템 이동/장착/교환',
                    '호버 시 아이템 비교 툴팁 (현재 장착 아이템과 비교)',
                    '우클릭 컨텍스트 메뉴 (사용/버리기/분해 등)',
                    '정렬/필터 단축키 지원'
                ]
            },
            mobile: {
                title: '모바일 인벤토리',
                description: '모바일 인벤토리는 터치 친화적인 큰 아이콘과 스크롤 리스트로 구성됩니다. 길게 누르기로 아이템 상세 정보를 확인하고, 간단한 탭으로 장착/사용할 수 있어야 합니다.',
                features: [
                    '3~4열 그리드 (손가락 크기 고려)',
                    '길게 누르기 → 아이템 상세 팝업',
                    '탭 → 즉시 사용/장착 (원터치 인터랙션)',
                    '좌우 스와이프로 카테고리 전환',
                    '하단 퀵슬롯에 드래그하여 등록'
                ]
            },
        }
    },

    /* [게임 전용 #6] 내비게이션 — 메인 메뉴, 탭 바, 화면 전환 네비게이션 */
    navigation: {
        id: 'navigation',
        name: '내비게이션',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z"/></svg>`,
        summary: '메뉴, 탭, 사이드바 등 게임 내 화면 전환 시스템. 일관된 패턴과 빠른 접근성이 중요합니다.',
        description: '내비게이션은 게임의 다양한 화면과 기능 사이를 이동하는 UI 시스템입니다.',
        guidelines: [
            '현재 위치를 항상 명확히 표시하세요',
            '핵심 기능은 1-2번의 탭으로 접근 가능하게 하세요',
            '일관된 내비게이션 패턴을 유지하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Nav container (bottom bar style) -->
                <rect x="40" y="150" width="320" height="60" rx="10" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Nav items -->
                <!-- Item 1 (active) -->
                <rect x="60" y="158" width="50" height="44" rx="6" fill="#e5e7eb"/>
                <circle cx="85" cy="172" r="8" fill="#d1d5db"/>
                <text x="85" y="175" text-anchor="middle" fill="#6b7280" font-size="8">★</text>
                <text x="85" y="195" text-anchor="middle" fill="#374151" font-size="8" font-weight="600">Home</text>
                <!-- Active indicator -->
                <rect x="72" y="155" width="26" height="3" rx="1.5" fill="#9ca3af"/>
                <!-- Item 2 -->
                <circle cx="155" cy="172" r="8" fill="#e5e7eb" stroke="#d1d5db" stroke-width="0.8"/>
                <text x="155" y="195" text-anchor="middle" fill="#9ca3af" font-size="8">Quests</text>
                <!-- Item 3 -->
                <circle cx="225" cy="172" r="8" fill="#e5e7eb" stroke="#d1d5db" stroke-width="0.8"/>
                <text x="225" y="195" text-anchor="middle" fill="#9ca3af" font-size="8">Map</text>
                <!-- Item 4 -->
                <circle cx="295" cy="172" r="8" fill="#e5e7eb" stroke="#d1d5db" stroke-width="0.8"/>
                <text x="295" y="195" text-anchor="middle" fill="#9ca3af" font-size="8">Settings</text>
                <!-- Callout 1: Nav Container -->
                <circle cx="38" cy="110" r="14" fill="#374151"/><text x="38" y="115" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="44" y1="123" x2="55" y2="150" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Nav Item -->
                <circle cx="155" cy="120" r="14" fill="#374151"/><text x="155" y="125" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="155" y1="134" x2="155" y2="158" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Active Indicator -->
                <circle cx="85" cy="120" r="14" fill="#374151"/><text x="85" y="125" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="85" y1="134" x2="85" y2="155" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Icon -->
                <circle cx="295" cy="120" r="14" fill="#374151"/><text x="295" y="125" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="295" y1="134" x2="295" y2="163" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- 수정: 마커#5를 내비게이션 바 가장자리에서 벗어나도록 이동 -->
                <!-- Callout 5: Label -->
                <circle cx="375" cy="190" r="14" fill="#374151"/><text x="375" y="195" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="361" y1="192" x2="310" y2="195" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Nav Container', description: '내비게이션 컨테이너' },
                { number: 2, name: 'Active Indicator', description: '활성 표시' },
                { number: 3, name: 'Nav Item', description: '메뉴 항목' },
                { number: 4, name: 'Icon', description: '아이콘' },
                { number: 5, name: 'Label', description: '라벨' },
            ]
        },
        m3SubTypes: [
            {
                name: 'Tab-based',
                nameKo: '탭 기반',
                description: '상단/하단 탭으로 메인 섹션을 전환하는 내비게이션.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="90" width="180" height="24" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1"/><rect x="10" y="90" width="45" height="24" rx="0" fill="#374151"/><text x="32" y="106" text-anchor="middle" fill="white" font-size="7">홈</text><text x="77" y="106" text-anchor="middle" fill="#6b7280" font-size="7">상점</text><text x="122" y="106" text-anchor="middle" fill="#6b7280" font-size="7">가방</text><text x="167" y="106" text-anchor="middle" fill="#6b7280" font-size="7">설정</text></svg>`,
                gameContext: '모바일 게임 하단 탭 바'
            },
            {
                name: 'Sidebar',
                nameKo: '사이드바',
                description: '좌측 고정 사이드바로 섹션 이동.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="50" height="100" rx="4" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="16" y="20" width="38" height="10" rx="3" fill="#374151"/><rect x="16" y="38" width="38" height="8" rx="3" fill="#e5e7eb"/><rect x="16" y="52" width="38" height="8" rx="3" fill="#e5e7eb"/><rect x="16" y="66" width="38" height="8" rx="3" fill="#e5e7eb"/><rect x="70" y="10" width="120" height="100" rx="4" fill="#e5e7eb" opacity="0.3"/></svg>`,
                gameContext: 'PC 게임 메뉴, 설정 카테고리'
            },
            {
                name: 'Bottom Bar',
                nameKo: '바텀 바',
                description: '화면 하단에 고정된 아이콘 내비게이션 바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="80" rx="4" fill="#e5e7eb" opacity="0.2"/><rect x="10" y="90" width="180" height="24" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1"/><circle cx="40" cy="102" r="6" fill="#374151"/><circle cx="80" cy="102" r="6" fill="#e5e7eb"/><circle cx="120" cy="102" r="6" fill="#e5e7eb"/><circle cx="160" cy="102" r="6" fill="#e5e7eb"/></svg>`,
                gameContext: '모바일 RPG 메인 네비게이션'
            }
        ],
        relatedLaws: ['serial-position', 'hicks-law', 'jakobs-law', 'consistency'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Navigation UI</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Top Navigation Bar -->
            <rect x="10" y="24" width="460" height="36" rx="3" fill="#1a1b2e" stroke="#60a5fa" stroke-width="1.5"/>
            <rect x="20" y="32" width="50" height="20" rx="10" fill="#60a5fa30" stroke="#60a5fa" stroke-width="1"/>
            <text x="45" y="46" fill="#60a5fa" font-size="7" text-anchor="middle">모험</text>
            <rect x="78" y="32" width="50" height="20" rx="10" fill="none" stroke="#60a5fa40" stroke-width="0.5"/>
            <text x="103" y="46" fill="#60a5fa80" font-size="7" text-anchor="middle">상점</text>
            <rect x="136" y="32" width="50" height="20" rx="10" fill="none" stroke="#60a5fa40" stroke-width="0.5"/>
            <text x="161" y="46" fill="#60a5fa80" font-size="7" text-anchor="middle">PvP</text>
            <rect x="194" y="32" width="50" height="20" rx="10" fill="none" stroke="#60a5fa40" stroke-width="0.5"/>
            <text x="219" y="46" fill="#60a5fa80" font-size="7" text-anchor="middle">길드</text>
            <text x="240" y="70" fill="#60a5fa" font-size="6" text-anchor="middle">▼ 상단 내비게이션 바 (탭 스타일)</text>
            <!-- Side Navigation -->
            <rect x="10" y="60" width="60" height="200" rx="3" fill="#1a1b2e" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="16" y="72" width="48" height="36" rx="4" fill="#f59e0b20"/>
            <text x="40" y="82" fill="#f59e0b" font-size="10" text-anchor="middle">🗺️</text>
            <text x="40" y="100" fill="#f59e0b" font-size="6" text-anchor="middle">월드맵</text>
            <rect x="16" y="114" width="48" height="36" rx="4"/>
            <text x="40" y="124" fill="#6b7280" font-size="10" text-anchor="middle">⚔️</text>
            <text x="40" y="142" fill="#6b7280" font-size="6" text-anchor="middle">던전</text>
            <rect x="16" y="156" width="48" height="36" rx="4"/>
            <text x="40" y="166" fill="#6b7280" font-size="10" text-anchor="middle">🏆</text>
            <text x="40" y="184" fill="#6b7280" font-size="6" text-anchor="middle">업적</text>
            <text x="40" y="248" fill="#f59e0b" font-size="5" text-anchor="middle">사이드</text>
            <!-- Bottom Tab Bar -->
            <rect x="80" y="228" width="390" height="32" rx="4" fill="#1a1b2e" stroke="#34d399" stroke-width="1.5"/>
            <text x="130" y="248" fill="#34d399" font-size="8" text-anchor="middle">🏠 홈</text>
            <text x="205" y="248" fill="#6b728090" font-size="8" text-anchor="middle">👤 캐릭터</text>
            <text x="290" y="248" fill="#6b728090" font-size="8" text-anchor="middle">🎒 가방</text>
            <text x="370" y="248" fill="#6b728090" font-size="8" text-anchor="middle">⚙️ 설정</text>
            <text x="275" y="222" fill="#34d399" font-size="6" text-anchor="middle">▼ 하단 탭 바</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Navigation</text>
            <!-- Bottom tab bar (primary navigation) -->
            <rect x="36" y="176" width="408" height="28" rx="6" fill="#1a1b26" stroke="#ffffff15" stroke-width="1"/>
            <text x="92" y="194" fill="#3b82f6" font-size="6" text-anchor="middle">🏠 홈</text>
            <text x="170" y="194" fill="#ffffff50" font-size="6" text-anchor="middle">⚔ 전투</text>
            <text x="250" y="194" fill="#ffffff50" font-size="6" text-anchor="middle">🎒 인벤</text>
            <text x="330" y="194" fill="#ffffff50" font-size="6" text-anchor="middle">👥 길드</text>
            <text x="404" y="194" fill="#ffffff50" font-size="6" text-anchor="middle">⚙ 설정</text>
            <!-- Active indicator -->
            <rect x="72" y="174" width="40" height="3" rx="1.5" fill="#3b82f6"/>
            <text x="250" y="170" fill="#ffffff30" font-size="5" text-anchor="middle">하단 탭 바</text>
            <!-- Left: Side drawer (partially visible) -->
            <rect x="36" y="28" width="140" height="140" rx="6" fill="#1a1b26" stroke="#ffffff15" stroke-width="1"/>
            <text x="106" y="46" fill="#ffffff80" font-size="8" text-anchor="middle">메인 메뉴</text>
            <rect x="44" y="54" width="120" height="18" rx="4" fill="#3b82f620"/>
            <text x="104" y="67" fill="#3b82f6" font-size="7" text-anchor="middle">캐릭터 정보</text>
            <rect x="44" y="76" width="120" height="18" rx="4" fill="#ffffff08"/>
            <text x="104" y="89" fill="#ffffff60" font-size="7" text-anchor="middle">스킬 트리</text>
            <rect x="44" y="98" width="120" height="18" rx="4" fill="#ffffff08"/>
            <text x="104" y="111" fill="#ffffff60" font-size="7" text-anchor="middle">업적</text>
            <rect x="44" y="120" width="120" height="18" rx="4" fill="#ffffff08"/>
            <text x="104" y="133" fill="#ffffff60" font-size="7" text-anchor="middle">상점</text>
            <rect x="44" y="142" width="120" height="18" rx="4" fill="#ffffff08"/>
            <text x="104" y="155" fill="#ffffff60" font-size="7" text-anchor="middle">설정</text>
            <!-- Right: Mini world map -->
            <rect x="200" y="28" width="250" height="134" rx="6" fill="#1a1b26" stroke="#34d39960" stroke-width="1"/>
            <text x="325" y="46" fill="#34d399" font-size="7" text-anchor="middle">월드 맵</text>
            <!-- Map areas -->
            <circle cx="260" cy="80" r="14" fill="#34d39920" stroke="#34d399" stroke-width="1"/>
            <text x="260" y="84" fill="#34d399" font-size="6" text-anchor="middle">마을</text>
            <circle cx="320" cy="100" r="14" fill="#ef444420" stroke="#ef4444" stroke-width="1"/>
            <text x="320" y="104" fill="#ef4444" font-size="6" text-anchor="middle">던전</text>
            <circle cx="380" cy="70" r="14" fill="#fbbf2420" stroke="#fbbf24" stroke-width="1"/>
            <text x="380" y="74" fill="#fbbf24" font-size="6" text-anchor="middle">보스</text>
            <!-- Path lines -->
            <line x1="274" y1="80" x2="306" y2="100" stroke="#ffffff20" stroke-width="1" stroke-dasharray="3"/>
            <line x1="334" y1="100" x2="366" y2="70" stroke="#ffffff20" stroke-width="1" stroke-dasharray="3"/>
            <!-- Player position -->
            <circle cx="260" cy="80" r="4" fill="#60a5fa"/>
            <text x="325" y="130" fill="#ffffff30" font-size="5" text-anchor="middle">이동 네비게이션</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 내비게이션',
                description: 'PC에서의 내비게이션은 사이드바, 상단 메뉴바, 탭 등 웹 기반 패턴을 활용합니다. 키보드 단축키로 메뉴 간 빠른 이동이 가능하며, 호버로 서브메뉴를 표시합니다.',
                features: [
                    '상단 메뉴바 + 드롭다운 서브메뉴',
                    'ESC로 메뉴 열기/닫기, 방향키로 탐색',
                    '사이드바 내비게이션 (접기/펼치기 가능)',
                    '브레드크럼 경로 표시',
                    '키보드 단축키 표 (? 키로 표시)'
                ]
            },
            mobile: {
                title: '모바일 내비게이션',
                description: '모바일에서는 하단 탭 바와 햄버거 메뉴가 기본 내비게이션 패턴입니다. 엄지 도달 범위를 고려한 하단 배치와 스와이프 제스처를 지원합니다.',
                features: [
                    '하단 탭 바 (4~5개 핵심 메뉴)',
                    '햄버거 메뉴 → 전체 화면 오버레이 내비게이션',
                    '좌우 스와이프로 탭 간 전환',
                    '뒤로 가기 제스처 (좌측 엣지 스와이프)',
                    '플로팅 액션 버튼(FAB)으로 주요 액션 접근'
                ]
            },
        }
    },

    /* [게임 전용 #7] 프로그레스 바 — HP/MP/EXP 등 게이지 바, 로딩 진행률 */
    progress: {
        id: 'progress',
        name: '프로그레스 바',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="10" width="20" height="4" rx="2"/><rect x="2" y="10" width="12" height="4" rx="2" fill="currentColor" opacity="0.3"/></svg>`,
        summary: 'HP, MP, 경험치, 로딩 등 진행 상태를 시각화하는 바. 실시간 피드백과 가독성이 핵심입니다.',
        description: '프로그레스 바는 수치적 진행 상태를 시각적으로 표현하는 컴포넌트입니다.',
        guidelines: [
            '색상으로 상태 의미를 전달하세요 (빨강=HP, 파랑=MP)',
            '수치와 그래픽을 함께 표시하세요',
            '변화에 부드러운 애니메이션을 적용하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Track background -->
                <rect x="80" y="100" width="240" height="24" rx="12" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <!-- Fill bar -->
                <rect x="82" y="102" width="156" height="20" rx="10" fill="#d1d5db"/>
                <!-- Icon (leading) -->
                <circle cx="55" cy="112" r="14" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <text x="55" y="116" text-anchor="middle" fill="#6b7280" font-size="10">★</text>
                <!-- Label / Value -->
                <text x="200" y="90" text-anchor="middle" fill="#374151" font-size="11" font-weight="600">65%</text>
                <!-- Segmented markers -->
                <line x1="160" y1="100" x2="160" y2="124" stroke="#9ca3af" stroke-width="1" opacity="0.5"/>
                <line x1="240" y1="100" x2="240" y2="124" stroke="#9ca3af" stroke-width="1" opacity="0.5"/>
                <!-- Second progress bar (thinner, below) -->
                <rect x="80" y="160" width="240" height="12" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="0.8"/>
                <rect x="82" y="162" width="100" height="8" rx="4" fill="#d1d5db"/>
                <line x1="162" y1="160" x2="162" y2="172" stroke="#9ca3af" stroke-width="0.8" opacity="0.5"/>
                <!-- Callout 3: Track -->
                <circle cx="362" cy="80" r="14" fill="#374151"/><text x="362" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="348" y1="86" x2="320" y2="100" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Fill -->
                <circle cx="38" cy="100" r="14" fill="#374151"/><text x="38" y="105" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="52" y1="104" x2="82" y2="110" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Label/Value -->
                <circle cx="260" cy="60" r="14" fill="#374151"/><text x="260" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="248" y1="70" x2="215" y2="86" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 1: Icon -->
                <circle cx="38" cy="60" r="14" fill="#374151"/><text x="38" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="48" y1="70" x2="50" y2="98" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Segmented Markers -->
                <circle cx="362" cy="160" r="14" fill="#374151"/><text x="362" y="165" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="348" y1="160" x2="242" y2="160" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Icon', description: '선행 아이콘' },
                { number: 2, name: 'Label/Value', description: '라벨/값' },
                { number: 3, name: 'Track', description: '트랙 배경' },
                { number: 4, name: 'Fill', description: '채움 바' },
                { number: 5, name: 'Segmented Markers', description: '구간 마커' },
            ]
        },
        m3SubTypes: [
            {
                name: 'Linear Determinate',
                nameKo: '선형 확정',
                description: '진행률이 확정된 수평 바. 0~100%로 진행 상태 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="55" width="160" height="10" rx="5" fill="#e5e7eb"/><rect x="20" y="55" width="96" height="10" rx="5" fill="#374151"/><text x="100" y="80" text-anchor="middle" fill="#6b7280" font-size="9">60%</text></svg>`,
                gameContext: 'HP/MP/EXP 바, 퀘스트 진행률, 다운로드 진행'
            },
            {
                name: 'Linear Indeterminate',
                nameKo: '선형 불확정',
                description: '진행률을 알 수 없는 수평 바. 로딩 중 애니메이션.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="55" width="160" height="10" rx="5" fill="#e5e7eb"/><rect x="60" y="55" width="60" height="10" rx="5" fill="#374151"/></svg>`,
                gameContext: '서버 연결 중, 매칭 대기 중'
            },
            {
                name: 'Circular Determinate',
                nameKo: '원형 확정',
                description: '원형으로 진행률을 표시. 쿨다운 타이머에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="30" fill="none" stroke="#e5e7eb" stroke-width="6"/><circle cx="100" cy="60" r="30" fill="none" stroke="#374151" stroke-width="6" stroke-dasharray="113" stroke-dashoffset="45" transform="rotate(-90 100 60)"/><text x="100" y="65" text-anchor="middle" fill="#374151" font-size="11" font-weight="bold">60%</text></svg>`,
                gameContext: '스킬 쿨다운, 부활 타이머, 버프 잔여 시간'
            },
            {
                name: 'Circular Indeterminate',
                nameKo: '원형 불확정',
                description: '계속 회전하는 원형 인디케이터. 불확정 로딩 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="30" fill="none" stroke="#e5e7eb" stroke-width="6"/><path d="M100 30a30 30 0 0 1 30 30" fill="none" stroke="#374151" stroke-width="6" stroke-linecap="round"/></svg>`,
                gameContext: '데이터 동기화 중, 검색 중'
            }
        ],
        relatedLaws: ['doherty-threshold', 'feedback-principle', 'goal-gradient', 'zeigarnik-effect'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Progress Bar Placement</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Top: HP Bar -->
            <rect x="20" y="34" width="140" height="14" rx="7" fill="#ef444420" stroke="#ef4444" stroke-width="1.5"/>
            <rect x="22" y="36" width="96" height="10" rx="5" fill="#ef4444a0"/>
            <text x="90" y="44" fill="#fff" font-size="6" text-anchor="middle">680 / 1000</text>
            <text x="90" y="58" fill="#ef4444" font-size="6" text-anchor="middle">체력 바</text>
            <!-- MP Bar -->
            <rect x="20" y="62" width="110" height="10" rx="5" fill="#3b82f620" stroke="#3b82f6" stroke-width="1"/>
            <rect x="22" y="64" width="54" height="6" rx="3" fill="#3b82f690"/>
            <text x="75" y="82" fill="#3b82f6" font-size="6" text-anchor="middle">마나 바</text>
            <!-- Boss HP (top center) -->
            <rect x="130" y="34" width="220" height="16" rx="4" fill="#dc262620" stroke="#dc2626" stroke-width="1.5"/>
            <rect x="132" y="36" width="170" height="12" rx="3" fill="#dc2626a0"/>
            <text x="240" y="45" fill="#fff" font-size="7" text-anchor="middle">🔥 월드 보스 — 78%</text>
            <text x="240" y="58" fill="#dc2626" font-size="6" text-anchor="middle">보스 체력 바</text>
            <!-- XP Bar (bottom) -->
            <rect x="10" y="248" width="460" height="8" rx="4" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <rect x="12" y="250" width="180" height="4" rx="2" fill="#a78bfa80"/>
            <text x="240" y="246" fill="#a78bfa" font-size="6" text-anchor="middle">경험치 바 — Lv.42 (38%)</text>
            <!-- Loading screen example (center) -->
            <rect x="120" y="100" width="240" height="80" rx="6" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="240" y="125" fill="#fbbf2480" font-size="8" text-anchor="middle">로딩 중...</text>
            <rect x="150" y="138" width="180" height="10" rx="5" fill="#fbbf2420"/>
            <rect x="152" y="140" width="108" height="6" rx="3" fill="#fbbf24a0"/>
            <text x="240" y="165" fill="#fbbf24" font-size="7" text-anchor="middle">60%</text>
            <text x="240" y="190" fill="#fbbf2480" font-size="6" text-anchor="middle">▲ 로딩 프로그레스</text>
            <!-- Cooldown indicator -->
            <rect x="400" y="100" width="50" height="50" rx="6" stroke="#34d39980" stroke-width="1"/>
            <circle cx="425" cy="125" r="18" stroke="#34d39960" stroke-width="1.5" stroke-dasharray="4"/>
            <text x="425" y="129" fill="#34d399" font-size="10" text-anchor="middle">3s</text>
            <text x="425" y="160" fill="#34d399" font-size="6" text-anchor="middle">쿨다운</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Progress Bars</text>
            <!-- Top-Left: HP Bar -->
            <rect x="38" y="30" width="130" height="12" rx="6" fill="#ef444420" stroke="#ef4444" stroke-width="1"/>
            <rect x="40" y="32" width="84" height="8" rx="4" fill="#ef4444a0"/>
            <text x="103" y="39" fill="#fff" font-size="5" text-anchor="middle">680/1000</text>
            <text x="103" y="52" fill="#ef4444" font-size="5" text-anchor="middle">체력 바</text>
            <!-- MP Bar -->
            <rect x="38" y="56" width="100" height="9" rx="4" fill="#3b82f620" stroke="#3b82f6" stroke-width="0.8"/>
            <rect x="40" y="58" width="48" height="5" rx="2" fill="#3b82f690"/>
            <text x="88" y="74" fill="#3b82f6" font-size="5" text-anchor="middle">마나 바</text>
            <!-- Top-Center: Boss HP bar -->
            <rect x="150" y="30" width="200" height="14" rx="4" fill="#dc262620" stroke="#dc2626" stroke-width="1.5"/>
            <rect x="152" y="32" width="150" height="10" rx="3" fill="#dc2626a0"/>
            <text x="250" y="40" fill="#fff" font-size="6" text-anchor="middle">🔥 월드 보스 — 78%</text>
            <text x="250" y="54" fill="#dc2626" font-size="5" text-anchor="middle">보스 체력 바</text>
            <!-- Center: Loading screen example -->
            <rect x="130" y="72" width="220" height="70" rx="6" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="240" y="92" fill="#fbbf2480" font-size="8" text-anchor="middle">로딩 중...</text>
            <rect x="155" y="100" width="170" height="10" rx="5" fill="#fbbf2420"/>
            <rect x="157" y="102" width="100" height="6" rx="3" fill="#fbbf24a0"/>
            <text x="240" y="122" fill="#fbbf24" font-size="7" text-anchor="middle">60%</text>
            <text x="240" y="148" fill="#fbbf2480" font-size="5" text-anchor="middle">로딩 프로그레스</text>
            <!-- Right: Cooldown indicator -->
            <rect x="400" y="60" width="44" height="44" rx="8" stroke="#34d39980" stroke-width="1"/>
            <circle cx="422" cy="82" r="16" stroke="#34d39960" stroke-width="1.5" stroke-dasharray="4"/>
            <text x="422" y="86" fill="#34d399" font-size="9" text-anchor="middle">3s</text>
            <text x="422" y="114" fill="#34d399" font-size="5" text-anchor="middle">쿨다운</text>
            <!-- Bottom: XP Bar (full width) -->
            <rect x="38" y="192" width="404" height="8" rx="4" fill="#a78bfa20" stroke="#a78bfa60" stroke-width="0.5"/>
            <rect x="40" y="194" width="158" height="4" rx="2" fill="#a78bfa80"/>
            <text x="245" y="188" fill="#a78bfa" font-size="5" text-anchor="middle">경험치 바 — Lv.42 (38%)</text>
            <!-- Bottom-left: Stamina circular -->
            <circle cx="70" cy="170" r="18" stroke="#34d399" stroke-width="2" stroke-dasharray="80 33" fill="none"/>
            <text x="70" y="174" fill="#34d399" font-size="7" text-anchor="middle">72%</text>
            <text x="70" y="160" fill="#34d39980" font-size="4" text-anchor="middle">스태미나</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 프로그레스',
                description: 'PC에서 프로그레스 바는 정밀한 수치 표시와 호버 시 상세 정보를 제공합니다. 넓은 화면을 활용하여 여러 진행 상태를 동시에 표시할 수 있습니다.',
                features: [
                    '정확한 수치 표시 (680/1000 HP 형식)',
                    '호버 시 상세 정보 툴팁 (버프, 디버프 내역)',
                    '다중 프로그레스 바 동시 표시 (HP, MP, XP 등)',
                    '보스 체력바 — 화면 상단 전체 너비',
                    '쿨다운 — 원형/숫자 오버레이 표시'
                ]
            },
            mobile: {
                title: '모바일 프로그레스',
                description: '모바일 프로그레스는 제한된 공간에서 핵심 정보만 간결하게 표시합니다. 탭하여 수치를 확인하고, 색상과 아이콘으로 상태를 직관적으로 전달합니다.',
                features: [
                    '간결한 바 형태 — 숫자 최소화, 색상으로 상태 전달',
                    '탭하여 수치 확인 (평시에는 비율만 표시)',
                    '중요 상태 변화 시 펄스 애니메이션',
                    '화면 가장자리에 최소 높이 배치 (4~8px)',
                    '원형 프로그레스로 쿨다운 표시 (공간 효율)'
                ]
            },
        }
    },

    /* [게임 전용 #8] 툴팁 — 아이템/스킬 호버 시 표시되는 정보 팝업 */
    tooltips: {
        id: 'tooltips',
        name: '툴팁',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
        summary: '아이템, 스킬, 상태 등에 마우스를 올리면 나타나는 상세 정보 팝업.',
        description: '툴팁은 추가 정보를 필요할 때만 표시하는 오버레이 컴포넌트입니다.',
        guidelines: [
            '마우스 커서 옆에 즉시 나타나야 합니다',
            '화면 밖으로 넘치지 않도록 위치를 조정하세요',
            '정보를 계층적으로 구성하세요 (이름→설명→스탯)',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Trigger element (button/item) -->
                <rect x="150" y="170" width="100" height="40" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
                <text x="200" y="195" text-anchor="middle" fill="#6b7280" font-size="11">Hover me</text>
                <!-- Tooltip container -->
                <rect x="110" y="30" width="180" height="110" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Arrow/pointer -->
                <polygon points="190,140 200,155 210,140" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
                <line x1="192" y1="140" x2="208" y2="140" stroke="#f3f4f6" stroke-width="2"/>
                <!-- Title -->
                <rect x="125" y="45" width="100" height="12" rx="2" fill="#9ca3af"/>
                <!-- Description text lines -->
                <rect x="125" y="68" width="150" height="8" rx="2" fill="#d1d5db"/>
                <rect x="125" y="82" width="130" height="8" rx="2" fill="#d1d5db"/>
                <rect x="125" y="96" width="110" height="8" rx="2" fill="#d1d5db"/>
                <rect x="125" y="110" width="80" height="8" rx="2" fill="#d1d5db"/>
                <!-- Callout 5: Trigger Element -->
                <circle cx="38" cy="190" r="14" fill="#374151"/><text x="38" y="195" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="52" y1="190" x2="150" y2="190" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Tooltip Container -->
                <circle cx="362" cy="50" r="14" fill="#374151"/><text x="362" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="348" y1="55" x2="290" y2="65" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Arrow -->
                <circle cx="362" cy="148" r="14" fill="#374151"/><text x="362" y="153" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="348" y1="148" x2="212" y2="148" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 1: Title -->
                <circle cx="38" cy="45" r="14" fill="#374151"/><text x="38" y="50" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="52" y1="48" x2="125" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Description -->
                <circle cx="38" cy="90" r="14" fill="#374151"/><text x="38" y="95" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="52" y1="88" x2="125" y2="82" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Title', description: '제목' },
                { number: 2, name: 'Tooltip Container', description: '툴팁 컨테이너' },
                { number: 3, name: 'Description', description: '설명 텍스트' },
                { number: 4, name: 'Arrow/Pointer', description: '화살표' },
                { number: 5, name: 'Trigger Element', description: '트리거 요소' },
            ]
        },
        m3SubTypes: [
            {
                name: 'Plain',
                nameKo: '기본 툴팁',
                description: '짧은 텍스트만 표시하는 간단한 툴팁.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="30" width="90" height="32" rx="4" fill="#374151"/><text x="100" y="50" text-anchor="middle" fill="white" font-size="10">Tooltip text</text><polygon points="100,62 94,68 106,68" fill="#374151"/><rect x="80" y="80" width="40" height="24" rx="4" fill="#e5e7eb"/></svg>`,
                gameContext: 'UI 버튼 호버 시 기능 설명, 스킬 이름 표시'
            },
            {
                name: 'Rich',
                nameKo: '리치 툴팁',
                description: '제목, 설명, 액션 버튼을 포함하는 풍부한 툴팁.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="140" height="80" rx="8" fill="#374151"/><text x="50" y="30" fill="white" font-size="10" font-weight="bold">전설의 검</text><text x="50" y="46" fill="#9ca3af" font-size="8">공격력 +250</text><text x="50" y="58" fill="#9ca3af" font-size="8">치명타 +15%</text><rect x="50" y="66" width="50" height="16" rx="3" fill="#60a5fa"/><text x="75" y="78" text-anchor="middle" fill="white" font-size="7">장착하기</text><polygon points="100,90 94,96 106,96" fill="#374151"/><rect x="85" y="100" width="30" height="14" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '아이템 호버 시 스탯+비교+장착 버튼 표시'
            }
        ],
        relatedLaws: ['progressive-disclosure', 'miller-law', 'doherty-threshold', 'law-pragnanz'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Tooltip Examples</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- Item tooltip example -->
            <rect x="30" y="50" width="26" height="26" rx="3" fill="#a78bfa25" stroke="#a78bfa" stroke-width="1"/>
            <text x="43" y="67" fill="#a78bfa" font-size="10" text-anchor="middle">⚔</text>
            <!-- Tooltip popup -->
            <rect x="64" y="36" width="150" height="90" rx="6" fill="#1e1f2e" stroke="#a78bfa" stroke-width="1.5"/>
            <polygon points="60,65 68,60 68,70" fill="#1e1f2e" stroke="#a78bfa" stroke-width="1"/>
            <text x="139" y="52" fill="#a78bfa" font-size="8" text-anchor="middle" font-weight="bold">전설의 검</text>
            <rect x="74" y="58" width="130" height="1" fill="#a78bfa30"/>
            <text x="139" y="72" fill="#ef4444" font-size="7" text-anchor="middle">공격력 +142</text>
            <text x="139" y="84" fill="#34d399" font-size="7" text-anchor="middle">치명타 +15%</text>
            <text x="139" y="96" fill="#fbbf24" font-size="6" text-anchor="middle">세트 효과: 2/4</text>
            <rect x="80" y="104" width="118" height="14" rx="3" fill="#a78bfa20"/>
            <text x="139" y="115" fill="#a78bfa80" font-size="6" text-anchor="middle">클릭하여 장착</text>
            <!-- Skill tooltip -->
            <rect x="280" y="190" width="26" height="26" rx="3" fill="#3b82f625" stroke="#3b82f6" stroke-width="1"/>
            <text x="293" y="207" fill="#3b82f6" font-size="10" text-anchor="middle">🔥</text>
            <rect x="240" y="110" width="160" height="72" rx="6" fill="#1e1f2e" stroke="#3b82f6" stroke-width="1.5"/>
            <polygon points="290,186 284,180 296,180" fill="#1e1f2e" stroke="#3b82f6" stroke-width="1"/>
            <text x="320" y="128" fill="#3b82f6" font-size="8" text-anchor="middle" font-weight="bold">파이어볼 Lv.5</text>
            <rect x="250" y="133" width="140" height="1" fill="#3b82f630"/>
            <text x="320" y="147" fill="#ffffff90" font-size="7" text-anchor="middle">마법 데미지 280~350</text>
            <text x="320" y="160" fill="#60a5fa" font-size="6" text-anchor="middle">MP 45 · 쿨다운 8초</text>
            <text x="320" y="173" fill="#6b7280" font-size="6" text-anchor="middle">범위: 적 전체</text>
            <!-- NPC hover tooltip -->
            <rect x="30" y="170" width="120" height="40" rx="4" fill="#1e1f2e" stroke="#fbbf24" stroke-width="1"/>
            <text x="90" y="188" fill="#fbbf24" font-size="7" text-anchor="middle">대장장이 브론</text>
            <text x="90" y="200" fill="#6b7280" font-size="6" text-anchor="middle">🔨 장비 강화 · 수리</text>
            <text x="240" y="248" fill="#6b728090" font-size="7" text-anchor="middle">아이템 / 스킬 / NPC 툴팁 — 맥락에 따라 다른 레이아웃</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Tooltips</text>
            <!-- Skill bar at bottom-right -->
            <rect x="340" y="154" width="36" height="36" rx="6" fill="#a78bfa20" stroke="#a78bfa" stroke-width="1.5"/>
            <text x="358" y="176" fill="#a78bfa" font-size="10" text-anchor="middle">⚡</text>
            <!-- Tooltip above the skill (long-press tooltip) -->
            <rect x="260" y="60" width="180" height="82" rx="6" fill="#1a1b2e" stroke="#a78bfa" stroke-width="1"/>
            <!-- Tooltip arrow -->
            <polygon points="358,142 352,150 364,150" fill="#1a1b2e" stroke="#a78bfa" stroke-width="1"/>
            <line x1="352" y1="149" x2="364" y2="149" stroke="#1a1b2e" stroke-width="2"/>
            <text x="350" y="78" fill="#a78bfa" font-size="8" text-anchor="middle" font-weight="bold">번개 강타</text>
            <text x="350" y="92" fill="#ffffff70" font-size="6" text-anchor="middle">전방 적에게 250 번개 데미지</text>
            <text x="350" y="104" fill="#3b82f6" font-size="6" text-anchor="middle">MP 40 · 쿨다운 8초</text>
            <rect x="270" y="112" width="70" height="18" rx="4" fill="#a78bfa30"/>
            <text x="305" y="124" fill="#a78bfa" font-size="6" text-anchor="middle">사용하기</text>
            <rect x="346" y="112" width="70" height="18" rx="4" fill="#ffffff10" stroke="#ffffff30" stroke-width="0.5"/>
            <text x="381" y="124" fill="#ffffff60" font-size="6" text-anchor="middle">강화</text>
            <!-- Left: Item with tooltip -->
            <rect x="60" y="120" width="36" height="36" rx="4" fill="#fbbf2420" stroke="#fbbf24" stroke-width="1"/>
            <text x="78" y="142" fill="#fbbf24" font-size="12" text-anchor="middle">🗡</text>
            <!-- Item tooltip -->
            <rect x="40" y="36" width="140" height="72" rx="6" fill="#1a1b2e" stroke="#fbbf24" stroke-width="1"/>
            <polygon points="78,108 72,116 84,116" fill="#1a1b2e" stroke="#fbbf24" stroke-width="1"/>
            <line x1="72" y1="115" x2="84" y2="115" stroke="#1a1b2e" stroke-width="2"/>
            <text x="110" y="52" fill="#fbbf24" font-size="7" text-anchor="middle" font-weight="bold">전설의 검</text>
            <text x="110" y="66" fill="#ffffff70" font-size="6" text-anchor="middle">ATK +120 · CRT +15%</text>
            <text x="110" y="80" fill="#34d399" font-size="6" text-anchor="middle">세트 효과: 공격력 +20%</text>
            <text x="110" y="96" fill="#ffffff40" font-size="5" text-anchor="middle">길게 눌러 상세 보기</text>
            <!-- Touch hint -->
            <text x="245" y="198" fill="#ffffff20" font-size="5" text-anchor="middle">길게 누르기(long-press)로 툴팁 활성화</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 툴팁',
                description: 'PC에서 툴팁은 마우스 호버가 기본 트리거입니다. 아이템 비교, 스킬 상세, NPC 정보 등 다양한 맥락에서 즉시 정보를 제공합니다.',
                features: [
                    '마우스 호버로 즉시 표시 (200~300ms 딜레이)',
                    '커서 근처에 위치, 화면 밖으로 나가지 않도록 자동 배치',
                    'Shift 키 누르면 비교 툴팁 (현재 장착 아이템)',
                    '고정 가능 — 핀 버튼으로 툴팁 유지',
                    '리치 콘텐츠: 아이콘, 색상 텍스트, 그래프 포함 가능'
                ]
            },
            mobile: {
                title: '모바일 툴팁',
                description: '모바일에서는 호버가 없으므로 길게 누르기(Long Press)나 정보 아이콘 탭으로 툴팁을 트리거합니다. 화면 크기에 맞는 간결한 정보 표시가 중요합니다.',
                features: [
                    '길게 누르기(500ms)로 툴팁 표시',
                    '별도 정보(i) 아이콘 버튼 제공',
                    '화면 하단 시트 형태로 표시 (큰 콘텐츠)',
                    '탭 바깥 터치 시 닫기',
                    '간결한 정보만 1차 표시, "더보기"로 상세 확장'
                ]
            },
        }
    },

    /* [게임 전용 #9] 미니맵 — 게임 월드 축소 지도, 플레이어/NPC 위치 표시 */
    minimap: {
        id: 'minimap',
        name: '미니맵',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>`,
        summary: '게임 월드의 축소 지도. 플레이어 위치, 목표, 적 위치 등을 한눈에 보여줍니다.',
        description: '미니맵은 게임 월드의 전체적인 상황을 축소하여 보여주는 HUD 요소입니다.',
        guidelines: [
            '플레이어 위치를 항상 중심에 표시하세요',
            '중요한 요소만 아이콘으로 표시하세요',
            '확대/축소 기능을 제공하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Border frame -->
                <rect x="110" y="25" width="180" height="180" rx="10" fill="#f3f4f6" stroke="#9ca3af" stroke-width="2"/>
                <!-- Map container inner -->
                <rect x="118" y="33" width="164" height="164" rx="6" fill="#e5e7eb"/>
                <!-- Terrain features -->
                <rect x="140" y="60" width="40" height="30" rx="3" fill="#d1d5db" opacity="0.6"/>
                <rect x="200" y="80" width="50" height="25" rx="3" fill="#d1d5db" opacity="0.6"/>
                <rect x="150" y="130" width="60" height="20" rx="3" fill="#d1d5db" opacity="0.4"/>
                <!-- Fog of war (semi-transparent overlay on part of map) -->
                <rect x="220" y="33" width="62" height="80" fill="#9ca3af" opacity="0.3"/>
                <!-- Player marker -->
                <circle cx="190" cy="115" r="6" fill="#374151" stroke="#f9fafb" stroke-width="2"/>
                <!-- POI icons -->
                <circle cx="160" cy="70" r="4" fill="#9ca3af"/>
                <circle cx="230" cy="95" r="4" fill="#9ca3af"/>
                <rect x="175" y="140" width="8" height="8" rx="1" fill="#9ca3af"/>
                <!-- Callout 1: Map Container -->
                <circle cx="55" cy="40" r="14" fill="#374151"/><text x="55" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="69" y1="44" x2="118" y2="55" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- 수정: 마커#4 라인을 맵 테두리(x=118)에서 멈추도록 수정 -->
                <!-- Callout 4: Player Marker -->
                <circle cx="55" cy="115" r="14" fill="#374151"/><text x="55" y="120" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="69" y1="115" x2="118" y2="115" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- 수정: 마커#3을 아래로, 마커#2를 위로 이동하여 겹침 방지 (최소 30px 간격) -->
                <!-- Callout 3: POI Icons -->
                <circle cx="350" cy="80" r="14" fill="#374151"/><text x="350" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="336" y1="82" x2="234" y2="95" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Fog of War -->
                <circle cx="350" cy="35" r="14" fill="#374151"/><text x="350" y="40" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="336" y1="38" x2="282" y2="55" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Border Frame -->
                <circle cx="345" cy="150" r="14" fill="#374151"/><text x="345" y="155" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="331" y1="152" x2="290" y2="160" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Map Container', description: '맵 컨테이너' },
                { number: 2, name: 'Fog of War', description: '전쟁의 안개' },
                { number: 3, name: 'POI Icons', description: '관심지점 아이콘' },
                { number: 4, name: 'Player Marker', description: '플레이어 마커' },
                { number: 5, name: 'Border Frame', description: '테두리 프레임' },
            ]
        },
        relatedLaws: ['law-pragnanz', 'law-similarity', 'recognition-recall', 'fitts-law'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Minimap Placement</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- HUD context -->
            <rect x="20" y="34" width="100" height="12" rx="4" fill="#ef444430"/>
            <rect x="20" y="50" width="80" height="8" rx="3" fill="#3b82f625"/>
            <!-- Minimap (top-right, highlighted) -->
            <rect x="370" y="30" width="92" height="92" rx="6" fill="#0a1520" stroke="#fbbf24" stroke-width="2"/>
            <text x="416" y="44" fill="#fbbf24" font-size="6" text-anchor="middle">N</text>
            <!-- Terrain in minimap -->
            <rect x="380" y="48" width="30" height="18" rx="2" fill="#2a4a2a40"/>
            <rect x="420" y="60" width="25" height="15" rx="2" fill="#2a4a2a40"/>
            <rect x="390" y="80" width="40" height="12" rx="2" fill="#4a4a2a30"/>
            <!-- Player marker -->
            <circle cx="416" cy="76" r="4" fill="#60a5fa"/>
            <polygon points="416,70 413,76 419,76" fill="#60a5fa"/>
            <!-- Enemy markers -->
            <circle cx="400" cy="55" r="2.5" fill="#ef4444"/>
            <circle cx="435" cy="68" r="2.5" fill="#ef4444"/>
            <!-- Quest marker -->
            <circle cx="425" cy="90" r="3" fill="#fbbf24"/>
            <text x="425" y="93" fill="#12131a" font-size="4" text-anchor="middle" font-weight="bold">!</text>
            <!-- Party -->
            <circle cx="410" cy="80" r="2" fill="#34d399"/>
            <!-- Zoom controls -->
            <rect x="466" y="36" width="14" height="14" rx="3" stroke="#fbbf2480" stroke-width="0.5"/>
            <text x="473" y="46" fill="#fbbf24" font-size="8" text-anchor="middle">+</text>
            <rect x="466" y="54" width="14" height="14" rx="3" stroke="#fbbf2480" stroke-width="0.5"/>
            <text x="473" y="64" fill="#fbbf24" font-size="8" text-anchor="middle">−</text>
            <!-- Legend -->
            <rect x="370" y="126" width="92" height="44" rx="3" stroke="#fbbf2430" stroke-width="0.5"/>
            <circle cx="380" cy="138" r="2.5" fill="#60a5fa"/>
            <text x="388" y="141" fill="#9ca3af" font-size="5">플레이어</text>
            <circle cx="380" cy="150" r="2.5" fill="#ef4444"/>
            <text x="388" y="153" fill="#9ca3af" font-size="5">적</text>
            <circle cx="430" cy="138" r="2.5" fill="#fbbf24"/>
            <text x="438" y="141" fill="#9ca3af" font-size="5">퀘스트</text>
            <circle cx="430" cy="150" r="2.5" fill="#34d399"/>
            <text x="438" y="153" fill="#9ca3af" font-size="5">파티원</text>
            <text x="416" y="182" fill="#fbbf24" font-size="6" text-anchor="middle">▲ 미니맵 영역</text>
            <!-- Skill bar context -->
            <rect x="150" y="230" width="180" height="22" rx="3" stroke="#ffffff15" stroke-width="0.5"/>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Minimap</text>
            <!-- Main minimap (top-right, circular) -->
            <circle cx="410" cy="68" r="42" stroke="#fbbf24" stroke-width="1.5" fill="none"/>
            <circle cx="410" cy="68" r="40" fill="#0a0b1080"/>
            <!-- Minimap content -->
            <circle cx="410" cy="68" r="4" fill="#60a5fa"/>
            <circle cx="425" cy="55" r="2.5" fill="#ef4444"/>
            <circle cx="395" cy="80" r="2.5" fill="#ef4444"/>
            <circle cx="430" cy="78" r="2.5" fill="#34d399"/>
            <circle cx="390" cy="55" r="2" fill="#fbbf24"/>
            <!-- Direction indicator -->
            <polygon points="410,32 406,40 414,40" fill="#60a5fa80"/>
            <!-- Compass labels -->
            <text x="410" y="30" fill="#ffffff40" font-size="5" text-anchor="middle">N</text>
            <text x="448" y="72" fill="#ffffff30" font-size="5" text-anchor="middle">E</text>
            <text x="410" y="114" fill="#ffffff30" font-size="5" text-anchor="middle">S</text>
            <text x="372" y="72" fill="#ffffff30" font-size="5" text-anchor="middle">W</text>
            <text x="410" y="120" fill="#fbbf24" font-size="5" text-anchor="middle">미니맵</text>
            <!-- Expanded map (center, shown on tap) -->
            <rect x="80" y="30" width="240" height="160" rx="8" fill="#0a0b10e0" stroke="#fbbf2460" stroke-width="1"/>
            <text x="200" y="46" fill="#fbbf24" font-size="7" text-anchor="middle">월드 맵 (탭하여 확장)</text>
            <!-- Map terrain -->
            <rect x="100" y="56" width="60" height="40" rx="4" fill="#34d39920" stroke="#34d39940" stroke-width="0.5"/>
            <text x="130" y="80" fill="#34d399" font-size="6" text-anchor="middle">초원</text>
            <rect x="170" y="56" width="60" height="40" rx="4" fill="#ef444420" stroke="#ef444440" stroke-width="0.5"/>
            <text x="200" y="80" fill="#ef4444" font-size="6" text-anchor="middle">화산</text>
            <rect x="240" y="56" width="60" height="40" rx="4" fill="#3b82f620" stroke="#3b82f640" stroke-width="0.5"/>
            <text x="270" y="80" fill="#3b82f6" font-size="6" text-anchor="middle">호수</text>
            <rect x="100" y="104" width="90" height="40" rx="4" fill="#a78bfa20" stroke="#a78bfa40" stroke-width="0.5"/>
            <text x="145" y="128" fill="#a78bfa" font-size="6" text-anchor="middle">마을</text>
            <rect x="200" y="104" width="100" height="40" rx="4" fill="#fbbf2420" stroke="#fbbf2440" stroke-width="0.5"/>
            <text x="250" y="128" fill="#fbbf24" font-size="6" text-anchor="middle">보스 지역</text>
            <!-- Player position on map -->
            <circle cx="145" cy="118" r="5" fill="#60a5fa" stroke="#fff" stroke-width="1"/>
            <!-- Quest markers -->
            <text x="250" y="120" fill="#f59e0b" font-size="8" text-anchor="middle">!</text>
            <!-- Legend -->
            <circle cx="100" y="164" r="3" fill="#60a5fa"/><text x="114" y="167" fill="#ffffff50" font-size="5">플레이어</text>
            <circle cx="160" y="164" r="3" fill="#ef4444"/><text x="174" y="167" fill="#ffffff50" font-size="5">적</text>
            <circle cx="200" y="164" r="3" fill="#34d399"/><text x="214" y="167" fill="#ffffff50" font-size="5">NPC</text>
            <text x="260" y="167" fill="#f59e0b" font-size="7">!</text><text x="274" y="167" fill="#ffffff50" font-size="5">퀘스트</text>
            <!-- Zoom controls -->
            <rect x="290" y="152" width="18" height="18" rx="4" fill="#ffffff10" stroke="#ffffff30" stroke-width="0.5"/>
            <text x="299" y="164" fill="#ffffff60" font-size="10" text-anchor="middle">+</text>
            <rect x="290" y="172" width="18" height="18" rx="4" fill="#ffffff10" stroke="#ffffff30" stroke-width="0.5"/>
            <text x="299" y="184" fill="#ffffff60" font-size="10" text-anchor="middle">−</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 미니맵',
                description: 'PC 미니맵은 화면 우상단에 고정 배치되며, 마우스 클릭으로 빠른 이동, 확대/축소, 마커 설정 등 다양한 상호작용을 지원합니다.',
                features: [
                    '화면 우상단 고정 배치 (150~200px)',
                    '마우스 클릭으로 해당 위치 이동/핑',
                    '스크롤 휠로 확대/축소',
                    'M 키로 전체 맵 토글',
                    '우클릭으로 마커/웨이포인트 설정'
                ]
            },
            mobile: {
                title: '모바일 미니맵',
                description: '모바일 미니맵은 작은 화면에서 시야를 최소한으로 가리면서 핵심 위치 정보를 제공합니다. 탭으로 전체 맵을 열고, 핀치 줌으로 확대합니다.',
                features: [
                    '화면 구석에 작게 배치 (80~100px)',
                    '탭하여 전체 맵 오버레이 확장',
                    '핀치 줌으로 맵 확대/축소',
                    '드래그로 맵 이동 (전체 맵 모드)',
                    '자동 회전 — 플레이어 이동 방향 기준'
                ]
            },
        }
    },

    /* [게임 전용 #10] 스킬바 — 스킬/아이템 퀵슬롯 바, 키바인딩 + 쿨다운 표시 */
    skillbar: {
        id: 'skillbar',
        name: '스킬바',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="16" width="5" height="5" rx="1"/><rect x="9" y="16" width="5" height="5" rx="1"/><rect x="16" y="16" width="5" height="5" rx="1"/><path d="M4.5 14V12a7.5 7.5 0 0115 0v2"/></svg>`,
        summary: '스킬/능력을 빠르게 사용하기 위한 단축키 바. 쿨다운 표시, 키바인드 표시가 핵심입니다.',
        description: '스킬바는 전투 중 빠르게 능력을 사용하기 위한 액션바 컴포넌트입니다.',
        guidelines: [
            '키바인드를 슬롯에 명확히 표시하세요',
            '쿨다운 상태를 시각적으로 표현하세요',
            '마나/자원 부족 상태를 구분하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Bar container -->
                <rect x="40" y="120" width="320" height="60" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Skill slots -->
                <rect x="55" y="130" width="44" height="44" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="105" y="130" width="44" height="44" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="155" y="130" width="44" height="44" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="205" y="130" width="44" height="44" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="255" y="130" width="44" height="44" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <rect x="305" y="130" width="44" height="44" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <!-- Skill icons -->
                <text x="77" y="158" text-anchor="middle" fill="#6b7280" font-size="16">⚔</text>
                <text x="127" y="158" text-anchor="middle" fill="#6b7280" font-size="16">🔥</text>
                <text x="177" y="158" text-anchor="middle" fill="#6b7280" font-size="16">❄</text>
                <text x="227" y="158" text-anchor="middle" fill="#6b7280" font-size="16">⚡</text>
                <text x="277" y="158" text-anchor="middle" fill="#6b7280" font-size="16">🛡</text>
                <text x="327" y="158" text-anchor="middle" fill="#6b7280" font-size="16">✦</text>
                <!-- Cooldown overlay (on slot 3) -->
                <rect x="155" y="130" width="44" height="28" rx="6" fill="#9ca3af" opacity="0.35"/>
                <!-- Keybind labels -->
                <text x="67" y="170" text-anchor="middle" fill="#9ca3af" font-size="7" font-weight="bold">1</text>
                <text x="117" y="170" text-anchor="middle" fill="#9ca3af" font-size="7" font-weight="bold">2</text>
                <text x="167" y="170" text-anchor="middle" fill="#9ca3af" font-size="7" font-weight="bold">3</text>
                <text x="217" y="170" text-anchor="middle" fill="#9ca3af" font-size="7" font-weight="bold">4</text>
                <text x="267" y="170" text-anchor="middle" fill="#9ca3af" font-size="7" font-weight="bold">5</text>
                <text x="317" y="170" text-anchor="middle" fill="#9ca3af" font-size="7" font-weight="bold">6</text>
                <!-- Level indicator (small dot on slot 1) -->
                <circle cx="93" cy="135" r="5" fill="#9ca3af"/><text x="93" y="138" text-anchor="middle" fill="white" font-size="6">3</text>
                <!-- Callout 1: Bar Container -->
                <circle cx="38" cy="80" r="14" fill="#374151"/><text x="38" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="44" y1="93" x2="55" y2="120" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Skill Slot -->
                <circle cx="127" cy="80" r="14" fill="#374151"/><text x="127" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="127" y1="94" x2="127" y2="130" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Skill Icon -->
                <circle cx="227" cy="80" r="14" fill="#374151"/><text x="227" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="227" y1="94" x2="227" y2="140" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Cooldown Overlay -->
                <circle cx="177" cy="80" r="14" fill="#374151"/><text x="177" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="177" y1="94" x2="177" y2="130" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 6: Keybind Label -->
                <circle cx="277" cy="220" r="14" fill="#374151"/><text x="277" y="225" text-anchor="middle" fill="white" font-size="12" font-weight="bold">6</text>
                <line x1="272" y1="206" x2="267" y2="174" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- 수정: 마커#5를 스킬바 아래로 이동하여 대각선이 슬롯을 관통하지 않도록 수정 -->
                <!-- Callout 5: Level Indicator -->
                <circle cx="55" cy="165" r="14" fill="#374151"/><text x="55" y="170" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="65" y1="155" x2="93" y2="140" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Bar Container', description: '바 컨테이너' },
                { number: 2, name: 'Skill Slot', description: '스킬 슬롯' },
                { number: 3, name: 'Cooldown Overlay', description: '쿨다운 오버레이' },
                { number: 4, name: 'Skill Icon', description: '스킬 아이콘' },
                { number: 5, name: 'Level Indicator', description: '레벨 표시' },
                { number: 6, name: 'Keybind Label', description: '키바인딩 라벨' },
            ]
        },
        relatedLaws: ['hicks-law', 'fitts-law', 'serial-position', 'recognition-recall'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Skill Bar Layout</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- HUD context -->
            <rect x="20" y="34" width="100" height="12" rx="4" fill="#ef444430"/>
            <rect x="400" y="34" width="60" height="60" rx="30" stroke="#ffffff15" stroke-width="0.5"/>
            <!-- Skill Bar (bottom center, highlighted) -->
            <rect x="90" y="204" width="300" height="48" rx="6" stroke="#a78bfa" stroke-width="2"/>
            <!-- Skill slots -->
            <rect x="100" y="210" width="36" height="36" rx="4" fill="#a78bfa20" stroke="#a78bfa" stroke-width="1"/>
            <text x="118" y="232" fill="#a78bfa" font-size="12" text-anchor="middle">⚔</text>
            <text x="118" y="244" fill="#a78bfa60" font-size="5" text-anchor="middle">Q</text>
            <rect x="142" y="210" width="36" height="36" rx="4" fill="#a78bfa20" stroke="#a78bfa" stroke-width="1"/>
            <text x="160" y="232" fill="#a78bfa" font-size="12" text-anchor="middle">🔥</text>
            <text x="160" y="244" fill="#a78bfa60" font-size="5" text-anchor="middle">W</text>
            <rect x="184" y="210" width="36" height="36" rx="4" fill="#a78bfa20" stroke="#a78bfa" stroke-width="1"/>
            <text x="202" y="232" fill="#a78bfa" font-size="12" text-anchor="middle">🛡</text>
            <text x="202" y="244" fill="#a78bfa60" font-size="5" text-anchor="middle">E</text>
            <rect x="226" y="210" width="36" height="36" rx="4" fill="#a78bfa20" stroke="#a78bfa" stroke-width="1"/>
            <text x="244" y="232" fill="#a78bfa" font-size="12" text-anchor="middle">💫</text>
            <text x="244" y="244" fill="#a78bfa60" font-size="5" text-anchor="middle">R</text>
            <!-- Cooldown overlay on one skill -->
            <rect x="184" y="210" width="36" height="24" rx="4" fill="#00000080"/>
            <text x="202" y="227" fill="#fff" font-size="9" text-anchor="middle">3s</text>
            <!-- Ultimate -->
            <rect x="278" y="206" width="44" height="44" rx="8" fill="#fbbf2420" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="300" y="233" fill="#fbbf24" font-size="14" text-anchor="middle">⚡</text>
            <text x="300" y="248" fill="#fbbf2480" font-size="5" text-anchor="middle">ULT</text>
            <!-- Consumables -->
            <rect x="336" y="210" width="36" height="36" rx="4" fill="#34d39915" stroke="#34d39960" stroke-width="0.5"/>
            <text x="354" y="232" fill="#34d399" font-size="10" text-anchor="middle">🧪</text>
            <text x="354" y="244" fill="#34d39960" font-size="5" text-anchor="middle">1</text>
            <!-- Labels -->
            <text x="198" y="198" fill="#a78bfa" font-size="6" text-anchor="middle">스킬 슬롯 (Q/W/E/R)</text>
            <text x="300" y="196" fill="#fbbf24" font-size="6" text-anchor="middle">궁극기</text>
            <text x="354" y="198" fill="#34d399" font-size="6" text-anchor="middle">소모품</text>
            <text x="240" y="264" fill="#a78bfa80" font-size="6" text-anchor="middle">▲ 스킬바 — 단축키 표시 + 쿨다운 오버레이 + 궁극기 분리</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Skill Bar</text>
            <!-- Right side: Main skill cluster (thumb-friendly) -->
            <!-- Primary skill (large) -->
            <circle cx="418" cy="130" r="28" fill="#ef444418" stroke="#ef4444" stroke-width="1.5"/>
            <text x="418" y="126" fill="#ef4444" font-size="10" text-anchor="middle">⚔</text>
            <text x="418" y="140" fill="#ef4444" font-size="5" text-anchor="middle">기본공격</text>
            <!-- Secondary skills (smaller, around primary) -->
            <circle cx="370" cy="100" r="20" fill="#a78bfa18" stroke="#a78bfa" stroke-width="1"/>
            <text x="370" y="96" fill="#a78bfa" font-size="8" text-anchor="middle">⚡</text>
            <text x="370" y="108" fill="#a78bfa" font-size="4" text-anchor="middle">번개</text>
            <circle cx="450" cy="86" r="20" fill="#3b82f618" stroke="#3b82f6" stroke-width="1"/>
            <text x="450" y="82" fill="#3b82f6" font-size="8" text-anchor="middle">🛡</text>
            <text x="450" y="94" fill="#3b82f6" font-size="4" text-anchor="middle">방어</text>
            <circle cx="372" cy="168" r="20" fill="#34d39918" stroke="#34d399" stroke-width="1"/>
            <text x="372" y="164" fill="#34d399" font-size="8" text-anchor="middle">✚</text>
            <text x="372" y="176" fill="#34d399" font-size="4" text-anchor="middle">힐</text>
            <circle cx="450" cy="168" r="16" fill="#fbbf2418" stroke="#fbbf24" stroke-width="1"/>
            <text x="450" y="164" fill="#fbbf24" font-size="7" text-anchor="middle">💥</text>
            <text x="450" y="176" fill="#fbbf24" font-size="4" text-anchor="middle">궁극기</text>
            <!-- Cooldown overlay example on one skill -->
            <circle cx="450" cy="86" r="20" fill="#00000060"/>
            <text x="450" y="90" fill="#fff" font-size="9" text-anchor="middle">5s</text>
            <!-- Left side: Virtual joystick -->
            <circle cx="95" cy="148" r="36" stroke="#ffffff20" stroke-width="1.5" stroke-dasharray="4"/>
            <circle cx="95" cy="148" r="14" fill="#ffffff10" stroke="#ffffff30" stroke-width="1"/>
            <text x="95" y="196" fill="#ffffff30" font-size="5" text-anchor="middle">이동</text>
            <!-- Top: HP/MP minimal -->
            <rect x="38" y="30" width="100" height="8" rx="4" fill="#ef444430"/>
            <rect x="38" y="30" width="70" height="8" rx="4" fill="#ef444490"/>
            <rect x="38" y="42" width="80" height="6" rx="3" fill="#3b82f630"/>
            <rect x="38" y="42" width="40" height="6" rx="3" fill="#3b82f690"/>
            <!-- Ultimate gauge (bottom center) -->
            <rect x="160" y="186" width="160" height="12" rx="6" fill="#fbbf2420" stroke="#fbbf24" stroke-width="0.8"/>
            <rect x="162" y="188" width="112" height="8" rx="4" fill="#fbbf2480"/>
            <text x="240" y="194" fill="#fff" font-size="5" text-anchor="middle">궁극기 70%</text>
            <text x="240" y="180" fill="#fbbf24" font-size="5" text-anchor="middle">궁극기 게이지</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 스킬바',
                description: 'PC 스킬바는 키보드 단축키와 1:1 매핑됩니다. Q, W, E, R 등 키 배치에 맞는 시각적 순서로 슬롯을 배열하며, 호버로 스킬 정보를 확인합니다.',
                features: [
                    '키보드 단축키 1:1 매핑 (Q/W/E/R, 1~0)',
                    '각 슬롯에 단축키 라벨 표시',
                    '호버 시 스킬 상세 툴팁',
                    '드래그 앤 드롭으로 슬롯 커스터마이징',
                    '궁극기 슬롯 별도 강조 (크기/색상 차별화)'
                ]
            },
            mobile: {
                title: '모바일 스킬바',
                description: '모바일 스킬바는 엄지 도달 범위 내 하단/우측에 배치됩니다. 큰 터치 영역과 시각적 피드백이 중요하며, 가상 조이스틱과의 배치 충돌을 피해야 합니다.',
                features: [
                    '화면 우하단 배치 (엄지 도달 범위)',
                    '최소 48x48px 터치 영역',
                    '가상 조이스틱(좌)과 스킬 버튼(우) 분리',
                    '탭=즉시 시전, 길게 누르기=스킬 정보',
                    '쿨다운 — 원형 프로그레스 오버레이'
                ]
            },
        }
    },

    /* [게임 전용 #11] 채팅 — 인게임 채팅 시스템 (전체/팀/파티/귓속말 채널) */
    chat: {
        id: 'chat',
        name: '채팅',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
        summary: '멀티플레이어 게임의 실시간 텍스트 커뮤니케이션 시스템.',
        description: '채팅은 플레이어 간 실시간 소통을 위한 메시징 컴포넌트입니다.',
        guidelines: [
            '채널 구분을 명확히 하세요 (전체/파티/귓속말)',
            '스크롤 시 새 메시지 알림을 표시하세요',
            '게임 플레이를 방해하지 않는 크기로 유지하세요',
        ],
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Chat container -->
                <rect x="80" y="20" width="240" height="210" rx="10" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
                <!-- Channel tabs -->
                <rect x="80" y="20" width="240" height="30" rx="10" fill="#e5e7eb"/>
                <rect x="80" y="40" width="240" height="10" fill="#e5e7eb"/>
                <text x="120" y="40" text-anchor="middle" fill="#374151" font-size="8" font-weight="600">All</text>
                <text x="170" y="40" text-anchor="middle" fill="#9ca3af" font-size="8">Party</text>
                <text x="220" y="40" text-anchor="middle" fill="#9ca3af" font-size="8">Guild</text>
                <text x="270" y="40" text-anchor="middle" fill="#9ca3af" font-size="8">Whisper</text>
                <!-- Message area -->
                <rect x="90" y="58" width="220" height="130" rx="4" fill="#f9fafb"/>
                <!-- Messages -->
                <rect x="100" y="68" width="120" height="10" rx="2" fill="#d1d5db"/>
                <rect x="100" y="84" width="150" height="10" rx="2" fill="#d1d5db"/>
                <rect x="100" y="100" width="90" height="10" rx="2" fill="#d1d5db"/>
                <rect x="100" y="116" width="170" height="10" rx="2" fill="#d1d5db"/>
                <rect x="100" y="132" width="130" height="10" rx="2" fill="#d1d5db"/>
                <rect x="100" y="148" width="100" height="10" rx="2" fill="#d1d5db"/>
                <rect x="100" y="164" width="140" height="10" rx="2" fill="#d1d5db"/>
                <!-- Input field -->
                <rect x="90" y="196" width="180" height="26" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
                <text x="130" y="213" fill="#9ca3af" font-size="8">Type a message...</text>
                <!-- Send button -->
                <rect x="275" y="196" width="36" height="26" rx="6" fill="#d1d5db" stroke="#9ca3af" stroke-width="1"/>
                <text x="293" y="213" text-anchor="middle" fill="#6b7280" font-size="10">→</text>
                <!-- Callout 1: Chat Container -->
                <circle cx="38" cy="35" r="14" fill="#374151"/><text x="38" y="40" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
                <line x1="52" y1="38" x2="80" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 3: Message Area -->
                <circle cx="362" cy="100" r="14" fill="#374151"/><text x="362" y="105" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
                <line x1="348" y1="100" x2="310" y2="100" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 4: Input Field -->
                <circle cx="38" cy="209" r="14" fill="#374151"/><text x="38" y="214" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
                <line x1="52" y1="209" x2="90" y2="209" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 5: Send Button -->
                <circle cx="362" cy="209" r="14" fill="#374151"/><text x="362" y="214" text-anchor="middle" fill="white" font-size="12" font-weight="bold">5</text>
                <line x1="348" y1="209" x2="311" y2="209" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
                <!-- Callout 2: Channel Tabs -->
                <circle cx="362" cy="35" r="14" fill="#374151"/><text x="362" y="40" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
                <line x1="348" y1="35" x2="320" y2="35" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            </svg>`,
            parts: [
                { number: 1, name: 'Chat Container', description: '채팅 컨테이너' },
                { number: 2, name: 'Channel Tabs', description: '채널 탭' },
                { number: 3, name: 'Message Area', description: '메시지 영역' },
                { number: 4, name: 'Input Field', description: '입력 필드' },
                { number: 5, name: 'Send Button', description: '전송 버튼' },
            ]
        },
        relatedLaws: ['postel-law', 'teslers-law', 'progressive-disclosure', 'feedback-principle'],
        screenWireframe: {
            pc: `<svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="480" height="270" rx="4" fill="#12131a"/>
            <text x="240" y="18" fill="#555" font-size="8" text-anchor="middle" font-family="monospace">GAME SCREEN — Chat UI Layout</text>
            <rect x="10" y="24" width="460" height="236" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <!-- HUD context -->
            <rect x="20" y="34" width="100" height="12" rx="4" fill="#ef444430"/>
            <rect x="400" y="34" width="60" height="60" rx="30" stroke="#ffffff15" stroke-width="0.5"/>
            <!-- Chat Window (bottom-left, highlighted) -->
            <rect x="14" y="120" width="200" height="136" rx="6" fill="#0a0b14e0" stroke="#34d399" stroke-width="2"/>
            <!-- Channel tabs -->
            <rect x="18" y="124" width="36" height="16" rx="3" fill="#34d39930"/>
            <text x="36" y="135" fill="#34d399" font-size="6" text-anchor="middle">전체</text>
            <rect x="58" y="124" width="36" height="16" rx="3"/>
            <text x="76" y="135" fill="#6b7280" font-size="6" text-anchor="middle">파티</text>
            <rect x="98" y="124" width="36" height="16" rx="3"/>
            <text x="116" y="135" fill="#6b7280" font-size="6" text-anchor="middle">길드</text>
            <rect x="138" y="124" width="40" height="16" rx="3"/>
            <text x="158" y="135" fill="#6b7280" font-size="6" text-anchor="middle">귓속말</text>
            <!-- Chat messages -->
            <text x="22" y="155" fill="#34d399" font-size="6">[전체] 용사A: 파티 구합니다</text>
            <text x="22" y="167" fill="#fbbf24" font-size="6">[시스템] 이벤트가 시작되었습니다!</text>
            <text x="22" y="179" fill="#60a5fa" font-size="6">[파티] 마법사B: 힐 부탁드려요</text>
            <text x="22" y="191" fill="#34d399" font-size="6">[전체] 전사C: 보스 어디인가요?</text>
            <text x="22" y="203" fill="#f472b6" font-size="6">[길드] 길마D: 공성전 20시 집합!</text>
            <text x="22" y="215" fill="#34d399" font-size="6">[전체] 궁수E: gg</text>
            <!-- Input area -->
            <rect x="18" y="224" width="164" height="24" rx="4" fill="#ffffff08" stroke="#34d39960" stroke-width="0.5"/>
            <text x="30" y="240" fill="#6b728060" font-size="7">메시지 입력...</text>
            <rect x="186" y="224" width="24" height="24" rx="4" fill="#34d39930"/>
            <text x="198" y="240" fill="#34d399" font-size="10" text-anchor="middle">↵</text>
            <text x="107" y="116" fill="#34d399" font-size="6" text-anchor="middle">▼ 채팅 창</text>
        </svg>`,
            mobile: `<svg viewBox="0 0 480 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- iPhone 17 landscape phone body -->
            <rect width="480" height="224" rx="20" fill="#0a0b10"/>
            <rect x="3" y="3" width="474" height="218" rx="18" fill="#12131a"/>
            <!-- Dynamic Island (left side in landscape) -->
            <rect x="6" y="82" width="20" height="60" rx="10" fill="#000"/>
            <!-- Status bar -->
            <text x="38" y="16" fill="#888" font-size="7" font-family="monospace">9:41</text>
            <rect x="440" y="8" width="2" height="4" rx="0.5" fill="#888"/>
            <rect x="444" y="6" width="2" height="6" rx="0.5" fill="#888"/>
            <rect x="448" y="4" width="2" height="8" rx="0.5" fill="#888"/>
            <rect x="452" y="3" width="2" height="10" rx="0.5" fill="#888"/>
            <rect x="458" y="5" width="14" height="8" rx="2" stroke="#888" stroke-width="0.7" fill="none"/>
            <rect x="472" y="7" width="1.5" height="4" rx="0.5" fill="#888"/>
            <rect x="460" y="7" width="8" height="4" rx="1" fill="#888"/>
            <!-- Home indicator -->
            <rect x="205" y="214" width="70" height="4" rx="2" fill="#555"/>
            <!-- Game area border -->
            <rect x="32" y="8" width="436" height="200" rx="3" stroke="#2a2b35" stroke-width="1" stroke-dasharray="4"/>
            <text x="250" y="22" fill="#555" font-size="7" text-anchor="middle" font-family="monospace">MOBILE — Chat</text>
            <!-- Chat panel (left side, semi-transparent) -->
            <rect x="36" y="28" width="200" height="140" rx="6" fill="#0a0b1090" stroke="#ffffff15" stroke-width="1"/>
            <!-- Chat header with tabs -->
            <rect x="36" y="28" width="200" height="20" rx="6" fill="#ffffff08"/>
            <rect x="36" y="42" width="200" height="6" fill="#ffffff08"/>
            <text x="68" y="42" fill="#3b82f6" font-size="6" text-anchor="middle">전체</text>
            <text x="108" y="42" fill="#ffffff50" font-size="6" text-anchor="middle">파티</text>
            <text x="148" y="42" fill="#ffffff50" font-size="6" text-anchor="middle">길드</text>
            <text x="188" y="42" fill="#ffffff50" font-size="6" text-anchor="middle">귓말</text>
            <rect x="48" y="46" width="40" height="2" rx="1" fill="#3b82f6"/>
            <!-- Chat messages -->
            <text x="44" y="64" fill="#3b82f6" font-size="5">[전사] 파티 구합니다</text>
            <text x="44" y="76" fill="#34d399" font-size="5">[힐러] 저 참가할게요!</text>
            <text x="44" y="88" fill="#fbbf24" font-size="5">[시스템] 보스 레이드 시작</text>
            <text x="44" y="100" fill="#a78bfa" font-size="5">[마법사] 버프 넣어드릴게요</text>
            <text x="44" y="112" fill="#ef4444" font-size="5">[경고] 10분 후 서버 점검</text>
            <text x="44" y="124" fill="#3b82f6" font-size="5">[전사] ㄱㄱㄱ</text>
            <text x="44" y="136" fill="#34d399" font-size="5">[힐러] 힐 준비 완료!</text>
            <!-- Chat input -->
            <rect x="36" y="152" width="160" height="20" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="48" y="166" fill="#ffffff30" font-size="6">메시지 입력...</text>
            <rect x="200" y="152" width="36" height="20" rx="4" fill="#3b82f630" stroke="#3b82f6" stroke-width="0.5"/>
            <text x="218" y="166" fill="#3b82f6" font-size="6" text-anchor="middle">전송</text>
            <!-- Right: Game area (dimmed to show chat overlay) -->
            <text x="360" y="110" fill="#ffffff15" font-size="8" text-anchor="middle">게임 화면 영역</text>
            <!-- Chat toggle button -->
            <rect x="36" y="176" width="36" height="20" rx="4" fill="#ffffff10" stroke="#ffffff30" stroke-width="0.5"/>
            <text x="54" y="190" fill="#ffffff50" font-size="7" text-anchor="middle">💬</text>
            <!-- Quick chat (emoji/preset) -->
            <rect x="80" y="176" width="80" height="20" rx="4" fill="#ffffff08" stroke="#ffffff20" stroke-width="0.5"/>
            <text x="120" y="190" fill="#ffffff40" font-size="6" text-anchor="middle">빠른 채팅 ▸</text>
            <!-- Notification badge -->
            <circle cx="68" cy="176" r="6" fill="#ef4444"/>
            <text x="68" y="179" fill="#fff" font-size="5" text-anchor="middle">3</text>
        </svg>`,
        },
        platforms: {
            pc: {
                title: 'PC 채팅',
                description: 'PC 채팅은 키보드 입력이 기본이며, 화면 좌하단에 반투명 채팅창으로 표시됩니다. 채널 전환, 명령어 입력, 이모티콘 등 다양한 기능을 지원합니다.',
                features: [
                    'Enter 키로 채팅 활성화/전송',
                    '채널 전환: /p(파티), /g(길드), /w(귓속말) 등 슬래시 명령어',
                    '반투명 배경 — 게임 화면 가림 최소화',
                    'Tab으로 닉네임 자동완성',
                    '크기 조절 가능 (드래그로 리사이즈)'
                ]
            },
            mobile: {
                title: '모바일 채팅',
                description: '모바일 채팅은 가상 키보드가 화면의 상당 부분을 차지하므로, 입력 시 채팅 영역이 키보드 위로 올라와야 합니다. 정형화된 빠른 메시지와 이모티콘을 지원합니다.',
                features: [
                    '퀵 메시지 프리셋 (자주 쓰는 문구 원탭 전송)',
                    '가상 키보드 대응 — 입력 시 레이아웃 조정',
                    '이모티콘/스티커 키보드 통합',
                    '채팅 최소화 — 말풍선 형태로 축소 표시',
                    '채널 탭 스와이프로 전환'
                ]
            },
        }
    },

    // ============ 참조 컴포넌트 — 기본 UI (M3 + Lithium Design System 기반) ============
    /*
     * ┌─────────────────────────────────────────────────────────────────────────┐
     * │ 참조 컴포넌트 (23개) — 게임 전용 컴포넌트와의 구조 차이                   │
     * ├─────────────────────────────────────────────────────────────────────────┤
     * │                                                                         │
     * │ 게임 전용 컴포넌트에는 없고, 참조 컴포넌트에만 있는 필드:                  │
     * │   - type: 'reference'    → 참조 컴포넌트 여부 식별 (필수)               │
     * │   - variants: []         → 컴포넌트 변형(variant) 배열                  │
     * │     └─ { name, description } 형태                                       │
     * │   - gameApplication: ''  → 게임에서의 활용 방법 (문자열)                 │
     * │                                                                         │
     * │ 게임 전용 컴포넌트에는 있고, 참조 컴포넌트에는 없는 필드:                  │
     * │   - screenWireframe      → 게임 화면 내 배치 와이어프레임 SVG            │
     * │   - platforms: { pc, mobile } → 플랫폼별 디자인 가이드                  │
     * │                                                                         │
     * │ 양쪽 모두 공통으로 가지는 필드:                                           │
     * │   id, name, icon, summary, description, anatomy, guidelines,            │
     * │   relatedLaws                                                           │
     * │                                                                         │
     * │ 참조 컴포넌트는 M3(Material Design 3)과 Lithium Design System의         │
     * │ 표준 UI 패턴을 기반으로 하며, 게임에서 어떻게 활용할 수 있는지를            │
     * │ gameApplication 필드로 안내합니다.                                       │
     * └─────────────────────────────────────────────────────────────────────────┘
     */

    // ── 액션/입력 컴포넌트 ──
    // badges, toggle, checkbox, radio, dropdown, slider, inputfield, search — 사용자 입력/선택/조작용 참조 컴포넌트

    badges: {
        id: 'badges', name: '뱃지', type: 'reference',  // type: 'reference' → 참조 컴포넌트임을 나타냄 (게임 전용에는 이 필드 없음)
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="14" height="14" rx="3"/><circle cx="19" cy="5" r="4" fill="currentColor" stroke="none"/></svg>`,
        summary: '알림 수, 상태, 등급을 표시하는 소형 시각 지표.',
        description: `뱃지는 아이콘이나 요소 위에 부착되어 새로운 정보나 상태를 전달합니다. 게임에서는 새 아이템/퀘스트 알림, 미읽 메시지 카운트, 캐릭터 레벨, 아이템 등급 표시 등에 사용됩니다. 색상 코딩을 통해 긴급도나 희귀도를 즉각적으로 전달합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="140" y="50" width="80" height="80" rx="12" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
            <text x="180" y="98" text-anchor="middle" fill="#6b7280" font-size="24">🔔</text>
            <circle cx="208" cy="58" r="14" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
            <text x="208" y="63" text-anchor="middle" fill="#374151" font-size="11" font-weight="bold">5</text>
            <circle cx="100" cy="50" r="14" fill="#374151"/><text x="100" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="114" y1="50" x2="140" y2="60" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="260" cy="50" r="14" fill="#374151"/><text x="260" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="246" y1="55" x2="222" y2="58" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="260" cy="100" r="14" fill="#374151"/><text x="260" y="105" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="246" y1="98" x2="220" y2="90" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Host Element', description: '뱃지가 부착되는 호스트 요소' },
                { number: 2, name: 'Badge Container', description: '뱃지 컨테이너 (원형)' },
                { number: 3, name: 'Count/Label', description: '숫자 또는 텍스트 라벨' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Small',
                nameKo: '소형 (도트)',
                description: '숫자 없는 최소 인디케이터. 새 항목 존재 여부만 알림.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="50" height="50" rx="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/><circle cx="115" cy="40" r="6" fill="#ef4444"/></svg>`,
                gameContext: '새 메일 도착, 새 아이템 획득 알림'
            },
            {
                name: 'Large',
                nameKo: '대형 (숫자)',
                description: '숫자를 포함하는 카운트 뱃지. 미읽 항목 수를 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="50" height="50" rx="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/><circle cx="117" cy="38" r="12" fill="#ef4444"/><text x="117" y="43" text-anchor="middle" fill="white" font-size="10" font-weight="bold">5</text></svg>`,
                gameContext: '미읽 메시지 수, 새 퀘스트 수, 인벤토리 알림'
            }
        ],
                variants: [           // variants: 컴포넌트 변형 목록 — 참조 컴포넌트에만 존재 (게임 전용에는 없음). { name: 변형명, description: 설명 }
            { name: '숫자 뱃지', description: '미읽 메시지 수, 새 퀘스트 수 등 카운트 표시' },
            { name: '도트 뱃지', description: '새 항목 존재 여부만 표시하는 최소 인디케이터' },
            { name: '아이콘 뱃지', description: '상태를 아이콘으로 표현 (독, 버프, 디버프)' },
            { name: '등급 뱃지', description: '아이템 희귀도 색상 구분 (일반/레어/에픽/전설)' }
        ],
        gameApplication: '새 퀘스트에 도트 뱃지, 인벤토리의 새 아이템에 숫자 뱃지, 장비 등급에 컬러 뱃지를 사용합니다. 99+처리와 색상 차별화가 중요합니다.',  // gameApplication: 게임에서의 구체적 활용법 (참조 컴포넌트에만 존재)
        guidelines: ['99 이상은 "99+"로 표시하세요', '중요도별 색상: 빨강(긴급), 주황(경고), 파랑(정보), 초록(완료)', '뱃지 과다 사용 방지 — 핵심 알림만 뱃지로 표시', '뱃지 크기는 부모 요소의 1/3 이내'],
        relatedLaws: ['von-restorff', 'miller-law', 'feedback-principle']
    },

    toggle: {
        id: 'toggle', name: '토글/스위치', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="7" width="22" height="10" rx="5"/><circle cx="16" cy="12" r="3" fill="currentColor"/></svg>`,
        summary: 'ON/OFF를 즉시 전환하는 바이너리 컨트롤.',
        description: `토글 스위치는 두 가지 상태 사이를 즉시 전환합니다. 게임에서는 사운드 ON/OFF, 자동 전투, HUD 표시, 채팅 필터 등 즉각적인 설정 변경에 사용됩니다. 체크박스와 달리 변경이 즉시 적용됨을 시각적으로 전달합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="120" y="60" width="100" height="50" rx="25" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
            <circle cx="195" cy="85" r="20" fill="#f9fafb" stroke="#9ca3af" stroke-width="1.5"/>
            <text x="270" y="90" fill="#6b7280" font-size="13">ON / OFF</text>
            <circle cx="80" cy="60" r="14" fill="#374151"/><text x="80" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="94" y1="62" x2="120" y2="70" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="195" cy="140" r="14" fill="#374151"/><text x="195" y="145" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="195" y1="126" x2="195" y2="105" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <!-- 수정: 마커#3을 오른쪽으로 이동하여 ON/OFF 라벨 텍스트와 겹치지 않도록 수정 -->
            <circle cx="345" cy="55" r="14" fill="#374151"/><text x="345" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="331" y1="62" x2="310" y2="85" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Track', description: '배경 트랙' },
                { number: 2, name: 'Thumb', description: '슬라이딩 핸들' },
                { number: 3, name: 'Label', description: '상태 라벨 텍스트' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Selected',
                nameKo: '선택됨 (ON)',
                description: 'ON 상태의 스위치. 핸들이 오른쪽으로 이동하고 트랙이 채워집니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="40" width="120" height="40" rx="20" fill="#374151"/>
                    <circle cx="140" cy="60" r="16" fill="#f9fafb"/>
                </svg>`,
                gameContext: '사운드 ON, 자동 전투 활성화, HUD 표시'
            },
            {
                name: 'Unselected',
                nameKo: '미선택 (OFF)',
                description: 'OFF 상태의 스위치. 핸들이 왼쪽에 위치하고 트랙이 비어 있습니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="40" width="120" height="40" rx="20" fill="none" stroke="#9ca3af" stroke-width="2"/>
                    <circle cx="60" cy="60" r="12" fill="#9ca3af"/>
                </svg>`,
                gameContext: '사운드 OFF, 알림 비활성화'
            },
            {
                name: 'With Icon',
                nameKo: '아이콘 포함',
                description: '핸들 내부에 아이콘이 포함된 스위치. 현재 상태를 아이콘으로 보강합니다.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="40" width="120" height="40" rx="20" fill="#374151"/>
                    <circle cx="140" cy="60" r="16" fill="#f9fafb"/>
                    <path d="M135 60l3 3 6-6" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
                gameContext: '설정에서 체크 아이콘으로 ON/OFF 시각 강화'
            }
        ],
                variants: [
            { name: '기본 토글', description: 'ON/OFF 텍스트 라벨이 포함된 표준 스위치' },
            { name: '아이콘 토글', description: '🔊/🔇 등 아이콘으로 상태 표현' },
            { name: '컬러 토글', description: 'ON 시 컬러 변경으로 활성 상태 강조' }
        ],
        gameApplication: '사운드/진동 ON/OFF, 자동 전투 모드, 미니맵 표시, PvP 허용, 채팅 필터 등 즉시 반영되는 게임 설정에 사용합니다.',
        guidelines: ['ON/OFF 상태를 색상과 위치로 명확히 구분', '변경 즉시 적용됨을 사용자에게 알림', '중요한 설정(PvP 등)은 확인 다이얼로그 추가', '색상 외에 라벨/아이콘도 함께 제공 (접근성)'],
        relatedLaws: ['feedback-principle', 'consistency', 'recognition-recall']
    },

    checkbox: {
        id: 'checkbox', name: '체크박스', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12l2 2 4-4"/></svg>`,
        summary: '여러 항목 중 복수 선택이 가능한 컨트롤.',
        description: `체크박스는 독립적인 항목을 개별 선택/해제할 수 있습니다. 게임에서는 다중 아이템 선택(일괄 판매), 알림 설정, 퀘스트 목표 체크리스트, 필터 조건 등에 사용됩니다. 토글과 달리 "적용" 버튼으로 일괄 반영하는 패턴에 적합합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="120" y="70" width="36" height="36" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
            <path d="M128 88 L134 94 L148 80" stroke="#374151" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="172" y="95" fill="#374151" font-size="14">옵션 라벨</text>
            <circle cx="80" cy="70" r="14" fill="#374151"/><text x="80" y="75" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="94" y1="74" x2="120" y2="80" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="138" cy="140" r="14" fill="#374151"/><text x="138" y="145" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="138" y1="126" x2="138" y2="106" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="260" cy="80" r="14" fill="#374151"/><text x="260" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="246" y1="82" x2="210" y2="88" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Container', description: '체크박스 컨테이너' },
                { number: 2, name: 'Check Mark', description: '체크 표시 아이콘' },
                { number: 3, name: 'Label', description: '라벨 텍스트' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Checked',
                nameKo: '체크됨',
                description: '선택 완료 상태. 체크 표시가 있는 채워진 사각형.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="40" width="40" height="40" rx="4" fill="#374151"/><path d="M92 60l4 4 12-12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                gameContext: '퀘스트 완료 체크, 설정 옵션 활성화'
            },
            {
                name: 'Unchecked',
                nameKo: '미체크',
                description: '미선택 상태. 빈 사각형 테두리만 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="40" width="40" height="40" rx="4" fill="none" stroke="#9ca3af" stroke-width="2"/></svg>`,
                gameContext: '미완료 퀘스트, 비활성 옵션'
            },
            {
                name: 'Indeterminate',
                nameKo: '불확정',
                description: '부분 선택 상태. 대시(-) 표시로 일부만 선택됨을 나타냄.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="40" width="40" height="40" rx="4" fill="#374151"/><line x1="90" y1="60" x2="110" y2="60" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>`,
                gameContext: '전체 선택 중 일부만 체크된 상위 항목'
            },
            {
                name: 'Error',
                nameKo: '에러',
                description: '유효성 검사 실패 상태. 빨간 테두리로 오류 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="40" width="40" height="40" rx="4" fill="none" stroke="#ef4444" stroke-width="2"/><text x="100" y="85" text-anchor="middle" fill="#ef4444" font-size="9">필수 항목</text></svg>`,
                gameContext: '필수 동의 체크 누락 시'
            }
        ],
                variants: [
            { name: '기본 체크박스', description: '선택/비선택 상태의 표준 체크박스' },
            { name: '불확정 체크박스', description: '하위 항목이 부분 선택된 부모 체크박스' },
            { name: '커스텀 체크박스', description: '게임 테마에 맞춘 장식형 체크박스' }
        ],
        gameApplication: '인벤토리 다중 선택(일괄 판매/분해), 세부 알림 설정, 파티 모집 조건 필터, 퀘스트 하위 목표 체크에 활용합니다.',
        guidelines: ['라벨 전체를 클릭 가능 영역에 포함', '선택 상태를 색상+아이콘(✓)으로 명확히 표시', '전체 선택/해제 옵션 제공', '비활성 체크박스는 시각적으로 구분'],
        relatedLaws: ['fitts-law', 'recognition-recall', 'consistency']
    },

    radio: {
        id: 'radio', name: '라디오 버튼', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>`,
        summary: '여러 선택지 중 하나만 선택하는 배타적 컨트롤.',
        description: `라디오 버튼은 상호 배타적인 그룹에서 하나만 선택합니다. 게임에서는 난이도 선택, 진영/종족 선택, 서버 선택, 조작 방식 선택 등에 사용됩니다. 3-5개의 선택지가 있을 때 드롭다운보다 직관적입니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="140" cy="88" r="18" fill="none" stroke="#9ca3af" stroke-width="2"/>
            <circle cx="140" cy="88" r="8" fill="#374151"/>
            <text x="175" y="93" fill="#374151" font-size="14">선택 옵션</text>
            <circle cx="80" cy="65" r="14" fill="#374151"/><text x="80" y="70" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="94" y1="70" x2="122" y2="80" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="140" cy="140" r="14" fill="#374151"/><text x="140" y="145" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="140" y1="126" x2="140" y2="106" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="260" cy="80" r="14" fill="#374151"/><text x="260" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="246" y1="82" x2="210" y2="88" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Outer Circle', description: '외부 원 (선택 영역)' },
                { number: 2, name: 'Inner Dot', description: '내부 점 (선택 표시)' },
                { number: 3, name: 'Label', description: '라벨 텍스트' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Selected',
                nameKo: '선택됨',
                description: '선택된 라디오 버튼. 내부에 채워진 원이 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="18" fill="none" stroke="#374151" stroke-width="2"/><circle cx="100" cy="60" r="9" fill="#374151"/></svg>`,
                gameContext: '난이도 선택, 서버 선택, 캐릭터 클래스 선택'
            },
            {
                name: 'Unselected',
                nameKo: '미선택',
                description: '미선택 라디오 버튼. 빈 원만 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="18" fill="none" stroke="#9ca3af" stroke-width="2"/></svg>`,
                gameContext: '미선택 옵션 상태'
            }
        ],
                variants: [
            { name: '기본 라디오', description: '원형 인디케이터가 있는 표준 라디오 버튼' },
            { name: '카드형 라디오', description: '각 옵션이 카드 형태로 표시되는 확장형' },
            { name: '이미지 라디오', description: '캐릭터/스킨 선택 시 이미지와 함께 표시' }
        ],
        gameApplication: '난이도 선택(Easy/Normal/Hard), 캐릭터 종족/직업 선택, 서버 선택, 언어 선택, PvP 모드 선택에 사용합니다.',
        guidelines: ['2-5개 선택지에 적합 (6개 이상은 드롭다운)', '기본 선택값을 항상 제공', '선택지 간 차이를 명확히 설명', '시각적으로 그룹핑하여 관련성 표시'],
        relatedLaws: ['hicks-law', 'law-proximity', 'recognition-recall']
    },

    dropdown: {
        id: 'dropdown', name: '드롭다운', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="3"/><polyline points="8 11 12 15 16 11"/></svg>`,
        summary: '공간 절약형 다수 선택지 제공 펼침 메뉴.',
        description: `드롭다운(셀렉트)은 클릭 시 목록이 펼쳐지는 공간 효율적인 선택 컨트롤입니다. 게임에서는 해상도/그래픽 설정, 언어 선택, 정렬 기준, 채널 선택 등에 사용됩니다. 선택지가 6개 이상일 때 라디오보다 적합합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="40" width="200" height="44" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
            <text x="120" y="68" fill="#374151" font-size="13">선택된 항목</text>
            <polyline points="278,58 284,68 290,58" stroke="#6b7280" stroke-width="2" fill="none"/>
            <rect x="100" y="88" width="200" height="110" rx="8" fill="#f9fafb" stroke="#9ca3af" stroke-width="1"/>
            <rect x="108" y="96" width="184" height="28" rx="4" fill="#e0e7ff"/>
            <text x="120" y="116" fill="#374151" font-size="11">옵션 A (선택됨)</text>
            <text x="120" y="144" fill="#6b7280" font-size="11">옵션 B</text>
            <text x="120" y="172" fill="#6b7280" font-size="11">옵션 C</text>
            <circle cx="60" cy="40" r="14" fill="#374151"/><text x="60" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="74" y1="44" x2="100" y2="52" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="340" cy="52" r="14" fill="#374151"/><text x="340" y="57" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="326" y1="55" x2="292" y2="60" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="60" cy="130" r="14" fill="#374151"/><text x="60" y="135" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="74" y1="130" x2="100" y2="130" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="340" cy="110" r="14" fill="#374151"/><text x="340" y="115" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
            <line x1="326" y1="110" x2="292" y2="110" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Trigger Button', description: '드롭다운 트리거 버튼' },
                { number: 2, name: 'Arrow Icon', description: '펼침 화살표 아이콘' },
                { number: 3, name: 'Option List', description: '옵션 목록 패널' },
                { number: 4, name: 'Selected Item', description: '선택된 항목 하이라이트' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Standard',
                nameKo: '스탠다드',
                description: '기본 드롭다운. 클릭하면 옵션 목록이 펼쳐지는 표준형.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="140" height="40" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="50" y="65" fill="#374151" font-size="11">Select</text><path d="M150 55l5 6 5-6" stroke="#374151" stroke-width="1.5" stroke-linecap="round"/></svg>`,
                gameContext: '서버 선택, 언어 설정, 해상도 선택'
            },
            {
                name: 'Compact',
                nameKo: '컴팩트',
                description: '공간 효율적인 소형 드롭다운. 필터나 정렬에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="44" width="100" height="32" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="70" y="64" fill="#374151" font-size="10">Filter</text><path d="M132 56l4 5 4-5" stroke="#374151" stroke-width="1.5" stroke-linecap="round"/></svg>`,
                gameContext: '아이템 정렬(이름순/등급순), 채팅 채널 선택'
            }
        ],
                variants: [
            { name: '기본 드롭다운', description: '텍스트 목록에서 하나를 선택' },
            { name: '검색형 드롭다운', description: '타이핑으로 선택지 필터링 가능' },
            { name: '다중 선택 드롭다운', description: '여러 항목을 동시 선택 가능' },
            { name: '그룹 드롭다운', description: '선택지를 카테고리별로 그룹핑' }
        ],
        gameApplication: '해상도 선택, 그래픽 품질 설정, 서버/채널 선택, 아이템 정렬(가격순/등급순), 캐릭터 직업 필터에 사용합니다.',
        guidelines: ['현재 선택된 값을 항상 표시', '목록이 길면 검색 기능 추가', '스크롤 가능 영역 최대 높이 제한', '펼침 방향을 화면 위치에 따라 자동 조정'],
        relatedLaws: ['hicks-law', 'progressive-disclosure', 'recognition-recall']
    },

    slider: {
        id: 'slider', name: '슬라이더', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="12" x2="20" y2="12"/><circle cx="14" cy="12" r="3" fill="currentColor"/></svg>`,
        summary: '범위 내 연속 값을 드래그로 선택하는 컨트롤.',
        description: `슬라이더는 최소~최대 범위에서 값을 직관적으로 조절합니다. 게임에서는 볼륨(BGM/SFX/Voice), 밝기, 마우스 감도, 카메라 거리, UI 크기 등 연속적인 수치 조절에 사용됩니다. 정확한 값보다 대략적 조절이 필요할 때 적합합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="82" width="240" height="6" rx="3" fill="#e5e7eb"/>
            <rect x="80" y="82" width="140" height="6" rx="3" fill="#9ca3af"/>
            <circle cx="220" cy="85" r="14" fill="#f9fafb" stroke="#9ca3af" stroke-width="2"/>
            <text x="220" y="55" text-anchor="middle" fill="#374151" font-size="11" font-weight="600">75</text>
            <rect x="205" y="42" width="30" height="20" rx="4" fill="#374151"/>
            <text x="220" y="56" text-anchor="middle" fill="white" font-size="10">75</text>
            <circle cx="55" cy="72" r="14" fill="#374151"/><text x="55" y="77" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="69" y1="76" x2="80" y2="82" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="220" cy="130" r="14" fill="#374151"/><text x="220" y="135" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="220" y1="116" x2="220" y2="99" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="345" cy="72" r="14" fill="#374151"/><text x="345" y="77" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="331" y1="76" x2="320" y2="82" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Track', description: '슬라이더 트랙 (전체 범위)' },
                { number: 2, name: 'Thumb', description: '드래그 핸들' },
                { number: 3, name: 'Value Label', description: '현재 값 표시 라벨' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Continuous',
                nameKo: '연속형',
                description: '자유로운 값 선택이 가능한 기본 슬라이더.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="60" x2="170" y2="60" stroke="#e5e7eb" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="60" x2="110" y2="60" stroke="#374151" stroke-width="4" stroke-linecap="round"/><circle cx="110" cy="60" r="10" fill="#374151"/></svg>`,
                gameContext: '볼륨 조절, 마우스 감도, 밝기 조절'
            },
            {
                name: 'Discrete',
                nameKo: '단계형',
                description: '정해진 단계 값에서만 선택 가능. 눈금 표시가 있음.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="60" x2="170" y2="60" stroke="#e5e7eb" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="60" x2="100" y2="60" stroke="#374151" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="60" r="10" fill="#374151"/><circle cx="30" cy="60" r="3" fill="#374151"/><circle cx="65" cy="60" r="3" fill="#374151"/><circle cx="100" cy="60" r="3" fill="white"/><circle cx="135" cy="60" r="3" fill="#e5e7eb"/><circle cx="170" cy="60" r="3" fill="#e5e7eb"/></svg>`,
                gameContext: '그래픽 품질 (낮음/중간/높음/울트라)'
            },
            {
                name: 'Range',
                nameKo: '범위형',
                description: '두 개의 핸들로 최소~최대 범위를 설정.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="60" x2="170" y2="60" stroke="#e5e7eb" stroke-width="4" stroke-linecap="round"/><line x1="70" y1="60" x2="130" y2="60" stroke="#374151" stroke-width="4" stroke-linecap="round"/><circle cx="70" cy="60" r="10" fill="#374151"/><circle cx="130" cy="60" r="10" fill="#374151"/></svg>`,
                gameContext: '거래소 가격 범위 필터, 레벨 범위 매칭'
            },
            {
                name: 'Centered',
                nameKo: '중앙 기준형',
                description: '중앙을 기준으로 양쪽으로 조절하는 슬라이더.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="60" x2="170" y2="60" stroke="#e5e7eb" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="60" x2="130" y2="60" stroke="#374151" stroke-width="4" stroke-linecap="round"/><circle cx="130" cy="60" r="10" fill="#374151"/><line x1="100" y1="50" x2="100" y2="70" stroke="#9ca3af" stroke-width="1.5"/></svg>`,
                gameContext: '카메라 좌우 반전 조절, 오디오 밸런스(L/R)'
            }
        ],
                variants: [
            { name: '연속 슬라이더', description: '범위 내 모든 값을 자유 선택' },
            { name: '단계 슬라이더', description: '정해진 단계(Low/Mid/High)로 스냅' },
            { name: '범위 슬라이더', description: '최소~최대 두 핸들로 범위 지정' },
            { name: '수직 슬라이더', description: '볼륨 믹서 등 세로형' }
        ],
        gameApplication: 'BGM/SFX/음성 볼륨 조절, 마우스 감도, 카메라 줌/거리, 화면 밝기/감마, UI 스케일, FOV 조절에 사용합니다.',
        guidelines: ['현재 값을 숫자로도 함께 표시', '드래그 중 실시간 미리보기 제공', '중요 기준값에 스냅 포인트 추가', '키보드 방향키로도 조절 가능하게'],
        relatedLaws: ['feedback-principle', 'doherty-threshold', 'fitts-law']
    },

    inputfield: {
        id: 'inputfield', name: '입력 필드', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="3"/><line x1="7" y1="10" x2="7" y2="14"/></svg>`,
        summary: '텍스트를 직접 입력받는 기본 입력 컨트롤.',
        description: `입력 필드는 키보드로 텍스트를 입력하는 기본 컨트롤입니다. 게임에서는 캐릭터 이름 생성, 채팅 입력, 로그인, 검색, 기프트 코드 입력 등에 사용됩니다. 유효성 검사와 실시간 피드백이 핵심입니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="110" y="45" fill="#6b7280" font-size="11">닉네임</text>
            <rect x="100" y="55" width="220" height="48" rx="8" fill="#f9fafb" stroke="#9ca3af" stroke-width="1.5"/>
            <text x="120" y="85" fill="#9ca3af" font-size="12">플레이어 이름 입력</text>
            <text x="110" y="125" fill="#ef4444" font-size="10">* 2~12자 이내로 입력하세요</text>
            <circle cx="65" cy="40" r="14" fill="#374151"/><text x="65" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="79" y1="43" x2="108" y2="45" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="355" cy="70" r="14" fill="#374151"/><text x="355" y="75" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="341" y1="72" x2="320" y2="75" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="65" cy="80" r="14" fill="#374151"/><text x="65" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="79" y1="80" x2="100" y2="80" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="65" cy="120" r="14" fill="#374151"/><text x="65" y="125" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
            <line x1="79" y1="120" x2="108" y2="120" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Label', description: '입력 필드 라벨' },
                { number: 2, name: 'Container', description: '입력 컨테이너' },
                { number: 3, name: 'Placeholder', description: '플레이스홀더 텍스트' },
                { number: 4, name: 'Helper Text', description: '도움말/에러 텍스트' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Filled',
                nameKo: '필드형',
                description: '배경이 채워지고 하단에 밑줄이 있는 텍스트 입력.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="160" height="50" rx="4" fill="#e5e7eb"/><line x1="20" y1="85" x2="180" y2="85" stroke="#374151" stroke-width="2"/><text x="35" y="65" fill="#6b7280" font-size="11">Label</text></svg>`,
                gameContext: '캐릭터 이름 입력, 채팅 입력창'
            },
            {
                name: 'Outlined',
                nameKo: '아웃라인형',
                description: '전체 테두리가 있는 텍스트 입력. 명확한 경계 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="160" height="50" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="35" y="65" fill="#6b7280" font-size="11">Label</text></svg>`,
                gameContext: '로그인 폼, 거래소 검색, 매크로 설정'
            }
        ],
                variants: [
            { name: '기본 입력', description: '한 줄 텍스트 입력 (이름, 코드)' },
            { name: '비밀번호 입력', description: '마스킹 처리 + 보기 토글' },
            { name: '텍스트 영역', description: '여러 줄 입력 (자기소개, 길드 설명)' },
            { name: '숫자 입력', description: '수량 + 증감 버튼 (거래 수량)' }
        ],
        gameApplication: '캐릭터 이름 입력(글자 수 제한+금칙어), 채팅 메시지, 거래소 가격, 기프트/쿠폰 코드, 길드 소개 작성에 사용합니다.',
        guidelines: ['플레이스홀더로 예시 입력값 안내', '글자 수 제한 시 카운터 표시', '실시간 유효성 검사로 오류 즉시 알림', '게임 채팅은 Enter로 열고 닫기'],
        relatedLaws: ['feedback-principle', 'postel-law', 'doherty-threshold']
    },

    search: {
        id: 'search', name: '검색', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
        summary: '키워드로 콘텐츠를 빠르게 찾는 검색 인터페이스.',
        description: `검색은 대량의 콘텐츠에서 원하는 항목을 빠르게 찾는 인터페이스입니다. 게임에서는 아이템 검색, 플레이어 검색, 거래소 검색, 도감 검색, 설정 검색 등에 사용됩니다. 자동 완성과 필터 조합이 사용자 경험을 크게 좌우합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="55" width="260" height="48" rx="24" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
            <circle cx="112" cy="79" r="10" stroke="#6b7280" stroke-width="1.5" fill="none"/>
            <line x1="120" y1="86" x2="126" y2="92" stroke="#6b7280" stroke-width="1.5"/>
            <text x="140" y="84" fill="#9ca3af" font-size="12">아이템 검색...</text>
            <text x="320" y="84" fill="#6b7280" font-size="16">✕</text>
            <circle cx="55" cy="55" r="14" fill="#374151"/><text x="55" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="69" y1="58" x2="98" y2="68" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="112" cy="130" r="14" fill="#374151"/><text x="112" y="135" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="112" y1="116" x2="112" y2="92" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <!-- 수정: 마커#3을 오른쪽으로 이동하여 검색 컨테이너(x=340)와 겹치지 않도록 수정 -->
            <circle cx="365" cy="55" r="14" fill="#374151"/><text x="365" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="351" y1="60" x2="340" y2="70" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Container', description: '검색 필드 컨테이너' },
                { number: 2, name: 'Search Icon', description: '검색 아이콘' },
                { number: 3, name: 'Clear Button', description: '입력 초기화 버튼' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Search Bar',
                nameKo: '검색 바',
                description: '항상 표시되는 검색 입력 필드. 즉시 검색 가능.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="38" width="160" height="44" rx="22" fill="#e5e7eb"/><circle cx="52" cy="60" r="10" fill="none" stroke="#6b7280" stroke-width="1.5"/><line x1="59" y1="67" x2="65" y2="73" stroke="#6b7280" stroke-width="1.5"/><text x="78" y="65" fill="#9ca3af" font-size="11">Search</text></svg>`,
                gameContext: '아이템 검색, 플레이어 검색'
            },
            {
                name: 'Search View',
                nameKo: '검색 뷰',
                description: '클릭 시 전체 화면으로 확장되는 검색. 검색 기록과 추천 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="100" rx="8" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="20" y="18" width="160" height="32" rx="16" fill="#e5e7eb"/><circle cx="42" cy="34" r="8" fill="none" stroke="#6b7280" stroke-width="1.5"/><line x1="47" y1="39" x2="52" y2="44" stroke="#6b7280" stroke-width="1.5"/><text x="60" y="38" fill="#9ca3af" font-size="9">Search</text><line x1="20" y1="60" x2="180" y2="60" stroke="#e5e7eb" stroke-width="1"/><text x="30" y="76" fill="#9ca3af" font-size="8">최근 검색</text><text x="30" y="92" fill="#6b7280" font-size="8">아이템명...</text></svg>`,
                gameContext: '거래소 검색, 도감 검색 (검색 기록+추천 포함)'
            }
        ],
                variants: [
            { name: '인라인 검색', description: '현재 목록을 실시간 필터링' },
            { name: '전체 검색', description: '게임 전체 콘텐츠 대상 검색' },
            { name: '고급 검색', description: '다중 필터 + 정렬 조건 조합' },
            { name: '자동완성', description: '입력 중 추천 결과 실시간 표시' }
        ],
        gameApplication: '거래소 아이템 검색(이름+필터), 플레이어/길드 검색, 도감 검색, 지도에서 NPC/장소 검색, 설정 항목 검색에 사용합니다.',
        guidelines: ['최근 검색어 저장 및 표시', '오타에 관대한 퍼지 매칭 지원', '카테고리 필터와 검색 조합 가능', '결과 없을 때 유용한 대안 제시'],
        relatedLaws: ['postel-law', 'recognition-recall', 'hicks-law']
    },

    // ============ 표시/피드백 컴포넌트 ============
    // tabs, accordion, snackbar, loading, lists, datatable, chips, carousel — 데이터 표시 및 사용자 피드백용 참조 컴포넌트

    tabs: {
        id: 'tabs', name: '탭', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M8 6v4"/><path d="M14 6v4"/></svg>`,
        summary: '같은 영역에서 카테고리별 콘텐츠를 전환하는 탭 패널.',
        description: `탭은 같은 공간에서 서로 다른 카테고리의 콘텐츠를 전환하는 내비게이션 패턴입니다. 게임에서는 인벤토리 카테고리(무기/방어구/소비), 캐릭터 정보(스탯/스킬/장비), 상점 분류 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="50" width="280" height="36" rx="0" fill="none" stroke="none"/>
            <rect x="60" y="50" width="80" height="36" fill="none"/>
            <text x="100" y="74" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">탭 1</text>
            <rect x="60" y="84" width="80" height="3" fill="#374151" rx="1"/>
            <rect x="140" y="50" width="80" height="36" fill="none"/>
            <text x="180" y="74" text-anchor="middle" fill="#9ca3af" font-size="12">탭 2</text>
            <rect x="220" y="50" width="80" height="36" fill="none"/>
            <text x="260" y="74" text-anchor="middle" fill="#9ca3af" font-size="12">탭 3</text>
            <rect x="60" y="86" width="280" height="1" fill="#e5e7eb"/>
            <rect x="60" y="92" width="280" height="60" rx="4" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
            <text x="200" y="128" text-anchor="middle" fill="#9ca3af" font-size="11">탭 콘텐츠 영역</text>
            <circle cx="40" cy="55" r="14" fill="#374151"/><text x="40" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="54" y1="58" x2="60" y2="62" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="160" cy="35" r="14" fill="#374151"/><text x="160" y="40" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="130" y1="42" x2="100" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="360" cy="84" r="14" fill="#374151"/><text x="360" y="89" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="346" y1="86" x2="340" y2="86" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="360" cy="120" r="14" fill="#374151"/><text x="360" y="125" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
            <line x1="346" y1="120" x2="340" y2="120" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Tab Item', description: '탭 항목' },
                { number: 2, name: 'Active Indicator', description: '활성 탭 인디케이터' },
                { number: 3, name: 'Divider', description: '탭 구분선' },
                { number: 4, name: 'Content Area', description: '탭 콘텐츠 영역' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Primary',
                nameKo: '프라이머리 탭',
                description: '최상위 콘텐츠 전환에 사용하는 주요 탭.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="70" x2="190" y2="70" stroke="#e5e7eb" stroke-width="1"/><text x="50" y="60" text-anchor="middle" fill="#374151" font-size="10" font-weight="bold">Tab 1</text><line x1="25" y1="70" x2="75" y2="70" stroke="#374151" stroke-width="3"/><text x="110" y="60" text-anchor="middle" fill="#9ca3af" font-size="10">Tab 2</text><text x="165" y="60" text-anchor="middle" fill="#9ca3af" font-size="10">Tab 3</text></svg>`,
                gameContext: '메인 메뉴 (캐릭터/장비/스킬 탭 전환)'
            },
            {
                name: 'Secondary',
                nameKo: '세컨더리 탭',
                description: '하위 콘텐츠 전환에 사용하는 보조 탭.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="70" x2="190" y2="70" stroke="#e5e7eb" stroke-width="1"/><text x="50" y="60" text-anchor="middle" fill="#374151" font-size="10" font-weight="bold">Tab A</text><line x1="30" y1="70" x2="70" y2="70" stroke="#374151" stroke-width="2"/><text x="110" y="60" text-anchor="middle" fill="#9ca3af" font-size="10">Tab B</text><text x="165" y="60" text-anchor="middle" fill="#9ca3af" font-size="10">Tab C</text></svg>`,
                gameContext: '인벤토리 하위 탭 (무기/방어구/소비/재료)'
            }
        ],
                variants: [
            { name: '고정 탭', description: '화면 너비에 균등 배분되는 고정 탭' },
            { name: '스크롤 탭', description: '좌우 스크롤 가능한 다수의 탭' },
            { name: '아이콘 탭', description: '아이콘만으로 표현된 공간 절약형' },
            { name: '하단 탭', description: '화면 하단 고정 주요 내비게이션' }
        ],
        gameApplication: '인벤토리 카테고리(전체/무기/방어구/소비/재료), 캐릭터 정보(스탯/스킬/장비/외형), 상점 카테고리, 도감 분류에 사용합니다.',
        guidelines: ['탭 수는 2-7개로 제한 (밀러의 법칙)', '활성 탭을 시각적으로 명확히 구분', '사용 빈도순으로 배치', '모바일은 스와이프 전환 지원'],
        relatedLaws: ['miller-law', 'hicks-law', 'serial-position', 'consistency']
    },

    accordion: {
        id: 'accordion', name: '아코디언', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="17" width="18" height="4" rx="1"/><polyline points="15 5 12 7 9 5"/></svg>`,
        summary: '클릭으로 펼치고 접는 확장형 콘텐츠 패널.',
        description: `아코디언은 제목 클릭 시 콘텐츠가 펼쳐지고, 다시 클릭하면 접히는 패턴입니다. 게임에서는 설정 메뉴 카테고리, FAQ, 퀘스트 상세, 스킬 설명, 패치노트 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="30" width="240" height="44" rx="6" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
            <text x="100" y="58" fill="#374151" font-size="12" font-weight="600">섹션 제목</text>
            <text x="298" y="58" fill="#6b7280" font-size="14">▼</text>
            <rect x="80" y="74" width="240" height="60" rx="0" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
            <text x="100" y="110" fill="#9ca3af" font-size="11">펼쳐진 콘텐츠 영역</text>
            <rect x="80" y="134" width="240" height="44" rx="6" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
            <text x="100" y="162" fill="#374151" font-size="12">닫힌 섹션</text>
            <text x="298" y="162" fill="#6b7280" font-size="14">▶</text>
            <circle cx="50" cy="40" r="14" fill="#374151"/><text x="50" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="64" y1="42" x2="80" y2="46" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="350" cy="46" r="14" fill="#374151"/><text x="350" y="51" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="336" y1="50" x2="310" y2="52" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="350" cy="100" r="14" fill="#374151"/><text x="350" y="105" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="336" y1="100" x2="320" y2="100" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Header', description: '아코디언 헤더 (제목)' },
                { number: 2, name: 'Expand Icon', description: '펼침/접힘 아이콘' },
                { number: 3, name: 'Content Panel', description: '콘텐츠 패널' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Single-expand',
                nameKo: '단일 확장',
                description: '한 번에 하나의 패널만 열리는 아코디언.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="160" height="24" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="35" y="26" fill="#374151" font-size="9">Section A</text><text x="168" y="26" fill="#374151" font-size="10">▸</text><rect x="20" y="38" width="160" height="50" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="35" y="54" fill="#374151" font-size="9" font-weight="bold">Section B</text><text x="168" y="54" fill="#374151" font-size="10">▾</text><rect x="30" y="62" width="100" height="6" rx="2" fill="#9ca3af"/><rect x="30" y="72" width="80" height="6" rx="2" fill="#9ca3af"/><rect x="20" y="92" width="160" height="24" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="35" y="108" fill="#374151" font-size="9">Section C</text><text x="168" y="108" fill="#374151" font-size="10">▸</text></svg>`,
                gameContext: 'FAQ 목록, 설정 카테고리 (한 번에 하나만 펼침)'
            },
            {
                name: 'Multi-expand',
                nameKo: '다중 확장',
                description: '여러 패널을 동시에 열 수 있는 아코디언.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="5" width="160" height="36" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="35" y="18" fill="#374151" font-size="9" font-weight="bold">Section A</text><text x="168" y="18" fill="#374151" font-size="10">▾</text><rect x="30" y="25" width="80" height="5" rx="2" fill="#9ca3af"/><rect x="30" y="32" width="60" height="5" rx="2" fill="#9ca3af"/><rect x="20" y="45" width="160" height="24" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="35" y="61" fill="#374151" font-size="9">Section B</text><text x="168" y="61" fill="#374151" font-size="10">▸</text><rect x="20" y="73" width="160" height="42" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="35" y="86" fill="#374151" font-size="9" font-weight="bold">Section C</text><text x="168" y="86" fill="#374151" font-size="10">▾</text><rect x="30" y="93" width="100" height="5" rx="2" fill="#9ca3af"/><rect x="30" y="102" width="70" height="5" rx="2" fill="#9ca3af"/></svg>`,
                gameContext: '캐릭터 스탯 (여러 카테고리 동시 보기), 도움말'
            }
        ],
                variants: [
            { name: '단일 확장', description: '한 번에 하나의 섹션만 열림' },
            { name: '다중 확장', description: '여러 섹션을 동시에 열 수 있음' },
            { name: '중첩 아코디언', description: '아코디언 안에 하위 아코디언' }
        ],
        gameApplication: '설정 메뉴(그래픽/사운드/조작/게임플레이), 스킬 설명 펼치기, 퀘스트 로그 상세, 패치노트 섹션, 도움말/FAQ에 사용합니다.',
        guidelines: ['열린/닫힌 상태를 아이콘(▶/▼)으로 표시', '애니메이션은 200-300ms', '콘텐츠가 길면 열릴 때 스크롤 자동 조정', '자주 쓰는 섹션은 기본으로 열어두기'],
        relatedLaws: ['progressive-disclosure', 'teslers-law', 'recognition-recall']
    },

    snackbar: {
        id: 'snackbar', name: '스낵바/토스트', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="14" width="20" height="7" rx="3"/><circle cx="7" cy="17.5" r="1" fill="currentColor"/><line x1="10" y1="16" x2="18" y2="16"/><line x1="10" y1="19" x2="15" y2="19"/></svg>`,
        summary: '일시적으로 나타나는 간결한 알림 메시지.',
        description: `스낵바(토스트)는 화면에 잠시 나타났다 사라지는 비모달 알림입니다. 게임에서는 아이템 획득, 업적 달성, 친구 접속, 시스템 메시지 등 흐름을 방해하지 않는 알림에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="70" width="280" height="56" rx="8" fill="#374151" stroke="none"/>
            <text x="82" y="103" fill="white" font-size="12">아이템이 저장되었습니다</text>
            <rect x="280" y="82" width="48" height="28" rx="4" fill="none"/>
            <text x="304" y="101" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="600">실행취소</text>
            <circle cx="40" cy="80" r="14" fill="#374151" stroke="white" stroke-width="1"/><text x="40" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="54" y1="82" x2="60" y2="85" stroke="white" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="200" cy="145" r="14" fill="#374151" stroke="white" stroke-width="1"/><text x="200" y="150" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="200" y1="131" x2="200" y2="126" stroke="white" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="360" cy="90" r="14" fill="#374151" stroke="white" stroke-width="1"/><text x="360" y="95" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="346" y1="92" x2="330" y2="95" stroke="white" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Container', description: '스낵바 컨테이너' },
                { number: 2, name: 'Message', description: '메시지 텍스트' },
                { number: 3, name: 'Action', description: '액션 버튼' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Single-line',
                nameKo: '단일 행',
                description: '한 줄 메시지만 표시하는 간결한 스낵바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="75" width="180" height="36" rx="4" fill="#374151"/><text x="24" y="97" fill="white" font-size="10">아이템이 저장되었습니다</text></svg>`,
                gameContext: '아이템 획득/저장 알림, 설정 변경 확인'
            },
            {
                name: 'Two-line',
                nameKo: '두 줄',
                description: '제목과 부가 설명이 있는 두 줄 스낵바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="65" width="180" height="48" rx="4" fill="#374151"/><text x="24" y="83" fill="white" font-size="10">연결이 끊어졌습니다</text><text x="24" y="100" fill="#9ca3af" font-size="8">네트워크를 확인해 주세요</text></svg>`,
                gameContext: '네트워크 오류, 서버 점검 안내'
            },
            {
                name: 'With Action',
                nameKo: '액션 포함',
                description: '실행취소 등 액션 버튼이 포함된 스낵바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="75" width="180" height="36" rx="4" fill="#374151"/><text x="24" y="97" fill="white" font-size="10">아이템 삭제됨</text><text x="172" y="97" text-anchor="end" fill="#60a5fa" font-size="10" font-weight="bold">실행취소</text></svg>`,
                gameContext: '아이템 판매 취소, 장비 해제 실행취소'
            }
        ],
                variants: [
            { name: '기본 토스트', description: '일정 시간 후 자동 사라지는 알림' },
            { name: '액션 토스트', description: '"되돌리기" 등 액션 버튼 포함' },
            { name: '스택 토스트', description: '여러 알림이 쌓이는 형태' },
            { name: '게임 토스트', description: '아이템 아이콘, 경험치 등이 포함된 커스텀' }
        ],
        gameApplication: '아이템 획득 알림, 업적 달성 팝업, 친구 온라인 알림, 퀘스트 완료 알림, 시스템 공지에 사용합니다.',
        guidelines: ['표시 시간 3-5초', '중요 알림은 수동 닫기 제공', '다수 알림은 큐 시스템 사용', '게임플레이 방해 없는 위치 배치'],
        relatedLaws: ['feedback-principle', 'doherty-threshold', 'von-restorff']
    },

    loading: {
        id: 'loading', name: '로딩', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
        summary: '콘텐츠나 작업이 진행 중임을 알리는 로딩 표시.',
        description: `로딩 인디케이터는 시스템이 작업 중임을 사용자에게 알립니다. 게임에서는 씬 로딩, 매칭 대기, 데이터 동기화, 리소스 다운로드 등에 사용됩니다. 로딩 화면의 품질이 전체 게임 인상에 큰 영향을 미칩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="80" r="24" stroke="#e5e7eb" stroke-width="4"/>
            <path d="M200 56 A24 24 0 0 1 224 80" stroke="#374151" stroke-width="4" stroke-linecap="round"/>
            <text x="200" y="130" text-anchor="middle" fill="#6b7280" font-size="12">로딩 중...</text>
            <circle cx="130" cy="60" r="14" fill="#374151"/><text x="130" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="144" y1="64" x2="176" y2="72" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="270" cy="72" r="14" fill="#374151"/><text x="270" y="77" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="256" y1="76" x2="225" y2="80" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="270" cy="125" r="14" fill="#374151"/><text x="270" y="130" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="256" y1="126" x2="240" y2="128" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Track', description: '배경 트랙 (전체 원)' },
                { number: 2, name: 'Indicator', description: '회전 인디케이터' },
                { number: 3, name: 'Label', description: '로딩 메시지 라벨' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Spinner',
                nameKo: '스피너',
                description: '회전하는 원형 인디케이터. 불확정 로딩 상태 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="24" fill="none" stroke="#e5e7eb" stroke-width="4"/><path d="M100 36a24 24 0 0 1 24 24" stroke="#374151" stroke-width="4" stroke-linecap="round"/></svg>`,
                gameContext: '서버 연결 중, 데이터 로딩 중'
            },
            {
                name: 'Skeleton',
                nameKo: '스켈레톤',
                description: '콘텐츠 형태의 플레이스홀더. 레이아웃을 미리 보여줌.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="8" fill="#e5e7eb"/><rect x="90" y="20" width="90" height="12" rx="4" fill="#e5e7eb"/><rect x="90" y="40" width="70" height="10" rx="4" fill="#e5e7eb"/><rect x="90" y="58" width="50" height="10" rx="4" fill="#e5e7eb"/><rect x="20" y="90" width="160" height="10" rx="4" fill="#e5e7eb"/></svg>`,
                gameContext: '인벤토리 아이템 목록 로딩, 상점 목록 로딩'
            },
            {
                name: 'Shimmer',
                nameKo: '쉬머',
                description: '반짝이는 애니메이션이 있는 스켈레톤. 로딩 중임을 강조.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="8" fill="#e5e7eb"/><rect x="20" y="20" width="30" height="60" rx="8" fill="#f3f4f6" opacity="0.7"/><rect x="90" y="20" width="90" height="12" rx="4" fill="#e5e7eb"/><rect x="90" y="20" width="45" height="12" rx="4" fill="#f3f4f6" opacity="0.7"/><rect x="90" y="40" width="70" height="10" rx="4" fill="#e5e7eb"/><rect x="20" y="90" width="160" height="10" rx="4" fill="#e5e7eb"/></svg>`,
                gameContext: '프로필 카드 로딩, 랭킹 목록 로딩'
            }
        ],
                variants: [
            { name: '스피너', description: '회전하는 원형 인디케이터' },
            { name: '프로그레스 바', description: '진행률을 퍼센트로 표시' },
            { name: '스켈레톤', description: '콘텐츠 레이아웃의 뼈대를 미리 표시' },
            { name: '게임 로딩 화면', description: '팁, 아트워크, 미니게임이 포함된 풀스크린' }
        ],
        gameApplication: '씬 전환 로딩 화면(팁+아트워크), 매칭 대기 애니메이션, 상점/인벤토리 데이터 로드 스켈레톤, 리소스 다운로드 진행률에 사용합니다.',
        guidelines: ['진행률을 알 수 있으면 프로그레스 바 사용', '대기 시간에 유용한 팁이나 로어 제공', '긴 로딩에는 미니게임이나 인터랙션 추가', '스켈레톤 UI로 체감 대기 시간 단축'],
        relatedLaws: ['doherty-threshold', 'peak-end-rule', 'zeigarnik-effect']
    },

    lists: {
        id: 'lists', name: '리스트', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/></svg>`,
        summary: '동일한 형태의 데이터를 수직으로 나열하는 목록.',
        description: `리스트는 동일한 구조의 항목들을 수직으로 정렬하여 스캔하기 쉽게 만듭니다. 게임에서는 퀘스트 목록, 랭킹/리더보드, 채팅 로그, 파티원 목록, 서버 목록 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="30" width="240" height="52" rx="4" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
            <circle cx="108" cy="56" r="14" fill="#e5e7eb"/>
            <text x="135" y="50" fill="#374151" font-size="12" font-weight="500">리스트 항목 제목</text>
            <text x="135" y="66" fill="#9ca3af" font-size="10">보조 설명 텍스트</text>
            <text x="300" y="58" fill="#9ca3af" font-size="14">›</text>
            <rect x="80" y="82" width="240" height="1" fill="#e5e7eb"/>
            <rect x="80" y="83" width="240" height="52" rx="4" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
            <circle cx="50" cy="35" r="14" fill="#374151"/><text x="50" y="40" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="64" y1="40" x2="94" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <!-- 수정: 마커#2를 위로 이동하여 리스트 항목과 겹침 방지 -->
            <circle cx="135" cy="10" r="14" fill="#374151"/><text x="135" y="15" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="135" y1="24" x2="135" y2="40" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="350" cy="50" r="14" fill="#374151"/><text x="350" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="336" y1="52" x2="310" y2="56" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <!-- 수정: 마커#4 라인이 길이 0이었던 문제 수정, 오른쪽으로 이동 -->
            <circle cx="350" cy="82" r="14" fill="#374151"/><text x="350" y="87" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
            <line x1="336" y1="82" x2="270" y2="82" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Leading Icon', description: '선행 아이콘/아바타' },
                { number: 2, name: 'Content', description: '제목 및 보조 텍스트' },
                { number: 3, name: 'Trailing Element', description: '후행 요소 (화살표 등)' },
                { number: 4, name: 'Divider', description: '항목 구분선' }
            ]
        },
        m3SubTypes: [
            {
                name: 'One-line',
                nameKo: '단일 행',
                description: '텍스트 한 줄만 표시하는 가장 간결한 리스트.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="25" width="160" height="24" rx="0" fill="none"/><rect x="20" y="27" width="80" height="8" rx="3" fill="#374151"/><line x1="20" y1="49" x2="180" y2="49" stroke="#e5e7eb" stroke-width="1"/><rect x="20" y="55" width="90" height="8" rx="3" fill="#374151"/><line x1="20" y1="73" x2="180" y2="73" stroke="#e5e7eb" stroke-width="1"/><rect x="20" y="79" width="70" height="8" rx="3" fill="#374151"/></svg>`,
                gameContext: '간단한 메뉴 목록, 채팅 채널 목록'
            },
            {
                name: 'Two-line',
                nameKo: '두 줄',
                description: '제목과 부가 텍스트가 있는 리스트.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="35" r="14" fill="#e5e7eb"/><rect x="58" y="26" width="70" height="8" rx="3" fill="#374151"/><rect x="58" y="38" width="50" height="6" rx="3" fill="#9ca3af"/><line x1="20" y1="56" x2="180" y2="56" stroke="#e5e7eb" stroke-width="1"/><circle cx="36" cy="75" r="14" fill="#e5e7eb"/><rect x="58" y="66" width="80" height="8" rx="3" fill="#374151"/><rect x="58" y="78" width="60" height="6" rx="3" fill="#9ca3af"/></svg>`,
                gameContext: '친구 목록 (이름+상태), 장비 목록 (이름+스탯)'
            },
            {
                name: 'Three-line',
                nameKo: '세 줄',
                description: '제목, 설명, 추가 정보가 있는 상세 리스트.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="12" width="40" height="40" rx="6" fill="#e5e7eb"/><rect x="68" y="14" width="80" height="8" rx="3" fill="#374151"/><rect x="68" y="26" width="100" height="6" rx="3" fill="#9ca3af"/><rect x="68" y="36" width="60" height="6" rx="3" fill="#9ca3af"/><line x1="20" y1="58" x2="180" y2="58" stroke="#e5e7eb" stroke-width="1"/><rect x="20" y="64" width="40" height="40" rx="6" fill="#e5e7eb"/><rect x="68" y="66" width="90" height="8" rx="3" fill="#374151"/><rect x="68" y="78" width="70" height="6" rx="3" fill="#9ca3af"/><rect x="68" y="88" width="50" height="6" rx="3" fill="#9ca3af"/></svg>`,
                gameContext: '퀘스트 목록 (이름+설명+보상), 거래소 아이템 목록'
            }
        ],
                variants: [
            { name: '기본 리스트', description: '텍스트 위주의 단순 목록' },
            { name: '아바타 리스트', description: '프로필 이미지+이름+상태 표시' },
            { name: '리치 리스트', description: '이미지, 설명, 액션 버튼이 포함된 확장형' },
            { name: '갤러리 리스트', description: '그리드 형태로 이미지 중심 나열' }
        ],
        gameApplication: '퀘스트 로그, 랭킹 리더보드, 파티원/길드원 목록, 서버 선택 목록, 채팅 대화방 목록, 업적 목록에 사용합니다.',
        guidelines: ['항목 간 일관된 레이아웃 유지', '긴 목록은 가상 스크롤(virtualization) 적용', '정렬/필터 옵션 제공', '선택/호버 상태 명확히 표시'],
        relatedLaws: ['law-similarity', 'law-proximity', 'serial-position', 'miller-law']
    },

    datatable: {
        id: 'datatable', name: '데이터 테이블', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
        summary: '구조화된 데이터를 행과 열로 표시하는 표.',
        description: `데이터 테이블은 복잡한 데이터를 행과 열의 그리드로 정리합니다. 게임에서는 장비 스탯 비교, 거래소 가격표, 길드 관리, 전투 기록, 서버 상태 등에 사용됩니다. 정렬과 필터가 핵심 기능입니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="30" width="300" height="32" rx="4" fill="#f3f4f6" stroke="#e5e7eb" stroke-width="1"/>
            <text x="70" y="51" fill="#374151" font-size="10" font-weight="600">이름 ▼</text>
            <text x="170" y="51" fill="#374151" font-size="10" font-weight="600">레벨</text>
            <text x="260" y="51" fill="#374151" font-size="10" font-weight="600">직업</text>
            <rect x="50" y="62" width="300" height="28" fill="#f9fafb" stroke="#e5e7eb" stroke-width="0.5"/>
            <text x="70" y="81" fill="#6b7280" font-size="10">용사A</text>
            <text x="170" y="81" fill="#6b7280" font-size="10">42</text>
            <text x="260" y="81" fill="#6b7280" font-size="10">전사</text>
            <rect x="50" y="90" width="300" height="28" fill="white" stroke="#e5e7eb" stroke-width="0.5"/>
            <circle cx="30" cy="36" r="14" fill="#374151"/><text x="30" y="41" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="44" y1="38" x2="50" y2="40" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="370" cy="46" r="14" fill="#374151"/><text x="370" y="51" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="356" y1="48" x2="350" y2="48" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="370" cy="80" r="14" fill="#374151"/><text x="370" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="356" y1="80" x2="350" y2="80" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Header Row', description: '헤더 행 (정렬 가능)' },
                { number: 2, name: 'Sort Indicator', description: '정렬 인디케이터' },
                { number: 3, name: 'Data Row', description: '데이터 행' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Basic',
                nameKo: '기본형',
                description: '행과 열로 구성된 기본 데이터 테이블.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="170" height="90" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><rect x="15" y="15" width="170" height="22" rx="4" fill="#374151"/><text x="40" y="30" fill="white" font-size="8">이름</text><text x="90" y="30" fill="white" font-size="8">레벨</text><text x="140" y="30" fill="white" font-size="8">등급</text><line x1="15" y1="55" x2="185" y2="55" stroke="#e5e7eb" stroke-width="1"/><line x1="15" y1="77" x2="185" y2="77" stroke="#e5e7eb" stroke-width="1"/></svg>`,
                gameContext: '랭킹 테이블, 길드원 목록'
            },
            {
                name: 'Sortable',
                nameKo: '정렬형',
                description: '열 헤더 클릭으로 정렬 가능한 테이블.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="170" height="90" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><rect x="15" y="15" width="170" height="22" rx="4" fill="#374151"/><text x="40" y="30" fill="white" font-size="8">이름</text><path d="M60 24l3 4h-6z" fill="white"/><text x="100" y="30" fill="white" font-size="8">레벨 ↓</text><line x1="15" y1="55" x2="185" y2="55" stroke="#e5e7eb" stroke-width="1"/><line x1="15" y1="77" x2="185" y2="77" stroke="#e5e7eb" stroke-width="1"/></svg>`,
                gameContext: '거래소 아이템 가격순/등급순 정렬'
            },
            {
                name: 'Paginated',
                nameKo: '페이지형',
                description: '페이지 네비게이션이 포함된 테이블.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="10" width="170" height="80" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><rect x="15" y="10" width="170" height="20" rx="4" fill="#374151"/><line x1="15" y1="48" x2="185" y2="48" stroke="#e5e7eb" stroke-width="1"/><line x1="15" y1="68" x2="185" y2="68" stroke="#e5e7eb" stroke-width="1"/><text x="100" y="105" text-anchor="middle" fill="#6b7280" font-size="8">< 1 2 3 ... 10 ></text></svg>`,
                gameContext: '전적 기록, 거래 히스토리'
            }
        ],
                variants: [
            { name: '기본 테이블', description: '정적 행/열 데이터 표시' },
            { name: '정렬 테이블', description: '열 헤더 클릭으로 정렬 전환' },
            { name: '비교 테이블', description: '아이템/캐릭터 스탯 나란히 비교' },
            { name: '반응형 테이블', description: '모바일에서 카드형으로 변환' }
        ],
        gameApplication: '장비 스탯 비교표, 거래소 시세 테이블, 길드원 관리(레벨/기여도/접속일), 전투 로그 통계, 서버 선택(핑/인원)에 사용합니다.',
        guidelines: ['열 헤더 클릭으로 정렬 가능하게', '숫자 데이터는 우측 정렬', '행 호버 시 하이라이트', '데이터가 많으면 페이지네이션 제공'],
        relatedLaws: ['law-pragnanz', 'law-proximity', 'recognition-recall']
    },

    chips: {
        id: 'chips', name: '칩/태그', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="10" height="8" rx="4"/><rect x="14" y="8" width="8" height="8" rx="4"/></svg>`,
        summary: '속성, 필터, 카테고리를 나타내는 소형 라벨.',
        description: `칩(태그)은 속성, 필터, 입력값을 작은 라벨로 표현합니다. 게임에서는 아이템 속성 태그, 검색 필터, 캐릭터 특성, 버프/디버프 표시, 장르/카테고리 분류 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="70" width="100" height="36" rx="18" fill="#e0e7ff" stroke="#6366f1" stroke-width="1"/>
            <circle cx="100" cy="88" r="10" fill="#6366f1" opacity="0.3"/>
            <text x="100" y="92" text-anchor="middle" fill="#6366f1" font-size="9">⚔</text>
            <text x="145" y="93" text-anchor="middle" fill="#4338ca" font-size="11">전사</text>
            <text x="170" y="92" fill="#6366f1" font-size="10">✕</text>
            <rect x="195" y="70" width="80" height="36" rx="18" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
            <text x="235" y="93" text-anchor="middle" fill="#6b7280" font-size="11">마법사</text>
            <circle cx="55" cy="68" r="14" fill="#374151"/><text x="55" y="73" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="69" y1="72" x2="80" y2="78" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="100" cy="130" r="14" fill="#374151"/><text x="100" y="135" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="100" y1="116" x2="100" y2="100" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="170" cy="130" r="14" fill="#374151"/><text x="170" y="135" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="170" y1="116" x2="170" y2="106" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Container', description: '칩 컨테이너 (필)' },
                { number: 2, name: 'Leading Icon', description: '선행 아이콘' },
                { number: 3, name: 'Remove Button', description: '삭제 버튼' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Assist',
                nameKo: '어시스트 칩',
                description: '추천 액션을 제안하는 칩. 클릭하면 관련 작업이 실행됨.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="44" width="120" height="32" rx="16" fill="none" stroke="#374151" stroke-width="1.5"/><circle cx="62" cy="60" r="8" fill="#e5e7eb"/><text x="112" y="65" text-anchor="middle" fill="#374151" font-size="10">Assist</text></svg>`,
                gameContext: '추천 퀘스트, 자동 장비 장착'
            },
            {
                name: 'Filter',
                nameKo: '필터 칩',
                description: '선택하면 콘텐츠를 필터링하는 토글형 칩.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="44" width="120" height="32" rx="16" fill="#374151"/><path d="M58 60l3 3 7-7" stroke="white" stroke-width="1.5" stroke-linecap="round"/><text x="112" y="65" text-anchor="middle" fill="white" font-size="10">Filter</text></svg>`,
                gameContext: '인벤토리 등급 필터, 스킬 속성 필터'
            },
            {
                name: 'Input',
                nameKo: '입력 칩',
                description: '사용자가 입력한 내용을 칩으로 표시. 삭제(X) 가능.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="44" width="120" height="32" rx="16" fill="none" stroke="#374151" stroke-width="1.5"/><text x="90" y="65" text-anchor="middle" fill="#374151" font-size="10">Input</text><circle cx="140" cy="60" r="8" fill="#e5e7eb"/><line x1="136" y1="56" x2="144" y2="64" stroke="#6b7280" stroke-width="1.5"/><line x1="144" y1="56" x2="136" y2="64" stroke="#6b7280" stroke-width="1.5"/></svg>`,
                gameContext: '거래소 검색 태그, 파티 조건 태그'
            },
            {
                name: 'Suggestion',
                nameKo: '제안 칩',
                description: '시스템이 제안하는 옵션. 동적으로 생성됨.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="44" width="120" height="32" rx="16" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4"/><text x="100" y="65" text-anchor="middle" fill="#6b7280" font-size="10">Suggestion</text></svg>`,
                gameContext: '최근 거래 아이템, 추천 검색어'
            }
        ],
                variants: [
            { name: '필터 칩', description: '검색/정렬 필터로 사용되는 토글형' },
            { name: '입력 칩', description: '사용자 입력을 칩으로 변환 (태그 입력)' },
            { name: '속성 칩', description: '아이템 속성(화염/빙결/독)을 표시' },
            { name: '삭제 가능 칩', description: 'X 버튼으로 제거 가능한 칩' }
        ],
        gameApplication: '아이템 속성 태그(화염+3, 빙결+5), 거래소 검색 필터, 캐릭터 특성 표시, 파티 모집 조건, 업적 카테고리에 사용합니다.',
        guidelines: ['색상으로 카테고리/속성 구분', '칩 내용은 간결하게 (2-4글자)', '선택/비선택 상태 명확히 구분', '관련 칩끼리 그룹핑'],
        relatedLaws: ['law-similarity', 'recognition-recall', 'law-pragnanz']
    },

    'date-pickers': {
        id: 'date-pickers', name: '날짜 선택기', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
        summary: '날짜 또는 날짜 범위를 선택하는 컴포넌트.',
        description: '날짜 선택기는 달력 UI를 통해 특정 날짜 또는 날짜 범위를 선택할 수 있는 컴포넌트입니다. 게임에서는 이벤트 기간 확인, 출석 체크, 거래소 히스토리 필터, 길드 일정 관리 등에 사용됩니다.',
        m3SubTypes: [
            {
                name: 'Docked',
                nameKo: '도킹형',
                description: '인라인으로 표시되는 달력. 별도 모달 없이 페이지 내에 배치.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="140" height="100" rx="8" fill="none" stroke="#374151" stroke-width="1.5"/><text x="100" y="28" text-anchor="middle" fill="#374151" font-size="10" font-weight="bold">3월 2026</text><line x1="30" y1="34" x2="170" y2="34" stroke="#e5e7eb" stroke-width="1"/><text x="50" y="50" fill="#6b7280" font-size="8">일</text><text x="70" y="50" fill="#6b7280" font-size="8">월</text><text x="90" y="50" fill="#6b7280" font-size="8">화</text><text x="110" y="50" fill="#6b7280" font-size="8">수</text><text x="130" y="50" fill="#6b7280" font-size="8">목</text><text x="150" y="50" fill="#6b7280" font-size="8">금</text><circle cx="110" cy="70" r="10" fill="#374151"/><text x="110" y="74" text-anchor="middle" fill="white" font-size="8">3</text><text x="50" y="74" fill="#6b7280" font-size="8">1</text><text x="70" y="74" fill="#6b7280" font-size="8">2</text></svg>`,
                gameContext: '출석 체크 캘린더, 이벤트 일정 표시'
            },
            {
                name: 'Modal',
                nameKo: '모달형',
                description: '오버레이로 표시되는 달력 팝업. 단일 날짜 선택.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="180" height="110" rx="12" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="20" y="15" width="160" height="30" rx="4" fill="#e5e7eb"/><text x="100" y="35" text-anchor="middle" fill="#374151" font-size="10">2026년 3월</text><line x1="20" y1="50" x2="180" y2="50" stroke="#e5e7eb" stroke-width="1"/><circle cx="100" cy="75" r="12" fill="#374151"/><text x="100" y="79" text-anchor="middle" fill="white" font-size="9">15</text><text x="60" y="79" fill="#6b7280" font-size="9">14</text><text x="140" y="79" fill="#6b7280" font-size="9">16</text><rect x="50" y="95" width="40" height="16" rx="4" fill="none" stroke="#9ca3af" stroke-width="1"/><text x="70" y="106" text-anchor="middle" fill="#9ca3af" font-size="7">취소</text><rect x="110" y="95" width="40" height="16" rx="4" fill="#374151"/><text x="130" y="106" text-anchor="middle" fill="white" font-size="7">확인</text></svg>`,
                gameContext: '거래소 기간 필터, 전적 검색 날짜 선택'
            },
            {
                name: 'Modal (Input)',
                nameKo: '모달 입력형',
                description: '텍스트 입력과 달력을 결합한 모달. 키보드 직접 입력 지원.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="160" height="100" rx="12" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><text x="100" y="30" text-anchor="middle" fill="#374151" font-size="9" font-weight="bold">날짜 입력</text><rect x="35" y="40" width="130" height="30" rx="4" fill="none" stroke="#374151" stroke-width="1.5"/><text x="50" y="60" fill="#374151" font-size="10">2026/03/15</text><rect x="140" y="46" width="18" height="18" rx="2" fill="#e5e7eb"/><text x="149" y="58" text-anchor="middle" fill="#6b7280" font-size="9">📅</text></svg>`,
                gameContext: '정확한 날짜를 알 때 직접 입력'
            },
            {
                name: 'Modal (Range)',
                nameKo: '모달 범위형',
                description: '시작~종료 날짜 범위를 선택하는 모달. 기간 필터에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="100" rx="12" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><text x="100" y="28" text-anchor="middle" fill="#374151" font-size="9" font-weight="bold">기간 선택</text><circle cx="60" cy="60" r="12" fill="#374151"/><text x="60" y="64" text-anchor="middle" fill="white" font-size="8">5</text><rect x="72" y="52" width="56" height="16" rx="0" fill="#e5e7eb"/><circle cx="140" cy="60" r="12" fill="#374151"/><text x="140" y="64" text-anchor="middle" fill="white" font-size="8">12</text><text x="100" y="90" text-anchor="middle" fill="#6b7280" font-size="8">3월 5일 ~ 3월 12일</text></svg>`,
                gameContext: '이벤트 기간, 거래소 기간별 검색'
            }
        ],
        variants: [
            { name: '도킹형', description: '인라인 달력으로 별도 모달 없이 표시' },
            { name: '모달형', description: '오버레이 팝업으로 날짜 선택' },
            { name: '모달 입력형', description: '텍스트 입력 + 달력 결합' },
            { name: '모달 범위형', description: '시작~종료 기간 범위 선택' }
        ],
        gameApplication: '출석 체크 시스템, 이벤트 기간 확인, 거래소 거래 히스토리 필터, 길드 일정 관리, 시즌 기간 표시에 사용합니다.',
        guidelines: ['현재 날짜를 항상 명확히 표시', '선택 불가능한 날짜는 시각적으로 비활성화', '오늘 날짜로 빠르게 돌아가는 버튼 제공', '날짜 형식은 지역화 고려 (YYYY-MM-DD vs MM/DD/YYYY)'],
        relatedLaws: ['recognition-recall', 'hicks-law', 'tesler-law']
    },

    // ============ 내비게이션/구조 컴포넌트 ============
    // appbar, breadcrumb, pagination, stepper, menus, carousel, sheets, divider — 내비게이션 및 페이지 구조용 참조 컴포넌트

    appbar: {
        id: 'appbar', name: '앱 바', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="6" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><line x1="10" y1="6" x2="18" y2="6"/></svg>`,
        summary: '화면 상/하단에 고정되는 핵심 내비게이션 바.',
        description: `앱 바(Top/Bottom App Bar)는 화면 상단이나 하단에 고정되어 제목, 내비게이션, 핵심 액션을 제공합니다. 게임에서는 로비 상단바(재화 표시), 설정 헤더, 하단 탭 바 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="50" width="320" height="52" rx="0" fill="#f3f4f6" stroke="#e5e7eb" stroke-width="1"/>
            <text x="60" y="81" fill="#6b7280" font-size="18">☰</text>
            <text x="190" y="82" text-anchor="middle" fill="#374151" font-size="14" font-weight="600">페이지 제목</text>
            <text x="320" y="81" fill="#6b7280" font-size="16">⚙</text>
            <text x="340" y="81" fill="#6b7280" font-size="16">🔔</text>
            <circle cx="20" cy="60" r="14" fill="#374151"/><text x="20" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="34" y1="64" x2="56" y2="72" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <!-- 수정: 마커#2를 앱바 상단(y=50)과 겹치지 않도록 위로 이동 -->
            <circle cx="190" cy="30" r="14" fill="#374151"/><text x="190" y="35" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="190" y1="44" x2="190" y2="62" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="380" cy="68" r="14" fill="#374151"/><text x="380" y="73" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="366" y1="70" x2="350" y2="74" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Navigation Icon', description: '내비게이션 아이콘 (메뉴/뒤로)' },
                { number: 2, name: 'Title', description: '페이지 제목' },
                { number: 3, name: 'Action Icons', description: '액션 아이콘들' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Small',
                nameKo: '소형',
                description: '기본 높이의 앱 바. 제목과 액션 아이콘 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="30" width="180" height="36" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><text x="30" y="53" fill="#374151" font-size="11" font-weight="bold">Title</text><circle cx="170" cy="48" r="8" fill="#e5e7eb"/></svg>`,
                gameContext: '인게임 설정 화면 상단'
            },
            {
                name: 'Medium',
                nameKo: '중형',
                description: '제목이 아래로 내려간 중간 높이 앱 바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="180" height="56" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><circle cx="30" cy="36" r="8" fill="#e5e7eb"/><circle cx="170" cy="36" r="8" fill="#e5e7eb"/><text x="24" y="66" fill="#374151" font-size="13" font-weight="bold">Title</text></svg>`,
                gameContext: '컬렉션 화면, 도감 화면'
            },
            {
                name: 'Large',
                nameKo: '대형',
                description: '넓은 제목 영역의 대형 앱 바. 스크롤 시 축소.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="70" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><circle cx="30" cy="28" r="8" fill="#e5e7eb"/><circle cx="170" cy="28" r="8" fill="#e5e7eb"/><text x="24" y="68" fill="#374151" font-size="16" font-weight="bold">Title</text></svg>`,
                gameContext: '메인 로비, 프로필 화면'
            },
            {
                name: 'Bottom',
                nameKo: '바텀 앱 바',
                description: '화면 하단에 위치하는 앱 바. FAB와 함께 사용.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="70" rx="4" fill="#e5e7eb" opacity="0.2"/><rect x="10" y="80" width="180" height="30" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><circle cx="35" cy="95" r="8" fill="#e5e7eb"/><circle cx="60" cy="95" r="8" fill="#e5e7eb"/><circle cx="85" cy="95" r="8" fill="#e5e7eb"/><rect x="140" y="70" width="40" height="40" rx="12" fill="#374151"/><line x1="153" y1="90" x2="167" y2="90" stroke="white" stroke-width="2"/><line x1="160" y1="83" x2="160" y2="97" stroke="white" stroke-width="2"/></svg>`,
                gameContext: '모바일 게임 하단 도구 바 + FAB 조합'
            }
        ],
                variants: [
            { name: '상단 앱 바', description: '제목 + 뒤로가기 + 액션 아이콘' },
            { name: '하단 앱 바', description: '주요 내비게이션 탭 (홈/상점/캐릭터 등)' },
            { name: '컨텍스트 앱 바', description: '선택 모드에서 일괄 액션 표시' },
            { name: '게임 상단바', description: '재화(골드/다이아)+레벨+프로필 표시' }
        ],
        gameApplication: '로비 상단바(골드/다이아/스태미나), 설정 화면 헤더, 하단 탭 바(홈/모험/상점/소셜/더보기), 선택 모드 액션 바에 사용합니다.',
        guidelines: ['핵심 정보만 앱 바에 배치 (5개 이내)', '스크롤 시 축소/숨김 동작 고려', '재화 표시는 아이콘+수치로 간결하게', '뒤로가기 버튼은 항상 같은 위치'],
        relatedLaws: ['fitts-law', 'serial-position', 'consistency', 'miller-law']
    },

    breadcrumb: {
        id: 'breadcrumb', name: '브레드크럼', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3-3h4l3 3h4"/><circle cx="7" cy="12" r="1" fill="currentColor"/><circle cx="14" cy="9" r="1" fill="currentColor"/></svg>`,
        summary: '현재 위치의 계층 경로를 보여주는 내비게이션.',
        description: `브레드크럼은 현재 페이지의 계층 구조 내 위치를 경로로 표시합니다. 게임에서는 설정 메뉴 깊은 탐색, 상점 카테고리, 길드 관리 하위 메뉴 등에서 "어디에 있는지" 맥락을 제공합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="80" y="80" fill="#6366f1" font-size="12">홈</text>
            <text x="108" y="80" fill="#9ca3af" font-size="12">/</text>
            <text x="120" y="80" fill="#6366f1" font-size="12">상점</text>
            <text x="156" y="80" fill="#9ca3af" font-size="12">/</text>
            <text x="170" y="80" fill="#374151" font-size="12" font-weight="600">무기</text>
            <circle cx="80" cy="50" r="14" fill="#374151"/><text x="80" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="80" y1="64" x2="80" y2="70" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="135" cy="50" r="14" fill="#374151"/><text x="135" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="135" y1="64" x2="112" y2="72" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="190" cy="50" r="14" fill="#374151"/><text x="190" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="180" y1="62" x2="175" y2="70" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Link Item', description: '클릭 가능한 경로 링크' },
                { number: 2, name: 'Separator', description: '경로 구분자' },
                { number: 3, name: 'Current Page', description: '현재 페이지 (비활성)' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Standard',
                nameKo: '표준형',
                description: '전체 경로가 텍스트로 표시되는 기본 브레드크럼.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="20" y="62" fill="#9ca3af" font-size="10">홈</text><text x="43" y="62" fill="#9ca3af" font-size="10">/</text><text x="54" y="62" fill="#9ca3af" font-size="10">상점</text><text x="82" y="62" fill="#9ca3af" font-size="10">/</text><text x="93" y="62" fill="#374151" font-size="10" font-weight="bold">무기</text></svg>`,
                gameContext: '상점 > 무기 > 검 등 경로 표시'
            },
            {
                name: 'Collapsed',
                nameKo: '축소형',
                description: '중간 경로가 "..."으로 축소된 브레드크럼.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="20" y="62" fill="#9ca3af" font-size="10">홈</text><text x="43" y="62" fill="#9ca3af" font-size="10">/</text><text x="54" y="62" fill="#9ca3af" font-size="10">...</text><text x="72" y="62" fill="#9ca3af" font-size="10">/</text><text x="83" y="62" fill="#374151" font-size="10" font-weight="bold">아이템</text></svg>`,
                gameContext: '깊은 메뉴 구조에서 공간 절약'
            }
        ],
                variants: [
            { name: '텍스트 브레드크럼', description: '경로를 텍스트 링크로 표시' },
            { name: '아이콘 브레드크럼', description: '홈 아이콘 + 텍스트 조합' },
            { name: '접힘 브레드크럼', description: '긴 경로에서 중간 단계를 ...으로 축약' }
        ],
        gameApplication: '설정 > 그래픽 > 고급 같은 깊은 메뉴 탐색, 상점 > 무기 > 검 카테고리, 길드 > 관리 > 권한 설정에 사용합니다.',
        guidelines: ['클릭으로 상위 단계로 즉시 이동', '현재 위치(마지막 항목)는 비활성 스타일', '경로가 길면 중간을 축약', '뒤로가기 버튼과 함께 제공'],
        relatedLaws: ['recognition-recall', 'consistency', 'progressive-disclosure']
    },

    pagination: {
        id: 'pagination', name: '페이지네이션', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="5" height="6" rx="1"/><rect x="9" y="9" width="5" height="6" rx="1" fill="currentColor" opacity="0.3"/><rect x="16" y="9" width="5" height="6" rx="1"/></svg>`,
        summary: '대량의 콘텐츠를 페이지 단위로 나눠 탐색.',
        description: `페이지네이션은 대량의 항목을 페이지로 분할하여 탐색합니다. 게임에서는 거래소 상품 목록, 우편함, 업적 목록, 도감, 길드 검색 결과 등에 사용됩니다. 무한 스크롤과의 적절한 선택이 중요합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="55" width="36" height="36" rx="6" fill="none" stroke="#9ca3af" stroke-width="1"/>
            <text x="98" y="78" text-anchor="middle" fill="#6b7280" font-size="14">‹</text>
            <rect x="124" y="55" width="36" height="36" rx="6" fill="#374151"/>
            <text x="142" y="79" text-anchor="middle" fill="white" font-size="12" font-weight="600">1</text>
            <rect x="168" y="55" width="36" height="36" rx="6" fill="none" stroke="#e5e7eb" stroke-width="1"/>
            <text x="186" y="79" text-anchor="middle" fill="#6b7280" font-size="12">2</text>
            <rect x="212" y="55" width="36" height="36" rx="6" fill="none" stroke="#e5e7eb" stroke-width="1"/>
            <text x="230" y="79" text-anchor="middle" fill="#6b7280" font-size="12">3</text>
            <rect x="260" y="55" width="36" height="36" rx="6" fill="none" stroke="#9ca3af" stroke-width="1"/>
            <text x="278" y="78" text-anchor="middle" fill="#6b7280" font-size="14">›</text>
            <circle cx="60" cy="55" r="14" fill="#374151"/><text x="60" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="70" y1="64" x2="82" y2="68" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="142" cy="35" r="14" fill="#374151"/><text x="142" y="40" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="142" y1="49" x2="142" y2="55" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="316" cy="65" r="14" fill="#374151"/><text x="316" y="70" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="302" y1="68" x2="296" y2="70" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Navigation Arrow', description: '이전/다음 화살표' },
                { number: 2, name: 'Active Page', description: '현재 페이지 (활성)' },
                { number: 3, name: 'Page Number', description: '페이지 번호' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Number',
                nameKo: '번호형',
                description: '페이지 번호로 이동하는 전통적 페이지네이션.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="40" y="65" text-anchor="middle" fill="#9ca3af" font-size="12">&#x2039;</text><rect x="55" y="48" width="24" height="24" rx="4" fill="#374151"/><text x="67" y="65" text-anchor="middle" fill="white" font-size="10">1</text><text x="97" y="65" text-anchor="middle" fill="#374151" font-size="10">2</text><text x="122" y="65" text-anchor="middle" fill="#374151" font-size="10">3</text><text x="147" y="65" text-anchor="middle" fill="#9ca3af" font-size="10">...</text><text x="167" y="65" text-anchor="middle" fill="#9ca3af" font-size="12">&#x203a;</text></svg>`,
                gameContext: '랭킹 목록, 거래소 검색 결과'
            },
            {
                name: 'Infinite Scroll',
                nameKo: '무한 스크롤',
                description: '스크롤 시 자동으로 추가 콘텐츠를 로드.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="10" width="120" height="18" rx="4" fill="#e5e7eb"/><rect x="40" y="32" width="120" height="18" rx="4" fill="#e5e7eb"/><rect x="40" y="54" width="120" height="18" rx="4" fill="#e5e7eb"/><rect x="40" y="76" width="120" height="18" rx="4" fill="#e5e7eb" opacity="0.5"/><circle cx="100" cy="106" r="6" fill="none" stroke="#374151" stroke-width="2"/><path d="M100 100a6 6 0 0 1 6 6" stroke="#374151" stroke-width="2" stroke-linecap="round"/></svg>`,
                gameContext: '채팅 히스토리, SNS 피드, 아이템 목록'
            }
        ],
                variants: [
            { name: '숫자 페이지', description: '페이지 번호를 직접 클릭' },
            { name: '이전/다음', description: '단순 이전/다음 화살표' },
            { name: '무한 스크롤', description: '스크롤 끝에서 자동 로드' },
            { name: '더보기 버튼', description: '클릭 시 다음 묶음 로드' }
        ],
        gameApplication: '거래소 검색 결과, 우편함 목록, 업적/도감 페이지, 길드 검색 결과, 전투 기록 히스토리에 사용합니다.',
        guidelines: ['현재 페이지를 명확히 강조', '첫 페이지/마지막 페이지 바로가기 제공', '페이지당 항목 수를 적정하게 설정 (20-50)', '총 페이지/항목 수를 표시'],
        relatedLaws: ['progressive-disclosure', 'hicks-law', 'recognition-recall']
    },

    stepper: {
        id: 'stepper', name: '스테퍼', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="3" fill="currentColor"/><circle cx="18" cy="12" r="3"/><line x1="9" y1="12" x2="15" y2="12"/></svg>`,
        summary: '순차적인 단계를 안내하는 진행 표시기.',
        description: `스테퍼는 복수의 단계로 구성된 프로세스의 진행 상태를 보여줍니다. 게임에서는 캐릭터 생성 마법사, 튜토리얼 진행, 제작 과정, 이벤트 미션 단계 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- 수정: 스텝 인디케이터 원 색상을 #4b5563으로 변경하여 콜아웃 마커(#374151)와 구분 -->
            <circle cx="100" cy="70" r="16" fill="#4b5563"/>
            <text x="100" y="75" text-anchor="middle" fill="white" font-size="11">✓</text>
            <line x1="116" y1="70" x2="184" y2="70" stroke="#4b5563" stroke-width="2"/>
            <circle cx="200" cy="70" r="16" fill="#4b5563"/>
            <text x="200" y="75" text-anchor="middle" fill="white" font-size="11">2</text>
            <line x1="216" y1="70" x2="284" y2="70" stroke="#e5e7eb" stroke-width="2"/>
            <circle cx="300" cy="70" r="16" fill="none" stroke="#e5e7eb" stroke-width="2"/>
            <text x="300" y="75" text-anchor="middle" fill="#9ca3af" font-size="11">3</text>
            <text x="100" y="105" text-anchor="middle" fill="#374151" font-size="9">계정생성</text>
            <text x="200" y="105" text-anchor="middle" fill="#374151" font-size="9">캐릭터</text>
            <text x="300" y="105" text-anchor="middle" fill="#9ca3af" font-size="9">완료</text>
            <circle cx="60" cy="50" r="14" fill="#374151"/><text x="60" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="70" y1="58" x2="88" y2="64" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="150" cy="50" r="14" fill="#374151"/><text x="150" y="55" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="150" y1="64" x2="150" y2="68" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="200" cy="120" r="14" fill="#374151"/><text x="200" y="125" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="200" y1="106" x2="200" y2="100" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Step Indicator', description: '단계 인디케이터 (완료/현재/대기)' },
                { number: 2, name: 'Connector', description: '단계 연결선' },
                { number: 3, name: 'Step Label', description: '단계 라벨 텍스트' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Horizontal',
                nameKo: '수평형',
                description: '수평으로 단계를 표시하는 스테퍼.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="55" r="14" fill="#374151"/><text x="40" y="60" text-anchor="middle" fill="white" font-size="10">&#x2713;</text><line x1="54" y1="55" x2="86" y2="55" stroke="#374151" stroke-width="2"/><circle cx="100" cy="55" r="14" fill="#374151"/><text x="100" y="60" text-anchor="middle" fill="white" font-size="10">2</text><line x1="114" y1="55" x2="146" y2="55" stroke="#e5e7eb" stroke-width="2"/><circle cx="160" cy="55" r="14" fill="none" stroke="#9ca3af" stroke-width="1.5"/><text x="160" y="60" text-anchor="middle" fill="#9ca3af" font-size="10">3</text><text x="40" y="82" text-anchor="middle" fill="#6b7280" font-size="7">완료</text><text x="100" y="82" text-anchor="middle" fill="#374151" font-size="7">진행중</text><text x="160" y="82" text-anchor="middle" fill="#9ca3af" font-size="7">대기</text></svg>`,
                gameContext: '캐릭터 생성 단계, 튜토리얼 진행'
            },
            {
                name: 'Vertical',
                nameKo: '수직형',
                description: '수직으로 단계를 표시하는 스테퍼. 상세 설명 포함.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="20" r="10" fill="#374151"/><text x="40" y="24" text-anchor="middle" fill="white" font-size="8">&#x2713;</text><text x="60" y="24" fill="#374151" font-size="9">Step 1</text><line x1="40" y1="30" x2="40" y2="48" stroke="#374151" stroke-width="2"/><circle cx="40" cy="58" r="10" fill="#374151"/><text x="40" y="62" text-anchor="middle" fill="white" font-size="8">2</text><text x="60" y="62" fill="#374151" font-size="9" font-weight="bold">Step 2</text><rect x="60" y="68" width="80" height="6" rx="2" fill="#9ca3af"/><line x1="40" y1="68" x2="40" y2="86" stroke="#e5e7eb" stroke-width="2"/><circle cx="40" cy="96" r="10" fill="none" stroke="#9ca3af" stroke-width="1.5"/><text x="40" y="100" text-anchor="middle" fill="#9ca3af" font-size="8">3</text><text x="60" y="100" fill="#9ca3af" font-size="9">Step 3</text></svg>`,
                gameContext: '퀘스트 체인 진행도, 업적 달성 단계'
            }
        ],
                variants: [
            { name: '수평 스테퍼', description: '단계를 가로로 나열' },
            { name: '수직 스테퍼', description: '단계를 세로로 나열 (상세 설명 포함)' },
            { name: '넘버링 스테퍼', description: '단계 번호가 표시된 형태' },
            { name: '아이콘 스테퍼', description: '각 단계를 아이콘으로 표현' }
        ],
        gameApplication: '캐릭터 생성(종족→직업→외형→이름), 장비 강화 단계, 이벤트 미션 진행(1/7 단계), 튜토리얼 진행 가이드에 사용합니다.',
        guidelines: ['완료/현재/미래 단계를 시각적으로 구분', '이전 단계로 돌아갈 수 있게 허용', '현재 단계의 제목과 설명을 명확히 표시', '전체 단계 수를 미리 알려주세요'],
        relatedLaws: ['zeigarnik-effect', 'goal-gradient', 'progressive-disclosure']
    },

    menus: {
        id: 'menus', name: '메뉴', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>`,
        summary: '선택 가능한 액션이나 옵션을 펼치는 오버레이 메뉴.',
        description: `메뉴는 버튼이나 우클릭으로 열리는 옵션 목록입니다. 게임에서는 우클릭 컨텍스트 메뉴(아이템 사용/장착/버리기), 드롭다운 메뉴, 퀵 액션 메뉴, 오버플로 메뉴 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="30" width="200" height="170" rx="8" fill="#f9fafb" stroke="#9ca3af" stroke-width="1.5">
            </rect>
            <rect x="108" y="42" width="184" height="36" rx="4" fill="#e0e7ff"/>
            <text x="130" y="65" fill="#374151" font-size="11">📋 복사</text>
            <text x="268" y="65" fill="#9ca3af" font-size="9">Ctrl+C</text>
            <rect x="108" y="82" width="184" height="36" rx="4"/>
            <text x="130" y="105" fill="#374151" font-size="11">📎 붙여넣기</text>
            <rect x="116" y="122" width="168" height="1" fill="#e5e7eb"/>
            <text x="130" y="145" fill="#ef4444" font-size="11">🗑️ 삭제</text>
            <rect x="108" y="160" width="184" height="30" rx="4"/>
            <text x="130" y="180" fill="#374151" font-size="11">📦 이동 ▸</text>
            <circle cx="70" cy="42" r="14" fill="#374151"/><text x="70" y="47" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="84" y1="46" x2="100" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="340" cy="56" r="14" fill="#374151"/><text x="340" y="61" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="326" y1="59" x2="292" y2="62" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="340" cy="122" r="14" fill="#374151"/><text x="340" y="127" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="326" y1="122" x2="284" y2="122" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="340" cy="175" r="14" fill="#374151"/><text x="340" y="180" text-anchor="middle" fill="white" font-size="12" font-weight="bold">4</text>
            <line x1="326" y1="175" x2="292" y2="175" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Menu Container', description: '메뉴 컨테이너' },
                { number: 2, name: 'Menu Item', description: '메뉴 항목 (아이콘 + 단축키)' },
                { number: 3, name: 'Divider', description: '그룹 구분선' },
                { number: 4, name: 'Submenu Arrow', description: '서브메뉴 화살표' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Menu',
                nameKo: '기본 메뉴',
                description: '단일 레벨 메뉴. 클릭/우클릭 시 옵션 목록 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="10" width="100" height="100" rx="8" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="60" y="22" width="60" height="8" rx="3" fill="#374151"/><line x1="50" y1="40" x2="150" y2="40" stroke="#e5e7eb" stroke-width="1"/><rect x="60" y="48" width="50" height="8" rx="3" fill="#6b7280"/><line x1="50" y1="66" x2="150" y2="66" stroke="#e5e7eb" stroke-width="1"/><rect x="60" y="74" width="70" height="8" rx="3" fill="#6b7280"/><line x1="50" y1="92" x2="150" y2="92" stroke="#e5e7eb" stroke-width="1"/><rect x="60" y="96" width="40" height="8" rx="3" fill="#ef4444"/></svg>`,
                gameContext: '우클릭 컨텍스트 메뉴, 아이템 옵션 (사용/버리기/장착)'
            },
            {
                name: 'Submenu',
                nameKo: '서브메뉴',
                description: '메뉴 항목에 하위 메뉴가 펼쳐지는 계층형.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="80" height="90" rx="8" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="30" y="27" width="50" height="8" rx="3" fill="#6b7280"/><rect x="30" y="45" width="40" height="8" rx="3" fill="#374151"/><text x="88" y="53" fill="#374151" font-size="8">▸</text><rect x="30" y="63" width="55" height="8" rx="3" fill="#6b7280"/><rect x="100" y="35" width="80" height="60" rx="8" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="110" y="47" width="50" height="8" rx="3" fill="#6b7280"/><rect x="110" y="63" width="40" height="8" rx="3" fill="#6b7280"/><rect x="110" y="79" width="55" height="8" rx="3" fill="#6b7280"/></svg>`,
                gameContext: '설정 메뉴 하위 카테고리, 스킬 트리 하위 옵션'
            }
        ],
                variants: [
            { name: '컨텍스트 메뉴', description: '우클릭/길게 누르기로 열리는 상황별 메뉴' },
            { name: '드롭다운 메뉴', description: '버튼 클릭으로 아래에 펼쳐지는 메뉴' },
            { name: '오버플로 메뉴', description: '⋮ 버튼으로 추가 옵션 표시' },
            { name: '캐스케이드 메뉴', description: '하위 메뉴가 펼쳐지는 계층형 메뉴' }
        ],
        gameApplication: '아이템 우클릭(사용/장착/분해/판매), 플레이어 우클릭(귓말/파티초대/차단), 설정 메뉴, 채팅 옵션 메뉴에 사용합니다.',
        guidelines: ['가장 자주 쓰는 액션을 상단에 배치', '위험한 액션(삭제/판매)은 구분선으로 분리', '키보드 단축키를 메뉴 항목 옆에 표시', '메뉴 바깥 클릭으로 닫기'],
        relatedLaws: ['serial-position', 'fitts-law', 'recognition-recall', 'hicks-law']
    },

    carousel: {
        id: 'carousel', name: '캐러셀', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="16" height="14" rx="2"/><polyline points="2 12 4 10 4 14"/><polyline points="22 12 20 10 20 14"/></svg>`,
        summary: '좌우로 스와이프하여 콘텐츠를 탐색하는 슬라이더.',
        description: `캐러셀은 한정된 공간에서 여러 콘텐츠를 좌우로 넘기며 탐색합니다. 게임에서는 캐릭터/스킨 선택, 이벤트 배너, 상점 추천 아이템, 게임 모드 선택 등에 사용됩니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="30" width="240" height="120" rx="8" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
            <line x1="80" y1="30" x2="320" y2="150" stroke="#d1d5db" stroke-width="0.5"/>
            <line x1="320" y1="30" x2="80" y2="150" stroke="#d1d5db" stroke-width="0.5"/>
            <circle cx="60" cy="90" r="14" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
            <text x="60" y="95" text-anchor="middle" fill="#6b7280" font-size="14">‹</text>
            <circle cx="340" cy="90" r="14" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
            <text x="340" y="95" text-anchor="middle" fill="#6b7280" font-size="14">›</text>
            <circle cx="185" cy="165" r="4" fill="#374151"/>
            <circle cx="200" cy="165" r="4" fill="#d1d5db"/>
            <circle cx="215" cy="165" r="4" fill="#d1d5db"/>
            <circle cx="40" cy="40" r="14" fill="#374151"/><text x="40" y="45" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="54" y1="44" x2="80" y2="50" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="370" cy="80" r="14" fill="#374151"/><text x="370" y="85" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="356" y1="84" x2="354" y2="88" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <!-- 수정: 마커#3을 viewBox 하단에서 위로 올려 잘림 방지 -->
            <circle cx="200" cy="178" r="14" fill="#374151"/><text x="200" y="183" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="200" y1="164" x2="200" y2="170" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Content Area', description: '슬라이드 콘텐츠 영역' },
                { number: 2, name: 'Navigation Arrow', description: '이전/다음 화살표' },
                { number: 3, name: 'Page Indicator', description: '페이지 인디케이터 (점)' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Multi-browse',
                nameKo: '멀티 브라우즈',
                description: '여러 아이템이 동시에 보이는 캐러셀.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="55" height="80" rx="6" fill="#374151"/><rect x="72" y="20" width="55" height="80" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/><rect x="134" y="20" width="55" height="80" rx="6" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/></svg>`,
                gameContext: '상점 추천 아이템, 신규 스킨 목록'
            },
            {
                name: 'Hero',
                nameKo: '히어로',
                description: '하나의 대형 아이템이 중앙에 표시되고 양쪽에 미리보기.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="30" width="30" height="60" rx="4" fill="#e5e7eb" opacity="0.5"/><rect x="45" y="15" width="110" height="90" rx="8" fill="#374151"/><rect x="160" y="30" width="30" height="60" rx="4" fill="#e5e7eb" opacity="0.5"/></svg>`,
                gameContext: '이벤트 배너, 게임 업데이트 하이라이트'
            },
            {
                name: 'Full-screen',
                nameKo: '풀스크린',
                description: '화면 전체를 차지하는 단일 아이템 캐러셀.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="190" height="110" rx="4" fill="#374151"/><circle cx="90" cy="105" r="4" fill="white"/><circle cx="100" cy="105" r="3" fill="white" opacity="0.4"/><circle cx="110" cy="105" r="3" fill="white" opacity="0.4"/></svg>`,
                gameContext: '게임 소개 온보딩 슬라이드'
            },
            {
                name: 'Uncontained',
                nameKo: '비포함형',
                description: '컨테이너 가장자리를 넘어서 표시되는 캐러셀.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-10" y="25" width="70" height="70" rx="6" fill="#9ca3af" opacity="0.3"/><rect x="65" y="25" width="70" height="70" rx="6" fill="#374151"/><rect x="140" y="25" width="70" height="70" rx="6" fill="#9ca3af" opacity="0.3"/></svg>`,
                gameContext: '캐릭터 선택 화면, 월드 선택'
            }
        ],
                variants: [
            { name: '풀 캐러셀', description: '한 번에 하나의 콘텐츠를 전체 표시' },
            { name: '멀티 캐러셀', description: '여러 카드를 동시에 표시하고 슬라이드' },
            { name: '무한 캐러셀', description: '끝에서 처음으로 순환하는 형태' },
            { name: '인디케이터 캐러셀', description: '하단에 점/번호로 위치 표시' }
        ],
        gameApplication: '캐릭터/스킨 선택 슬라이더, 로비 이벤트 배너, 상점 추천 상품, 게임 모드 선택(솔로/듀오/스쿼드)에 사용합니다.',
        guidelines: ['현재 위치 인디케이터 필수 제공', '좌우 화살표와 스와이프 모두 지원', '자동 재생 시 일시정지 옵션 제공', '한 번에 3-5개 이내 콘텐츠 표시'],
        relatedLaws: ['recognition-recall', 'serial-position', 'progressive-disclosure']
    },

    sheets: {
        id: 'sheets', name: '시트', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="10" width="20" height="12" rx="3"/><line x1="10" y1="10" x2="14" y2="10" stroke-width="3" stroke-linecap="round"/></svg>`,
        summary: '화면 가장자리에서 슬라이드로 나타나는 보조 패널.',
        description: `시트(Bottom/Side Sheet)는 화면 하단이나 측면에서 슬라이드로 나타나는 패널입니다. 게임에서는 아이템 상세 정보, 필터/정렬 옵션, 캐릭터 프리뷰, 퀵 설정 등에 사용됩니다. 다이얼로그보다 가볍고 맥락을 유지합니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="320" height="200" rx="0" fill="#00000010"/>
            <rect x="40" y="100" width="320" height="140" rx="16" fill="#f9fafb" stroke="#9ca3af" stroke-width="1.5"/>
            <rect x="180" y="108" width="40" height="4" rx="2" fill="#d1d5db"/>
            <text x="200" y="140" text-anchor="middle" fill="#374151" font-size="13" font-weight="600">시트 제목</text>
            <rect x="60" y="155" width="280" height="1" fill="#e5e7eb"/>
            <text x="200" y="185" text-anchor="middle" fill="#6b7280" font-size="11">시트 콘텐츠 영역</text>
            <circle cx="20" cy="60" r="14" fill="#374151"/><text x="20" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="34" y1="64" x2="50" y2="70" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <!-- 수정: 마커#2를 스크림 오버레이 밖(오른쪽)으로 이동 -->
            <circle cx="380" cy="108" r="14" fill="#374151"/><text x="380" y="113" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="366" y1="108" x2="220" y2="108" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="380" cy="140" r="14" fill="#374151"/><text x="380" y="145" text-anchor="middle" fill="white" font-size="12" font-weight="bold">3</text>
            <line x1="366" y1="142" x2="360" y2="144" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Scrim', description: '배경 딤 오버레이' },
                { number: 2, name: 'Drag Handle', description: '드래그 핸들' },
                { number: 3, name: 'Content', description: '시트 콘텐츠 영역' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Standard Bottom',
                nameKo: '표준 바텀 시트',
                description: '화면 하단에서 올라오는 표준 시트. 콘텐츠와 함께 표시.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="180" height="110" rx="4" fill="#e5e7eb" opacity="0.3"/><rect x="10" y="45" width="180" height="70" rx="12" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="85" y="50" width="30" height="4" rx="2" fill="#9ca3af"/><rect x="25" y="65" width="100" height="8" rx="3" fill="#374151"/><rect x="25" y="80" width="80" height="6" rx="3" fill="#9ca3af"/></svg>`,
                gameContext: '아이템 상세 정보, 플레이어 프로필'
            },
            {
                name: 'Modal Bottom',
                nameKo: '모달 바텀 시트',
                description: '오버레이와 함께 표시되는 모달 바텀 시트.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="180" height="110" rx="4" fill="#374151" opacity="0.3"/><rect x="10" y="40" width="180" height="75" rx="12" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="85" y="46" width="30" height="4" rx="2" fill="#9ca3af"/><rect x="25" y="60" width="100" height="8" rx="3" fill="#374151"/><rect x="25" y="74" width="80" height="6" rx="3" fill="#9ca3af"/><rect x="25" y="90" width="60" height="6" rx="3" fill="#9ca3af"/></svg>`,
                gameContext: '아이템 옵션 메뉴, 공유 옵션'
            },
            {
                name: 'Standard Side',
                nameKo: '표준 사이드 시트',
                description: '화면 옆에서 슬라이드하는 표준 사이드 시트.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="120" height="110" rx="4" fill="#e5e7eb" opacity="0.3"/><rect x="130" y="5" width="60" height="110" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="138" y="15" width="45" height="8" rx="3" fill="#374151"/><rect x="138" y="30" width="40" height="6" rx="3" fill="#9ca3af"/><rect x="138" y="42" width="35" height="6" rx="3" fill="#9ca3af"/></svg>`,
                gameContext: '장비 스탯 비교, 필터 패널'
            },
            {
                name: 'Modal Side',
                nameKo: '모달 사이드 시트',
                description: '오버레이와 함께 표시되는 모달 사이드 시트.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="180" height="110" rx="4" fill="#374151" opacity="0.3"/><rect x="110" y="5" width="80" height="110" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="118" y="15" width="60" height="8" rx="3" fill="#374151"/><rect x="118" y="30" width="50" height="6" rx="3" fill="#9ca3af"/><rect x="118" y="42" width="45" height="6" rx="3" fill="#9ca3af"/><rect x="118" y="54" width="55" height="6" rx="3" fill="#9ca3af"/></svg>`,
                gameContext: '상세 설정 패널, 채팅 사용자 정보'
            }
        ],
                variants: [
            { name: '하단 시트', description: '화면 아래에서 올라오는 패널' },
            { name: '사이드 시트', description: '화면 옆에서 밀려나오는 패널' },
            { name: '드래그 시트', description: '위아래로 드래그하여 크기 조절' },
            { name: '모달 시트', description: '배경을 어둡게 하고 시트에 집중' }
        ],
        gameApplication: '아이템 상세보기(하단 시트), 필터/정렬 옵션, 캐릭터 프리뷰, 모바일 게임 퀵 설정, 상점 아이템 미리보기에 사용합니다.',
        guidelines: ['드래그로 닫을 수 있게 (터치)', '배경과의 구분을 위해 그림자/오버레이', '시트 열린 상태에서 배경 인터랙션 여부 결정', '빠른 닫기(스와이프 다운) 지원'],
        relatedLaws: ['progressive-disclosure', 'teslers-law', 'fitts-law']
    },

    divider: {
        id: 'divider', name: '디바이더', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>`,
        summary: '콘텐츠 영역을 시각적으로 분리하는 구분선.',
        description: `디바이더는 콘텐츠 섹션 사이에 시각적 경계를 만듭니다. 게임에서는 설정 카테고리 구분, 인벤토리 섹션 분리, 채팅 메시지 날짜 구분, 스탯 그룹 분리 등에 사용됩니다. 과도한 사용은 시각적 잡음을 만듭니다.`,
        anatomy: {
            svg: `<svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="45" text-anchor="middle" fill="#9ca3af" font-size="11">상단 콘텐츠</text>
            <rect x="60" y="65" width="280" height="1.5" fill="#e5e7eb"/>
            <text x="200" y="100" text-anchor="middle" fill="#9ca3af" font-size="11">하단 콘텐츠</text>
            <rect x="60" y="120" width="120" height="1.5" fill="#e5e7eb"/>
            <text x="195" y="124" fill="#9ca3af" font-size="9">또는</text>
            <rect x="215" y="120" width="125" height="1.5" fill="#e5e7eb"/>
            <circle cx="40" cy="58" r="14" fill="#374151"/><text x="40" y="63" text-anchor="middle" fill="white" font-size="12" font-weight="bold">1</text>
            <line x1="54" y1="62" x2="60" y2="65" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
            <circle cx="195" cy="140" r="14" fill="#374151"/><text x="195" y="145" text-anchor="middle" fill="white" font-size="12" font-weight="bold">2</text>
            <line x1="195" y1="126" x2="195" y2="124" stroke="#374151" stroke-width="1" stroke-dasharray="3"/>
        </svg>`,
            parts: [
                { number: 1, name: 'Full Divider', description: '전체 너비 구분선' },
                { number: 2, name: 'Inset with Text', description: '텍스트 포함 구분선' }
            ]
        },
        m3SubTypes: [
            {
                name: 'Full-width',
                nameKo: '전체 너비',
                description: '컨테이너 전체 너비를 차지하는 구분선.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="160" height="8" rx="3" fill="#e5e7eb"/><line x1="20" y1="55" x2="180" y2="55" stroke="#374151" stroke-width="1"/><rect x="20" y="70" width="160" height="8" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '설정 카테고리 구분, 목록 항목 구분'
            },
            {
                name: 'Inset',
                nameKo: '인셋',
                description: '좌측에 여백을 둔 구분선. 아이콘/아바타 영역을 유지.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="35" r="12" fill="#e5e7eb"/><rect x="56" y="30" width="80" height="8" rx="3" fill="#e5e7eb"/><line x1="56" y1="55" x2="180" y2="55" stroke="#374151" stroke-width="1"/><circle cx="36" cy="75" r="12" fill="#e5e7eb"/><rect x="56" y="70" width="90" height="8" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '친구 목록 구분 (아바타 정렬 유지)'
            },
            {
                name: 'Middle Inset',
                nameKo: '중앙 인셋',
                description: '좌우 양쪽에 여백을 둔 구분선.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="160" height="8" rx="3" fill="#e5e7eb"/><line x1="40" y1="55" x2="160" y2="55" stroke="#374151" stroke-width="1"/><rect x="20" y="70" width="160" height="8" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '카드 내부 섹션 구분'
            }
        ],
                variants: [
            { name: '전체 너비 디바이더', description: '영역 전체를 가로지르는 선' },
            { name: '인셋 디바이더', description: '여백을 두고 들여쓴 구분선' },
            { name: '텍스트 디바이더', description: '"또는", "2024년 1월" 등 텍스트 포함' },
            { name: '장식 디바이더', description: '게임 세계관에 맞춘 장식적 구분선' }
        ],
        gameApplication: '설정 메뉴 카테고리 구분, 인벤토리 장비/소비/재료 섹션 분리, 채팅 날짜 구분선, 캐릭터 스탯 그룹 분리에 사용합니다.',
        guidelines: ['디바이더보다 여백(spacing)을 먼저 고려', '색상은 배경과 미묘한 차이로', '과도한 사용은 시각적 잡음 — 꼭 필요한 곳만', '의미있는 구분에만 사용 (장식용 남용 금지)'],
        relatedLaws: ['law-proximity', 'law-pragnanz', 'law-similarity']
    },

    /* ── M3 신규 컴포넌트: 액션 카테고리 ── */

    'icon-buttons': {
        id: 'icon-buttons', name: '아이콘 버튼', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
        summary: '아이콘만으로 구성된 컴팩트한 액션 버튼.',
        description: '아이콘 버튼은 텍스트 라벨 없이 아이콘만으로 액션을 표현하는 컴팩트한 버튼입니다. 공간이 제한된 게임 UI에서 빠른 액세스 기능(설정, 닫기, 즐겨찾기 등)에 적합합니다. 반드시 접근성을 위한 aria-label이 필요합니다.',
        m3SubTypes: [
            {
                name: 'Standard',
                nameKo: '스탠다드',
                description: '컨테이너 없이 아이콘만 표시되는 기본형. 가장 적은 시각적 강조.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="60" r="20" fill="none"/>
                    <line x1="92" y1="60" x2="108" y2="60" stroke="#374151" stroke-width="2.5"/>
                    <line x1="100" y1="52" x2="100" y2="68" stroke="#374151" stroke-width="2.5"/>
                </svg>`,
                gameContext: '인벤토리 정렬, 필터 토글'
            },
            {
                name: 'Filled',
                nameKo: '필드',
                description: '배경이 채워진 아이콘 버튼. 높은 강조가 필요한 액션에 사용.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="60" r="24" fill="#374151"/>
                    <line x1="92" y1="60" x2="108" y2="60" stroke="white" stroke-width="2.5"/>
                    <line x1="100" y1="52" x2="100" y2="68" stroke="white" stroke-width="2.5"/>
                </svg>`,
                gameContext: '메인 액션 (닫기, 뒤로가기)'
            },
            {
                name: 'Filled Tonal',
                nameKo: '톤 필드',
                description: '부드러운 배경색의 아이콘 버튼. 중간 수준의 강조.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="60" r="24" fill="#e5e7eb"/>
                    <line x1="92" y1="60" x2="108" y2="60" stroke="#374151" stroke-width="2.5"/>
                    <line x1="100" y1="52" x2="100" y2="68" stroke="#374151" stroke-width="2.5"/>
                </svg>`,
                gameContext: '즐겨찾기, 북마크, 공유'
            },
            {
                name: 'Outlined',
                nameKo: '아웃라인',
                description: '테두리가 있는 아이콘 버튼. 중간~낮은 강조.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="60" r="24" fill="none" stroke="#374151" stroke-width="1.5"/>
                    <line x1="92" y1="60" x2="108" y2="60" stroke="#374151" stroke-width="2.5"/>
                    <line x1="100" y1="52" x2="100" y2="68" stroke="#374151" stroke-width="2.5"/>
                </svg>`,
                gameContext: '보조 기능 (설정, 도움말)'
            }
        ],
        variants: [
            { name: '스탠다드 아이콘 버튼', description: '배경 없이 아이콘만 표시' },
            { name: '필드 아이콘 버튼', description: '채워진 원형 배경 위 아이콘' },
            { name: '톤 필드 아이콘 버튼', description: '부드러운 배경색 아이콘' },
            { name: '아웃라인 아이콘 버튼', description: '테두리가 있는 아이콘 버튼' }
        ],
        gameApplication: '인벤토리 닫기(X), 설정 톱니바퀴, 즐겨찾기 별, 정렬 아이콘 등 게임 UI 곳곳에서 공간 절약형 액션에 사용합니다.',
        guidelines: ['아이콘만으로 의미 전달이 어려우면 라벨을 추가하세요', '터치 영역은 최소 48x48dp 유지', '호버/포커스 시 툴팁으로 기능 설명 제공', '관련 액션끼리 시각적으로 그룹핑'],
        relatedLaws: ['fitts-law', 'tesler-law', 'recognition-recall']
    },

    fab: {
        id: 'fab', name: '플로팅 액션 버튼', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
        summary: '화면 위에 떠 있는 주요 액션 버튼.',
        description: '플로팅 액션 버튼(FAB)은 화면에서 가장 중요한 단일 액션을 나타내는 버튼입니다. 게임에서는 퀵 액세스 메뉴, 빠른 아이템 사용, 메인 공격 버튼 등 즉각적인 액션 트리거에 사용됩니다. 항상 다른 콘텐츠 위에 떠 있어 접근성이 높습니다.',
        m3SubTypes: [
            {
                name: 'FAB',
                nameKo: 'FAB (기본)',
                description: '56dp 크기의 기본 플로팅 액션 버튼. 아이콘 하나로 주요 액션을 표현.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="72" y="32" width="56" height="56" rx="16" fill="#374151"/>
                    <line x1="92" y1="60" x2="108" y2="60" stroke="white" stroke-width="2.5"/>
                    <line x1="100" y1="52" x2="100" y2="68" stroke="white" stroke-width="2.5"/>
                </svg>`,
                gameContext: '메인 공격, 빠른 아이템 사용'
            },
            {
                name: 'Small FAB',
                nameKo: '소형 FAB',
                description: '40dp 크기의 작은 FAB. 보조 액션이나 제한된 공간에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="80" y="40" width="40" height="40" rx="12" fill="#374151"/>
                    <line x1="93" y1="60" x2="107" y2="60" stroke="white" stroke-width="2"/>
                    <line x1="100" y1="53" x2="100" y2="67" stroke="white" stroke-width="2"/>
                </svg>`,
                gameContext: '미니맵 줌, 채팅 열기'
            },
            {
                name: 'Large FAB',
                nameKo: '대형 FAB',
                description: '96dp 크기의 대형 FAB. 화면의 핵심 액션을 강조할 때 사용.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="52" y="12" width="96" height="96" rx="28" fill="#374151"/>
                    <line x1="88" y1="60" x2="112" y2="60" stroke="white" stroke-width="3"/>
                    <line x1="100" y1="48" x2="100" y2="72" stroke="white" stroke-width="3"/>
                </svg>`,
                gameContext: '전투 시작, 매칭 찾기'
            }
        ],
        variants: [
            { name: 'FAB (기본)', description: '56dp 원형/모서리둥근 사각형 플로팅 버튼' },
            { name: '소형 FAB', description: '40dp 작은 보조 플로팅 버튼' },
            { name: '대형 FAB', description: '96dp 화면 주요 액션 강조 버튼' }
        ],
        gameApplication: '모바일 게임에서 화면 하단 우측의 메인 공격 버튼, 길드 채팅 열기 버튼, 퀵 메뉴 버튼으로 활용됩니다. PC에서는 미니맵 위 줌 버튼이나 빠른 이동 버튼에 사용합니다.',
        guidelines: ['화면에 FAB는 1개만 사용하세요', '가장 중요한 단일 액션에만 사용', '스크롤 시 축소/숨김 고려', 'FAB는 항상 다른 UI 위에 떠 있어야 합니다'],
        relatedLaws: ['fitts-law', 'hicks-law', 'feedback-principle']
    },

    'extended-fab': {
        id: 'extended-fab', name: '확장 FAB', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="5"/><line x1="9" y1="12" x2="15" y2="12"/></svg>`,
        summary: '아이콘과 텍스트가 결합된 확장형 플로팅 버튼.',
        description: '확장 FAB는 아이콘과 텍스트 라벨을 함께 표시하여 액션의 의미를 더 명확하게 전달합니다. 게임에서 액션의 맥락이 명확해야 할 때(예: "파티 생성", "퀘스트 수락") 기본 FAB보다 적합합니다.',
        m3SubTypes: [
            {
                name: 'Extended FAB',
                nameKo: '확장 FAB',
                description: '아이콘 + 텍스트 라벨이 함께 표시되는 넓은 FAB. 액션 의미를 명확히 전달.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="38" width="140" height="44" rx="16" fill="#374151"/>
                    <line x1="58" y1="60" x2="72" y2="60" stroke="white" stroke-width="2"/>
                    <line x1="65" y1="53" x2="65" y2="67" stroke="white" stroke-width="2"/>
                    <text x="118" y="65" text-anchor="middle" fill="white" font-size="12" font-weight="500">Label</text>
                </svg>`,
                gameContext: '"파티 생성", "퀘스트 수락", "캐릭터 생성" 등'
            }
        ],
        variants: [
            { name: '확장 FAB', description: '아이콘 + 텍스트로 명확한 액션 표현' }
        ],
        gameApplication: '파티 생성, 길드 가입, 매칭 시작 등 중요하면서도 맥락 설명이 필요한 액션에 사용합니다. 스크롤 시 아이콘만 남는 축소 애니메이션도 흔히 적용됩니다.',
        guidelines: ['텍스트는 간결하게 1-2단어', '스크롤 시 아이콘만 남는 축소 패턴 고려', '화면당 하나만 사용', 'FAB와 동일한 z-index 규칙 적용'],
        relatedLaws: ['fitts-law', 'tesler-law', 'feedback-principle']
    },

    'button-groups': {
        id: 'button-groups', name: '버튼 그룹', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="8" height="8" rx="2"/><rect x="10" y="8" width="4" height="8"/><rect x="14" y="8" width="8" height="8" rx="2"/></svg>`,
        summary: '관련된 버튼들을 하나의 그룹으로 묶어 표시.',
        description: '버튼 그룹은 관련된 옵션이나 액션을 시각적으로 연결하여 하나의 컨트롤로 표현합니다. 게임에서는 난이도 선택(쉬움/보통/어려움), 뷰 모드 전환, 정렬 옵션 등 상호 배타적이거나 관련된 선택지에 사용됩니다.',
        m3SubTypes: [
            {
                name: 'Connected',
                nameKo: '연결형',
                description: '버튼들이 테두리를 공유하며 하나로 연결된 형태.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="40" width="52" height="40" rx="8" fill="#374151"/>
                    <rect x="72" y="40" width="56" height="40" fill="none" stroke="#374151" stroke-width="1.5"/>
                    <rect x="128" y="40" width="52" height="40" rx="8" fill="none" stroke="#374151" stroke-width="1.5"/>
                    <text x="46" y="65" text-anchor="middle" fill="white" font-size="10">A</text>
                    <text x="100" y="65" text-anchor="middle" fill="#374151" font-size="10">B</text>
                    <text x="154" y="65" text-anchor="middle" fill="#374151" font-size="10">C</text>
                </svg>`,
                gameContext: '난이도 선택, 뷰 모드(1인칭/3인칭) 전환'
            },
            {
                name: 'Split',
                nameKo: '분할형',
                description: '메인 액션 + 드롭다운 화살표로 구성된 분할 버튼.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="40" width="100" height="40" rx="8" fill="#374151"/>
                    <text x="80" y="65" text-anchor="middle" fill="white" font-size="11">Action</text>
                    <line x1="130" y1="44" x2="130" y2="76" stroke="#9ca3af" stroke-width="1"/>
                    <rect x="130" y="40" width="40" height="40" rx="8" fill="#374151"/>
                    <path d="M145 56l5 5 5-5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>`,
                gameContext: '공격+스킬 선택, 아이템 사용+옵션'
            }
        ],
        variants: [
            { name: '연결형', description: '테두리를 공유하는 연결된 버튼 그룹' },
            { name: '분할형', description: '메인 액션 + 추가 옵션 드롭다운' }
        ],
        gameApplication: '전투에서 공격 유형 선택(근접/원거리/마법), 인벤토리 정렬 옵션(이름순/등급순/최신순), 미니맵 줌 레벨 선택에 활용합니다.',
        guidelines: ['2~5개 옵션이 적절 (6개 이상이면 드롭다운 고려)', '현재 선택을 시각적으로 명확히 표시', '순서가 있으면 논리적 순서 유지', '터치 영역 충분히 확보'],
        relatedLaws: ['hicks-law', 'law-proximity', 'law-similarity']
    },

    'segmented-buttons': {
        id: 'segmented-buttons', name: '세그먼트 버튼', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="3"/><line x1="9" y1="7" x2="9" y2="17"/><line x1="15" y1="7" x2="15" y2="17"/></svg>`,
        summary: '여러 옵션 중 하나 또는 여러 개를 선택하는 토글 그룹.',
        description: '세그먼트 버튼은 2~5개의 옵션을 수평으로 나열하여 선택할 수 있는 컨트롤입니다. 단일 선택(라디오)과 다중 선택(체크박스) 모드를 모두 지원합니다. 게임에서는 필터, 모드 선택, 카테고리 전환에 사용됩니다.',
        m3SubTypes: [
            {
                name: 'Single-select',
                nameKo: '단일 선택',
                description: '한 번에 하나의 옵션만 선택 가능. 라디오 버튼의 시각적 대안.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="40" width="170" height="40" rx="20" fill="none" stroke="#374151" stroke-width="1.5"/>
                    <line x1="72" y1="44" x2="72" y2="76" stroke="#374151" stroke-width="1"/>
                    <line x1="128" y1="44" x2="128" y2="76" stroke="#374151" stroke-width="1"/>
                    <rect x="15" y="40" width="57" height="40" rx="20" fill="#374151"/>
                    <path d="M38 60l4 4 8-8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <text x="100" y="65" text-anchor="middle" fill="#374151" font-size="10">B</text>
                    <text x="156" y="65" text-anchor="middle" fill="#374151" font-size="10">C</text>
                </svg>`,
                gameContext: '인벤토리 카테고리(무기/방어구/소비), 채팅 채널 선택'
            },
            {
                name: 'Multi-select',
                nameKo: '다중 선택',
                description: '여러 옵션을 동시에 선택 가능. 필터링에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="40" width="170" height="40" rx="20" fill="none" stroke="#374151" stroke-width="1.5"/>
                    <line x1="72" y1="44" x2="72" y2="76" stroke="#374151" stroke-width="1"/>
                    <line x1="128" y1="44" x2="128" y2="76" stroke="#374151" stroke-width="1"/>
                    <rect x="15" y="40" width="57" height="40" rx="20" fill="#374151"/>
                    <path d="M38 60l4 4 8-8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <rect x="128" y="40" width="57" height="40" rx="20" fill="#374151"/>
                    <path d="M150 60l4 4 8-8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    <text x="100" y="65" text-anchor="middle" fill="#374151" font-size="10">B</text>
                </svg>`,
                gameContext: '아이템 필터(레어+에픽), 맵 레이어 토글(NPC+퀘스트)'
            }
        ],
        variants: [
            { name: '단일 선택', description: '한 번에 하나만 선택 (라디오 대안)' },
            { name: '다중 선택', description: '여러 개 동시 선택 (필터링용)' }
        ],
        gameApplication: '인벤토리 카테고리 필터(무기/방어구/소비/재료), 전투 모드 선택(공격/방어/회피), 채팅 채널 선택(전체/길드/파티)에 사용합니다.',
        guidelines: ['2~5개 세그먼트가 적절', '라벨은 짧게 (1-2단어)', '선택된 상태를 시각적으로 명확히 표시 (채움+체크)', '터치 영역 최소 48dp 확보'],
        relatedLaws: ['hicks-law', 'law-proximity', 'miller-law']
    },

    'nav-bar': {
        id: 'nav-bar', name: '내비게이션 바', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="16" width="20" height="6" rx="2"/><circle cx="6" cy="19" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/><circle cx="18" cy="19" r="1" fill="currentColor"/></svg>`,
        summary: '하단에 고정된 3~5개 아이콘 탭 내비게이션.',
        description: '내비게이션 바는 모바일 화면 하단에 고정되어 앱의 주요 섹션 간 빠른 이동을 제공합니다. 게임에서는 홈/상점/가방/소셜/설정 등 메인 카테고리를 3~5개 아이콘으로 표현합니다.',
        m3SubTypes: [
            {
                name: 'With Label',
                nameKo: '라벨 포함',
                description: '아이콘 아래에 텍스트 라벨이 있는 내비게이션 바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="180" height="44" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><circle cx="46" cy="84" r="8" fill="#374151"/><text x="46" y="103" text-anchor="middle" fill="#374151" font-size="7" font-weight="bold">홈</text><circle cx="100" cy="84" r="8" fill="#e5e7eb"/><text x="100" y="103" text-anchor="middle" fill="#9ca3af" font-size="7">상점</text><circle cx="154" cy="84" r="8" fill="#e5e7eb"/><text x="154" y="103" text-anchor="middle" fill="#9ca3af" font-size="7">가방</text></svg>`,
                gameContext: '모바일 RPG 하단 탭 (홈/상점/가방/소셜)'
            },
            {
                name: 'Without Label',
                nameKo: '라벨 없음',
                description: '아이콘만으로 구성된 미니멀 내비게이션 바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="76" width="180" height="34" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><circle cx="46" cy="93" r="10" fill="#374151"/><circle cx="100" cy="93" r="10" fill="#e5e7eb"/><circle cx="154" cy="93" r="10" fill="#e5e7eb"/></svg>`,
                gameContext: '미니멀 UI 게임, 화면 공간 최대화'
            }
        ],
        variants: [
            { name: '라벨 포함', description: '아이콘 + 텍스트 라벨' },
            { name: '라벨 없음', description: '아이콘만 표시' }
        ],
        gameApplication: '모바일 게임의 메인 화면 하단에 3~5개 핵심 섹션 탭으로 사용합니다. 홈/상점/인벤토리/소셜/설정이 대표적 구성입니다.',
        guidelines: ['3~5개 항목이 적절', '현재 위치를 색상/크기로 명확히 표시', '아이콘은 직관적으로, 라벨은 간결하게', '뱃지로 새 알림 표시'],
        relatedLaws: ['hicks-law', 'fitts-law', 'recognition-recall']
    },

    'nav-drawer': {
        id: 'nav-drawer', name: '내비게이션 드로어', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="8" height="18" rx="2"/><line x1="14" y1="6" x2="22" y2="6"/><line x1="14" y1="12" x2="22" y2="12"/><line x1="14" y1="18" x2="22" y2="18"/></svg>`,
        summary: '측면에서 슬라이드하는 내비게이션 패널.',
        description: '내비게이션 드로어는 화면 측면에서 슬라이드하여 나타나는 메뉴 패널입니다. 많은 수의 메뉴 항목을 계층적으로 구성할 수 있어, 복잡한 게임 설정이나 메뉴 구조에 적합합니다.',
        m3SubTypes: [
            {
                name: 'Standard',
                nameKo: '표준형',
                description: '항상 표시되는 고정 드로어. 데스크탑에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="60" height="110" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="18" y="16" width="44" height="10" rx="3" fill="#374151"/><rect x="18" y="34" width="44" height="8" rx="3" fill="#e5e7eb"/><rect x="18" y="48" width="44" height="8" rx="3" fill="#e5e7eb"/><rect x="18" y="62" width="44" height="8" rx="3" fill="#e5e7eb"/><rect x="78" y="5" width="112" height="110" rx="4" fill="#e5e7eb" opacity="0.2"/></svg>`,
                gameContext: 'PC 게임 좌측 고정 메뉴, 관리자 패널'
            },
            {
                name: 'Modal',
                nameKo: '모달형',
                description: '오버레이와 함께 열리는 드로어. 모바일에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="180" height="110" rx="4" fill="#374151" opacity="0.3"/><rect x="10" y="5" width="70" height="110" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="18" y="16" width="50" height="10" rx="3" fill="#374151"/><rect x="18" y="34" width="50" height="8" rx="3" fill="#e5e7eb"/><rect x="18" y="48" width="50" height="8" rx="3" fill="#e5e7eb"/><rect x="18" y="62" width="50" height="8" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '모바일 게임 햄버거 메뉴, 설정 드로어'
            }
        ],
        variants: [
            { name: '표준형', description: '항상 표시되는 고정 드로어' },
            { name: '모달형', description: '오버레이와 함께 열리는 드로어' }
        ],
        gameApplication: 'PC 게임의 좌측 고정 메뉴(캐릭터/장비/스킬/퀘스트 등), 모바일 게임의 햄버거 메뉴에서 설정/프로필/도움말 등 보조 메뉴에 사용합니다.',
        guidelines: ['최대 2 depth까지만 계층화', '현재 위치를 시각적으로 강조', '모달은 바깥 클릭으로 닫기 지원', '스와이프 제스처로 열기/닫기 지원 (모바일)'],
        relatedLaws: ['hicks-law', 'recognition-recall', 'law-proximity']
    },

    'nav-rail': {
        id: 'nav-rail', name: '내비게이션 레일', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="6" height="20" rx="2"/><circle cx="5" cy="7" r="1.5" fill="currentColor"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="5" cy="17" r="1.5" fill="currentColor"/></svg>`,
        summary: '좌측에 고정된 좁은 아이콘 내비게이션.',
        description: '내비게이션 레일은 태블릿/데스크탑에서 좌측에 고정되는 좁은 수직 내비게이션입니다. 내비게이션 바의 수직 변형으로, 3~7개 아이콘을 수직 배치하여 화면 공간을 효율적으로 사용합니다.',
        m3SubTypes: [
            {
                name: 'Standard',
                nameKo: '표준형',
                description: '아이콘 + 라벨이 수직 배치된 기본 레일.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="48" height="110" rx="0" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="22" y="15" width="24" height="24" rx="12" fill="#374151"/><text x="34" y="50" text-anchor="middle" fill="#374151" font-size="6" font-weight="bold">홈</text><circle cx="34" cy="65" r="10" fill="#e5e7eb"/><text x="34" y="86" text-anchor="middle" fill="#9ca3af" font-size="6">상점</text><circle cx="34" cy="98" r="10" fill="#e5e7eb"/><rect x="66" y="5" width="124" height="110" rx="4" fill="#e5e7eb" opacity="0.2"/></svg>`,
                gameContext: 'PC/태블릿 게임 좌측 메뉴 레일'
            }
        ],
        variants: [
            { name: '표준형', description: '아이콘 + 라벨 수직 배치 레일' }
        ],
        gameApplication: 'PC/태블릿 게임에서 좌측에 고정된 메인 메뉴(홈/캐릭터/장비/상점/설정)로 사용합니다. 드로어보다 콤팩트하면서 바텀바보다 많은 항목을 표시할 수 있습니다.',
        guidelines: ['3~7개 항목이 적절', 'FAB를 상단에 배치 가능', '선택된 항목에 인디케이터 표시', '스크롤 가능한 경우 overflow 처리'],
        relatedLaws: ['fitts-law', 'hicks-law', 'recognition-recall']
    },

    'fab-menu': {
        id: 'fab-menu', name: 'FAB 메뉴', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
        summary: 'FAB를 누르면 펼쳐지는 액션 메뉴.',
        description: 'FAB 메뉴는 플로팅 액션 버튼을 클릭하면 관련 액션들이 부채꼴 또는 수직으로 펼쳐지는 메뉴입니다. 게임에서는 빠른 액션 선택(스킬, 아이템, 이모지 등)에 사용됩니다.',
        m3SubTypes: [
            {
                name: 'FAB Menu',
                nameKo: 'FAB 메뉴',
                description: 'FAB를 누르면 위로 액션 목록이 펼쳐지는 메뉴.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="20" fill="#374151"/><line x1="143" y1="100" x2="157" y2="100" stroke="white" stroke-width="2.5"/><line x1="150" y1="93" x2="150" y2="107" stroke="white" stroke-width="2.5"/><rect x="118" y="14" width="64" height="24" rx="12" fill="#e5e7eb"/><text x="150" y="30" text-anchor="middle" fill="#374151" font-size="8">액션 1</text><rect x="118" y="44" width="64" height="24" rx="12" fill="#e5e7eb"/><text x="150" y="60" text-anchor="middle" fill="#374151" font-size="8">액션 2</text></svg>`,
                gameContext: '퀵 스킬 선택, 이모지 메뉴, 빠른 아이템 사용'
            }
        ],
        variants: [
            { name: 'FAB 메뉴', description: 'FAB 클릭 시 액션 목록 펼침' }
        ],
        gameApplication: '모바일 게임에서 메인 FAB를 누르면 스킬/아이템/이모지 등의 퀵 액션이 펼쳐지는 패턴입니다. PC 게임에서는 미니맵 위 옵션 메뉴에 활용됩니다.',
        guidelines: ['3~6개 액션이 적절', '가장 자주 쓰는 액션을 FAB 가까이 배치', '펼침/접힘 애니메이션 제공', 'ESC 또는 바깥 클릭으로 닫기'],
        relatedLaws: ['fitts-law', 'hicks-law', 'feedback-principle']
    },

    toolbars: {
        id: 'toolbars', name: '툴바', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="6" rx="2"/><rect x="4" y="6" width="3" height="2" rx="0.5"/><rect x="9" y="6" width="3" height="2" rx="0.5"/><rect x="14" y="6" width="3" height="2" rx="0.5"/></svg>`,
        summary: '도구나 액션을 수평으로 배열하는 바.',
        description: '툴바는 관련 도구나 액션 버튼을 수평으로 배열한 컨테이너입니다. 게임에서는 에디터 도구, 포맷팅 옵션, 빠른 액션 모음 등에 사용됩니다. M3에서는 Compressed, Standard, Expanded 3가지 밀도를 제공합니다.',
        m3SubTypes: [
            {
                name: 'Compressed',
                nameKo: '압축형',
                description: '최소 높이의 밀집된 툴바. 공간이 제한된 환경에 적합.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="48" width="180" height="24" rx="4" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="18" y="53" width="14" height="14" rx="3" fill="#e5e7eb"/><rect x="38" y="53" width="14" height="14" rx="3" fill="#e5e7eb"/><rect x="58" y="53" width="14" height="14" rx="3" fill="#e5e7eb"/><line x1="80" y1="52" x2="80" y2="66" stroke="#e5e7eb" stroke-width="1"/><rect x="88" y="53" width="14" height="14" rx="3" fill="#e5e7eb"/></svg>`,
                gameContext: '채팅 텍스트 포맷 바, 미니 에디터 도구'
            },
            {
                name: 'Standard',
                nameKo: '표준형',
                description: '기본 높이의 표준 툴바. 일반적인 도구 배치에 사용.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="40" width="180" height="40" rx="4" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="20" y="50" width="20" height="20" rx="4" fill="#e5e7eb"/><rect x="48" y="50" width="20" height="20" rx="4" fill="#e5e7eb"/><rect x="76" y="50" width="20" height="20" rx="4" fill="#e5e7eb"/><line x1="106" y1="46" x2="106" y2="74" stroke="#e5e7eb" stroke-width="1"/><rect x="116" y="50" width="20" height="20" rx="4" fill="#374151"/><rect x="144" y="50" width="20" height="20" rx="4" fill="#e5e7eb"/></svg>`,
                gameContext: '게임 에디터 도구 바, 인벤토리 관리 도구'
            },
            {
                name: 'Expanded',
                nameKo: '확장형',
                description: '넉넉한 높이로 라벨이 포함된 툴바.',
                svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="25" width="180" height="70" rx="4" fill="#f9fafb" stroke="#374151" stroke-width="1.5"/><rect x="22" y="38" width="24" height="24" rx="6" fill="#e5e7eb"/><text x="34" y="78" text-anchor="middle" fill="#6b7280" font-size="7">도구1</text><rect x="58" y="38" width="24" height="24" rx="6" fill="#e5e7eb"/><text x="70" y="78" text-anchor="middle" fill="#6b7280" font-size="7">도구2</text><rect x="94" y="38" width="24" height="24" rx="6" fill="#374151"/><text x="106" y="78" text-anchor="middle" fill="#374151" font-size="7" font-weight="bold">도구3</text><rect x="130" y="38" width="24" height="24" rx="6" fill="#e5e7eb"/><text x="142" y="78" text-anchor="middle" fill="#6b7280" font-size="7">도구4</text></svg>`,
                gameContext: '맵 에디터, 캐릭터 커스터마이징 도구 모음'
            }
        ],
        variants: [
            { name: '압축형', description: '최소 높이 밀집 배치' },
            { name: '표준형', description: '기본 높이 도구 배치' },
            { name: '확장형', description: '라벨 포함 넉넉한 배치' }
        ],
        gameApplication: '맵 에디터에서 지형/오브젝트/NPC 배치 도구, 캐릭터 외형 커스터마이징 도구, 채팅 텍스트 포맷팅(굵게/기울임/색상) 바에 사용합니다.',
        guidelines: ['자주 쓰는 도구를 왼쪽에 배치', '관련 도구끼리 구분선으로 그룹화', '현재 선택된 도구를 명확히 표시', '오버플로우 시 더보기(···) 메뉴 제공'],
        relatedLaws: ['hicks-law', 'fitts-law', 'law-proximity']
    }
};

/*
 * UX_LAWS — UX 법칙 데이터 (Array, 20개 항목)
 *
 * 게임 UI/UX에 적용되는 주요 UX 법칙/원칙을 정의합니다.
 * URL 해시 라우팅에서 #/ux-laws/{id} 형태로 사용됩니다.
 * COMPONENTS의 relatedLaws 배열에서 이 id를 참조하여 컴포넌트-법칙 간 연결을 만듭니다.
 *
 * 각 항목의 필드:
 *   id            — 고유 식별자 (URL 라우팅 키, relatedLaws 참조 키)
 *   name          — 한국어 법칙명
 *   nameEn        — 영문 법칙명 (원문 표기)
 *   principle     — 한 문장으로 된 핵심 원칙
 *   description   — 법칙에 대한 상세 설명
 *   gameApplication — 게임 UI/UX에서의 구체적 적용 방법
 *   category      — 법칙 분류 ('행동', '인지', '경험', '시각' 중 하나)
 *   visual        — 법칙을 시각적으로 표현하는 SVG 일러스트
 */
const UX_LAWS = [
    /* ── 첫 번째 법칙: 피츠의 법칙. 각 필드 역할을 인라인 주석으로 설명합니다. ── */
    {
        id: 'fitts-law',              // 고유 식별자 — URL 라우팅 및 relatedLaws 참조 키
        name: '피츠의 법칙',           // 한국어 법칙명 — 카드/목록에 표시
        nameEn: "Fitts's Law",        // 영문 원문 명칭 — 상세 페이지에서 부제로 표시
        principle: '대상까지의 이동 시간은 대상의 크기와 거리에 따라 결정됩니다.',  // 핵심 원칙 한 줄 요약 — 카드에 표시
        description: '타겟의 크기가 클수록, 그리고 가까울수록 빠르게 선택할 수 있습니다. 이는 게임 UI에서 중요한 버튼의 크기와 위치를 결정하는 핵심 원칙입니다.',  // 상세 설명
        gameApplication: '중요한 액션 버튼(공격, 스킬)은 크게 만들고 접근하기 쉬운 위치에 배치하세요. FPS의 조준점은 항상 화면 중앙에 있어 이동 거리가 0입니다. 모바일 게임에서는 엄지가 닿는 영역에 핵심 버튼을 배치합니다.',  // 게임 적용 가이드
        category: '행동',             // 법칙 분류 카테고리 — '행동'|'인지'|'경험'|'시각'
        visual: `<svg viewBox="0 0 200 120" fill="none"><circle cx="30" cy="60" r="8" fill="var(--accent)" opacity="0.3"/><circle cx="160" cy="60" r="28" fill="var(--accent)" opacity="0.6"/><line x1="38" y1="60" x2="132" y2="60" stroke="var(--accent)" stroke-width="1" stroke-dasharray="4"/><text x="85" y="50" fill="var(--text-tertiary)" font-size="8" text-anchor="middle">거리</text><text x="30" y="85" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">작은 타겟</text><text x="160" y="100" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">큰 타겟 = 빠름</text></svg>`  // 법칙을 시각적으로 표현하는 SVG 일러스트
    },
    /* ── 이하 나머지 19개 법칙도 동일한 구조 ── */
    {
        id: 'hicks-law',
        name: '힉의 법칙',
        nameEn: "Hick's Law",
        principle: '선택지가 많을수록 결정하는 데 시간이 오래 걸립니다.',
        description: '선택지의 수가 증가하면 결정 시간이 로그 함수적으로 증가합니다. 게임에서 너무 많은 옵션을 동시에 제시하면 플레이어의 의사결정이 느려집니다.',
        gameApplication: '스킬바에 한 번에 표시하는 스킬 수를 제한하세요. RPG의 복잡한 스킬 트리는 카테고리별로 분류하고, FPS의 무기 선택은 1-9 번호 키에 매핑하여 빠른 선택을 돕습니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="20" y="30" width="30" height="60" rx="4" fill="var(--accent)" opacity="0.6"/><rect x="60" y="20" width="30" height="80" rx="4" fill="var(--accent)" opacity="0.4"/><rect x="100" y="15" width="30" height="90" rx="4" fill="var(--accent)" opacity="0.3"/><rect x="140" y="10" width="30" height="100" rx="4" fill="var(--accent)" opacity="0.2"/><text x="35" y="110" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">2개</text><text x="75" y="110" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">4개</text><text x="115" y="110" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">8개</text><text x="155" y="110" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">16개</text></svg>`
    },
    {
        id: 'jakobs-law',
        name: '야콥의 법칙',
        nameEn: "Jakob's Law",
        principle: '사용자는 다른 사이트에서의 경험을 바탕으로 당신의 사이트가 동일하게 작동하기를 기대합니다.',
        description: '사용자는 기존에 익숙한 패턴을 기대합니다. 게임에서도 플레이어는 같은 장르의 다른 게임에서 학습한 UI 패턴을 기대합니다.',
        gameApplication: 'RPG 인벤토리는 그리드 기반이 표준이고, FPS의 조준점은 화면 중앙이 기본입니다. WASD 이동, ESC=메뉴 등 장르별 관행을 존중하세요. 혁신보다는 익숙함이 학습 비용을 줄입니다.',
        category: '경험',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="20" y="20" width="70" height="80" rx="6" stroke="var(--accent)" stroke-width="1.5" opacity="0.5"/><rect x="110" y="20" width="70" height="80" rx="6" stroke="var(--accent)" stroke-width="1.5" opacity="0.5"/><rect x="30" y="30" width="50" height="10" rx="2" fill="var(--accent)" opacity="0.3"/><rect x="120" y="30" width="50" height="10" rx="2" fill="var(--accent)" opacity="0.3"/><rect x="30" y="50" width="50" height="40" rx="2" fill="var(--accent)" opacity="0.15"/><rect x="120" y="50" width="50" height="40" rx="2" fill="var(--accent)" opacity="0.15"/><text x="100" y="65" fill="var(--accent)" font-size="16" text-anchor="middle">≈</text></svg>`
    },
    {
        id: 'miller-law',
        name: '밀러의 법칙',
        nameEn: "Miller's Law",
        principle: '보통 사람은 작업 기억에 약 7(±2)개의 항목을 유지할 수 있습니다.',
        description: '인간의 작업 기억(단기 기억) 용량은 제한적입니다. 한 번에 7개 이상의 정보 덩어리를 처리하기 어렵습니다.',
        gameApplication: '한 화면에 표시하는 퀘스트 목표, 미니맵 아이콘, HUD 요소를 7개 이내로 제한하세요. RPG 스탯 표시는 핵심 능력치 위주로, 상세한 수치는 별도 화면에서 확인하게 합니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><g transform="translate(30, 30)"><circle cx="10" cy="10" r="8" fill="var(--accent)" opacity="0.7"/><circle cx="30" cy="10" r="8" fill="var(--accent)" opacity="0.7"/><circle cx="50" cy="10" r="8" fill="var(--accent)" opacity="0.7"/><circle cx="70" cy="10" r="8" fill="var(--accent)" opacity="0.7"/><circle cx="90" cy="10" r="8" fill="var(--accent)" opacity="0.7"/><circle cx="110" cy="10" r="8" fill="var(--accent)" opacity="0.7"/><circle cx="130" cy="10" r="8" fill="var(--accent)" opacity="0.7"/><circle cx="30" cy="50" r="8" fill="var(--accent)" opacity="0.2"/><circle cx="50" cy="50" r="8" fill="var(--accent)" opacity="0.2"/><circle cx="110" cy="50" r="8" fill="var(--accent)" opacity="0.2"/><text x="70" y="75" fill="var(--text-tertiary)" font-size="9" text-anchor="middle">7 ± 2</text></g></svg>`
    },
    {
        id: 'aesthetic-usability',
        name: '심미적 사용성 효과',
        nameEn: 'Aesthetic-Usability Effect',
        principle: '시각적으로 아름다운 디자인은 사용하기 더 쉽다고 인식됩니다.',
        description: '아름다운 인터페이스는 사용자가 사소한 사용성 문제를 더 잘 용서하게 만듭니다. 첫인상이 전체적인 사용 경험에 영향을 미칩니다.',
        gameApplication: '게임 UI의 비주얼 퀄리티는 게임의 전체적인 품질 인식에 직접 영향을 줍니다. 잘 디자인된 인벤토리 UI는 같은 기능이라도 더 직관적으로 느껴집니다. 로딩 화면의 아트워크 하나가 기다림에 대한 인내심을 높입니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="20" y="20" width="70" height="80" rx="2" stroke="#555" stroke-width="1"/><text x="55" y="55" fill="#555" font-size="8" text-anchor="middle">Plain</text><text x="55" y="68" fill="#555" font-size="6" text-anchor="middle">😐</text><rect x="110" y="20" width="70" height="80" rx="12" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent-subtle)"/><text x="145" y="55" fill="var(--accent)" font-size="8" text-anchor="middle">Beautiful</text><text x="145" y="68" fill="var(--accent)" font-size="6" text-anchor="middle">😊</text></svg>`
    },
    {
        id: 'doherty-threshold',
        name: '도허티 임계값',
        nameEn: 'Doherty Threshold',
        principle: '응답 시간이 400ms 이하일 때 사용자의 몰입도와 생산성이 극대화됩니다.',
        description: '시스템 응답이 400밀리초 이내에 이루어지면 사용자는 대기하고 있다고 느끼지 않습니다. 이 임계값을 넘으면 집중력이 떨어지기 시작합니다.',
        gameApplication: '게임에서는 이보다 훨씬 빠른 응답이 필요합니다. 버튼 클릭의 시각적 피드백은 즉각적(50ms 이내)이어야 하고, UI 전환 애니메이션은 200-300ms가 적당합니다. 스킬 사용 시 이펙트가 즉시 나타나야 반응성이 좋다고 느낍니다.',
        category: '행동',
        visual: `<svg viewBox="0 0 200 120" fill="none"><line x1="30" y1="90" x2="180" y2="90" stroke="var(--text-tertiary)" stroke-width="0.5"/><line x1="30" y1="90" x2="30" y2="20" stroke="var(--text-tertiary)" stroke-width="0.5"/><path d="M30,85 Q60,82 80,60 Q100,35 130,28 Q160,22 180,20" stroke="var(--accent)" stroke-width="2" fill="none"/><line x1="80" y1="20" x2="80" y2="90" stroke="var(--warning)" stroke-width="1" stroke-dasharray="4"/><text x="80" y="100" fill="var(--warning)" font-size="7" text-anchor="middle">400ms</text><text x="15" y="55" fill="var(--text-tertiary)" font-size="6" text-anchor="middle" transform="rotate(-90,15,55)">몰입도</text></svg>`
    },
    {
        id: 'von-restorff',
        name: '폰 레스토프 효과',
        nameEn: 'Von Restorff Effect',
        principle: '유사한 항목들 사이에서 눈에 띄는 항목이 더 잘 기억됩니다.',
        description: '격리 효과(isolation effect)라고도 합니다. 시각적으로 독특한 요소가 주의를 끌고 기억에 남습니다.',
        gameApplication: '레어 아이템에 특별한 글로우 효과를 주세요. 새로운 퀘스트나 알림에 시각적 강조를 하세요. 중요한 UI 요소를 색상, 크기, 애니메이션으로 차별화하면 플레이어가 핵심 정보를 놓치지 않습니다.',
        category: '기억',
        visual: `<svg viewBox="0 0 200 120" fill="none"><circle cx="30" cy="60" r="15" fill="var(--text-tertiary)" opacity="0.2"/><circle cx="65" cy="60" r="15" fill="var(--text-tertiary)" opacity="0.2"/><circle cx="100" cy="60" r="15" fill="var(--accent)" opacity="0.8"/><circle cx="100" cy="60" r="18" stroke="var(--accent)" stroke-width="1" opacity="0.4"/><circle cx="135" cy="60" r="15" fill="var(--text-tertiary)" opacity="0.2"/><circle cx="170" cy="60" r="15" fill="var(--text-tertiary)" opacity="0.2"/></svg>`
    },
    {
        id: 'law-proximity',
        name: '근접성의 법칙',
        nameEn: 'Law of Proximity',
        principle: '서로 가까이 있는 요소들은 관련이 있다고 인식됩니다.',
        description: '게슈탈트 원리 중 하나로, 공간적으로 가까운 요소들은 하나의 그룹으로 인식됩니다.',
        gameApplication: 'HP 바와 플레이어 이름은 가까이 배치하세요. 인벤토리에서 같은 카테고리의 아이템은 함께 그룹핑하세요. 스킬바의 관련 스킬을 인접 슬롯에 배치하면 플레이어가 자연스럽게 연관성을 파악합니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="20" y="30" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="36" y="30" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="52" y="30" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="100" y="30" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="116" y="30" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="20" y="70" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="36" y="70" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="80" y="70" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="96" y="70" width="12" height="12" fill="var(--accent)" opacity="0.6"/><rect x="112" y="70" width="12" height="12" fill="var(--accent)" opacity="0.6"/></svg>`
    },
    {
        id: 'peak-end-rule',
        name: '피크-엔드 규칙',
        nameEn: 'Peak-End Rule',
        principle: '사람들은 경험의 전체가 아닌, 가장 강렬한 순간(피크)과 마지막 순간(엔드)으로 경험을 판단합니다.',
        description: '경험의 평균이 아닌 감정적 피크와 마지막 인상이 전체 경험에 대한 기억을 결정합니다.',
        gameApplication: '보스 전투(피크)와 엔딩 크레딧(엔드)의 UI 연출에 특히 공을 들이세요. 레벨업, 레어 아이템 획득 시 화려한 UI 이펙트를 제공하세요. 게임 종료 시 플레이 요약 화면을 멋지게 만들면 전체 경험에 대한 만족도가 올라갑니다.',
        category: '기억',
        visual: `<svg viewBox="0 0 200 120" fill="none"><path d="M20,90 L50,80 L80,70 L100,25 L120,65 L150,75 L180,40" stroke="var(--accent)" stroke-width="2" fill="none"/><circle cx="100" cy="25" r="5" fill="var(--warning)"/><circle cx="180" cy="40" r="5" fill="var(--warning)"/><text x="100" y="16" fill="var(--warning)" font-size="7" text-anchor="middle">피크</text><text x="180" y="32" fill="var(--warning)" font-size="7" text-anchor="middle">엔드</text><line x1="20" y1="95" x2="180" y2="95" stroke="var(--text-tertiary)" stroke-width="0.5"/><text x="100" y="108" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">시간 →</text></svg>`
    },
    {
        id: 'teslers-law',
        name: '테슬러의 법칙',
        nameEn: "Tesler's Law",
        principle: '모든 시스템에는 줄일 수 없는 고유한 복잡성이 존재합니다.',
        description: '복잡성 보존의 법칙이라고도 합니다. 복잡성은 사라지지 않고 시스템이나 사용자에게 전가될 뿐입니다. 좋은 디자인은 복잡성을 시스템이 흡수합니다.',
        gameApplication: 'RPG의 스탯 시스템은 본질적으로 복잡합니다. 이 복잡성을 자동 장비 추천, 스탯 비교 UI, 도구 팁 등으로 시스템이 흡수하세요. 플레이어가 복잡한 계산을 직접 하지 않아도 되게 만드는 것이 핵심입니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="20" y="25" width="70" height="70" rx="6" stroke="var(--text-tertiary)" stroke-width="1"/><rect x="25" y="30" width="60" height="30" fill="var(--accent)" opacity="0.15" rx="3"/><text x="55" y="48" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">User</text><rect x="25" y="65" width="60" height="25" fill="var(--accent)" opacity="0.4" rx="3"/><text x="55" y="81" fill="var(--accent)" font-size="7" text-anchor="middle">System</text><text x="100" y="65" fill="var(--text-tertiary)" font-size="14" text-anchor="middle">→</text><rect x="110" y="25" width="70" height="70" rx="6" stroke="var(--accent)" stroke-width="1"/><rect x="115" y="30" width="60" height="15" fill="var(--accent)" opacity="0.15" rx="3"/><text x="145" y="41" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">User</text><rect x="115" y="50" width="60" height="40" fill="var(--accent)" opacity="0.5" rx="3"/><text x="145" y="74" fill="var(--accent)" font-size="7" text-anchor="middle">System</text></svg>`
    },
    {
        id: 'serial-position',
        name: '계열 위치 효과',
        nameEn: 'Serial Position Effect',
        principle: '사람들은 목록의 처음(초두 효과)과 마지막(최신 효과) 항목을 가장 잘 기억합니다.',
        description: '여러 항목이 나열될 때 첫 번째와 마지막 항목이 중간 항목보다 기억에 잘 남습니다. 이는 내비게이션 메뉴, 스킬바, 상점 목록 등의 배치에 중요합니다.',
        gameApplication: '내비게이션 메뉴에서 가장 중요한 항목을 처음과 끝에 배치하세요. 스킬바의 첫 번째와 마지막 슬롯에 핵심 스킬을 놓으면 플레이어가 빠르게 접근합니다. 상점의 추천 아이템은 목록 상단이나 하단에 배치합니다.',
        category: '기억',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="15" y="80" width="20" height="30" rx="2" fill="var(--accent)" opacity="0.8"/><rect x="40" y="90" width="20" height="20" rx="2" fill="var(--accent)" opacity="0.3"/><rect x="65" y="95" width="20" height="15" rx="2" fill="var(--accent)" opacity="0.2"/><rect x="90" y="95" width="20" height="15" rx="2" fill="var(--accent)" opacity="0.15"/><rect x="115" y="95" width="20" height="15" rx="2" fill="var(--accent)" opacity="0.2"/><rect x="140" y="90" width="20" height="20" rx="2" fill="var(--accent)" opacity="0.3"/><rect x="165" y="80" width="20" height="30" rx="2" fill="var(--accent)" opacity="0.8"/><text x="25" y="75" fill="var(--accent)" font-size="6" text-anchor="middle">초두</text><text x="175" y="75" fill="var(--accent)" font-size="6" text-anchor="middle">최신</text><text x="100" y="65" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">기억 정도</text></svg>`
    },
    {
        id: 'zeigarnik-effect',
        name: '자이가르닉 효과',
        nameEn: 'Zeigarnik Effect',
        principle: '완료되지 않은 작업이 완료된 작업보다 더 잘 기억됩니다.',
        description: '미완료 과제는 마음속에 긴장 상태를 만들어 계속 떠오르게 합니다. 이를 활용하면 사용자의 참여를 유도할 수 있습니다.',
        gameApplication: '퀘스트 진행률 바를 항상 표시하여 완료 욕구를 자극하세요. 업적 시스템에서 "거의 달성" 상태를 강조하면 플레이어가 계속 플레이하게 됩니다. 데일리 미션 3/5 같은 표시는 나머지 2개를 채우고 싶은 욕구를 만듭니다.',
        category: '기억',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="20" y="30" width="160" height="16" rx="8" fill="var(--accent)" opacity="0.15"/><rect x="20" y="30" width="120" height="16" rx="8" fill="var(--accent)" opacity="0.5"/><text x="100" y="42" fill="#fff" font-size="7" text-anchor="middle">75%</text><text x="100" y="62" fill="var(--accent)" font-size="8" text-anchor="middle">거의 다 왔어!</text><text x="100" y="80" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">완료하고 싶은 욕구 ↑</text><circle cx="60" cy="95" r="5" fill="var(--accent)" opacity="0.6"/><circle cx="80" cy="95" r="5" fill="var(--accent)" opacity="0.6"/><circle cx="100" cy="95" r="5" fill="var(--accent)" opacity="0.6"/><circle cx="120" cy="95" r="5" fill="var(--accent)" opacity="0.15"/></svg>`
    },
    {
        id: 'progressive-disclosure',
        name: '점진적 노출',
        nameEn: 'Progressive Disclosure',
        principle: '필요한 정보만 적시에 제공하여 인지 과부하를 방지합니다.',
        description: '고급 기능이나 상세 정보를 처음부터 모두 보여주지 않고, 사용자가 필요로 할 때 단계적으로 드러냅니다. 복잡한 시스템을 관리 가능한 단계로 나눕니다.',
        gameApplication: '튜토리얼에서 모든 시스템을 한꺼번에 설명하지 마세요. RPG에서 Lv.1에는 기본 공격만, Lv.10에서 스킬 시스템, Lv.20에서 제작 시스템을 해금하세요. 상세 스탯은 "더보기" 버튼 뒤에 숨기고, 초보자에게는 단순화된 뷰를 보여주세요.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="15" y="20" width="50" height="80" rx="4" stroke="var(--accent)" stroke-width="1"/><rect x="20" y="28" width="40" height="8" rx="2" fill="var(--accent)" opacity="0.5"/><rect x="20" y="42" width="40" height="8" rx="2" fill="var(--accent)" opacity="0.3"/><text x="40" y="72" fill="var(--text-tertiary)" font-size="6" text-anchor="middle">Lv.1</text><text x="100" y="60" fill="var(--text-tertiary)" font-size="12" text-anchor="middle">→</text><rect x="130" y="20" width="55" height="80" rx="4" stroke="var(--accent)" stroke-width="1.5"/><rect x="135" y="28" width="45" height="8" rx="2" fill="var(--accent)" opacity="0.5"/><rect x="135" y="42" width="45" height="8" rx="2" fill="var(--accent)" opacity="0.5"/><rect x="135" y="56" width="45" height="8" rx="2" fill="var(--accent)" opacity="0.5"/><rect x="135" y="70" width="45" height="8" rx="2" fill="var(--accent)" opacity="0.4"/><rect x="135" y="84" width="45" height="8" rx="2" fill="var(--accent)" opacity="0.3"/><text x="157" y="110" fill="var(--text-tertiary)" font-size="6" text-anchor="middle">Lv.50</text></svg>`
    },
    {
        id: 'feedback-principle',
        name: '피드백 원칙',
        nameEn: 'Feedback Principle',
        principle: '모든 사용자 행동에는 즉각적이고 명확한 피드백이 제공되어야 합니다.',
        description: '사용자가 행동을 취했을 때 시스템이 그 행동을 인식했음을 알려야 합니다. 피드백이 없으면 사용자는 행동이 성공했는지 알 수 없어 불안해합니다.',
        gameApplication: '버튼 클릭 시 시각/청각 피드백(클릭음, 색상 변화)을 즉시 제공하세요. 스킬 사용 시 이펙트, 사운드, 화면 흔들림으로 임팩트를 전달하세요. 아이템 획득 시 팝업, 인벤토리 하이라이트, 효과음의 삼중 피드백이 효과적입니다.',
        category: '행동',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="30" y="40" width="50" height="30" rx="6" fill="var(--accent)" opacity="0.5"/><text x="55" y="59" fill="#fff" font-size="8" text-anchor="middle">Click</text><text x="95" y="59" fill="var(--text-tertiary)" font-size="12" text-anchor="middle">→</text><rect x="110" y="35" width="60" height="40" rx="8" fill="var(--accent)" opacity="0.7" stroke="var(--accent)" stroke-width="2"/><text x="140" y="58" fill="#fff" font-size="7" text-anchor="middle">효과!</text><circle cx="140" cy="55" r="25" stroke="var(--accent)" stroke-width="1" opacity="0.3" fill="none"/><circle cx="140" cy="55" r="30" stroke="var(--accent)" stroke-width="0.5" opacity="0.15" fill="none"/><text x="100" y="100" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">시각 + 청각 + 촉각</text></svg>`
    },
    {
        id: 'law-similarity',
        name: '유사성의 법칙',
        nameEn: 'Law of Similarity',
        principle: '비슷하게 보이는 요소들은 같은 기능이나 그룹에 속한다고 인식됩니다.',
        description: '게슈탈트 원리 중 하나로, 색상, 형태, 크기가 유사한 요소들은 관련이 있다고 인식됩니다. 이를 활용하면 시각적 그룹핑을 통해 정보를 효과적으로 전달할 수 있습니다.',
        gameApplication: '같은 등급의 아이템에 동일한 색상 코드를 사용하세요(일반=회색, 레어=파랑, 에픽=보라). 비슷한 기능의 버튼은 같은 스타일로 통일하세요. 적과 아군은 확실히 다른 색상(적=빨강, 아군=파랑)으로 구분하면 전투 중 즉각적인 판별이 가능합니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><circle cx="30" cy="40" r="12" fill="var(--accent)" opacity="0.6"/><circle cx="60" cy="40" r="12" fill="var(--accent)" opacity="0.6"/><circle cx="90" cy="40" r="12" fill="var(--accent)" opacity="0.6"/><rect x="125" y="28" width="24" height="24" rx="4" fill="var(--warning)" opacity="0.6"/><rect x="155" y="28" width="24" height="24" rx="4" fill="var(--warning)" opacity="0.6"/><text x="60" y="80" fill="var(--accent)" font-size="7" text-anchor="middle">그룹 A</text><text x="155" y="80" fill="var(--warning)" font-size="7" text-anchor="middle">그룹 B</text><text x="100" y="105" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">같은 모양 = 같은 그룹</text></svg>`
    },
    {
        id: 'law-pragnanz',
        name: '프래그난츠의 법칙',
        nameEn: 'Law of Prägnanz',
        principle: '사람들은 복잡한 형태를 가능한 가장 단순한 형태로 인식합니다.',
        description: '좋은 형태의 법칙이라고도 합니다. 인간의 뇌는 모호한 시각 정보를 가장 단순하고 안정적인 형태로 해석하려 합니다. UI 디자인에서는 불필요한 복잡성을 제거해야 합니다.',
        gameApplication: '미니맵의 지형은 단순화된 색 블록으로 표현하세요. HUD 요소는 기본 도형(원, 사각형, 바)을 활용하여 즉시 인식 가능하게 만드세요. 아이콘은 디테일보다 실루엣의 명확성이 중요합니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><path d="M30,80 Q30,30 80,30 Q100,30 100,50 Q100,30 120,30 Q170,30 170,80" stroke="var(--text-tertiary)" stroke-width="1" fill="none" stroke-dasharray="3"/><circle cx="50" cy="55" r="20" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" opacity="0.1"/><rect x="85" y="35" width="35" height="35" rx="2" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" opacity="0.1"/><polygon points="155,35 175,70 135,70" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" opacity="0.1"/><text x="100" y="100" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">복잡한 형태 → 단순한 기본 도형</text></svg>`
    },
    {
        id: 'goal-gradient',
        name: '목표 기울기 효과',
        nameEn: 'Goal Gradient Effect',
        principle: '목표에 가까워질수록 동기부여가 강해지고 행동이 빨라집니다.',
        description: '사람들은 목표 달성에 가까워질수록 더 많은 노력을 기울입니다. 진행 상황을 시각적으로 보여주면 이 효과가 더 강해집니다.',
        gameApplication: '경험치 바가 레벨업에 가까워지면 시각적 강조(빛남, 색상 변화)를 추가하세요. 업적 진행도가 80% 이상이면 "거의 달성!" 알림을 보여주세요. 배틀패스 보상이 가까워지면 특별 표시로 플레이어의 완료 욕구를 자극합니다.',
        category: '행동',
        visual: `<svg viewBox="0 0 200 120" fill="none"><circle cx="25" cy="60" r="6" fill="var(--accent)" opacity="0.3"/><circle cx="55" cy="60" r="6" fill="var(--accent)" opacity="0.3"/><circle cx="85" cy="60" r="8" fill="var(--accent)" opacity="0.4"/><circle cx="115" cy="60" r="10" fill="var(--accent)" opacity="0.5"/><circle cx="145" cy="60" r="12" fill="var(--accent)" opacity="0.7"/><circle cx="175" cy="60" r="14" fill="var(--accent)" opacity="0.9"/><text x="175" y="64" fill="#fff" font-size="7" text-anchor="middle">🏆</text><path d="M30,85 Q60,83 90,78 Q120,70 150,55 Q170,45 175,40" stroke="var(--accent)" stroke-width="1" fill="none" stroke-dasharray="3"/><text x="100" y="105" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">목표에 가까울수록 속도 ↑</text></svg>`
    },
    {
        id: 'consistency',
        name: '일관성의 원칙',
        nameEn: 'Principle of Consistency',
        principle: '같은 요소는 항상 같은 방식으로 동작해야 사용자의 학습 비용을 줄입니다.',
        description: '내적 일관성(같은 앱 내)과 외적 일관성(다른 앱과의 관행)을 모두 유지해야 합니다. 일관성이 깨지면 사용자는 혼란을 겪고 실수를 합니다.',
        gameApplication: '확인 버튼의 위치와 색상을 모든 다이얼로그에서 동일하게 유지하세요. "빨간색=위험/적, 초록색=안전/아군" 같은 색상 코드를 전체 UI에서 일관되게 사용하세요. 같은 제스처(더블탭, 길게 누르기)가 같은 결과를 만들어야 합니다.',
        category: '경험',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="15" y="20" width="50" height="35" rx="4" stroke="var(--accent)" stroke-width="1"/><rect x="20" y="25" width="40" height="8" rx="2" fill="var(--accent)" opacity="0.4"/><rect x="30" y="40" width="25" height="10" rx="3" fill="var(--accent)" opacity="0.6"/><rect x="75" y="20" width="50" height="35" rx="4" stroke="var(--accent)" stroke-width="1"/><rect x="80" y="25" width="40" height="8" rx="2" fill="var(--accent)" opacity="0.4"/><rect x="90" y="40" width="25" height="10" rx="3" fill="var(--accent)" opacity="0.6"/><rect x="135" y="20" width="50" height="35" rx="4" stroke="var(--accent)" stroke-width="1"/><rect x="140" y="25" width="40" height="8" rx="2" fill="var(--accent)" opacity="0.4"/><rect x="150" y="40" width="25" height="10" rx="3" fill="var(--accent)" opacity="0.6"/><text x="42" y="74" fill="var(--accent)" font-size="6" text-anchor="middle">✓</text><text x="100" y="74" fill="var(--accent)" font-size="6" text-anchor="middle">✓</text><text x="160" y="74" fill="var(--accent)" font-size="6" text-anchor="middle">✓</text><text x="100" y="100" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">같은 패턴 = 예측 가능</text></svg>`
    },
    {
        id: 'recognition-recall',
        name: '재인 vs 회상',
        nameEn: 'Recognition Over Recall',
        principle: '사용자에게 기억에서 정보를 꺼내게 하지 말고, 보여주어 인식하게 하세요.',
        description: '재인(보고 알아보기)은 회상(기억에서 떠올리기)보다 훨씬 쉽습니다. UI에서는 사용자가 정보를 기억하지 않아도 되도록 시각적 단서를 제공해야 합니다.',
        gameApplication: '아이템 아이콘과 이름을 항상 함께 표시하세요. 키 바인딩을 스킬 아이콘 위에 직접 보여주세요(기억하게 하지 말고). 최근 사용한 장비, 최근 방문한 지역을 목록으로 제공하면 플레이어가 기억에 의존하지 않아도 됩니다.',
        category: '인지',
        visual: `<svg viewBox="0 0 200 120" fill="none"><rect x="15" y="25" width="75" height="70" rx="4" stroke="var(--text-tertiary)" stroke-width="1"/><text x="52" y="45" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">회상 (어려움)</text><text x="52" y="65" fill="var(--text-tertiary)" font-size="14" text-anchor="middle">🤔</text><text x="52" y="85" fill="var(--text-tertiary)" font-size="6" text-anchor="middle">"뭐였더라..."</text><rect x="110" y="25" width="75" height="70" rx="4" stroke="var(--accent)" stroke-width="1.5"/><text x="147" y="45" fill="var(--accent)" font-size="7" text-anchor="middle">재인 (쉬움)</text><text x="147" y="65" fill="var(--accent)" font-size="14" text-anchor="middle">👆</text><text x="147" y="85" fill="var(--accent)" font-size="6" text-anchor="middle">"아, 이거!"</text></svg>`
    },
    {
        id: 'postel-law',
        name: '포스텔의 법칙',
        nameEn: "Postel's Law",
        principle: '입력에는 관대하게, 출력에는 엄격하게 처리하세요.',
        description: '견고함의 원칙이라고도 합니다. 시스템은 다양한 형태의 사용자 입력을 허용하되, 출력은 항상 일관되고 명확해야 합니다.',
        gameApplication: '채팅에서 "/gg", "/GG", "gg" 모두 같은 명령으로 인식하세요. 아이템 검색에서 오타를 허용하는 퍼지 매칭을 제공하세요. 설정에서 다양한 입력 장치(키보드, 게임패드, 터치)를 자연스럽게 전환할 수 있게 하고, UI 반응은 항상 일관되게 유지하세요.',
        category: '경험',
        visual: `<svg viewBox="0 0 200 120" fill="none"><text x="40" y="25" fill="var(--text-tertiary)" font-size="6" text-anchor="middle">다양한 입력</text><text x="25" y="45" fill="var(--accent)" font-size="7">"gg"</text><text x="25" y="60" fill="var(--accent)" font-size="7">"GG"</text><text x="25" y="75" fill="var(--accent)" font-size="7">"/gg"</text><rect x="70" y="30" width="60" height="50" rx="6" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1"/><text x="100" y="58" fill="var(--accent)" font-size="7" text-anchor="middle">처리</text><text x="160" y="25" fill="var(--text-tertiary)" font-size="6" text-anchor="middle">일관된 출력</text><rect x="140" y="40" width="40" height="25" rx="4" fill="var(--accent)" opacity="0.5"/><text x="160" y="56" fill="#fff" font-size="7" text-anchor="middle">GG!</text><path d="M55,50 L70,50" stroke="var(--accent)" stroke-width="1"/><path d="M130,55 L140,55" stroke="var(--accent)" stroke-width="1"/></svg>`
    }
];

// ============ 컴포넌트 카테고리 (M3 + Lithium 기반 사이드바 구조) ============
/*
 * COMPONENT_CATEGORIES — 사이드바 카테고리 데이터 (Array, 7개 항목)
 *
 * 좌측 사이드바에서 컴포넌트를 기능별로 그룹화하여 보여주는 데 사용됩니다.
 * app.js의 사이드바 렌더링 함수에서 이 배열을 순회하며 카테고리 헤더와
 * 소속 컴포넌트 목록을 생성합니다.
 *
 * 각 항목의 필드:
 *   id    — 카테고리 고유 식별자 (예: 'game-specific', 'action', 'input')
 *   name  — 사이드바에 표시되는 한국어 카테고리명
 *   icon  — 카테고리 아이콘 SVG
 *   items — 해당 카테고리에 속하는 COMPONENTS의 키(id) 배열
 *
 * 카테고리 구성 (7개):
 *   1. 게임 전용  — hud, inventory, minimap, skillbar, chat, progress
 *   2. 액션      — buttons, toggle, menus
 *   3. 입력      — inputfield, search, checkbox, radio, dropdown, slider
 *   4. 표시      — cards, badges, chips, lists, datatable, carousel, loading
 *   5. 내비게이션 — navigation, appbar, tabs, breadcrumb, pagination, stepper
 *   6. 피드백    — dialogs, tooltips, snackbar, sheets
 *   7. 구조      — accordion, divider
 */
const COMPONENT_CATEGORIES = [
    {
        id: 'game-specific',          // 카테고리 고유 식별자
        name: '게임 전용',             // 사이드바에 표시되는 카테고리명
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"/></svg>`,  // 카테고리 아이콘 SVG
        items: ['hud', 'inventory', 'minimap', 'skillbar', 'chat', 'progress']  // 소속 컴포넌트 ID 배열 — COMPONENTS 객체의 키와 매칭
    },
    {
        id: 'action',
        name: '액션',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>`,
        items: ['buttons', 'icon-buttons', 'fab', 'extended-fab', 'button-groups', 'segmented-buttons', 'toggle', 'menus']
    },
    {
        id: 'input',
        name: '입력',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="3"/><line x1="7" y1="10" x2="7" y2="14"/></svg>`,
        items: ['inputfield', 'search', 'checkbox', 'radio', 'dropdown', 'slider', 'date-pickers']
    },
    {
        id: 'display',
        name: '표시',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>`,
        items: ['cards', 'badges', 'chips', 'lists', 'datatable', 'carousel', 'loading']
    },
    {
        id: 'navigation',
        name: '내비게이션',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z"/></svg>`,
        items: ['navigation', 'appbar', 'nav-bar', 'nav-drawer', 'nav-rail', 'tabs', 'breadcrumb', 'pagination', 'stepper', 'fab-menu']
    },
    {
        id: 'feedback',
        name: '피드백',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
        items: ['dialogs', 'tooltips', 'snackbar', 'sheets']
    },
    {
        id: 'structure',
        name: '구조',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/></svg>`,
        items: ['accordion', 'divider', 'toolbars']
    }
];

// ============ 체크리스트 데이터 (Lithium Design System 기반 게임 UI 적용) ============
/*
 * CHECKLIST_DATA — 게임 UI 디자인 체크리스트 데이터 (Array, 7개 카테고리)
 *
 * 게임 UI/UX 디자인 시 확인해야 할 체크리스트 항목을 카테고리별로 정리합니다.
 * #/checklist 페이지에서 체크박스 UI로 렌더링되며, 진행률을 추적합니다.
 *
 * 각 카테고리 객체의 필드:
 *   category — 카테고리명 (예: '정보구조 (IA)', '레이아웃 (Layout)')
 *   items    — 체크리스트 항목 배열
 *     └─ { check, priority, desc } 형태
 *        check    — 확인 항목 (질문형 문장)
 *        priority — 우선순위 ('필수' 또는 '권고')
 *        desc     — 구체적 설명/예시
 *
 * 7개 카테고리:
 *   1. 정보구조 (IA)         — 5개 항목: 메뉴 깊이, 접근성 등
 *   2. 레이아웃 (Layout)     — 6개 항목: HUD 배치, 해상도 대응 등
 *   3. 인터랙션 (Interaction) — 6개 항목: 피드백, 터치 타겟 등
 *   4. 시각 디자인 (Visual)   — 5개 항목: 테마, 가독성 등
 *   5. 콘텐츠 (Content)      — 4개 항목: 텍스트, 오류 메시지 등
 *   6. 접근성 (Accessibility) — 4개 항목: 스케일, 색각 이상 등
 *   7. 성능 (Performance)    — 3개 항목: fps, 가상화, 아틀라스 등
 */
const CHECKLIST_DATA = [
    {
        category: '정보구조 (IA)',     // 카테고리명 — 체크리스트 섹션 헤더로 표시
        items: [                       // 체크리스트 항목 배열
            { check: '게임 콘텐츠가 논리적 계층 구조로 정리되어 있는가', priority: '필수', desc: '로비→모험→던전→보스 등 단계별 흐름' },  // check: 확인 질문, priority: '필수'|'권고', desc: 구체적 예시
            { check: '내비게이션이 2-3 depth 이내로 유지되는가', priority: '필수', desc: '깊은 메뉴는 플레이어 이탈의 원인' },
            { check: '주요 기능에 3번 이내 터치로 접근 가능한가', priority: '필수', desc: '핵심 액션(전투, 인벤토리)의 접근성' },
            { check: '뒤로가기/홈 버튼이 항상 접근 가능한가', priority: '필수', desc: '어디서든 이전 화면이나 로비로 복귀' },
            { check: '장르 관행에 맞는 용어와 구조를 사용하는가', priority: '권고', desc: 'RPG의 인벤토리, FPS의 로드아웃 등 익숙한 표현' }
        ]
    },
    {
        category: '레이아웃 (Layout)',
        items: [
            { check: '핵심 HUD 요소가 화면 가장자리에 배치되어 있는가', priority: '필수', desc: 'HP/MP, 미니맵, 스킬바 등' },
            { check: '중요 버튼이 엄지 닿는 영역에 있는가 (모바일)', priority: '필수', desc: '피츠의 법칙 — 자주 쓰는 버튼은 가까이' },
            { check: '게임플레이 영역과 UI 영역이 명확히 구분되는가', priority: '필수', desc: '게임 화면을 가리지 않는 UI 배치' },
            { check: '다양한 해상도/비율에서 UI가 정상 표시되는가', priority: '필수', desc: '16:9, 18:9, 21:9 등 대응' },
            { check: '시각적 위계가 명확한가 (크기, 색상, 대비)', priority: '권고', desc: '중요 정보가 한눈에 구별됨' },
            { check: '그리드 시스템에 맞춰 정렬되어 있는가', priority: '권고', desc: '일관된 간격과 정렬' }
        ]
    },
    {
        category: '인터랙션 (Interaction)',
        items: [
            { check: '모든 버튼/인터랙션에 시각적 피드백이 있는가', priority: '필수', desc: '누름, 호버, 비활성 상태 피드백' },
            { check: '로딩 시간에 적절한 표시(스피너, 진행바)가 있는가', priority: '필수', desc: '400ms 이상 걸리면 피드백 필수' },
            { check: '되돌릴 수 없는 액션에 확인 다이얼로그가 있는가', priority: '필수', desc: '아이템 삭제, 강화 등 위험 액션' },
            { check: '드래그 가능한 요소가 시각적으로 표시되는가', priority: '권고', desc: '인벤토리 아이템 드래그, 스킬 배치' },
            { check: '애니메이션 속도가 적절한가 (200-400ms)', priority: '권고', desc: '너무 빠르면 인지 불가, 너무 느리면 답답' },
            { check: '터치 타겟이 최소 44x44px 이상인가', priority: '필수', desc: '피츠의 법칙 기반 최소 크기' }
        ]
    },
    {
        category: '시각 디자인 (Visual)',
        items: [
            { check: '장르 세계관에 맞는 시각적 테마가 적용되어 있는가', priority: '필수', desc: 'RPG→판타지, FPS→밀리터리, 캐주얼→밝은 톤' },
            { check: '아이템 등급별 색상 코드가 일관적인가', priority: '필수', desc: '일반(회), 고급(녹), 희귀(청), 에픽(보), 전설(주황)' },
            { check: '텍스트 가독성이 확보되어 있는가 (명암 대비)', priority: '필수', desc: 'WCAG AA 기준 4.5:1 이상 대비' },
            { check: '아이콘이 직관적이고 일관된 스타일인가', priority: '권고', desc: '크기, 굵기, 스타일 통일' },
            { check: '색상만으로 정보를 전달하지 않는가 (색각 이상 고려)', priority: '권고', desc: '색상+아이콘+텍스트 조합 사용' }
        ]
    },
    {
        category: '콘텐츠 (Content)',
        items: [
            { check: '게임 내 텍스트가 간결하고 명확한가', priority: '필수', desc: '불필요한 설명 최소화, 핵심 정보 우선' },
            { check: '오류 메시지가 해결 방법을 안내하는가', priority: '필수', desc: '"네트워크 오류" 대신 "연결 확인 후 재시도"' },
            { check: '숫자 포맷이 일관적인가 (천 단위 구분 등)', priority: '권고', desc: '1,234,567 또는 1.2M 등 통일' },
            { check: '중요 수치에 변화량(+/-) 표시가 있는가', priority: '권고', desc: '장비 교체 시 스탯 변화량' }
        ]
    },
    {
        category: '접근성 (Accessibility)',
        items: [
            { check: 'UI 스케일 조절 옵션이 있는가', priority: '권고', desc: '텍스트/UI 크기 50~200% 조절' },
            { check: '색각 이상 모드가 제공되는가', priority: '권고', desc: '적록/청황 색각 이상 대응' },
            { check: '자막/캡션 옵션이 있는가', priority: '권고', desc: '대화, 효과음 자막' },
            { check: '키 리바인딩이 가능한가', priority: '권고', desc: '모든 조작을 사용자가 재설정' }
        ]
    },
    {
        category: '성능 (Performance)',
        items: [
            { check: 'UI 애니메이션이 60fps를 유지하는가', priority: '필수', desc: '프레임 드랍 없는 부드러운 UI' },
            { check: '스크롤 목록에 가상화가 적용되어 있는가', priority: '권고', desc: '100개+ 항목 시 성능 최적화' },
            { check: 'UI 에셋이 아틀라스로 최적화되어 있는가', priority: '권고', desc: '드로우콜 최소화' }
        ]
    }
];
