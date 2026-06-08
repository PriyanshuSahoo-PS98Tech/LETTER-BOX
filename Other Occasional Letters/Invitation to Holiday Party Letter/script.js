document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const holidayDocument = document.getElementById('holidayDocument');
    const confettiContainer = document.getElementById('confettiContainer');

    let isOpened = false;

    function openHolidayLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createHolidayConfetti();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            holidayDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createHolidayConfetti();
        }, 950);
    }

    function createHolidayConfetti() {
        const colors = ['#facc15', '#e11d48', '#047857', '#ffffff', '#f59e0b', '#fecaca'];
        const shapes = ['', 'round', 'ribbon-shape'];

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            confetti.className = shape ? 'confetti ' + shape : 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
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

    envelope.addEventListener('click', openHolidayLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openHolidayLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (holidayDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});