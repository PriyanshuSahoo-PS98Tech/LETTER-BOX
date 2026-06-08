// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const goalCard = document.getElementById('goalCard');
const ambitionsContainer = document.getElementById('ambitionsContainer');

// Event Listeners
envelope.addEventListener('click', openGoalLetter);

/**
 * Opens the goal letter with motivational envelope animation
 */
function openGoalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        goalCard.classList.add('show');
        createAmbitionEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates motivational floating ambition effects
 */
function createAmbitionEffects() {
    const ambitionIcons = ['🎯', '🏔️', '🚀', '⭐', '💪', '🌟', '🎖️'];

    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            const ambition = document.createElement('div');
            ambition.className = 'ambition-effect';
            ambition.style.left = Math.random() * 100 + '%';
            ambition.textContent = ambitionIcons[Math.floor(Math.random() * ambitionIcons.length)];
            ambition.style.animationDelay = Math.random() * 2 + 's';
            ambition.style.animationDuration = (3 + Math.random() * 2) + 's';
            ambition.style.fontSize = (16 + Math.random() * 8) + 'px';
            ambitionsContainer.appendChild(ambition);

            setTimeout(() => {
                if (ambition.parentNode) {
                    ambition.parentNode.removeChild(ambition);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all ambition effects
 */
function clearAmbitions() {
    ambitionsContainer.innerHTML = '';
}

/**
 * Handles response to the goal letter with motivational feedback
 */
function handleResponse(response) {
    const motivationButton = document.querySelector('.motivation-button');
    const commitmentButton = document.querySelector('.commitment-button');

    if (response === 'motivation') {
        motivationButton.style.background = 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
        motivationButton.textContent = 'Let\'s Do This! 🌟';
        motivationButton.style.transform = 'scale(1.1)';
        commitmentButton.style.opacity = '0.5';

        // Create success effects
        createSuccessEffects();

        setTimeout(() => {
            motivationButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        commitmentButton.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        commitmentButton.textContent = 'Unstoppable! 🔥';
        motivationButton.style.opacity = '0.5';

        // Create commitment effects
        createCommitmentEffects();
    }
}

/**
 * Creates success effects for motivation response
 */
function createSuccessEffects() {
    const successIcons = ['🚀', '🌟', '⭐', '💫', '✨'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const success = document.createElement('div');
            success.className = 'ambition-effect';
            success.style.left = Math.random() * 100 + '%';
            success.textContent = successIcons[Math.floor(Math.random() * successIcons.length)];
            success.style.animationDuration = (2 + Math.random() * 2) + 's';
            success.style.fontSize = (18 + Math.random() * 10) + 'px';
            ambitionsContainer.appendChild(success);

            setTimeout(() => {
                if (success.parentNode) {
                    success.parentNode.removeChild(success);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates commitment effects for commitment response
 */
function createCommitmentEffects() {
    const commitmentIcons = ['💪', '🔥', '🎯', '🏔️', '⚡'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const commitment = document.createElement('div');
            commitment.className = 'ambition-effect';
            commitment.style.left = Math.random() * 100 + '%';
            commitment.textContent = commitmentIcons[Math.floor(Math.random() * commitmentIcons.length)];
            commitment.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            commitment.style.fontSize = (17 + Math.random() * 6) + 'px';
            ambitionsContainer.appendChild(commitment);

            setTimeout(() => {
                if (commitment.parentNode) {
                    commitment.parentNode.removeChild(commitment);
                }
            }, 5500);
        }, i * 40);
    }
}