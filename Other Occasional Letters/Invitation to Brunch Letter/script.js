document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const brunchDocument = document.getElementById('brunchDocument');
    const petalContainer = document.getElementById('petalContainer');

    let isOpened = false;

    function openBrunchLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createPetalBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            brunchDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createPetalBurst();
        }, 950);
    }

    function createPetalBurst() {
        const colors = ['#facc15', '#fed7aa', '#fb923c', '#bbf7d0', '#fff7ed', '#fde68a'];
        const shapes = ['', 'round', 'leaf'];

        for (let i = 0; i < 80; i++) {
            const petal = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            petal.className = shape ? 'petal ' + shape : 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.background = colors[Math.floor(Math.random() * colors.length)];
            petal.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            petal.style.animationDelay = Math.random() * 0.7 + 's';
            petal.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            petalContainer.appendChild(petal);

            setTimeout(function () {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openBrunchLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openBrunchLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (brunchDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});