document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const festivalDocument = document.getElementById('festivalDocument');
    const confettiContainer = document.getElementById('confettiContainer');

    let isOpened = false;

    function openFestivalLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createFestivalConfetti();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            festivalDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createFestivalConfetti();
        }, 950);
    }

    function createFestivalConfetti() {
        const colors = ['#facc15', '#f97316', '#dc2626', '#be185d', '#ffffff', '#fde68a'];
        const shapes = ['', 'round', 'diya-shape'];

        for (let i = 0; i < 95; i++) {
            const confetti = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            confetti.className = shape ? 'confetti ' + shape : 'confetti';
            confetti.style.left = Math.random() * 100 + '%';

            if (shape === 'diya-shape') {
                confetti.textContent = Math.random() > 0.5 ? '🪔' : '✨';
            } else {
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            }

            confetti.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            confetti.style.animationDelay = Math.random() * 0.7 + 's';
            confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            confettiContainer.appendChild(confetti);

            setTimeout(function () {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openFestivalLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openFestivalLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (festivalDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});