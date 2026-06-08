// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const prayerCard = document.getElementById('prayerCard');
const spiritualContainer = document.getElementById('spiritualContainer');

// Event Listeners
envelope.addEventListener('click', openPrayerLetter);

/**
 * Opens the prayer letter with sacred envelope animation
 */
function openPrayerLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        prayerCard.classList.add('show');
        createSpiritualEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates peaceful floating spiritual effects
 */
function createSpiritualEffects() {
    const spiritualIcons = ['🙏', '✨', '🕊️', '🌟', '💫', '🤲', '🌙'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const spirit = document.createElement('div');
            spirit.className = 'spiritual-effect';
            spirit.style.left = Math.random() * 100 + '%';
            spirit.textContent = spiritualIcons[Math.floor(Math.random() * spiritualIcons.length)];
            spirit.style.animationDelay = Math.random() * 2 + 's';
            spirit.style.animationDuration = (3 + Math.random() * 2) + 's';
            spirit.style.fontSize = (16 + Math.random() * 8) + 'px';
            spiritualContainer.appendChild(spirit);

            setTimeout(() => {
                if (spirit.parentNode) {
                    spirit.parentNode.removeChild(spirit);
                }
            }, 5000);
        }, i * 120);
    }
}

/**
 * Clears all spiritual effects
 */
function clearSpiritual() {
    spiritualContainer.innerHTML = '';
}

/**
 * Handles response to the prayer letter with spiritual feedback
 */
function handleResponse(response) {
    const amenButton = document.querySelector('.amen-button');
    const blessButton = document.querySelector('.bless-button');

    if (response === 'amen') {
        amenButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        amenButton.textContent = 'Faith Strengthened! 🌟';
        amenButton.style.transform = 'scale(1.1)';
        blessButton.style.opacity = '0.5';

        // Create sacred effects
        createSacredEffects();

        setTimeout(() => {
            amenButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        blessButton.style.background = 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
        blessButton.textContent = 'Heart at Peace! 🕊️';
        amenButton.style.opacity = '0.5';

        // Create blessing effects
        createBlessingEffects();
    }
}

/**
 * Creates sacred effects for amen response
 */
function createSacredEffects() {
    const sacredIcons = ['🙏', '🌟', '✨', '🕊️', '💫'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const sacred = document.createElement('div');
            sacred.className = 'spiritual-effect';
            sacred.style.left = Math.random() * 100 + '%';
            sacred.textContent = sacredIcons[Math.floor(Math.random() * sacredIcons.length)];
            sacred.style.animationDuration = (2 + Math.random() * 2) + 's';
            sacred.style.fontSize = (18 + Math.random() * 10) + 'px';
            spiritualContainer.appendChild(sacred);

            setTimeout(() => {
                if (sacred.parentNode) {
                    sacred.parentNode.removeChild(sacred);
                }
            }, 4000);
        }, i * 35);
    }
}

/**
 * Creates blessing effects for blessed response
 */
function createBlessingEffects() {
    const blessingIcons = ['🕊️', '✨', '🌙', '🤲', '💫'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const blessing = document.createElement('div');
            blessing.className = 'spiritual-effect';
            blessing.style.left = Math.random() * 100 + '%';
            blessing.textContent = blessingIcons[Math.floor(Math.random() * blessingIcons.length)];
            blessing.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            blessing.style.fontSize = (17 + Math.random() * 6) + 'px';
            spiritualContainer.appendChild(blessing);

            setTimeout(() => {
                if (blessing.parentNode) {
                    blessing.parentNode.removeChild(blessing);
                }
            }, 5500);
        }, i * 45);
    }
}