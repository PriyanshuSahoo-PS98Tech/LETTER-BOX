// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const loveCard = document.getElementById('loveCard');
const heartsContainer = document.getElementById('heartsContainer');

// Event Listeners
envelope.addEventListener('click', openLoveLetter);

/**
 * Opens the love letter with romantic envelope animation
 */
function openLoveLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        loveCard.classList.add('show');
        createRomanceHearts();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates romantic floating hearts effect
 */
function createRomanceHearts() {
    const hearts = ['💖', '💕', '💗', '💘', '💝', '❤️', '🌹'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'romance-heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (3 + Math.random() * 2) + 's';
            heart.style.fontSize = (16 + Math.random() * 8) + 'px';
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all romance hearts
 */
function clearHearts() {
    heartsContainer.innerHTML = '';
}

/**
 * Handles response to the love letter with passionate feedback
 */
function handleResponse(response) {
    const loveButton = document.querySelector('.love-button');
    const heartButton = document.querySelector('.heart-button');

    if (response === 'love') {
        loveButton.style.background = 'linear-gradient(135deg, #ff1744, #d50000)';
        loveButton.textContent = 'My Heart is Yours! 💘';
        loveButton.style.transform = 'scale(1.1)';
        heartButton.style.opacity = '0.5';

        // Create passionate hearts
        createPassionateHearts();

        setTimeout(() => {
            loveButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        heartButton.style.background = 'linear-gradient(135deg, #8e24aa, #6a1b9a)';
        heartButton.textContent = 'Together Forever 💍';
        loveButton.style.opacity = '0.5';

        // Create eternal hearts
        createEternalHearts();
    }
}

/**
 * Creates passionate hearts for mutual love response
 */
function createPassionateHearts() {
    const passionateHearts = ['💘', '💖', '❤️‍🔥', '💗', '💕'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'romance-heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.textContent = passionateHearts[Math.floor(Math.random() * passionateHearts.length)];
            heart.style.animationDuration = (2 + Math.random() * 2) + 's';
            heart.style.fontSize = (18 + Math.random() * 10) + 'px';
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates eternal hearts for heart commitment response
 */
function createEternalHearts() {
    const eternalHearts = ['💍', '💒', '💖', '💕', '🌹'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'romance-heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.textContent = eternalHearts[Math.floor(Math.random() * eternalHearts.length)];
            heart.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            heart.style.fontSize = (17 + Math.random() * 6) + 'px';
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5500);
        }, i * 50);
    }
}