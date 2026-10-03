/* ============================================================
   RG SECURITY TEAM — script.js  (v2)
   ------------------------------------------------------------
   HOW TO EDIT
   ------------------------------------------------------------
   1) VIDEOS   → edit `videos` array below. Fields:
        title      : card heading
        youtubeId  : ID from the YouTube URL
                    https://youtu.be/v8X88IQTcrE  →  v8X88IQTcrE
        duration   : badge text, e.g. "04:20"
        category   : filter group — must match a `categories` entry
   2) SOCIAL   → edit `socialLinks` array below.
   3) TICKER   → edit `tickerItems` array below.
   ============================================================ */

/* ---------- DATA: VIDEOS ----------
   Videos live in data/videos.js, generated from the real channel by
   tools/fetch_videos.py. This page only renders — it fetches nothing.
   To add/update videos:  python3 tools/fetch_videos.py   then commit data/.
   ------------------------------------------------------------ */
const videos = (typeof VIDEO_DATA !== 'undefined' && VIDEO_DATA.length)
    ? VIDEO_DATA
    : [/* offline fallback: last known good video */
        { id: 'v8X88IQTcrE', title: 'Hound: The GPS Tracker That’s Perfect for Hackers',
          youtubeId: 'v8X88IQTcrE', duration: '2:36', category: 'osint', uploadDate: '', description: '', keywords: [] }
    ];

/* Filter categories — built from whatever categories exist in the data */
const CATEGORY_LABELS = {
    all: 'ALL', wifi: 'WI-FI', network: 'NETWORK', osint: 'OSINT',
    web: 'WEB ATTACK', tools: 'TOOLS', ai: 'AI SECURITY', privacy: 'PRIVACY'
};

const categories = ['all'].concat(
    [...new Set(videos.map(v => v.category))].filter(Boolean)
        .sort((a, b) => {
            const order = ['wifi', 'network', 'osint', 'web', 'tools', 'ai', 'privacy'];
            return order.indexOf(a) - order.indexOf(b);
        })
).map(id => ({ id, label: CATEGORY_LABELS[id] || id.toUpperCase() }));

/* ---------- DATA: SOCIAL ---------- */
const socialLinks = [
    { platform: 'YouTube',   url: 'https://youtube.com/@RGSecurityTeam',    icon: 'youtube',   color: '#ff1744', glow: 'rgba(255,23,68,0.35)' },
    { platform: 'Facebook',  url: 'https://www.facebook.com/RGSecTeam',    icon: 'facebook',  color: '#1877F2', glow: 'rgba(24,119,242,0.35)' },
    { platform: 'GitHub',    url: 'https://github.com/rgsecteam',          icon: 'github',    color: '#e8f4f8', glow: 'rgba(232,244,248,0.20)' },
    { platform: 'Instagram', url: 'https://www.instagram.com/rgsecurityteam/', icon: 'instagram', color: '#E4405F', glow: 'rgba(228,64,95,0.35)' }
];

/* ---------- DATA: TICKER ---------- */
const tickerItems = [
    '<i>&gt;</i> <b>ETHICAL HACKING</b>',
    '<i>&gt;</i> <b>KALI LINUX</b>',
    '<i>&gt;</i> <b>NETWORK FORENSICS</b>',
    '<i>&gt;</i> <b>OSINT</b>',
    '<i>&gt;</i> <b>MALWARE ANALYSIS</b>',
    '<i>&gt;</i> <b>DEFENSIVE SECURITY</b>',
    '<i>&gt;</i> <b>PRIVACY / ANONYMITY</b>',
    '<i>&gt;</i> <b>PENETRATION TESTING</b>'
];

/* ---------- SVG ICONS ---------- */
const icons = {
    play: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 13.59L11 12.25V7h1.5v4.58l4.62 2.75-.89 1.26z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.106C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.404.58A2.974 2.974 0 0 0 .502 6.186 30.16 30.16 0 0 0 0 12a30.16 30.16 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.094 2.106C4.495 20.5 12 20.5 12 20.5s7.505 0 9.404-.58a2.974 2.974 0 0 0 2.094-2.106A30.16 30.16 0 0 0 24 12a30.16 30.16 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
};

const catLabel = (id) => (categories.find(c => c.id === id) || { label: String(id).toUpperCase() }).label;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   MATRIX RAIN BACKGROUND
   ============================================================ */
function initMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas || reduceMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    const glyphs = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>/\\[]{}$#@%&';
    const fontSize = 15;
    let columns, drops;

    function size() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
        columns = Math.ceil(window.innerWidth / fontSize);
        drops = Array.from({ length: columns }, () => Math.random() * -100);
    }

    function frame() {
        // translucent clear = fade trail
        ctx.fillStyle = 'rgba(6, 9, 16, 0.09)';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = 0; i < columns; i++) {
            const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillStyle = 'rgba(180, 255, 250, 0.95)';
            ctx.shadowColor = '#00e5ff';
            ctx.shadowBlur = 8;
            ctx.fillText(ch, x, y);

            ctx.shadowBlur = 0;
            ctx.fillStyle = 'rgba(0, 229, 255, 0.28)';
            ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], x, y - fontSize);

            if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
            drops[i] += 0.62;
        }
        requestAnimationFrame(frame);
    }

    size();
    frame();

    let rt;
    window.addEventListener('resize', () => {
        clearTimeout(rt);
        rt = setTimeout(size, 180);
    });
}

/* ============================================================
   TYPING EFFECT (header subtitle)
   ============================================================ */
const typingPhrases = [
    'Cybersecurity & Ethical Hacking',
    'Kali Linux Tutorials',
    'Network Security Research',
    'Digital Privacy & Anonymity',
    'Attack · Document · Harden'
];

function initTyping() {
    const el = document.getElementById('typingText');
    if (!el) return;
    if (reduceMotion) { el.textContent = typingPhrases[0]; return; }

    let p = 0, c = 0, deleting = false;

    (function tick() {
        const phrase = typingPhrases[p];

        if (deleting) {
            el.textContent = phrase.substring(0, --c);
            if (c === 0) {
                deleting = false;
                p = (p + 1) % typingPhrases.length;
                return setTimeout(tick, 450);
            }
            setTimeout(tick, 34);
        } else {
            el.textContent = phrase.substring(0, ++c);
            if (c === phrase.length) {
                deleting = true;
                return setTimeout(tick, 2100);
            }
            setTimeout(tick, 68);
        }
    })();
}

/* ============================================================
   HERO TERMINAL BOOT SEQUENCE
   ============================================================ */
const bootLines = [
    { t: '<span class="dim">$</span> ssh rgsecteam@secure-node', d: 320 },
    { t: '<span class="ok">✔</span> encrypted session established <span class="dim">(AES-256)</span>', d: 420 },
    { t: '<span class="dim">$</span> ./run --recon --scope all', d: 380 },
    { t: '<span class="hi">▸</span> passive DNS sweep ......... <span class="ok">done</span>', d: 300 },
    { t: '<span class="hi">▸</span> wireless audit 2.4/5 GHz .... <span class="warn">3 weak</span>', d: 300 },
    { t: '<span class="hi">▸</span> open ports 21,22,23,80 .... <span class="warn">exposed</span>', d: 300 },
    { t: '<span class="hi">▸</span> default creds check ...... <span class="bad">4 found</span>', d: 300 },
    { t: '<span class="dim">$</span> cat /engagement/report.md', d: 340 },
    { t: '<span class="hi">▸</span> risk score <span class="bad">8.4 / 10</span> <span class="dim">— critical</span>', d: 380 },
    { t: '<span class="ok">✔</span> <span class="hi">RG Security Team</span> — content stream ready.', d: 0 }
];

function initTerminal() {
    const body = document.getElementById('termBody');
    if (!body) return;

    if (reduceMotion) {
        body.innerHTML = bootLines.map(l => `<span class="term-line">${l.t}</span>`).join('');
        return;
    }

    let i = 0;
    (function next() {
        if (i >= bootLines.length) {
            const caret = document.createElement('span');
            caret.className = 'term-caret';
            body.appendChild(caret);
            return;
        }
        const line = document.createElement('span');
        line.className = 'term-line';
        line.innerHTML = bootLines[i].t;
        body.appendChild(line);

        // keep panel from growing forever
        while (body.children.length > 8) body.removeChild(body.firstChild);

        i++;
        setTimeout(next, bootLines[i - 1].d);
    })();
}

/* ============================================================
   TICKER
   ============================================================ */
function initTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    const html = tickerItems.map(t => `<span class="ticker-item">${t}</span>`).join('');
    track.innerHTML = html + html; // duplicated for seamless loop
}

/* ============================================================
   COUNTERS (hero stats)
   ============================================================ */
function initCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    const run = el => {
        const target = parseInt(el.dataset.count, 10) || 0;
        if (reduceMotion) { el.textContent = target; return; }
        const dur = 1100;
        const start = performance.now();
        (function step(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(step);
        })(start);
    };

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
        });
    }, { threshold: 0.4 });

    els.forEach(el => io.observe(el));
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    els.forEach(el => {
        if (el.dataset.delay) el.style.setProperty('--d', el.dataset.delay);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('in'));
        return;
    }

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    els.forEach(el => io.observe(el));
}

/* ============================================================
   VIDEO GRID + FILTERS
   ============================================================ */
function buildCard(v, list) {
    const index = videos.indexOf(v) + 1;
    const a = document.createElement('a');
    a.className = 'video-card reveal';
    a.style.setProperty('--d', String((list ? list.indexOf(v) : 0) % 3));
    a.href = `https://youtu.be/${v.youtubeId}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer nofollow';
    a.setAttribute('role', 'listitem');
    a.setAttribute('aria-label', `${v.title}. ${v.duration} minutes tutorial. Watch on YouTube.`);

    // maxres (1280) first, fall back to hq (480) — hq alone looks soft on cards
    const hi  = `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`;
    const mid = `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`;
    const low = `https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`;

    a.innerHTML = `
        <div class="thumb">
            <img src="${hi}" data-fallback="${mid}" data-fallback2="${low}"
                 alt="${escapeHtml(v.title)}" loading="lazy" decoding="async">
            <div class="thumb-scrim"></div>
            <span class="badge-dur">${icons.clock}${escapeHtml(v.duration)}</span>
            <span class="badge-cat">${escapeHtml(catLabel(v.category))}</span>
            <span class="play-btn">${icons.play}</span>
        </div>
        <div class="card-body">
            <div class="card-idx">VID_${String(index).padStart(2, '0')}${
                v.uploadDate ? ` · ${escapeHtml(v.uploadDate)}` : ''}</div>
            <h3>${escapeHtml(v.title)}</h3>
            ${v.description ? `<p class="card-desc">${escapeHtml(v.description)}</p>` : ''}
            ${v.keywords && v.keywords.length ? `<div class="card-tags">${
                v.keywords.slice(0, 3).map(k => `<span>${escapeHtml(k)}</span>`).join('')
            }</div>` : ''}
            <div class="card-meta">
                <span>youtube.com/@RGSecurityTeam</span>
                <span class="arrow">&rarr;</span>
            </div>
        </div>`;

    return a;
}

function renderVideos(filterId = 'all') {
    const grid = document.getElementById('videoGrid');
    const empty = document.getElementById('emptyNote');
    if (!grid) return;

    const list = filterId === 'all' ? videos : videos.filter(v => v.category === filterId);
    grid.innerHTML = '';

    list.forEach(v => grid.appendChild(buildCard(v, list)));

    if (empty) empty.hidden = list.length > 0;

    // re-run reveal on the freshly injected cards
    grid.querySelectorAll('.reveal').forEach(el => {
        if (el.dataset.delay) el.style.setProperty('--d', el.dataset.delay);
    });
    observeReveal(grid.querySelectorAll('.reveal'));
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
}

function initFilters() {
    const bar = document.getElementById('filterBar');
    if (!bar) return;

    bar.innerHTML = categories
        .map((c, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${c.id}" aria-pressed="${i === 0}">${c.label}</button>`)
        .join('');

    bar.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        bar.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b === btn);
            b.setAttribute('aria-pressed', String(b === btn));
        });

        renderVideos(btn.dataset.filter);
    });
}

/* ============================================================
   SOCIAL LINKS
   ============================================================ */
function initSocial() {
    const wrap = document.getElementById('socialLinks');
    if (!wrap) return;

    socialLinks.forEach(s => {
        const a = document.createElement('a');
        a.className = 'social-button reveal';
        a.href = s.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('role', 'listitem');
        a.setAttribute('aria-label', `Visit our ${s.platform}`);
        a.style.setProperty('--platform-color', s.color);
        a.style.setProperty('--platform-glow', s.glow);
        a.innerHTML = `
            <span class="social-icon-wrap">${icons[s.icon]}</span>
            <span class="social-name">${s.platform}</span>`;
        wrap.appendChild(a);
    });

    observeReveal(wrap.querySelectorAll('.reveal'));
}

/* ---------- shared reveal observer ---------- */
let revealObserver = null;
function observeReveal(els) {
    if (!els || !els.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('in'));
        return;
    }
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    }
    els.forEach(el => revealObserver.observe(el));
}

/* ============================================================
   HEADER: scroll state, progress bar, back-to-top, mobile nav
   ============================================================ */
function initScrollUI() {
    const header   = document.querySelector('.header');
    const progress = document.querySelector('#scrollProgress span');
    const toTop    = document.getElementById('toTop');

    let ticking = false;

    function onScroll() {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (y / max) * 100 : 0;

        if (header) header.classList.toggle('is-scrolled', y > 20);
        if (progress) progress.style.width = pct.toFixed(2) + '%';
        if (toTop) toTop.classList.toggle('show', y > 500);

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });

    onScroll();

    if (toTop) {
        toTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    }
}

function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('headerNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // close on link click / outside click / Escape
    nav.addEventListener('click', e => {
        if (e.target.closest('a')) {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', e => {
        if (!nav.classList.contains('open')) return;
        if (nav.contains(e.target) || toggle.contains(e.target)) return;
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
        }
    });
}

/* ============================================================
   SEO — structured data built from real video data
   ------------------------------------------------------------
   Google reads JSON-LD. Emitting a VideoObject per upload (with the
   real title, thumbnail, upload date, duration and description) is
   the single biggest SEO win on a video channel's static site.
   ============================================================ */
function injectVideoSchema() {
    if (!videos.length) return;

    const toIso = d => (d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null);
    const toSec = s => {
        const p = String(s || '').split(':').map(Number);
        if (p.some(Number.isNaN)) return null;
        return p.length === 3 ? p[0]*3600 + p[1]*60 + p[2]
             : p.length === 2 ? p[0]*60 + p[1] : null;
    };

    const items = videos.slice(0, 24).map(v => {           // 24 ≈ Google batch sweet spot
        const o = {
            "@type": "VideoObject",
            name: v.title,
            description: v.description || v.title,
            thumbnailUrl: [
                `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`,
                `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`
            ],
            uploadDate: toIso(v.uploadDate),
            embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
            url: `https://youtu.be/${v.youtubeId}`
        };
        const dur = toSec(v.duration);
        if (dur) o.duration = `PT${Math.floor(dur/60)}M${dur%60}S`;
        if (v.keywords && v.keywords.length) o.keywords = v.keywords.join(', ');
        return o;
    });

    const graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://rgsecteam.github.io/rgsectm/#website",
                url: "https://rgsecteam.github.io/rgsectm/",
                name: "RG Security Team",
                publisher: { "@id": "https://rgsecteam.github.io/rgsectm/#org" }
            },
            {
                "@type": "Organization",
                "@id": "https://rgsecteam.github.io/rgsectm/#org",
                name: "RG Security Team",
                url: "https://rgsecteam.github.io/rgsectm/",
                logo: "https://rgsecteam.github.io/rgsectm/image/rg.png",
                sameAs: socialLinks.map(s => s.url)
            },
            {
                "@type": "ItemList",
                "@id": "https://rgsecteam.github.io/rgsectm/#videos",
                name: "RG Security Team — Cybersecurity Tutorials",
                numberOfItems: items.length,
                itemListElement: items.map((v, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    url: `https://youtu.be/${v.url.split('/').pop()}`,
                    name: v.name
                }))
            },
            ...items
        ]
    };

    // strip null uploadDate (schema.org rejects nulls)
    graph["@graph"].filter(n => n["@type"] === "VideoObject")
        .forEach(n => { if (!n.uploadDate) delete n.uploadDate; });

    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.textContent = JSON.stringify(graph);
    document.head.appendChild(tag);
}

/* ============================================================
   SEO — on-page keyword cloud
   ------------------------------------------------------------
   Renders the keywords harvested from the channel's own video tags.
   Doubles as visible content (keyword relevance) and internal anchors.
   ============================================================ */
function renderKeywords() {
    const host = document.getElementById('keywordCloud');
    if (!host || typeof KEYWORD_DATA === 'undefined') return;

    // drop the bare channel-name spam keyword, keep real topic terms
    const terms = KEYWORD_DATA.ranked
        .filter(k => k !== 'rgsecurityteam')
        .slice(0, 28);

    if (!terms.length) return;

    host.innerHTML = terms
        .map(t => `<a class="kw" href="#videos" data-kw="${escapeHtml(t)}">${escapeHtml(t)}</a>`)
        .join('');

    // clicking a keyword filters the grid to videos tagged with it
    host.addEventListener('click', e => {
        const a = e.target.closest('.kw');
        if (!a) return;
        e.preventDefault();
        const kw = a.dataset.kw.toLowerCase();
        const bar = document.getElementById('filterBar');
        document.getElementById('videos')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

        // switch to ALL first so a keyword search isn't blocked by a category
        const allBtn = bar?.querySelector('[data-filter="all"]');
        if (allBtn && !allBtn.classList.contains('active')) allBtn.click();

        const term = kw.toLowerCase();
        const matched = videos.filter(v =>
            v.title.toLowerCase().includes(term) ||
            (v.description || '').toLowerCase().includes(term) ||
            (v.keywords || []).some(k => k.toLowerCase().includes(term))
        );

        if (matched.length) {
            const grid = document.getElementById('videoGrid');
            grid.innerHTML = '';
            matched.forEach(v => grid.appendChild(buildCard(v, matched)));
            observeReveal(grid.querySelectorAll('.reveal'));
        }
    });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // background / ambient
    initMatrix();
    initTyping();
    initTerminal();
    initTicker();

    // content
    initFilters();
    renderVideos('all');
    initSocial();

    // chrome
    // counters are driven by real data, not hardcoded numbers
    document.querySelectorAll('[data-count]').forEach(el => {
        const src = el.dataset.countFrom;
        if (!src) return;
        const val = {
            videos: () => videos.length,
            categories: () => categories.length - 1,
            platforms: () => socialLinks.length,
            keywords: () => (typeof KEYWORD_DATA !== 'undefined' ? KEYWORD_DATA.ranked.length : 0)
        }[src];
        if (val) el.dataset.count = String(val());
    });

    // stat labels should read truthfully too
    const lbl = { videos: 'Videos', categories: 'Topic Tracks',
                  platforms: 'Platforms', keywords: 'Keywords' };
    document.querySelectorAll('[data-count-from]').forEach(el => {
        const dt = el.parentElement?.querySelector('dt');
        if (dt && lbl[el.dataset.countFrom]) dt.textContent = lbl[el.dataset.countFrom];
    });

    initCounters();
    initReveal();
    initScrollUI();
    initMobileNav();

    // footer year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // thumbnail quality fallback: maxres -> hq -> mq -> hide
    // (maxresdefault returns a 404 placeholder for older uploads)
    document.addEventListener('error', e => {
        const t = e.target;
        if (!t || t.tagName !== 'IMG' || !t.closest('.thumb')) return;
        if (t.dataset.fallback) {
            t.src = t.dataset.fallback;
            delete t.dataset.fallback;
        } else if (t.dataset.fallback2) {
            t.src = t.dataset.fallback2;
            delete t.dataset.fallback2;
        } else {
            t.style.display = 'none';
        }
    }, true);

    // ---------- SEO: structured data from real video data ----------
    injectVideoSchema();

    // keyword cloud (on-page, internal-link rich keywords harvested from tags)
    renderKeywords();
});
