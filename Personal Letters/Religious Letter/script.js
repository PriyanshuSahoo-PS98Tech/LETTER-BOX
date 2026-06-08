// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const religiousCard = document.getElementById('religiousCard');
const spiritualContainer = document.getElementById('spiritualContainer');

// Event Listeners
envelope.addEventListener('click', openReligiousLetter);

/**
 * Opens the religious letter with spiritual envelope animation
 */
function openReligiousLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        religiousCard.classList.add('show');
        createSpiritualEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates peaceful floating spiritual effects
 */
function createSpiritualEffects() {
    const spiritualIcons = ['✝️', '🕊️', '🙏', '⭐', '🌟', '✨', '😇'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const spiritual = document.createElement('div');
            spiritual.className = 'spiritual-effect';
            spiritual.style.left = Math.random() * 100 + '%';
            spiritual.textContent = spiritualIcons[Math.floor(Math.random() * spiritualIcons.length)];
            spiritual.style.animationDelay = Math.random() * 2 + 's';
            spiritual.style.animationDuration = (3 + Math.random() * 2) + 's';
            spiritual.style.fontSize = (16 + Math.random() * 8) + 'px';
            spiritualContainer.appendChild(spiritual);

            setTimeout(() => {
                if (spiritual.parentNode) {
                    spiritual.parentNode.removeChild(spiritual);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all spiritual effects
 */
function clearSpiritual() {
    spiritualContainer.innerHTML = '';
}

/**
 * Handles response to the religious letter with spiritual feedback
 */
function handleResponse(response) {
    const blessingButton = document.querySelector('.blessing-button');
    const prayerButton = document.querySelector('.prayer-button');

    if (response === 'blessing') {
        blessingButton.style.background = 'linear-gradient(135deg, #dc2626, #b91c1c)';
        blessingButton.textContent = 'God is Good! 🙌';
        blessingButton.style.transform = 'scale(1.1)';
        prayerButton.style.opacity = '0.5';

        // Create divine effects
        createDivineEffects();

        setTimeout(() => {
            blessingButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        prayerButton.style.background = 'linear-gradient(135deg, #059669, #047857)';
        prayerButton.textContent = 'Amen & Amen! 🙏';
        blessingButton.style.opacity = '0.5';

        // Create prayer effects
        createPrayerEffects();
    }
}

/**
 * Creates divine effects for blessing response
 */
function createDivineEffects() {
    const divineIcons = ['🙌', '✨', '⭐', '🌟', '😇'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const divine = document.createElement('div');
            divine.className = 'spiritual-effect';
            divine.style.left = Math.random() * 100 + '%';
            divine.textContent = divineIcons[Math.floor(Math.random() * divineIcons.length)];
            divine.style.animationDuration = (2 + Math.random() * 2) + 's';
            divine.style.fontSize = (18 + Math.random() * 10) + 'px';
            spiritualContainer.appendChild(divine);

            setTimeout(() => {
                if (divine.parentNode) {
                    divine.parentNode.removeChild(divine);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates prayer effects for prayer response
 */
function createPrayerEffects() {
    const prayerIcons = ['🙏', '✝️', '🕊️', '💒', '📿'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const prayer = document.createElement('div');
            prayer.className = 'spiritual-effect';
            prayer.style.left = Math.random() * 100 + '%';
            prayer.textContent = prayerIcons[Math.floor(Math.random() * prayerIcons.length)];
            prayer.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            prayer.style.fontSize = (17 + Math.random() * 6) + 'px';
            spiritualContainer.appendChild(prayer);

            setTimeout(() => {
                if (prayer.parentNode) {
                    prayer.parentNode.removeChild(prayer);
                }
            }, 5500);
        }, i * 50);
    }
}