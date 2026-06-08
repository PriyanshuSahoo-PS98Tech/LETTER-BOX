// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const fanmailCard = document.getElementById('fanmailCard');
const shootingStarsContainer = document.getElementById('shootingStarsContainer');

// Event Listeners
envelope.addEventListener('click', openFanMail);

/**
 * Opens the fan mail letter with starry envelope animation
 */
function openFanMail() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        fanmailCard.classList.add('show');
        createShootingStars();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates shooting stars effect
 */
function createShootingStars() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            shootingStarsContainer.appendChild(star);

            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 4000);
        }, i * 200);
    }
}

/**
 * Clears all shooting stars
 */
function clearStars() {
    shootingStarsContainer.innerHTML = '';
}

/**
 * Handles response to the fan mail with appropriate feedback
 */
function handleResponse(response) {
    const starstruckButton = document.querySelector('.starstruck-button');
    const supportButton = document.querySelector('.support-button');

    if (response === 'starstruck') {
        starstruckButton.style.background = 'linear-gradient(135deg, #ff1744, #d50000)';
        starstruckButton.textContent = 'You Made My Day! ✨';
        starstruckButton.style.transform = 'scale(1.1)';
        supportButton.style.opacity = '0.5';

        // Create heart stars
        createHeartStars();

        setTimeout(() => {
            starstruckButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        supportButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        supportButton.textContent = 'Fans Like You Inspire Me! 🌟';
        starstruckButton.style.opacity = '0.5';

        // Create grateful stars
        createGratefulStars();
    }
}

/**
 * Creates heart stars for emotional response
 */
function createHeartStars() {
    const heartSymbols = ['💖', '💕', '💗', '💝', '❤️'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.background = 'none';
            star.style.fontSize = '16px';
            star.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            star.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            shootingStarsContainer.appendChild(star);

            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 4500);
        }, i * 50);
    }
}

/**
 * Creates grateful stars for appreciation response
 */
function createGratefulStars() {
    const gratefulSymbols = ['🙏', '⭐', '🌟', '✨', '💫'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.background = 'none';
            star.style.fontSize = '14px';
            star.textContent = gratefulSymbols[Math.floor(Math.random() * gratefulSymbols.length)];
            star.style.animationDuration = (3 + Math.random() * 2) + 's';
            shootingStarsContainer.appendChild(star);

            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 5000);
        }, i * 80);
    }
}