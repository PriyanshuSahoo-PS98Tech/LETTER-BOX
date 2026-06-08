document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const luncheonDocument = document.getElementById('luncheonDocument');
    const petalContainer = document.getElementById('petalContainer');

    let isOpened = false;

    function openLuncheonLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createWarmPetals();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            luncheonDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createWarmPetals();
        }, 950);
    }

    function createWarmPetals() {
        const colors = ['#facc15', '#fed7aa', '#f59e0b', '#fb7185', '#ffffff', '#bbf7d0'];
        const shapes = ['', 'round'];

        for (let i = 0; i < 70; i++) {
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

    envelope.addEventListener('click', openLuncheonLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLuncheonLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (luncheonDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});