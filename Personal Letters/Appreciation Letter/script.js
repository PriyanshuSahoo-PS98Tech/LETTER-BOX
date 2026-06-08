// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const appreciationCard = document.getElementById('appreciationCard');
const sparklesContainer = document.getElementById('sparklesContainer');

// Event Listeners
envelope.addEventListener('click', openAppreciationLetter);

/**
 * Opens the appreciation letter with warm envelope animation
 */
function openAppreciationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        appreciationCard.classList.add('show');
        createAppreciationSparkles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates warm appreciation sparkles effect
 */
function createAppreciationSparkles() {
    const colors = ['#ff8f00', '#66bb6a', '#42a5f5', '#ab47bc', '#ffca28', '#26a69a'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'appreciation-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
            sparkle.style.width = (6 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparkle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all appreciation sparkles
 */
function clearSparkles() {
    sparklesContainer.innerHTML = '';
}

/**
 * Handles response to the appreciation with appropriate feedback
 */
function handleResponse(response) {
    const humbleButton = document.querySelector('.humble-button');
    const inspireButton = document.querySelector('.inspire-button');

    if (response === 'humble') {
        humbleButton.style.background = 'linear-gradient(135deg, #8e24aa, #7b1fa2)';
        humbleButton.textContent = 'Thank You So Much! 💜';
        humbleButton.style.transform = 'scale(1.1)';
        inspireButton.style.opacity = '0.5';

        // Create humility sparkles
        createHumilitySparkles();

        setTimeout(() => {
            humbleButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        inspireButton.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
        inspireButton.textContent = 'Ready to Excel! 🚀';
        humbleButton.style.opacity = '0.5';

        // Create motivation sparkles
        createMotivationSparkles();
    }
}

/**
 * Creates humility sparkles for humble response
 */
function createHumilitySparkles() {
    const humilityColors = ['#8e24aa', '#7b1fa2', '#9c27b0', '#ab47bc', '#ba68c8'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'appreciation-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = humilityColors[Math.floor(Math.random() * humilityColors.length)];
            sparkle.style.borderRadius = '50%';
            sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
            sparkle.style.width = (7 + Math.random() * 3) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 5000);
        }, i * 50);
    }
}

/**
 * Creates motivation sparkles for inspiration response
 */
function createMotivationSparkles() {
    const motivationColors = ['#f44336', '#d32f2f', '#ff5722', '#ff6f00', '#ff8f00'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'appreciation-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.backgroundColor = motivationColors[Math.floor(Math.random() * motivationColors.length)];
            sparkle.style.borderRadius = Math.random() > 0.3 ? '50%' : '0';
            sparkle.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            sparkle.style.width = (8 + Math.random() * 4) + 'px';
            sparkle.style.height = sparkle.style.width;
            sparklesContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4500);
        }, i * 40);
    }
}