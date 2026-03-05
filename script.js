// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
    disable: 'mobile' // Optional: toggle based on performance needs
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll with offset for header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 80; // height of header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Booking widget alert demo
const searchBtn = document.getElementById('search-btn');
const destSelect = document.getElementById('destination-select');

searchBtn.addEventListener('click', () => {
    const destination = destSelect.value || "the United Kingdom";
    alert(`🔍 Propulsando motores... Buscando conexiones directas a ${destination.toUpperCase()} para ti.`);
});

// Minimal parallax for hero
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = (scroll * 0.4) + 'px';
    }
});

console.log("BritishWings v2.0 - Premium Experience Activated.");
