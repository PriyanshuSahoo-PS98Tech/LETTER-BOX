document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const networkingDocument = document.getElementById('networkingDocument');
    const connectionContainer = document.getElementById('connectionContainer');

    let isOpened = false;

    function openNetworkingLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createConnectionParticles();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            networkingDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createConnectionParticles();
        }, 950);
    }

    function createConnectionParticles() {
        const colors = ['#67e8f9', '#2563eb', '#10b981', '#ffffff', '#a7f3d0'];

        for (let i = 0; i < 70; i++) {
            const particle = document.createElement('div');
            particle.className = 'connection-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (3 + Math.random() * 2.4) + 's';
            particle.style.animationDelay = Math.random() * 0.6 + 's';

            connectionContainer.appendChild(particle);

            setTimeout(function () {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }
    }

    envelope.addEventListener('click', openNetworkingLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openNetworkingLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (networkingDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});