document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const resolutionDocument = document.getElementById('resolutionDocument');
    const resolutionParticleContainer = document.getElementById('resolutionParticleContainer');

    let isOpened = false;

    function openResolutionLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createResolutionParticles();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            resolutionDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createResolutionParticles();
        }, 950);
    }

    function createResolutionParticles() {
        const colors = ['#c9a227', '#facc15', '#7f1d1d', '#334155', '#ffffff', '#e2e8f0'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 76; i++) {
            const particle = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            particle.className = shape ? 'resolution-particle ' + shape : 'resolution-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (3 + Math.random() * 3) + 's';
            particle.style.animationDelay = Math.random() * 0.75 + 's';
            particle.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            resolutionParticleContainer.appendChild(particle);

            setTimeout(function () {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openResolutionLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openResolutionLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (resolutionDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});