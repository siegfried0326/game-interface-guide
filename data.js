/* ============================================
   Game UI/UX - Component & UX Law Data
   ============================================ */

const COMPONENTS = {
    buttons: {
        id: 'buttons',
        name: '버튼',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="4"/></svg>`,
        summary: '게임에서 가장 기본적인 인터랙션 요소. 액션 실행, 메뉴 선택, 스킬 사용 등에 활용됩니다.',
        description: `버튼은 게임 UI에서 가장 기본적이면서도 중요한 컴포넌트입니다. 플레이어의 의도를 시스템에 전달하는 핵심 인터페이스로, 명확한 시각적 피드백과 직관적인 상태 표현이 필수적입니다.

게임 버튼은 일반 웹/앱 버튼과 달리 장르의 세계관을 반영해야 합니다. RPG에서는 판타지풍 장식이, FPS에서는 밀리터리 스타일이, 캐주얼 게임에서는 둥글고 친근한 형태가 적합합니다.`,
        guidelines: [
            '버튼의 최소 터치 영역은 44x44px을 유지하세요 (피츠의 법칙)',
            '누를 수 있다는 것을 시각적으로 명확히 표현하세요 (어포던스)',
            'Pressed/Hover/Disabled 등 모든 상태에 피드백을 제공하세요',
            '중요한 액션일수록 시각적 무게감을 높이세요 (시각적 위계)',
            '쿨다운, 비용 부족 등 비활성 상태를 명확히 구분하세요',
        ],
        relatedLaws: ['fitts-law', 'feedback-principle', 'aesthetic-usability', 'doherty-threshold'],
        genres: {
            rpg: {
                title: 'RPG 버튼',
                description: 'RPG 버튼은 판타지 세계관을 반영합니다. 금속 테두리, 엠보싱 텍스처, 마법 이펙트 등을 활용하여 몰입감을 높입니다. 주요 액션(공격, 스킬 사용)은 화려한 글로우 효과를, 보조 액션(인벤토리, 설정)은 절제된 스타일을 사용합니다.',
                wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- 배경 가이드 -->
                    <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                    <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">RPG Button Layout</text>

                    <!-- Primary Action Button -->
                    <rect x="40" y="40" width="160" height="48" rx="6" fill="#2a2000" stroke="#FFD700" stroke-width="2"/>
                    <rect x="42" y="42" width="156" height="22" rx="4" fill="rgba(255,215,0,0.08)"/>
                    <text x="120" y="69" fill="#FFD700" font-size="13" text-anchor="middle" font-weight="bold">⚔️ 공격하기</text>
                    <text x="120" y="98" fill="#666" font-size="8" text-anchor="middle">Primary Action · 44px height</text>

                    <!-- Secondary Button -->
                    <rect x="220" y="40" width="110" height="48" rx="6" fill="none" stroke="#8B6914" stroke-width="1.5"/>
                    <text x="275" y="69" fill="#8B6914" font-size="11" text-anchor="middle">🛡️ 방어</text>
                    <text x="275" y="98" fill="#666" font-size="8" text-anchor="middle">Secondary</text>

                    <!-- Disabled State -->
                    <rect x="40" y="120" width="120" height="40" rx="6" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
                    <text x="100" y="145" fill="#555" font-size="10" text-anchor="middle">MP 부족</text>
                    <line x1="40" y1="120" x2="160" y2="160" stroke="#333" stroke-width="0.5"/>

                    <!-- Cooldown State -->
                    <rect x="180" y="120" width="120" height="40" rx="6" fill="#1a1a1a" stroke="#555" stroke-width="1"/>
                    <rect x="180" y="120" width="72" height="40" rx="6" fill="rgba(255,215,0,0.05)"/>
                    <text x="240" y="145" fill="#888" font-size="10" text-anchor="middle">쿨다운 3s</text>

                    <!-- 치수 표시 -->
                    <line x1="38" y1="38" x2="38" y2="90" stroke="#FFD700" stroke-width="0.5" opacity="0.4"/>
                    <text x="30" y="68" fill="#FFD700" font-size="7" text-anchor="end" opacity="0.6">48px</text>
                </svg>`,
                demo: 'rpg-buttons'
            },
            fps: {
                title: 'FPS 버튼',
                description: 'FPS 버튼은 밀리터리/SF 테마를 따릅니다. 각진 모서리(clip-path), 모노스페이스 폰트, 네온 라인 등이 특징입니다. 전투 중에는 최소한의 UI만 표시하고, 메뉴에서는 기능적 디자인을 우선합니다.',
                wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                    <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">FPS Button Layout</text>

                    <!-- Primary - Clipped corners -->
                    <polygon points="52,44 200,44 192,88 44,88" fill="#1a1a1a" stroke="#ff4444" stroke-width="1.5"/>
                    <text x="120" y="71" fill="#ffffff" font-size="12" text-anchor="middle" font-family="monospace" letter-spacing="3">ENGAGE</text>
                    <text x="120" y="100" fill="#666" font-size="8" text-anchor="middle">clip-path: slanted edges</text>

                    <!-- Secondary - Outlined -->
                    <polygon points="222,44 330,44 322,88 214,88" fill="none" stroke="#666" stroke-width="1"/>
                    <text x="272" y="71" fill="#999" font-size="10" text-anchor="middle" font-family="monospace" letter-spacing="2">LOADOUT</text>

                    <!-- Icon Button (minimal) -->
                    <rect x="44" y="120" width="44" height="44" fill="#1a1a1a" stroke="#444" stroke-width="1"/>
                    <text x="66" y="147" fill="#ff4444" font-size="16" text-anchor="middle">⚙</text>
                    <text x="66" y="174" fill="#666" font-size="7" text-anchor="middle">44×44 min</text>

                    <!-- Toggle Button -->
                    <rect x="110" y="120" width="80" height="44" fill="rgba(255,68,68,0.15)" stroke="#ff4444" stroke-width="1"/>
                    <text x="150" y="145" fill="#ff4444" font-size="9" text-anchor="middle" font-family="monospace">ON</text>
                    <rect x="200" y="120" width="80" height="44" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
                    <text x="240" y="145" fill="#555" font-size="9" text-anchor="middle" font-family="monospace">OFF</text>
                </svg>`,
                demo: 'fps-buttons'
            },
            tps: {
                title: 'TPS 버튼',
                description: 'TPS는 RPG와 액션의 중간 스타일입니다. 둥근 모서리, 반투명 배경(글래스모피즘), 부드러운 애니메이션을 활용합니다. 캐릭터와 UI가 공존하므로 배경이 비치는 반투명 처리가 중요합니다.',
                wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                    <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">TPS Button Layout</text>

                    <!-- 반투명 배경 표현 -->
                    <rect x="40" y="40" width="160" height="48" rx="24" fill="rgba(68,170,255,0.1)" stroke="rgba(68,170,255,0.4)" stroke-width="1.5"/>
                    <text x="120" y="69" fill="#44aaff" font-size="12" text-anchor="middle">인터랙션</text>
                    <text x="120" y="98" fill="#666" font-size="8" text-anchor="middle">Glassmorphism · border-radius: 24px</text>

                    <!-- Pill Secondary -->
                    <rect x="220" y="40" width="100" height="48" rx="24" fill="none" stroke="rgba(68,170,255,0.25)" stroke-width="1"/>
                    <text x="270" y="69" fill="rgba(68,170,255,0.6)" font-size="11" text-anchor="middle">취소</text>

                    <!-- FAB Style -->
                    <circle cx="70" cy="148" r="24" fill="rgba(68,170,255,0.15)" stroke="rgba(68,170,255,0.4)" stroke-width="1.5"/>
                    <text x="70" y="153" fill="#44aaff" font-size="16" text-anchor="middle">+</text>
                    <text x="70" y="182" fill="#666" font-size="7" text-anchor="middle">FAB 48px</text>

                    <!-- 상태 표시 -->
                    <rect x="130" y="124" width="180" height="48" rx="24" fill="rgba(68,170,255,0.08)" stroke="rgba(68,170,255,0.2)" stroke-width="1"/>
                    <rect x="132" y="126" width="108" height="44" rx="22" fill="rgba(68,170,255,0.12)"/>
                    <text x="186" y="153" fill="#44aaff" font-size="9" text-anchor="middle">60% fill = progress</text>
                </svg>`,
                demo: 'tps-buttons'
            },
            quarter: {
                title: '쿼터뷰 버튼',
                description: '쿼터뷰(이소메트릭) 게임은 전략적 UI가 핵심입니다. 넓은 버튼, 명확한 아이콘, 픽셀 친화적 디자인을 사용합니다. 드롭 섀도우로 입체감을 주고, 눌림 효과는 Y축 이동으로 표현합니다.',
                wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                    <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">Quarter-View Button Layout</text>

                    <!-- 3D-ish Primary Button -->
                    <rect x="40" y="48" width="150" height="40" rx="6" fill="#1a4a2a" stroke="#44ff88" stroke-width="0"/>
                    <rect x="40" y="44" width="150" height="40" rx="6" fill="#44ff88"/>
                    <text x="115" y="69" fill="#0a1a0f" font-size="12" text-anchor="middle" font-weight="bold">건설하기</text>
                    <text x="115" y="98" fill="#666" font-size="8" text-anchor="middle">shadow offset = pressed depth</text>

                    <!-- Grid of icon buttons (command palette) -->
                    <rect x="210" y="40" width="44" height="44" rx="4" fill="#44ff88"/>
                    <text x="232" y="67" fill="#0a1a0f" font-size="16" text-anchor="middle">🏠</text>
                    <rect x="260" y="40" width="44" height="44" rx="4" fill="rgba(68,255,136,0.15)" stroke="#44ff88" stroke-width="1"/>
                    <text x="282" y="67" fill="#44ff88" font-size="16" text-anchor="middle">⚒</text>

                    <!-- Tab-style group -->
                    <rect x="40" y="120" width="80" height="36" rx="6" fill="#44ff88"/>
                    <text x="80" y="142" fill="#0a1a0f" font-size="10" text-anchor="middle" font-weight="bold">유닛</text>
                    <rect x="120" y="120" width="80" height="36" rx="6" fill="rgba(68,255,136,0.08)" stroke="rgba(68,255,136,0.2)" stroke-width="1"/>
                    <text x="160" y="142" fill="rgba(68,255,136,0.5)" font-size="10" text-anchor="middle">건물</text>
                    <rect x="200" y="120" width="80" height="36" rx="6" fill="rgba(68,255,136,0.08)" stroke="rgba(68,255,136,0.2)" stroke-width="1"/>
                    <text x="240" y="142" fill="rgba(68,255,136,0.5)" font-size="10" text-anchor="middle">연구</text>
                </svg>`,
                demo: 'quarter-buttons'
            }
        }
    },

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
        relatedLaws: ['law-proximity', 'law-similarity', 'aesthetic-usability', 'law-pragnanz'],
        genres: {
            rpg: { title: 'RPG 카드', description: '아이템 카드, 캐릭터 카드 등 판타지 스타일의 카드 UI', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">RPG Item Card Layout</text>
                <!-- Card Frame -->
                <rect x="40" y="30" width="120" height="155" rx="8" fill="#1a1500" stroke="#FFD700" stroke-width="1.5"/>
                <!-- Thumbnail -->
                <rect x="48" y="38" width="104" height="65" rx="4" fill="rgba(255,215,0,0.06)"/>
                <text x="100" y="75" fill="#FFD700" font-size="22" text-anchor="middle">🗡</text>
                <!-- Title -->
                <rect x="48" y="110" width="80" height="8" rx="2" fill="rgba(255,215,0,0.3)"/>
                <!-- Rarity stars -->
                <text x="52" y="132" fill="#FFD700" font-size="7">★★★★☆</text>
                <!-- Stat lines -->
                <rect x="48" y="140" width="70" height="5" rx="1" fill="rgba(255,255,255,0.08)"/>
                <rect x="48" y="150" width="55" height="5" rx="1" fill="rgba(255,255,255,0.05)"/>
                <rect x="48" y="160" width="90" height="5" rx="1" fill="rgba(255,255,255,0.08)"/>
                <!-- Annotations -->
                <line x1="170" y1="38" x2="200" y2="38" stroke="#555" stroke-width="0.5"/>
                <text x="205" y="41" fill="#666" font-size="7">이미지 영역</text>
                <line x1="170" y1="112" x2="200" y2="112" stroke="#555" stroke-width="0.5"/>
                <text x="205" y="115" fill="#666" font-size="7">아이템 이름</text>
                <line x1="170" y1="130" x2="200" y2="130" stroke="#555" stroke-width="0.5"/>
                <text x="205" y="133" fill="#666" font-size="7">등급 (색상 코드)</text>
                <line x1="170" y1="150" x2="200" y2="150" stroke="#555" stroke-width="0.5"/>
                <text x="205" y="153" fill="#666" font-size="7">스탯 정보</text>
            </svg>`, demo: 'rpg-cards' },
            fps: { title: 'FPS 카드', description: '무기 카드, 로드아웃 카드 등 전술적 정보를 담은 카드 UI', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">FPS Weapon Card Layout</text>
                <!-- Card (angular) -->
                <rect x="40" y="30" width="180" height="80" fill="#111" stroke="#444" stroke-width="1"/>
                <!-- Weapon image area -->
                <rect x="44" y="34" width="100" height="50" fill="#0a0a0a"/>
                <text x="94" y="64" fill="#ff4444" font-size="18" text-anchor="middle">🔫</text>
                <!-- Name + type -->
                <rect x="150" y="38" width="60" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
                <rect x="150" y="48" width="40" height="4" rx="1" fill="rgba(255,255,255,0.06)"/>
                <!-- Stats grid -->
                <text x="150" y="66" fill="#888" font-size="6" font-family="monospace">DMG</text>
                <rect x="170" y="60" width="40" height="4" fill="rgba(255,68,68,0.3)"/>
                <text x="150" y="76" fill="#888" font-size="6" font-family="monospace">RNG</text>
                <rect x="170" y="70" width="30" height="4" fill="rgba(255,255,255,0.1)"/>
                <!-- Annotations -->
                <text x="250" y="50" fill="#666" font-size="7">가로형 레이아웃</text>
                <text x="250" y="62" fill="#666" font-size="7">스탯 바 그래프</text>
                <text x="250" y="74" fill="#666" font-size="7">모노스페이스 폰트</text>
                <!-- Loadout grid below -->
                <rect x="40" y="120" width="50" height="50" fill="#111" stroke="#333" stroke-width="1"/>
                <rect x="96" y="120" width="50" height="50" fill="#111" stroke="#ff4444" stroke-width="1"/>
                <rect x="152" y="120" width="50" height="50" fill="#111" stroke="#333" stroke-width="1"/>
                <text x="65" y="150" fill="#555" font-size="7" text-anchor="middle">주무기</text>
                <text x="121" y="150" fill="#ff4444" font-size="7" text-anchor="middle">선택됨</text>
                <text x="177" y="150" fill="#555" font-size="7" text-anchor="middle">보조</text>
            </svg>`, demo: 'fps-cards' },
            tps: { title: 'TPS 카드', description: '장비, 미션 정보를 보여주는 세련된 카드 UI', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">TPS Character Card Layout</text>
                <!-- Rounded card -->
                <rect x="40" y="30" width="140" height="150" rx="16" fill="rgba(68,170,255,0.04)" stroke="rgba(68,170,255,0.2)" stroke-width="1"/>
                <!-- Avatar area -->
                <circle cx="110" cy="72" r="30" fill="rgba(68,170,255,0.08)" stroke="rgba(68,170,255,0.15)" stroke-width="1"/>
                <text x="110" y="78" fill="#44aaff" font-size="20" text-anchor="middle">🧑</text>
                <!-- Name -->
                <rect x="70" y="110" width="80" height="7" rx="3" fill="rgba(68,170,255,0.2)"/>
                <!-- Class tag -->
                <rect x="85" y="122" width="50" height="12" rx="6" fill="rgba(68,170,255,0.1)" stroke="rgba(68,170,255,0.15)" stroke-width="0.5"/>
                <text x="110" y="131" fill="rgba(68,170,255,0.6)" font-size="6" text-anchor="middle">딜러</text>
                <!-- Progress -->
                <rect x="55" y="142" width="110" height="4" rx="2" fill="rgba(68,170,255,0.08)"/>
                <rect x="55" y="142" width="75" height="4" rx="2" fill="rgba(68,170,255,0.3)"/>
                <!-- Annotations -->
                <text x="210" y="55" fill="#666" font-size="7">border-radius: 16px</text>
                <text x="210" y="67" fill="#666" font-size="7">원형 아바타</text>
                <text x="210" y="79" fill="#666" font-size="7">반투명 배경</text>
                <text x="210" y="91" fill="#666" font-size="7">Pill 태그</text>
                <text x="210" y="103" fill="#666" font-size="7">프로그레스 바</text>
            </svg>`, demo: 'tps-cards' },
            quarter: { title: '쿼터뷰 카드', description: '유닛, 건물, 연구 정보를 담은 전략적 카드 UI', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">Quarter-View Unit Card</text>
                <!-- Card -->
                <rect x="40" y="30" width="160" height="100" rx="6" fill="rgba(68,255,136,0.03)" stroke="rgba(68,255,136,0.2)" stroke-width="1"/>
                <!-- Icon -->
                <rect x="48" y="38" width="40" height="40" rx="4" fill="rgba(68,255,136,0.08)"/>
                <text x="68" y="64" fill="#44ff88" font-size="18" text-anchor="middle">🏰</text>
                <!-- Name + info -->
                <rect x="96" y="42" width="80" height="7" rx="2" fill="rgba(68,255,136,0.2)"/>
                <rect x="96" y="54" width="55" height="5" rx="1" fill="rgba(255,255,255,0.06)"/>
                <!-- Stats row -->
                <text x="96" y="75" fill="#888" font-size="6">HP</text>
                <rect x="110" y="70" width="70" height="4" fill="rgba(68,255,136,0.1)"/>
                <rect x="110" y="70" width="50" height="4" fill="rgba(68,255,136,0.3)"/>
                <text x="96" y="87" fill="#888" font-size="6">ATK</text>
                <rect x="110" y="82" width="70" height="4" fill="rgba(68,255,136,0.1)"/>
                <rect x="110" y="82" width="35" height="4" fill="rgba(68,255,136,0.3)"/>
                <!-- Cost -->
                <rect x="48" y="100" width="140" height="20" rx="3" fill="rgba(68,255,136,0.04)"/>
                <text x="68" y="114" fill="#FFD700" font-size="7">💰 800</text>
                <text x="110" y="114" fill="#44aaff" font-size="7">💎 200</text>
                <text x="155" y="114" fill="#44ff88" font-size="7">🌲 400</text>
                <!-- Annotations -->
                <text x="220" y="50" fill="#666" font-size="7">아이콘 + 이름</text>
                <text x="220" y="75" fill="#666" font-size="7">스탯 바 (비교용)</text>
                <text x="220" y="112" fill="#666" font-size="7">자원 비용 표시</text>
            </svg>`, demo: 'quarter-cards' }
        }
    },

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
        relatedLaws: ['hicks-law', 'jakobs-law', 'feedback-principle', 'consistency'],
        genres: {
            rpg: { title: 'RPG 다이얼로그', description: 'NPC 대화, 퀘스트 수락, 아이템 확인 다이얼로그', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">RPG Quest Dialog</text>
                <!-- Overlay -->
                <rect x="20" y="20" width="320" height="160" rx="8" fill="rgba(0,0,0,0.4)"/>
                <!-- Dialog box -->
                <rect x="60" y="35" width="240" height="140" rx="10" fill="#1a1500" stroke="#FFD700" stroke-width="1.5"/>
                <!-- NPC Portrait -->
                <circle cx="100" cy="72" r="22" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1"/>
                <text x="100" y="78" fill="#FFD700" font-size="16" text-anchor="middle">👤</text>
                <!-- Title -->
                <rect x="132" y="56" width="100" height="8" rx="2" fill="rgba(255,215,0,0.3)"/>
                <!-- Description lines -->
                <rect x="132" y="72" width="150" height="5" rx="1" fill="rgba(255,255,255,0.08)"/>
                <rect x="132" y="82" width="130" height="5" rx="1" fill="rgba(255,255,255,0.05)"/>
                <!-- Reward area -->
                <rect x="80" y="100" width="200" height="24" rx="4" fill="rgba(255,215,0,0.04)"/>
                <text x="95" y="115" fill="#FFD700" font-size="7">보상: 💰500  ⚔+10  📜경험치</text>
                <!-- Buttons -->
                <rect x="130" y="135" width="70" height="28" rx="5" fill="#2a2000" stroke="#FFD700" stroke-width="1"/>
                <text x="165" y="153" fill="#FFD700" font-size="9" text-anchor="middle">수락</text>
                <rect x="210" y="135" width="70" height="28" rx="5" fill="none" stroke="#555" stroke-width="1"/>
                <text x="245" y="153" fill="#888" font-size="9" text-anchor="middle">거절</text>
            </svg>`, demo: 'rpg-dialogs' },
            fps: { title: 'FPS 다이얼로그', description: '매치 결과, 설정 변경 확인 다이얼로그', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">FPS Match Dialog</text>
                <rect x="20" y="20" width="320" height="160" rx="8" fill="rgba(0,0,0,0.5)"/>
                <!-- Angular dialog -->
                <rect x="70" y="40" width="220" height="125" fill="#111" stroke="#ff4444" stroke-width="1"/>
                <rect x="70" y="40" width="220" height="24" fill="rgba(255,68,68,0.1)"/>
                <text x="180" y="56" fill="#ff4444" font-size="10" text-anchor="middle" font-family="monospace" letter-spacing="2">MATCH FOUND</text>
                <!-- Info -->
                <text x="180" y="82" fill="#fff" font-size="9" text-anchor="middle" font-family="monospace">5v5 COMPETITIVE</text>
                <text x="180" y="96" fill="#666" font-size="7" text-anchor="middle" font-family="monospace">MAP: DUST II</text>
                <!-- Timer -->
                <text x="180" y="118" fill="#ff4444" font-size="14" text-anchor="middle" font-family="monospace">0:09</text>
                <!-- Buttons -->
                <rect x="100" y="132" width="80" height="24" fill="rgba(255,68,68,0.15)" stroke="#ff4444" stroke-width="1"/>
                <text x="140" y="148" fill="#ff4444" font-size="8" text-anchor="middle" font-family="monospace">ACCEPT</text>
                <rect x="190" y="132" width="80" height="24" fill="#111" stroke="#444" stroke-width="1"/>
                <text x="230" y="148" fill="#666" font-size="8" text-anchor="middle" font-family="monospace">DECLINE</text>
            </svg>`, demo: 'fps-dialogs' },
            tps: { title: 'TPS 다이얼로그', description: '미션 브리핑, 장비 강화 확인 다이얼로그', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">TPS Enhancement Dialog</text>
                <rect x="20" y="20" width="320" height="160" rx="8" fill="rgba(0,0,0,0.35)"/>
                <!-- Rounded dialog -->
                <rect x="65" y="38" width="230" height="130" rx="16" fill="rgba(20,20,35,0.95)" stroke="rgba(68,170,255,0.25)" stroke-width="1"/>
                <!-- Title -->
                <rect x="120" y="50" width="120" height="8" rx="3" fill="rgba(68,170,255,0.25)"/>
                <!-- Item display -->
                <rect x="140" y="68" width="80" height="36" rx="8" fill="rgba(68,170,255,0.06)" stroke="rgba(68,170,255,0.15)" stroke-width="1"/>
                <text x="180" y="91" fill="#44aaff" font-size="14" text-anchor="middle">⚔ → ⚔+1</text>
                <!-- Warning -->
                <text x="180" y="118" fill="rgba(255,82,82,0.7)" font-size="7" text-anchor="middle">실패 시 파괴될 수 있습니다</text>
                <!-- Pill buttons -->
                <rect x="110" y="130" width="80" height="26" rx="13" fill="rgba(68,170,255,0.15)" stroke="rgba(68,170,255,0.4)" stroke-width="1"/>
                <text x="150" y="147" fill="#44aaff" font-size="8" text-anchor="middle">강화하기</text>
                <rect x="200" y="130" width="60" height="26" rx="13" fill="none" stroke="rgba(68,170,255,0.15)" stroke-width="1"/>
                <text x="230" y="147" fill="rgba(68,170,255,0.4)" font-size="8" text-anchor="middle">취소</text>
            </svg>`, demo: 'tps-dialogs' },
            quarter: { title: '쿼터뷰 다이얼로그', description: '건설 확인, 외교 제안 다이얼로그', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">Quarter-View Diplomacy Dialog</text>
                <rect x="20" y="20" width="320" height="160" rx="8" fill="rgba(0,0,0,0.35)"/>
                <!-- Dialog -->
                <rect x="60" y="35" width="240" height="135" rx="8" fill="rgba(10,20,15,0.95)" stroke="rgba(68,255,136,0.2)" stroke-width="1"/>
                <!-- Header -->
                <rect x="60" y="35" width="240" height="28" rx="8" fill="rgba(68,255,136,0.05)"/>
                <text x="80" y="53" fill="#44ff88" font-size="9">🏰 동맹 제안</text>
                <!-- Content -->
                <rect x="74" y="72" width="180" height="5" rx="1" fill="rgba(255,255,255,0.06)"/>
                <rect x="74" y="82" width="150" height="5" rx="1" fill="rgba(255,255,255,0.04)"/>
                <!-- Cost/benefit -->
                <rect x="74" y="100" width="95" height="30" rx="4" fill="rgba(68,255,136,0.04)"/>
                <text x="80" y="113" fill="#44ff88" font-size="6">이점</text>
                <text x="80" y="124" fill="#888" font-size="6">방어력 +20%</text>
                <rect x="178" y="100" width="95" height="30" rx="4" fill="rgba(255,82,82,0.04)"/>
                <text x="184" y="113" fill="#ff5252" font-size="6">비용</text>
                <text x="184" y="124" fill="#888" font-size="6">💰 500/턴</text>
                <!-- Buttons -->
                <rect x="120" y="140" width="70" height="22" rx="4" fill="#44ff88"/>
                <text x="155" y="155" fill="#0a1a0f" font-size="8" text-anchor="middle" font-weight="bold">수락</text>
                <rect x="198" y="140" width="70" height="22" rx="4" fill="none" stroke="rgba(68,255,136,0.2)" stroke-width="1"/>
                <text x="233" y="155" fill="rgba(68,255,136,0.4)" font-size="8" text-anchor="middle">거절</text>
            </svg>`, demo: 'quarter-dialogs' }
        }
    },

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
        relatedLaws: ['miller-law', 'law-proximity', 'progressive-disclosure', 'von-restorff'],
        genres: {
            rpg: { title: 'RPG HUD', description: 'HP/MP 바, 퀘스트 트래커, 미니맵, 경험치 바가 포함된 클래식 RPG HUD', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="350" height="190" rx="4" fill="#0a150a" stroke="#333" stroke-width="1"/>
                <text x="15" y="18" fill="#666" font-size="7" font-family="monospace">RPG HUD Layout (16:10)</text>
                <!-- Top-Left: Player info -->
                <circle cx="28" cy="35" r="10" fill="rgba(108,92,231,0.3)" stroke="#6c5ce7" stroke-width="1"/>
                <text x="28" y="38" fill="#fff" font-size="6" text-anchor="middle">42</text>
                <rect x="42" y="28" width="80" height="5" rx="2" fill="rgba(255,85,85,0.15)"/>
                <rect x="42" y="28" width="60" height="5" rx="2" fill="rgba(255,85,85,0.6)"/>
                <rect x="42" y="36" width="80" height="5" rx="2" fill="rgba(85,85,255,0.15)"/>
                <rect x="42" y="36" width="48" height="5" rx="2" fill="rgba(85,85,255,0.6)"/>
                <text x="42" y="52" fill="#666" font-size="5">용사 Lv.42</text>
                <!-- Top-Right: Minimap -->
                <circle cx="325" cy="40" r="25" fill="rgba(255,255,255,0.02)" stroke="rgba(255,215,0,0.2)" stroke-width="1"/>
                <circle cx="325" cy="40" r="2" fill="#44aaff"/>
                <circle cx="332" cy="34" r="1.5" fill="#ff4444"/>
                <!-- Bottom-Center: Skillbar -->
                <rect x="120" y="165" width="120" height="22" rx="3" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
                <rect x="124" y="168" width="16" height="16" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <rect x="143" y="168" width="16" height="16" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <rect x="162" y="168" width="16" height="16" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <rect x="181" y="168" width="16" height="16" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <rect x="200" y="168" width="16" height="16" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <rect x="219" y="168" width="16" height="16" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <!-- Bottom: XP bar -->
                <rect x="15" y="190" width="330" height="3" rx="1" fill="rgba(255,215,0,0.1)"/>
                <rect x="15" y="190" width="150" height="3" rx="1" fill="rgba(255,215,0,0.4)"/>
                <!-- Right: Quest -->
                <text x="280" y="100" fill="rgba(255,215,0,0.5)" font-size="6">📜 드래곤 퇴치</text>
                <text x="290" y="110" fill="#666" font-size="5">3/5 처치</text>
            </svg>`, demo: 'rpg-hud' },
            fps: { title: 'FPS HUD', description: '조준점, 탄약 수, 체력, 미니맵 중심의 최소 HUD', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="350" height="190" rx="4" fill="#0a1520" stroke="#333" stroke-width="1"/>
                <text x="15" y="18" fill="#666" font-size="7" font-family="monospace">FPS HUD Layout (16:10)</text>
                <!-- Crosshair center -->
                <line x1="175" y1="90" x2="175" y2="96" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
                <line x1="175" y1="104" x2="175" y2="110" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
                <line x1="169" y1="100" x2="163" y2="100" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
                <line x1="181" y1="100" x2="187" y2="100" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
                <!-- Top-Left: HP -->
                <rect x="15" y="26" width="70" height="4" rx="0" fill="rgba(255,68,68,0.15)"/>
                <rect x="15" y="26" width="55" height="4" rx="0" fill="rgba(255,68,68,0.6)"/>
                <text x="15" y="38" fill="#888" font-size="5" font-family="monospace">HP 85</text>
                <!-- Top-Right: Minimap -->
                <rect x="305" y="18" width="40" height="40" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                <circle cx="325" cy="38" r="2" fill="#44aaff"/>
                <circle cx="330" cy="30" r="1" fill="#ff4444"/>
                <!-- Bottom-Right: Ammo -->
                <text x="305" y="172" fill="#fff" font-size="16" font-family="monospace" font-weight="bold">24</text>
                <text x="330" y="172" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">/ 120</text>
                <text x="305" y="182" fill="#666" font-size="5" font-family="monospace">AR-15</text>
                <!-- Bottom-Left: Grenades -->
                <rect x="15" y="165" width="6" height="16" rx="1" fill="rgba(255,68,68,0.5)"/>
                <rect x="24" y="165" width="6" height="16" rx="1" fill="rgba(68,170,255,0.4)"/>
                <rect x="33" y="165" width="6" height="16" rx="1" fill="rgba(255,255,255,0.08)"/>
                <text x="15" y="190" fill="#666" font-size="4" font-family="monospace">UTILITY</text>
            </svg>`, demo: 'fps-hud' },
            tps: { title: 'TPS HUD', description: '캐릭터 주변에 표시되는 반투명 정보 오버레이', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="350" height="190" rx="4" fill="#0a0a15" stroke="#333" stroke-width="1"/>
                <text x="15" y="18" fill="#666" font-size="7" font-family="monospace">TPS HUD Layout (16:10)</text>
                <!-- Top-Left: Player -->
                <circle cx="28" cy="34" r="10" fill="rgba(68,170,255,0.1)" stroke="rgba(68,170,255,0.3)" stroke-width="1"/>
                <text x="28" y="37" fill="#44aaff" font-size="7" text-anchor="middle">🧑</text>
                <rect x="42" y="28" width="65" height="4" rx="2" fill="rgba(255,85,85,0.15)"/>
                <rect x="42" y="28" width="55" height="4" rx="2" fill="rgba(255,85,85,0.5)"/>
                <rect x="42" y="35" width="65" height="4" rx="2" fill="rgba(68,255,136,0.15)"/>
                <rect x="42" y="35" width="45" height="4" rx="2" fill="rgba(68,255,136,0.5)"/>
                <!-- Top-Right: Mission -->
                <text x="280" y="30" fill="rgba(68,170,255,0.5)" font-size="6">미션 목표</text>
                <text x="280" y="40" fill="#44aaff" font-size="7">거점 확보 ▶ 120m</text>
                <!-- Bottom-Center: Skills -->
                <rect x="140" y="168" width="18" height="18" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <rect x="162" y="168" width="18" height="18" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                <rect x="184" y="165" width="22" height="22" rx="5" fill="rgba(108,92,231,0.1)" stroke="rgba(108,92,231,0.3)" stroke-width="1"/>
                <text x="148" y="182" fill="#666" font-size="4" text-anchor="middle">Q</text>
                <text x="170" y="182" fill="#666" font-size="4" text-anchor="middle">E</text>
                <text x="194" y="181" fill="#6c5ce7" font-size="4" text-anchor="middle">R</text>
            </svg>`, demo: 'tps-hud' },
            quarter: { title: '쿼터뷰 HUD', description: '자원 표시, 미니맵, 유닛 정보 패널이 있는 전략 HUD', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="350" height="190" rx="4" fill="#0a150a" stroke="#333" stroke-width="1"/>
                <text x="15" y="18" fill="#666" font-size="7" font-family="monospace">Quarter-View HUD Layout</text>
                <!-- Top: Resource bar -->
                <rect x="80" y="12" width="200" height="16" rx="3" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
                <text x="110" y="23" fill="#FFD700" font-size="6">💰 1,250</text>
                <text x="165" y="23" fill="#44aaff" font-size="6">💎 340</text>
                <text x="210" y="23" fill="#44ff88" font-size="6">🌲 890</text>
                <text x="255" y="23" fill="#ff8844" font-size="6">🔨 560</text>
                <!-- Right: Minimap -->
                <rect x="295" y="12" width="55" height="55" fill="rgba(0,0,0,0.3)" stroke="rgba(68,255,136,0.15)" stroke-width="0.5"/>
                <circle cx="322" cy="40" r="2" fill="#44aaff"/>
                <rect x="305" y="22" width="10" height="8" rx="1" fill="rgba(68,255,136,0.1)" stroke="rgba(68,255,136,0.1)" stroke-width="0.5"/>
                <!-- Bottom: Command panel -->
                <rect x="5" y="150" width="350" height="42" fill="rgba(0,0,0,0.3)" stroke="rgba(68,255,136,0.08)" stroke-width="0.5"/>
                <!-- Unit portrait -->
                <rect x="10" y="155" width="32" height="32" rx="2" fill="rgba(68,255,136,0.05)" stroke="rgba(68,255,136,0.15)" stroke-width="0.5"/>
                <text x="26" y="175" fill="#44ff88" font-size="8" text-anchor="middle">🗡</text>
                <!-- Unit stats -->
                <text x="50" y="164" fill="#fff" font-size="6">기사단 x5</text>
                <rect x="50" y="168" width="50" height="3" rx="1" fill="rgba(68,255,136,0.1)"/>
                <rect x="50" y="168" width="45" height="3" rx="1" fill="rgba(68,255,136,0.4)"/>
                <!-- Command buttons -->
                <rect x="200" y="155" width="24" height="24" rx="3" fill="rgba(68,255,136,0.05)" stroke="rgba(68,255,136,0.15)" stroke-width="0.5"/>
                <rect x="228" y="155" width="24" height="24" rx="3" fill="rgba(68,255,136,0.05)" stroke="rgba(68,255,136,0.15)" stroke-width="0.5"/>
                <rect x="256" y="155" width="24" height="24" rx="3" fill="rgba(68,255,136,0.05)" stroke="rgba(68,255,136,0.15)" stroke-width="0.5"/>
                <rect x="284" y="155" width="24" height="24" rx="3" fill="rgba(68,255,136,0.05)" stroke="rgba(68,255,136,0.15)" stroke-width="0.5"/>
                <text x="212" y="171" fill="#44ff88" font-size="7" text-anchor="middle">🗡</text>
                <text x="240" y="171" fill="#44ff88" font-size="7" text-anchor="middle">🛡</text>
                <text x="268" y="171" fill="#44ff88" font-size="7" text-anchor="middle">🏃</text>
                <text x="296" y="171" fill="#44ff88" font-size="7" text-anchor="middle">⏹</text>
            </svg>`, demo: 'quarter-hud' }
        }
    },

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
        relatedLaws: ['jakobs-law', 'law-proximity', 'recognition-recall', 'law-similarity'],
        genres: {
            rpg: { title: 'RPG 인벤토리', description: '그리드 기반, 장비 슬롯, 아이템 등급이 있는 클래식 인벤토리', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">RPG Inventory Grid</text>
                <!-- Header -->
                <text x="30" y="38" fill="#FFD700" font-size="9">🎒 인벤토리 (8/20)</text>
                <!-- 5x3 Grid -->
                ${[0,1,2,3,4].map(col => [0,1,2].map(row => {
                    const x = 30 + col * 38;
                    const y = 48 + row * 38;
                    const borders = ['#FFD700','#6c5ce7','#44aaff','','','','','','','','','#44aaff','','',''];
                    const items = ['🗡','🛡','💎','🧪','🍖','📜','🔮','🏹','','','','','','',''];
                    const idx = row * 5 + col;
                    const b = borders[idx] || 'rgba(255,255,255,0.06)';
                    return `<rect x="${x}" y="${y}" width="34" height="34" rx="3" fill="rgba(255,255,255,0.02)" stroke="${b}" stroke-width="${borders[idx] ? 1.5 : 0.5}"/>${items[idx] ? `<text x="${x+17}" y="${y+22}" fill="#fff" font-size="12" text-anchor="middle">${items[idx]}</text>` : ''}`;
                }).join('')).join('')}
                <!-- Equipment slots on right -->
                <rect x="230" y="48" width="100" height="120" rx="6" fill="rgba(255,255,255,0.01)" stroke="rgba(255,215,0,0.1)" stroke-width="0.5"/>
                <text x="245" y="62" fill="#666" font-size="6">장비 슬롯</text>
                <circle cx="260" cy="85" r="12" fill="rgba(255,215,0,0.05)" stroke="rgba(255,215,0,0.15)" stroke-width="0.5"/>
                <text x="260" y="88" fill="#FFD700" font-size="8" text-anchor="middle">⚔</text>
                <circle cx="300" cy="85" r="12" fill="rgba(255,215,0,0.05)" stroke="rgba(255,215,0,0.15)" stroke-width="0.5"/>
                <text x="300" y="88" fill="#FFD700" font-size="8" text-anchor="middle">🛡</text>
                <circle cx="260" cy="120" r="12" fill="rgba(255,215,0,0.05)" stroke="rgba(255,215,0,0.15)" stroke-width="0.5"/>
                <text x="260" y="123" fill="#FFD700" font-size="8" text-anchor="middle">👕</text>
                <circle cx="300" cy="120" r="12" fill="rgba(255,215,0,0.05)" stroke="rgba(255,215,0,0.15)" stroke-width="0.5"/>
                <text x="300" y="123" fill="#FFD700" font-size="8" text-anchor="middle">💍</text>
                <!-- Color legend -->
                <rect x="30" y="170" width="6" height="6" fill="#FFD700"/>
                <text x="40" y="176" fill="#888" font-size="5">전설</text>
                <rect x="70" y="170" width="6" height="6" fill="#6c5ce7"/>
                <text x="80" y="176" fill="#888" font-size="5">영웅</text>
                <rect x="110" y="170" width="6" height="6" fill="#44aaff"/>
                <text x="120" y="176" fill="#888" font-size="5">희귀</text>
            </svg>`, demo: 'rpg-inventory' },
            fps: { title: 'FPS 인벤토리', description: '무기, 장비 슬롯 중심의 로드아웃 시스템', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">FPS Loadout System</text>
                <!-- Primary weapon slot -->
                <rect x="30" y="35" width="200" height="50" fill="#111" stroke="#ff4444" stroke-width="1"/>
                <text x="40" y="50" fill="#888" font-size="6" font-family="monospace">PRIMARY</text>
                <text x="130" y="66" fill="#fff" font-size="14" text-anchor="middle">🔫</text>
                <text x="200" y="50" fill="#ff4444" font-size="7" text-anchor="end" font-family="monospace">AK-47</text>
                <!-- Secondary -->
                <rect x="30" y="92" width="200" height="40" fill="#111" stroke="#444" stroke-width="0.5"/>
                <text x="40" y="106" fill="#888" font-size="6" font-family="monospace">SECONDARY</text>
                <text x="130" y="118" fill="#888" font-size="10" text-anchor="middle">🔫</text>
                <!-- Utility slots -->
                <rect x="30" y="140" width="40" height="30" fill="#111" stroke="#444" stroke-width="0.5"/>
                <text x="50" y="159" fill="#888" font-size="10" text-anchor="middle">💣</text>
                <rect x="76" y="140" width="40" height="30" fill="#111" stroke="#444" stroke-width="0.5"/>
                <text x="96" y="159" fill="#888" font-size="10" text-anchor="middle">🩹</text>
                <rect x="122" y="140" width="40" height="30" fill="#111" stroke="#444" stroke-width="0.5"/>
                <!-- Attachment slots -->
                <rect x="250" y="35" width="80" height="135" fill="#0a0a0a" stroke="#333" stroke-width="0.5"/>
                <text x="260" y="50" fill="#666" font-size="6" font-family="monospace">ATTACH</text>
                <rect x="258" y="58" width="60" height="22" fill="#111" stroke="#333" stroke-width="0.5"/>
                <text x="288" y="73" fill="#555" font-size="6" text-anchor="middle">Scope</text>
                <rect x="258" y="86" width="60" height="22" fill="#111" stroke="#333" stroke-width="0.5"/>
                <text x="288" y="101" fill="#555" font-size="6" text-anchor="middle">Barrel</text>
                <rect x="258" y="114" width="60" height="22" fill="#111" stroke="#333" stroke-width="0.5"/>
                <text x="288" y="129" fill="#555" font-size="6" text-anchor="middle">Grip</text>
            </svg>`, demo: 'fps-inventory' },
            tps: { title: 'TPS 인벤토리', description: '캐릭터 장비 + 소지품 하이브리드 인벤토리', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">TPS Character Equipment</text>
                <!-- Character silhouette center -->
                <rect x="130" y="30" width="100" height="150" rx="12" fill="rgba(68,170,255,0.03)" stroke="rgba(68,170,255,0.1)" stroke-width="1"/>
                <text x="180" y="100" fill="rgba(68,170,255,0.3)" font-size="40" text-anchor="middle">🧑</text>
                <!-- Equip slots around character -->
                <rect x="40" y="40" width="40" height="40" rx="8" fill="rgba(68,170,255,0.04)" stroke="rgba(68,170,255,0.2)" stroke-width="1"/><text x="60" y="65" fill="#44aaff" font-size="12" text-anchor="middle">⚔</text>
                <rect x="40" y="90" width="40" height="40" rx="8" fill="rgba(68,170,255,0.04)" stroke="rgba(68,170,255,0.2)" stroke-width="1"/><text x="60" y="115" fill="#44aaff" font-size="12" text-anchor="middle">🛡</text>
                <rect x="40" y="140" width="40" height="40" rx="8" fill="rgba(68,170,255,0.04)" stroke="rgba(68,170,255,0.15)" stroke-width="1"/><text x="60" y="165" fill="#44aaff" font-size="12" text-anchor="middle">👟</text>
                <rect x="280" y="40" width="40" height="40" rx="8" fill="rgba(68,170,255,0.04)" stroke="rgba(68,170,255,0.2)" stroke-width="1"/><text x="300" y="65" fill="#44aaff" font-size="12" text-anchor="middle">👕</text>
                <rect x="280" y="90" width="40" height="40" rx="8" fill="rgba(68,170,255,0.04)" stroke="rgba(68,170,255,0.15)" stroke-width="1"/><text x="300" y="115" fill="#44aaff" font-size="12" text-anchor="middle">💍</text>
                <!-- Lines connecting -->
                <line x1="80" y1="60" x2="130" y2="60" stroke="rgba(68,170,255,0.1)" stroke-width="0.5" stroke-dasharray="3"/>
                <line x1="80" y1="110" x2="130" y2="100" stroke="rgba(68,170,255,0.1)" stroke-width="0.5" stroke-dasharray="3"/>
                <line x1="280" y1="60" x2="230" y2="60" stroke="rgba(68,170,255,0.1)" stroke-width="0.5" stroke-dasharray="3"/>
            </svg>`, demo: 'tps-inventory' },
            quarter: { title: '쿼터뷰 인벤토리', description: '자원 목록, 아이템 큐 형태의 전략 인벤토리', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">Quarter-View Resource Panel</text>
                <!-- Resource list -->
                <rect x="30" y="32" width="140" height="24" rx="4" fill="rgba(68,255,136,0.03)" stroke="rgba(68,255,136,0.1)" stroke-width="0.5"/>
                <text x="40" y="48" fill="#FFD700" font-size="8">💰 1,250</text><text x="100" y="48" fill="#44aaff" font-size="8">💎 340</text>
                <rect x="30" y="60" width="140" height="24" rx="4" fill="rgba(68,255,136,0.03)" stroke="rgba(68,255,136,0.1)" stroke-width="0.5"/>
                <text x="40" y="76" fill="#44ff88" font-size="8">🌲 890</text><text x="100" y="76" fill="#ff8844" font-size="8">🔨 560</text>
                <!-- Production queue -->
                <text x="30" y="100" fill="#888" font-size="7">생산 큐</text>
                <rect x="30" y="106" width="36" height="36" rx="4" fill="rgba(68,255,136,0.08)" stroke="rgba(68,255,136,0.2)" stroke-width="1"/><text x="48" y="129" fill="#44ff88" font-size="12" text-anchor="middle">🗡</text>
                <rect x="70" y="106" width="36" height="36" rx="4" fill="rgba(68,255,136,0.04)" stroke="rgba(68,255,136,0.1)" stroke-width="0.5"/><text x="88" y="129" fill="rgba(68,255,136,0.4)" font-size="12" text-anchor="middle">🛡</text>
                <rect x="110" y="106" width="36" height="36" rx="4" fill="rgba(68,255,136,0.04)" stroke="rgba(68,255,136,0.1)" stroke-width="0.5"/><text x="128" y="129" fill="rgba(68,255,136,0.3)" font-size="12" text-anchor="middle">🏹</text>
                <!-- Progress on first -->
                <rect x="30" y="144" width="36" height="4" rx="1" fill="rgba(68,255,136,0.1)"/>
                <rect x="30" y="144" width="24" height="4" rx="1" fill="rgba(68,255,136,0.5)"/>
                <!-- Annotations -->
                <text x="200" y="48" fill="#666" font-size="7">자원 현황 표시</text>
                <text x="200" y="76" fill="#666" font-size="7">아이콘 + 수치 병렬</text>
                <text x="200" y="120" fill="#666" font-size="7">생산 큐 (FIFO)</text>
                <text x="200" y="148" fill="#666" font-size="7">첫 번째에 진행도 바</text>
            </svg>`, demo: 'quarter-inventory' }
        }
    },

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
        relatedLaws: ['serial-position', 'hicks-law', 'jakobs-law', 'consistency'],
        genres: {
            rpg: { title: 'RPG 내비게이션', description: '탭 메뉴, 월드맵, 퀘스트 로그 내비게이션', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a2e"/>
                <!-- 하단 탭 메뉴 바 -->
                <rect x="10" y="140" width="280" height="32" rx="4" fill="#2a2a4a" stroke="#ffd700" stroke-width="1"/>
                <!-- 탭 아이템들 -->
                <rect x="16" y="144" width="44" height="24" rx="3" fill="#ffd700" opacity="0.3"/>
                <text x="38" y="160" fill="#ffd700" font-size="7" text-anchor="middle">캐릭터</text>
                <rect x="66" y="144" width="44" height="24" rx="3" fill="#3a3a5a"/>
                <text x="88" y="160" fill="#aaa" font-size="7" text-anchor="middle">인벤토리</text>
                <rect x="116" y="144" width="44" height="24" rx="3" fill="#3a3a5a"/>
                <text x="138" y="160" fill="#aaa" font-size="7" text-anchor="middle">퀘스트</text>
                <rect x="166" y="144" width="44" height="24" rx="3" fill="#3a3a5a"/>
                <text x="188" y="160" fill="#aaa" font-size="7" text-anchor="middle">월드맵</text>
                <rect x="216" y="144" width="44" height="24" rx="3" fill="#3a3a5a"/>
                <text x="238" y="160" fill="#aaa" font-size="7" text-anchor="middle">길드</text>
                <!-- 활성 탭 인디케이터 -->
                <rect x="16" y="142" width="44" height="2" fill="#ffd700"/>
                <!-- 상단 서브 탭 -->
                <rect x="10" y="8" width="280" height="20" rx="3" fill="#2a2a4a"/>
                <text x="40" y="21" fill="#ffd700" font-size="6" text-anchor="middle">스탯</text>
                <text x="90" y="21" fill="#888" font-size="6" text-anchor="middle">장비</text>
                <text x="140" y="21" fill="#888" font-size="6" text-anchor="middle">스킬</text>
                <text x="190" y="21" fill="#888" font-size="6" text-anchor="middle">칭호</text>
                <line x1="20" y1="26" x2="60" y2="26" stroke="#ffd700" stroke-width="1.5"/>
                <!-- 콘텐츠 영역 -->
                <rect x="10" y="34" width="280" height="100" rx="4" fill="#2a2a4a" opacity="0.5" stroke-dasharray="4"/>
                <text x="150" y="88" fill="#666" font-size="8" text-anchor="middle">콘텐츠 영역</text>
                <!-- 치수 표시 -->
                <text x="150" y="178" fill="#ffd700" font-size="5" text-anchor="middle">메인 탭 5개 + 서브 탭 → 2단계 계층 내비게이션</text>
            </svg>`, demo: 'rpg-nav' },
            fps: { title: 'FPS 내비게이션', description: '로비 메뉴, 매치 설정, 상점 내비게이션', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a1a"/>
                <!-- 상단 메인 내비 바 -->
                <rect x="0" y="0" width="300" height="28" fill="#333"/>
                <text x="20" y="18" fill="#ff4444" font-size="8" font-weight="bold">FPS ARENA</text>
                <!-- 메뉴 아이템 (가로 배치) -->
                <rect x="90" y="6" width="36" height="16" rx="2" fill="#ff4444"/>
                <text x="108" y="17" fill="#fff" font-size="6" text-anchor="middle">대전</text>
                <text x="148" y="17" fill="#aaa" font-size="6" text-anchor="middle">무기고</text>
                <text x="188" y="17" fill="#aaa" font-size="6" text-anchor="middle">상점</text>
                <text x="228" y="17" fill="#aaa" font-size="6" text-anchor="middle">배틀패스</text>
                <text x="268" y="17" fill="#aaa" font-size="6" text-anchor="middle">설정</text>
                <!-- 매치 설정 영역 -->
                <rect x="10" y="36" width="180" height="100" rx="4" fill="#2a2a2a"/>
                <text x="100" y="52" fill="#ff4444" font-size="7" text-anchor="middle">게임 모드 선택</text>
                <rect x="20" y="58" width="70" height="30" rx="3" fill="#ff4444" opacity="0.2" stroke="#ff4444" stroke-width="1"/>
                <text x="55" y="76" fill="#ff4444" font-size="6" text-anchor="middle">팀 데스매치</text>
                <rect x="100" y="58" width="70" height="30" rx="3" fill="#333"/>
                <text x="135" y="76" fill="#aaa" font-size="6" text-anchor="middle">폭탄 해제</text>
                <rect x="20" y="96" width="70" height="30" rx="3" fill="#333"/>
                <text x="55" y="114" fill="#aaa" font-size="6" text-anchor="middle">프리포올</text>
                <rect x="100" y="96" width="70" height="30" rx="3" fill="#333"/>
                <text x="135" y="114" fill="#aaa" font-size="6" text-anchor="middle">랭크</text>
                <!-- 사이드 패널 -->
                <rect x="200" y="36" width="90" height="100" rx="4" fill="#2a2a2a"/>
                <text x="245" y="52" fill="#ccc" font-size="6" text-anchor="middle">친구 목록</text>
                <rect x="208" y="58" width="74" height="12" rx="2" fill="#333"/>
                <circle cx="216" cy="64" r="3" fill="#44ff44"/>
                <text x="235" y="67" fill="#aaa" font-size="5">Player1</text>
                <rect x="208" y="74" width="74" height="12" rx="2" fill="#333"/>
                <circle cx="216" cy="80" r="3" fill="#44ff44"/>
                <text x="235" y="83" fill="#aaa" font-size="5">Player2</text>
                <rect x="208" y="90" width="74" height="12" rx="2" fill="#333"/>
                <circle cx="216" cy="96" r="3" fill="#888"/>
                <text x="235" y="99" fill="#666" font-size="5">Player3</text>
                <!-- 하단 대기열 버튼 -->
                <rect x="10" y="144" width="280" height="28" rx="4" fill="#ff4444"/>
                <text x="150" y="162" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">대전 시작</text>
                <text x="150" y="178" fill="#ff4444" font-size="5" text-anchor="middle">수평 탑 네비 + 카드형 모드 선택 → 빠른 진입</text>
            </svg>`, demo: 'fps-nav' },
            tps: { title: 'TPS 내비게이션', description: '허브 월드, 미션 선택, 장비 화면 내비게이션', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1628"/>
                <!-- 좌측 세로 아이콘 네비 -->
                <rect x="0" y="0" width="36" height="180" fill="#0f1f3a"/>
                <rect x="6" y="8" width="24" height="24" rx="6" fill="#44aaff" opacity="0.2" stroke="#44aaff" stroke-width="1"/>
                <text x="18" y="24" fill="#44aaff" font-size="7" text-anchor="middle">🏠</text>
                <rect x="6" y="40" width="24" height="24" rx="6" fill="transparent"/>
                <text x="18" y="56" fill="#668" font-size="7" text-anchor="middle">🎯</text>
                <rect x="6" y="72" width="24" height="24" rx="6" fill="transparent"/>
                <text x="18" y="88" fill="#668" font-size="7" text-anchor="middle">🎒</text>
                <rect x="6" y="104" width="24" height="24" rx="6" fill="transparent"/>
                <text x="18" y="120" fill="#668" font-size="7" text-anchor="middle">⚙</text>
                <rect x="6" y="136" width="24" height="24" rx="6" fill="transparent"/>
                <text x="18" y="152" fill="#668" font-size="7" text-anchor="middle">👥</text>
                <!-- 활성 인디케이터 -->
                <rect x="0" y="8" width="3" height="24" rx="1" fill="#44aaff"/>
                <!-- 메인 콘텐츠: 미션 선택 -->
                <rect x="44" y="8" width="248" height="24" rx="4" fill="#0f1f3a"/>
                <text x="60" y="24" fill="#44aaff" font-size="8">허브 > 미션 선택</text>
                <!-- 브레드크럼 -->
                <text x="200" y="24" fill="#446" font-size="6">허브 / 구역 A / 미션</text>
                <!-- 미션 카드 그리드 -->
                <rect x="44" y="40" width="118" height="60" rx="4" fill="#0f1f3a" stroke="#44aaff" stroke-width="1"/>
                <text x="103" y="62" fill="#44aaff" font-size="7" text-anchor="middle">메인 미션 #7</text>
                <text x="103" y="76" fill="#668" font-size="5" text-anchor="middle">난이도: ★★★☆☆</text>
                <rect x="54" y="84" width="40" height="10" rx="2" fill="#44aaff"/>
                <text x="74" y="92" fill="#fff" font-size="5" text-anchor="middle">시작</text>
                <rect x="174" y="40" width="118" height="60" rx="4" fill="#0f1f3a"/>
                <text x="233" y="62" fill="#88a" font-size="7" text-anchor="middle">서브 미션 #3</text>
                <text x="233" y="76" fill="#668" font-size="5" text-anchor="middle">난이도: ★★☆☆☆</text>
                <rect x="44" y="108" width="118" height="60" rx="4" fill="#0f1f3a"/>
                <text x="103" y="130" fill="#88a" font-size="7" text-anchor="middle">데일리 챌린지</text>
                <text x="103" y="144" fill="#668" font-size="5" text-anchor="middle">보상: 프리미엄 크레딧</text>
                <rect x="174" y="108" width="118" height="60" rx="4" fill="#0f1f3a" stroke-dasharray="4" stroke="#446"/>
                <text x="233" y="142" fill="#446" font-size="7" text-anchor="middle">잠김 (Lv.30)</text>
                <text x="150" y="178" fill="#44aaff" font-size="5" text-anchor="middle">아이콘 사이드바 + 브레드크럼 + 카드 그리드 내비게이션</text>
            </svg>`, demo: 'tps-nav' },
            quarter: { title: '쿼터뷰 내비게이션', description: '커맨드 팔레트, 미니맵, 기술 트리 내비게이션', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1a0a"/>
                <!-- 상단 리소스/메뉴 바 -->
                <rect x="0" y="0" width="300" height="22" fill="#1a2a1a"/>
                <text x="10" y="14" fill="#44ff88" font-size="6">🪙 1,240</text>
                <text x="60" y="14" fill="#44ff88" font-size="6">🪵 890</text>
                <text x="110" y="14" fill="#44ff88" font-size="6">⛏ 450</text>
                <text x="160" y="14" fill="#44ff88" font-size="6">🍖 320</text>
                <!-- 우측 메뉴 버튼 -->
                <text x="230" y="14" fill="#aaa" font-size="6">외교</text>
                <text x="260" y="14" fill="#aaa" font-size="6">기술</text>
                <text x="285" y="14" fill="#aaa" font-size="6">⚙</text>
                <!-- 좌측 빌드 메뉴 패널 -->
                <rect x="4" y="28" width="60" height="120" rx="3" fill="#1a2a1a"/>
                <text x="34" y="42" fill="#44ff88" font-size="6" text-anchor="middle">건설</text>
                <line x1="8" y1="46" x2="60" y2="46" stroke="#2a3a2a"/>
                <rect x="8" y="50" width="52" height="18" rx="2" fill="#44ff88" opacity="0.2" stroke="#44ff88" stroke-width="0.5"/>
                <text x="34" y="62" fill="#44ff88" font-size="5" text-anchor="middle">주거 시설</text>
                <rect x="8" y="72" width="52" height="18" rx="2" fill="#1a3a1a"/>
                <text x="34" y="84" fill="#8a8" font-size="5" text-anchor="middle">자원 시설</text>
                <rect x="8" y="94" width="52" height="18" rx="2" fill="#1a3a1a"/>
                <text x="34" y="106" fill="#8a8" font-size="5" text-anchor="middle">군사 시설</text>
                <rect x="8" y="116" width="52" height="18" rx="2" fill="#1a3a1a"/>
                <text x="34" y="128" fill="#8a8" font-size="5" text-anchor="middle">방어 시설</text>
                <!-- 게임 영역 (중앙) -->
                <rect x="70" y="28" width="160" height="120" rx="3" fill="#0a1a0a" stroke="#2a3a2a" stroke-dasharray="4"/>
                <text x="150" y="92" fill="#2a3a2a" font-size="8" text-anchor="middle">게임 뷰</text>
                <!-- 우측 유닛/정보 패널 -->
                <rect x="236" y="28" width="60" height="120" rx="3" fill="#1a2a1a"/>
                <text x="266" y="42" fill="#44ff88" font-size="6" text-anchor="middle">선택 유닛</text>
                <line x1="240" y1="46" x2="292" y2="46" stroke="#2a3a2a"/>
                <rect x="248" y="52" width="28" height="28" rx="2" fill="#2a3a2a"/>
                <text x="262" y="70" fill="#8a8" font-size="6" text-anchor="middle">🗡</text>
                <text x="266" y="92" fill="#ccc" font-size="5" text-anchor="middle">기사 x3</text>
                <text x="266" y="102" fill="#8a8" font-size="5" text-anchor="middle">HP: 120</text>
                <text x="266" y="112" fill="#8a8" font-size="5" text-anchor="middle">ATK: 45</text>
                <!-- 하단 커맨드 바 -->
                <rect x="70" y="152" width="160" height="24" rx="3" fill="#1a2a1a"/>
                <rect x="76" y="156" width="20" height="16" rx="2" fill="#2a3a2a"/>
                <text x="86" y="167" fill="#8a8" font-size="5" text-anchor="middle">이동</text>
                <rect x="100" y="156" width="20" height="16" rx="2" fill="#2a3a2a"/>
                <text x="110" y="167" fill="#8a8" font-size="5" text-anchor="middle">공격</text>
                <rect x="124" y="156" width="20" height="16" rx="2" fill="#2a3a2a"/>
                <text x="134" y="167" fill="#8a8" font-size="5" text-anchor="middle">방어</text>
                <rect x="148" y="156" width="20" height="16" rx="2" fill="#2a3a2a"/>
                <text x="158" y="167" fill="#8a8" font-size="5" text-anchor="middle">순찰</text>
                <text x="150" y="178" fill="#44ff88" font-size="5" text-anchor="middle">3패널 레이아웃: 빌드메뉴 | 게임뷰 | 정보패널 + 커맨드바</text>
            </svg>`, demo: 'quarter-nav' }
        }
    },

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
        relatedLaws: ['doherty-threshold', 'feedback-principle', 'goal-gradient', 'zeigarnik-effect'],
        genres: {
            rpg: { title: 'RPG 프로그레스', description: 'HP/MP/XP 바, 캐스팅 바, 버프 타이머', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">RPG Progress Bars</text>
                <!-- HP Bar -->
                <text x="35" y="46" fill="#ff5555" font-size="8" font-weight="bold">HP</text>
                <rect x="55" y="38" width="200" height="14" rx="3" fill="rgba(255,85,85,0.1)" stroke="rgba(255,85,85,0.2)" stroke-width="0.5"/>
                <rect x="56" y="39" width="150" height="12" rx="2" fill="rgba(255,85,85,0.6)"/>
                <rect x="56" y="39" width="150" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
                <text x="265" y="49" fill="#888" font-size="7" font-family="monospace">750/1000</text>
                <!-- MP Bar -->
                <text x="35" y="72" fill="#5555ff" font-size="8" font-weight="bold">MP</text>
                <rect x="55" y="64" width="200" height="14" rx="3" fill="rgba(85,85,255,0.1)" stroke="rgba(85,85,255,0.2)" stroke-width="0.5"/>
                <rect x="56" y="65" width="128" height="12" rx="2" fill="rgba(85,85,255,0.6)"/>
                <text x="265" y="75" fill="#888" font-size="7" font-family="monospace">320/500</text>
                <!-- XP Bar (wider, thinner) -->
                <text x="35" y="98" fill="#FFD700" font-size="8" font-weight="bold">EXP</text>
                <rect x="55" y="92" width="250" height="8" rx="2" fill="rgba(255,215,0,0.08)"/>
                <rect x="55" y="92" width="112" height="8" rx="2" fill="rgba(255,215,0,0.4)"/>
                <text x="315" y="99" fill="#FFD700" font-size="6">Lv.42</text>
                <!-- Casting Bar -->
                <text x="35" y="124" fill="#888" font-size="7">캐스팅</text>
                <rect x="80" y="116" width="180" height="12" rx="2" fill="rgba(255,165,0,0.08)" stroke="rgba(255,165,0,0.2)" stroke-width="0.5"/>
                <rect x="81" y="117" width="100" height="10" rx="1" fill="rgba(255,165,0,0.4)"/>
                <text x="170" y="125" fill="rgba(255,255,255,0.5)" font-size="6" text-anchor="middle">🔥 파이어볼</text>
                <!-- Annotations -->
                <text x="35" y="148" fill="#666" font-size="6">→ 그라디언트 + 하이라이트로 입체감</text>
                <text x="35" y="158" fill="#666" font-size="6">→ 수치 라벨 항상 표시</text>
                <text x="35" y="168" fill="#666" font-size="6">→ 변화량 애니메이션 (0.6s ease)</text>
            </svg>`, demo: 'rpg-progress' },
            fps: { title: 'FPS 프로그레스', description: '체력, 실드, 재장전 게이지', wireframe: `<svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="320" height="160" rx="8" stroke="#333" stroke-width="1" stroke-dasharray="4"/>
                <text x="30" y="16" fill="#666" font-size="9" font-family="monospace">FPS Progress Bars</text>
                <!-- Health (flat, no radius) -->
                <text x="35" y="46" fill="#ff4444" font-size="7" font-family="monospace">HEALTH</text>
                <rect x="90" y="38" width="150" height="8" fill="rgba(255,68,68,0.1)"/>
                <rect x="90" y="38" width="127" height="8" fill="rgba(255,68,68,0.7)"/>
                <text x="250" y="46" fill="#ff4444" font-size="8" font-family="monospace" font-weight="bold">85</text>
                <!-- Shield -->
                <text x="35" y="66" fill="#44aaff" font-size="7" font-family="monospace">SHIELD</text>
                <rect x="90" y="58" width="150" height="8" fill="rgba(68,170,255,0.1)"/>
                <rect x="90" y="58" width="75" height="8" fill="rgba(68,170,255,0.6)"/>
                <text x="250" y="66" fill="#44aaff" font-size="8" font-family="monospace" font-weight="bold">50</text>
                <!-- Reload gauge -->
                <text x="35" y="96" fill="#888" font-size="7" font-family="monospace">RELOAD</text>
                <rect x="90" y="88" width="150" height="6" fill="rgba(255,255,255,0.05)"/>
                <rect x="90" y="88" width="100" height="6" fill="rgba(255,255,255,0.3)"/>
                <!-- Annotations -->
                <text x="35" y="122" fill="#666" font-size="6">→ border-radius: 0 (각진 스타일)</text>
                <text x="35" y="134" fill="#666" font-size="6">→ 모노스페이스 숫자 표시</text>
                <text x="35" y="146" fill="#666" font-size="6">→ 위험 시 빨간 깜빡임</text>
                <text x="35" y="158" fill="#666" font-size="6">→ 재장전은 일시적 진행 바</text>
            </svg>`, demo: 'fps-progress' },
            tps: { title: 'TPS 프로그레스', description: '체력, 스태미나, 능력 게이지', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1628"/>
                <!-- 체력 바 (글래스모피즘) -->
                <text x="20" y="20" fill="#44aaff" font-size="7">체력 (Health)</text>
                <rect x="20" y="26" width="200" height="14" rx="7" fill="#1a2a4a" opacity="0.6"/>
                <rect x="20" y="26" width="140" height="14" rx="7" fill="#44aaff" opacity="0.5"/>
                <rect x="20" y="26" width="140" height="7" rx="4" fill="#44aaff" opacity="0.3"/>
                <text x="120" y="36" fill="#fff" font-size="7" text-anchor="middle">700 / 1000</text>
                <text x="226" y="36" fill="#44aaff" font-size="6">70%</text>
                <!-- 스태미나 바 -->
                <text x="20" y="56" fill="#ffaa44" font-size="7">스태미나 (Stamina)</text>
                <rect x="20" y="62" width="200" height="10" rx="5" fill="#1a2a4a" opacity="0.6"/>
                <rect x="20" y="62" width="90" height="10" rx="5" fill="#ffaa44" opacity="0.5"/>
                <text x="120" y="70" fill="#fff" font-size="6" text-anchor="middle">45 / 100</text>
                <!-- 능력 게이지 (원형) -->
                <text x="20" y="92" fill="#ff44aa" font-size="7">궁극기 (Ultimate)</text>
                <circle cx="60" cy="120" r="24" fill="none" stroke="#1a2a4a" stroke-width="5"/>
                <circle cx="60" cy="120" r="24" fill="none" stroke="#ff44aa" stroke-width="5" stroke-dasharray="113" stroke-dashoffset="30" transform="rotate(-90 60 120)"/>
                <text x="60" y="124" fill="#ff44aa" font-size="10" text-anchor="middle">80%</text>
                <!-- 쉴드 오버레이 표시 -->
                <text x="120" y="104" fill="#44aaff" font-size="6">쉴드 오버레이</text>
                <rect x="120" y="110" width="160" height="14" rx="7" fill="#1a2a4a" opacity="0.6"/>
                <rect x="120" y="110" width="100" height="14" rx="7" fill="#44aaff" opacity="0.3" stroke="#44aaff" stroke-width="0.5" stroke-dasharray="3"/>
                <rect x="120" y="110" width="60" height="14" rx="7" fill="#44aaff" opacity="0.4"/>
                <text x="200" y="120" fill="#fff" font-size="5" text-anchor="middle">체력 위에 쉴드 레이어</text>
                <!-- 버프/디버프 아이콘 -->
                <text x="120" y="142" fill="#aaa" font-size="6">활성 효과</text>
                <rect x="120" y="148" width="16" height="16" rx="3" fill="#44ff44" opacity="0.3"/>
                <text x="128" y="160" fill="#44ff44" font-size="6" text-anchor="middle">↑</text>
                <rect x="140" y="148" width="16" height="16" rx="3" fill="#ff4444" opacity="0.3"/>
                <text x="148" y="160" fill="#ff4444" font-size="6" text-anchor="middle">🔥</text>
                <rect x="160" y="148" width="16" height="16" rx="3" fill="#44aaff" opacity="0.3"/>
                <text x="168" y="160" fill="#44aaff" font-size="6" text-anchor="middle">❄</text>
                <text x="150" y="178" fill="#44aaff" font-size="5" text-anchor="middle">글래스모피즘 바 + 원형 궁극기 + 쉴드 오버레이 + 버프 아이콘</text>
            </svg>`, demo: 'tps-progress' },
            quarter: { title: '쿼터뷰 프로그레스', description: '건설 진행도, 연구 진행도, 유닛 생산 큐', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1a0a"/>
                <!-- 건설 진행 큐 -->
                <text x="15" y="16" fill="#44ff88" font-size="7" font-weight="bold">건설 진행 큐</text>
                <rect x="15" y="22" width="130" height="36" rx="3" fill="#1a2a1a" stroke="#44ff88" stroke-width="0.5"/>
                <rect x="20" y="26" width="24" height="24" rx="2" fill="#2a3a2a"/>
                <text x="32" y="42" fill="#44ff88" font-size="6" text-anchor="middle">🏠</text>
                <rect x="48" y="30" width="80" height="6" rx="3" fill="#1a3a1a"/>
                <rect x="48" y="30" width="52" height="6" rx="3" fill="#44ff88" opacity="0.6"/>
                <text x="48" y="46" fill="#8a8" font-size="5">주거시설 Lv.3 → Lv.4</text>
                <text x="130" y="46" fill="#44ff88" font-size="5">65%</text>
                <text x="130" y="28" fill="#8a8" font-size="5">2:35</text>
                <!-- 두번째 건설 -->
                <rect x="15" y="62" width="130" height="36" rx="3" fill="#1a2a1a"/>
                <rect x="20" y="66" width="24" height="24" rx="2" fill="#2a3a2a"/>
                <text x="32" y="82" fill="#888" font-size="6" text-anchor="middle">⚔</text>
                <rect x="48" y="70" width="80" height="6" rx="3" fill="#1a3a1a"/>
                <rect x="48" y="70" width="24" height="6" rx="3" fill="#888" opacity="0.4"/>
                <text x="48" y="86" fill="#666" font-size="5">병영 Lv.1 → Lv.2</text>
                <text x="130" y="86" fill="#888" font-size="5">30%</text>
                <text x="130" y="68" fill="#888" font-size="5">대기중</text>
                <!-- 연구 진행 -->
                <text x="155" y="16" fill="#44ff88" font-size="7" font-weight="bold">연구 진행</text>
                <rect x="155" y="22" width="135" height="36" rx="3" fill="#1a2a1a" stroke="#44ff88" stroke-width="0.5"/>
                <rect x="160" y="26" width="24" height="24" rx="2" fill="#2a3a2a"/>
                <text x="172" y="42" fill="#44ff88" font-size="6" text-anchor="middle">📜</text>
                <rect x="188" y="30" width="86" height="6" rx="3" fill="#1a3a1a"/>
                <rect x="188" y="30" width="70" height="6" rx="3" fill="#ffaa44" opacity="0.6"/>
                <text x="188" y="46" fill="#8a8" font-size="5">공성 기술 II</text>
                <text x="278" y="46" fill="#ffaa44" font-size="5">82%</text>
                <text x="278" y="28" fill="#8a8" font-size="5">0:45</text>
                <!-- 유닛 생산 큐 -->
                <text x="15" y="112" fill="#44ff88" font-size="7" font-weight="bold">유닛 생산 큐</text>
                <rect x="15" y="118" width="270" height="30" rx="3" fill="#1a2a1a"/>
                <!-- 생산 슬롯들 -->
                <rect x="20" y="122" width="22" height="22" rx="2" fill="#44ff88" opacity="0.2" stroke="#44ff88" stroke-width="0.5"/>
                <text x="31" y="137" fill="#44ff88" font-size="6" text-anchor="middle">🗡</text>
                <rect x="46" y="122" width="22" height="22" rx="2" fill="#2a3a2a"/>
                <text x="57" y="137" fill="#888" font-size="6" text-anchor="middle">🗡</text>
                <rect x="72" y="122" width="22" height="22" rx="2" fill="#2a3a2a"/>
                <text x="83" y="137" fill="#888" font-size="6" text-anchor="middle">🏹</text>
                <rect x="98" y="122" width="22" height="22" rx="2" fill="#2a3a2a"/>
                <text x="109" y="137" fill="#888" font-size="6" text-anchor="middle">🏹</text>
                <rect x="124" y="122" width="22" height="22" rx="2" fill="#2a3a2a"/>
                <text x="135" y="137" fill="#888" font-size="6" text-anchor="middle">🛡</text>
                <!-- 생산 진행 바 (첫 유닛) -->
                <rect x="20" y="144" width="22" height="3" rx="1" fill="#1a3a1a"/>
                <rect x="20" y="144" width="15" height="3" rx="1" fill="#44ff88"/>
                <!-- 빈 슬롯들 -->
                <rect x="156" y="122" width="22" height="22" rx="2" fill="#1a3a1a" stroke-dasharray="3" stroke="#2a3a2a"/>
                <rect x="182" y="122" width="22" height="22" rx="2" fill="#1a3a1a" stroke-dasharray="3" stroke="#2a3a2a"/>
                <text x="230" y="137" fill="#666" font-size="5">큐: 5/7</text>
                <text x="150" y="178" fill="#44ff88" font-size="5" text-anchor="middle">건설 큐 + 연구 트래커 + 유닛 생산 큐 (RTS 스타일 진행도)</text>
            </svg>`, demo: 'quarter-progress' }
        }
    },

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
        relatedLaws: ['progressive-disclosure', 'miller-law', 'doherty-threshold', 'law-pragnanz'],
        genres: {
            rpg: { title: 'RPG 툴팁', description: '아이템 등급, 스탯, 세트 효과를 보여주는 상세 툴팁', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a2e"/>
                <!-- 아이템 슬롯 (호버 대상) -->
                <rect x="20" y="80" width="32" height="32" rx="4" fill="#2a2a4a" stroke="#ffd700" stroke-width="1.5"/>
                <text x="36" y="100" fill="#ffd700" font-size="8" text-anchor="middle">🗡</text>
                <!-- 툴팁 박스 -->
                <rect x="60" y="8" width="180" height="164" rx="6" fill="#1a1a2e" stroke="#ffd700" stroke-width="1"/>
                <!-- 등급 헤더 바 -->
                <rect x="60" y="8" width="180" height="24" rx="6" fill="#ffd700" opacity="0.15"/>
                <rect x="63" y="31" width="174" height="0.5" fill="#ffd700" opacity="0.3"/>
                <!-- 아이템 이름 (등급 색상) -->
                <text x="70" y="24" fill="#ffd700" font-size="8" font-weight="bold">전설 — 용의 분노</text>
                <text x="230" y="24" fill="#ffd700" font-size="6">Lv.60</text>
                <!-- 아이템 타입 -->
                <text x="70" y="44" fill="#aaa" font-size="6">양손검 | 공격속도: 2.4</text>
                <!-- 메인 스탯 -->
                <line x1="70" y1="50" x2="230" y2="50" stroke="#333" stroke-width="0.5"/>
                <text x="70" y="62" fill="#44ff44" font-size="7">⚔ 공격력: 1,240 ~ 1,560</text>
                <text x="70" y="74" fill="#44aaff" font-size="7">🛡 방어 관통: +320</text>
                <text x="70" y="86" fill="#ff8844" font-size="7">🔥 화염 피해: +180</text>
                <!-- 구분선 -->
                <line x1="70" y1="92" x2="230" y2="92" stroke="#333" stroke-width="0.5"/>
                <!-- 추가 옵션 -->
                <text x="70" y="104" fill="#aaa" font-size="6">◆ 치명타 확률 +8.5%</text>
                <text x="70" y="116" fill="#aaa" font-size="6">◆ 공격 시 3% 확률로 화염 폭발</text>
                <text x="70" y="128" fill="#aaa" font-size="6">◆ 체력 +450</text>
                <!-- 세트 효과 -->
                <line x1="70" y1="134" x2="230" y2="134" stroke="#333" stroke-width="0.5"/>
                <text x="70" y="146" fill="#44ff44" font-size="6">🔗 용의 유산 (2/4)</text>
                <text x="78" y="158" fill="#44ff44" font-size="5">(2) 세트: 화염 피해 +15%</text>
                <text x="78" y="168" fill="#666" font-size="5">(4) 세트: 처치 시 화염 폭발</text>
                <!-- 화살표 -->
                <polygon points="60,96 52,92 52,100" fill="#1a1a2e" stroke="#ffd700" stroke-width="1"/>
                <!-- 설명 -->
                <text x="254" y="178" fill="#ffd700" font-size="5" text-anchor="middle">등급 컬러 + 스탯 계층 + 세트 효과</text>
            </svg>`, demo: 'rpg-tooltips' },
            fps: { title: 'FPS 툴팁', description: '무기 스펙, 부착물 효과를 보여주는 간결한 툴팁', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a1a"/>
                <!-- 무기 슬롯 -->
                <rect x="20" y="70" width="40" height="40" rx="2" fill="#333" stroke="#ff4444" stroke-width="1"/>
                <text x="40" y="94" fill="#ff4444" font-size="9" text-anchor="middle">🔫</text>
                <!-- 간결한 툴팁 -->
                <rect x="68" y="20" width="160" height="140" rx="4" fill="#2a2a2a" stroke="#ff4444" stroke-width="1"/>
                <!-- 무기 이름 -->
                <text x="78" y="38" fill="#ff4444" font-size="8" font-weight="bold">AK-47 | 돌격소총</text>
                <line x1="78" y1="44" x2="218" y2="44" stroke="#444" stroke-width="0.5"/>
                <!-- 핵심 스펙 (수치 그리드) -->
                <text x="78" y="58" fill="#aaa" font-size="6">데미지</text>
                <text x="138" y="58" fill="#fff" font-size="7">36</text>
                <rect x="160" y="52" width="50" height="4" rx="2" fill="#333"/>
                <rect x="160" y="52" width="38" height="4" rx="2" fill="#ff4444"/>
                <text x="78" y="72" fill="#aaa" font-size="6">연사속도</text>
                <text x="138" y="72" fill="#fff" font-size="7">600rpm</text>
                <rect x="160" y="66" width="50" height="4" rx="2" fill="#333"/>
                <rect x="160" y="66" width="30" height="4" rx="2" fill="#ffaa44"/>
                <text x="78" y="86" fill="#aaa" font-size="6">정확도</text>
                <text x="138" y="86" fill="#fff" font-size="7">72%</text>
                <rect x="160" y="80" width="50" height="4" rx="2" fill="#333"/>
                <rect x="160" y="80" width="36" height="4" rx="2" fill="#44aaff"/>
                <text x="78" y="100" fill="#aaa" font-size="6">사거리</text>
                <text x="138" y="100" fill="#fff" font-size="7">40m</text>
                <rect x="160" y="94" width="50" height="4" rx="2" fill="#333"/>
                <rect x="160" y="94" width="25" height="4" rx="2" fill="#44ff44"/>
                <!-- 부착물 -->
                <line x1="78" y1="108" x2="218" y2="108" stroke="#444" stroke-width="0.5"/>
                <text x="78" y="120" fill="#888" font-size="6">📎 부착물 (2/4)</text>
                <text x="78" y="132" fill="#44ff44" font-size="5">✓ 레드닷 사이트 → 정확도 +8%</text>
                <text x="78" y="142" fill="#44ff44" font-size="5">✓ 소음기 → 사거리 -5m, 은밀 +50%</text>
                <text x="78" y="152" fill="#444" font-size="5">○ 그립 슬롯 (비어있음)</text>
                <!-- 설명 -->
                <text x="254" y="178" fill="#ff4444" font-size="5" text-anchor="middle">수치 바 그래프 + 부착물 리스트</text>
            </svg>`, demo: 'fps-tooltips' },
            tps: { title: 'TPS 툴팁', description: '장비 비교, 능력 설명 툴팁', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1628"/>
                <!-- 장비 비교 레이아웃 -->
                <text x="150" y="14" fill="#44aaff" font-size="7" text-anchor="middle">장비 비교 툴팁</text>
                <!-- 현재 장비 -->
                <rect x="10" y="22" width="135" height="130" rx="4" fill="#0f1f3a" stroke="#44aaff" stroke-width="0.5"/>
                <text x="77" y="36" fill="#44aaff" font-size="6" text-anchor="middle">현재 장착</text>
                <line x1="20" y1="40" x2="135" y2="40" stroke="#1a2a4a"/>
                <text x="20" y="52" fill="#44aaff" font-size="7">강화 코트 +3</text>
                <text x="20" y="64" fill="#aaa" font-size="5">방어력: 240</text>
                <text x="20" y="74" fill="#aaa" font-size="5">체력: +120</text>
                <text x="20" y="84" fill="#aaa" font-size="5">회피율: +5%</text>
                <line x1="20" y1="90" x2="135" y2="90" stroke="#1a2a4a"/>
                <text x="20" y="102" fill="#888" font-size="5">◆ 피격 시 20% 확률로 보호막</text>
                <text x="20" y="114" fill="#888" font-size="5">◆ 스태미나 소모 -10%</text>
                <!-- 새 장비 -->
                <rect x="155" y="22" width="135" height="130" rx="4" fill="#0f1f3a" stroke="#44ff44" stroke-width="0.5"/>
                <text x="222" y="36" fill="#44ff44" font-size="6" text-anchor="middle">획득 아이템</text>
                <line x1="165" y1="40" x2="280" y2="40" stroke="#1a2a4a"/>
                <text x="165" y="52" fill="#44ff44" font-size="7">전술 아머 Mk.II</text>
                <text x="165" y="64" fill="#44ff44" font-size="5">방어력: 310 (+70 ▲)</text>
                <text x="165" y="74" fill="#ff4444" font-size="5">체력: +80 (-40 ▼)</text>
                <text x="165" y="84" fill="#44ff44" font-size="5">회피율: +8% (+3% ▲)</text>
                <line x1="165" y1="90" x2="280" y2="90" stroke="#1a2a4a"/>
                <text x="165" y="102" fill="#888" font-size="5">◆ 피격 시 반격 데미지 5%</text>
                <text x="165" y="114" fill="#888" font-size="5">◆ 방어 시 체력 재생 +2</text>
                <!-- 비교 화살표 -->
                <text x="150" y="82" fill="#fff" font-size="10" text-anchor="middle">→</text>
                <!-- 총합 비교 -->
                <rect x="10" y="156" width="280" height="16" rx="3" fill="#0f1f3a"/>
                <text x="150" y="167" fill="#44ff44" font-size="6" text-anchor="middle">전투력: 1,240 → 1,380 (+140 ▲)</text>
                <text x="150" y="178" fill="#44aaff" font-size="5" text-anchor="middle">좌우 비교 레이아웃 + 상승/하락 색상 코딩</text>
            </svg>`, demo: 'tps-tooltips' },
            quarter: { title: '쿼터뷰 툴팁', description: '유닛 스탯, 건물 정보, 기술 설명 툴팁', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1a0a"/>
                <!-- 건물 정보 툴팁 -->
                <rect x="10" y="8" width="140" height="120" rx="4" fill="#1a2a1a" stroke="#44ff88" stroke-width="0.5"/>
                <rect x="10" y="8" width="140" height="20" rx="4" fill="#44ff88" opacity="0.1"/>
                <text x="80" y="22" fill="#44ff88" font-size="7" text-anchor="middle" font-weight="bold">🏰 성채 Lv.3</text>
                <line x1="18" y1="30" x2="142" y2="30" stroke="#2a3a2a"/>
                <text x="18" y="44" fill="#aaa" font-size="6">HP: 5,000 / 5,000</text>
                <rect x="18" y="48" width="100" height="4" rx="2" fill="#1a3a1a"/>
                <rect x="18" y="48" width="100" height="4" rx="2" fill="#44ff44"/>
                <text x="18" y="64" fill="#aaa" font-size="6">방어력: 450</text>
                <text x="18" y="76" fill="#aaa" font-size="6">시야 범위: 12</text>
                <text x="18" y="88" fill="#aaa" font-size="6">주둔 가능: 8 유닛</text>
                <line x1="18" y1="94" x2="142" y2="94" stroke="#2a3a2a"/>
                <text x="18" y="106" fill="#44ff88" font-size="5">생산 가능:</text>
                <text x="18" y="116" fill="#8a8" font-size="5">기사, 궁수, 공성병기</text>
                <text x="18" y="126" fill="#ffaa44" font-size="5">업그레이드: 🪙 2,400 🪵 1,200</text>
                <!-- 기술 설명 툴팁 -->
                <rect x="160" y="8" width="130" height="95" rx="4" fill="#1a2a1a" stroke="#44ff88" stroke-width="0.5"/>
                <rect x="160" y="8" width="130" height="18" rx="4" fill="#44ff88" opacity="0.1"/>
                <text x="225" y="20" fill="#44ff88" font-size="7" text-anchor="middle" font-weight="bold">📜 화살 비</text>
                <line x1="168" y1="28" x2="282" y2="28" stroke="#2a3a2a"/>
                <text x="168" y="40" fill="#aaa" font-size="5">궁수 유닛 능력 (액티브)</text>
                <text x="168" y="52" fill="#fff" font-size="5">지정 영역에 화살을 퍼부어</text>
                <text x="168" y="62" fill="#fff" font-size="5">범위 내 적에게 150 피해</text>
                <line x1="168" y1="68" x2="282" y2="68" stroke="#2a3a2a"/>
                <text x="168" y="80" fill="#ff4444" font-size="5">쿨다운: 45초</text>
                <text x="168" y="90" fill="#44aaff" font-size="5">마나 소모: 60</text>
                <text x="168" y="100" fill="#8a8" font-size="5">범위: 8칸</text>
                <!-- 유닛 스탯 미니 툴팁 -->
                <rect x="160" y="110" width="130" height="50" rx="4" fill="#1a2a1a" stroke="#888" stroke-width="0.5"/>
                <text x="172" y="124" fill="#ccc" font-size="6">🗡 기사 (x5)</text>
                <text x="172" y="136" fill="#8a8" font-size="5">HP 120 | ATK 45 | DEF 30</text>
                <text x="172" y="148" fill="#8a8" font-size="5">이동: 4 | 사거리: 1</text>
                <text x="172" y="158" fill="#44ff44" font-size="5">돌격 보너스 +20%</text>
                <text x="150" y="178" fill="#44ff88" font-size="5" text-anchor="middle">건물/기술/유닛 3종 툴팁 — 맥락에 따른 다른 형태</text>
            </svg>`, demo: 'quarter-tooltips' }
        }
    },

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
        relatedLaws: ['law-pragnanz', 'law-similarity', 'recognition-recall', 'fitts-law'],
        genres: {
            rpg: { title: 'RPG 미니맵', description: '원형, NPC/퀘스트 마커가 있는 월드맵 스타일', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a2e"/>
                <!-- 원형 미니맵 -->
                <circle cx="150" cy="85" r="70" fill="#2a2a4a" stroke="#ffd700" stroke-width="1.5"/>
                <!-- 지형 표시 -->
                <path d="M100 60 Q120 50 140 55 Q160 45 180 60 L190 75 Q170 90 150 85 Q130 90 110 75 Z" fill="#3a5a3a" opacity="0.4"/>
                <path d="M120 90 Q140 100 160 95 L175 110 Q155 120 135 115 Z" fill="#3a5a3a" opacity="0.4"/>
                <rect x="135" y="65" width="30" height="20" rx="2" fill="#4a4a6a" opacity="0.5"/>
                <!-- 길 표시 -->
                <path d="M150 85 L150 50" stroke="#8a8a5a" stroke-width="1.5" stroke-dasharray="3"/>
                <path d="M150 85 L180 100" stroke="#8a8a5a" stroke-width="1.5" stroke-dasharray="3"/>
                <!-- 플레이어 위치 (중앙) -->
                <polygon points="150,80 146,88 154,88" fill="#44aaff"/>
                <circle cx="150" cy="85" r="3" fill="#44aaff"/>
                <!-- NPC 마커 -->
                <circle cx="135" cy="60" r="4" fill="#ffd700"/>
                <text x="135" y="63" fill="#1a1a2e" font-size="5" text-anchor="middle">!</text>
                <!-- 퀘스트 마커 -->
                <circle cx="175" cy="70" r="4" fill="#ff4444"/>
                <text x="175" y="73" fill="#fff" font-size="5" text-anchor="middle">?</text>
                <!-- 파티원 -->
                <circle cx="145" cy="95" r="3" fill="#44ff44"/>
                <circle cx="160" cy="90" r="3" fill="#44ff44"/>
                <!-- 방위 표시 -->
                <text x="150" y="22" fill="#ffd700" font-size="6" text-anchor="middle">N</text>
                <text x="215" y="88" fill="#888" font-size="5" text-anchor="middle">E</text>
                <text x="85" y="88" fill="#888" font-size="5" text-anchor="middle">W</text>
                <text x="150" y="152" fill="#888" font-size="5" text-anchor="middle">S</text>
                <!-- 줌 컨트롤 -->
                <rect x="228" y="50" width="16" height="16" rx="3" fill="#2a2a4a" stroke="#ffd700" stroke-width="0.5"/>
                <text x="236" y="61" fill="#ffd700" font-size="8" text-anchor="middle">+</text>
                <rect x="228" y="70" width="16" height="16" rx="3" fill="#2a2a4a" stroke="#ffd700" stroke-width="0.5"/>
                <text x="236" y="81" fill="#ffd700" font-size="8" text-anchor="middle">−</text>
                <!-- 범례 -->
                <circle cx="232" y="100" r="3" fill="#ffd700"/>
                <text x="240" y="103" fill="#888" font-size="4">NPC</text>
                <circle cx="232" cy="112" r="3" fill="#ff4444"/>
                <text x="240" y="115" fill="#888" font-size="4">퀘스트</text>
                <circle cx="232" cy="124" r="3" fill="#44ff44"/>
                <text x="240" y="127" fill="#888" font-size="4">파티원</text>
                <text x="150" y="174" fill="#ffd700" font-size="5" text-anchor="middle">원형 미니맵 + 마커 시스템 + 줌 컨트롤 + 범례</text>
            </svg>`, demo: 'rpg-minimap' },
            fps: { title: 'FPS 미니맵', description: '사각형, 적 위치 표시 중심의 전술 미니맵', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a1a"/>
                <!-- 사각형 미니맵 프레임 -->
                <rect x="80" y="10" width="140" height="140" rx="2" fill="#222" stroke="#ff4444" stroke-width="1"/>
                <!-- 그리드 배경 -->
                <line x1="115" y1="10" x2="115" y2="150" stroke="#333" stroke-width="0.3"/>
                <line x1="150" y1="10" x2="150" y2="150" stroke="#333" stroke-width="0.3"/>
                <line x1="185" y1="10" x2="185" y2="150" stroke="#333" stroke-width="0.3"/>
                <line x1="80" y1="45" x2="220" y2="45" stroke="#333" stroke-width="0.3"/>
                <line x1="80" y1="80" x2="220" y2="80" stroke="#333" stroke-width="0.3"/>
                <line x1="80" y1="115" x2="220" y2="115" stroke="#333" stroke-width="0.3"/>
                <!-- 맵 구조물 (벽/건물) -->
                <rect x="100" y="30" width="30" height="20" fill="#444"/>
                <rect x="160" y="50" width="40" height="15" fill="#444"/>
                <rect x="110" y="90" width="20" height="40" fill="#444"/>
                <rect x="170" y="100" width="30" height="25" fill="#444"/>
                <!-- 플레이어 (중앙, 시야 콘) -->
                <polygon points="150,80 140,90 160,90" fill="#44aaff"/>
                <!-- 시야 콘 -->
                <path d="M150,80 L130,50 L170,50 Z" fill="#44aaff" opacity="0.1" stroke="#44aaff" stroke-width="0.5"/>
                <!-- 팀원 -->
                <circle cx="130" cy="70" r="3" fill="#44aaff"/>
                <circle cx="175" cy="85" r="3" fill="#44aaff"/>
                <!-- 적 (레이더에 보이는) -->
                <circle cx="140" cy="40" r="3" fill="#ff4444"/>
                <circle cx="190" cy="60" r="3" fill="#ff4444"/>
                <!-- 사망한 적 -->
                <text x="120" y="115" fill="#ff4444" font-size="6" text-anchor="middle" opacity="0.4">✕</text>
                <!-- 폭탄 사이트 -->
                <rect x="180" y="110" width="14" height="14" rx="2" fill="none" stroke="#ffaa44" stroke-width="1"/>
                <text x="187" y="120" fill="#ffaa44" font-size="6" text-anchor="middle">A</text>
                <rect x="100" y="25" width="14" height="14" rx="2" fill="none" stroke="#ffaa44" stroke-width="1"/>
                <text x="107" y="35" fill="#ffaa44" font-size="6" text-anchor="middle">B</text>
                <!-- 방위 -->
                <text x="150" y="8" fill="#ff4444" font-size="5" text-anchor="middle">N</text>
                <!-- 범례 -->
                <circle cx="240" cy="30" r="3" fill="#44aaff"/>
                <text x="248" y="33" fill="#888" font-size="4">아군</text>
                <circle cx="240" cy="42" r="3" fill="#ff4444"/>
                <text x="248" y="45" fill="#888" font-size="4">적군</text>
                <rect x="237" y="51" width="6" height="6" rx="1" fill="none" stroke="#ffaa44" stroke-width="0.5"/>
                <text x="248" y="57" fill="#888" font-size="4">목표</text>
                <text x="150" y="170" fill="#ff4444" font-size="5" text-anchor="middle">사각 전술맵 + 그리드 + 시야콘 + 목표/적 마커</text>
            </svg>`, demo: 'fps-minimap' },
            tps: { title: 'TPS 미니맵', description: '미션 목표와 경로가 표시되는 내비게이션 맵', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1628"/>
                <!-- 원형 미니맵 (TPS - GPS 스타일) -->
                <circle cx="150" cy="80" r="65" fill="#0f1f3a" stroke="#44aaff" stroke-width="1"/>
                <!-- 도로 네트워크 -->
                <line x1="100" y1="80" x2="200" y2="80" stroke="#2a3a4a" stroke-width="3"/>
                <line x1="150" y1="30" x2="150" y2="130" stroke="#2a3a4a" stroke-width="3"/>
                <line x1="115" y1="45" x2="185" y2="115" stroke="#2a3a4a" stroke-width="2"/>
                <!-- 경로 표시 (점선 네비게이션) -->
                <path d="M150,80 L150,50 L175,35" stroke="#44aaff" stroke-width="2" stroke-dasharray="4" fill="none"/>
                <!-- 건물 블록 -->
                <rect x="110" y="50" width="15" height="15" rx="1" fill="#1a2a4a"/>
                <rect x="165" y="55" width="20" height="12" rx="1" fill="#1a2a4a"/>
                <rect x="120" y="90" width="18" height="18" rx="1" fill="#1a2a4a"/>
                <rect x="160" y="85" width="12" height="20" rx="1" fill="#1a2a4a"/>
                <!-- 플레이어 -->
                <circle cx="150" cy="80" r="4" fill="#44aaff" stroke="#fff" stroke-width="1"/>
                <!-- 방향 표시 -->
                <polygon points="150,74 147,78 153,78" fill="#44aaff"/>
                <!-- 미션 목표 -->
                <circle cx="175" cy="35" r="5" fill="none" stroke="#ffaa44" stroke-width="1.5"/>
                <circle cx="175" cy="35" r="2" fill="#ffaa44"/>
                <!-- 서브 목표 -->
                <rect x="118" cy="105" width="6" height="6" rx="1" fill="none" stroke="#44ff44" stroke-width="1" y="105"/>
                <!-- 거리 표시 -->
                <text x="190" y="38" fill="#ffaa44" font-size="5">120m</text>
                <!-- 외곽 링 (방위) -->
                <text x="150" y="12" fill="#44aaff" font-size="6" text-anchor="middle">N</text>
                <!-- 줌 레벨 -->
                <text x="230" y="80" fill="#668" font-size="5">x2</text>
                <!-- 미션 목표 텍스트 -->
                <rect x="85" y="150" width="130" height="16" rx="3" fill="#0f1f3a"/>
                <text x="150" y="161" fill="#ffaa44" font-size="5" text-anchor="middle">📍 목표: 비밀 연구소 진입 (120m)</text>
                <text x="150" y="178" fill="#44aaff" font-size="5" text-anchor="middle">GPS형 내비맵 + 경로안내 + 목표거리 + 건물 표시</text>
            </svg>`, demo: 'tps-minimap' },
            quarter: { title: '쿼터뷰 미니맵', description: '전체 맵 축소판, 탐사 영역 표시', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1a0a"/>
                <!-- 전체 맵 축소판 (사각형) -->
                <rect x="60" y="10" width="180" height="130" rx="3" fill="#1a2a1a" stroke="#44ff88" stroke-width="1"/>
                <!-- 탐사된 영역 -->
                <rect x="60" y="10" width="120" height="90" fill="#2a3a2a" opacity="0.4"/>
                <!-- 전쟁의 안개 (미탐사) -->
                <rect x="180" y="10" width="60" height="130" fill="#0a1a0a" opacity="0.7"/>
                <rect x="60" y="100" width="120" height="40" fill="#0a1a0a" opacity="0.7"/>
                <text x="210" y="70" fill="#333" font-size="6" text-anchor="middle">전쟁의 안개</text>
                <!-- 아군 기지 -->
                <rect x="75" y="25" width="12" height="12" rx="1" fill="#44ff88"/>
                <text x="81" y="34" fill="#0a1a0a" font-size="5" text-anchor="middle">🏰</text>
                <!-- 적 기지 (탐사됨) -->
                <rect x="155" y="50" width="10" height="10" rx="1" fill="#ff4444"/>
                <text x="160" y="58" fill="#fff" font-size="4" text-anchor="middle">🏴</text>
                <!-- 자원 포인트 -->
                <circle cx="110" cy="45" r="3" fill="#ffd700"/>
                <circle cx="130" cy="70" r="3" fill="#ffd700"/>
                <circle cx="95" cy="80" r="3" fill="#44aaff"/>
                <!-- 유닛 그룹 표시 -->
                <circle cx="100" cy="55" r="4" fill="#44ff88" opacity="0.6"/>
                <text x="100" y="58" fill="#fff" font-size="4" text-anchor="middle">12</text>
                <circle cx="140" cy="40" r="3" fill="#44ff88" opacity="0.6"/>
                <text x="140" y="43" fill="#fff" font-size="3" text-anchor="middle">5</text>
                <!-- 현재 카메라 뷰포트 -->
                <rect x="85" y="35" width="40" height="30" rx="1" fill="none" stroke="#fff" stroke-width="1.5"/>
                <!-- 범례 -->
                <rect x="60" y="145" width="180" height="22" rx="3" fill="#1a2a1a"/>
                <rect x="68" y="150" width="6" height="6" rx="1" fill="#44ff88"/>
                <text x="78" y="156" fill="#8a8" font-size="4">아군</text>
                <rect x="100" y="150" width="6" height="6" rx="1" fill="#ff4444"/>
                <text x="110" y="156" fill="#8a8" font-size="4">적군</text>
                <circle cx="137" cy="153" r="3" fill="#ffd700"/>
                <text x="144" y="156" fill="#8a8" font-size="4">자원</text>
                <rect x="165" y="150" width="8" height="6" rx="1" fill="none" stroke="#fff" stroke-width="0.5"/>
                <text x="178" y="156" fill="#8a8" font-size="4">카메라</text>
                <text x="150" y="178" fill="#44ff88" font-size="5" text-anchor="middle">전략맵 축소판 + 전쟁의 안개 + 카메라 뷰포트 + 유닛 그룹</text>
            </svg>`, demo: 'quarter-minimap' }
        }
    },

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
        relatedLaws: ['hicks-law', 'fitts-law', 'serial-position', 'recognition-recall'],
        genres: {
            rpg: { title: 'RPG 스킬바', description: '하단 중앙 배치, 다수의 슬롯, 확장 가능한 스킬바', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a2e"/>
                <!-- 메인 스킬바 프레임 -->
                <rect x="15" y="90" width="270" height="50" rx="6" fill="#2a2a4a" stroke="#ffd700" stroke-width="1" opacity="0.9"/>
                <!-- 스킬 슬롯 10개 -->
                <rect x="22" y="96" width="36" height="36" rx="4" fill="#3a3a5a" stroke="#ffd700" stroke-width="0.5"/>
                <text x="40" y="118" fill="#ffd700" font-size="8" text-anchor="middle">⚔</text>
                <text x="40" y="130" fill="#888" font-size="4" text-anchor="middle">1</text>
                <rect x="62" y="96" width="36" height="36" rx="4" fill="#3a3a5a"/>
                <text x="80" y="118" fill="#ff4444" font-size="8" text-anchor="middle">🔥</text>
                <text x="80" y="130" fill="#888" font-size="4" text-anchor="middle">2</text>
                <!-- 쿨다운 오버레이 예시 -->
                <rect x="62" y="96" width="36" height="20" rx="4" fill="#000" opacity="0.6"/>
                <text x="80" y="110" fill="#fff" font-size="7" text-anchor="middle">3s</text>
                <rect x="102" y="96" width="36" height="36" rx="4" fill="#3a3a5a"/>
                <text x="120" y="118" fill="#44aaff" font-size="8" text-anchor="middle">❄</text>
                <text x="120" y="130" fill="#888" font-size="4" text-anchor="middle">3</text>
                <rect x="142" y="96" width="36" height="36" rx="4" fill="#3a3a5a"/>
                <text x="160" y="118" fill="#44ff44" font-size="8" text-anchor="middle">💚</text>
                <text x="160" y="130" fill="#888" font-size="4" text-anchor="middle">4</text>
                <rect x="182" y="96" width="36" height="36" rx="4" fill="#3a3a5a"/>
                <text x="200" y="118" fill="#aaa" font-size="8" text-anchor="middle">🛡</text>
                <text x="200" y="130" fill="#888" font-size="4" text-anchor="middle">5</text>
                <!-- 구분선 -->
                <line x1="222" y1="100" x2="222" y2="128" stroke="#444" stroke-width="1"/>
                <!-- 포션 슬롯 -->
                <rect x="226" y="96" width="24" height="36" rx="4" fill="#3a3a5a"/>
                <text x="238" y="114" fill="#ff4444" font-size="7" text-anchor="middle">🧪</text>
                <text x="238" y="128" fill="#888" font-size="4" text-anchor="middle">x12</text>
                <rect x="254" y="96" width="24" height="36" rx="4" fill="#3a3a5a"/>
                <text x="266" y="114" fill="#44aaff" font-size="7" text-anchor="middle">🧪</text>
                <text x="266" y="128" fill="#888" font-size="4" text-anchor="middle">x8</text>
                <!-- 경험치 바 (스킬바 위) -->
                <rect x="15" y="84" width="270" height="4" rx="2" fill="#2a2a4a"/>
                <rect x="15" y="84" width="180" height="4" rx="2" fill="#ffd700" opacity="0.5"/>
                <text x="150" y="82" fill="#ffd700" font-size="5" text-anchor="middle">Lv.42 — 67% EXP</text>
                <!-- 보조 스킬바 (상단) -->
                <text x="15" y="20" fill="#888" font-size="6">보조 스킬바 (Shift+숫자)</text>
                <rect x="15" y="26" width="180" height="24" rx="4" fill="#2a2a4a" opacity="0.5"/>
                <rect x="20" y="29" width="18" height="18" rx="3" fill="#3a3a5a"/>
                <text x="29" y="41" fill="#888" font-size="5" text-anchor="middle">⭐</text>
                <rect x="42" y="29" width="18" height="18" rx="3" fill="#3a3a5a"/>
                <rect x="64" y="29" width="18" height="18" rx="3" fill="#3a3a5a"/>
                <rect x="86" y="29" width="18" height="18" rx="3" fill="#3a3a5a"/>
                <rect x="108" y="29" width="18" height="18" rx="3" fill="#3a3a5a"/>
                <!-- 설명 -->
                <text x="150" y="160" fill="#ffd700" font-size="5" text-anchor="middle">메인 10슬롯 + 포션 + 보조바 + EXP바 + 쿨다운 오버레이</text>
                <text x="150" y="172" fill="#888" font-size="4" text-anchor="middle">단축키 1-5 + 포션 분리 + Shift+숫자 보조바 전환</text>
            </svg>`, demo: 'rpg-skillbar' },
            fps: { title: 'FPS 스킬바', description: '최소 슬롯(3-4), 유틸리티 중심 능력 바', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a1a"/>
                <!-- FPS 능력바 (하단 중앙, 미니멀) -->
                <rect x="85" y="100" width="130" height="45" rx="4" fill="#2a2a2a" stroke="#ff4444" stroke-width="0.5" opacity="0.9"/>
                <!-- 능력 슬롯 3개 -->
                <rect x="92" y="106" width="34" height="34" rx="4" fill="#333" stroke="#ff4444" stroke-width="0.5"/>
                <text x="109" y="127" fill="#ff4444" font-size="9" text-anchor="middle">💣</text>
                <text x="109" y="138" fill="#888" font-size="5" text-anchor="middle">Q</text>
                <rect x="132" y="106" width="34" height="34" rx="4" fill="#333" stroke="#ff4444" stroke-width="0.5"/>
                <text x="149" y="127" fill="#44aaff" font-size="9" text-anchor="middle">💨</text>
                <text x="149" y="138" fill="#888" font-size="5" text-anchor="middle">E</text>
                <!-- 쿨다운 -->
                <rect x="132" y="106" width="34" height="18" rx="4" fill="#000" opacity="0.5"/>
                <text x="149" y="119" fill="#fff" font-size="7" text-anchor="middle">8s</text>
                <rect x="172" y="106" width="34" height="34" rx="4" fill="#333" stroke="#ffd700" stroke-width="1"/>
                <text x="189" y="127" fill="#ffd700" font-size="9" text-anchor="middle">⚡</text>
                <text x="189" y="138" fill="#888" font-size="5" text-anchor="middle">X</text>
                <!-- 궁극기 게이지 (원형 테두리) -->
                <circle cx="189" cy="124" r="20" fill="none" stroke="#ffd700" stroke-width="2" stroke-dasharray="94" stroke-dashoffset="25" transform="rotate(-90 189 124)" opacity="0.4"/>
                <!-- 무기 슬롯 (우측) -->
                <rect x="220" y="100" width="60" height="45" rx="4" fill="#2a2a2a"/>
                <text x="250" y="118" fill="#aaa" font-size="7" text-anchor="middle">🔫 AK-47</text>
                <text x="250" y="130" fill="#ff4444" font-size="6" text-anchor="middle">30 / 90</text>
                <rect x="228" y="134" width="44" height="3" rx="1" fill="#333"/>
                <rect x="228" y="134" width="30" height="3" rx="1" fill="#ff4444"/>
                <!-- 유틸리티 (좌측) -->
                <rect x="20" y="110" width="55" height="30" rx="4" fill="#2a2a2a"/>
                <rect x="26" y="114" width="20" height="20" rx="3" fill="#333"/>
                <text x="36" y="128" fill="#aaa" font-size="6" text-anchor="middle">🔧</text>
                <text x="36" y="132" fill="#666" font-size="3" text-anchor="middle">x2</text>
                <rect x="50" y="114" width="20" height="20" rx="3" fill="#333"/>
                <text x="60" y="128" fill="#aaa" font-size="6" text-anchor="middle">💊</text>
                <text x="60" y="132" fill="#666" font-size="3" text-anchor="middle">x1</text>
                <!-- 크로스헤어 참고 (게임 중앙) -->
                <line x1="145" y1="45" x2="155" y2="45" stroke="#fff" stroke-width="0.5" opacity="0.5"/>
                <line x1="150" y1="40" x2="150" y2="50" stroke="#fff" stroke-width="0.5" opacity="0.5"/>
                <text x="150" y="60" fill="#444" font-size="5" text-anchor="middle">(게임 뷰)</text>
                <!-- 설명 -->
                <text x="150" y="160" fill="#ff4444" font-size="5" text-anchor="middle">최소 능력 3개 + 궁극기 게이지 + 무기/탄약 + 유틸리티</text>
                <text x="150" y="172" fill="#888" font-size="4" text-anchor="middle">Q/E/X 단축키 — 시야 방해 최소화</text>
            </svg>`, demo: 'fps-skillbar' },
            tps: { title: 'TPS 스킬바', description: '4-6개의 능력 + 궁극기 슬롯', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1628"/>
                <!-- 스킬바 프레임 (하단 중앙) -->
                <rect x="50" y="95" width="200" height="50" rx="8" fill="#0f1f3a" opacity="0.85" stroke="#44aaff" stroke-width="0.5"/>
                <!-- 스킬 슬롯 4개 + 궁극기 -->
                <rect x="60" y="102" width="32" height="32" rx="6" fill="#1a2a4a" stroke="#44aaff" stroke-width="0.5"/>
                <text x="76" y="122" fill="#44aaff" font-size="8" text-anchor="middle">⚡</text>
                <text x="76" y="132" fill="#668" font-size="4" text-anchor="middle">Q</text>
                <rect x="98" y="102" width="32" height="32" rx="6" fill="#1a2a4a"/>
                <text x="114" y="122" fill="#ff44aa" font-size="8" text-anchor="middle">🌀</text>
                <text x="114" y="132" fill="#668" font-size="4" text-anchor="middle">W</text>
                <rect x="136" y="102" width="32" height="32" rx="6" fill="#1a2a4a"/>
                <text x="152" y="122" fill="#44ff44" font-size="8" text-anchor="middle">💚</text>
                <text x="152" y="132" fill="#668" font-size="4" text-anchor="middle">E</text>
                <rect x="174" y="102" width="32" height="32" rx="6" fill="#1a2a4a"/>
                <text x="190" y="122" fill="#ffaa44" font-size="8" text-anchor="middle">🛡</text>
                <text x="190" y="132" fill="#668" font-size="4" text-anchor="middle">R</text>
                <!-- 구분선 -->
                <line x1="211" y1="105" x2="211" y2="131" stroke="#2a3a4a" stroke-width="1"/>
                <!-- 궁극기 (더 큰 슬롯) -->
                <rect x="216" y="98" width="40" height="40" rx="8" fill="#1a2a4a" stroke="#ffd700" stroke-width="1.5"/>
                <text x="236" y="122" fill="#ffd700" font-size="10" text-anchor="middle">💥</text>
                <text x="236" y="136" fill="#ffd700" font-size="4" text-anchor="middle">T</text>
                <!-- 궁극기 충전 게이지 (원형) -->
                <circle cx="236" cy="118" r="22" fill="none" stroke="#ffd700" stroke-width="2" stroke-dasharray="110" stroke-dashoffset="28" transform="rotate(-90 236 118)" opacity="0.3"/>
                <!-- 쿨다운 예시 (W 스킬) -->
                <rect x="98" y="102" width="32" height="16" rx="6" fill="#000" opacity="0.5"/>
                <text x="114" y="113" fill="#fff" font-size="6" text-anchor="middle">5s</text>
                <!-- 상단 버프/디버프 표시 -->
                <text x="50" y="86" fill="#aaa" font-size="5">활성 효과</text>
                <rect x="50" y="70" width="14" height="14" rx="3" fill="#44ff44" opacity="0.3"/>
                <text x="57" y="80" fill="#44ff44" font-size="5" text-anchor="middle">↑</text>
                <text x="57" y="68" fill="#44ff44" font-size="3" text-anchor="middle">12s</text>
                <rect x="68" y="70" width="14" height="14" rx="3" fill="#ff4444" opacity="0.3"/>
                <text x="75" y="80" fill="#ff4444" font-size="5" text-anchor="middle">🔥</text>
                <!-- 설명 -->
                <text x="150" y="158" fill="#44aaff" font-size="5" text-anchor="middle">4 능력(QWER) + 궁극기(T) + 쿨다운 + 버프 타이머</text>
                <text x="150" y="170" fill="#668" font-size="4" text-anchor="middle">글래스모피즘 + 둥근 슬롯 + 원형 궁극기 충전</text>
            </svg>`, demo: 'tps-skillbar' },
            quarter: { title: '쿼터뷰 스킬바', description: '커맨드 팔레트 스타일, 유닛 명령 버튼', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1a0a"/>
                <!-- 커맨드 팔레트 (우하단 RTS 스타일) -->
                <rect x="160" y="30" width="130" height="120" rx="4" fill="#1a2a1a" stroke="#44ff88" stroke-width="0.5"/>
                <text x="225" y="44" fill="#44ff88" font-size="6" text-anchor="middle">커맨드 팔레트</text>
                <line x1="168" y1="48" x2="282" y2="48" stroke="#2a3a2a"/>
                <!-- 3x3 커맨드 그리드 -->
                <rect x="168" y="54" width="34" height="28" rx="3" fill="#2a3a2a" stroke="#44ff88" stroke-width="0.5"/>
                <text x="185" y="70" fill="#44ff88" font-size="6" text-anchor="middle">이동</text>
                <text x="185" y="80" fill="#668" font-size="4" text-anchor="middle">M</text>
                <rect x="208" y="54" width="34" height="28" rx="3" fill="#2a3a2a"/>
                <text x="225" y="70" fill="#ff4444" font-size="6" text-anchor="middle">공격</text>
                <text x="225" y="80" fill="#668" font-size="4" text-anchor="middle">A</text>
                <rect x="248" y="54" width="34" height="28" rx="3" fill="#2a3a2a"/>
                <text x="265" y="70" fill="#44aaff" font-size="6" text-anchor="middle">방어</text>
                <text x="265" y="80" fill="#668" font-size="4" text-anchor="middle">D</text>
                <rect x="168" y="88" width="34" height="28" rx="3" fill="#2a3a2a"/>
                <text x="185" y="104" fill="#ffaa44" font-size="6" text-anchor="middle">순찰</text>
                <text x="185" y="114" fill="#668" font-size="4" text-anchor="middle">P</text>
                <rect x="208" y="88" width="34" height="28" rx="3" fill="#2a3a2a"/>
                <text x="225" y="104" fill="#aaa" font-size="6" text-anchor="middle">정지</text>
                <text x="225" y="114" fill="#668" font-size="4" text-anchor="middle">S</text>
                <rect x="248" y="88" width="34" height="28" rx="3" fill="#2a3a2a"/>
                <text x="265" y="104" fill="#ff44aa" font-size="6" text-anchor="middle">특수</text>
                <text x="265" y="114" fill="#668" font-size="4" text-anchor="middle">F</text>
                <!-- 특수 능력 행 -->
                <rect x="168" y="122" width="54" height="22" rx="3" fill="#44ff88" opacity="0.15" stroke="#44ff88" stroke-width="0.5"/>
                <text x="195" y="136" fill="#44ff88" font-size="5" text-anchor="middle">화살 비 (R)</text>
                <rect x="228" y="122" width="54" height="22" rx="3" fill="#2a3a2a"/>
                <text x="255" y="136" fill="#888" font-size="5" text-anchor="middle">치유 (T)</text>
                <!-- 유닛 선택 패널 (좌하단) -->
                <rect x="10" y="90" width="140" height="60" rx="4" fill="#1a2a1a"/>
                <text x="80" y="104" fill="#44ff88" font-size="6" text-anchor="middle">선택된 유닛 (12)</text>
                <line x1="18" y1="108" x2="142" y2="108" stroke="#2a3a2a"/>
                <!-- 유닛 초상화 그리드 -->
                <rect x="16" y="112" width="16" height="16" rx="2" fill="#2a3a2a" stroke="#44ff88" stroke-width="0.5"/>
                <text x="24" y="123" fill="#44ff88" font-size="4" text-anchor="middle">🗡x5</text>
                <rect x="36" y="112" width="16" height="16" rx="2" fill="#2a3a2a"/>
                <text x="44" y="123" fill="#888" font-size="4" text-anchor="middle">🏹x4</text>
                <rect x="56" y="112" width="16" height="16" rx="2" fill="#2a3a2a"/>
                <text x="64" y="123" fill="#888" font-size="4" text-anchor="middle">🛡x3</text>
                <!-- 그룹 단축키 -->
                <text x="16" y="142" fill="#668" font-size="4">Ctrl+1: 보병  Ctrl+2: 궁수  Ctrl+3: 기마</text>
                <!-- 설명 -->
                <text x="150" y="170" fill="#44ff88" font-size="5" text-anchor="middle">3x3 커맨드 그리드 + 유닛 선택 + 특수능력 + 그룹 단축키</text>
            </svg>`, demo: 'quarter-skillbar' }
        }
    },

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
        relatedLaws: ['postel-law', 'teslers-law', 'progressive-disclosure', 'feedback-principle'],
        genres: {
            rpg: { title: 'RPG 채팅', description: '전체/파티/길드/귓속말 채널이 있는 멀티 채널 채팅', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a2e"/>
                <!-- 채팅 윈도우 프레임 -->
                <rect x="10" y="8" width="200" height="164" rx="6" fill="#1a1a2e" stroke="#ffd700" stroke-width="0.5" opacity="0.95"/>
                <!-- 채널 탭 -->
                <rect x="10" y="8" width="200" height="18" rx="6" fill="#2a2a4a"/>
                <rect x="14" y="10" width="36" height="14" rx="3" fill="#ffd700" opacity="0.2"/>
                <text x="32" y="20" fill="#ffd700" font-size="5" text-anchor="middle">전체</text>
                <text x="68" y="20" fill="#44ff44" font-size="5" text-anchor="middle">파티</text>
                <text x="104" y="20" fill="#44aaff" font-size="5" text-anchor="middle">길드</text>
                <text x="140" y="20" fill="#ff88cc" font-size="5" text-anchor="middle">귓속말</text>
                <text x="176" y="20" fill="#ff4444" font-size="5" text-anchor="middle">시스템</text>
                <!-- 채팅 메시지 영역 -->
                <text x="16" y="40" fill="#ffd700" font-size="5">[전체] <tspan fill="#aaa">용사Kim: 사냥 파티 구합니다</tspan></text>
                <text x="16" y="52" fill="#44ff44" font-size="5">[파티] <tspan fill="#aaa">힐러J: 힐 갑니다!</tspan></text>
                <text x="16" y="64" fill="#44aaff" font-size="5">[길드] <tspan fill="#aaa">길마: 오늘 레이드 참여 가능?</tspan></text>
                <text x="16" y="76" fill="#ff4444" font-size="5">[시스템] <tspan fill="#ffaa44">전설 아이템을 획득했습니다!</tspan></text>
                <text x="16" y="88" fill="#ffd700" font-size="5">[전체] <tspan fill="#aaa">마법사Lee: ㅋㅋㅋ 감사합니다</tspan></text>
                <text x="16" y="100" fill="#ff88cc" font-size="5">[귓속말] <tspan fill="#aaa">Player3: 거래 가능하세요?</tspan></text>
                <text x="16" y="112" fill="#44ff44" font-size="5">[파티] <tspan fill="#aaa">탱커M: 보스 가시죠</tspan></text>
                <text x="16" y="124" fill="#ffd700" font-size="5">[전체] <tspan fill="#aaa">궁수Park: 이 던전 처음인데요</tspan></text>
                <!-- 채팅 입력 -->
                <rect x="14" y="148" width="160" height="18" rx="4" fill="#2a2a4a"/>
                <text x="22" y="160" fill="#666" font-size="5">메시지를 입력하세요...</text>
                <rect x="178" y="148" width="26" height="18" rx="4" fill="#ffd700" opacity="0.3"/>
                <text x="191" y="160" fill="#ffd700" font-size="5" text-anchor="middle">전송</text>
                <!-- 채널 선택기 -->
                <rect x="14" y="134" width="40" height="12" rx="2" fill="#2a2a4a"/>
                <text x="34" y="143" fill="#ffd700" font-size="4" text-anchor="middle">▼ 전체</text>
                <!-- 설명 -->
                <text x="250" y="40" fill="#ffd700" font-size="5" text-anchor="middle">특징:</text>
                <text x="250" y="52" fill="#888" font-size="4" text-anchor="middle">→ 5채널 탭 전환</text>
                <text x="250" y="62" fill="#888" font-size="4" text-anchor="middle">→ 채널별 색상 코딩</text>
                <text x="250" y="72" fill="#888" font-size="4" text-anchor="middle">→ 시스템 메시지 분리</text>
                <text x="250" y="82" fill="#888" font-size="4" text-anchor="middle">→ 채널 필터 탭</text>
                <text x="250" y="92" fill="#888" font-size="4" text-anchor="middle">→ 반투명 배경</text>
                <text x="250" y="102" fill="#888" font-size="4" text-anchor="middle">→ 리사이즈 가능</text>
                <text x="150" y="178" fill="#ffd700" font-size="5" text-anchor="middle">멀티 채널 탭 + 색상 코딩 + 채널 선택기</text>
            </svg>`, demo: 'rpg-chat' },
            fps: { title: 'FPS 채팅', description: '팀/전체 채팅, 보이스챗 표시기', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#1a1a1a"/>
                <!-- FPS 채팅 (좌하단, 미니멀) -->
                <rect x="10" y="60" width="170" height="90" rx="4" fill="#1a1a1a" opacity="0.8"/>
                <!-- 채팅 메시지 (페이드 아웃 효과) -->
                <text x="16" y="74" fill="#aaa" font-size="5" opacity="0.3">[전체] sniper99: gg</text>
                <text x="16" y="86" fill="#44aaff" font-size="5" opacity="0.5">[팀] rushB: A 사이트 가자</text>
                <text x="16" y="98" fill="#44aaff" font-size="5" opacity="0.7">[팀] awpGod: 플래시 넣는다</text>
                <text x="16" y="110" fill="#aaa" font-size="5" opacity="0.85">[전체] noob123: 니스샷</text>
                <text x="16" y="122" fill="#ff4444" font-size="5">[시스템] 라운드 시작까지 5초</text>
                <text x="16" y="134" fill="#44aaff" font-size="5">[팀] me: 스나이퍼 조심!</text>
                <!-- 입력 바 -->
                <rect x="10" y="140" width="130" height="14" rx="3" fill="#333" opacity="0.7"/>
                <text x="18" y="150" fill="#666" font-size="5">Enter로 채팅...</text>
                <text x="148" y="150" fill="#444" font-size="4">Y:전체 U:팀</text>
                <!-- 보이스챗 표시기 (우측) -->
                <rect x="220" y="10" width="70" height="80" rx="4" fill="#2a2a2a" opacity="0.8"/>
                <text x="255" y="24" fill="#aaa" font-size="5" text-anchor="middle">보이스 채팅</text>
                <line x1="226" y1="28" x2="284" y2="28" stroke="#333"/>
                <!-- 말하는 중인 플레이어 -->
                <circle cx="234" cy="40" r="4" fill="#44ff44"/>
                <text x="248" y="43" fill="#44ff44" font-size="5">rushB 🔊</text>
                <!-- 다른 팀원 -->
                <circle cx="234" cy="56" r="4" fill="#44aaff"/>
                <text x="248" y="59" fill="#aaa" font-size="5">awpGod</text>
                <circle cx="234" cy="72" r="4" fill="#44aaff"/>
                <text x="248" y="75" fill="#aaa" font-size="5">me</text>
                <!-- 마이크 상태 -->
                <text x="282" y="43" fill="#44ff44" font-size="5">🎤</text>
                <text x="282" y="59" fill="#666" font-size="5">🎤</text>
                <text x="282" y="75" fill="#ff4444" font-size="5">🔇</text>
                <!-- 퀵 라디오 명령 안내 -->
                <rect x="220" y="100" width="70" height="50" rx="4" fill="#2a2a2a" opacity="0.6"/>
                <text x="255" y="114" fill="#aaa" font-size="5" text-anchor="middle">퀵 라디오 (Z)</text>
                <text x="228" y="126" fill="#888" font-size="4">1. 도와줘!</text>
                <text x="228" y="136" fill="#888" font-size="4">2. 적 발견</text>
                <text x="228" y="146" fill="#888" font-size="4">3. 잘했어</text>
                <text x="150" y="170" fill="#ff4444" font-size="5" text-anchor="middle">페이드 아웃 채팅 + 보이스챗 표시기 + 퀵 라디오 (Z)</text>
            </svg>`, demo: 'fps-chat' },
            tps: { title: 'TPS 채팅', description: '그룹 채팅, 퀵 커뮤니케이션 휠', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1628"/>
                <!-- 그룹 채팅 (좌측) -->
                <rect x="10" y="10" width="140" height="130" rx="6" fill="#0f1f3a" opacity="0.9" stroke="#44aaff" stroke-width="0.5"/>
                <text x="80" y="24" fill="#44aaff" font-size="6" text-anchor="middle">스쿼드 채팅</text>
                <line x1="16" y1="28" x2="144" y2="28" stroke="#1a2a4a"/>
                <!-- 메시지들 -->
                <circle cx="22" cy="40" r="4" fill="#44aaff"/>
                <text x="30" y="43" fill="#44aaff" font-size="5">Alpha: 왼쪽 클리어</text>
                <circle cx="22" cy="56" r="4" fill="#44ff44"/>
                <text x="30" y="59" fill="#44ff44" font-size="5">Bravo: 카버 맡을게</text>
                <circle cx="22" cy="72" r="4" fill="#ffaa44"/>
                <text x="30" y="75" fill="#ffaa44" font-size="5">Charlie: 탄약 필요</text>
                <circle cx="22" cy="88" r="4" fill="#44aaff"/>
                <text x="30" y="91" fill="#aaa" font-size="5">나: 이동 중 기다려</text>
                <!-- 시스템 알림 -->
                <rect x="20" y="98" width="120" height="12" rx="2" fill="#ff4444" opacity="0.1"/>
                <text x="80" y="107" fill="#ff4444" font-size="4" text-anchor="middle">⚠ 적 스나이퍼 감지 - 북쪽</text>
                <!-- 입력 -->
                <rect x="16" y="116" width="100" height="16" rx="4" fill="#1a2a4a"/>
                <text x="24" y="127" fill="#668" font-size="5">메시지...</text>
                <rect x="120" y="116" width="24" height="16" rx="4" fill="#44aaff" opacity="0.3"/>
                <text x="132" y="127" fill="#44aaff" font-size="5" text-anchor="middle">↑</text>
                <!-- 커뮤니케이션 휠 (우측) -->
                <circle cx="220" cy="85" r="55" fill="#0f1f3a" opacity="0.9" stroke="#44aaff" stroke-width="1"/>
                <circle cx="220" cy="85" r="15" fill="#1a2a4a"/>
                <text x="220" y="89" fill="#44aaff" font-size="5" text-anchor="middle">V</text>
                <!-- 휠 섹션 8개 -->
                <line x1="220" y1="30" x2="220" y2="40" stroke="#2a3a4a" stroke-width="0.5"/>
                <line x1="220" y1="130" x2="220" y2="140" stroke="#2a3a4a" stroke-width="0.5"/>
                <line x1="165" y1="85" x2="175" y2="85" stroke="#2a3a4a" stroke-width="0.5"/>
                <line x1="265" y1="85" x2="275" y2="85" stroke="#2a3a4a" stroke-width="0.5"/>
                <!-- 휠 옵션 텍스트 -->
                <text x="220" y="40" fill="#44ff44" font-size="5" text-anchor="middle">회복</text>
                <text x="255" y="55" fill="#ff4444" font-size="5" text-anchor="middle">적 발견</text>
                <text x="265" y="88" fill="#ffaa44" font-size="5" text-anchor="middle">탄약</text>
                <text x="255" y="118" fill="#aaa" font-size="5" text-anchor="middle">감사</text>
                <text x="220" y="135" fill="#aaa" font-size="5" text-anchor="middle">이해</text>
                <text x="185" y="118" fill="#44aaff" font-size="5" text-anchor="middle">이동</text>
                <text x="172" y="88" fill="#44aaff" font-size="5" text-anchor="middle">집결</text>
                <text x="185" y="55" fill="#ff44aa" font-size="5" text-anchor="middle">도움</text>
                <!-- 설명 -->
                <text x="150" y="160" fill="#44aaff" font-size="5" text-anchor="middle">스쿼드 채팅 + 커뮤니케이션 휠(V) 8방향</text>
                <text x="150" y="172" fill="#668" font-size="4" text-anchor="middle">아바타 표시 + 시스템 경고 + 빠른 응답 휠</text>
            </svg>`, demo: 'tps-chat' },
            quarter: { title: '쿼터뷰 채팅', description: '외교 메시지, 동맹 채팅', wireframe: `<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="180" fill="#0a1a0a"/>
                <!-- 외교 메시지 패널 -->
                <rect x="10" y="8" width="180" height="135" rx="4" fill="#1a2a1a" stroke="#44ff88" stroke-width="0.5"/>
                <!-- 탭: 동맹 / 외교 / 시스템 -->
                <rect x="14" y="12" width="40" height="14" rx="2" fill="#44ff88" opacity="0.2"/>
                <text x="34" y="22" fill="#44ff88" font-size="5" text-anchor="middle">동맹</text>
                <text x="74" y="22" fill="#888" font-size="5" text-anchor="middle">외교</text>
                <text x="114" y="22" fill="#888" font-size="5" text-anchor="middle">시스템</text>
                <text x="154" y="22" fill="#888" font-size="5" text-anchor="middle">전체</text>
                <line x1="14" y1="28" x2="186" y2="28" stroke="#2a3a2a"/>
                <!-- 동맹 채팅 메시지 -->
                <rect x="16" y="32" width="14" height="14" rx="2" fill="#44ff88" opacity="0.3"/>
                <text x="23" y="42" fill="#44ff88" font-size="5" text-anchor="middle">🏰</text>
                <text x="36" y="40" fill="#44ff88" font-size="5">왕국A:</text>
                <text x="36" y="50" fill="#aaa" font-size="4">북쪽에서 적 이동 감지됨</text>
                <rect x="16" y="56" width="14" height="14" rx="2" fill="#44aaff" opacity="0.3"/>
                <text x="23" y="66" fill="#44aaff" font-size="5" text-anchor="middle">⚔</text>
                <text x="36" y="64" fill="#44aaff" font-size="5">제국B:</text>
                <text x="36" y="74" fill="#aaa" font-size="4">지원군 보냅니다. 10분 후 도착</text>
                <rect x="16" y="80" width="14" height="14" rx="2" fill="#ffaa44" opacity="0.3"/>
                <text x="23" y="90" fill="#ffaa44" font-size="5" text-anchor="middle">🛡</text>
                <text x="36" y="88" fill="#ffaa44" font-size="5">나:</text>
                <text x="36" y="98" fill="#aaa" font-size="4">감사합니다. 서쪽 방어 맡겠습니다</text>
                <!-- 외교 제안 알림 -->
                <rect x="16" y="104" width="170" height="18" rx="3" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="0.5"/>
                <text x="22" y="116" fill="#ffd700" font-size="5">📜 공화국C가 무역 협정을 제안합니다</text>
                <!-- 입력 -->
                <rect x="14" y="126" width="130" height="14" rx="3" fill="#2a3a2a"/>
                <text x="22" y="136" fill="#668" font-size="4">동맹에게 메시지...</text>
                <rect x="148" y="126" width="38" height="14" rx="3" fill="#44ff88" opacity="0.2"/>
                <text x="167" y="136" fill="#44ff88" font-size="4" text-anchor="middle">전송</text>
                <!-- 외교 빠른 액션 (우측) -->
                <rect x="200" y="8" width="90" height="135" rx="4" fill="#1a2a1a"/>
                <text x="245" y="22" fill="#44ff88" font-size="6" text-anchor="middle">빠른 외교</text>
                <line x1="206" y1="26" x2="284" y2="26" stroke="#2a3a2a"/>
                <rect x="206" y="32" width="78" height="18" rx="3" fill="#2a3a2a"/>
                <text x="245" y="44" fill="#44ff44" font-size="5" text-anchor="middle">🤝 동맹 제안</text>
                <rect x="206" y="54" width="78" height="18" rx="3" fill="#2a3a2a"/>
                <text x="245" y="66" fill="#ffd700" font-size="5" text-anchor="middle">💰 무역 요청</text>
                <rect x="206" y="76" width="78" height="18" rx="3" fill="#2a3a2a"/>
                <text x="245" y="88" fill="#ff4444" font-size="5" text-anchor="middle">⚔ 선전포고</text>
                <rect x="206" y="98" width="78" height="18" rx="3" fill="#2a3a2a"/>
                <text x="245" y="110" fill="#44aaff" font-size="5" text-anchor="middle">🕊 휴전 요청</text>
                <rect x="206" y="120" width="78" height="18" rx="3" fill="#2a3a2a"/>
                <text x="245" y="132" fill="#aaa" font-size="5" text-anchor="middle">📋 지도 공유</text>
                <text x="150" y="155" fill="#44ff88" font-size="5" text-anchor="middle">동맹 채팅 + 외교 알림 + 빠른 외교 액션 패널</text>
                <text x="150" y="167" fill="#668" font-size="4" text-anchor="middle">팩션 아이콘 + 색상 구분 + 외교 제안 인라인 알림</text>
            </svg>`, demo: 'quarter-chat' }
        }
    },

    // ============ 참조 컴포넌트 — 기본 UI (M3 + Lithium Design System 기반) ============

    badges: {
        id: 'badges', name: '뱃지', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="14" height="14" rx="3"/><circle cx="19" cy="5" r="4" fill="currentColor" stroke="none"/></svg>`,
        summary: '알림 수, 상태, 등급을 표시하는 소형 시각 지표.',
        description: `뱃지는 아이콘이나 요소 위에 부착되어 새로운 정보나 상태를 전달합니다. 게임에서는 새 아이템/퀘스트 알림, 미읽 메시지 카운트, 캐릭터 레벨, 아이템 등급 표시 등에 사용됩니다. 색상 코딩을 통해 긴급도나 희귀도를 즉각적으로 전달합니다.`,
        variants: [
            { name: '숫자 뱃지', description: '미읽 메시지 수, 새 퀘스트 수 등 카운트 표시' },
            { name: '도트 뱃지', description: '새 항목 존재 여부만 표시하는 최소 인디케이터' },
            { name: '아이콘 뱃지', description: '상태를 아이콘으로 표현 (독, 버프, 디버프)' },
            { name: '등급 뱃지', description: '아이템 희귀도 색상 구분 (일반/레어/에픽/전설)' }
        ],
        gameApplication: '새 퀘스트에 도트 뱃지, 인벤토리의 새 아이템에 숫자 뱃지, 장비 등급에 컬러 뱃지를 사용합니다. 99+처리와 색상 차별화가 중요합니다.',
        guidelines: ['99 이상은 "99+"로 표시하세요', '중요도별 색상: 빨강(긴급), 주황(경고), 파랑(정보), 초록(완료)', '뱃지 과다 사용 방지 — 핵심 알림만 뱃지로 표시', '뱃지 크기는 부모 요소의 1/3 이내'],
        relatedLaws: ['von-restorff', 'miller-law', 'feedback-principle']
    },

    toggle: {
        id: 'toggle', name: '토글/스위치', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="7" width="22" height="10" rx="5"/><circle cx="16" cy="12" r="3" fill="currentColor"/></svg>`,
        summary: 'ON/OFF를 즉시 전환하는 바이너리 컨트롤.',
        description: `토글 스위치는 두 가지 상태 사이를 즉시 전환합니다. 게임에서는 사운드 ON/OFF, 자동 전투, HUD 표시, 채팅 필터 등 즉각적인 설정 변경에 사용됩니다. 체크박스와 달리 변경이 즉시 적용됨을 시각적으로 전달합니다.`,
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

    tabs: {
        id: 'tabs', name: '탭', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M8 6v4"/><path d="M14 6v4"/></svg>`,
        summary: '같은 영역에서 카테고리별 콘텐츠를 전환하는 탭 패널.',
        description: `탭은 같은 공간에서 서로 다른 카테고리의 콘텐츠를 전환하는 내비게이션 패턴입니다. 게임에서는 인벤토리 카테고리(무기/방어구/소비), 캐릭터 정보(스탯/스킬/장비), 상점 분류 등에 사용됩니다.`,
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

    // ============ 내비게이션/구조 컴포넌트 ============

    appbar: {
        id: 'appbar', name: '앱 바', type: 'reference',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="6" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><line x1="10" y1="6" x2="18" y2="6"/></svg>`,
        summary: '화면 상/하단에 고정되는 핵심 내비게이션 바.',
        description: `앱 바(Top/Bottom App Bar)는 화면 상단이나 하단에 고정되어 제목, 내비게이션, 핵심 액션을 제공합니다. 게임에서는 로비 상단바(재화 표시), 설정 헤더, 하단 탭 바 등에 사용됩니다.`,
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
        variants: [
            { name: '전체 너비 디바이더', description: '영역 전체를 가로지르는 선' },
            { name: '인셋 디바이더', description: '여백을 두고 들여쓴 구분선' },
            { name: '텍스트 디바이더', description: '"또는", "2024년 1월" 등 텍스트 포함' },
            { name: '장식 디바이더', description: '게임 세계관에 맞춘 장식적 구분선' }
        ],
        gameApplication: '설정 메뉴 카테고리 구분, 인벤토리 장비/소비/재료 섹션 분리, 채팅 날짜 구분선, 캐릭터 스탯 그룹 분리에 사용합니다.',
        guidelines: ['디바이더보다 여백(spacing)을 먼저 고려', '색상은 배경과 미묘한 차이로', '과도한 사용은 시각적 잡음 — 꼭 필요한 곳만', '의미있는 구분에만 사용 (장식용 남용 금지)'],
        relatedLaws: ['law-proximity', 'law-pragnanz', 'law-similarity']
    }
};

const UX_LAWS = [
    {
        id: 'fitts-law',
        name: '피츠의 법칙',
        nameEn: "Fitts's Law",
        principle: '대상까지의 이동 시간은 대상의 크기와 거리에 따라 결정됩니다.',
        description: '타겟의 크기가 클수록, 그리고 가까울수록 빠르게 선택할 수 있습니다. 이는 게임 UI에서 중요한 버튼의 크기와 위치를 결정하는 핵심 원칙입니다.',
        gameApplication: '중요한 액션 버튼(공격, 스킬)은 크게 만들고 접근하기 쉬운 위치에 배치하세요. FPS의 조준점은 항상 화면 중앙에 있어 이동 거리가 0입니다. 모바일 게임에서는 엄지가 닿는 영역에 핵심 버튼을 배치합니다.',
        category: '행동',
        visual: `<svg viewBox="0 0 200 120" fill="none"><circle cx="30" cy="60" r="8" fill="var(--accent)" opacity="0.3"/><circle cx="160" cy="60" r="28" fill="var(--accent)" opacity="0.6"/><line x1="38" y1="60" x2="132" y2="60" stroke="var(--accent)" stroke-width="1" stroke-dasharray="4"/><text x="85" y="50" fill="var(--text-tertiary)" font-size="8" text-anchor="middle">거리</text><text x="30" y="85" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">작은 타겟</text><text x="160" y="100" fill="var(--text-tertiary)" font-size="7" text-anchor="middle">큰 타겟 = 빠름</text></svg>`
    },
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
const COMPONENT_CATEGORIES = [
    {
        id: 'game-specific',
        name: '게임 전용',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"/></svg>`,
        items: ['hud', 'inventory', 'minimap', 'skillbar', 'chat', 'progress']
    },
    {
        id: 'action',
        name: '액션',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>`,
        items: ['buttons', 'toggle', 'menus']
    },
    {
        id: 'input',
        name: '입력',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="3"/><line x1="7" y1="10" x2="7" y2="14"/></svg>`,
        items: ['inputfield', 'search', 'checkbox', 'radio', 'dropdown', 'slider']
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
        items: ['navigation', 'appbar', 'tabs', 'breadcrumb', 'pagination', 'stepper']
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
        items: ['accordion', 'divider']
    }
];

// ============ 체크리스트 데이터 (Lithium Design System 기반 게임 UI 적용) ============
const CHECKLIST_DATA = [
    {
        category: '정보구조 (IA)',
        items: [
            { check: '게임 콘텐츠가 논리적 계층 구조로 정리되어 있는가', priority: '필수', desc: '로비→모험→던전→보스 등 단계별 흐름' },
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
