// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const welcomeCard = document.getElementById('welcomeCard');
const confettiContainer = document.getElementById('confettiContainer');

// Event Listeners
envelope.addEventListener('click', openWelcomeLetter);

/**
 * Opens the welcome letter with celebratory envelope animation
 */
function openWelcomeLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        welcomeCard.classList.add('show');
        createWelcomeConfetti();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates celebratory welcome confetti effect
 */
function createWelcomeConfetti() {
    const colors = ['#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336', '#00bcd4'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'welcome-confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            confetti.style.width = (6 + Math.random() * 4) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4500);
        }, i * 80);
    }
}

/**
 * Clears all welcome confetti
 */
function clearConfetti() {
    confettiContainer.innerHTML = '';
}

/**
 * Handles response to the welcome letter with appropriate feedback
 */
function handleResponse(response) {
    const excitedButton = document.querySelector('.excited-button');
    const questionsButton = document.querySelector('.questions-button');

    if (response === 'excited') {
        excitedButton.style.background = 'linear-gradient(135deg, #ff5722, #e64a19)';
        excitedButton.textContent = 'Let\'s Begin the Adventure! 🚀';
        excitedButton.style.transform = 'scale(1.1)';
        questionsButton.style.opacity = '0.5';

        // Create excitement confetti
        createExcitementConfetti();

        setTimeout(() => {
            excitedButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        questionsButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        questionsButton.textContent = 'We\'re Here to Help! 💬';
        excitedButton.style.opacity = '0.5';

        // Create support confetti
        createSupportConfetti();
    }
}

/**
 * Creates excitement confetti for enthusiastic response
 */
function createExcitementConfetti() {
    const excitementColors = ['#ff5722', '#e64a19', '#ffc107', '#ffeb3b', '#4caf50'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'welcome-confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = excitementColors[Math.floor(Math.random() * excitementColors.length)];
            confetti.style.borderRadius = Math.random() > 0.3 ? '50%' : '0';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            confetti.style.width = (8 + Math.random() * 6) + 'px';
            confetti.style.height = confetti.style.width;
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 25);
    }
}

/**
 * Creates support confetti for questions response
 */
function createSupportConfetti() {
    const supportColors = ['#9c27b0', '#7b1fa2', '#3f51b5', '#2196f3', '#00bcd4'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'welcome-confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = supportColors[Math.floor(Math.random() * supportColors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
            confetti.style.width = (6 + Math.random() * 4) + 'px';
            confetti.style.height = confetti.style.width;
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        }, i * 40);
    }
}