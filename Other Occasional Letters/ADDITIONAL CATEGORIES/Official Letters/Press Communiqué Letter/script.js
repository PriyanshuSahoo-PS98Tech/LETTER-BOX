document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const pressDocument = document.getElementById('pressDocument');
    const pressParticleContainer = document.getElementById('pressParticleContainer');

    let isOpened = false;

    function openPressCommunique() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createPressParticles();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            pressDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createPressParticles();
        }, 950);
    }

    function createPressParticles() {
        const colors = ['#1d4ed8', '#b91c1c', '#c9a227', '#0f172a', '#ffffff', '#dbeafe'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 76; i++) {
            const particle = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            particle.className = shape ? 'press-particle ' + shape : 'press-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (3 + Math.random() * 3) + 's';
            particle.style.animationDelay = Math.random() * 0.75 + 's';
            particle.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            pressParticleContainer.appendChild(particle);

            setTimeout(function () {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openPressCommunique);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openPressCommunique();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (pressDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});