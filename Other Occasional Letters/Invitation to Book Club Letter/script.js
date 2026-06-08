document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const bookclubDocument = document.getElementById('bookclubDocument');
    const pageContainer = document.getElementById('pageContainer');

    let isOpened = false;

    function openBookClubLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createPageBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            bookclubDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createPageBurst();
        }, 950);
    }

    function createPageBurst() {
        for (let i = 0; i < 42; i++) {
            const page = document.createElement('div');

            page.className = 'floating-page';
            page.style.left = Math.random() * 100 + '%';
            page.style.animationDuration = (4 + Math.random() * 2.8) + 's';
            page.style.animationDelay = Math.random() * 0.7 + 's';
            page.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
            page.style.opacity = 0.65 + Math.random() * 0.35;

            pageContainer.appendChild(page);

            setTimeout(function () {
                if (page.parentNode) {
                    page.parentNode.removeChild(page);
                }
            }, 7200);
        }
    }

    envelope.addEventListener('click', openBookClubLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openBookClubLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (bookclubDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});