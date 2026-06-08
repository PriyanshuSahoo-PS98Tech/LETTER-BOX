document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const gameNightDocument = document.getElementById('gameNightDocument');
    const confettiContainer = document.getElementById('confettiContainer');

    let isOpened = false;

    function openGameNightLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createGameConfetti();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            gameNightDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createGameConfetti();
        }, 950);
    }

    function createGameConfetti() {
        const colors = ['#22d3ee', '#ec4899', '#7c3aed', '#facc15', '#22c55e', '#ffffff'];
        const shapes = ['', 'round', 'token'];
        const tokens = ['🎮', '🎲', '⭐', '🏆', '🃏'];

        for (let i = 0; i < 105; i++) {
            const confetti = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            confetti.className = shape ? 'confetti ' + shape : 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            confetti.style.animationDelay = Math.random() * 0.7 + 's';
            confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            if (shape === 'token') {
                confetti.textContent = tokens[Math.floor(Math.random() * tokens.length)];
            } else {
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            }

            confettiContainer.appendChild(confetti);

            setTimeout(function () {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openGameNightLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openGameNightLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (gameNightDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});