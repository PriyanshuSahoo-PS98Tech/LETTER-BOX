// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const proposalCard = document.getElementById('proposalCard');
const petalsContainer = document.getElementById('petalsContainer');

// Event Listeners
envelope.addEventListener('click', openProposal);

/**
 * Opens the proposal with envelope animation and romantic effects
 */
function openProposal() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        proposalCard.classList.add('show');
        createRosePetals();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates romantic rose petal falling effect
 */
function createRosePetals() {
    const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#ff91a4'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            petal.style.animationDelay = Math.random() * 2 + 's';
            petal.style.animationDuration = (3 + Math.random() * 2) + 's';
            petalsContainer.appendChild(petal);

            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all rose petals
 */
function clearPetals() {
    petalsContainer.innerHTML = '';
}

/**
 * Handles response to the proposal
 */
function handleResponse(response) {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    if (response === 'yes') {
        yesButton.style.background = 'linear-gradient(135deg, #32cd32, #228b22)';
        yesButton.textContent = 'YES! I DO! 💍';
        yesButton.style.transform = 'scale(1.1)';
        noButton.style.display = 'none';

        // Create celebration effect
        createCelebrationPetals();

        setTimeout(() => {
            yesButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        noButton.style.background = 'linear-gradient(135deg, #ff6347, #dc143c)';
        noButton.textContent = 'Need More Time 💭';
        yesButton.style.opacity = '0.5';
    }
}

/**
 * Creates celebration petals for positive response
 */
function createCelebrationPetals() {
    const celebrationColors = ['#ffd700', '#ffea00', '#ff69b4', '#ff1493', '#32cd32'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.backgroundColor = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
            petal.style.borderRadius = Math.random() > 0.5 ? '50%' : '50% 10% 50% 10%';
            petal.style.animationDuration = (2 + Math.random() * 2) + 's';
            petalsContainer.appendChild(petal);

            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 4000);
        }, i * 50);
    }
}