document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const charityDocument = document.getElementById('charityDocument');
    const blessingContainer = document.getElementById('blessingContainer');

    let isOpened = false;

    function openCharityLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createBlessingEffects();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            charityDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createBlessingEffects();
        }, 950);
    }

    function createBlessingEffects() {
        const icons = ['💚', '💛', '🤝', '🌿', '✨', '🕊️', '🙏'];

        for (let i = 0; i < 60; i++) {
            const blessing = document.createElement('div');
            blessing.className = 'blessing';
            blessing.textContent = icons[Math.floor(Math.random() * icons.length)];
            blessing.style.left = Math.random() * 100 + '%';
            blessing.style.animationDuration = (3.5 + Math.random() * 2.5) + 's';
            blessing.style.animationDelay = Math.random() * 0.7 + 's';
            blessing.style.fontSize = (14 + Math.random() * 10) + 'px';

            blessingContainer.appendChild(blessing);

            setTimeout(function () {
                if (blessing.parentNode) {
                    blessing.parentNode.removeChild(blessing);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openCharityLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openCharityLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (charityDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});