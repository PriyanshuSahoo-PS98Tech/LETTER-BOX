// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const resolutionCard = document.getElementById('resolutionCard');
const determinationContainer = document.getElementById('determinationContainer');

// Event Listeners
envelope.addEventListener('click', openResolutionLetter);

/**
 * Opens the resolution letter with inspiring envelope animation
 */
function openResolutionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        resolutionCard.classList.add('show');
        createDeterminationEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates inspiring floating determination effects with varied movement
 */
function createDeterminationEffects() {
    const determinationIcons = ['🎯', '🌟', '🚀', '💪', '🌅', '⚡', '🔥'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const determination = document.createElement('div');
            determination.className = 'determination-effect';

            // Randomize starting position (from different sides)
            const startSide = Math.floor(Math.random() * 4);
            switch (startSide) {
                case 0: // from left
                    determination.style.left = '-20px';
                    determination.style.top = Math.random() * 100 + '%';
                    break;
                case 1: // from right
                    determination.style.left = '100%';
                    determination.style.top = Math.random() * 100 + '%';
                    break;
                case 2: // from top
                    determination.style.left = Math.random() * 100 + '%';
                    determination.style.top = '-20px';
                    break;
                default: // from bottom
                    determination.style.left = Math.random() * 100 + '%';
                    determination.style.top = '100%';
            }

            determination.textContent = determinationIcons[Math.floor(Math.random() * determinationIcons.length)];
            determination.style.animationDelay = Math.random() * 2 + 's';
            determination.style.animationDuration = (4 + Math.random() * 3) + 's';
            determination.style.fontSize = (16 + Math.random() * 8) + 'px';
            determinationContainer.appendChild(determination);

            setTimeout(() => {
                if (determination.parentNode) {
                    determination.parentNode.removeChild(determination);
                }
            }, 7000);
        }, i * 80);
    }
}

/**
 * Clears all determination effects
 */
function clearDetermination() {
    determinationContainer.innerHTML = '';
}

/**
 * Handles response to the resolution letter with motivational feedback
 */
function handleResponse(response) {
    const commitmentButton = document.querySelector('.commitment-button');
    const inspirationButton = document.querySelector('.inspiration-button');

    if (response === 'commitment') {
        commitmentButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        commitmentButton.textContent = 'Committed to Growth! 💪';
        commitmentButton.style.transform = 'scale(1.1)';
        inspirationButton.style.opacity = '0.5';

        // Create commitment effects
        createCommitmentEffects();

        setTimeout(() => {
            commitmentButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        inspirationButton.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        inspirationButton.textContent = 'Ready for Action! 🚀';
        commitmentButton.style.opacity = '0.5';

        // Create inspiration effects
        createInspirationEffects();
    }
}

/**
 * Creates commitment effects for resolution response with varied movement
 */
function createCommitmentEffects() {
    const commitmentIcons = ['💪', '🎯', '🔥', '⚡', '🌟'];

    for (let i = 0; i < 75; i++) {
        setTimeout(() => {
            const commitment = document.createElement('div');
            commitment.className = 'determination-effect';

            // Create spiral movement effect
            const angle = (i * 20) % 360;
            const radius = 50 + (i % 30);
            commitment.style.left = (50 + Math.cos(angle * Math.PI / 180) * radius) + '%';
            commitment.style.top = (50 + Math.sin(angle * Math.PI / 180) * radius) + '%';

            commitment.textContent = commitmentIcons[Math.floor(Math.random() * commitmentIcons.length)];
            commitment.style.animationDuration = (2 + Math.random() * 2) + 's';
            commitment.style.fontSize = (18 + Math.random() * 10) + 'px';
            determinationContainer.appendChild(commitment);

            setTimeout(() => {
                if (commitment.parentNode) {
                    commitment.parentNode.removeChild(commitment);
                }
            }, 4000);
        }, i * 25);
    }
}

/**
 * Creates inspiration effects for inspiration response with burst pattern
 */
function createInspirationEffects() {
    const inspirationIcons = ['🚀', '🌟', '⭐', '✨', '🌅'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const inspiration = document.createElement('div');
            inspiration.className = 'determination-effect';

            // Create burst pattern from center
            const angle = (i * 15) % 360;
            const distance = Math.random() * 40 + 10;
            inspiration.style.left = (50 + Math.cos(angle * Math.PI / 180) * distance) + '%';
            inspiration.style.top = (50 + Math.sin(angle * Math.PI / 180) * distance) + '%';

            inspiration.textContent = inspirationIcons[Math.floor(Math.random() * inspirationIcons.length)];
            inspiration.style.animationDuration = (3 + Math.random() * 2) + 's';
            inspiration.style.fontSize = (17 + Math.random() * 6) + 'px';
            determinationContainer.appendChild(inspiration);

            setTimeout(() => {
                if (inspiration.parentNode) {
                    inspiration.parentNode.removeChild(inspiration);
                }
            }, 5000);
        }, i * 20);
    }
}