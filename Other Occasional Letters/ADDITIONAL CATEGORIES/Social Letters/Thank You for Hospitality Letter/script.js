document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const thankyouDocument = document.getElementById('thankyouDocument');
    const gratitudeContainer = document.getElementById('gratitudeContainer');

    let isOpened = false;

    function openThankYouLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createGratitudeParticles();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            thankyouDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createGratitudeParticles();
        }, 950);
    }

    function createGratitudeParticles() {
        const colors = ['#facc15', '#f59e0b', '#b45309', '#fed7aa', '#ffffff', '#fb7185'];
        const shapes = ['', 'round', 'light'];

        for (let i = 0; i < 80; i++) {
            const gratitude = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            gratitude.className = shape ? 'gratitude ' + shape : 'gratitude';
            gratitude.style.left = Math.random() * 100 + '%';
            gratitude.style.background = colors[Math.floor(Math.random() * colors.length)];
            gratitude.style.animationDuration = (3 + Math.random() * 3) + 's';
            gratitude.style.animationDelay = Math.random() * 0.75 + 's';
            gratitude.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            gratitudeContainer.appendChild(gratitude);

            setTimeout(function () {
                if (gratitude.parentNode) {
                    gratitude.parentNode.removeChild(gratitude);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openThankYouLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openThankYouLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (thankyouDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});