// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const invitationCard = document.getElementById('invitationCard');
const sparklesContainer = document.getElementById('sparklesContainer');

// Event Listeners
envelope.addEventListener('click', openInvitationLetter);

/**
 * Opens the invitation letter with celebratory envelope animation
 */
function openInvitationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        invitationCard.classList.add('show');
        createCelebrationSparkles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates celebratory sparkles effect
 */
function createCelebrationSparkles() {
    const colors = ['#ffd700', '#9c27b0', '#ff6b6b', '#4ecdc4', '#ff8f00', '#6a1b9a'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'celebration-sparkle';
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
        }, i * 100);
    }
}

/**
 * Clears all celebration sparkles
 */
function clearSparkles() {
    sparklesContainer.innerHTML = '';
}

/**
 * Handles response to the invitation with appropriate feedback
 */
function handleResponse(response) {
    const acceptButton = document.querySelector('.accept-button');
    const declineButton = document.querySelector('.decline-button');

    if (response === 'accept') {
        acceptButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        acceptButton.textContent = 'Can\'t Wait to See You! 🎊';
        acceptButton.style.transform = 'scale(1.1)';
        declineButton.style.opacity = '0.5';

        // Create acceptance sparkles
        createAcceptanceSparkles();

        setTimeout(() => {
            acceptButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        declineButton.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
        declineButton.textContent = 'Will Miss You 💔';
        acceptButton.style.opacity = '0.5';

        // Create understanding sparkles
        createUnderstandingSparkles();
    }
}

/**
 * Creates acceptance sparkles for positive response
 */
function createAcceptanceSparkles() {
    const acceptanceColors = ['#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'celebration-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = acceptanceColors[Math.floor(Math.random() * acceptanceColors.length)];
            sparkle.style.borderRadius = Math.random() > 0.3 ? '50%' : '0';
            sparkle.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            sparkle.style.width = (8 + Math.random() * 6) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4500);
        }, i * 40);
    }
}

/**
 * Creates understanding sparkles for decline response
 */
function createUnderstandingSparkles() {
    const understandingColors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'celebration-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = understandingColors[Math.floor(Math.random() * understandingColors.length)];
            sparkle.style.borderRadius = '50%';
            sparkle.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            sparkle.style.width = (6 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5500);
        }, i * 60);
    }
}