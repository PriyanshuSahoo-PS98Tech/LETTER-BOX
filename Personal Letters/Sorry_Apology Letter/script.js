
// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const apologyCard = document.getElementById('apologyCard');
const particlesContainer = document.getElementById('particlesContainer');

// Event Listeners
envelope.addEventListener('click', openApology);

/**
 * Opens the apology letter with gentle envelope animation
 */
function openApology() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        apologyCard.classList.add('show');
        createGentleParticles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates gentle falling particles effect
 */
function createGentleParticles() {
    const colors = ['#9bb5d6', '#cbc0d3', '#d1d5db', '#e5e7eb', '#f3f4f6'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'gentle-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animationDuration = (4 + Math.random() * 2) + 's';
            particle.style.width = (4 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }, i * 150);
    }
}

/**
 * Clears all particles
 */
function clearParticles() {
    particlesContainer.innerHTML = '';
}

/**
 * Handles response to the apology with appropriate feedback
 */
function handleResponse(response) {
    const forgiveButton = document.querySelector('.forgive-button');
    const timeButton = document.querySelector('.time-button');

    if (response === 'forgive') {
        forgiveButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        forgiveButton.textContent = 'Forgiveness Given 🕊️';
        forgiveButton.style.transform = 'scale(1.1)';
        timeButton.style.opacity = '0.5';

        // Create healing particles
        createHealingParticles();

        setTimeout(() => {
            forgiveButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        timeButton.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        timeButton.textContent = 'Space Needed 🌱';
        forgiveButton.style.opacity = '0.5';

        // Create understanding particles
        createUnderstandingParticles();
    }
}

/**
 * Creates healing particles for forgiveness
 */
function createHealingParticles() {
    const healingColors = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'gentle-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = healingColors[Math.floor(Math.random() * healingColors.length)];
            particle.style.borderRadius = '50%';
            particle.style.animationDuration = (3 + Math.random() * 2) + 's';
            particle.style.width = (6 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 5000);
        }, i * 60);
    }
}

/**
 * Creates understanding particles for needing time
 */
function createUnderstandingParticles() {
    const understandingColors = ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a', '#fef3c7'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'gentle-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = understandingColors[Math.floor(Math.random() * understandingColors.length)];
            particle.style.borderRadius = '50%';
            particle.style.animationDuration = (4 + Math.random() * 2) + 's';
            particle.style.width = (5 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }, i * 80);
    }
}