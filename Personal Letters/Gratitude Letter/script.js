// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const gratitudeCard = document.getElementById('gratitudeCard');
const gratitudeEffectsContainer = document.getElementById('gratitudeEffectsContainer');

// Event Listeners
envelope.addEventListener('click', openGratitudeLetter);

/**
 * Opens the gratitude letter with graceful envelope animation
 */
function openGratitudeLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 800);

    setTimeout(() => {
        gratitudeCard.classList.add('show');
        createGratitudeEffects();
        document.body.style.overflow = 'hidden';
    }, 1000);
}

/**
 * Creates graceful floating gratitude effects
 */
function createGratitudeEffects() {
    const gratitudeIcons = ['🙏', '🌻', '💛', '🌟', '💝', '🌺', '✨'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const gratitude = document.createElement('div');
            gratitude.className = 'gratitude-effect';
            gratitude.style.left = Math.random() * 100 + '%';
            gratitude.textContent = gratitudeIcons[Math.floor(Math.random() * gratitudeIcons.length)];
            gratitude.style.animationDelay = Math.random() * 3 + 's';
            gratitude.style.animationDuration = (4 + Math.random() * 2) + 's';
            gratitude.style.fontSize = (16 + Math.random() * 8) + 'px';
            gratitudeEffectsContainer.appendChild(gratitude);

            setTimeout(() => {
                if (gratitude.parentNode) {
                    gratitude.parentNode.removeChild(gratitude);
                }
            }, 6000);
        }, i * 150);
    }
}

/**
 * Clears all gratitude effects
 */
function clearGratitudeEffects() {
    gratitudeEffectsContainer.innerHTML = '';
}

/**
 * Handles response to the gratitude letter with graceful feedback
 */
function handleResponse(response) {
    const gratefulButton = document.querySelector('.grateful-button');
    const blessedButton = document.querySelector('.blessed-button');

    if (response === 'grateful') {
        gratefulButton.style.background = 'linear-gradient(135deg, #ffab40, #ff8f00)';
        gratefulButton.textContent = 'My Heart is Full! 💖';
        gratefulButton.style.transform = 'scale(1.1)';
        blessedButton.style.opacity = '0.5';

        // Create heartfelt effects
        createHeartfeltEffects();

        setTimeout(() => {
            gratefulButton.style.transform = 'scale(1)';
        }, 400);
    } else {
        blessedButton.style.background = 'linear-gradient(135deg, #81c784, #66bb6a)';
        blessedButton.textContent = 'Truly Grateful! 🙏';
        gratefulButton.style.opacity = '0.5';

        // Create blessing effects
        createBlessingEffects();
    }
}

/**
 * Creates heartfelt effects for grateful response
 */
function createHeartfeltEffects() {
    const heartfeltIcons = ['💖', '💝', '🌺', '✨', '💛'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const heartfelt = document.createElement('div');
            heartfelt.className = 'gratitude-effect';
            heartfelt.style.left = Math.random() * 100 + '%';
            heartfelt.textContent = heartfeltIcons[Math.floor(Math.random() * heartfeltIcons.length)];
            heartfelt.style.animationDuration = (3 + Math.random() * 2) + 's';
            heartfelt.style.fontSize = (18 + Math.random() * 10) + 'px';
            gratitudeEffectsContainer.appendChild(heartfelt);

            setTimeout(() => {
                if (heartfelt.parentNode) {
                    heartfelt.parentNode.removeChild(heartfelt);
                }
            }, 5000);
        }, i * 40);
    }
}

/**
 * Creates blessing effects for blessed response
 */
function createBlessingEffects() {
    const blessingIcons = ['🙏', '✨', '🌟', '💫', '🕊️'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const blessing = document.createElement('div');
            blessing.className = 'gratitude-effect';
            blessing.style.left = Math.random() * 100 + '%';
            blessing.textContent = blessingIcons[Math.floor(Math.random() * blessingIcons.length)];
            blessing.style.animationDuration = (4 + Math.random() * 2) + 's';
            blessing.style.fontSize = (17 + Math.random() * 6) + 'px';
            gratitudeEffectsContainer.appendChild(blessing);

            setTimeout(() => {
                if (blessing.parentNode) {
                    blessing.parentNode.removeChild(blessing);
                }
            }, 6000);
        }, i * 50);
    }
}