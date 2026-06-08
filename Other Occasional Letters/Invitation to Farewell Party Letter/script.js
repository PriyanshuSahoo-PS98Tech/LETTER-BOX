document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const farewellDocument = document.getElementById('farewellDocument');
    const petalContainer = document.getElementById('petalContainer');

    let isOpened = false;

    function openFarewellLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createFarewellPetals();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            farewellDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createFarewellPetals();
        }, 950);
    }

    function createFarewellPetals() {
        const colors = ['#fbbf24', '#f59e0b', '#fb7185', '#c084fc', '#ffffff', '#fde68a'];
        const shapes = ['', 'star', 'ribbon-shape'];

        for (let i = 0; i < 85; i++) {
            const petal = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            petal.className = shape ? 'petal ' + shape : 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.background = colors[Math.floor(Math.random() * colors.length)];
            petal.style.animationDuration = (3.2 + Math.random() * 3) + 's';
            petal.style.animationDelay = Math.random() * 0.7 + 's';
            petal.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            petalContainer.appendChild(petal);

            setTimeout(function () {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 6800);
        }
    }

    envelope.addEventListener('click', openFarewellLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openFarewellLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (farewellDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});