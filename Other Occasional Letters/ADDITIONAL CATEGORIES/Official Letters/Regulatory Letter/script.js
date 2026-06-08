document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const regDocument = document.getElementById('regDocument');
    const regParticleContainer = document.getElementById('regParticleContainer');

    let isOpened = false;

    function openRegulatoryLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createRegParticles();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            regDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createRegParticles();
        }, 950);
    }

    function createRegParticles() {
        const colors = ['#0f766e', '#14b8a6', '#1e40af', '#d97706', '#ffffff', '#ccfbf1'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 72; i++) {
            const particle = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            particle.className = shape ? 'reg-particle ' + shape : 'reg-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (3 + Math.random() * 3) + 's';
            particle.style.animationDelay = Math.random() * 0.75 + 's';
            particle.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            regParticleContainer.appendChild(particle);

            setTimeout(function () {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openRegulatoryLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openRegulatoryLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (regDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});