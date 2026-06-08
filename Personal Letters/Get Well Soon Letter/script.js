// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const getwellsoonCard = document.getElementById('getwellsoonCard');
const energyContainer = document.getElementById('energyContainer');

// Event Listeners
envelope.addEventListener('click', openGetWellSoon);

/**
 * Opens the get well soon letter with healing envelope animation
 */
function openGetWellSoon() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        getwellsoonCard.classList.add('show');
        createHealingEnergy();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates healing energy rising effect
 */
function createHealingEnergy() {
    const colors = ['#90ee90', '#32cd32', '#87ceeb', '#98fb98', '#b8e6b8'];

    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            const energy = document.createElement('div');
            energy.className = 'healing-energy';
            energy.style.left = Math.random() * 100 + '%';
            energy.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            energy.style.animationDelay = Math.random() * 2 + 's';
            energy.style.animationDuration = (3 + Math.random() * 2) + 's';
            energy.style.width = (5 + Math.random() * 3) + 'px';
            energy.style.height = energy.style.width;
            energyContainer.appendChild(energy);

            setTimeout(() => {
                if (energy.parentNode) {
                    energy.parentNode.removeChild(energy);
                }
            }, 5000);
        }, i * 110);
    }
}

/**
 * Clears all healing energy effects
 */
function clearEnergy() {
    energyContainer.innerHTML = '';
}

/**
 * Handles response to the get well soon message with appropriate feedback
 */
function handleResponse(response) {
    const feelingButton = document.querySelector('.feeling-button');
    const careButton = document.querySelector('.care-button');

    if (response === 'better') {
        feelingButton.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
        feelingButton.textContent = 'So Happy to Hear! 🎉';
        feelingButton.style.transform = 'scale(1.1)';
        careButton.style.opacity = '0.5';

        // Create celebration energy
        createCelebrationEnergy();

        setTimeout(() => {
            feelingButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        careButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        careButton.textContent = 'Always Here for You 🤗';
        feelingButton.style.opacity = '0.5';

        // Create caring energy
        createCaringEnergy();
    }
}

/**
 * Creates celebration energy for feeling better response
 */
function createCelebrationEnergy() {
    const celebrationColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const energy = document.createElement('div');
            energy.className = 'healing-energy';
            energy.style.left = Math.random() * 100 + '%';
            energy.style.backgroundColor = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
            energy.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            energy.style.animationDuration = (2 + Math.random() * 2) + 's';
            energy.style.width = (8 + Math.random() * 4) + 'px';
            energy.style.height = energy.style.width;
            energyContainer.appendChild(energy);

            setTimeout(() => {
                if (energy.parentNode) {
                    energy.parentNode.removeChild(energy);
                }
            }, 4000);
        }, i * 40);
    }
}

/**
 * Creates caring energy for gratitude response
 */
function createCaringEnergy() {
    const caringColors = ['#9c27b0', '#7b1fa2', '#673ab7', '#3f51b5', '#2196f3'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const energy = document.createElement('div');
            energy.className = 'healing-energy';
            energy.style.left = Math.random() * 100 + '%';
            energy.style.backgroundColor = caringColors[Math.floor(Math.random() * caringColors.length)];
            energy.style.borderRadius = '50%';
            energy.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            energy.style.width = (6 + Math.random() * 3) + 'px';
            energy.style.height = energy.style.width;
            energyContainer.appendChild(energy);

            setTimeout(() => {
                if (energy.parentNode) {
                    energy.parentNode.removeChild(energy);
                }
            }, 5500);
        }, i * 70);
    }
}