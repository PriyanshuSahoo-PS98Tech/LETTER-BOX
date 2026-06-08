document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const endorsementDocument = document.getElementById('endorsementDocument');
    const approvalParticleContainer = document.getElementById('approvalParticleContainer');

    let isOpened = false;

    function openEndorsementLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createApprovalParticles();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            endorsementDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createApprovalParticles();
        }, 950);
    }

    function createApprovalParticles() {
        const colors = ['#10b981', '#047857', '#d4a017', '#facc15', '#1d4ed8', '#ffffff'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 76; i++) {
            const particle = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            particle.className = shape ? 'approval-particle ' + shape : 'approval-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (3 + Math.random() * 3) + 's';
            particle.style.animationDelay = Math.random() * 0.75 + 's';
            particle.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            approvalParticleContainer.appendChild(particle);

            setTimeout(function () {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openEndorsementLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openEndorsementLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (endorsementDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});