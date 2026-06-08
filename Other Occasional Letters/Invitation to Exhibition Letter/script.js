document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const exhibitionDocument = document.getElementById('exhibitionDocument');
    const shineContainer = document.getElementById('shineContainer');

    let isOpened = false;

    function openExhibitionLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createGoldenShine();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            exhibitionDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createGoldenShine();
        }, 950);
    }

    function createGoldenShine() {
        const colors = ['#facc15', '#d97706', '#047857', '#ffffff', '#fde68a', '#34d399'];
        const shapes = ['', 'round'];

        for (let i = 0; i < 70; i++) {
            const shine = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            shine.className = shape ? 'shine-piece ' + shape : 'shine-piece';
            shine.style.left = Math.random() * 100 + '%';
            shine.style.background = colors[Math.floor(Math.random() * colors.length)];
            shine.style.animationDuration = (3 + Math.random() * 2.6) + 's';
            shine.style.animationDelay = Math.random() * 0.65 + 's';
            shine.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            shineContainer.appendChild(shine);

            setTimeout(function () {
                if (shine.parentNode) {
                    shine.parentNode.removeChild(shine);
                }
            }, 6200);
        }
    }

    envelope.addEventListener('click', openExhibitionLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openExhibitionLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (exhibitionDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});