// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const inspirationCard = document.getElementById('inspirationCard');
const inspirationContainer = document.getElementById('inspirationContainer');

// Event Listeners
envelope.addEventListener('click', openInspirationLetter);

/**
 * Opens the inspiration letter with cosmic envelope animation
 */
function openInspirationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        inspirationCard.classList.add('show');
        createInspirationEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates cosmic floating inspiration effects
 */
function createInspirationEffects() {
    const inspirationIcons = ['✨', '🌟', '🚀', '💫', '⭐', '🌠', '💎'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const inspiration = document.createElement('div');
            inspiration.className = 'inspiration-effect';
            inspiration.style.left = Math.random() * 100 + '%';
            inspiration.textContent = inspirationIcons[Math.floor(Math.random() * inspirationIcons.length)];
            inspiration.style.animationDelay = Math.random() * 2 + 's';
            inspiration.style.animationDuration = (5 + Math.random() * 2) + 's';
            inspiration.style.fontSize = (16 + Math.random() * 8) + 'px';
            inspirationContainer.appendChild(inspiration);

            setTimeout(() => {
                if (inspiration.parentNode) {
                    inspiration.parentNode.removeChild(inspiration);
                }
            }, 7000);
        }, i * 120);
    }
}

/**
 * Clears all inspiration effects
 */
function clearInspiration() {
    inspirationContainer.innerHTML = '';
}

/**
 * Handles response to the inspiration letter with motivational feedback
 */
function handleResponse(response) {
    const motivationButton = document.querySelector('.motivation-button');
    const dreamsButton = document.querySelector('.dreams-button');

    if (response === 'motivation') {
        motivationButton.style.background = 'linear-gradient(135deg, #4facfe, #00d4ff)';
        motivationButton.textContent = 'Unstoppable Force! 🌟';
        motivationButton.style.transform = 'scale(1.1)';
        dreamsButton.style.opacity = '0.5';

        // Create cosmic burst effects
        createCosmicBurstEffects();

        setTimeout(() => {
            motivationButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        dreamsButton.style.background = 'linear-gradient(135deg, #764ba2, #667eea)';
        dreamsButton.textContent = 'Dream Achiever! 🌠';
        motivationButton.style.opacity = '0.5';

        // Create stellar dream effects
        createStellarDreamEffects();
    }
}

/**
 * Creates cosmic burst effects for motivation response
 */
function createCosmicBurstEffects() {
    const cosmicIcons = ['🚀', '⚡', '🌟', '💫', '✨'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const cosmic = document.createElement('div');
            cosmic.className = 'inspiration-effect';
            cosmic.style.left = Math.random() * 100 + '%';
            cosmic.textContent = cosmicIcons[Math.floor(Math.random() * cosmicIcons.length)];
            cosmic.style.animationDuration = (3 + Math.random() * 2) + 's';
            cosmic.style.fontSize = (18 + Math.random() * 12) + 'px';
            inspirationContainer.appendChild(cosmic);

            setTimeout(() => {
                if (cosmic.parentNode) {
                    cosmic.parentNode.removeChild(cosmic);
                }
            }, 5000);
        }, i * 25);
    }
}

/**
 * Creates stellar dream effects for dreams response
 */
function createStellarDreamEffects() {
    const stellarIcons = ['🌠', '💎', '👑', '✨', '⭐'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const stellar = document.createElement('div');
            stellar.className = 'inspiration-effect';
            stellar.style.left = Math.random() * 100 + '%';
            stellar.textContent = stellarIcons[Math.floor(Math.random() * stellarIcons.length)];
            stellar.style.animationDuration = (4.5 + Math.random() * 2) + 's';
            stellar.style.fontSize = (17 + Math.random() * 8) + 'px';
            inspirationContainer.appendChild(stellar);

            setTimeout(() => {
                if (stellar.parentNode) {
                    stellar.parentNode.removeChild(stellar);
                }
            }, 6500);
        }, i * 50);
    }
}