document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const launchDocument = document.getElementById('launchDocument');
    const burstContainer = document.getElementById('burstContainer');

    let isOpened = false;

    function openLaunchInvitation() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createLaunchBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            launchDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createLaunchBurst();
        }, 950);
    }

    function createLaunchBurst() {
        const colors = ['#67e8f9', '#06b6d4', '#1d4ed8', '#7c3aed', '#facc15', '#ffffff'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 85; i++) {
            const burst = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            burst.className = shape ? 'burst ' + shape : 'burst';
            burst.style.left = Math.random() * 100 + '%';
            burst.style.background = colors[Math.floor(Math.random() * colors.length)];
            burst.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            burst.style.animationDelay = Math.random() * 0.65 + 's';
            burst.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            burstContainer.appendChild(burst);

            setTimeout(function () {
                if (burst.parentNode) {
                    burst.parentNode.removeChild(burst);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openLaunchInvitation);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLaunchInvitation();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (launchDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});