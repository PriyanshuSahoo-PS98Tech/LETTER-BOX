document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const babyShowerDocument = document.getElementById('babyShowerDocument');
    const bubblesContainer = document.getElementById('bubblesContainer');

    let isOpened = false;

    function openBabyShowerLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createBubbleBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            babyShowerDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createBubbleBurst();
        }, 950);
    }

    function createBubbleBurst() {
        const icons = ['🍼', '🧸', '👶', '🎀', '💝', '⭐', '✨'];

        for (let i = 0; i < 80; i++) {
            const useIcon = Math.random() > 0.55;
            const bubble = document.createElement('div');

            if (useIcon) {
                bubble.className = 'tiny-star';
                bubble.textContent = icons[Math.floor(Math.random() * icons.length)];
            } else {
                bubble.className = 'bubble';
                const size = 9 + Math.random() * 18;
                bubble.style.width = size + 'px';
                bubble.style.height = size + 'px';
            }

            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDuration = (3.2 + Math.random() * 3.2) + 's';
            bubble.style.animationDelay = Math.random() * 0.65 + 's';

            bubblesContainer.appendChild(bubble);

            setTimeout(function () {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openBabyShowerLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openBabyShowerLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (babyShowerDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});