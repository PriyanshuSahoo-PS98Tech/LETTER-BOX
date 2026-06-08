document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const notificationDocument = document.getElementById('notificationDocument');
    const noticeParticleContainer = document.getElementById('noticeParticleContainer');

    let isOpened = false;

    function openNotificationLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createNoticeParticles();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            notificationDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createNoticeParticles();
        }, 950);
    }

    function createNoticeParticles() {
        const colors = ['#38bdf8', '#2563eb', '#f59e0b', '#facc15', '#ffffff', '#dbeafe'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 75; i++) {
            const particle = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            particle.className = shape ? 'notice-particle ' + shape : 'notice-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (3 + Math.random() * 3) + 's';
            particle.style.animationDelay = Math.random() * 0.75 + 's';
            particle.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            noticeParticleContainer.appendChild(particle);

            setTimeout(function () {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openNotificationLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openNotificationLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (notificationDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});