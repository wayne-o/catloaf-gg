document.addEventListener('DOMContentLoaded', function () {
    // Load Portrait animation for mobile
    if (document.getElementById('catloaf-portrait')) {
        const portraitContainer = document.getElementById('catloaf-portrait');
        portraitContainer.style.position = 'relative';

        const portraitAnimation = lottie.loadAnimation({
            container: portraitContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'Catloaf webface PORTRAIT 01.json'
        });

        // Add clickable areas after a short delay to ensure animation is rendered
        setTimeout(function () {
            // Make SVG non-blocking
            const svg = portraitContainer.querySelector('svg');
            if (svg) {
                svg.style.pointerEvents = 'none';
            }

            // Create clickable overlays for links in portrait mode
            const portraitLinks = document.createElement('div');
            portraitLinks.style.position = 'absolute';
            portraitLinks.style.top = '0';
            portraitLinks.style.left = '0';
            portraitLinks.style.width = '100%';
            portraitLinks.style.height = '100%';
            portraitLinks.style.zIndex = '10';

            // Hell Twitter link area
            const hellLinkMobile = document.createElement('a');
            hellLinkMobile.href = 'https://x.com/catloaf_hl';
            hellLinkMobile.target = '_blank';
            hellLinkMobile.style.position = 'absolute';
            hellLinkMobile.style.top = '23%';
            hellLinkMobile.style.left = '5%';
            hellLinkMobile.style.width = '35%';
            hellLinkMobile.style.height = '15%';
            hellLinkMobile.style.cursor = 'pointer';
            hellLinkMobile.style.display = 'block';
            portraitLinks.appendChild(hellLinkMobile);

            // HX Finance link area
            const hxLinkMobile = document.createElement('a');
            hxLinkMobile.href = 'https://hx.finance';
            hxLinkMobile.target = '_blank';
            hxLinkMobile.style.position = 'absolute';
            hxLinkMobile.style.top = '15%';
            hxLinkMobile.style.right = '10%';
            hxLinkMobile.style.width = '50%';
            hxLinkMobile.style.height = '10%';
            hxLinkMobile.style.cursor = 'pointer';
            hxLinkMobile.style.display = 'block';
            portraitLinks.appendChild(hxLinkMobile);

            // DripTrade link area
            const dripLinkMobile = document.createElement('a');
            dripLinkMobile.href = '#';
            dripLinkMobile.onclick = function (e) {
                e.preventDefault();
                showDriptradeModal();
                return false;
            };
            dripLinkMobile.style.position = 'absolute';
            dripLinkMobile.style.top = '0%';
            dripLinkMobile.style.left = '40%';
            dripLinkMobile.style.transform = 'translateX(-50%)';
            dripLinkMobile.style.width = '50%';
            dripLinkMobile.style.height = '15%';
            dripLinkMobile.style.cursor = 'pointer';
            dripLinkMobile.style.display = 'block';
            portraitLinks.appendChild(dripLinkMobile);

            // WTF? link area for mobile
            const wtfLinkMobile = document.createElement('a');
            wtfLinkMobile.href = '#';
            wtfLinkMobile.onclick = function (e) {
                e.preventDefault();
                showWtfModal();
                return false;
            };
            wtfLinkMobile.style.position = 'absolute';
            wtfLinkMobile.style.top = '25%';
            wtfLinkMobile.style.left = '60%';
            wtfLinkMobile.style.transform = 'translateX(-50%)';
            wtfLinkMobile.style.width = '30%';
            wtfLinkMobile.style.height = '12%';
            wtfLinkMobile.style.cursor = 'pointer';
            wtfLinkMobile.style.display = 'block';
            portraitLinks.appendChild(wtfLinkMobile);

            portraitContainer.appendChild(portraitLinks);
        }, 500);
    }

    // Load Landscape animation for desktop
    if (document.getElementById('catloaf-landscape')) {
        const landscapeContainer = document.getElementById('catloaf-landscape');
        landscapeContainer.style.position = 'relative';

        const landscapeAnimation = lottie.loadAnimation({
            container: landscapeContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'Catloaf webface LANDSCAPE 04.json'
        });

        // Add clickable areas after a short delay to ensure animation is rendered
        setTimeout(function () {
            // Make SVG non-blocking
            const svg = landscapeContainer.querySelector('svg');
            if (svg) {
                svg.style.pointerEvents = 'none';
            }

            // Create clickable overlays for links in landscape mode
            const landscapeLinks = document.createElement('div');
            landscapeLinks.style.position = 'absolute';
            landscapeLinks.style.top = '0';
            landscapeLinks.style.left = '0';
            landscapeLinks.style.width = '100%';
            landscapeLinks.style.height = '100%';
            landscapeLinks.style.zIndex = '10';

            // Hell Twitter link area (top-left bubble)
            const hellLink = document.createElement('a');
            hellLink.href = 'https://x.com/catloaf_hl';
            hellLink.target = '_blank';
            hellLink.style.position = 'absolute';
            hellLink.style.top = '6%';
            hellLink.style.left = '30%';
            hellLink.style.width = '12%';
            hellLink.style.height = '10%';
            hellLink.style.cursor = 'pointer';
            hellLink.style.display = 'block';
            landscapeLinks.appendChild(hellLink);

            // HX Finance link area (left bubble)
            const hxLink = document.createElement('a');
            hxLink.href = 'https://hx.finance';
            hxLink.target = '_blank';
            hxLink.style.position = 'absolute';
            hxLink.style.top = '26%';
            hxLink.style.left = '5%';
            hxLink.style.width = '24%';
            hxLink.style.height = '12%';
            hxLink.style.cursor = 'pointer';
            hxLink.style.display = 'block';
            landscapeLinks.appendChild(hxLink);

            // DripTrade link area (right bubble)
            const dripLink = document.createElement('a');
            dripLink.href = '#';
            dripLink.onclick = function (e) {
                e.preventDefault();
                showDriptradeModal();
                return false;
            };
            dripLink.style.position = 'absolute';
            dripLink.style.top = '16%';
            dripLink.style.right = '0%';
            dripLink.style.width = '30%';
            dripLink.style.height = '12%';
            dripLink.style.cursor = 'pointer';
            dripLink.style.display = 'block';
            landscapeLinks.appendChild(dripLink);

            // WTF? link area (top-center bubble)
            const wtfLink = document.createElement('a');
            wtfLink.href = '#';
            wtfLink.onclick = function (e) {
                e.preventDefault();
                showWtfModal();
                return false;
            };
            wtfLink.style.position = 'absolute';
            wtfLink.style.top = '5%';
            wtfLink.style.left = '52%';
            wtfLink.style.width = '15%';
            wtfLink.style.height = '12%';
            wtfLink.style.cursor = 'pointer';
            wtfLink.style.display = 'block';
            landscapeLinks.appendChild(wtfLink);

            landscapeContainer.appendChild(landscapeLinks);
            console.log('Links added to landscape container');
        }, 500);
    }
});

// DripTrade Modal functions
function showDriptradeModal() {
    console.log('Showing DripTrade modal');
    const modal = document.getElementById('driptradeModal');
    modal.classList.add('show');
}

function closeDriptradeModal(event) {
    if (!event || event.target.id === 'driptradeModal' || event.target.className === 'modal-close') {
        const modal = document.getElementById('driptradeModal');
        modal.classList.remove('show');
    }
}

// WTF Modal functions
function showWtfModal() {
    console.log('Showing WTF modal');
    const modal = document.getElementById('wtfModal');
    modal.classList.add('show');
}

function closeWtfModal(event) {
    if (!event || event.target.id === 'wtfModal' || event.target.className === 'modal-close') {
        const modal = document.getElementById('wtfModal');
        modal.classList.remove('show');
    }
}

// Debug mode - press 'd' key to toggle visibility of clickable areas
let debugMode = false;
document.addEventListener('keypress', function (e) {
    if (e.key === 'd') {
        debugMode = !debugMode;
        const allLinks = document.querySelectorAll('#catloaf-portrait a, #catloaf-landscape a');
        console.log('Found links:', allLinks.length);
        allLinks.forEach(link => {
            if (debugMode) {
                link.style.border = '2px solid red';
                link.style.backgroundColor = 'rgba(255,0,0,0.2)';
            } else {
                link.style.border = 'none';
                link.style.backgroundColor = 'transparent';
            }
        });
    }
});