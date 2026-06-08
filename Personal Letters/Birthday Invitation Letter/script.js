// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const birthdayCard = document.getElementById('birthdayCard');
const confettiContainer = document.getElementById('confettiContainer');

// Event Listeners
envelope.addEventListener('click', openInvitation);

/**
 * Opens the birthday invitation with envelope animation and celebration effects
 */
function openInvitation() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        birthdayCard.classList.add('show');
        createConfetti();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates colorful confetti effect for celebration
 */
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#ffc107'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 80);
    }
}

/**
 * Clears all confetti elements
 */
function clearConfetti() {
    confettiContainer.innerHTML = '';
}

/**
 * Handles RSVP response with visual feedback
 */
function handleRSVP(response) {
    const yesButton = document.querySelector('.rsvp-button');
    const maybeButton = document.querySelector('.maybe-button');

    if (response === 'yes') {
        yesButton.style.background = 'linear-gradient(135deg, #32cd32, #228b22)';
        yesButton.textContent = 'See You There! 🎊';
        yesButton.style.transform = 'scale(1.1)';
        maybeButton.style.opacity = '0.5';

        // Create extra celebration effect
        createCelebrationConfetti();

        setTimeout(() => {
            yesButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        maybeButton.style.background = 'linear-gradient(135deg, #ff9800, #f57c00)';
        maybeButton.textContent = 'Will Try! 🤞';
        yesButton.style.opacity = '0.5';
    }
}

/**
 * Creates extra celebration confetti for confirmed attendance
 */
function createCelebrationConfetti() {
    const celebrationColors = ['#ffd700', '#ffea00', '#32cd32', '#ff69b4', '#ff1493', '#00bcd4'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
            confetti.style.borderRadius = Math.random() > 0.3 ? '50%' : '0';
            confetti.style.animationDuration = (1.5 + Math.random() * 2) + 's';
            confetti.style.width = (8 + Math.random() * 6) + 'px';
            confetti.style.height = confetti.style.width;
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3500);
        }, i * 30);
    }
}