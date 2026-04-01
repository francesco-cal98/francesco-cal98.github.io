// ─── AOS (scroll animations) ──────────────────────────────
AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
});

// ─── NAVBAR: add .scrolled class on scroll ────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── MOBILE NAV TOGGLE ────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.querySelector('i').className =
        navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
});

// close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.querySelector('i').className = 'fas fa-bars';
    });
});

// ─── TSPARTICLES (hero background) ───────────────────────
tsParticles.load('particles-js', {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
        number: {
            value: 60,
            density: { enable: true, area: 900 },
        },
        color: {
            value: ['#6366f1', '#a855f7', '#06b6d4'],
        },
        shape: { type: 'circle' },
        opacity: {
            value: 0.35,
            random: { enable: true, minimumValue: 0.1 },
            animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false },
        },
        size: {
            value: { min: 1, max: 3 },
        },
        links: {
            enable: true,
            distance: 140,
            color: '#6366f1',
            opacity: 0.12,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
        },
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: false },
        },
        modes: {
            grab: { distance: 160, links: { opacity: 0.3 } },
        },
    },
    detectRetina: true,
});
