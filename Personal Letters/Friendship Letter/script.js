// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const friendshipCard = document.getElementById('friendshipCard');
const starsContainer = document.getElementById('starsContainer');

// Event Listeners
envelope.addEventListener('click', openFriendshipLetter);

/**
 * Opens the friendship letter with warm envelope animation
 */
function openFriendshipLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        friendshipCard.classList.add('show');
        createFriendshipStars();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates twinkling friendship stars effect
 */
function createFriendshipStars() {
    const stars = ['⭐', '🌟', '✨', '💫', '🎉'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'friendship-star';
            star.style.left = Math.random() * 100 + '%';
            star.textContent = stars[Math.floor(Math.random() * stars.length)];
            star.style.animationDelay = Math.random() * 2 + 's';
            star.style.animationDuration = (3 + Math.random() * 2) + 's';
            star.style.fontSize = (14 + Math.random() * 6) + 'px';
            starsContainer.appendChild(star);

            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 5000);
        }, i * 120);
    }
}

/**
 * Clears all friendship stars
 */
function clearStars() {
    starsContainer.innerHTML = '';
}

/**
 * Handles response to the friendship letter with warm feedback
 */
function handleResponse(response) {
    const friendshipButton = document.querySelector('.friendship-button');
    const memoriesButton = document.querySelector('.memories-button');

    if (response === 'friendship') {
        friendshipButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        friendshipButton.textContent = 'You\'re Amazing Too! 💚';
        friendshipButton.style.transform = 'scale(1.1)';
        memoriesButton.style.opacity = '0.5';

        // Create gratitude stars
        createGratitudeStars();

        setTimeout(() => {
            friendshipButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        memoriesButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        memoriesButton.textContent = 'Adventure Awaits! 🚀';
        friendshipButton.style.opacity = '0.5';

        // Create adventure stars
        createAdventureStars();
    }
}

/**
 * Creates gratitude stars for friendship response
 */
function createGratitudeStars() {
    const gratitudeStars = ['💚', '🙏', '😊', '✨', '🌟'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'friendship-star';
            star.style.left = Math.random() * 100 + '%';
            star.textContent = gratitudeStars[Math.floor(Math.random() * gratitudeStars.length)];
            star.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            star.style.fontSize = (16 + Math.random() * 6) + 'px';
            starsContainer.appendChild(star);

            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 4500);
        }, i * 50);
    }
}

/**
 * Creates adventure stars for memories response
 */
function createAdventureStars() {
    const adventureStars = ['🚀', '🎭', '🎪', '🎨', '📸'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'friendship-star';
            star.style.left = Math.random() * 100 + '%';
            star.textContent = adventureStars[Math.floor(Math.random() * adventureStars.length)];
            star.style.animationDuration = (3 + Math.random() * 2) + 's';
            star.style.fontSize = (15 + Math.random() * 5) + 'px';
            starsContainer.appendChild(star);

            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 5000);
        }, i * 70);
    }
}