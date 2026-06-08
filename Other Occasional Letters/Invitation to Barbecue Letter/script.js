document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const bbqDocument = document.getElementById('bbqDocument');
    const flameContainer = document.getElementById('flameContainer');

    let isOpened = false;

    function openBarbecueLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createFlameBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            bbqDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createFlameBurst();
        }, 950);
    }

    function createFlameBurst() {
        const colors = ['#facc15', '#fb923c', '#f97316', '#dc2626', '#ffffff'];

        for (let i = 0; i < 60; i++) {
            const flame = document.createElement('div');
            flame.className = 'flame-piece';
            flame.style.left = Math.random() * 100 + '%';
            flame.style.background = colors[Math.floor(Math.random() * colors.length)];
            flame.style.animationDuration = (2.8 + Math.random() * 2.5) + 's';
            flame.style.animationDelay = Math.random() * 0.55 + 's';
            flame.style.opacity = 0.75 + Math.random() * 0.25;

            flameContainer.appendChild(flame);

            setTimeout(function () {
                if (flame.parentNode) {
                    flame.parentNode.removeChild(flame);
                }
            }, 6000);
        }
    }

    envelope.addEventListener('click', openBarbecueLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openBarbecueLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (bbqDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});