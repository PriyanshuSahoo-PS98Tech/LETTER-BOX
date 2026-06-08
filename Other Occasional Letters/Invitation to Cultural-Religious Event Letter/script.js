document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const invitationDocument = document.getElementById('invitationDocument');
    const blessingContainer = document.getElementById('blessingContainer');

    let isOpened = false;

    function openInvitationLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createBlessingFall();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            invitationDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createBlessingFall();
        }, 950);
    }

    function createBlessingFall() {
        const icons = ['🪔', '🌸', '🌺', '✨', '🙏', '💫'];
        const colors = ['#facc15', '#f97316', '#be123c', '#ffffff', '#fde68a'];

        for (let i = 0; i < 60; i++) {
            const blessing = document.createElement('div');
            blessing.className = 'blessing';
            blessing.textContent = icons[Math.floor(Math.random() * icons.length)];
            blessing.style.left = Math.random() * 100 + '%';
            blessing.style.color = colors[Math.floor(Math.random() * colors.length)];
            blessing.style.animationDuration = (3.5 + Math.random() * 2.8) + 's';
            blessing.style.animationDelay = Math.random() * 0.7 + 's';
            blessing.style.fontSize = (16 + Math.random() * 12) + 'px';

            blessingContainer.appendChild(blessing);

            setTimeout(function () {
                if (blessing.parentNode) {
                    blessing.parentNode.removeChild(blessing);
                }
            }, 7000);
        }
    }

    envelope.addEventListener('click', openInvitationLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openInvitationLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (invitationDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});