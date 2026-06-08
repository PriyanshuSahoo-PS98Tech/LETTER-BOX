document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const welcomeDocument = document.getElementById('welcomeDocument');
    const welcomeBurstContainer = document.getElementById('welcomeBurstContainer');

    let isOpened = false;

    function openWelcomeLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createWelcomeBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            welcomeDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createWelcomeBurst();
        }, 950);
    }

    function createWelcomeBurst() {
        const colors = ['#38bdf8', '#2563eb', '#10b981', '#a7f3d0', '#facc15', '#ffffff'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 80; i++) {
            const burst = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            burst.className = shape ? 'welcome-burst ' + shape : 'welcome-burst';
            burst.style.left = Math.random() * 100 + '%';
            burst.style.background = colors[Math.floor(Math.random() * colors.length)];
            burst.style.animationDuration = (3 + Math.random() * 3) + 's';
            burst.style.animationDelay = Math.random() * 0.75 + 's';
            burst.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            welcomeBurstContainer.appendChild(burst);

            setTimeout(function () {
                if (burst.parentNode) {
                    burst.parentNode.removeChild(burst);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openWelcomeLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openWelcomeLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (welcomeDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});