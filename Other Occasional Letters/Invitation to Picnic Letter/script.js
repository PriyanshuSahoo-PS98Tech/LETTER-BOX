document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const picnicDocument = document.getElementById('picnicDocument');
    const leafBurstContainer = document.getElementById('leafBurstContainer');

    let isOpened = false;

    function openPicnicLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createLeafBurst();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            picnicDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createLeafBurst();
        }, 950);
    }

    function createLeafBurst() {
        const icons = ['🍃', '🌿', '🍀', '🌼', '🦋', '🌞', '🧺'];
        const sizes = ['16px', '18px', '20px', '22px', '24px'];

        for (let i = 0; i < 75; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf-burst';
            leaf.textContent = icons[Math.floor(Math.random() * icons.length)];
            leaf.style.left = Math.random() * 100 + '%';
            leaf.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
            leaf.style.animationDuration = (3 + Math.random() * 2.8) + 's';
            leaf.style.animationDelay = Math.random() * 0.7 + 's';

            leafBurstContainer.appendChild(leaf);

            setTimeout(function () {
                if (leaf.parentNode) {
                    leaf.parentNode.removeChild(leaf);
                }
            }, 6500);
        }
    }

    envelope.addEventListener('click', openPicnicLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openPicnicLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (picnicDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});