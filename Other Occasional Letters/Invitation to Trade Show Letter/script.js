document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const tradeShowDocument = document.getElementById('tradeShowDocument');
    const expoBurstContainer = document.getElementById('expoBurstContainer');

    let isOpened = false;

    function openTradeShowLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createExpoBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            tradeShowDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createExpoBurst();
        }, 950);
    }

    function createExpoBurst() {
        const colors = ['#06b6d4', '#2563eb', '#14b8a6', '#f59e0b', '#ffffff', '#67e8f9'];
        const shapes = ['', 'round', 'line'];

        for (let i = 0; i < 70; i++) {
            const burst = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];

            burst.className = shape ? 'expo-burst ' + shape : 'expo-burst';
            burst.style.left = Math.random() * 100 + '%';
            burst.style.background = colors[Math.floor(Math.random() * colors.length)];
            burst.style.animationDuration = (3 + Math.random() * 2.5) + 's';
            burst.style.animationDelay = Math.random() * 0.6 + 's';
            burst.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

            expoBurstContainer.appendChild(burst);

            setTimeout(function () {
                if (burst.parentNode) {
                    burst.parentNode.removeChild(burst);
                }
            }, 6200);
        }
    }

    envelope.addEventListener('click', openTradeShowLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openTradeShowLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (tradeShowDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});