/* ============================================================
   RG SECURITY TEAM — script.js
   ============================================================

   TO UPDATE VIDEOS: Edit the mockVideos array below.
   - title: The video title shown on the card
   - youtubeId: The video ID from YouTube URL
       e.g. for https://youtu.be/v8X88IQTcrE — ID is "v8X88IQTcrE"
       e.g. for https://youtu.be/SwJhvcbew5E — ID is "SwJhvcbew5E"
   - duration: Duration string shown on the badge e.g. "04:20"

   TO UPDATE SOCIAL LINKS: Edit the socialLinks array below.
   ============================================================ */

const mockVideos = [
    {
        id: '1',
        title: "Hound: The GPS Tracker That's Perfect for Hackers",
        youtubeId: "v8X88IQTcrE",          // ← Change this to update the thumbnail/link
        duration: "02:36"
    },
    { //https://www.youtube.com/watch?v=4IWxgClKNoA
        id: '2',
        title: "Fluxion WiFi Hacking Explained ⚠️ Fake Login Page Attack",
        youtubeId: "4IWxgClKNoA",
        duration: "11:55"
    },
    {
        id: '3',
        title: "CamPhish Tool Explained | Capture Camera Photos via Link",
        youtubeId: "SSNFRb1Tx0c",
        duration: "03:24"
    },
    { // https://www.youtube.com/watch?v=ebMU7UaKYmo
        id: '4',
        title: "Master the Crunch Tool: Create Smarter Wordlists for Password Cracking",
        youtubeId: "ebMU7UaKYmo",
        duration: "26:11"
    },
    {
        id: '5',
        title: "AhMyth Setup and Usage on Kali Linux | Complete Guide for Beginners",
        youtubeId: "qSWYpnpHD-A",
        duration: "06:18"
    },
    {
        id: '6',
        title: "How Hackers Use Ettercap for DNS Spoofing Attacks (and How to Protect Yourself!)",
        youtubeId: "oWom6YMZ80s",
        duration: "02:20"
    }

];

// ============================================================
// TO UPDATE SOCIAL LINKS: Edit this array
// ============================================================
const socialLinks = [
    {
        platform: 'YouTube',
        url: 'https://youtube.com/@RGSecurityTeam',
        icon: 'youtube',
        color: '#ff1744',
        glow: 'rgba(255,23,68,0.35)'
    },
    {
        platform: 'Facebook',
        url: 'https://www.facebook.com/RGSecTeam',
        icon: 'facebook',
        color: '#1877F2',
        glow: 'rgba(24,119,242,0.35)'
    },
    {
        platform: 'GitHub',
        url: 'https://github.com/rgsecteam',
        icon: 'github',
        color: '#e8f4f8',
        glow: 'rgba(232,244,248,0.2)'
    },
    {
        platform: 'Instagram',
        url: 'https://www.instagram.com/rgsecuritytam/',
        icon: 'instagram',
        color: '#E4405F',
        glow: 'rgba(228,64,95,0.35)'
    }
];

// ============================================================
// SVG ICONS
// ============================================================
const icons = {
    play: `<svg fill="white" viewBox="0 0 24 24" class="play-icon"><path d="M8 5v14l11-7z"/></svg>`,

    clock: `<svg fill="currentColor" viewBox="0 0 24 24" class="clock-icon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 13.59L11 12.25V7h1.5v4.58l4.62 2.75-.89 1.26z"/></svg>`,

    facebook: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,

    youtube: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon"><path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.106C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.404.58A2.974 2.974 0 0 0 .502 6.186 30.16 30.16 0 0 0 0 12a30.16 30.16 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.094 2.106C4.495 20.5 12 20.5 12 20.5s7.505 0 9.404-.58a2.974 2.974 0 0 0 2.094-2.106A30.16 30.16 0 0 0 24 12a30.16 30.16 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/></svg>`,

    instagram: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/></svg>`,

    github: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
};

// ============================================================
// SLIDER STATE
// ============================================================
let currentVideoIndex = 0;
let slideInterval;
const SLIDE_INTERVAL_MS = 5000;

// ============================================================
// TYPING EFFECT
// ============================================================
const typingPhrases = [
    'Cybersecurity & Ethical Hacking',
    'Kali Linux Tutorials',
    'Network Security Research',
    'Digital Privacy & Anonymity'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const el = document.getElementById('typingText');
    if (!el) return;

    const phrase = typingPhrases[phraseIndex];

    if (isDeleting) {
        charIndex--;
        el.textContent = phrase.substring(0, charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % typingPhrases.length;
            setTimeout(typeEffect, 500);
            return;
        }
        setTimeout(typeEffect, 40);
    } else {
        charIndex++;
        el.textContent = phrase.substring(0, charIndex);
        if (charIndex === phrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        setTimeout(typeEffect, 70);
    }
}

// ============================================================
// PARTICLE CANVAS
// ============================================================
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
        });

        // Draw faint connection lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================================
// LOAD VIDEOS
// ============================================================
function loadVideos() {
    const videoContainer = document.getElementById('videoContainer');
    const sliderDots = document.getElementById('sliderDots');

    videoContainer.innerHTML = '';
    sliderDots.innerHTML = '';

    mockVideos.forEach((video, index) => {
        // Build YouTube thumbnail URL (hqdefault = 480x360, maxresdefault = 1280x720)
        const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
        const youtubeUrl = `https://youtu.be/${video.youtubeId}`;

        const item = document.createElement('div');
        item.className = 'video-item';
        item.setAttribute('role', 'listitem');
        item.onclick = () => window.open(youtubeUrl, '_blank', 'noopener,noreferrer');

        item.innerHTML = `
            <div class="video-thumbnail">
                <img
                    src="${thumbnailUrl}"
                    alt="${video.title}"
                    class="video-image"
                    loading="lazy"
                    onerror="this.style.background='#0d1420';this.style.display='none'"
                >
                <div class="video-overlay"></div>
                <div class="play-button">${icons.play}</div>
                <div class="duration-badge">${icons.clock}${video.duration}</div>
            </div>
            <div class="video-title">
                <div class="video-index"># ${String(index + 1).padStart(2, '0')}</div>
                <h3>${video.title}</h3>
            </div>
        `;

        videoContainer.appendChild(item);

        // Dot
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to video ${index + 1}`);
        dot.onclick = () => goToSlide(index);
        sliderDots.appendChild(dot);
    });

    updateActiveStates();
}

// ============================================================
// LOAD SOCIAL LINKS
// ============================================================
function loadSocialLinks() {
    const container = document.getElementById('socialLinks');
    container.innerHTML = '';

    socialLinks.forEach(social => {
        const btn = document.createElement('a');
        btn.href = social.url;
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        btn.className = 'social-button';
        btn.setAttribute('role', 'listitem');
        btn.setAttribute('aria-label', `Visit our ${social.platform}`);

        // Pass color as CSS variable for hover effects
        btn.style.setProperty('--platform-color', social.color);
        btn.style.setProperty('--platform-glow', social.glow);

        btn.innerHTML = `
            <div class="social-icon-container">${icons[social.icon]}</div>
            <span class="social-name">${social.platform}</span>
        `;

        container.appendChild(btn);
    });
}

// ============================================================
// SLIDER CONTROLS
// ============================================================
function goToSlide(index) {
    currentVideoIndex = index;
    updateSlider();
    updateActiveStates();
    resetAutoSlide();
}

function updateSlider() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.transform = `translateX(${-currentVideoIndex * 100}%)`;
}

function updateActiveStates() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentVideoIndex);
        dot.setAttribute('aria-selected', i === currentVideoIndex);
    });
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentVideoIndex = (currentVideoIndex + 1) % mockVideos.length;
        updateSlider();
        updateActiveStates();
    }, SLIDE_INTERVAL_MS);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Background & effects
    initParticles();
    typeEffect();

    // Content
    loadVideos();
    loadSocialLinks();

    // Slider buttons
    document.getElementById('prevBtn')?.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex - 1 + mockVideos.length) % mockVideos.length;
        updateSlider();
        updateActiveStates();
        resetAutoSlide();
    });

    document.getElementById('nextBtn')?.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex + 1) % mockVideos.length;
        updateSlider();
        updateActiveStates();
        resetAutoSlide();
    });

    // Auto slide
    startAutoSlide();

    // Touch/swipe support for mobile
    let touchStartX = 0;
    const slider = document.querySelector('.video-slider');
    if (slider) {
        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        slider.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                if (diff > 0) {
                    currentVideoIndex = (currentVideoIndex + 1) % mockVideos.length;
                } else {
                    currentVideoIndex = (currentVideoIndex - 1 + mockVideos.length) % mockVideos.length;
                }
                updateSlider();
                updateActiveStates();
                resetAutoSlide();
            }
        }, { passive: true });
    }

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
            currentVideoIndex = (currentVideoIndex - 1 + mockVideos.length) % mockVideos.length;
            updateSlider(); updateActiveStates(); resetAutoSlide();
        }
        if (e.key === 'ArrowRight') {
            currentVideoIndex = (currentVideoIndex + 1) % mockVideos.length;
            updateSlider(); updateActiveStates(); resetAutoSlide();
        }
    });
});
