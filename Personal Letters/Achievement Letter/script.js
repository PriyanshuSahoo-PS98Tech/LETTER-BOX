// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const achievementCard = document.getElementById('achievementCard');
const excellenceContainer = document.getElementById('excellenceContainer');

// Event Listeners
envelope.addEventListener('click', openAchievementLetter);

/**
 * Opens the achievement letter with professional envelope animation
 */
function openAchievementLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        achievementCard.classList.add('show');
        createExcellenceEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates professional floating excellence effects
 */
function createExcellenceEffects() {
    const excellenceIcons = ['🌟', '🏅', '💎', '🎖️', '🏆', '⭐', '👑'];

    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            const excellence = document.createElement('div');
            excellence.className = 'excellence-effect';
            excellence.style.left = Math.random() * 100 + '%';
            excellence.textContent = excellenceIcons[Math.floor(Math.random() * excellenceIcons.length)];
            excellence.style.animationDelay = Math.random() * 2 + 's';
            excellence.style.animationDuration = (3 + Math.random() * 2) + 's';
            excellence.style.fontSize = (16 + Math.random() * 8) + 'px';
            excellenceContainer.appendChild(excellence);

            setTimeout(() => {
                if (excellence.parentNode) {
                    excellence.parentNode.removeChild(excellence);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all excellence effects
 */
function clearExcellence() {
    excellenceContainer.innerHTML = '';
}

/**
 * Handles response to the achievement letter with professional feedback
 */
function handleResponse(response) {
    const recognitionButton = document.querySelector('.recognition-button');
    const excellenceButton = document.querySelector('.excellence-button');

    if (response === 'recognition') {
        recognitionButton.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        recognitionButton.textContent = 'Grateful & Humbled! 🙏';
        recognitionButton.style.transform = 'scale(1.1)';
        excellenceButton.style.opacity = '0.5';

        // Create honor effects
        createHonorEffects();

        setTimeout(() => {
            recognitionButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        excellenceButton.style.background = 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
        excellenceButton.textContent = 'Motivated for More! 🚀';
        recognitionButton.style.opacity = '0.5';

        // Create inspiration effects
        createInspirationEffects();
    }
}

/**
 * Creates honor effects for recognition response
 */
function createHonorEffects() {
    const honorIcons = ['🏆', '🙏', '🌟', '💎', '🎖️'];

    for (let i = 0; i < 65; i++) {
        setTimeout(() => {
            const honor = document.createElement('div');
            honor.className = 'excellence-effect';
            honor.style.left = Math.random() * 100 + '%';
            honor.textContent = honorIcons[Math.floor(Math.random() * honorIcons.length)];
            honor.style.animationDuration = (2 + Math.random() * 2) + 's';
            honor.style.fontSize = (18 + Math.random() * 10) + 'px';
            excellenceContainer.appendChild(honor);

            setTimeout(() => {
                if (honor.parentNode) {
                    honor.parentNode.removeChild(honor);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates inspiration effects for excellence response
 */
function createInspirationEffects() {
    const inspirationIcons = ['🚀', '⭐', '💫', '🌟', '✨'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const inspiration = document.createElement('div');
            inspiration.className = 'excellence-effect';
            inspiration.style.left = Math.random() * 100 + '%';
            inspiration.textContent = inspirationIcons[Math.floor(Math.random() * inspirationIcons.length)];
            inspiration.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            inspiration.style.fontSize = (17 + Math.random() * 6) + 'px';
            excellenceContainer.appendChild(inspiration);

            setTimeout(() => {
                if (inspiration.parentNode) {
                    inspiration.parentNode.removeChild(inspiration);
                }
            }, 5500);
        }, i * 40);
    }
}