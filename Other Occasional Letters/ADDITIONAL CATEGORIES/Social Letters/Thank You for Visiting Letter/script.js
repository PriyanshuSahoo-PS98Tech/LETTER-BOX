document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const thankDocument = document.getElementById('thankDocument');
    const gratitudeContainer = document.getElementById('gratitudeContainer');

    let isOpened = false;

    function openThankLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createGratitudeEffects();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            thankDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createGratitudeEffects();
        }, 950);
    }

    function createGratitudeEffects() {
        const colors = ['#facc15', '#f59e0b', '#c2410c', '#6b8f71', '#ffffff', '#fed7aa'];
        const shapes = ['', 'round', 'light'];

        for (let i = 0; i < 80; i++) {
            const gratitude = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            gratitude.className = shape ? 'gratitude ' + shape : 'gratitude';
            gratitude.style.left = Math.random() * 100 + '%';
            gratitude.style.background = colors[Math.floor(Math.random() * colors.length)];
            gratitude.style.animationDuration = (3 + Math.random() * 3) + 's';
            gratitude.style.animationDelay = Math.random() * 0.75 + 's';
            gratitude.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            gratitudeContainer.appendChild(gratitude);

            setTimeout(function () {
                if (gratitude.parentNode) {
                    gratitude.parentNode.removeChild(gratitude);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openThankLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openThankLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (thankDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});