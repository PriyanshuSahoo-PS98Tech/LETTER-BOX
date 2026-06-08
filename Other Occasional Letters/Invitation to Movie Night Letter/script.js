document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const movieDocument = document.getElementById('movieDocument');
    const ticketConfettiContainer = document.getElementById('ticketConfettiContainer');

    let isOpened = false;

    function openMovieLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createTicketConfetti();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            movieDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createTicketConfetti();
        }, 950);
    }

    function createTicketConfetti() {
        const colors = ['#facc15', '#dc2626', '#f59e0b', '#ffffff', '#7f1d1d', '#fde68a'];
        const shapes = ['', 'round', 'popcorn-shape'];

        for (let i = 0; i < 85; i++) {
            const confetti = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            confetti.className = shape ? 'ticket-confetti ' + shape : 'ticket-confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            confetti.style.animationDelay = Math.random() * 0.7 + 's';
            confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            if (shape === 'popcorn-shape') {
                confetti.textContent = Math.random() > 0.5 ? '🍿' : '🎟️';
            } else {
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            }

            ticketConfettiContainer.appendChild(confetti);

            setTimeout(function () {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openMovieLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openMovieLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (movieDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});