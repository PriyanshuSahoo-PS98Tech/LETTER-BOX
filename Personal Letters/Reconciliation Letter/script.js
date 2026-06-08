// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const reconciliationCard = document.getElementById('reconciliationCard');
const peaceContainer = document.getElementById('peaceContainer');

// Event Listeners
envelope.addEventListener('click', openReconciliation);

/**
 * Opens the reconciliation letter with gentle envelope animation
 */
function openReconciliation() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 800);

    setTimeout(() => {
        reconciliationCard.classList.add('show');
        createPeacefulParticles();
        document.body.style.overflow = 'hidden';
    }, 1000);
}

/**
 * Creates gentle peaceful particles effect
 */
function createPeacefulParticles() {
    const colors = ['#81c784', '#66bb6a', '#4caf50', '#c8e6c9', '#e8f5e8'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'peace-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (6 + Math.random() * 2) + 's';
            particle.style.width = (3 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            peaceContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 8000);
        }, i * 250);
    }
}

/**
 * Clears all peaceful particles
 */
function clearParticles() {
    peaceContainer.innerHTML = '';
}

/**
 * Handles response to the reconciliation with appropriate feedback
 */
function handleResponse(response) {
    const acceptButton = document.querySelector('.accept-button');
    const considerButton = document.querySelector('.consider-button');

    if (response === 'accept') {
        acceptButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        acceptButton.textContent = 'Our Journey Begins! 🌱';
        acceptButton.style.transform = 'scale(1.05)';
        considerButton.style.opacity = '0.6';

        // Create healing particles
        createHealingParticles();

        setTimeout(() => {
            acceptButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        considerButton.style.background = 'linear-gradient(135deg, #ff9800, #f57c00)';
        considerButton.textContent = 'Understanding Your Need 🙏';
        acceptButton.style.opacity = '0.6';

        // Create patience particles
        createPatienceParticles();
    }
}

/**
 * Creates healing particles for acceptance response
 */
function createHealingParticles() {
    const healingColors = ['#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'peace-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = healingColors[Math.floor(Math.random() * healingColors.length)];
            particle.style.borderRadius = '50%';
            particle.style.animationDuration = (5 + Math.random() * 2) + 's';
            particle.style.width = (5 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            peaceContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }, i * 80);
    }
}

/**
 * Creates patience particles for time needed response
 */
function createPatienceParticles() {
    const patienceColors = ['#ff9800', '#ffb74d', '#ffcc02', '#ffe082', '#fff3c4'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'peace-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = patienceColors[Math.floor(Math.random() * patienceColors.length)];
            particle.style.borderRadius = '50%';
            particle.style.animationDuration = (6 + Math.random() * 2) + 's';
            particle.style.width = (4 + Math.random() * 2) + 'px';
            particle.style.height = particle.style.width;
            peaceContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 8000);
        }, i * 100);
    }
}