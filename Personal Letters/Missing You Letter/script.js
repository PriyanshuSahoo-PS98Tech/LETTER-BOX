// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const missingCard = document.getElementById('missingCard');
const cloudsContainer = document.getElementById('cloudsContainer');

// Event Listeners
envelope.addEventListener('click', openMissingLetter);

/**
 * Opens the missing you letter with gentle envelope animation
 */
function openMissingLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        missingCard.classList.add('show');
        createGentleClouds();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates gentle drifting clouds effect
 */
function createGentleClouds() {
    const cloudSymbols = ['☁️', '🌤️', '⛅', '🌥️', '☁'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const cloud = document.createElement('div');
            cloud.className = 'gentle-cloud';
            cloud.style.top = Math.random() * 80 + 10 + '%';
            cloud.textContent = cloudSymbols[Math.floor(Math.random() * cloudSymbols.length)];
            cloud.style.animationDelay = Math.random() * 5 + 's';
            cloud.style.animationDuration = (12 + Math.random() * 6) + 's';
            cloud.style.fontSize = (16 + Math.random() * 6) + 'px';
            cloudsContainer.appendChild(cloud);

            setTimeout(() => {
                if (cloud.parentNode) {
                    cloud.parentNode.removeChild(cloud);
                }
            }, 18000);
        }, i * 300);
    }
}

/**
 * Clears all gentle clouds
 */
function clearClouds() {
    cloudsContainer.innerHTML = '';
}

/**
 * Handles response to the missing you letter with emotional feedback
 */
function handleResponse(response) {
    const missingButton = document.querySelector('.missing-button');
    const reunionButton = document.querySelector('.reunion-button');

    if (response === 'missing') {
        missingButton.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
        missingButton.textContent = 'My Heart Aches Too! 💕';
        missingButton.style.transform = 'scale(1.1)';
        reunionButton.style.opacity = '0.5';

        // Create emotional clouds
        createEmotionalClouds();

        setTimeout(() => {
            missingButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        reunionButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        reunionButton.textContent = 'See You Soon! ✈️';
        missingButton.style.opacity = '0.5';

        // Create hopeful clouds
        createHopefulClouds();
    }
}

/**
 * Creates emotional clouds for mutual missing response
 */
function createEmotionalClouds() {
    const emotionalSymbols = ['💔', '😢', '💙', '😔', '💭'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const cloud = document.createElement('div');
            cloud.className = 'gentle-cloud';
            cloud.style.top = Math.random() * 80 + 10 + '%';
            cloud.textContent = emotionalSymbols[Math.floor(Math.random() * emotionalSymbols.length)];
            cloud.style.animationDuration = (10 + Math.random() * 4) + 's';
            cloud.style.fontSize = (17 + Math.random() * 5) + 'px';
            cloud.style.color = ['#ff6b6b', '#6495ed', '#da70d6'][Math.floor(Math.random() * 3)];
            cloudsContainer.appendChild(cloud);

            setTimeout(() => {
                if (cloud.parentNode) {
                    cloud.parentNode.removeChild(cloud);
                }
            }, 14000);
        }, i * 80);
    }
}

/**
 * Creates hopeful clouds for reunion planning response
 */
function createHopefulClouds() {
    const hopefulSymbols = ['🌈', '✈️', '🎉', '😊', '💚'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const cloud = document.createElement('div');
            cloud.className = 'gentle-cloud';
            cloud.style.top = Math.random() * 80 + 10 + '%';
            cloud.textContent = hopefulSymbols[Math.floor(Math.random() * hopefulSymbols.length)];
            cloud.style.animationDuration = (8 + Math.random() * 4) + 's';
            cloud.style.fontSize = (18 + Math.random() * 6) + 'px';
            cloud.style.color = ['#4caf50', '#ffd700', '#ff8c00'][Math.floor(Math.random() * 3)];
            cloudsContainer.appendChild(cloud);

            setTimeout(() => {
                if (cloud.parentNode) {
                    cloud.parentNode.removeChild(cloud);
                }
            }, 12000);
        }, i * 100);
    }
}