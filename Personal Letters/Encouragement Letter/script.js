// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const encouragementCard = document.getElementById('encouragementCard');
const raysContainer = document.getElementById('raysContainer');

// Event Listeners
envelope.addEventListener('click', openEncouragementLetter);

/**
 * Opens the encouragement letter with uplifting envelope animation
 */
function openEncouragementLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        encouragementCard.classList.add('show');
        createUpliftingRays();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates uplifting rays of light effect
 */
function createUpliftingRays() {
    const colors = ['#ffa726', '#ff7043', '#42a5f5', '#66bb6a', '#ffeb3b'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const ray = document.createElement('div');
            ray.className = 'uplifting-ray';
            ray.style.left = Math.random() * 100 + '%';
            ray.style.background = `linear-gradient(to bottom, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
            ray.style.animationDelay = Math.random() * 2 + 's';
            ray.style.animationDuration = (3 + Math.random() * 2) + 's';
            ray.style.width = (2 + Math.random() * 3) + 'px';
            ray.style.height = (60 + Math.random() * 40) + 'px';
            raysContainer.appendChild(ray);

            setTimeout(() => {
                if (ray.parentNode) {
                    ray.parentNode.removeChild(ray);
                }
            }, 5000);
        }, i * 150);
    }
}

/**
 * Clears all uplifting rays
 */
function clearRays() {
    raysContainer.innerHTML = '';
}

/**
 * Handles response to the encouragement with motivational feedback
 */
function handleResponse(response) {
    const inspiredButton = document.querySelector('.inspired-button');
    const strongerButton = document.querySelector('.stronger-button');

    if (response === 'inspired') {
        inspiredButton.style.background = 'linear-gradient(135deg, #ff5722, #bf360c)';
        inspiredButton.textContent = 'Ready to Conquer! 🎯';
        inspiredButton.style.transform = 'scale(1.1)';
        strongerButton.style.opacity = '0.5';

        // Create inspiration rays
        createInspirationRays();

        setTimeout(() => {
            inspiredButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        strongerButton.style.background = 'linear-gradient(135deg, #2e7d32, #1b5e20)';
        strongerButton.textContent = 'Unstoppable Force! 🏆';
        inspiredButton.style.opacity = '0.5';

        // Create strength rays
        createStrengthRays();
    }
}

/**
 * Creates inspiration rays for motivated response
 */
function createInspirationRays() {
    const inspirationColors = ['#ff5722', '#ff9800', '#ffc107', '#ffeb3b', '#cddc39'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const ray = document.createElement('div');
            ray.className = 'uplifting-ray';
            ray.style.left = Math.random() * 100 + '%';
            ray.style.background = `linear-gradient(to bottom, ${inspirationColors[Math.floor(Math.random() * inspirationColors.length)]}, transparent)`;
            ray.style.animationDuration = (2 + Math.random() * 2) + 's';
            ray.style.width = (3 + Math.random() * 4) + 'px';
            ray.style.height = (80 + Math.random() * 60) + 'px';
            raysContainer.appendChild(ray);

            setTimeout(() => {
                if (ray.parentNode) {
                    ray.parentNode.removeChild(ray);
                }
            }, 4000);
        }, i * 50);
    }
}

/**
 * Creates strength rays for empowered response
 */
function createStrengthRays() {
    const strengthColors = ['#2e7d32', '#388e3c', '#4caf50', '#66bb6a', '#81c784'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const ray = document.createElement('div');
            ray.className = 'uplifting-ray';
            ray.style.left = Math.random() * 100 + '%';
            ray.style.background = `linear-gradient(to bottom, ${strengthColors[Math.floor(Math.random() * strengthColors.length)]}, transparent)`;
            ray.style.animationDuration = (3 + Math.random() * 2) + 's';
            ray.style.width = (4 + Math.random() * 3) + 'px';
            ray.style.height = (70 + Math.random() * 50) + 'px';
            raysContainer.appendChild(ray);

            setTimeout(() => {
                if (ray.parentNode) {
                    ray.parentNode.removeChild(ray);
                }
            }, 5000);
        }, i * 60);
    }
}