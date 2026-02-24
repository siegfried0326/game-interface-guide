/* ============================================
   Game UI/UX - App Router & Rendering
   ============================================ */

(function() {
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const mainContent = $('#mainContent');
    const sidebar = $('#sidebar');
    const mobileMenuBtn = $('#mobileMenuBtn');
    const themeToggle = $('#themeToggle');

    // ============ Theme (default: light/white-blue) ============
    const savedTheme = localStorage.getItem('gameui-theme');
    if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
        localStorage.setItem('gameui-theme', isDark ? 'light' : 'dark');
    });

    // ============ Mobile Menu ============
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
            sidebar.classList.remove('open');
        }
    });

    // ============ Router ============
    function getRoute() {
        return window.location.hash.slice(1) || '/';
    }

    function navigate(path) {
        window.location.hash = path;
    }

    function updateActiveNav() {
        const route = getRoute();
        $$('.nav-item').forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
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

    function route() {
        const path = getRoute();
        updateActiveNav();
        sidebar.classList.remove('open');
        mainContent.scrollTop = 0;
        window.scrollTo(0, 0);

        if (path === '/') {
            renderHome();
        } else if (path.startsWith('/components/')) {
            const compId = path.split('/components/')[1];
            const comp = COMPONENTS[compId];
            if (comp && comp.type === 'reference') {
                renderReferenceComponent(compId);
            } else {
                renderComponentDetail(compId);
            }
        } else if (path === '/ux-laws') {
            renderUXLaws();
        } else if (path === '/checklist') {
            renderChecklist();
        } else if (path.startsWith('/genre/')) {
            const genre = path.split('/genre/')[1];
            renderGenrePage(genre);
        } else {
            renderHome();
        }
    }

    window.addEventListener('hashchange', route);

    // ============ Dynamic Sidebar ============
    function renderSidebar() {
        const nav = $('#sidebarNav');
        if (!nav) return;

        // 저장된 열림 상태
        const openCats = JSON.parse(localStorage.getItem('gameui-open-cats') || '["game-specific"]');

        let html = `
            <a href="#/" class="nav-item active" data-page="home">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                <span>홈</span>
            </a>
            <div class="nav-section-title">컴포넌트</div>
        `;

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
            cat.items.forEach(compId => {
                const comp = COMPONENTS[compId];
                if (!comp) return;
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
            <div class="nav-section-title">UX 법칙</div>
            <a href="#/ux-laws" class="nav-item" data-page="ux-laws">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                <span>UX 법칙 개요</span>
            </a>

            <div class="nav-section-title">체크리스트</div>
            <a href="#/checklist" class="nav-item" data-page="checklist">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                <span>UI/UX 체크리스트</span>
            </a>

            <div class="nav-section-title">장르별 가이드</div>
            <a href="#/genre/rpg" class="nav-item" data-page="genre-rpg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <span>RPG</span>
            </a>
            <a href="#/genre/fps" class="nav-item" data-page="genre-fps">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="7" x2="12" y2="11"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="7" y1="12" x2="11" y2="12"/><line x1="13" y1="12" x2="17" y2="12"/></svg>
                <span>FPS</span>
            </a>
            <a href="#/genre/tps" class="nav-item" data-page="genre-tps">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M12 8v8"/><path d="M8 21l4-5 4 5"/><path d="M7 13h10"/></svg>
                <span>TPS</span>
            </a>
            <a href="#/genre/quarter" class="nav-item" data-page="genre-quarter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20L12 4l8 16"/><path d="M4 20l8-4 8 4"/><line x1="12" y1="4" x2="12" y2="16"/></svg>
                <span>쿼터뷰</span>
            </a>
        `;

        nav.innerHTML = html;
    }

    // 카테고리 토글 (전역)
    window.toggleNavCategory = function(catId) {
        const cat = $(`.nav-category[data-cat="${catId}"]`);
        if (!cat) return;
        cat.classList.toggle('open');
        // 저장
        const allOpen = [...document.querySelectorAll('.nav-category.open')].map(el => el.dataset.cat);
        localStorage.setItem('gameui-open-cats', JSON.stringify(allOpen));
    };

    renderSidebar();

    // ============ Home Page ============
    function renderHome() {
        const compEntries = Object.values(COMPONENTS);
        const fullComps = compEntries.filter(c => c.type !== 'reference');
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
                    RPG, FPS, TPS, 쿼터뷰 — 네 가지 장르별 와이어프레임과 인터랙티브 데모, ${refComps.length}개 참조 컴포넌트, UI/UX 체크리스트를 탐험하세요.
                </p>
                <div class="home-stats">
                    <div class="stat-item">
                        <span class="stat-number">${compEntries.length}</span>
                        <span class="stat-label">컴포넌트</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">4</span>
                        <span class="stat-label">장르</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${UX_LAWS.length}</span>
                        <span class="stat-label">UX 법칙</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${fullComps.length * 4}</span>
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
                    <div class="ux-law-card" onclick="window.location.hash='#/ux-laws'">
                        <div class="ux-law-visual">${law.visual}</div>
                        <div class="ux-law-content">
                            <h3>${law.name}</h3>
                            <p>${law.principle}</p>
                            <span class="ux-law-tag">${law.category}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div style="margin-top: var(--space-xl);">
                <a href="#/ux-laws" class="back-btn" style="color: var(--accent);">
                    모든 ${UX_LAWS.length}개 UX 법칙 보기 →
                </a>
            </div>
        </div>`;
    }

    // ============ Component Detail Page ============
    function renderComponentDetail(compId) {
        const comp = COMPONENTS[compId];
        if (!comp) { renderHome(); return; }

        const genres = ['rpg', 'fps', 'tps', 'quarter'];
        const genreNames = { rpg: 'RPG', fps: 'FPS', tps: 'TPS', quarter: '쿼터뷰' };

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

            <div class="genre-tabs" id="genreTabs">
                ${genres.map((g, i) => `
                    <button class="genre-tab ${i === 0 ? 'active' : ''}" data-genre="${g}">${genreNames[g]}</button>
                `).join('')}
            </div>

            ${genres.map((g, i) => `
                <div class="genre-content ${i === 0 ? 'active' : ''}" data-genre-content="${g}">
                    <div class="wireframe-demo-grid">
                        <div class="wireframe-section">
                            <div class="section-label"><span class="dot"></span> 와이어프레임</div>
                            <div class="wireframe-area">
                                ${comp.genres[g].wireframe
                                    ? `<div class="wireframe-svg">${comp.genres[g].wireframe}</div>`
                                    : `<div style="text-align:center;color:var(--text-tertiary);font-size:0.85rem;">
                                        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;margin:0 auto var(--space-sm);opacity:0.3;"><rect x="6" y="6" width="36" height="36" rx="4"/><line x1="6" y1="18" x2="42" y2="18"/><line x1="18" y1="18" x2="18" y2="42"/></svg>
                                        ${genreNames[g]} ${comp.name} 와이어프레임
                                       </div>`
                                }
                            </div>
                        </div>
                        <div class="demo-section">
                            <div class="section-label"><span class="dot" style="background:var(--success)"></span> 인터랙티브 데모</div>
                            <div class="demo-area" id="demo-${g}-${compId}">
                                <!-- 동적으로 데모가 렌더링됨 -->
                            </div>
                        </div>
                    </div>

                    <div class="comp-description">
                        <h3>${comp.genres[g].title}</h3>
                        <p>${comp.genres[g].description}</p>
                    </div>
                </div>
            `).join('')}

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
                        return `<a href="#/ux-laws" class="related-law-card" onclick="setTimeout(()=>{const el=document.getElementById('law-${law.id}');if(el)el.scrollIntoView({behavior:'smooth',block:'center'})},200)">
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

        // Genre tabs
        const tabs = $$('.genre-tab', mainContent);
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const genre = tab.dataset.genre;
                $$('.genre-content', mainContent).forEach(c => c.classList.remove('active'));
                $(`.genre-content[data-genre-content="${genre}"]`, mainContent).classList.add('active');
                renderDemo(genre, compId);
            });
        });

        // Render first genre demo
        renderDemo('rpg', compId);
    }

    // ============ Demo Renderer ============
    function renderDemo(genre, compId) {
        const container = $(`#demo-${genre}-${compId}`);
        if (!container) return;

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
    function renderButtonDemo(container, genre) {
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
    function renderProgressDemo(container, genre) {
        const colors = {
            rpg: { hp: '#ff5555', mp: '#5555ff', xp: '#ffd700' },
            fps: { hp: '#ff4444', shield: '#44aaff', reload: '#ffffff' },
            tps: { hp: '#ff5555', stamina: '#44ff88', ability: '#aa44ff' },
            quarter: { build: '#44ff88', research: '#44aaff', production: '#ffd700' }
        };
        const c = colors[genre];

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
    function renderInventoryDemo(container, genre) {
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
    function renderSkillbarDemo(container, genre) {
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

        container.querySelectorAll('.skill-slot').forEach(slot => {
            const cdTime = slot.dataset.cd;
            slot.addEventListener('click', () => {
                if (slot.querySelector('.cooldown-overlay')) return;
                const seconds = parseInt(cdTime) || 3;
                const overlay = document.createElement('div');
                overlay.className = 'cooldown-overlay';
                overlay.textContent = seconds + 's';
                slot.appendChild(overlay);
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
    function renderMinimapDemo(container, genre) {
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
        // Start NPC patrol animation
        startNPCPatrol(container);
    }

    // ---- Dialog Demo ----
    function renderDialogDemo(container, genre) {
        const themes = {
            rpg: { title: '⚔️ 퀘스트 수락', msg: '드래곤이 마을을 위협하고 있습니다. 용사여, 드래곤을 처치하겠습니까?', yes: '수락하기', no: '거절' },
            fps: { title: 'MATCH FOUND', msg: '5v5 경쟁전 매치가 찾아졌습니다. 참가하시겠습니까?', yes: 'ACCEPT', no: 'DECLINE' },
            tps: { title: '장비 강화', msg: '엑스칼리버를 +10으로 강화합니다. 실패 시 파괴될 수 있습니다.', yes: '강화하기', no: '취소' },
            quarter: { title: '🏰 동맹 제안', msg: '서방 제국이 동맹을 제안했습니다. 수락하시겠습니까?', yes: '수락', no: '거절' },
        };
        const t = themes[genre];
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
    function renderNavDemo(container, genre) {
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
    function renderCardDemo(container, genre) {
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
    function renderUXLaws() {
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

            <div class="ux-laws-grid">
                ${UX_LAWS.map(law => `
                    <div class="ux-law-card" id="law-${law.id}" onclick="this.classList.toggle('expanded');this.querySelector('.ux-law-expanded')?.classList.toggle('active')">
                        <div class="ux-law-visual">${law.visual}</div>
                        <div class="ux-law-content">
                            <h3>${law.name}</h3>
                            <p style="font-size:0.75rem;color:var(--text-tertiary);margin-bottom:4px;">${law.nameEn}</p>
                            <p>${law.principle}</p>
                            <span class="ux-law-tag">${law.category}</span>
                        </div>
                        <div class="ux-law-expanded" style="display:none;padding:0 var(--space-lg) var(--space-lg);">
                            <div style="color:var(--text-secondary);font-size:0.85rem;line-height:1.8;margin-bottom:var(--space-md);">${law.description}</div>
                            <div class="game-application">
                                <h4>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                                    게임에서의 활용
                                </h4>
                                <p>${law.gameApplication}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;

        // Toggle expanded
        $$('.ux-law-card', mainContent).forEach(card => {
            card.addEventListener('click', () => {
                const expanded = card.querySelector('.ux-law-expanded');
                if (expanded) {
                    expanded.style.display = expanded.style.display === 'none' ? 'block' : 'none';
                }
            });
        });
    }

    // ============ Genre Page ============
    function renderGenrePage(genre) {
        const genreInfo = {
            rpg: {
                name: 'RPG',
                color: 'var(--rpg)',
                desc: 'RPG(Role-Playing Game)의 UI는 방대한 정보를 체계적으로 정리하는 것이 핵심입니다. 캐릭터 스탯, 인벤토리, 스킬 트리, 퀘스트 로그 등 복잡한 시스템을 직관적으로 제공해야 합니다. 판타지 세계관을 반영한 장식적 요소와 아이템 등급 시스템의 색상 코드가 중요합니다.',
                features: ['복잡한 스탯 시스템의 시각화', '아이템 등급별 색상 코드 (일반→고급→희귀→전설)', '퀘스트 트래커와 미니맵', '스킬 트리의 계층적 표현', 'NPC 대화 시스템']
            },
            fps: {
                name: 'FPS',
                color: 'var(--fps)',
                desc: 'FPS(First-Person Shooter)의 UI는 최소주의가 핵심입니다. 전투 중 시야를 가리지 않으면서 필수 정보(체력, 탄약, 미니맵)를 제공해야 합니다. 밀리터리/SF 테마에 맞는 각진 디자인, 모노스페이스 폰트, 높은 대비를 사용합니다.',
                features: ['화면 중앙의 조준점(크로스헤어)', '최소한의 HUD 요소', '빠른 무기 교체 UI', '킬 피드와 점수 표시', '전술 미니맵']
            },
            tps: {
                name: 'TPS',
                color: 'var(--tps)',
                desc: 'TPS(Third-Person Shooter)는 캐릭터가 화면에 보이므로 UI가 캐릭터와 공존해야 합니다. 반투명 글래스모피즘 스타일이 효과적이며, RPG와 FPS의 중간 정도의 정보 밀도를 가집니다. 캐릭터 중심의 능력과 장비 시스템이 중요합니다.',
                features: ['캐릭터 주변 반투명 UI', '능력/스킬 쿨다운 표시', '3인칭 시점에 최적화된 HUD', '장비 프리뷰 시스템', '미션 목표 내비게이션']
            },
            quarter: {
                name: '쿼터뷰',
                color: 'var(--quarter)',
                desc: '쿼터뷰(Isometric/Quarter-View) 게임은 전략과 관리가 핵심입니다. 자원 관리, 유닛 명령, 건설, 연구 등 복잡한 전략적 의사결정을 지원하는 UI가 필요합니다. 넓은 정보 패널, 커맨드 팔레트, 미니맵이 중요한 요소입니다.',
                features: ['자원 표시 바', '유닛 선택 및 명령 패널', '건설/연구 큐 시스템', '전체 맵 미니맵', '기술 트리']
            }
        };

        const info = genreInfo[genre];
        if (!info) { renderHome(); return; }

        const compEntries = Object.values(COMPONENTS).filter(c => c.type !== 'reference');

        mainContent.innerHTML = `
        <div class="page-enter">
            <div class="breadcrumb">
                <a href="#/">홈</a> <span class="sep">/</span>
                <span>장르</span> <span class="sep">/</span>
                <span>${info.name}</span>
            </div>

            <div class="genre-hero ${genre}">
                <span class="genre-badge">${info.name}</span>
                <h1>${info.name} UI 가이드</h1>
                <p>${info.desc}</p>
            </div>

            <div class="comp-description">
                <h3>핵심 UI 특징</h3>
                <ul>
                    ${info.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>

            <h2 class="section-title" style="margin-top:var(--space-2xl);">장르별 컴포넌트</h2>
            <div class="component-grid">
                ${compEntries.map(comp => `
                    <a href="#/components/${comp.id}" class="component-card">
                        <div class="component-card-icon" style="background:${genre === 'rpg' ? 'var(--rpg-bg)' : genre === 'fps' ? 'var(--fps-bg)' : genre === 'tps' ? 'var(--tps-bg)' : 'var(--quarter-bg)'}">
                            <span style="color:${info.color}">${comp.icon}</span>
                        </div>
                        <h3>${comp.genres[genre].title}</h3>
                        <p>${comp.genres[genre].description}</p>
                    </a>
                `).join('')}
            </div>
        </div>`;
    }

    // ============ Global Helpers ============
    window.animateBars = function(btn) {
        const container = btn.closest('.demo-bar-container');
        const fills = container.querySelectorAll('.demo-bar-fill');
        fills.forEach(fill => {
            const current = parseFloat(fill.style.width);
            const damage = Math.random() * 20 + 5;
            fill.style.width = Math.max(5, current - damage) + '%';
        });
        btn.textContent = '💥 피격!';
        setTimeout(() => {
            btn.textContent = btn.classList.contains('demo-btn-rpg') ? '⚔️ 데미지 시뮬레이션' : 'SIMULATE HIT';
        }, 600);
    };

    window.addChatMsg = function(genre) {
        const input = document.getElementById(`chatInput-${genre}`);
        if (!input || !input.value.trim()) return;
        const messages = input.closest('.demo-chat-window').querySelector('.demo-chat-messages');
        const msg = document.createElement('div');
        msg.className = 'demo-chat-msg';
        msg.innerHTML = `<span class="name player">나:</span> ${input.value}`;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
        input.value = '';
    };

    // ---- Auto Heal for Progress Bars ----
    let autoHealInterval = null;
    window.startAutoHeal = function(btn) {
        const container = btn.closest('.demo-bar-container');
        if (autoHealInterval) {
            clearInterval(autoHealInterval);
            autoHealInterval = null;
            btn.textContent = btn.classList.contains('demo-btn-rpg') ? '💚 자동 회복' : 'AUTO REGEN';
            btn.style.opacity = '0.8';
            return;
        }
        btn.textContent = btn.classList.contains('demo-btn-rpg') ? '⏹ 회복 중지' : 'STOP REGEN';
        btn.style.opacity = '1';
        autoHealInterval = setInterval(() => {
            const fills = container.querySelectorAll('.demo-bar-fill');
            let allFull = true;
            fills.forEach(fill => {
                const current = parseFloat(fill.style.width);
                if (current < 100) {
                    allFull = false;
                    fill.style.width = Math.min(100, current + 2) + '%';
                }
            });
            if (allFull) {
                clearInterval(autoHealInterval);
                autoHealInterval = null;
                btn.textContent = btn.classList.contains('demo-btn-rpg') ? '💚 자동 회복' : 'AUTO REGEN';
                btn.style.opacity = '0.8';
            }
        }, 200);
    };

    // ---- Minimap Player Movement ----
    window.moveMinimapPlayer = function(e, mapEl) {
        const rect = mapEl.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const player = mapEl.querySelector('.minimap-player');
        if (player) {
            player.style.top = Math.max(5, Math.min(90, y)) + '%';
            player.style.left = Math.max(5, Math.min(90, x)) + '%';
        }
    };

    // ---- NPC Patrol Animation ----
    function startNPCPatrol(container) {
        const npcs = container.querySelectorAll('.minimap-npc');
        if (!npcs.length) return;
        function patrol() {
            npcs.forEach(npc => {
                const newTop = 15 + Math.random() * 65;
                const newLeft = 15 + Math.random() * 65;
                npc.style.top = newTop + '%';
                npc.style.left = newLeft + '%';
            });
        }
        patrol();
        const id = setInterval(() => {
            if (!document.body.contains(container)) { clearInterval(id); return; }
            patrol();
        }, 3000);
    }

    // ---- Inventory Drag & Drop ----
    let dragSrcSlot = null;
    window.invDragStart = function(e) {
        dragSrcSlot = e.currentTarget;
        dragSrcSlot.style.opacity = '0.4';
        e.dataTransfer.effectAllowed = 'move';
    };
    window.invDragOver = function(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; };
    window.invDragEnter = function(e) { e.currentTarget.style.outline = '2px solid var(--accent)'; };
    window.invDragLeave = function(e) { e.currentTarget.style.outline = ''; };
    window.invDragEnd = function(e) { e.currentTarget.style.opacity = '1'; };
    window.invDrop = function(e) {
        e.preventDefault();
        const target = e.currentTarget;
        target.style.outline = '';
        if (!dragSrcSlot || dragSrcSlot === target) return;
        // Swap innerHTML
        const srcHTML = dragSrcSlot.innerHTML;
        const srcRarity = dragSrcSlot.className.replace('inventory-slot', '').trim();
        const srcDraggable = dragSrcSlot.getAttribute('draggable');
        dragSrcSlot.innerHTML = target.innerHTML;
        dragSrcSlot.className = 'inventory-slot ' + target.className.replace('inventory-slot', '').trim();
        dragSrcSlot.setAttribute('draggable', target.getAttribute('draggable') || 'false');
        dragSrcSlot.style.cursor = target.innerHTML.trim() ? 'grab' : '';
        target.innerHTML = srcHTML;
        target.className = 'inventory-slot ' + srcRarity;
        target.setAttribute('draggable', srcDraggable || 'false');
        target.style.cursor = srcHTML.trim() ? 'grab' : '';
        dragSrcSlot.style.opacity = '1';
        dragSrcSlot = null;
    };

    // ============ Reference Component Detail Page ============
    function renderReferenceComponent(compId) {
        const comp = COMPONENTS[compId];
        if (!comp) { renderHome(); return; }

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
            </div>

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
                        return `<a href="#/ux-laws" class="related-law-card" onclick="setTimeout(()=>{const el=document.getElementById('law-${law.id}');if(el)el.scrollIntoView({behavior:'smooth',block:'center'})},200)">
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
    function renderChecklist() {
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

        // 저장된 체크 상태 복원
        const saved = JSON.parse(localStorage.getItem('gameui-checklist') || '{}');
        $$('.checklist-check', mainContent).forEach((cb, i) => {
            if (saved[i]) {
                cb.checked = true;
                cb.closest('.checklist-item').classList.add('checked');
            }
        });
        updateChecklistProgress();
    }

    window.updateChecklistProgress = function() {
        const checks = $$('.checklist-check', mainContent);
        const checked = checks.filter(c => c.checked).length;
        const total = checks.length;
        const pct = total ? Math.round((checked / total) * 100) : 0;

        const fill = $('#checklistProgress');
        const count = $('#checklistCount');
        if (fill) fill.style.width = pct + '%';
        if (count) count.textContent = checked;

        // 체크 상태 저장
        const state = {};
        checks.forEach((c, i) => {
            if (c.checked) state[i] = true;
            c.closest('.checklist-item').classList.toggle('checked', c.checked);
        });
        localStorage.setItem('gameui-checklist', JSON.stringify(state));
    };

    // ============ Init ============
    route();

})();
