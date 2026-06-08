// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const holidayCard = document.getElementById('holidayCard');
const sparklesContainer = document.getElementById('sparklesContainer');

// Event Listeners
envelope.addEventListener('click', openHolidayLetter);

/**
 * Opens the holiday letter with festive envelope animation
 */
function openHolidayLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        holidayCard.classList.add('show');
        createHolidaySparkles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates festive holiday sparkles effect
 */
function createHolidaySparkles() {
    const colors = ['#ffd700', '#c41e3a', '#228b22', '#4169e1', '#ff8c00', '#dc143c'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'holiday-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
            sparkle.style.width = (6 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparkle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5000);
        }, i * 80);
    }
}

/**
 * Clears all holiday sparkles
 */
function clearSparkles() {
    sparklesContainer.innerHTML = '';
}

/**
 * Handles response to the holiday letter with festive feedback
 */
function handleResponse(response) {
    const celebrateButton = document.querySelector('.celebrate-button');
    const shareButton = document.querySelector('.share-button');

    if (response === 'celebrate') {
        celebrateButton.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
        celebrateButton.textContent = 'Party Time! 🎊';
        celebrateButton.style.transform = 'scale(1.1)';
        shareButton.style.opacity = '0.5';

        // Create celebration sparkles
        createCelebrationSparkles();

        setTimeout(() => {
            celebrateButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        shareButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        shareButton.textContent = 'Spreading Happiness! 🌟';
        celebrateButton.style.opacity = '0.5';

        // Create sharing sparkles
        createSharingSparkles();
    }
}

/**
 * Creates celebration sparkles for big celebration response
 */
function createCelebrationSparkles() {
    const celebrationColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'holiday-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
            sparkle.style.borderRadius = Math.random() > 0.3 ? '50%' : '0';
            sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
            sparkle.style.width = (8 + Math.random() * 6) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates sharing sparkles for joy sharing response
 */
function createSharingSparkles() {
    const sharingColors = ['#9c27b0', '#7b1fa2', '#673ab7', '#3f51b5', '#2196f3'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'holiday-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = sharingColors[Math.floor(Math.random() * sharingColors.length)];
            sparkle.style.borderRadius = '50%';
            sparkle.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            sparkle.style.width = (7 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5500);
        }, i * 50);
    }
}