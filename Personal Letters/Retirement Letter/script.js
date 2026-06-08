// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const retirementCard = document.getElementById('retirementCard');
const celebrationContainer = document.getElementById('celebrationContainer');

// Event Listeners
envelope.addEventListener('click', openRetirementLetter);

/**
 * Opens the retirement letter with dignified envelope animation
 */
function openRetirementLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        retirementCard.classList.add('show');
        createGoldenCelebration();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates golden celebration effect
 */
function createGoldenCelebration() {
    const colors = ['#d4af37', '#b8860b', '#ffd700', '#ffdf00', '#f7971e'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const celebration = document.createElement('div');
            celebration.className = 'golden-celebration';
            celebration.style.left = Math.random() * 100 + '%';
            celebration.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            celebration.style.animationDelay = Math.random() * 2 + 's';
            celebration.style.animationDuration = (3 + Math.random() * 2) + 's';
            celebration.style.width = (8 + Math.random() * 4) + 'px';
            celebration.style.height = celebration.style.width;
            celebrationContainer.appendChild(celebration);

            setTimeout(() => {
                if (celebration.parentNode) {
                    celebration.parentNode.removeChild(celebration);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all celebration effects
 */
function clearCelebration() {
    celebrationContainer.innerHTML = '';
}

/**
 * Handles response to the retirement letter with appropriate feedback
 */
function handleResponse(response) {
    const excitedButton = document.querySelector('.excited-button');
    const gratefulButton = document.querySelector('.grateful-button');

    if (response === 'excited') {
        excitedButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        excitedButton.textContent = 'Adventure Awaits! 🌈';
        excitedButton.style.transform = 'scale(1.1)';
        gratefulButton.style.opacity = '0.5';

        // Create excitement celebration
        createExcitementCelebration();

        setTimeout(() => {
            excitedButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        gratefulButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        gratefulButton.textContent = 'Honored & Grateful 💖';
        excitedButton.style.opacity = '0.5';

        // Create gratitude celebration
        createGratitudeCelebration();
    }
}

/**
 * Creates excitement celebration for future response
 */
function createExcitementCelebration() {
    const excitementColors = ['#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ff9800'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const celebration = document.createElement('div');
            celebration.className = 'golden-celebration';
            celebration.style.left = Math.random() * 100 + '%';
            celebration.style.backgroundColor = excitementColors[Math.floor(Math.random() * excitementColors.length)];
            celebration.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            celebration.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            celebration.style.width = (10 + Math.random() * 6) + 'px';
            celebration.style.height = celebration.style.width;
            celebrationContainer.appendChild(celebration);

            setTimeout(() => {
                if (celebration.parentNode) {
                    celebration.parentNode.removeChild(celebration);
                }
            }, 4500);
        }, i * 50);
    }
}

/**
 * Creates gratitude celebration for grateful response
 */
function createGratitudeCelebration() {
    const gratitudeColors = ['#9c27b0', '#7b1fa2', '#673ab7', '#3f51b5', '#2196f3'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const celebration = document.createElement('div');
            celebration.className = 'golden-celebration';
            celebration.style.left = Math.random() * 100 + '%';
            celebration.style.backgroundColor = gratitudeColors[Math.floor(Math.random() * gratitudeColors.length)];
            celebration.style.borderRadius = '50%';
            celebration.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            celebration.style.width = (8 + Math.random() * 4) + 'px';
            celebration.style.height = celebration.style.width;
            celebrationContainer.appendChild(celebration);

            setTimeout(() => {
                if (celebration.parentNode) {
                    celebration.parentNode.removeChild(celebration);
                }
            }, 5500);
        }, i * 70);
    }
}