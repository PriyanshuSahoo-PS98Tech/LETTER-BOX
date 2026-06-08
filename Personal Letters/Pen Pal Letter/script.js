// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const penpalCard = document.getElementById('penpalCard');
const planesContainer = document.getElementById('planesContainer');

// Event Listeners
envelope.addEventListener('click', openPenpalLetter);

/**
 * Opens the pen pal letter with travel-themed envelope animation
 */
function openPenpalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        penpalCard.classList.add('show');
        createPaperPlanes();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates flying paper planes effect
 */
function createPaperPlanes() {
    const planes = ['✈️', '🛩️', '📨', '💌', '📮'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const plane = document.createElement('div');
            plane.className = 'paper-plane';
            plane.style.top = (20 + Math.random() * 60) + '%';
            plane.textContent = planes[Math.floor(Math.random() * planes.length)];
            plane.style.animationDelay = Math.random() * 3 + 's';
            plane.style.animationDuration = (4 + Math.random() * 3) + 's';
            plane.style.fontSize = (18 + Math.random() * 6) + 'px';
            planesContainer.appendChild(plane);

            setTimeout(() => {
                if (plane.parentNode) {
                    plane.parentNode.removeChild(plane);
                }
            }, 7000);
        }, i * 300);
    }
}

/**
 * Clears all paper planes
 */
function clearPlanes() {
    planesContainer.innerHTML = '';
}

/**
 * Handles response to the pen pal letter with appropriate feedback
 */
function handleResponse(response) {
    const writeButton = document.querySelector('.write-button');
    const connectButton = document.querySelector('.connect-button');

    if (response === 'write') {
        writeButton.style.background = 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
        writeButton.textContent = 'Letter on the Way! 📬';
        writeButton.style.transform = 'scale(1.1)';
        connectButton.style.opacity = '0.5';

        // Create writing planes
        createWritingPlanes();

        setTimeout(() => {
            writeButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        connectButton.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        connectButton.textContent = 'Cultural Exchange! 🌐';
        writeButton.style.opacity = '0.5';

        // Create culture planes
        createCulturePlanes();
    }
}

/**
 * Creates writing planes for letter response
 */
function createWritingPlanes() {
    const writingPlanes = ['✍️', '📝', '💌', '📮', '📬'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const plane = document.createElement('div');
            plane.className = 'paper-plane';
            plane.style.top = (10 + Math.random() * 80) + '%';
            plane.textContent = writingPlanes[Math.floor(Math.random() * writingPlanes.length)];
            plane.style.animationDuration = (3 + Math.random() * 2) + 's';
            plane.style.fontSize = (20 + Math.random() * 6) + 'px';
            planesContainer.appendChild(plane);

            setTimeout(() => {
                if (plane.parentNode) {
                    plane.parentNode.removeChild(plane);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Creates culture planes for cultural exchange response
 */
function createCulturePlanes() {
    const culturePlanes = ['🌍', '🗺️', '🎭', '🎨', '🍜'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const plane = document.createElement('div');
            plane.className = 'paper-plane';
            plane.style.top = (15 + Math.random() * 70) + '%';
            plane.textContent = culturePlanes[Math.floor(Math.random() * culturePlanes.length)];
            plane.style.animationDuration = (4 + Math.random() * 2) + 's';
            plane.style.fontSize = (19 + Math.random() * 5) + 'px';
            planesContainer.appendChild(plane);

            setTimeout(() => {
                if (plane.parentNode) {
                    plane.parentNode.removeChild(plane);
                }
            }, 6000);
        }, i * 120);
    }
}