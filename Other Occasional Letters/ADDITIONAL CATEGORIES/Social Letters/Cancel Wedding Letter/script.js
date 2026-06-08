document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const noticeDocument = document.getElementById('noticeDocument');
    const petalContainer = document.getElementById('petalContainer');

    let isOpened = false;

    function openNoticeLetter() {
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
            noticeDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createSoftPetals();
        }, 950);
    }

    function createSoftPetals() {
        const colors = ['#ffe4e6', '#f8e7c9', '#e11d48', '#ffffff', '#fef3c7', '#cbd5e1'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 60; i++) {
            const petal = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            petal.className = shape ? 'petal ' + shape : 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.background = colors[Math.floor(Math.random() * colors.length)];
            petal.style.animationDuration = (3.5 + Math.random() * 3) + 's';
            petal.style.animationDelay = Math.random() * 0.75 + 's';
            petal.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            petalContainer.appendChild(petal);

            setTimeout(function () {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 7200);
        }
    }

    envelope.addEventListener('click', openNoticeLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openNoticeLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (noticeDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});