document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const blessingDocument = document.getElementById('blessingDocument');
    const petalContainer = document.getElementById('petalContainer');

    let isOpened = false;

    function openBlessingLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createBlessingPetals();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            blessingDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createBlessingPetals();
        }, 950);
    }

    function createBlessingPetals() {
        const colors = ['#facc15', '#f59e0b', '#047857', '#10b981', '#ffffff', '#fef3c7'];
        const shapes = ['', 'round', 'light'];

        for (let i = 0; i < 80; i++) {
            const petal = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            petal.className = shape ? 'petal ' + shape : 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.background = colors[Math.floor(Math.random() * colors.length)];
            petal.style.animationDuration = (3 + Math.random() * 3) + 's';
            petal.style.animationDelay = Math.random() * 0.75 + 's';
            petal.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            petalContainer.appendChild(petal);

            setTimeout(function () {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openBlessingLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openBlessingLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (blessingDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});