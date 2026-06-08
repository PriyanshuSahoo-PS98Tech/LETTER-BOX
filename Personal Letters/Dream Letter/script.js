// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const dreamCard = document.getElementById('dreamCard');
const dreamsContainer = document.getElementById('dreamsContainer');

// Event Listeners
envelope.addEventListener('click', openDreamLetter);

/**
 * Opens the dream letter with magical envelope animation
 */
function openDreamLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        dreamCard.classList.add('show');
        createDreamEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates magical floating dream effects from different directions
 */
function createDreamEffects() {
    const dreamIcons = ['🌠', '🌙', '⭐', '☁️', '🌈', '✨', '💫'];
    const animations = ['dreamFloat', 'dreamFloatLeft', 'dreamFloatRight', 'dreamFloatTop'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const dream = document.createElement('div');
            dream.className = 'dream-effect';

            // Random animation and starting position
            const animationType = animations[Math.floor(Math.random() * animations.length)];
            dream.style.animation = animationType + ' ' + (3 + Math.random() * 3) + 's linear forwards';

            // Set starting position based on animation type
            if (animationType === 'dreamFloat') {
                dream.style.left = Math.random() * 100 + '%';
                dream.style.top = '100vh';
            } else if (animationType === 'dreamFloatLeft') {
                dream.style.left = '-50px';
                dream.style.top = Math.random() * 100 + '%';
            } else if (animationType === 'dreamFloatRight') {
                dream.style.right = '-50px';
                dream.style.top = Math.random() * 100 + '%';
            } else if (animationType === 'dreamFloatTop') {
                dream.style.top = '-50px';
                dream.style.left = Math.random() * 100 + '%';
            }

            dream.textContent = dreamIcons[Math.floor(Math.random() * dreamIcons.length)];
            dream.style.animationDelay = Math.random() * 2 + 's';
            dream.style.fontSize = (16 + Math.random() * 8) + 'px';
            dreamsContainer.appendChild(dream);

            setTimeout(() => {
                if (dream.parentNode) {
                    dream.parentNode.removeChild(dream);
                }
            }, 6000);
        }, i * 80);
    }
}

/**
 * Clears all dream effects
 */
function clearDreams() {
    dreamsContainer.innerHTML = '';
}

/**
 * Handles response to the dream letter with inspiring feedback
 */
function handleResponse(response) {
    const dreamButton = document.querySelector('.dream-button');
    const visionButton = document.querySelector('.vision-button');

    if (response === 'dream') {
        dreamButton.style.background = 'linear-gradient(135deg, #c084fc, #a855f7)';
        dreamButton.textContent = 'Dreams Coming True! 🌙';
        dreamButton.style.transform = 'scale(1.1)';
        visionButton.style.opacity = '0.5';

        // Create dream fulfillment effects
        createDreamFulfillmentEffects();

        setTimeout(() => {
            dreamButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        visionButton.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
        visionButton.textContent = 'Vision Achieved! 🌟';
        dreamButton.style.opacity = '0.5';

        // Create vision realization effects
        createVisionRealizationEffects();
    }
}

/**
 * Creates dream fulfillment effects for dream response
 */
function createDreamFulfillmentEffects() {
    const fulfillmentIcons = ['🌠', '🌙', '✨', '💫', '🌈'];
    const animations = ['dreamFloat', 'dreamFloatLeft', 'dreamFloatRight', 'dreamFloatTop'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const fulfillment = document.createElement('div');
            fulfillment.className = 'dream-effect';

            const animationType = animations[Math.floor(Math.random() * animations.length)];
            fulfillment.style.animation = animationType + ' ' + (2 + Math.random() * 2) + 's linear forwards';

            if (animationType === 'dreamFloat') {
                fulfillment.style.left = Math.random() * 100 + '%';
                fulfillment.style.top = '100vh';
            } else if (animationType === 'dreamFloatLeft') {
                fulfillment.style.left = '-50px';
                fulfillment.style.top = Math.random() * 100 + '%';
            } else if (animationType === 'dreamFloatRight') {
                fulfillment.style.right = '-50px';
                fulfillment.style.top = Math.random() * 100 + '%';
            } else if (animationType === 'dreamFloatTop') {
                fulfillment.style.top = '-50px';
                fulfillment.style.left = Math.random() * 100 + '%';
            }

            fulfillment.textContent = fulfillmentIcons[Math.floor(Math.random() * fulfillmentIcons.length)];
            fulfillment.style.fontSize = (18 + Math.random() * 10) + 'px';
            dreamsContainer.appendChild(fulfillment);

            setTimeout(() => {
                if (fulfillment.parentNode) {
                    fulfillment.parentNode.removeChild(fulfillment);
                }
            }, 4000);
        }, i * 20);
    }
}

/**
 * Creates vision realization effects for vision response
 */
function createVisionRealizationEffects() {
    const visionIcons = ['🌟', '⭐', '✨', '💫', '🔮'];
    const animations = ['dreamFloat', 'dreamFloatLeft', 'dreamFloatRight', 'dreamFloatTop'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const vision = document.createElement('div');
            vision.className = 'dream-effect';

            const animationType = animations[Math.floor(Math.random() * animations.length)];
            vision.style.animation = animationType + ' ' + (3.5 + Math.random() * 2) + 's linear forwards';

            if (animationType === 'dreamFloat') {
                vision.style.left = Math.random() * 100 + '%';
                vision.style.top = '100vh';
            } else if (animationType === 'dreamFloatLeft') {
                vision.style.left = '-50px';
                vision.style.top = Math.random() * 100 + '%';
            } else if (animationType === 'dreamFloatRight') {
                vision.style.right = '-50px';
                vision.style.top = Math.random() * 100 + '%';
            } else if (animationType === 'dreamFloatTop') {
                vision.style.top = '-50px';
                vision.style.left = Math.random() * 100 + '%';
            }

            vision.textContent = visionIcons[Math.floor(Math.random() * visionIcons.length)];
            vision.style.fontSize = (17 + Math.random() * 6) + 'px';
            dreamsContainer.appendChild(vision);

            setTimeout(() => {
                if (vision.parentNode) {
                    vision.parentNode.removeChild(vision);
                }
            }, 5500);
        }, i * 30);
    }
}