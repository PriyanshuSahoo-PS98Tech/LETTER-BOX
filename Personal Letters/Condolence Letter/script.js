// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const condolenceCard = document.getElementById('condolenceCard');
const peacefulContainer = document.getElementById('peacefulContainer');

// Event Listeners
envelope.addEventListener('click', openCondolence);

/**
 * Opens the condolence letter with gentle envelope animation
 */
function openCondolence() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 800);

    setTimeout(() => {
        condolenceCard.classList.add('show');
        createPeacefulParticles();
        document.body.style.overflow = 'hidden';
    }, 1000);
}

/**
 * Creates gentle peaceful particles effect
 */
function createPeacefulParticles() {
    const colors = ['#ced4da', '#adb5bd', '#dee2e6', '#e9ecef', '#f8f9fa'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'peaceful-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (5 + Math.random() * 2) + 's';
            particle.style.width = (3 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            peacefulContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }, i * 200);
    }
}

/**
 * Clears all peaceful particles
 */
function clearParticles() {
    peacefulContainer.innerHTML = '';
}

/**
 * Handles response to the condolence with appropriate feedback
 */
function handleResponse(response) {
    const supportButton = document.querySelector('.support-button');
    const memoryButton = document.querySelector('.memory-button');

    if (response === 'support') {
        supportButton.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        supportButton.textContent = 'Your Support Means Everything 💚';
        supportButton.style.transform = 'scale(1.05)';
        memoryButton.style.opacity = '0.6';

        // Create comforting particles
        createComfortingParticles();

        setTimeout(() => {
            supportButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        memoryButton.style.background = 'linear-gradient(135deg, #6f42c1, #5a67d8)';
        memoryButton.textContent = 'Treasuring Memories 🌟';
        supportButton.style.opacity = '0.6';

        // Create memory particles
        createMemoryParticles();
    }
}

/**
 * Creates comforting particles for support response
 */
function createComfortingParticles() {
    const comfortColors = ['#28a745', '#20c997', '#17a2b8', '#6f9bd1', '#a8dadc'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'peaceful-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = comfortColors[Math.floor(Math.random() * comfortColors.length)];
            particle.style.borderRadius = '50%';
            particle.style.animationDuration = (4 + Math.random() * 2) + 's';
            particle.style.width = (5 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            peacefulContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }, i * 80);
    }
}

/**
 * Creates memory particles for remembrance
 */
function createMemoryParticles() {
    const memoryColors = ['#6f42c1', '#5a67d8', '#4c6ef5', '#74c0fc', '#a5b4fc'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'peaceful-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.backgroundColor = memoryColors[Math.floor(Math.random() * memoryColors.length)];
            particle.style.borderRadius = '50%';
            particle.style.animationDuration = (5 + Math.random() * 2) + 's';
            particle.style.width = (4 + Math.random() * 2) + 'px';
            particle.style.height = particle.style.width;
            peacefulContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }, i * 100);
    }
}