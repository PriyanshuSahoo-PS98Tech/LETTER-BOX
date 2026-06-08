// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const travelCard = document.getElementById('travelCard');
const cloudsContainer = document.getElementById('cloudsContainer');

// Event Listeners
envelope.addEventListener('click', openTravelLetter);

/**
 * Opens the travel letter with adventurous envelope animation
 */
function openTravelLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        travelCard.classList.add('show');
        createTravelClouds();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates drifting travel clouds effect
 */
function createTravelClouds() {
    const cloudSymbols = ['☁️', '⛅', '🌤️', '✈️'];

    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const cloud = document.createElement('div');
            cloud.className = 'travel-cloud';
            cloud.style.top = Math.random() * 70 + '%';
            cloud.textContent = cloudSymbols[Math.floor(Math.random() * cloudSymbols.length)];
            cloud.style.animationDelay = Math.random() * 5 + 's';
            cloud.style.animationDuration = (12 + Math.random() * 6) + 's';
            cloud.style.fontSize = (20 + Math.random() * 15) + 'px';
            cloudsContainer.appendChild(cloud);

            setTimeout(() => {
                if (cloud.parentNode) {
                    cloud.parentNode.removeChild(cloud);
                }
            }, 18000);
        }, i * 1000);
    }
}

/**
 * Clears all travel clouds
 */
function clearClouds() {
    cloudsContainer.innerHTML = '';
}

/**
 * Handles response to the travel letter with adventurous feedback
 */
function handleResponse(response) {
    const adventureButton = document.querySelector('.adventure-button');
    const planningButton = document.querySelector('.planning-button');

    if (response === 'adventure') {
        adventureButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        adventureButton.textContent = 'Adventure Begins! 🚀';
        adventureButton.style.transform = 'scale(1.1)';
        planningButton.style.opacity = '0.5';

        // Create adventure clouds
        createAdventureClouds();

        setTimeout(() => {
            adventureButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        planningButton.style.background = 'linear-gradient(135deg, #9c27b0, #7b1fa2)';
        planningButton.textContent = 'Planning Mode Activated! 📍';
        adventureButton.style.opacity = '0.5';

        // Create planning clouds
        createPlanningClouds();
    }
}

/**
 * Creates adventure clouds for enthusiastic response
 */
function createAdventureClouds() {
    const adventureSymbols = ['🎒', '🗺️', '📸', '🌍', '⛰️'];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const cloud = document.createElement('div');
            cloud.className = 'travel-cloud';
            cloud.style.top = Math.random() * 80 + '%';
            cloud.textContent = adventureSymbols[Math.floor(Math.random() * adventureSymbols.length)];
            cloud.style.animationDuration = (8 + Math.random() * 4) + 's';
            cloud.style.fontSize = (18 + Math.random() * 8) + 'px';
            cloud.style.color = ['#4caf50', '#388e3c', '#2e7d32', '#1b5e20'][Math.floor(Math.random() * 4)];
            cloudsContainer.appendChild(cloud);

            setTimeout(() => {
                if (cloud.parentNode) {
                    cloud.parentNode.removeChild(cloud);
                }
            }, 12000);
        }, i * 200);
    }
}

/**
 * Creates planning clouds for planning response
 */
function createPlanningClouds() {
    const planningSymbols = ['📋', '📍', '🗓️', '💼', '📱'];

    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const cloud = document.createElement('div');
            cloud.className = 'travel-cloud';
            cloud.style.top = Math.random() * 80 + '%';
            cloud.textContent = planningSymbols[Math.floor(Math.random() * planningSymbols.length)];
            cloud.style.animationDuration = (10 + Math.random() * 4) + 's';
            cloud.style.fontSize = (17 + Math.random() * 6) + 'px';
            cloud.style.color = ['#9c27b0', '#7b1fa2', '#6a1b9a', '#4a148c'][Math.floor(Math.random() * 4)];
            cloudsContainer.appendChild(cloud);

            setTimeout(() => {
                if (cloud.parentNode) {
                    cloud.parentNode.removeChild(cloud);
                }
            }, 14000);
        }, i * 250);
    }
}