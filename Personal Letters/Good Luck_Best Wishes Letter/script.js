// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const goodluckCard = document.getElementById('goodluckCard');
const charmsContainer = document.getElementById('charmsContainer');

// Event Listeners
envelope.addEventListener('click', openGoodLuckLetter);

/**
 * Opens the good luck letter with encouraging envelope animation
 */
function openGoodLuckLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        goodluckCard.classList.add('show');
        createLuckyCharms();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates floating lucky charms effect
 */
function createLuckyCharms() {
    const charms = ['🍀', '⭐', '🌟', '✨', '🎯', '🏆', '💎'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const charm = document.createElement('div');
            charm.className = 'lucky-charm';
            charm.style.left = Math.random() * 100 + '%';
            charm.textContent = charms[Math.floor(Math.random() * charms.length)];
            charm.style.animationDelay = Math.random() * 2 + 's';
            charm.style.animationDuration = (4 + Math.random() * 2) + 's';
            charm.style.fontSize = (16 + Math.random() * 6) + 'px';
            charmsContainer.appendChild(charm);

            setTimeout(() => {
                if (charm.parentNode) {
                    charm.parentNode.removeChild(charm);
                }
            }, 6000);
        }, i * 130);
    }
}

/**
 * Clears all lucky charms
 */
function clearCharms() {
    charmsContainer.innerHTML = '';
}

/**
 * Handles response to the good luck letter with supportive feedback
 */
function handleResponse(response) {
    const readyButton = document.querySelector('.ready-button');
    const nervousButton = document.querySelector('.nervous-button');

    if (response === 'ready') {
        readyButton.style.background = 'linear-gradient(135deg, #00b894, #00a085)';
        readyButton.textContent = 'You\'re Going to Crush It! 🚀';
        readyButton.style.transform = 'scale(1.1)';
        nervousButton.style.opacity = '0.5';

        // Create confidence charms
        createConfidenceCharms();

        setTimeout(() => {
            readyButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        nervousButton.style.background = 'linear-gradient(135deg, #6c5ce7, #5f3dc4)';
        nervousButton.textContent = 'That\'s Normal, You\'ll Do Great! 🤗';
        readyButton.style.opacity = '0.5';

        // Create encouragement charms
        createEncouragementCharms();
    }
}

/**
 * Creates confidence charms for ready response
 */
function createConfidenceCharms() {
    const confidenceCharms = ['💪', '🚀', '🏆', '⚡', '🔥'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const charm = document.createElement('div');
            charm.className = 'lucky-charm';
            charm.style.left = Math.random() * 100 + '%';
            charm.textContent = confidenceCharms[Math.floor(Math.random() * confidenceCharms.length)];
            charm.style.animationDuration = (3 + Math.random() * 2) + 's';
            charm.style.fontSize = (18 + Math.random() * 6) + 'px';
            charmsContainer.appendChild(charm);

            setTimeout(() => {
                if (charm.parentNode) {
                    charm.parentNode.removeChild(charm);
                }
            }, 5000);
        }, i * 50);
    }
}

/**
 * Creates encouragement charms for nervous response
 */
function createEncouragementCharms() {
    const encouragementCharms = ['🤗', '💙', '🌈', '☀️', '🌸'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const charm = document.createElement('div');
            charm.className = 'lucky-charm';
            charm.style.left = Math.random() * 100 + '%';
            charm.textContent = encouragementCharms[Math.floor(Math.random() * encouragementCharms.length)];
            charm.style.animationDuration = (4 + Math.random() * 2) + 's';
            charm.style.fontSize = (17 + Math.random() * 5) + 'px';
            charmsContainer.appendChild(charm);

            setTimeout(() => {
                if (charm.parentNode) {
                    charm.parentNode.removeChild(charm);
                }
            }, 6000);
        }, i * 70);
    }
}