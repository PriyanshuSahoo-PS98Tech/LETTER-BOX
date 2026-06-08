// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const milestoneCard = document.getElementById('milestoneCard');
const achievementsContainer = document.getElementById('achievementsContainer');

// Event Listeners
envelope.addEventListener('click', openMilestoneLetter);

/**
 * Opens the milestone letter with celebratory envelope animation
 */
function openMilestoneLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        milestoneCard.classList.add('show');
        createAchievementEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates celebratory floating achievement effects
 */
function createAchievementEffects() {
    const achievementIcons = ['🏆', '🎯', '🌟', '🎉', '🎖️', '🏅', '👑'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const achievement = document.createElement('div');
            achievement.className = 'achievement-effect';
            achievement.style.left = Math.random() * 100 + '%';
            achievement.textContent = achievementIcons[Math.floor(Math.random() * achievementIcons.length)];
            achievement.style.animationDelay = Math.random() * 2 + 's';
            achievement.style.animationDuration = (3 + Math.random() * 2) + 's';
            achievement.style.fontSize = (16 + Math.random() * 8) + 'px';
            achievementsContainer.appendChild(achievement);

            setTimeout(() => {
                if (achievement.parentNode) {
                    achievement.parentNode.removeChild(achievement);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all achievement effects
 */
function clearAchievements() {
    achievementsContainer.innerHTML = '';
}

/**
 * Handles response to the milestone letter with celebratory feedback
 */
function handleResponse(response) {
    const achievementButton = document.querySelector('.achievement-button');
    const celebrateButton = document.querySelector('.celebrate-button');

    if (response === 'achievement') {
        achievementButton.style.background = 'linear-gradient(135deg, #32cd32, #228b22)';
        achievementButton.textContent = 'Grateful & Motivated! 🌟';
        achievementButton.style.transform = 'scale(1.1)';
        celebrateButton.style.opacity = '0.5';

        // Create success effects
        createSuccessEffects();

        setTimeout(() => {
            achievementButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        celebrateButton.style.background = 'linear-gradient(135deg, #ff6347, #dc143c)';
        celebrateButton.textContent = 'Party Time! 🎊';
        achievementButton.style.opacity = '0.5';

        // Create celebration effects
        createCelebrationEffects();
    }
}

/**
 * Creates success effects for achievement response
 */
function createSuccessEffects() {
    const successIcons = ['🏆', '🌟', '🎖️', '🏅', '👑'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const success = document.createElement('div');
            success.className = 'achievement-effect';
            success.style.left = Math.random() * 100 + '%';
            success.textContent = successIcons[Math.floor(Math.random() * successIcons.length)];
            success.style.animationDuration = (2 + Math.random() * 2) + 's';
            success.style.fontSize = (18 + Math.random() * 10) + 'px';
            achievementsContainer.appendChild(success);

            setTimeout(() => {
                if (success.parentNode) {
                    success.parentNode.removeChild(success);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates celebration effects for celebrate response
 */
function createCelebrationEffects() {
    const celebrationIcons = ['🎉', '🎊', '🎈', '🎁', '🍾'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const celebration = document.createElement('div');
            celebration.className = 'achievement-effect';
            celebration.style.left = Math.random() * 100 + '%';
            celebration.textContent = celebrationIcons[Math.floor(Math.random() * celebrationIcons.length)];
            celebration.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            celebration.style.fontSize = (17 + Math.random() * 6) + 'px';
            achievementsContainer.appendChild(celebration);

            setTimeout(() => {
                if (celebration.parentNode) {
                    celebration.parentNode.removeChild(celebration);
                }
            }, 5500);
        }, i * 25);
    }
}