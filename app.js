/* ============================================
   Game UI/UX - App Router & Rendering
   게임 UI/UX 디자인 라이브러리의 핵심 애플리케이션 파일
   - SPA(Single Page Application) 라우터 및 모든 페이지 렌더링 로직 담당
   - IIFE(즉시 실행 함수) 패턴으로 전역 스코프 오염 방지
   - data.js에서 정의한 COMPONENTS, UX_LAWS, CHECKLIST_DATA 등을 사용
   ============================================ */

/**
 * IIFE (Immediately Invoked Function Expression)
 * 즉시 실행 함수 표현식으로 전체 애플리케이션 로직을 캡슐화
 * 내부 변수와 함수가 전역 스코프를 오염시키지 않도록 보호
 */
(function() {
    /**
     * querySelector 축약 유틸리티 함수
     * @param {string} sel - CSS 선택자 문자열
     * @param {Element} ctx - 검색 컨텍스트 (기본값: document)
     * @returns {Element|null} 매칭되는 첫 번째 DOM 요소
     */
    const $ = (sel, ctx = document) => ctx.querySelector(sel);

    /**
     * querySelectorAll 축약 유틸리티 함수 (배열로 반환)
     * @param {string} sel - CSS 선택자 문자열
     * @param {Element} ctx - 검색 컨텍스트 (기본값: document)
     * @returns {Element[]} 매칭되는 모든 DOM 요소의 배열
     */
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    /** @type {Element} 메인 콘텐츠 영역 - 모든 페이지가 이 안에 렌더링됨 */
    const mainContent = $('#mainContent');
    /** @type {Element} 사이드바 내비게이션 영역 */
    const sidebar = $('#sidebar');
    /** @type {Element} 모바일 환경에서 사이드바를 열고 닫는 햄버거 메뉴 버튼 */
    const mobileMenuBtn = $('#mobileMenuBtn');
    /** @type {Element} 라이트/다크 테마 전환 토글 버튼 */
    const themeToggle = $('#themeToggle');

    // ============ Theme (default: light/white-blue) ============
    // 테마 시스템: 라이트(기본) / 다크 모드 전환
    // localStorage에 'gameui-theme' 키로 사용자 선택을 저장하여 새로고침 후에도 유지

    /** @type {string|null} localStorage에서 가져온 저장된 테마 값 ('light' 또는 'dark') */
    const savedTheme = localStorage.getItem('gameui-theme');
    // 저장된 테마가 다크면 HTML root 요소에 data-theme="dark" 속성 적용
    if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    // 테마 토글 버튼 클릭 이벤트: 현재 테마를 반전시키고 localStorage에 저장
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
        localStorage.setItem('gameui-theme', isDark ? 'light' : 'dark');
    });

    // ============ Mobile Menu ============
    // 모바일 메뉴 토글: 햄버거 버튼 클릭 시 사이드바 열기/닫기

    // 모바일 메뉴 버튼 클릭 시 사이드바에 'open' 클래스를 토글
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // 사이드바 외부 클릭 시 자동으로 사이드바 닫기 (모바일 UX 개선)
    document.addEventListener('click', (e) => {
        // 사이드바가 열려있고, 클릭 대상이 사이드바 내부도 아니고 메뉴 버튼도 아닌 경우
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
            sidebar.classList.remove('open');
        }
    });

    // ============ Router ============
    // Hash 기반 SPA 라우터: URL의 #해시 부분을 읽어 해당 페이지를 렌더링
    // 예: #/ → 홈, #/components/buttons → 버튼 컴포넌트 상세, #/ux-laws → UX 법칙 목록

    /**
     * 현재 URL 해시에서 라우트 경로를 추출
     * @returns {string} 해시에서 '#'을 제거한 경로 문자열 (기본값: '/')
     * @example getRoute() // URL이 "#/components/buttons"이면 → "/components/buttons"
     */
    function getRoute() {
        return window.location.hash.slice(1) || '/';
    }

    /**
     * 지정된 경로로 해시 내비게이션 수행
     * @param {string} path - 이동할 경로 (예: '/components/buttons')
     */
    function navigate(path) {
        window.location.hash = path;
    }

    /**
     * 사이드바 내비게이션에서 현재 라우트에 해당하는 항목을 활성화(active) 처리
     * - 모든 nav-item에서 active 클래스 제거 후, 현재 경로와 일치하는 항목에 추가
     * - 활성 항목이 카테고리 안에 있으면 해당 카테고리를 자동으로 펼침
     */
    function updateActiveNav() {
        const route = getRoute();
        $$('.nav-item').forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            // 현재 라우트와 href가 일치하는 항목 찾기
            if (href === '#' + route || (route === '/' && href === '#/')) {
                item.classList.add('active');
                // 부모 카테고리 자동 열기
                const parentCat = item.closest('.nav-category');
                if (parentCat && !parentCat.classList.contains('open')) {
                    parentCat.classList.add('open');
                }
            }
        });
    }

    /**
     * 메인 라우터 함수: 현재 해시 경로를 분석하여 적절한 렌더링 함수를 호출
     * - 경로 매칭 순서: 홈(/) → 컴포넌트 상세 → UX 법칙 목록 → UX 법칙 상세 → 체크리스트 → 폴백(홈)
     * - 페이지 전환 시 사이드바 닫기, 스크롤 위치 초기화 수행
     */
    function route() {
        const path = getRoute();
        updateActiveNav();
        sidebar.classList.remove('open'); // 모바일에서 페이지 전환 시 사이드바 닫기
        mainContent.scrollTop = 0; // 콘텐츠 영역 스크롤 초기화
        window.scrollTo(0, 0); // 전체 윈도우 스크롤 초기화

        // 경로에 따라 적절한 페이지 렌더링 함수 호출
        if (path === '/') {
            renderHome();
        } else if (path.startsWith('/components/')) {
            // 컴포넌트 ID 추출 (예: '/components/buttons' → 'buttons')
            const compId = path.split('/components/')[1];
            const comp = COMPONENTS[compId];
            // 참조 컴포넌트(Material Design 기반)와 게임 전용 컴포넌트를 구분하여 렌더링
            if (comp && comp.type === 'reference') {
                renderReferenceComponent(compId);
            } else {
                renderComponentDetail(compId);
            }
        } else if (path === '/ux-laws') {
            renderUXLaws();
        } else if (path.startsWith('/ux-laws/')) {
            // UX 법칙 ID 추출 (예: '/ux-laws/fitts-law' → 'fitts-law')
            const lawId = path.split('/ux-laws/')[1];
            renderUXLawDetail(lawId);
        } else if (path === '/checklist') {
            renderChecklist();
        } else {
            // 매칭되지 않는 경로는 홈으로 폴백
            renderHome();
        }
    }

    // 해시 변경 이벤트 리스너: URL 해시가 변경될 때마다 라우터 실행
    window.addEventListener('hashchange', route);

    // ============ Dynamic Sidebar ============
    // 동적 사이드바 생성: data.js의 데이터를 기반으로 내비게이션 메뉴를 동적 렌더링
    // - UX 법칙 카테고리(행동/인지/기억/경험)별 그룹핑
    // - 컴포넌트 카테고리(게임 전용/기본 UI)별 그룹핑
    // - 카테고리 열림/닫힘 상태를 localStorage에 저장하여 유지

    /**
     * 사이드바 내비게이션을 동적으로 생성하는 함수
     * - 홈 링크, UX 법칙(카테고리별), 컴포넌트(카테고리별), 체크리스트 메뉴 구성
     * - 각 카테고리는 접기/펼치기(아코디언) 가능
     * - localStorage에서 이전 열림 상태를 복원
     */
    function renderSidebar() {
        const nav = $('#sidebarNav');
        if (!nav) return;

        // localStorage에서 이전에 열려있던 카테고리 목록을 복원 (기본값: game-specific만 열림)
        const openCats = JSON.parse(localStorage.getItem('gameui-open-cats') || '["game-specific"]');

        // UX 법칙을 카테고리(행동/인지/기억/경험)별로 그룹핑하여 객체로 변환
        const uxLawCategories = {};
        UX_LAWS.forEach(law => {
            if (!uxLawCategories[law.category]) uxLawCategories[law.category] = [];
            uxLawCategories[law.category].push(law);
        });
        /** @type {string[]} UX 법칙 카테고리 표시 순서 */
        const uxCatOrder = ['행동', '인지', '기억', '경험'];

        let html = `
            <a href="#/" class="nav-item active" data-page="home">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                <span>홈</span>
            </a>

            <div class="nav-section-title">UX 법칙</div>
            <a href="#/ux-laws" class="nav-item" data-page="ux-laws">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                <span>UX 법칙 개요</span>
            </a>
        `;

        // UX 법칙 카테고리별로 사이드바 아코디언 메뉴 생성
        uxCatOrder.forEach(catName => {
            const laws = uxLawCategories[catName] || [];
            if (!laws.length) return; // 해당 카테고리에 법칙이 없으면 건너뜀
            const catId = 'uxlaw-' + catName; // 카테고리 고유 ID (예: 'uxlaw-행동')
            const isOpen = openCats.includes(catId); // 이전에 열려있었는지 확인
            // 각 카테고리별 아이콘 SVG 정의
            const catIcons = {
                '행동': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
                '인지': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
                '기억': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5"/></svg>',
                '경험': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>'
            };
            html += `
                <div class="nav-category ${isOpen ? 'open' : ''}" data-cat="${catId}">
                    <div class="nav-category-header" onclick="toggleNavCategory('${catId}')">
                        <span class="nav-cat-icon">${catIcons[catName] || ''}</span>
                        <span class="nav-cat-name">${catName}</span>
                        <span class="nav-cat-count">${laws.length}</span>
                        <svg class="nav-cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                    <div class="nav-category-items">
            `;
            // 카테고리 내 개별 UX 법칙 항목을 서브 내비게이션으로 추가
            laws.forEach(law => {
                html += `
                    <a href="#/ux-laws/${law.id}" class="nav-item nav-sub-item" data-page="uxlaw-${law.id}">
                        <span>${law.name}</span>
                    </a>
                `;
            });
            html += `</div></div>`;
        });

        // 컴포넌트 섹션 구분선
        html += `<div class="nav-section-title">컴포넌트</div>`;

        // COMPONENT_CATEGORIES(data.js 정의)를 순회하며 컴포넌트 카테고리별 아코디언 메뉴 생성
        COMPONENT_CATEGORIES.forEach(cat => {
            const isOpen = openCats.includes(cat.id);
            html += `
                <div class="nav-category ${isOpen ? 'open' : ''}" data-cat="${cat.id}">
                    <div class="nav-category-header" onclick="toggleNavCategory('${cat.id}')">
                        <span class="nav-cat-icon">${cat.icon}</span>
                        <span class="nav-cat-name">${cat.name}</span>
                        <span class="nav-cat-count">${cat.items.length}</span>
                        <svg class="nav-cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                    <div class="nav-category-items">
            `;
            // 카테고리 내 개별 컴포넌트 항목을 서브 내비게이션으로 추가
            cat.items.forEach(compId => {
                const comp = COMPONENTS[compId];
                if (!comp) return;
                // 참조 컴포넌트(Material Design 기반)는 'nav-ref' 클래스로 시각 구분
                const isRef = comp.type === 'reference';
                html += `
                    <a href="#/components/${compId}" class="nav-item nav-sub-item ${isRef ? 'nav-ref' : ''}" data-page="comp-${compId}">
                        ${comp.icon}
                        <span>${comp.name}</span>
                    </a>
                `;
            });
            html += `</div></div>`;
        });

        html += `
            <div class="nav-section-title">체크리스트</div>
            <a href="#/checklist" class="nav-item" data-page="checklist">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                <span>UI/UX 체크리스트</span>
            </a>
        `;

        // 조립된 HTML을 사이드바 내비게이션에 삽입
        nav.innerHTML = html;
    }

    /**
     * 사이드바 카테고리 아코디언 토글 (전역 함수)
     * - HTML onclick에서 직접 호출되므로 window 객체에 등록
     * - 카테고리의 열림/닫힘 상태를 localStorage에 자동 저장
     * @param {string} catId - 토글할 카테고리 ID (예: 'game-specific', 'uxlaw-행동')
     */
    window.toggleNavCategory = function(catId) {
        const cat = $(`.nav-category[data-cat="${catId}"]`);
        if (!cat) return;
        cat.classList.toggle('open');
        // 현재 열려있는 모든 카테고리의 ID를 수집하여 localStorage에 저장
        const allOpen = [...document.querySelectorAll('.nav-category.open')].map(el => el.dataset.cat);
        localStorage.setItem('gameui-open-cats', JSON.stringify(allOpen));
    };

    // 애플리케이션 시작 시 사이드바를 최초 렌더링
    renderSidebar();

    // ============ Home Page ============
    // 홈 페이지 렌더링: 히어로 섹션, 게임 전용 컴포넌트 그리드, 기본 UI 컴포넌트 그리드, UX 법칙 미리보기

    /**
     * 홈 페이지(랜딩 페이지)를 렌더링하는 함수
     * - 히어로 영역: 프로필, 통계(컴포넌트 수, UX 법칙 수, 와이어프레임 수)
     * - 게임 전용 컴포넌트 카드 그리드 (buttons, hud, inventory 등)
     * - 기본 UI 참조 컴포넌트 카드 그리드 (Material Design 기반)
     * - UX 법칙 미리보기 (상위 6개)
     */
    function renderHome() {
        /** @type {Object[]} 모든 컴포넌트 객체 배열 */
        const compEntries = Object.values(COMPONENTS);
        /** @type {Object[]} 게임 전용 컴포넌트 (type !== 'reference') */
        const fullComps = compEntries.filter(c => c.type !== 'reference');
        /** @type {Object[]} 참조 컴포넌트 (Material Design 기반, type === 'reference') */
        const refComps = compEntries.filter(c => c.type === 'reference');
        mainContent.innerHTML = `
        <div class="page-enter">
            <div class="home-hero">
                <div class="hero-brand">
                    <img src="KakaoTalk_20251116_173655934.png" alt="Patrick" class="hero-avatar"/>
                    <div class="hero-badge">Game UI/UX Designer</div>
                </div>
                <h1>Patrick's<br><span class="accent">Game UI/UX</span> Design</h1>
                <p class="subtitle">
                    게임 인터페이스의 모든 것을 담은 포트폴리오 & 컴포넌트 라이브러리입니다.
                    인터랙티브 데모, ${refComps.length}개 참조 컴포넌트, UX 법칙, UI/UX 체크리스트를 탐험하세요.
                </p>
                <div class="home-stats">
                    <div class="stat-item">
                        <span class="stat-number">${compEntries.length}</span>
                        <span class="stat-label">컴포넌트</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${UX_LAWS.length}</span>
                        <span class="stat-label">UX 법칙</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${fullComps.length}</span>
                        <span class="stat-label">와이어프레임</span>
                    </div>
                </div>
            </div>

            <h2 class="section-title">게임 전용 컴포넌트</h2>
            <div class="component-grid">
                ${fullComps.map(comp => `
                    <a href="#/components/${comp.id}" class="component-card">
                        <div class="component-card-icon">${comp.icon}</div>
                        <h3>${comp.name}</h3>
                        <p>${comp.summary}</p>
                    </a>
                `).join('')}
            </div>

            <h2 class="section-title">기본 UI 컴포넌트</h2>
            <p style="color:var(--text-secondary);margin-bottom:var(--space-lg);font-size:0.9rem;">Material Design 3 & Lithium Design System 기반 — 게임 UI에 맞춘 설명과 가이드라인</p>
            <div class="component-grid">
                ${refComps.map(comp => `
                    <a href="#/components/${comp.id}" class="component-card component-card-ref">
                        <div class="component-card-icon">${comp.icon}</div>
                        <h3>${comp.name}</h3>
                        <p>${comp.summary}</p>
                    </a>
                `).join('')}
            </div>

            <h2 class="section-title">UX 법칙</h2>
            <div class="ux-laws-grid">
                ${UX_LAWS.slice(0, 6).map(law => `
                    <a href="#/ux-laws/${law.id}" class="ux-law-card" style="text-decoration:none;color:inherit;">
                        <div class="ux-law-visual">${law.visual}</div>
                        <div class="ux-law-content">
                            <h3>${law.name}</h3>
                            <p>${law.principle}</p>
                            <span class="ux-law-tag">${law.category}</span>
                        </div>
                    </a>
                `).join('')}
            </div>

            <div style="margin-top: var(--space-xl);">
                <a href="#/ux-laws" class="back-btn" style="color: var(--accent);">
                    모든 ${UX_LAWS.length}개 UX 법칙 보기 →
                </a>
            </div>
        </div>`;
    }

    // ============ M3 Sub-type Cards ============
    // M3 Material Design 스타일의 하위 유형 카드 렌더링
    // 각 컴포넌트의 m3SubTypes 배열을 SVG 일러스트 + 설명 카드로 렌더링

    /**
     * M3 하위 유형 카드 섹션을 HTML 문자열로 반환
     * @param {Array} subTypes - m3SubTypes 배열 [{name, nameKo, description, svg, gameContext?}]
     * @returns {string} 하위 유형 카드 그리드 HTML (비어있으면 빈 문자열)
     */
    function renderM3SubTypes(subTypes) {
        if (!subTypes || !subTypes.length) return '';
        return `
            <div class="ref-section">
                <h2 class="section-title">하위 유형 (Sub-types)</h2>
                <div class="subtype-grid">
                    ${subTypes.map(st => `
                        <div class="subtype-card">
                            <div class="subtype-illustration">
                                ${st.svg}
                            </div>
                            <div class="subtype-info">
                                <div class="subtype-name-en">${st.name}</div>
                                <h4>${st.nameKo}</h4>
                                <p>${st.description}</p>
                                ${st.gameContext ? `<div class="subtype-game-context"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:-2px;margin-right:4px;"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"/></svg>${st.gameContext}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // ============ Component Detail Page ============
    // 게임 전용 컴포넌트 상세 페이지: Anatomy 다이어그램, 플랫폼별 설명, 인터랙티브 데모, 가이드라인

    /**
     * 게임 전용 컴포넌트의 상세 페이지를 렌더링하는 함수
     * - 브레드크럼 내비게이션
     * - Anatomy(구조 분석) 다이어그램 (SVG + 파트 설명)
     * - M3 하위 유형 카드 (m3SubTypes 필드가 있는 경우)
     * - 게임 화면 배치 와이어프레임
     * - PC/모바일 플랫폼별 탭 전환 (특성, 설명, 기능 목록)
     * - 인터랙티브 데모 영역 (renderDemo()로 동적 생성)
     * - 디자인 가이드라인 및 관련 UX 법칙 링크
     * @param {string} compId - 컴포넌트 ID (예: 'buttons', 'hud', 'inventory')
     */
    function renderComponentDetail(compId) {
        const comp = COMPONENTS[compId];
        if (!comp) { renderHome(); return; } // 유효하지 않은 ID면 홈으로 리다이렉트

        /** @type {string[]} 지원 플랫폼 목록 */
        const platforms = ['pc', 'mobile'];
        /** @type {Object} 플랫폼 코드 → 표시 이름 매핑 */
        const platformNames = { pc: 'PC', mobile: '모바일' };
        /** @type {Object} 플랫폼 코드 → 아이콘 이모지 매핑 */
        const platformIcons = { pc: '🖥️', mobile: '📱' };

        mainContent.innerHTML = `
        <div class="page-enter">
            <div class="breadcrumb">
                <a href="#/">홈</a> <span class="sep">/</span>
                <a href="#/">컴포넌트</a> <span class="sep">/</span>
                <span>${comp.name}</span>
            </div>

            <div class="comp-detail-header">
                <h1>${comp.name}</h1>
                <p class="description">${comp.description}</p>
            </div>

            ${comp.anatomy ? `
            <div class="comp-anatomy">
                <h2 class="section-title">Anatomy</h2>
                <div class="anatomy-diagram">
                    ${comp.anatomy.svg}
                </div>
                <ol class="anatomy-parts">
                    ${comp.anatomy.parts.map(p => `
                        <li>
                            <span class="anatomy-part-name">${p.name}</span>
                            <span class="anatomy-part-desc">${p.description}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>` : ''}

            ${comp.m3SubTypes ? renderM3SubTypes(comp.m3SubTypes) : ''}

            <!-- ── 게임 화면 배치 섹션 (PC/모바일 와이어프레임 토글) ──
                 screenWireframe가 있는 게임 전용 컴포넌트(11개)에만 표시.
                 구조: [PC][모바일] 탭 → 각 탭 안에 해당 플랫폼 와이어프레임 SVG + 설명.
                 - PC 와이어프레임: 480×270 가로(16:9), 마우스/키보드 기반 레이아웃
                 - 모바일 와이어프레임: 480×224 가로(≈19.5:9), iPhone 17 landscape 폰 프레임
                   (Dynamic Island 좌측, 상태바, 홈 인디케이터 포함)
                 - typeof 체크: 구버전 string 호환을 위한 폴백 (현재는 모두 객체)
                 - .mobile-wireframe 클래스: landscape 전환으로 별도 width 제한 불필요 -->
            ${comp.screenWireframe ? `
            <div class="screen-wireframe-section">
                <h2 class="section-title">게임 화면 배치</h2>
                <!-- 플랫폼 탭 버튼: PC(파란색) / 모바일(초록색) -->
                <div class="genre-tabs" id="genreTabs">
                    ${platforms.map((p, i) => `
                        <button class="genre-tab ${i === 0 ? 'active' : ''}" data-genre="${p}">${platformIcons[p]} ${platformNames[p]}</button>
                    `).join('')}
                </div>
                <!-- 플랫폼별 콘텐츠: 와이어프레임 SVG + 설명/특징 -->
                ${platforms.map((p, i) => `
                    <div class="genre-content ${i === 0 ? 'active' : ''}" data-genre-content="${p}">
                        <div class="wireframe-area screen-wireframe ${p === 'mobile' ? 'mobile-wireframe' : ''}">
                            <div class="wireframe-svg">${typeof comp.screenWireframe === 'string' ? comp.screenWireframe : comp.screenWireframe[p]}</div>
                        </div>
                        <div class="comp-description">
                            <h3>${comp.platforms[p].title}</h3>
                            <p>${comp.platforms[p].description}</p>
                            ${comp.platforms[p].features ? `
                            <ul>
                                ${comp.platforms[p].features.map(f => '<li>' + f + '</li>').join('')}
                            </ul>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>` : ''}

            <div class="demo-section standalone-demo">
                <div class="section-label"><span class="dot" style="background:var(--success)"></span> 인터랙티브 데모</div>
                <div class="demo-area" id="demo-rpg-${compId}">
                    <!-- 동적으로 데모가 렌더링됨 -->
                </div>
            </div>

            <div class="comp-description">
                <h3>디자인 가이드라인</h3>
                <ul>
                    ${comp.guidelines.map(g => `<li>${g}</li>`).join('')}
                </ul>
            </div>

            ${comp.relatedLaws && comp.relatedLaws.length ? `
            <div class="related-laws-section">
                <h3>관련 UX 법칙</h3>
                <div class="related-laws-grid">
                    ${comp.relatedLaws.map(lawId => {
                        const law = UX_LAWS.find(l => l.id === lawId);
                        if (!law) return '';
                        return `<a href="#/ux-laws/${law.id}" class="related-law-card">
                            <div class="related-law-visual">${law.visual}</div>
                            <div class="related-law-info">
                                <div class="related-law-name">${law.name}</div>
                                <div class="related-law-principle">${law.principle}</div>
                            </div>
                        </a>`;
                    }).join('')}
                </div>
            </div>` : ''}
        </div>`;

        // 플랫폼 탭 클릭 이벤트: PC/모바일 탭 전환 처리
        const tabs = $$('.genre-tab', mainContent);
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 모든 탭에서 active 제거 후 클릭된 탭에 active 추가
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                // 해당 플랫폼의 콘텐츠 패널만 표시
                const platform = tab.dataset.genre;
                $$('.genre-content', mainContent).forEach(c => c.classList.remove('active'));
                $(`.genre-content[data-genre-content="${platform}"]`, mainContent).classList.add('active');
            });
        });

        // 인터랙티브 데모 영역에 RPG 장르 기본 데모를 렌더링
        renderDemo('rpg', compId);
    }

    // ============ Demo Renderer ============
    // 데모 라우터: 컴포넌트 ID에 따라 적절한 인터랙티브 데모 렌더러를 호출
    // 11개 컴포넌트(buttons, progress, tooltips, hud, inventory, skillbar, chat, minimap, dialogs, navigation, cards)에 대한 데모 지원

    /**
     * 데모 라우터 함수: 컴포넌트 ID에 따라 해당 데모 렌더러를 호출
     * @param {string} genre - 게임 장르 (현재는 'rpg'가 기본, 과거에는 fps/tps/quarter도 지원)
     * @param {string} compId - 컴포넌트 ID (예: 'buttons', 'hud', 'inventory')
     */
    function renderDemo(genre, compId) {
        const container = $(`#demo-${genre}-${compId}`);
        if (!container) return;

        // 컴포넌트 ID별로 전용 데모 렌더러 함수 분기
        if (compId === 'buttons') {
            renderButtonDemo(container, genre);
        } else if (compId === 'progress') {
            renderProgressDemo(container, genre);
        } else if (compId === 'tooltips') {
            renderTooltipDemo(container, genre);
        } else if (compId === 'hud') {
            renderHUDDemo(container, genre);
        } else if (compId === 'inventory') {
            renderInventoryDemo(container, genre);
        } else if (compId === 'skillbar') {
            renderSkillbarDemo(container, genre);
        } else if (compId === 'chat') {
            renderChatDemo(container, genre);
        } else if (compId === 'minimap') {
            renderMinimapDemo(container, genre);
        } else if (compId === 'dialogs') {
            renderDialogDemo(container, genre);
        } else if (compId === 'navigation') {
            renderNavDemo(container, genre);
        } else if (compId === 'cards') {
            renderCardDemo(container, genre);
        } else {
            container.innerHTML = `<div style="text-align:center;color:var(--text-tertiary);font-size:0.85rem;">데모 준비 중...</div>`;
        }
    }

    // ---- Button Demos ----
    // 버튼 데모: RPG/FPS/TPS/쿼터뷰 각 장르별 스타일의 버튼 인터랙션 시연

    /**
     * 버튼 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG: 판타지 스타일 (공격/방어/마법 버튼, 비활성 상태 시연)
     * - FPS: 밀리터리 스타일 (각진 디자인, 아이콘 버튼)
     * - TPS: 글래스모피즘 스타일 (반투명 효과)
     * - Quarter: 3D 눌림 효과 (건설 게임 스타일, 세그먼트 버튼)
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderButtonDemo(container, genre) {
        /** @type {Object} 장르별 버튼 데모 HTML 템플릿 */
        const demos = {
            rpg: `
                <div style="display:flex;flex-direction:column;gap:12px;align-items:center;">
                    <button class="demo-btn demo-btn-rpg" onclick="this.style.transform='scale(0.95)';setTimeout(()=>this.style.transform='',150)">⚔️ 공격하기</button>
                    <button class="demo-btn demo-btn-rpg" style="opacity:0.8;border-color:#8B6914;" onclick="this.style.transform='scale(0.95)';setTimeout(()=>this.style.transform='',150)">🛡️ 방어</button>
                    <button class="demo-btn demo-btn-rpg" style="opacity:0.4;cursor:not-allowed;filter:grayscale(0.5);" title="MP 부족">🔮 마법 (MP 부족)</button>
                    <span style="font-size:0.7rem;color:var(--text-tertiary);">버튼을 클릭해보세요</span>
                </div>`,
            fps: `
                <div style="display:flex;flex-direction:column;gap:12px;align-items:center;">
                    <button class="demo-btn demo-btn-fps" onclick="this.textContent='ENGAGING...';setTimeout(()=>this.textContent='ENGAGE',800)">ENGAGE</button>
                    <button class="demo-btn demo-btn-fps" style="clip-path:none;border:1px solid #666;background:#1a1a1a;padding:10px 28px;">LOADOUT</button>
                    <div style="display:flex;gap:6px;">
                        <button class="demo-btn" style="width:44px;height:44px;background:#1a1a1a;border:1px solid #444;color:#ff4444;font-size:1.2rem;padding:0;" onclick="this.style.borderColor='#ff4444';setTimeout(()=>this.style.borderColor='#444',300)">⚙</button>
                        <button class="demo-btn" style="width:44px;height:44px;background:#1a1a1a;border:1px solid #444;color:#ff4444;font-size:1.2rem;padding:0;">✕</button>
                    </div>
                    <span style="font-size:0.7rem;color:var(--text-tertiary);">각진 밀리터리 스타일</span>
                </div>`,
            tps: `
                <div style="display:flex;flex-direction:column;gap:12px;align-items:center;">
                    <button class="demo-btn demo-btn-tps" onclick="this.style.background='rgba(68,170,255,0.3)';setTimeout(()=>this.style.background='',200)">인터랙션</button>
                    <button class="demo-btn demo-btn-tps" style="background:none;border-color:rgba(68,170,255,0.2);color:rgba(68,170,255,0.6);">취소</button>
                    <button class="demo-btn demo-btn-tps" style="width:48px;height:48px;border-radius:50%;padding:0;font-size:1.2rem;">+</button>
                    <span style="font-size:0.7rem;color:var(--text-tertiary);">글래스모피즘 스타일</span>
                </div>`,
            quarter: `
                <div style="display:flex;flex-direction:column;gap:12px;align-items:center;">
                    <button class="demo-btn demo-btn-quarter" onclick="this.style.transform='translateY(3px)';this.style.boxShadow='0 0 0 #2a9955';setTimeout(()=>{this.style.transform='';this.style.boxShadow='';},200)">🏠 건설하기</button>
                    <div style="display:flex;gap:6px;">
                        <button class="demo-btn demo-btn-quarter" style="padding:8px;width:44px;height:44px;font-size:1.1rem;">⚒</button>
                        <button class="demo-btn" style="padding:8px;width:44px;height:44px;font-size:1.1rem;background:rgba(68,255,136,0.15);color:var(--quarter);border:1px solid var(--quarter);border-radius:var(--radius-sm);">🗡</button>
                        <button class="demo-btn" style="padding:8px;width:44px;height:44px;font-size:1.1rem;background:rgba(68,255,136,0.15);color:var(--quarter);border:1px solid var(--quarter);border-radius:var(--radius-sm);">📜</button>
                    </div>
                    <div style="display:flex;gap:0;">
                        <button class="demo-btn demo-btn-quarter" style="border-radius:6px 0 0 6px;padding:8px 16px;font-size:0.8rem;">유닛</button>
                        <button class="demo-btn" style="border-radius:0;padding:8px 16px;font-size:0.8rem;background:rgba(68,255,136,0.08);color:rgba(68,255,136,0.5);border:1px solid rgba(68,255,136,0.2);">건물</button>
                        <button class="demo-btn" style="border-radius:0 6px 6px 0;padding:8px 16px;font-size:0.8rem;background:rgba(68,255,136,0.08);color:rgba(68,255,136,0.5);border:1px solid rgba(68,255,136,0.2);">연구</button>
                    </div>
                    <span style="font-size:0.7rem;color:var(--text-tertiary);">3D 눌림 효과</span>
                </div>`
        };
        container.innerHTML = demos[genre] || '';
    }

    // ---- Progress Bar Demos ----
    // 프로그레스 바 데모: 장르별 상태 바(HP, MP, 실드, 스태미나 등) 시연
    // 데미지 시뮬레이션 및 자동 회복 인터랙션 포함

    /**
     * 프로그레스 바 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG: HP/MP/EXP 바 + 데미지 시뮬레이션/자동 회복 버튼
     * - FPS: HEALTH/SHIELD 바 (모노스페이스 폰트, 각진 스타일)
     * - TPS: 체력/스태미나/궁극기 바 (둥근 스타일)
     * - Quarter: 건설/연구/생산 진행 바
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderProgressDemo(container, genre) {
        /** @type {Object} 장르별 바 색상 정의 */
        const colors = {
            rpg: { hp: '#ff5555', mp: '#5555ff', xp: '#ffd700' },
            fps: { hp: '#ff4444', shield: '#44aaff', reload: '#ffffff' },
            tps: { hp: '#ff5555', stamina: '#44ff88', ability: '#aa44ff' },
            quarter: { build: '#44ff88', research: '#44aaff', production: '#ffd700' }
        };
        const c = colors[genre]; // 현재 장르의 색상 객체

        let bars = '';
        if (genre === 'rpg') {
            bars = `
                <div class="demo-bar-container" style="display:flex;flex-direction:column;gap:12px;">
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.hp}">HP</span><span>750 / 1000</span></div>
                        <div class="demo-bar-track"><div class="demo-bar-fill hp" style="width:75%"></div></div>
                    </div>
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.mp}">MP</span><span>320 / 500</span></div>
                        <div class="demo-bar-track"><div class="demo-bar-fill mp" style="width:64%"></div></div>
                    </div>
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.xp}">EXP</span><span>Lv. 42</span></div>
                        <div class="demo-bar-track"><div class="demo-bar-fill xp" style="width:45%"></div></div>
                    </div>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;">
                        <button class="demo-btn demo-btn-rpg" style="font-size:0.75rem;padding:6px 16px;" onclick="animateBars(this)">⚔️ 데미지 시뮬레이션</button>
                        <button class="demo-btn demo-btn-rpg" style="font-size:0.75rem;padding:6px 16px;opacity:0.8;" onclick="startAutoHeal(this)">💚 자동 회복</button>
                    </div>
                </div>`;
        } else if (genre === 'fps') {
            bars = `
                <div class="demo-bar-container" style="display:flex;flex-direction:column;gap:12px;">
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.hp}">HEALTH</span><span class="bar-value" style="font-family:var(--font-mono);font-size:0.7rem;">85</span></div>
                        <div class="demo-bar-track" style="height:8px;border-radius:0;"><div class="demo-bar-fill" style="width:85%;background:${c.hp};border-radius:0;"></div></div>
                    </div>
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.shield}">SHIELD</span><span class="bar-value" style="font-family:var(--font-mono);font-size:0.7rem;">50</span></div>
                        <div class="demo-bar-track" style="height:8px;border-radius:0;"><div class="demo-bar-fill" style="width:50%;background:${c.shield};border-radius:0;"></div></div>
                    </div>
                    <div style="display:flex;gap:8px;">
                        <button class="demo-btn demo-btn-fps" style="font-size:0.7rem;padding:8px 20px;" onclick="animateBars(this)">SIMULATE HIT</button>
                        <button class="demo-btn demo-btn-fps" style="font-size:0.7rem;padding:8px 20px;opacity:0.8;" onclick="startAutoHeal(this)">AUTO REGEN</button>
                    </div>
                </div>`;
        } else if (genre === 'tps') {
            bars = `
                <div class="demo-bar-container" style="display:flex;flex-direction:column;gap:12px;">
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.hp}">체력</span><span>90%</span></div>
                        <div class="demo-bar-track" style="height:12px;border-radius:12px;"><div class="demo-bar-fill" style="width:90%;background:${c.hp};border-radius:12px;"></div></div>
                    </div>
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.stamina}">스태미나</span><span>70%</span></div>
                        <div class="demo-bar-track" style="height:12px;border-radius:12px;"><div class="demo-bar-fill" style="width:70%;background:${c.stamina};border-radius:12px;"></div></div>
                    </div>
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.ability}">궁극기</span><span>45%</span></div>
                        <div class="demo-bar-track" style="height:12px;border-radius:12px;"><div class="demo-bar-fill" style="width:45%;background:${c.ability};border-radius:12px;"></div></div>
                    </div>
                </div>`;
        } else {
            bars = `
                <div class="demo-bar-container" style="display:flex;flex-direction:column;gap:12px;">
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.build}">🏠 건설</span><span>67%</span></div>
                        <div class="demo-bar-track"><div class="demo-bar-fill" style="width:67%;background:${c.build};"></div></div>
                    </div>
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.research}">🔬 연구</span><span>30%</span></div>
                        <div class="demo-bar-track"><div class="demo-bar-fill" style="width:30%;background:${c.research};"></div></div>
                    </div>
                    <div>
                        <div class="demo-bar-label"><span style="color:${c.production}">⚒ 생산</span><span>3/5</span></div>
                        <div class="demo-bar-track"><div class="demo-bar-fill" style="width:60%;background:${c.production};"></div></div>
                    </div>
                </div>`;
        }
        container.innerHTML = bars;
    }

    // ---- Tooltip Demo ----
    // 툴팁 데모: 장르별 아이템/무기/능력/건물 정보 툴팁 스타일 시연

    /**
     * 툴팁 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG: 아이템 툴팁 (등급, 공격력, 크리티컬 등 스탯 표시)
     * - FPS: 무기 정보 툴팁 (DMG, RPM, MAG 등 스펙 그리드)
     * - TPS: 능력 설명 툴팁 (쿨다운, 스태미나 비용)
     * - Quarter: 건물 정보 툴팁 (HP, 방어력, 건설비용)
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderTooltipDemo(container, genre) {
        const tooltips = {
            rpg: `<div class="demo-tooltip-wrapper">
                <div class="demo-tooltip show" style="position:relative;transform:none;bottom:auto;left:auto;margin-bottom:12px;">
                    <div class="tooltip-title">🗡️ 엑스칼리버</div>
                    <div class="tooltip-desc">전설의 성검. 착용 시 모든 능력치가 상승합니다.</div>
                    <div class="tooltip-stats">
                        <div class="tooltip-stat">공격력 <span>+250</span></div>
                        <div class="tooltip-stat">크리티컬 <span>+15%</span></div>
                    </div>
                    <div style="margin-top:8px;font-size:0.65rem;color:var(--rpg);">⭐ 전설 등급</div>
                </div>
                <button class="demo-btn demo-btn-rpg" style="font-size:0.8rem;padding:8px 20px;">🗡️ 아이템에 마우스를 올려보세요</button>
            </div>`,
            fps: `<div class="demo-tooltip-wrapper">
                <div class="demo-tooltip show" style="position:relative;transform:none;bottom:auto;left:auto;margin-bottom:12px;background:#1a1a1a;border-color:#444;">
                    <div style="font-weight:600;font-size:0.85rem;color:#fff;">AK-47</div>
                    <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:4px;">돌격 소총 | 7.62mm</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:8px;font-size:0.7rem;font-family:var(--font-mono);">
                        <span style="color:#888;">DMG</span><span style="color:#ff4444;text-align:right;">47</span>
                        <span style="color:#888;">RPM</span><span style="color:#fff;text-align:right;">600</span>
                        <span style="color:#888;">MAG</span><span style="color:#fff;text-align:right;">30</span>
                    </div>
                </div>
                <div style="width:44px;height:44px;background:#1a1a1a;border:1px solid #444;display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin:0 auto;">🔫</div>
            </div>`,
            tps: `<div class="demo-tooltip-wrapper">
                <div class="demo-tooltip show" style="position:relative;transform:none;bottom:auto;left:auto;margin-bottom:12px;background:rgba(30,30,45,0.95);border-color:rgba(68,170,255,0.3);backdrop-filter:blur(8px);">
                    <div style="font-weight:600;font-size:0.85rem;color:var(--tps);">대시</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:4px;">전방으로 빠르게 이동합니다.</div>
                    <div style="margin-top:8px;display:flex;gap:12px;font-size:0.7rem;">
                        <span style="color:var(--text-tertiary);">쿨다운 <span style="color:var(--tps);">5초</span></span>
                        <span style="color:var(--text-tertiary);">스태미나 <span style="color:var(--success);">20</span></span>
                    </div>
                </div>
                <button class="demo-btn demo-btn-tps" style="font-size:0.8rem;">능력 확인</button>
            </div>`,
            quarter: `<div class="demo-tooltip-wrapper">
                <div class="demo-tooltip show" style="position:relative;transform:none;bottom:auto;left:auto;margin-bottom:12px;border-color:rgba(68,255,136,0.2);">
                    <div style="font-weight:600;font-size:0.85rem;color:var(--quarter);">🏰 성채</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:4px;">방어력이 높은 핵심 건물입니다.</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:8px;font-size:0.7rem;">
                        <span style="color:#888;">HP</span><span style="color:var(--quarter);text-align:right;">5000</span>
                        <span style="color:#888;">방어력</span><span style="color:var(--quarter);text-align:right;">120</span>
                        <span style="color:#888;">건설비용</span><span style="color:var(--rpg);text-align:right;">💰 800</span>
                    </div>
                </div>
                <div style="width:48px;height:48px;background:rgba(68,255,136,0.1);border:1px solid var(--quarter);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin:0 auto;">🏰</div>
            </div>`
        };
        container.innerHTML = tooltips[genre] || '';
    }

    // ---- HUD Demo ----
    // HUD(Heads-Up Display) 데모: 장르별 게임 화면 오버레이 UI 레이아웃 시연

    /**
     * HUD 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG: 레벨/HP/MP 바, 미니맵, 스킬바, 퀘스트 추적기
     * - FPS: 크로스헤어, HP 바, 미니맵, 탄약 카운터, 수류탄 표시
     * - TPS: 캐릭터 아바타+HP/스태미나, 미션 목표, 능력 슬롯
     * - Quarter: 자원 표시(금/보석/나무/철), 미니맵, 커맨드 바, 유닛 선택 정보
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderHUDDemo(container, genre) {
        const huds = {
            rpg: `<div class="demo-hud" style="background:linear-gradient(180deg, #1a2a1a, #0a150a);">
                <div class="hud-top-left">
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                        <div style="width:24px;height:24px;background:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.5rem;color:white;font-weight:700;">42</div>
                        <span style="font-size:0.55rem;color:rgba(255,255,255,0.7);">용사</span>
                    </div>
                    <div class="hud-minibar"><div class="hud-minibar-fill hp"></div></div>
                    <div class="hud-minibar"><div class="hud-minibar-fill" style="background:var(--tps);width:60%;"></div></div>
                    <div class="hud-minibar"><div class="hud-minibar-fill" style="background:var(--rpg);width:45%;height:100%;"></div></div>
                </div>
                <div class="hud-top-right">
                    <div style="width:60px;height:60px;border-radius:50%;border:1.5px solid rgba(255,215,0,0.3);background:radial-gradient(circle,#1a2a1a,#0a150a);position:relative;">
                        <div style="position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--tps);border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 4px var(--tps);"></div>
                        <div style="position:absolute;top:25%;left:65%;width:3px;height:3px;background:var(--danger);border-radius:50%;"></div>
                    </div>
                </div>
                <div class="hud-bottom-center">
                    <div class="demo-skillbar" style="transform:scale(0.65);transform-origin:center bottom;">
                        <div class="skill-slot">⚔<span class="keybind">1</span></div>
                        <div class="skill-slot">🛡<span class="keybind">2</span></div>
                        <div class="skill-slot">🔮<span class="keybind">3</span></div>
                        <div class="skill-slot">❤<span class="keybind">4</span></div>
                    </div>
                </div>
                <div class="hud-bottom-right"><div class="hud-label">퀘스트: 드래곤 퇴치</div><div class="hud-value" style="color:var(--rpg);">3/5</div></div>
            </div>`,
            fps: `<div class="demo-hud">
                <div class="hud-crosshair"></div>
                <div class="hud-top-left">
                    <div class="hud-minibar" style="width:80px;"><div class="hud-minibar-fill hp" style="width:85%;"></div></div>
                    <div class="hud-label">HEALTH 85</div>
                </div>
                <div class="hud-top-right">
                    <div style="width:50px;height:50px;border:1px solid rgba(255,255,255,0.15);background:rgba(0,0,0,0.3);position:relative;">
                        <div style="position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--tps);border-radius:50%;transform:translate(-50%,-50%);"></div>
                        <div style="position:absolute;top:30%;left:70%;width:3px;height:3px;background:var(--danger);border-radius:50%;"></div>
                        <div style="position:absolute;top:60%;left:20%;width:3px;height:3px;background:var(--danger);border-radius:50%;"></div>
                    </div>
                </div>
                <div class="hud-bottom-right">
                    <div class="hud-ammo">24 <span>/ 120</span></div>
                    <div class="hud-label">AR-15</div>
                </div>
                <div class="hud-bottom-left">
                    <div style="display:flex;gap:4px;">
                        <div style="width:8px;height:24px;background:rgba(255,68,68,0.6);border-radius:2px;"></div>
                        <div style="width:8px;height:24px;background:rgba(68,170,255,0.4);border-radius:2px;"></div>
                        <div style="width:8px;height:24px;background:rgba(255,255,255,0.1);border-radius:2px;"></div>
                    </div>
                    <div class="hud-label" style="margin-top:2px;">GRENADES</div>
                </div>
            </div>`,
            tps: `<div class="demo-hud" style="background:linear-gradient(180deg, #1a1a2a, #0a0a15);">
                <div class="hud-top-left">
                    <div style="display:flex;align-items:center;gap:6px;">
                        <div style="width:28px;height:28px;background:rgba(68,170,255,0.2);border:1px solid rgba(68,170,255,0.4);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.6rem;">🧑</div>
                        <div>
                            <div class="hud-minibar" style="width:80px;"><div class="hud-minibar-fill hp" style="width:90%;"></div></div>
                            <div class="hud-minibar" style="width:80px;"><div class="hud-minibar-fill" style="background:var(--success);width:70%;"></div></div>
                        </div>
                    </div>
                </div>
                <div class="hud-top-right">
                    <div class="hud-label">미션 목표</div>
                    <div class="hud-value" style="color:var(--tps);">거점 확보 ▶ 120m</div>
                </div>
                <div class="hud-bottom-center">
                    <div style="display:flex;gap:4px;transform:scale(0.7);transform-origin:center bottom;">
                        <div class="skill-slot">⚡<span class="keybind">Q</span></div>
                        <div class="skill-slot">🔥<span class="keybind">E</span></div>
                        <div class="skill-slot" style="width:56px;border-color:var(--accent);">💫<span class="keybind">R</span></div>
                    </div>
                </div>
            </div>`,
            quarter: `<div class="demo-hud" style="background:linear-gradient(180deg, #152015, #0a150a);">
                <div class="hud-top-left">
                    <div style="display:flex;gap:12px;font-size:0.55rem;font-family:var(--font-mono);">
                        <span style="color:var(--rpg);">💰 1,250</span>
                        <span style="color:var(--tps);">💎 340</span>
                        <span style="color:var(--success);">🌲 890</span>
                        <span style="color:#ff8844;">🔨 560</span>
                    </div>
                </div>
                <div class="hud-top-right">
                    <div style="width:70px;height:70px;border:1px solid rgba(68,255,136,0.15);background:rgba(0,0,0,0.3);position:relative;">
                        <div style="position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--tps);border-radius:50%;transform:translate(-50%,-50%);"></div>
                        <div style="position:absolute;top:20%;left:30%;width:6px;height:6px;background:rgba(68,255,136,0.3);border:1px solid rgba(68,255,136,0.2);"></div>
                        <div style="position:absolute;top:60%;left:70%;width:8px;height:8px;background:rgba(68,255,136,0.2);border:1px solid rgba(68,255,136,0.15);"></div>
                    </div>
                </div>
                <div class="hud-bottom-center">
                    <div style="display:flex;gap:4px;transform:scale(0.65);transform-origin:center bottom;">
                        <div class="skill-slot" style="border-color:var(--quarter);">🏠<span class="keybind">B</span></div>
                        <div class="skill-slot" style="border-color:var(--quarter);">⚒<span class="keybind">V</span></div>
                        <div class="skill-slot" style="border-color:var(--quarter);">🗡<span class="keybind">A</span></div>
                        <div class="skill-slot" style="border-color:var(--quarter);">📜<span class="keybind">T</span></div>
                    </div>
                </div>
                <div class="hud-bottom-left">
                    <div class="hud-label" style="color:var(--quarter);">선택: 기사단 x5</div>
                    <div class="hud-minibar" style="width:60px;"><div class="hud-minibar-fill" style="background:var(--quarter);width:100%;"></div></div>
                </div>
            </div>`
        };
        container.innerHTML = huds[genre] || '';
    }

    // ---- Inventory Demo ----
    // 인벤토리 데모: 드래그 앤 드롭으로 아이템 이동이 가능한 그리드형 인벤토리

    /**
     * 인벤토리 컴포넌트 인터랙티브 데모를 렌더링
     * - 15칸 그리드 슬롯 (8개 아이템 + 7개 빈 슬롯)
     * - 아이템별 등급 표시 (legendary, epic, rare)
     * - 소모품 수량 표시
     * - HTML5 Drag & Drop API를 사용한 아이템 이동
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 (현재 장르 무관 동일 UI)
     */
    function renderInventoryDemo(container, genre) {
        /** @type {Object[]} 인벤토리 아이템 목록 (emoji: 아이콘, rarity: 등급, count: 수량) */
        const items = [
            { emoji: '🗡', rarity: 'legendary' },
            { emoji: '🛡', rarity: 'epic' },
            { emoji: '🧪', rarity: '', count: 5 },
            { emoji: '💎', rarity: 'rare' },
            { emoji: '🍖', rarity: '', count: 12 },
            { emoji: '📜', rarity: 'rare' },
            { emoji: '🔮', rarity: 'epic' },
            { emoji: '🏹', rarity: '' },
            { emoji: '', rarity: '' },
            { emoji: '', rarity: '' },
            { emoji: '', rarity: '' },
            { emoji: '', rarity: '' },
            { emoji: '', rarity: '' },
            { emoji: '', rarity: '' },
            { emoji: '', rarity: '' },
        ];

        container.innerHTML = `
        <div class="demo-inventory">
            <div class="inventory-header">
                <span>🎒 인벤토리</span>
                <span style="color:var(--text-tertiary);font-size:0.75rem;">8/15</span>
            </div>
            <div class="inventory-grid">
                ${items.map((item, i) => `
                    <div class="inventory-slot ${item.rarity}" data-idx="${i}"
                         ${item.emoji ? 'draggable="true" style="cursor:grab;"' : ''}
                         ondragstart="invDragStart(event)" ondragover="invDragOver(event)"
                         ondrop="invDrop(event)" ondragend="invDragEnd(event)"
                         ondragenter="invDragEnter(event)" ondragleave="invDragLeave(event)">
                        ${item.emoji}
                        ${item.count ? `<span class="count">${item.count}</span>` : ''}
                    </div>
                `).join('')}
            </div>
            <div style="text-align:center;font-size:0.6rem;color:var(--text-tertiary);margin-top:6px;">드래그 앤 드롭으로 아이템 이동</div>
        </div>`;
    }

    // ---- Skillbar Demo ----
    // 스킬바 데모: 장르별 스킬/능력 슬롯 + 클릭 시 쿨다운 효과 애니메이션

    /**
     * 스킬바 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG: 8개 스킬 슬롯 (1~7 + R키 바인딩)
     * - FPS: 3개 슬롯 (무기, 수류탄, 치료킷)
     * - TPS: 4개 능력 슬롯 (Q/E/F/R 키 바인딩)
     * - Quarter: 5개 커맨드 슬롯 (건설/생산/공격/이동/기술)
     * - 클릭 시 쿨다운 오버레이 애니메이션 (카운트다운 타이머)
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderSkillbarDemo(container, genre) {
        /** @type {Object} 장르별 스킬 슬롯 정의 (icon: 이모지, key: 키바인딩, cd: 쿨다운 시간) */
        const skillSets = {
            rpg: [
                { icon: '⚔', key: '1', cd: '' },
                { icon: '🛡', key: '2', cd: '' },
                { icon: '🔮', key: '3', cd: '3s' },
                { icon: '❤', key: '4', cd: '' },
                { icon: '⚡', key: '5', cd: '8s' },
                { icon: '🔥', key: '6', cd: '' },
                { icon: '🌀', key: '7', cd: '' },
                { icon: '💫', key: 'R', cd: '' },
            ],
            fps: [
                { icon: '🔫', key: '1', cd: '' },
                { icon: '💣', key: 'G', cd: '' },
                { icon: '🩹', key: '4', cd: '5s' },
            ],
            tps: [
                { icon: '⚡', key: 'Q', cd: '' },
                { icon: '🔥', key: 'E', cd: '3s' },
                { icon: '🛡', key: 'F', cd: '' },
                { icon: '💫', key: 'R', cd: '60s' },
            ],
            quarter: [
                { icon: '🏠', key: 'B', cd: '' },
                { icon: '⚒', key: 'V', cd: '' },
                { icon: '🗡', key: 'A', cd: '' },
                { icon: '🏃', key: 'M', cd: '' },
                { icon: '📜', key: 'T', cd: '' },
            ]
        };

        const skills = skillSets[genre] || [];
        container.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div class="demo-skillbar">
                ${skills.map((s, i) => `
                    <div class="skill-slot" data-cd="${s.cd}" data-idx="${i}">
                        ${s.icon}
                        <span class="keybind">${s.key}</span>
                    </div>
                `).join('')}
            </div>
            <span style="font-size:0.65rem;color:var(--text-tertiary);">스킬을 클릭하면 쿨다운 효과를 볼 수 있습니다</span>
        </div>`;

        // 각 스킬 슬롯에 클릭 이벤트 리스너 등록: 쿨다운 애니메이션 처리
        container.querySelectorAll('.skill-slot').forEach(slot => {
            const cdTime = slot.dataset.cd; // data-cd 속성에서 쿨다운 시간 읽기
            slot.addEventListener('click', () => {
                // 이미 쿨다운 중이면 무시 (중복 클릭 방지)
                if (slot.querySelector('.cooldown-overlay')) return;
                const seconds = parseInt(cdTime) || 3; // 기본 쿨다운 3초
                // 쿨다운 오버레이 생성 및 추가
                const overlay = document.createElement('div');
                overlay.className = 'cooldown-overlay';
                overlay.textContent = seconds + 's';
                slot.appendChild(overlay);
                // 1초마다 카운트다운 갱신, 0이 되면 오버레이 제거
                let remaining = seconds;
                const timer = setInterval(() => {
                    remaining--;
                    if (remaining <= 0) {
                        clearInterval(timer);
                        overlay.remove();
                    } else {
                        overlay.textContent = remaining + 's';
                    }
                }, 1000);
            });
        });
    }

    // ---- Chat Demo ----
    // 채팅 데모: 장르별 채팅 창 + 실시간 메시지 전송 인터랙션

    /**
     * 채팅 컴포넌트 인터랙티브 데모를 렌더링
     * - 장르별 채팅 채널명 (전체 채팅/TEAM/그룹/외교)
     * - 시스템 메시지, 플레이어 메시지, 파티원 메시지 프리셋
     * - 입력 필드에서 Enter키 또는 전송 버튼으로 메시지 추가 가능
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderChatDemo(container, genre) {
        container.innerHTML = `
        <div class="demo-chat-window">
            <div class="demo-chat-header">
                <span class="online-dot"></span>
                ${genre === 'rpg' ? '💬 전체 채팅' : genre === 'fps' ? '📡 TEAM' : genre === 'tps' ? '💬 그룹' : '📜 외교'}
            </div>
            <div class="demo-chat-messages">
                <div class="demo-chat-msg"><span class="name system">[시스템]</span> 환영합니다!</div>
                <div class="demo-chat-msg"><span class="name player">플레이어1:</span> 안녕하세요</div>
                <div class="demo-chat-msg"><span class="name party">파티원:</span> 준비됐어요!</div>
                <div class="demo-chat-msg"><span class="name player">플레이어2:</span> 고고!</div>
            </div>
            <div class="demo-chat-input">
                <input type="text" placeholder="메시지를 입력하세요..." id="chatInput-${genre}" onkeydown="if(event.key==='Enter')addChatMsg('${genre}')">
                <button onclick="addChatMsg('${genre}')">전송</button>
            </div>
        </div>`;
    }

    // ---- Minimap Demo ----
    // 미니맵 데모: 클릭으로 플레이어 이동 + NPC 자동 순찰 애니메이션

    /**
     * 미니맵 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG/TPS: 원형 미니맵 (플레이어 위치, NPC 순찰, 퀘스트 마커, 영역 표시)
     * - FPS/Quarter: 사각형 미니맵 (적 위치, 영역 색상 구분)
     * - 클릭 시 플레이어 위치 이동 애니메이션
     * - NPC 순찰 자동 애니메이션 (3초 간격)
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderMinimapDemo(container, genre) {
        // RPG/TPS는 원형 미니맵, FPS/Quarter는 사각형 미니맵 사용
        if (genre === 'rpg' || genre === 'tps') {
            container.innerHTML = `
            <div class="demo-minimap" style="cursor:crosshair;" onclick="moveMinimapPlayer(event, this)">
                <div class="minimap-player" style="transition:top 0.6s ease, left 0.6s ease;"></div>
                <div class="minimap-dot minimap-npc" style="top:25%;left:65%;transition:top 2s ease,left 2s ease;"></div>
                <div class="minimap-dot minimap-npc" style="top:70%;left:30%;transition:top 2s ease,left 2s ease;"></div>
                <div class="minimap-dot" style="top:35%;left:20%;background:var(--rpg);box-shadow:0 0 4px var(--rpg);"></div>
                <div class="minimap-zone" style="top:10%;left:10%;width:30%;height:20%;"></div>
                <div class="minimap-zone" style="top:60%;left:55%;width:25%;height:25%;"></div>
                <div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);font-size:0.5rem;color:rgba(255,255,255,0.4);pointer-events:none;">클릭하여 이동</div>
            </div>`;
        } else {
            container.innerHTML = `
            <div class="demo-minimap-square" style="cursor:crosshair;" onclick="moveMinimapPlayer(event, this)">
                <div class="minimap-player" style="transition:top 0.6s ease, left 0.6s ease;"></div>
                <div class="minimap-dot minimap-npc" style="top:20%;left:75%;transition:top 2s ease,left 2s ease;"></div>
                <div class="minimap-dot minimap-npc" style="top:80%;left:25%;transition:top 2s ease,left 2s ease;"></div>
                <div class="minimap-dot minimap-npc" style="top:45%;left:15%;transition:top 2s ease,left 2s ease;"></div>
                <div class="minimap-zone" style="top:5%;left:5%;width:35%;height:30%;background:rgba(68,255,136,0.05);border-color:rgba(68,255,136,0.1);"></div>
                <div class="minimap-zone" style="top:50%;left:50%;width:40%;height:40%;background:rgba(255,68,68,0.05);border-color:rgba(255,68,68,0.1);"></div>
                <div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);font-size:0.5rem;color:rgba(255,255,255,0.4);pointer-events:none;">클릭하여 이동</div>
            </div>`;
        }
        // 미니맵 내 NPC 순찰 애니메이션 시작
        startNPCPatrol(container);
    }

    // ---- Dialog Demo ----
    // 다이얼로그(대화상자) 데모: 장르별 확인/취소 모달 UI 시연

    /**
     * 다이얼로그 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG: 퀘스트 수락 다이얼로그
     * - FPS: 매치 참가 확인 다이얼로그
     * - TPS: 장비 강화 확인 다이얼로그 (위험 경고 포함)
     * - Quarter: 동맹 제안 수락/거절 다이얼로그
     * - 수락 버튼 클릭 시 체크마크 피드백 애니메이션
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderDialogDemo(container, genre) {
        /** @type {Object} 장르별 다이얼로그 텍스트 정의 (title, msg, yes, no) */
        const themes = {
            rpg: { title: '⚔️ 퀘스트 수락', msg: '드래곤이 마을을 위협하고 있습니다. 용사여, 드래곤을 처치하겠습니까?', yes: '수락하기', no: '거절' },
            fps: { title: 'MATCH FOUND', msg: '5v5 경쟁전 매치가 찾아졌습니다. 참가하시겠습니까?', yes: 'ACCEPT', no: 'DECLINE' },
            tps: { title: '장비 강화', msg: '엑스칼리버를 +10으로 강화합니다. 실패 시 파괴될 수 있습니다.', yes: '강화하기', no: '취소' },
            quarter: { title: '🏰 동맹 제안', msg: '서방 제국이 동맹을 제안했습니다. 수락하시겠습니까?', yes: '수락', no: '거절' },
        };
        const t = themes[genre]; // 현재 장르의 텍스트 객체
        // 장르별 버튼 CSS 클래스 결정 (삼항 연산자 체인)
        const btnClass = genre === 'rpg' ? 'demo-btn-rpg' : genre === 'fps' ? 'demo-btn-fps' : genre === 'tps' ? 'demo-btn-tps' : 'demo-btn-quarter';

        container.innerHTML = `
        <div class="demo-dialog-overlay">
            <div class="demo-dialog">
                <h4>${t.title}</h4>
                <p>${t.msg}</p>
                <div class="demo-dialog-actions">
                    <button class="demo-btn" style="padding:8px 16px;font-size:0.8rem;color:var(--text-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-sm);">${t.no}</button>
                    <button class="demo-btn ${btnClass}" style="padding:8px 16px;font-size:0.8rem;" onclick="this.textContent='✓';setTimeout(()=>this.textContent='${t.yes}',1000)">${t.yes}</button>
                </div>
            </div>
        </div>`;
    }

    // ---- Navigation Demo ----
    // 내비게이션 데모: 장르별 하단 탭 바 / 메뉴 바 시연

    /**
     * 내비게이션 컴포넌트 인터랙티브 데모를 렌더링
     * - 장르별 메뉴 항목이 다르며, 클릭 시 활성 탭 전환
     * - RPG: 장비/가방/퀘스트/지도/설정
     * - FPS: 플레이/무기고/상점/설정
     * - TPS: 미션/캐릭터/상점/기록
     * - Quarter: 건설/연구/군사/외교/설정
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderNavDemo(container, genre) {
        /** @type {Object} 장르별 내비게이션 메뉴 항목 배열 */
        const navItems = {
            rpg: ['🗡 장비', '🎒 가방', '📜 퀘스트', '🗺 지도', '⚙ 설정'],
            fps: ['🎮 플레이', '🔫 무기고', '🏪 상점', '⚙ 설정'],
            tps: ['🎯 미션', '👤 캐릭터', '🏪 상점', '📊 기록'],
            quarter: ['🏠 건설', '🔬 연구', '⚔ 군사', '📜 외교', '⚙ 설정'],
        };
        const items = navItems[genre] || [];

        container.innerHTML = `
        <div style="width:100%;max-width:360px;">
            <div class="demo-nav-bar">
                ${items.map((item, i) => `
                    <div class="demo-nav-item ${i === 0 ? 'active' : ''}" onclick="this.parentElement.querySelectorAll('.demo-nav-item').forEach(n=>n.classList.remove('active'));this.classList.add('active')">
                        <span style="font-size:1.1rem;">${item.split(' ')[0]}</span>
                        <span>${item.split(' ')[1]}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }

    // ---- Card Demo ----
    // 카드 데모: 장르별 아이템/무기/캐릭터/건물 카드 스타일 시연

    /**
     * 카드 컴포넌트 인터랙티브 데모를 렌더링
     * - RPG: 아이템 카드 (골드 테두리, 등급 표시, 스탯)
     * - FPS: 무기 카드 (어두운 배경, 모노스페이스 스펙)
     * - TPS: 캐릭터 카드 (글래스모피즘, 능력치 바)
     * - Quarter: 건물 카드 (녹색 테마, 비용/HP 표시)
     * @param {Element} container - 데모가 렌더링될 DOM 컨테이너
     * @param {string} genre - 게임 장르 ('rpg'|'fps'|'tps'|'quarter')
     */
    function renderCardDemo(container, genre) {
        /** @type {Object} 장르별 카드 HTML 템플릿 */
        const cardStyles = {
            rpg: `<div style="width:200px;background:linear-gradient(180deg,#2a2000,#1a1500);border:2px solid var(--rpg);border-radius:8px;overflow:hidden;">
                <div style="height:80px;background:linear-gradient(135deg,#3a2a00,#1a1000);display:flex;align-items:center;justify-content:center;font-size:2.5rem;">🗡</div>
                <div style="padding:12px;">
                    <div style="color:var(--rpg);font-weight:700;font-size:0.9rem;">엑스칼리버</div>
                    <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:4px;">전설 · 한손검</div>
                    <div style="font-size:0.7rem;color:var(--success);margin-top:8px;">공격력 +250</div>
                </div>
            </div>`,
            fps: `<div style="width:220px;background:#1a1a1a;border:1px solid #333;overflow:hidden;">
                <div style="height:70px;background:#111;display:flex;align-items:center;justify-content:center;font-size:2.5rem;">🔫</div>
                <div style="padding:12px;">
                    <div style="color:#fff;font-weight:600;font-size:0.85rem;font-family:var(--font-mono);">AK-47</div>
                    <div style="font-size:0.7rem;color:#888;margin-top:4px;">ASSAULT RIFLE</div>
                    <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:0.65rem;font-family:var(--font-mono);">
                        <span style="color:#ff4444;">DMG 47</span>
                        <span style="color:#888;">RPM 600</span>
                    </div>
                </div>
            </div>`,
            tps: `<div style="width:200px;background:rgba(68,170,255,0.05);border:1px solid rgba(68,170,255,0.2);border-radius:16px;overflow:hidden;backdrop-filter:blur(8px);">
                <div style="height:80px;background:rgba(68,170,255,0.08);display:flex;align-items:center;justify-content:center;font-size:2.5rem;">🧑</div>
                <div style="padding:12px;">
                    <div style="color:var(--tps);font-weight:600;font-size:0.9rem;">레인저</div>
                    <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:4px;">원거리 · 딜러</div>
                    <div style="margin-top:8px;height:4px;background:rgba(68,170,255,0.1);border-radius:2px;"><div style="width:75%;height:100%;background:var(--tps);border-radius:2px;"></div></div>
                </div>
            </div>`,
            quarter: `<div style="width:200px;background:rgba(68,255,136,0.03);border:1px solid rgba(68,255,136,0.15);border-radius:8px;overflow:hidden;">
                <div style="height:70px;background:rgba(68,255,136,0.05);display:flex;align-items:center;justify-content:center;font-size:2.5rem;">🏰</div>
                <div style="padding:12px;">
                    <div style="color:var(--quarter);font-weight:600;font-size:0.9rem;">성채</div>
                    <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:4px;">방어 건물 · Tier 3</div>
                    <div style="display:flex;gap:8px;margin-top:8px;font-size:0.65rem;">
                        <span style="color:var(--rpg);">💰 800</span>
                        <span style="color:var(--quarter);">HP 5000</span>
                    </div>
                </div>
            </div>`
        };
        container.innerHTML = cardStyles[genre] || '';
    }

    // ============ UX Laws Page ============
    // UX 법칙 목록 페이지: 모든 UX 법칙을 카테고리(행동/인지/기억/경험)별로 그룹핑하여 카드 그리드로 표시

    /**
     * UX 법칙 전체 목록 페이지를 렌더링하는 함수
     * - 브레드크럼 내비게이션
     * - 카테고리별 섹션 타이틀 (색상 도트 + 카테고리명)
     * - 각 법칙을 시각적 아이콘 + 이름 + 영문명 + 원칙 요약 + 태그로 구성된 카드로 표시
     * - 카드 클릭 시 해당 UX 법칙 상세 페이지로 이동
     */
    function renderUXLaws() {
        /** @type {Object} 카테고리별 테마 색상 매핑 */
        const catColors = { '행동': '#c75c3a', '인지': '#2a6496', '기억': '#7b4fa0', '경험': '#2a8a6a' };
        /** @type {string[]} 카테고리 표시 순서 */
        const catOrder = ['행동', '인지', '기억', '경험'];
        // UX 법칙을 카테고리별로 그룹핑
        const grouped = {};
        UX_LAWS.forEach(law => {
            if (!grouped[law.category]) grouped[law.category] = [];
            grouped[law.category].push(law);
        });

        mainContent.innerHTML = `
        <div class="page-enter">
            <div class="breadcrumb">
                <a href="#/">홈</a> <span class="sep">/</span>
                <span>UX 법칙</span>
            </div>

            <div class="comp-detail-header">
                <h1>UX 법칙</h1>
                <p class="description">
                    게임 UI/UX 디자인에 적용할 수 있는 핵심 사용자 경험 법칙들입니다.
                    각 법칙이 게임 인터페이스에서 어떻게 활용되는지 살펴보세요.
                </p>
            </div>

            ${catOrder.map(catName => `
                <h2 class="section-title" style="margin-top:var(--space-2xl);display:flex;align-items:center;gap:var(--space-sm);">
                    <span style="width:12px;height:12px;border-radius:50%;background:${catColors[catName]};display:inline-block;"></span>
                    ${catName}
                </h2>
                <div class="ux-laws-grid">
                    ${(grouped[catName] || []).map(law => `
                        <a href="#/ux-laws/${law.id}" class="ux-law-card" id="law-${law.id}" style="text-decoration:none;color:inherit;cursor:pointer;">
                            <div class="ux-law-visual">${law.visual}</div>
                            <div class="ux-law-content">
                                <h3>${law.name}</h3>
                                <p style="font-size:0.75rem;color:var(--text-tertiary);margin-bottom:4px;">${law.nameEn}</p>
                                <p>${law.principle}</p>
                                <span class="ux-law-tag" style="background:${catColors[catName]}20;color:${catColors[catName]};">${law.category}</span>
                            </div>
                        </a>
                    `).join('')}
                </div>
            `).join('')}
        </div>`;
    }

    // ============ UX Law Detail Page ============
    // UX 법칙 상세 페이지: 개별 UX 법칙의 히어로 섹션, 정의, 핵심 원리, 게임 적용 사례, 관련 컴포넌트/법칙

    /**
     * UX 법칙 상세 페이지를 렌더링하는 함수
     * - 컬러풀 히어로 섹션 (카테고리 색상 기반 그라데이션 배경)
     * - 법칙 정의 및 NOTE 박스
     * - Takeaways: 핵심 원리 + 게임 UI 적용 방법
     * - 이 법칙을 사용하는 컴포넌트 카드 그리드
     * - 같은 카테고리의 다른 법칙 카드 그리드
     * @param {string} lawId - UX 법칙 ID (예: 'fitts-law', 'hicks-law')
     */
    function renderUXLawDetail(lawId) {
        const law = UX_LAWS.find(l => l.id === lawId);
        if (!law) { renderHome(); return; } // 유효하지 않은 ID면 홈으로 리다이렉트

        /** @type {Object} 카테고리별 테마 색상 (히어로 배경, 번호 배경 등에 사용) */
        const catColors = { '행동': '#c75c3a', '인지': '#2a6496', '기억': '#7b4fa0', '경험': '#2a8a6a' };
        /** @type {Object} 카테고리별 설명 문구 (NOTE 박스에 표시) */
        const catDescriptions = {
            '행동': '행동 카테고리의 법칙은 사용자의 물리적 행동과 반응 속도에 관한 원칙을 다룹니다.',
            '인지': '인지 카테고리의 법칙은 사용자가 정보를 처리하고 이해하는 방식에 관한 원칙을 다룹니다.',
            '기억': '기억 카테고리의 법칙은 사용자가 정보를 기억하고 회상하는 패턴에 관한 원칙을 다룹니다.',
            '경험': '경험 카테고리의 법칙은 사용자의 전반적인 경험과 기대에 관한 원칙을 다룹니다.'
        };
        /** @type {string} 히어로 섹션 배경에 사용할 카테고리 색상 */
        const heroColor = catColors[law.category] || '#2a6496';

        // 같은 카테고리의 다른 법칙들 (현재 법칙 제외)
        const sameCatLaws = UX_LAWS.filter(l => l.category === law.category && l.id !== law.id);

        // 이 법칙을 relatedLaws 배열에 포함하고 있는 컴포넌트들을 찾기
        const relatedComps = Object.values(COMPONENTS).filter(c => c.relatedLaws && c.relatedLaws.includes(law.id));

        mainContent.innerHTML = `
        <div class="page-enter">
            <div class="ux-law-hero" style="background: linear-gradient(135deg, ${heroColor}, ${heroColor}dd);">
                <div class="ux-law-hero-inner">
                    <a href="#/ux-laws" class="ux-law-back-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="15 18 9 12 15 6"/></svg>
                        모든 법칙
                    </a>
                    <div class="ux-law-hero-visual">${law.visual}</div>
                    <div class="ux-law-hero-text">
                        <span class="ux-law-hero-category">${law.category}</span>
                        <h1>${law.name}</h1>
                        <p class="ux-law-hero-en">${law.nameEn}</p>
                    </div>
                </div>
            </div>

            <div class="ux-law-body">
                <div class="ux-law-definition" style="border-left-color: ${heroColor};">
                    <p>${law.principle}</p>
                </div>

                <div class="ux-law-note">
                    <div class="ux-law-note-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        NOTE
                    </div>
                    <p>${catDescriptions[law.category] || ''} 이 법칙은 게임 UI 설계에서 플레이어의 ${law.category === '행동' ? '반응성과 인터랙션' : law.category === '인지' ? '정보 처리와 이해도' : law.category === '기억' ? '기억력과 학습 패턴' : '전체적인 만족도와 기대치'}을 최적화하는 데 핵심적인 역할을 합니다.</p>
                </div>

                <h2 class="ux-law-section-title">Takeaways</h2>
                <div class="ux-law-takeaways">
                    <div class="ux-law-takeaway-item">
                        <span class="ux-law-takeaway-number" style="background:${heroColor};">1</span>
                        <div>
                            <h4>핵심 원리</h4>
                            <p>${law.description}</p>
                        </div>
                    </div>
                    <div class="ux-law-takeaway-item">
                        <span class="ux-law-takeaway-number" style="background:${heroColor};">2</span>
                        <div>
                            <h4>게임 UI 적용</h4>
                            <p>${law.gameApplication}</p>
                        </div>
                    </div>
                </div>

                <h2 class="ux-law-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                    게임에서의 활용
                </h2>
                <div class="ux-law-origin">
                    <p>${law.gameApplication}</p>
                </div>

                ${relatedComps.length ? `
                <h2 class="ux-law-section-title">관련 컴포넌트</h2>
                <div class="component-grid" style="margin-bottom:var(--space-2xl);">
                    ${relatedComps.map(comp => `
                        <a href="#/components/${comp.id}" class="component-card">
                            <div class="component-card-icon">${comp.icon}</div>
                            <h3>${comp.name}</h3>
                            <p>${comp.summary}</p>
                        </a>
                    `).join('')}
                </div>
                ` : ''}

                ${sameCatLaws.length ? `
                <h2 class="ux-law-section-title">같은 카테고리의 법칙</h2>
                <div class="ux-laws-grid" style="margin-bottom:var(--space-2xl);">
                    ${sameCatLaws.map(l => `
                        <a href="#/ux-laws/${l.id}" class="ux-law-card" style="text-decoration:none;color:inherit;">
                            <div class="ux-law-visual">${l.visual}</div>
                            <div class="ux-law-content">
                                <h3>${l.name}</h3>
                                <p>${l.principle}</p>
                                <span class="ux-law-tag" style="background:${heroColor}20;color:${heroColor};">${l.category}</span>
                            </div>
                        </a>
                    `).join('')}
                </div>
                ` : ''}

                <div style="margin-top:var(--space-xl);">
                    <a href="#/ux-laws" class="back-btn" style="color:${heroColor};">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                        모든 UX 법칙 보기
                    </a>
                </div>
            </div>
        </div>`;
    }

    // ============ Global Helpers ============
    // 전역 헬퍼 함수들: HTML onclick 이벤트에서 직접 호출되므로 window 객체에 등록
    // 프로그레스 바 애니메이션, 채팅 메시지 전송, 미니맵 이동, 인벤토리 드래그앤드롭 등

    /**
     * 프로그레스 바 데미지 시뮬레이션 (전역 함수)
     * - 클릭된 버튼의 부모 컨테이너 내 모든 바를 랜덤 수치만큼 감소
     * - 감소량: 5~25% 랜덤, 최소값 5%로 제한 (완전히 비지 않도록)
     * - 버튼 텍스트를 일시적으로 '피격!' 효과로 변경
     * @param {Element} btn - 클릭된 시뮬레이션 버튼 요소
     */
    window.animateBars = function(btn) {
        const container = btn.closest('.demo-bar-container');
        const fills = container.querySelectorAll('.demo-bar-fill');
        // 각 바의 너비를 랜덤 데미지만큼 감소
        fills.forEach(fill => {
            const current = parseFloat(fill.style.width);
            const damage = Math.random() * 20 + 5; // 5~25% 랜덤 데미지
            fill.style.width = Math.max(5, current - damage) + '%'; // 최소 5%
        });
        // 버튼 텍스트를 피격 효과로 변경 후 0.6초 뒤 원래 텍스트 복원
        btn.textContent = '💥 피격!';
        setTimeout(() => {
            btn.textContent = btn.classList.contains('demo-btn-rpg') ? '⚔️ 데미지 시뮬레이션' : 'SIMULATE HIT';
        }, 600);
    };

    /**
     * 채팅 데모에서 새 메시지를 전송하는 함수 (전역)
     * - 입력 필드의 텍스트를 읽어 채팅 메시지 목록에 추가
     * - 자동 스크롤로 최신 메시지가 보이도록 처리
     * - 전송 후 입력 필드 초기화
     * @param {string} genre - 게임 장르 (입력 필드 ID에 사용)
     */
    window.addChatMsg = function(genre) {
        const input = document.getElementById(`chatInput-${genre}`);
        if (!input || !input.value.trim()) return; // 빈 입력 무시
        const messages = input.closest('.demo-chat-window').querySelector('.demo-chat-messages');
        // 새 메시지 DOM 요소 생성 및 추가
        const msg = document.createElement('div');
        msg.className = 'demo-chat-msg';
        msg.innerHTML = `<span class="name player">나:</span> ${input.value}`;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight; // 최하단으로 자동 스크롤
        input.value = ''; // 입력 필드 초기화
    };

    // ---- Auto Heal for Progress Bars ----
    // 자동 회복 기능: 200ms 간격으로 모든 바를 2%씩 자동 회복, 토글 방식으로 시작/중지

    /** @type {number|null} 자동 회복 setInterval ID (null이면 비활성) */
    let autoHealInterval = null;

    /**
     * 프로그레스 바 자동 회복 토글 함수 (전역)
     * - 첫 클릭: 자동 회복 시작 (200ms 간격, 바당 +2%)
     * - 재클릭: 자동 회복 중지
     * - 모든 바가 100%에 도달하면 자동으로 중지
     * @param {Element} btn - 클릭된 자동 회복 버튼 요소
     */
    window.startAutoHeal = function(btn) {
        const container = btn.closest('.demo-bar-container');
        // 이미 회복 중이면 중지 (토글 동작)
        if (autoHealInterval) {
            clearInterval(autoHealInterval);
            autoHealInterval = null;
            btn.textContent = btn.classList.contains('demo-btn-rpg') ? '💚 자동 회복' : 'AUTO REGEN';
            btn.style.opacity = '0.8';
            return;
        }
        // 자동 회복 시작: 버튼 텍스트 변경
        btn.textContent = btn.classList.contains('demo-btn-rpg') ? '⏹ 회복 중지' : 'STOP REGEN';
        btn.style.opacity = '1';
        // 200ms 간격으로 바 너비를 2%씩 증가
        autoHealInterval = setInterval(() => {
            const fills = container.querySelectorAll('.demo-bar-fill');
            let allFull = true; // 모든 바가 가득 찼는지 추적
            fills.forEach(fill => {
                const current = parseFloat(fill.style.width);
                if (current < 100) {
                    allFull = false;
                    fill.style.width = Math.min(100, current + 2) + '%'; // 최대 100%
                }
            });
            // 모든 바가 100%이면 자동 중지
            if (allFull) {
                clearInterval(autoHealInterval);
                autoHealInterval = null;
                btn.textContent = btn.classList.contains('demo-btn-rpg') ? '💚 자동 회복' : 'AUTO REGEN';
                btn.style.opacity = '0.8';
            }
        }, 200);
    };

    // ---- Minimap Player Movement ----
    // 미니맵 플레이어 이동: 클릭 위치를 백분율 좌표로 변환하여 플레이어 마커 이동

    /**
     * 미니맵 클릭 시 플레이어 마커를 클릭 위치로 이동시키는 함수 (전역)
     * - 클릭 좌표를 미니맵 내 백분율(%)로 변환
     * - 5%~90% 범위로 클램핑하여 맵 밖으로 나가지 않도록 제한
     * - CSS transition으로 부드러운 이동 애니메이션 적용
     * @param {MouseEvent} e - 마우스 클릭 이벤트 객체
     * @param {Element} mapEl - 미니맵 DOM 요소
     */
    window.moveMinimapPlayer = function(e, mapEl) {
        const rect = mapEl.getBoundingClientRect();
        // 클릭 위치를 미니맵 내 백분율 좌표로 변환
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        // 플레이어 마커를 클릭 위치로 이동 (5%~90% 범위로 클램핑)
        const player = mapEl.querySelector('.minimap-player');
        if (player) {
            player.style.top = Math.max(5, Math.min(90, y)) + '%';
            player.style.left = Math.max(5, Math.min(90, x)) + '%';
        }
    };

    // ---- NPC Patrol Animation ----
    // NPC 순찰 애니메이션: 미니맵 내 NPC 마커가 3초마다 랜덤 위치로 이동

    /**
     * 미니맵 내 NPC 순찰 애니메이션을 시작하는 함수
     * - 3초 간격으로 모든 NPC 마커의 위치를 랜덤하게 변경
     * - CSS transition으로 부드러운 이동 애니메이션 구현
     * - 컨테이너가 DOM에서 제거되면 자동으로 인터벌 정리 (메모리 누수 방지)
     * @param {Element} container - NPC가 포함된 미니맵 컨테이너
     */
    function startNPCPatrol(container) {
        const npcs = container.querySelectorAll('.minimap-npc');
        if (!npcs.length) return; // NPC가 없으면 실행하지 않음

        /** 각 NPC를 랜덤 위치로 이동시키는 내부 함수 */
        function patrol() {
            npcs.forEach(npc => {
                // 15%~80% 범위 내 랜덤 위치로 이동 (맵 가장자리 피함)
                const newTop = 15 + Math.random() * 65;
                const newLeft = 15 + Math.random() * 65;
                npc.style.top = newTop + '%';
                npc.style.left = newLeft + '%';
            });
        }
        patrol(); // 즉시 첫 순찰 실행
        // 3초마다 순찰 반복, 컨테이너가 DOM에서 제거되면 인터벌 정리
        const id = setInterval(() => {
            if (!document.body.contains(container)) { clearInterval(id); return; }
            patrol();
        }, 3000);
    }

    // ---- Inventory Drag & Drop ----
    // 인벤토리 드래그 앤 드롭: HTML5 Drag & Drop API를 사용한 아이템 슬롯 간 이동
    // 6개의 전역 함수로 드래그 라이프사이클 전체를 처리

    /** @type {Element|null} 현재 드래그 중인 출발 슬롯 요소 */
    let dragSrcSlot = null;

    /**
     * 드래그 시작 핸들러: 드래그 소스 슬롯 저장 및 시각적 피드백
     * @param {DragEvent} e - 드래그 이벤트
     */
    window.invDragStart = function(e) {
        dragSrcSlot = e.currentTarget;
        dragSrcSlot.style.opacity = '0.4'; // 드래그 중인 슬롯 반투명 처리
        e.dataTransfer.effectAllowed = 'move';
    };

    /** 드래그 오버 핸들러: 드롭 허용을 위해 기본 동작 방지 */
    window.invDragOver = function(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; };

    /** 드래그 진입 핸들러: 드롭 대상 슬롯에 하이라이트 테두리 표시 */
    window.invDragEnter = function(e) { e.currentTarget.style.outline = '2px solid var(--accent)'; };

    /** 드래그 이탈 핸들러: 하이라이트 테두리 제거 */
    window.invDragLeave = function(e) { e.currentTarget.style.outline = ''; };

    /** 드래그 종료 핸들러: 드래그 소스 슬롯의 투명도 복원 */
    window.invDragEnd = function(e) { e.currentTarget.style.opacity = '1'; };

    /**
     * 드롭 핸들러: 두 슬롯의 내용(HTML, 등급, draggable 속성)을 스왑
     * - 소스 슬롯과 타겟 슬롯의 innerHTML, className(등급), draggable, cursor를 교환
     * - 같은 슬롯에 드롭하면 무시
     * @param {DragEvent} e - 드롭 이벤트
     */
    window.invDrop = function(e) {
        e.preventDefault();
        const target = e.currentTarget;
        target.style.outline = ''; // 하이라이트 제거
        if (!dragSrcSlot || dragSrcSlot === target) return; // 같은 슬롯이면 무시

        // 두 슬롯의 내용을 스왑 (innerHTML, 등급 클래스, draggable, cursor)
        const srcHTML = dragSrcSlot.innerHTML;
        const srcRarity = dragSrcSlot.className.replace('inventory-slot', '').trim();
        const srcDraggable = dragSrcSlot.getAttribute('draggable');
        // 소스 슬롯에 타겟의 내용 적용
        dragSrcSlot.innerHTML = target.innerHTML;
        dragSrcSlot.className = 'inventory-slot ' + target.className.replace('inventory-slot', '').trim();
        dragSrcSlot.setAttribute('draggable', target.getAttribute('draggable') || 'false');
        dragSrcSlot.style.cursor = target.innerHTML.trim() ? 'grab' : '';
        // 타겟 슬롯에 소스의 내용 적용
        target.innerHTML = srcHTML;
        target.className = 'inventory-slot ' + srcRarity;
        target.setAttribute('draggable', srcDraggable || 'false');
        target.style.cursor = srcHTML.trim() ? 'grab' : '';
        // 드래그 상태 초기화
        dragSrcSlot.style.opacity = '1';
        dragSrcSlot = null;
    };

    // ============ Reference Component Detail Page ============
    // 참조 컴포넌트 상세 페이지: Material Design 3 / Lithium Design System 기반 기본 UI 컴포넌트
    // 게임 전용 컴포넌트와 달리 플랫폼 탭이나 인터랙티브 데모가 없고,
    // 대신 변형(Variants), 게임 UI 적용 방법, 가이드라인을 중심으로 구성

    /**
     * 참조 컴포넌트(기본 UI) 상세 페이지를 렌더링하는 함수
     * - 브레드크럼 내비게이션 + '참조 컴포넌트' 배지
     * - Anatomy 다이어그램 (SVG + 파트 설명)
     * - 변형(Variants) 카드 그리드
     * - 게임 UI 적용 설명 박스 (게임 컨트롤러 아이콘)
     * - 디자인 가이드라인 체크리스트
     * - 관련 UX 법칙 카드 그리드
     * @param {string} compId - 컴포넌트 ID (예: 'text-fields', 'radio-buttons')
     */
    function renderReferenceComponent(compId) {
        const comp = COMPONENTS[compId];
        if (!comp) { renderHome(); return; } // 유효하지 않은 ID면 홈으로 리다이렉트

        mainContent.innerHTML = `
        <div class="page-enter">
            <div class="breadcrumb">
                <a href="#/">홈</a> <span class="sep">/</span>
                <a href="#/">컴포넌트</a> <span class="sep">/</span>
                <span>${comp.name}</span>
            </div>

            <div class="comp-detail-header">
                <div class="ref-comp-badge">참조 컴포넌트</div>
                <h1>${comp.name}</h1>
                <p class="description">${comp.description}</p>
            </div>

            ${comp.anatomy ? `
            <div class="comp-anatomy">
                <h2 class="section-title">Anatomy</h2>
                <div class="anatomy-diagram">
                    ${comp.anatomy.svg}
                </div>
                <ol class="anatomy-parts">
                    ${comp.anatomy.parts.map(p => `
                        <li>
                            <span class="anatomy-part-name">${p.name}</span>
                            <span class="anatomy-part-desc">${p.description}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>` : ''}

            ${comp.m3SubTypes ? renderM3SubTypes(comp.m3SubTypes) : `
            <div class="ref-section">
                <h2 class="section-title">변형 (Variants)</h2>
                <div class="variant-grid">
                    ${comp.variants.map((v, i) => `
                        <div class="variant-card">
                            <div class="variant-number">${String(i + 1).padStart(2, '0')}</div>
                            <h4>${v.name}</h4>
                            <p>${v.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>`}

            <div class="ref-section">
                <h2 class="section-title">게임 UI 적용</h2>
                <div class="game-application-box">
                    <div class="game-app-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"/></svg>
                    </div>
                    <p>${comp.gameApplication}</p>
                </div>
            </div>

            <div class="ref-section">
                <h2 class="section-title">디자인 가이드라인</h2>
                <div class="guidelines-list">
                    ${comp.guidelines.map(g => `
                        <div class="guideline-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                            <span>${g}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${comp.relatedLaws && comp.relatedLaws.length ? `
            <div class="related-laws-section">
                <h3>관련 UX 법칙</h3>
                <div class="related-laws-grid">
                    ${comp.relatedLaws.map(lawId => {
                        const law = UX_LAWS.find(l => l.id === lawId);
                        if (!law) return '';
                        return `<a href="#/ux-laws/${law.id}" class="related-law-card">
                            <div class="related-law-visual">${law.visual}</div>
                            <div class="related-law-info">
                                <div class="related-law-name">${law.name}</div>
                                <div class="related-law-principle">${law.principle}</div>
                            </div>
                        </a>`;
                    }).join('')}
                </div>
            </div>` : ''}
        </div>`;
    }

    // ============ Checklist Page ============
    // 체크리스트 페이지: 게임 UI/UX 품질 점검용 체크리스트
    // - localStorage에 체크 상태를 저장하여 새로고침 후에도 유지
    // - 실시간 진행률 바 업데이트

    /**
     * 게임 UI/UX 체크리스트 페이지를 렌더링하는 함수
     * - 브레드크럼 내비게이션
     * - 전체 진행률 바 + 완료 카운터
     * - CHECKLIST_DATA(data.js 정의)의 카테고리별 체크 항목 표시
     * - 각 항목에 우선순위 태그 (필수/권장) 표시
     * - localStorage에서 이전 체크 상태 복원
     */
    function renderChecklist() {
        /** @type {number} 모든 카테고리의 체크 항목 총 개수 */
        const totalItems = CHECKLIST_DATA.reduce((sum, cat) => sum + cat.items.length, 0);
        mainContent.innerHTML = `
        <div class="page-enter">
            <div class="breadcrumb">
                <a href="#/">홈</a> <span class="sep">/</span>
                <span>UI/UX 체크리스트</span>
            </div>

            <div class="comp-detail-header">
                <h1>게임 UI/UX 체크리스트</h1>
                <p class="description">게임 인터페이스 품질을 점검하는 ${CHECKLIST_DATA.length}개 카테고리, ${totalItems}개 항목의 체크리스트입니다. Lithium Design System 기반으로 게임 UI에 맞게 재구성했습니다.</p>
            </div>

            <div class="checklist-progress-bar">
                <div class="checklist-progress-fill" id="checklistProgress" style="width:0%"></div>
            </div>
            <div class="checklist-progress-text"><span id="checklistCount">0</span> / ${totalItems} 완료</div>

            <div class="checklist-container">
                ${CHECKLIST_DATA.map((cat, ci) => `
                    <div class="checklist-category">
                        <h2 class="checklist-cat-title">${cat.category}</h2>
                        <div class="checklist-items">
                            ${cat.items.map((item, ii) => `
                                <label class="checklist-item" data-ci="${ci}" data-ii="${ii}">
                                    <input type="checkbox" class="checklist-check" onchange="updateChecklistProgress()">
                                    <div class="checklist-content">
                                        <div class="checklist-main">
                                            <span class="checklist-text">${item.check}</span>
                                            <span class="checklist-priority ${item.priority === '필수' ? 'priority-required' : 'priority-recommended'}">${item.priority}</span>
                                        </div>
                                        <div class="checklist-desc">${item.desc}</div>
                                    </div>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;

        // localStorage에서 이전에 저장된 체크 상태를 복원
        const saved = JSON.parse(localStorage.getItem('gameui-checklist') || '{}');
        $$('.checklist-check', mainContent).forEach((cb, i) => {
            if (saved[i]) {
                cb.checked = true;
                cb.closest('.checklist-item').classList.add('checked');
            }
        });
        // 복원 후 진행률 바 업데이트
        updateChecklistProgress();
    }

    /**
     * 체크리스트 진행률을 갱신하고 상태를 localStorage에 저장하는 함수 (전역)
     * - 체크된 항목 수 / 전체 항목 수로 백분율 계산
     * - 프로그레스 바 너비 및 카운터 텍스트 업데이트
     * - 각 항목의 checked 상태에 따라 'checked' 클래스 토글 (시각적 피드백)
     * - localStorage에 체크 상태를 인덱스 기반 객체로 저장
     */
    window.updateChecklistProgress = function() {
        const checks = $$('.checklist-check', mainContent);
        const checked = checks.filter(c => c.checked).length;
        const total = checks.length;
        const pct = total ? Math.round((checked / total) * 100) : 0; // 백분율 계산

        // 프로그레스 바 및 카운터 UI 업데이트
        const fill = $('#checklistProgress');
        const count = $('#checklistCount');
        if (fill) fill.style.width = pct + '%';
        if (count) count.textContent = checked;

        // 체크 상태를 {인덱스: true} 형태로 localStorage에 저장
        const state = {};
        checks.forEach((c, i) => {
            if (c.checked) state[i] = true;
            // 체크 여부에 따라 항목에 'checked' 클래스 토글 (스타일 변경)
            c.closest('.checklist-item').classList.toggle('checked', c.checked);
        });
        localStorage.setItem('gameui-checklist', JSON.stringify(state));
    };

    // ============ Init ============
    // 애플리케이션 초기화: 현재 URL 해시에 맞는 첫 페이지를 렌더링
    route();

})(); // IIFE 종료
