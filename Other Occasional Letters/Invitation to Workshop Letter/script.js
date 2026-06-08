document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const workshopDocument = document.getElementById('workshopDocument');
    const learningEffectsContainer = document.getElementById('learningEffectsContainer');

    let isOpened = false;

    function openWorkshopLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            createLearningEffects();
        }, 300);

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            workshopDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
            createLearningEffects();
        }, 950);
    }

    function createLearningEffects() {
        const icons = ['🎓', '💡', '📘', '🧠', '🛠️', '✨', '📌', '✅'];

        for (let i = 0; i < 55; i++) {
            const effect = document.createElement('div');
            effect.className = 'learning-effect';
            effect.textContent = icons[Math.floor(Math.random() * icons.length)];
            effect.style.left = Math.random() * 100 + '%';
            effect.style.animationDuration = (3 + Math.random() * 2.5) + 's';
            effect.style.animationDelay = Math.random() * 0.7 + 's';
            effect.style.fontSize = (14 + Math.random() * 10) + 'px';

            learningEffectsContainer.appendChild(effect);

            setTimeout(function () {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 6200);
        }
    }

    envelope.addEventListener('click', openWorkshopLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openWorkshopLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (workshopDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});