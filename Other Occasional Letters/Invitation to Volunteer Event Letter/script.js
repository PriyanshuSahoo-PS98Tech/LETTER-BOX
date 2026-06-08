document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const volunteerDocument = document.getElementById('volunteerDocument');
    const gratitudeContainer = document.getElementById('gratitudeContainer');

    let isOpened = false;

    function openVolunteerLetter() {
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
            volunteerDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createGratitudeEffects();
        }, 950);
    }

    function createGratitudeEffects() {
        const icons = ['🤝', '💚', '🌱', '✨', '🌿', '⭐', '🙌'];

        for (let i = 0; i < 70; i++) {
            const gratitude = document.createElement('div');
            gratitude.className = 'gratitude';
            gratitude.textContent = icons[Math.floor(Math.random() * icons.length)];
            gratitude.style.left = Math.random() * 100 + '%';
            gratitude.style.animationDuration = (3 + Math.random() * 2.6) + 's';
            gratitude.style.animationDelay = Math.random() * 0.7 + 's';
            gratitude.style.fontSize = (15 + Math.random() * 8) + 'px';

            gratitudeContainer.appendChild(gratitude);

            setTimeout(function () {
                if (gratitude.parentNode) {
                    gratitude.parentNode.removeChild(gratitude);
                }
            }, 6200);
        }
    }

    envelope.addEventListener('click', openVolunteerLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openVolunteerLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (volunteerDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});