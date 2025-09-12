// Mock data for RG Security YouTube channel
const mockVideos = [
    {
        id: '1',
        title: "Hound: The GPS Tracker Thats Perfect for Hackers",
        duration: "02:36",
        thumbnail: "image/thumbinels/hound.png",
        youtubeUrl: "https://youtu.be/v8X88IQTcrE?si=QvRfQ_np-E6lkDIS"
    },
    {
        id: '2',
        title: "Next Level Privacy: Tor Auto IP Rotation on Linux",
        duration: "03:36",
        thumbnail: "image/thumbinels/Automated_Tor_IP_Changer_Guide_278918d2-40e6-4e5f-a9fc-b02e69fb7ea0.png",
        youtubeUrl: "https://youtu.be/SwJhvcbew5E?si=NyfAitWaUwYiVHYE"
    },
    {
        id: '3',
        title: "CamPhish Tool Explained | Capture Camera Photos via Link (Cybersecurity Tutorial)",
        duration: "03:24",
        thumbnail: "image/thumbinels/camphish.png",
        youtubeUrl: "https://youtu.be/SSNFRb1Tx0c?si=ttGqOcRJpAtxwlmf"
    },
    {
        id: '4',
        title: "How Hackers Hack Wi-Fi Using Fake Login Page (Evil Twin Attack)",
        duration: "04:09",
        thumbnail: "image/thumbinels/wifiphisher.png",
        youtubeUrl: "https://youtu.be/ZpA46md0-_0?si=zysLU8ZIws-w1k4n"
    },
    {
        id: '5',
        title: "AhMyth Setup and Usage on Kali Linux | Complete Guide for Beginners",
        duration: "06:18",
        thumbnail: "image/thumbinels/compressed.png",
        youtubeUrl: "https://youtu.be/qSWYpnpHD-A?si=Mj3m-73L6Unle0Qf"
    },
    {
        id: '6',
        title: "How Hackers Use Ettercap for DNS Spoofing Attacks (and How to Protect Yourself!)",
        duration: "02:20",
        thumbnail: "image/thumbinels/DNS_Attack_With_Ettercap_fd87c3dd-340e-4459-8395-c00504cdfca2.png",
        youtubeUrl: "https://youtu.be/oWom6YMZ80s?si=ZfPVoIEcRzbXts7X"
    }
];

const socialLinks = [
    {
        platform: 'Facebook',
        url: 'https://www.facebook.com/RGSecTeam',
        icon: 'facebook',
        color: '#1877F2'
    },
    {
        platform: 'YouTube',
        url: 'https://youtube.com/@RGSecurityTeam',
        icon: 'youtube',
        color: '#fb1b1b'
    },
    {
        platform: 'Instagram',
        url: 'https://www.instagram.com/rgsecuritytam/',
        icon: 'instagram',
        color: '#E4405F'
    },
    {
        platform: 'GitHub',
        url: 'https://github.com/rgsecteam',
        icon: 'github',
        color: '#f9f9f9e8'
    }
];

// Video slider functionality
let currentVideoIndex = 0;
let slideInterval;

// SVG Icons
const icons = {
    play: '<svg fill="white" viewBox="0 0 24 24" class="play-icon"> <path d="M8 5v14l11-7z"/> </svg>',

    clock: '<svg fill="currentColor" viewBox="0 0 24 24" class="clock-icon"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/> </svg>',

    facebook: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 
        5.373-12 12c0 5.99 4.388 10.954 10.125 
        11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
        1.792-4.669 4.533-4.669 1.312 0 2.686.235 
        2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
        1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
        23.027 24 18.062 24 12.073z"/>
    </svg>`,

    youtube: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon">
        <path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.106C19.505 
        3.5 12 3.5 12 3.5s-7.505 0-9.404.58A2.974 2.974 0 0 0 
        .502 6.186 30.16 30.16 0 0 0 0 12a30.16 30.16 0 0 0 
        .502 5.814 2.974 2.974 0 0 0 2.094 2.106C4.495 
        20.5 12 20.5 12 20.5s7.505 0 9.404-.58a2.974 2.974 
        0 0 0 2.094-2.106A30.16 30.16 0 0 0 24 12a30.16 
        30.16 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 
        3.5z"/>
    </svg>`,

    instagram: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 
        5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 
        16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 
        1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 
        0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 
        4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 
        0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 
        0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 
        0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/>
    </svg>`,

    github: `<svg fill="currentColor" viewBox="0 0 24 24" class="social-icon">
        <path d="M12 0c-6.626 0-12 5.373-12 
        12 0 5.302 3.438 9.8 8.207 
        11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
        1.205.084 1.839 1.237 1.839 
        1.237 1.07 1.834 2.807 1.304 
        3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 
        0-1.311.469-2.381 
        1.236-3.221-.124-.303-.535-1.524.117-3.176 
        0 0 1.008-.322 3.301 
        1.23.957-.266 1.983-.399 
        3.003-.404 1.02.005 2.047.138 
        3.006.404 2.291-1.552 3.297-1.23 
        3.297-1.23.653 1.653.242 2.874.118 
        3.176.77.84 1.235 1.911 1.235 
        3.221 0 4.609-2.807 5.624-5.479 
        5.921.43.372.823 1.102.823 
        2.222v3.293c0 .319.192.694.801.576 
        4.765-1.589 8.199-6.086 
        8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`
};


// Initialize the application
function init() {
    loadVideos();
    loadSocialLinks();
    startAutoSlide();
}

// Load videos into the slider
function loadVideos() {
    const videoContainer = document.getElementById('videoContainer');
    const sliderDots = document.getElementById('sliderDots');
    
    // Clear existing content
    videoContainer.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Create video slides
    mockVideos.forEach((video, index) => {
        const videoElement = createVideoElement(video, index);
        videoContainer.appendChild(videoElement);
        
        const dot = createDot(index);
        sliderDots.appendChild(dot);
    });
    
    // Set initial active states
    updateActiveStates();
}

// Create a video element
function createVideoElement(video, index) {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.onclick = () => handleVideoClick(video.youtubeUrl);
    
    videoItem.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}" class="video-image" loading="lazy">
            <div class="video-overlay"></div>
            <div class="play-button">
                ${icons.play}
            </div>
            <div class="duration-badge">
                ${icons.clock}
                ${video.duration}
            </div>
        </div>
        <div class="video-title">
            <h3>${video.title}</h3>
        </div>
    `;
    
    return videoItem;
}

// Create a dot for navigation
function createDot(index) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.onclick = () => goToSlide(index);
    return dot;
}

// Handle video click
function handleVideoClick(youtubeUrl) {
    window.open(youtubeUrl, '_blank');
}

// Go to specific slide
function goToSlide(index) {
    currentVideoIndex = index;
    updateSlider();
    updateActiveStates();
    resetAutoSlide();
}

// Update slider position
function updateSlider() {
    const videoContainer = document.getElementById('videoContainer');
    const translateX = -currentVideoIndex * 100;
    videoContainer.style.transform = `translateX(${translateX}%)`;
}

// Update active states for dots
function updateActiveStates() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentVideoIndex);
    });
}

// Start auto sliding
function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentVideoIndex = (currentVideoIndex + 1) % mockVideos.length;
        updateSlider();
        updateActiveStates();
    }, 4000); // Change slide every 4 seconds
}

// Reset auto slide timer
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Load social links
function loadSocialLinks() {
    const socialLinksContainer = document.getElementById('socialLinks');
    socialLinksContainer.innerHTML = '';
    
    socialLinks.forEach(social => {
        const socialElement = createSocialElement(social);
        socialLinksContainer.appendChild(socialElement);
    });
}

// Create a social link element
function createSocialElement(social) {
    const socialButton = document.createElement('a');
    socialButton.href = social.url;
    socialButton.target = '_blank';
    socialButton.className = 'social-button';
    
    socialButton.innerHTML = `
        <div class="social-content">
            <div class="social-icon-container">
                ${icons[social.icon]}
            </div>
            <span class="social-name">${social.platform}</span>
        </div>
        <div class="social-background" style="background-color: ${social.color}"></div>
    `;
    
    // Add hover effects
    socialButton.addEventListener('mouseenter', () => {
        const icon = socialButton.querySelector('.social-icon');
        if (icon) {
            icon.style.color = social.color;
        }
    });
    
    socialButton.addEventListener('mouseleave', () => {
        const icon = socialButton.querySelector('.social-icon');
        if (icon) {
            icon.style.color = '#9ca3af';
        }
    });
    
    return socialButton;
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
