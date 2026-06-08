document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const communityDocument = document.getElementById('communityDocument');
    const confettiContainer = document.getElementById('confettiContainer');

    let isOpened = false;

    function openCommunityLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createCommunityConfetti();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            communityDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createCommunityConfetti();
        }, 950);
    }

    function createCommunityConfetti() {
        const colors = ['#10b981', '#059669', '#a7f3d0', '#fbbf24', '#ffffff', '#fef3c7'];
        const shapes = ['', 'round', 'leaf'];

        for (let i = 0; i < 80; i++) {
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

    envelope.addEventListener('click', openCommunityLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openCommunityLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (communityDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});