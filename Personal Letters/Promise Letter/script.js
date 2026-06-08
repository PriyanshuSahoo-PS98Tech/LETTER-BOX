// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const promiseCard = document.getElementById('promiseCard');
const promisesContainer = document.getElementById('promisesContainer');

// Event Listeners
envelope.addEventListener('click', openPromiseLetter);

/**
 * Opens the promise letter with commitment envelope animation
 */
function openPromiseLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        promiseCard.classList.add('show');
        createPromiseEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates commitment floating promise effects
 */
function createPromiseEffects() {
    const promiseIcons = ['🤝', '💍', '🤞', '🌟', '⭐', '💫', '✨'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const promise = document.createElement('div');
            promise.className = 'promise-effect';
            promise.style.left = Math.random() * 100 + '%';
            promise.textContent = promiseIcons[Math.floor(Math.random() * promiseIcons.length)];
            promise.style.animationDelay = Math.random() * 2 + 's';
            promise.style.animationDuration = (4 + Math.random() * 2) + 's';
            promise.style.fontSize = (16 + Math.random() * 8) + 'px';
            promisesContainer.appendChild(promise);

            setTimeout(() => {
                if (promise.parentNode) {
                    promise.parentNode.removeChild(promise);
                }
            }, 6000);
        }, i * 120);
    }
}

/**
 * Clears all promise effects
 */
function clearPromises() {
    promisesContainer.innerHTML = '';
}

/**
 * Handles response to the promise letter with commitment feedback
 */
function handleResponse(response) {
    const trustButton = document.querySelector('.trust-button');
    const commitmentButton = document.querySelector('.commitment-button');

    if (response === 'trust') {
        trustButton.style.background = 'linear-gradient(135deg, #4169e1, #1e3a8a)';
        trustButton.textContent = 'Trusted Completely! 🌟';
        trustButton.style.transform = 'scale(1.1)';
        commitmentButton.style.opacity = '0.5';

        // Create trust effects
        createTrustEffects();

        setTimeout(() => {
            trustButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        commitmentButton.style.background = 'linear-gradient(135deg, #6a5acd, #4b0082)';
        commitmentButton.textContent = 'Bound in Trust! 💎';
        trustButton.style.opacity = '0.5';

        // Create commitment effects
        createCommitmentEffects();
    }
}

/**
 * Creates trust effects for trust response
 */
function createTrustEffects() {
    const trustIcons = ['🤝', '🌟', '⭐', '💫', '✨'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const trust = document.createElement('div');
            trust.className = 'promise-effect';
            trust.style.left = Math.random() * 100 + '%';
            trust.textContent = trustIcons[Math.floor(Math.random() * trustIcons.length)];
            trust.style.animationDuration = (3 + Math.random() * 2) + 's';
            trust.style.fontSize = (18 + Math.random() * 10) + 'px';
            promisesContainer.appendChild(trust);

            setTimeout(() => {
                if (trust.parentNode) {
                    trust.parentNode.removeChild(trust);
                }
            }, 5000);
        }, i * 40);
    }
}

/**
 * Creates commitment effects for commitment response
 */
function createCommitmentEffects() {
    const commitmentIcons = ['💍', '💎', '🤞', '🔗', '💫'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const commitment = document.createElement('div');
            commitment.className = 'promise-effect';
            commitment.style.left = Math.random() * 100 + '%';
            commitment.textContent = commitmentIcons[Math.floor(Math.random() * commitmentIcons.length)];
            commitment.style.animationDuration = (4 + Math.random() * 2) + 's';
            commitment.style.fontSize = (17 + Math.random() * 6) + 'px';
            promisesContainer.appendChild(commitment);

            setTimeout(() => {
                if (commitment.parentNode) {
                    commitment.parentNode.removeChild(commitment);
                }
            }, 6000);
        }, i * 60);
    }
}