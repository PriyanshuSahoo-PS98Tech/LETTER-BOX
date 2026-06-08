// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const motivationCard = document.getElementById('motivationCard');
const energyContainer = document.getElementById('energyContainer');

// Event Listeners
envelope.addEventListener('click', openMotivationLetter);

/**
 * Opens the motivation letter with powerful envelope animation
 */
function openMotivationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        motivationCard.classList.add('show');
        createEnergySparks();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates energizing spark burst effect
 */
function createEnergySparks() {
    const colors = ['#ffd700', '#ff6b35', '#32cd32', '#1e90ff', '#ff4500'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.className = 'energy-spark';
            spark.style.left = Math.random() * 100 + '%';
            spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            spark.style.animationDelay = Math.random() * 2 + 's';
            spark.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            spark.style.width = (4 + Math.random() * 4) + 'px';
            spark.style.height = spark.style.width;
            energyContainer.appendChild(spark);

            setTimeout(() => {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }, 4500);
        }, i * 100);
    }
}

/**
 * Clears all energy sparks
 */
function clearSparks() {
    energyContainer.innerHTML = '';
}

/**
 * Handles response to the motivation with energizing feedback
 */
function handleResponse(response) {
    const motivatedButton = document.querySelector('.motivated-button');
    const inspireButton = document.querySelector('.inspire-button');

    if (response === 'motivated') {
        motivatedButton.style.background = 'linear-gradient(135deg, #32cd32, #228b22)';
        motivatedButton.textContent = 'Unstoppable Force! 🚀';
        motivatedButton.style.transform = 'scale(1.1)';
        inspireButton.style.opacity = '0.5';

        // Create victory sparks
        createVictorySparks();

        setTimeout(() => {
            motivatedButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        inspireButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        inspireButton.textContent = 'Power Loading... ⚡';
        motivatedButton.style.opacity = '0.5';

        // Create power-up sparks
        createPowerUpSparks();
    }
}

/**
 * Creates victory sparks for motivated response
 */
function createVictorySparks() {
    const victoryColors = ['#32cd32', '#ffd700', '#ff6b35', '#1e90ff', '#ff69b4'];

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.className = 'energy-spark';
            spark.style.left = Math.random() * 100 + '%';
            spark.style.backgroundColor = victoryColors[Math.floor(Math.random() * victoryColors.length)];
            spark.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            spark.style.animationDuration = (2 + Math.random() * 2) + 's';
            spark.style.width = (6 + Math.random() * 6) + 'px';
            spark.style.height = spark.style.width;
            energyContainer.appendChild(spark);

            setTimeout(() => {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates power-up sparks for inspiration boost
 */
function createPowerUpSparks() {
    const powerColors = ['#9c27b0', '#7b1fa2', '#673ab7', '#3f51b5', '#2196f3'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.className = 'energy-spark';
            spark.style.left = Math.random() * 100 + '%';
            spark.style.backgroundColor = powerColors[Math.floor(Math.random() * powerColors.length)];
            spark.style.borderRadius = '50%';
            spark.style.animationDuration = (3 + Math.random() * 2) + 's';
            spark.style.width = (5 + Math.random() * 4) + 'px';
            spark.style.height = spark.style.width;
            energyContainer.appendChild(spark);

            setTimeout(() => {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }, 5000);
        }, i * 50);
    }
}