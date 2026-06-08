// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const congratulationCard = document.getElementById('congratulationCard');
const sparklesContainer = document.getElementById('sparklesContainer');

// Event Listeners
envelope.addEventListener('click', openCongratulation);

/**
 * Opens the congratulation letter with celebratory envelope animation
 */
function openCongratulation() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        congratulationCard.classList.add('show');
        createSuccessSparkles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates success sparkles effect
 */
function createSuccessSparkles() {
    const colors = ['#ffd700', '#ff8f00', '#2196f3', '#66bb6a', '#f5576c'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'success-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkle.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            sparkle.style.width = (8 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4500);
        }, i * 100);
    }
}

/**
 * Clears all sparkles
 */
function clearSparkles() {
    sparklesContainer.innerHTML = '';
}

/**
 * Handles response to the congratulation with appropriate feedback
 */
function handleResponse(response) {
    const celebrateButton = document.querySelector('.celebrate-button');
    const inspireButton = document.querySelector('.inspire-button');

    if (response === 'celebrate') {
        celebrateButton.style.background = 'linear-gradient(135deg, #ff4081, #e91e63)';
        celebrateButton.textContent = 'Party Time! 🎉';
        celebrateButton.style.transform = 'scale(1.1)';
        inspireButton.style.opacity = '0.5';

        // Create celebration sparkles
        createCelebrationSparkles();

        setTimeout(() => {
            celebrateButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        inspireButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        inspireButton.textContent = 'Inspiring Others! 💫';
        celebrateButton.style.opacity = '0.5';

        // Create inspiration sparkles
        createInspirationSparkles();
    }
}

/**
 * Creates celebration sparkles for party response
 */
function createCelebrationSparkles() {
    const celebrationColors = ['#ff4081', '#e91e63', '#ffd700', '#ff8f00', '#4fc3f7'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'success-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
            sparkle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
            sparkle.style.width = (10 + Math.random() * 6) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4000);
        }, i * 40);
    }
}

/**
 * Creates inspiration sparkles for sharing success
 */
function createInspirationSparkles() {
    const inspirationColors = ['#9c27b0', '#7b1fa2', '#3f51b5', '#2196f3', '#00bcd4'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'success-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = inspirationColors[Math.floor(Math.random() * inspirationColors.length)];
            sparkle.style.borderRadius = '50%';
            sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
            sparkle.style.width = (8 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5000);
        }, i * 60);
    }
}