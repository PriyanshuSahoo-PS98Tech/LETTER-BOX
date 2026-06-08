// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const spiritualCard = document.getElementById('spiritualCard');
const divineContainer = document.getElementById('divineContainer');

// Event Listeners
envelope.addEventListener('click', openSpiritualLetter);

/**
 * Opens the spiritual letter with divine envelope animation
 */
function openSpiritualLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        spiritualCard.classList.add('show');
        createDivineEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates peaceful floating divine effects
 */
function createDivineEffects() {
    const divineIcons = ['✨', '🕊️', '🙏', '☮️', '🕉️', '🌟', '💫'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const divine = document.createElement('div');
            divine.className = 'divine-effect';
            divine.style.left = Math.random() * 100 + '%';
            divine.textContent = divineIcons[Math.floor(Math.random() * divineIcons.length)];
            divine.style.animationDelay = Math.random() * 2 + 's';
            divine.style.animationDuration = (3 + Math.random() * 2) + 's';
            divine.style.fontSize = (16 + Math.random() * 8) + 'px';
            divineContainer.appendChild(divine);

            setTimeout(() => {
                if (divine.parentNode) {
                    divine.parentNode.removeChild(divine);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all divine effects
 */
function clearDivine() {
    divineContainer.innerHTML = '';
}

/**
 * Handles response to the spiritual letter with sacred feedback
 */
function handleResponse(response) {
    const peaceButton = document.querySelector('.peace-button');
    const blessingButton = document.querySelector('.blessing-button');

    if (response === 'peace') {
        peaceButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        peaceButton.textContent = 'Soul at Peace! 🕊️';
        peaceButton.style.transform = 'scale(1.1)';
        blessingButton.style.opacity = '0.5';

        // Create peace effects
        createPeaceEffects();

        setTimeout(() => {
            peaceButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        blessingButton.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
        blessingButton.textContent = 'Divinely Guided! ✨';
        peaceButton.style.opacity = '0.5';

        // Create blessing effects
        createBlessingEffects();
    }
}

/**
 * Creates peace effects for inner peace response
 */
function createPeaceEffects() {
    const peaceIcons = ['🕊️', '☮️', '🌸', '🧘', '💚'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const peace = document.createElement('div');
            peace.className = 'divine-effect';
            peace.style.left = Math.random() * 100 + '%';
            peace.textContent = peaceIcons[Math.floor(Math.random() * peaceIcons.length)];
            peace.style.animationDuration = (2 + Math.random() * 2) + 's';
            peace.style.fontSize = (18 + Math.random() * 10) + 'px';
            divineContainer.appendChild(peace);

            setTimeout(() => {
                if (peace.parentNode) {
                    peace.parentNode.removeChild(peace);
                }
            }, 4000);
        }, i * 40);
    }
}

/**
 * Creates blessing effects for blessed response
 */
function createBlessingEffects() {
    const blessingIcons = ['🙏', '✨', '💫', '🌟', '👼'];

    for (let i = 0; i < 65; i++) {
        setTimeout(() => {
            const blessing = document.createElement('div');
            blessing.className = 'divine-effect';
            blessing.style.left = Math.random() * 100 + '%';
            blessing.textContent = blessingIcons[Math.floor(Math.random() * blessingIcons.length)];
            blessing.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            blessing.style.fontSize = (17 + Math.random() * 6) + 'px';
            divineContainer.appendChild(blessing);

            setTimeout(() => {
                if (blessing.parentNode) {
                    blessing.parentNode.removeChild(blessing);
                }
            }, 5500);
        }, i * 35);
    }
}