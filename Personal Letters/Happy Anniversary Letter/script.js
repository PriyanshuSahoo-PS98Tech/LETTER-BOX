// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const anniversaryCard = document.getElementById('anniversaryCard');
const sparklesContainer = document.getElementById('sparklesContainer');

// Event Listeners
envelope.addEventListener('click', openAnniversary);

/**
 * Opens the anniversary letter with envelope animation and golden effects
 */
function openAnniversary() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        anniversaryCard.classList.add('show');
        createGoldenSparkles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates elegant golden sparkles effect
 */
function createGoldenSparkles() {
    const colors = ['#ffd700', '#daa520', '#ffb347', '#f0e68c', '#fff8dc'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'golden-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
            sparkle.style.width = (6 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5000);
        }, i * 120);
    }
}

/**
 * Clears all sparkles
 */
function clearSparkles() {
    sparklesContainer.innerHTML = '';
}

/**
 * Handles anniversary response with visual feedback
 */
function handleResponse(response) {
    const celebrateButton = document.querySelector('.celebrate-button');
    const rememberButton = document.querySelector('.remember-button');

    if (response === 'celebrate') {
        celebrateButton.style.background = 'linear-gradient(135deg, #32cd32, #228b22)';
        celebrateButton.textContent = 'Planning Our Celebration! 🎉';
        celebrateButton.style.transform = 'scale(1.1)';
        rememberButton.style.opacity = '0.5';

        // Create celebration sparkles
        createCelebrationSparkles();

        setTimeout(() => {
            celebrateButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        rememberButton.style.background = 'linear-gradient(135deg, #ff69b4, #ff1493)';
        rememberButton.textContent = 'Creating Memory Book 📖';
        celebrateButton.style.opacity = '0.5';

        // Create memory sparkles
        createMemorySparkles();
    }
}

/**
 * Creates celebration sparkles for party planning
 */
function createCelebrationSparkles() {
    const celebrationColors = ['#32cd32', '#00ff00', '#ffd700', '#ff69b4', '#00bcd4'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'golden-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
            sparkle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
            sparkle.style.width = (8 + Math.random() * 6) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4000);
        }, i * 50);
    }
}

/**
 * Creates memory sparkles for remembering moments
 */
function createMemorySparkles() {
    const memoryColors = ['#ff69b4', '#ff1493', '#daa520', '#ffd700', '#dc143c'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'golden-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = memoryColors[Math.floor(Math.random() * memoryColors.length)];
            sparkle.style.borderRadius = '50%';
            sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
            sparkle.style.width = (6 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5000);
        }, i * 80);
    }
}