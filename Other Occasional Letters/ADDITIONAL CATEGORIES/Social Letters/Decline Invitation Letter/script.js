document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const declineDocument = document.getElementById('declineDocument');
    const softPetalContainer = document.getElementById('softPetalContainer');

    let isOpened = false;

    function openDeclineLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createSoftPetals();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            declineDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createSoftPetals();
        }, 950);
    }

    function createSoftPetals() {
        const colors = ['#fbcfe8', '#d8b4fe', '#f5d0fe', '#ffffff', '#fb7185', '#c084fc'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 70; i++) {
            const petal = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            petal.className = shape ? 'soft-petal ' + shape : 'soft-petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.background = colors[Math.floor(Math.random() * colors.length)];
            petal.style.animationDuration = (3 + Math.random() * 3) + 's';
            petal.style.animationDelay = Math.random() * 0.75 + 's';
            petal.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            softPetalContainer.appendChild(petal);

            setTimeout(function () {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openDeclineLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openDeclineLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (declineDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});