document.addEventListener('DOMContentLoaded', function() {
    // Load Desktop Catloaf
    if (document.getElementById('catloaf-animation')) {
        lottie.loadAnimation({
            container: document.getElementById('catloaf-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'Catloaf webface 03.json'
        });
    }

    // Load Mobile Catloaf  
    if (document.getElementById('catloaf-animation-mobile')) {
        lottie.loadAnimation({
            container: document.getElementById('catloaf-animation-mobile'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'Catloaf webface 03.json'
        });
    }
    
    // Desktop animations
    if (document.getElementById('driptrade-animation')) {
        lottie.loadAnimation({
            container: document.getElementById('driptrade-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'SPEECHBUBBLE_DRIPTRADE.json'
        });
    }

    if (document.getElementById('hell-animation')) {
        lottie.loadAnimation({
            container: document.getElementById('hell-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'SPEECHBUBBLE_HELL.json'
        });
    }

    if (document.getElementById('exchange-animation')) {
        lottie.loadAnimation({
            container: document.getElementById('exchange-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'SPEECHBUBBLE_HXFINANCE.json'
        });
    }
    
    // Mobile animations
    if (document.getElementById('driptrade-animation-mobile')) {
        lottie.loadAnimation({
            container: document.getElementById('driptrade-animation-mobile'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'SPEECHBUBBLE_DRIPTRADE_MOBILE.json'
        });
    }

    if (document.getElementById('hell-animation-mobile')) {
        lottie.loadAnimation({
            container: document.getElementById('hell-animation-mobile'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'SPEECHBUBBLE_HELL_MOBILE.json'
        });
    }

    if (document.getElementById('exchange-animation-mobile')) {
        lottie.loadAnimation({
            container: document.getElementById('exchange-animation-mobile'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'SPEECHBUBBLE_HXFINANCE_MOBILE.json'
        });
    }

    // Fallback text removed - animations include the text

    // Add some interactivity - make bubbles bounce on hover
    const bubbles = document.querySelectorAll('.speech-bubble');
    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Make catloaf container bounce on click
    const catloafContainer = document.querySelector('.catloaf-container');
    catloafContainer.addEventListener('click', function() {
        this.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Windows 95 alert functions
function showWin95Alert() {
    const modal = document.getElementById('win95Modal');
    modal.classList.add('show');
}

function closeWin95Alert() {
    const modal = document.getElementById('win95Modal');
    modal.classList.remove('show');
}