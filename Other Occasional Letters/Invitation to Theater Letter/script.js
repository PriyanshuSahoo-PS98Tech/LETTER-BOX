document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const theaterDocument = document.getElementById('theaterDocument');
    const applauseContainer = document.getElementById('applauseContainer');

    let isOpened = false;

    function openTheaterLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createApplauseEffects();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            theaterDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createApplauseEffects();
        }, 950);
    }

    function createApplauseEffects() {
        const icons = ['🎭', '🎟️', '✨', '🌟', '👏', '🎬'];

        for (let i = 0; i < 70; i++) {
            const applause = document.createElement('div');
            applause.className = 'applause';
            applause.textContent = icons[Math.floor(Math.random() * icons.length)];
            applause.style.left = Math.random() * 100 + '%';
            applause.style.animationDuration = (3 + Math.random() * 2.6) + 's';
            applause.style.animationDelay = Math.random() * 0.7 + 's';
            applause.style.fontSize = (14 + Math.random() * 10) + 'px';

            applauseContainer.appendChild(applause);

            setTimeout(function () {
                if (applause.parentNode) {
                    applause.parentNode.removeChild(applause);
                }
            }, 6200);
        }
    }

    envelope.addEventListener('click', openTheaterLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openTheaterLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (theaterDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});