document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const concertDocument = document.getElementById('concertDocument');
    const confettiContainer = document.getElementById('confettiContainer');

    let isOpened = false;

    function openConcertLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createMusicConfetti();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            concertDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createMusicConfetti();
        }, 950);
    }

    function createMusicConfetti() {
        const colors = ['#facc15', '#ec4899', '#22d3ee', '#7c3aed', '#ffffff'];
        const shapes = ['', 'round', 'note-shape'];
        const notes = ['♪', '♫', '♬', '🎵', '🎶'];

        for (let i = 0; i < 95; i++) {
            const confetti = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            confetti.className = shape ? 'confetti ' + shape : 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            confetti.style.animationDelay = Math.random() * 0.7 + 's';
            confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            if (shape === 'note-shape') {
                confetti.textContent = notes[Math.floor(Math.random() * notes.length)];
                confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
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

    envelope.addEventListener('click', openConcertLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openConcertLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (concertDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});