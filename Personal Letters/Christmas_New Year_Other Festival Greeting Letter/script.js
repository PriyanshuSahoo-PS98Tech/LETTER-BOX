// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const festivalCard = document.getElementById('festivalCard');
const snowflakesContainer = document.getElementById('snowflakesContainer');

// Event Listeners
envelope.addEventListener('click', openFestivalGreeting);

/**
 * Opens the festival greeting with magical envelope animation
 */
function openFestivalGreeting() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        festivalCard.classList.add('show');
        createSnowfall();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates magical snowfall effect
 */
function createSnowfall() {
    const snowSymbols = ['❄️', '❅', '⛄', '🌨️', '❄'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.textContent = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];
            snowflake.style.animationDelay = Math.random() * 2 + 's';
            snowflake.style.animationDuration = (6 + Math.random() * 4) + 's';
            snowflake.style.fontSize = (16 + Math.random() * 8) + 'px';
            snowflakesContainer.appendChild(snowflake);

            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            }, 10000);
        }, i * 200);
    }
}

/**
 * Clears all snowflakes
 */
function clearSnowflakes() {
    snowflakesContainer.innerHTML = '';
}

/**
 * Handles response to the festival greeting with festive feedback
 */
function handleResponse(response) {
    const celebrateButton = document.querySelector('.celebrate-button');
    const wishesButton = document.querySelector('.wishes-button');

    if (response === 'celebrate') {
        celebrateButton.style.background = 'linear-gradient(135deg, #ffd700, #ff8c00)';
        celebrateButton.textContent = 'Let the Festivities Begin! 🎆';
        celebrateButton.style.transform = 'scale(1.1)';
        wishesButton.style.opacity = '0.5';

        // Create celebration snowflakes
        createCelebrationSnowflakes();

        setTimeout(() => {
            celebrateButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        wishesButton.style.background = 'linear-gradient(135deg, #ff69b4, #ff1493)';
        wishesButton.textContent = 'Holiday Hugs! 🤗';
        celebrateButton.style.opacity = '0.5';

        // Create love snowflakes
        createLoveSnowflakes();
    }
}

/**
 * Creates celebration snowflakes for festive response
 */
function createCelebrationSnowflakes() {
    const celebrationSymbols = ['🎉', '🎊', '✨', '🌟', '🎁'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.textContent = celebrationSymbols[Math.floor(Math.random() * celebrationSymbols.length)];
            snowflake.style.animationDuration = (4 + Math.random() * 3) + 's';
            snowflake.style.fontSize = (18 + Math.random() * 8) + 'px';
            snowflake.style.color = ['#ffd700', '#ff8c00', '#ff6b6b', '#4ecdc4'][Math.floor(Math.random() * 4)];
            snowflakesContainer.appendChild(snowflake);

            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            }, 7000);
        }, i * 50);
    }
}

/**
 * Creates love snowflakes for wishes response
 */
function createLoveSnowflakes() {
    const loveSymbols = ['💝', '💖', '🤗', '😊', '💕'];

    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.textContent = loveSymbols[Math.floor(Math.random() * loveSymbols.length)];
            snowflake.style.animationDuration = (5 + Math.random() * 3) + 's';
            snowflake.style.fontSize = (17 + Math.random() * 6) + 'px';
            snowflake.style.color = ['#ff69b4', '#ff1493', '#c41e3a', '#ff6b6b'][Math.floor(Math.random() * 4)];
            snowflakesContainer.appendChild(snowflake);

            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            }, 8000);
        }, i * 70);
    }
}