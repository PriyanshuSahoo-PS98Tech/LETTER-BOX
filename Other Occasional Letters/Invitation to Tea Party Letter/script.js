document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const teaPartyDocument = document.getElementById('teaPartyDocument');
    const petalContainer = document.getElementById('petalContainer');

    let isOpened = false;

    function openTeaPartyLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createPetalBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            teaPartyDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createPetalBurst();
        }, 950);
    }

    function createPetalBurst() {
        const petals = ['🍃', '🌿', '🌸', '✨', '☕', '🍂'];

        for (let i = 0; i < 55; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (3.5 + Math.random() * 3) + 's';
            petal.style.animationDelay = Math.random() * 0.8 + 's';
            petal.style.fontSize = (14 + Math.random() * 10) + 'px';

            petalContainer.appendChild(petal);

            setTimeout(function () {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openTeaPartyLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openTeaPartyLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (teaPartyDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});