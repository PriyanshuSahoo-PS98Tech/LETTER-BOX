// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const comfortCard = document.getElementById('comfortCard');
const comfortEffectsContainer = document.getElementById('comfortEffectsContainer');

// Event Listeners
envelope.addEventListener('click', openComfortLetter);

/**
 * Opens the comfort letter with gentle envelope animation
 */
function openComfortLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        comfortCard.classList.add('show');
        createComfortEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates soothing floating comfort effects
 */
function createComfortEffects() {
    const comfortIcons = ['🤗', '🌿', '☁️', '💚', '🕊️', '🌸', '✨'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const comfort = document.createElement('div');
            comfort.className = 'comfort-effect';
            comfort.style.left = Math.random() * 100 + '%';
            comfort.textContent = comfortIcons[Math.floor(Math.random() * comfortIcons.length)];
            comfort.style.animationDelay = Math.random() * 3 + 's';
            comfort.style.animationDuration = (4 + Math.random() * 3) + 's';
            comfort.style.fontSize = (14 + Math.random() * 8) + 'px';
            comfortEffectsContainer.appendChild(comfort);

            setTimeout(() => {
                if (comfort.parentNode) {
                    comfort.parentNode.removeChild(comfort);
                }
            }, 7000);
        }, i * 150);
    }
}

/**
 * Clears all comfort effects
 */
function clearComfortEffects() {
    comfortEffectsContainer.innerHTML = '';
}

/**
 * Handles response to the comfort letter with gentle feedback
 */
function handleResponse(response) {
    const comfortButton = document.querySelector('.comfort-button');
    const healingButton = document.querySelector('.healing-button');

    if (response === 'comfort') {
        comfortButton.style.background = 'linear-gradient(135deg, #a8e6cf, #78c6a3)';
        comfortButton.textContent = 'Feeling Better 🌿';
        comfortButton.style.transform = 'scale(1.1)';
        healingButton.style.opacity = '0.5';

        // Create gentle comfort effects
        createGentleEffects();

        setTimeout(() => {
            comfortButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        healingButton.style.background = 'linear-gradient(135deg, #b8e6d2, #88d8c0)';
        healingButton.textContent = 'Inner Calm 🕊️';
        comfortButton.style.opacity = '0.5';

        // Create peaceful effects
        createPeacefulEffects();
    }
}

/**
 * Creates gentle effects for comfort response
 */
function createGentleEffects() {
    const gentleIcons = ['🌿', '🤗', '💚', '🌸', '✨'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const gentle = document.createElement('div');
            gentle.className = 'comfort-effect';
            gentle.style.left = Math.random() * 100 + '%';
            gentle.textContent = gentleIcons[Math.floor(Math.random() * gentleIcons.length)];
            gentle.style.animationDuration = (3 + Math.random() * 2) + 's';
            gentle.style.fontSize = (16 + Math.random() * 8) + 'px';
            comfortEffectsContainer.appendChild(gentle);

            setTimeout(() => {
                if (gentle.parentNode) {
                    gentle.parentNode.removeChild(gentle);
                }
            }, 5000);
        }, i * 40);
    }
}

/**
 * Creates peaceful effects for healing response
 */
function createPeacefulEffects() {
    const peacefulIcons = ['🕊️', '☁️', '🌙', '⭐', '💫'];

    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            const peaceful = document.createElement('div');
            peaceful.className = 'comfort-effect';
            peaceful.style.left = Math.random() * 100 + '%';
            peaceful.textContent = peacefulIcons[Math.floor(Math.random() * peacefulIcons.length)];
            peaceful.style.animationDuration = (5 + Math.random() * 2) + 's';
            peaceful.style.fontSize = (15 + Math.random() * 6) + 'px';
            comfortEffectsContainer.appendChild(peaceful);

            setTimeout(() => {
                if (peaceful.parentNode) {
                    peaceful.parentNode.removeChild(peaceful);
                }
            }, 7000);
        }, i * 60);
    }
}

/**
 * Creates additional cloud animations for peaceful ambiance
 */
function createExtraClouds() {
    const cloudsContainer = document.querySelector('.comfort-clouds');
    const cloud = document.createElement('div');
    cloud.className = 'cloud cloud1';
    cloud.style.top = Math.random() * 80 + '%';
    cloud.style.animationDelay = '0s';
    cloudsContainer.appendChild(cloud);

    setTimeout(() => {
        if (cloud.parentNode) {
            cloud.parentNode.removeChild(cloud);
        }
    }, 20000);
}

// Add periodic cloud generation for ambient effect
setInterval(createExtraClouds, 8000);