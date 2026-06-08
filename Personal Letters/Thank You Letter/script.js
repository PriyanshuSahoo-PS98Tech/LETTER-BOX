// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const thankyouCard = document.getElementById('thankyouCard');
const glowContainer = document.getElementById('glowContainer');

// Event Listeners
envelope.addEventListener('click', openThankYou);

/**
 * Opens the thank you letter with warm envelope animation
 */
function openThankYou() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        thankyouCard.classList.add('show');
        createWarmGlow();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates warm rising glow effect
 */
function createWarmGlow() {
    const colors = ['#fbbf24', '#f59e0b', '#d97706', '#fb923c', '#fed7aa'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const glow = document.createElement('div');
            glow.className = 'warm-glow';
            glow.style.left = Math.random() * 100 + '%';
            glow.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            glow.style.animationDelay = Math.random() * 2 + 's';
            glow.style.animationDuration = (3 + Math.random() * 2) + 's';
            glow.style.width = (6 + Math.random() * 4) + 'px';
            glow.style.height = glow.style.width;
            glowContainer.appendChild(glow);

            setTimeout(() => {
                if (glow.parentNode) {
                    glow.parentNode.removeChild(glow);
                }
            }, 5000);
        }, i * 120);
    }
}

/**
 * Clears all glow effects
 */
function clearGlow() {
    glowContainer.innerHTML = '';
}

/**
 * Handles response to the thank you with appropriate feedback
 */
function handleResponse(response) {
    const welcomeButton = document.querySelector('.welcome-button');
    const shareButton = document.querySelector('.share-button');

    if (response === 'welcome') {
        welcomeButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        welcomeButton.textContent = 'Happy to Help! 😊';
        welcomeButton.style.transform = 'scale(1.1)';
        shareButton.style.opacity = '0.5';

        // Create appreciation glow
        createAppreciationGlow();

        setTimeout(() => {
            welcomeButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        shareButton.style.background = 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
        shareButton.textContent = 'Spreading Kindness 🌈';
        welcomeButton.style.opacity = '0.5';

        // Create sharing glow
        createSharingGlow();
    }
}

/**
 * Creates appreciation glow for welcome response
 */
function createAppreciationGlow() {
    const appreciationColors = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const glow = document.createElement('div');
            glow.className = 'warm-glow';
            glow.style.left = Math.random() * 100 + '%';
            glow.style.backgroundColor = appreciationColors[Math.floor(Math.random() * appreciationColors.length)];
            glow.style.borderRadius = '50%';
            glow.style.animationDuration = (2.5 + Math.random() * 2) + 's';
            glow.style.width = (8 + Math.random() * 4) + 'px';
            glow.style.height = glow.style.width;
            glowContainer.appendChild(glow);

            setTimeout(() => {
                if (glow.parentNode) {
                    glow.parentNode.removeChild(glow);
                }
            }, 4500);
        }, i * 50);
    }
}

/**
 * Creates sharing glow for spreading kindness
 */
function createSharingGlow() {
    const sharingColors = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#f3f4f6'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const glow = document.createElement('div');
            glow.className = 'warm-glow';
            glow.style.left = Math.random() * 100 + '%';
            glow.style.backgroundColor = sharingColors[Math.floor(Math.random() * sharingColors.length)];
            glow.style.borderRadius = '50%';
            glow.style.animationDuration = (3 + Math.random() * 2) + 's';
            glow.style.width = (7 + Math.random() * 3) + 'px';
            glow.style.height = glow.style.width;
            glowContainer.appendChild(glow);

            setTimeout(() => {
                if (glow.parentNode) {
                    glow.parentNode.removeChild(glow);
                }
            }, 5000);
        }, i * 70);
    }
}