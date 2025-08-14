document.addEventListener('DOMContentLoaded', function() {
    // Load Catloaf animation
    const catloafAnimation = lottie.loadAnimation({
        container: document.getElementById('catloaf-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Catloaf webface 03.json'
    });

    // Load speech bubble animations
    const driptradeAnimation = lottie.loadAnimation({
        container: document.getElementById('driptrade-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'SPEECHBUBBLE_DRIPTRADE.json'
    });

    const hellAnimation = lottie.loadAnimation({
        container: document.getElementById('hell-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'SPEECHBUBBLE_HELL.json'
    });

    const exchangeAnimation = lottie.loadAnimation({
        container: document.getElementById('exchange-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'SPEECHBUBBLE_HXFINANCE.json'
    });

    // Fallback text if animations don't load
    setTimeout(() => {
        if (!document.querySelector('#driptrade-animation svg')) {
            document.getElementById('driptrade-animation').innerHTML = 'DRIPTRADE';
        }
        if (!document.querySelector('#hell-animation svg')) {
            document.getElementById('hell-animation').innerHTML = 'HELL';
        }
        if (!document.querySelector('#exchange-animation svg')) {
            document.getElementById('exchange-animation').innerHTML = 'EXCHANGE';
        }
    }, 3000);

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