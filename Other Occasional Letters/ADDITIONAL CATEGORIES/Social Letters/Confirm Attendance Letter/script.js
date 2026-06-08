document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const confirmationDocument = document.getElementById('confirmationDocument');
    const checkContainer = document.getElementById('checkContainer');

    let isOpened = false;

    function openConfirmationLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createConfirmationBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            confirmationDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createConfirmationBurst();
        }, 950);
    }

    function createConfirmationBurst() {
        const colors = ['#99f6e4', '#14b8a6', '#059669', '#2563eb', '#facc15', '#ffffff'];
        const shapes = ['', 'round', 'mark'];

        for (let i = 0; i < 75; i++) {
            const check = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            check.className = shape ? 'check-burst ' + shape : 'check-burst';
            check.style.left = Math.random() * 100 + '%';
            check.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            check.style.animationDelay = Math.random() * 0.65 + 's';
            check.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            if (shape === 'mark') {
                check.textContent = '✓';
            } else {
                check.style.background = colors[Math.floor(Math.random() * colors.length)];
            }

            checkContainer.appendChild(check);

            setTimeout(function () {
                if (check.parentNode) {
                    check.parentNode.removeChild(check);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openConfirmationLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openConfirmationLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (confirmationDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});