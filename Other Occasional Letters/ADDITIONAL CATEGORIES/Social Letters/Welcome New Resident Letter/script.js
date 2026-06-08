document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const welcomeDocument = document.getElementById('welcomeDocument');
    const confettiContainer = document.getElementById('confettiContainer');

    let isOpened = false;

    function openWelcomeLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createWelcomeConfetti();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            welcomeDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createWelcomeConfetti();
        }, 950);
    }

    function createWelcomeConfetti() {
        const colors = ['#facc15', '#059669', '#38bdf8', '#2563eb', '#ffffff', '#bbf7d0'];
        const shapes = ['', 'round', 'key'];

        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            confetti.className = shape ? 'confetti ' + shape : 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (3 + Math.random() * 3) + 's';
            confetti.style.animationDelay = Math.random() * 0.75 + 's';
            confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            confettiContainer.appendChild(confetti);

            setTimeout(function () {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openWelcomeLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openWelcomeLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (welcomeDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});