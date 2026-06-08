document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const postponeDocument = document.getElementById('postponeDocument');
    const noticeContainer = document.getElementById('noticeContainer');

    let isOpened = false;

    function openPostponeLetter() {
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
            postponeDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createNoticeParticles();
        }, 950);
    }

    function createNoticeParticles() {
        const colors = ['#facc15', '#f59e0b', '#2563eb', '#1e3a8a', '#ffffff', '#dbeafe'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 70; i++) {
            const notice = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            notice.className = shape ? 'notice-piece ' + shape : 'notice-piece';
            notice.style.left = Math.random() * 100 + '%';
            notice.style.background = colors[Math.floor(Math.random() * colors.length)];
            notice.style.animationDuration = (3 + Math.random() * 3) + 's';
            notice.style.animationDelay = Math.random() * 0.75 + 's';
            notice.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            noticeContainer.appendChild(notice);

            setTimeout(function () {
                if (notice.parentNode) {
                    notice.parentNode.removeChild(notice);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openPostponeLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openPostponeLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (postponeDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});