// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const reunionCard = document.getElementById('reunionCard');
const bubblesContainer = document.getElementById('bubblesContainer');

// Event Listeners
envelope.addEventListener('click', openReunionInvitation);

/**
 * Opens the reunion invitation with nostalgic envelope animation
 */
function openReunionInvitation() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        reunionCard.classList.add('show');
        createMemoryBubbles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates nostalgic memory bubbles effect
 */
function createMemoryBubbles() {
    const colors = ['rgba(255,123,123,0.3)', 'rgba(102,126,234,0.3)', 'rgba(240,147,251,0.3)', 'rgba(83,160,253,0.3)', 'rgba(212,165,116,0.3)'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'memory-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
            bubble.style.animationDelay = Math.random() * 3 + 's';
            bubble.style.animationDuration = (5 + Math.random() * 3) + 's';

            const size = 20 + Math.random() * 40;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';

            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 8000);
        }, i * 200);
    }
}

/**
 * Clears all memory bubbles
 */
function clearBubbles() {
    bubblesContainer.innerHTML = '';
}

/**
 * Handles response to the reunion invitation with appropriate feedback
 */
function handleResponse(response) {
    const attendButton = document.querySelector('.attend-button');
    const maybeButton = document.querySelector('.maybe-button');

    if (response === 'attend') {
        attendButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        attendButton.textContent = 'See You There! 🎊';
        attendButton.style.transform = 'scale(1.1)';
        maybeButton.style.opacity = '0.5';

        // Create celebration bubbles
        createCelebrationBubbles();

        setTimeout(() => {
            attendButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        maybeButton.style.background = 'linear-gradient(135deg, #ff9800, #f57c00)';
        maybeButton.textContent = 'Hope You Can Make It! 🤞';
        attendButton.style.opacity = '0.5';

        // Create hopeful bubbles
        createHopefulBubbles();
    }
}

/**
 * Creates celebration bubbles for confirmed attendance
 */
function createCelebrationBubbles() {
    const celebrationColors = ['rgba(76,175,80,0.4)', 'rgba(56,142,60,0.4)', 'rgba(255,193,7,0.4)', 'rgba(255,152,0,0.4)'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'memory-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.background = celebrationColors[Math.floor(Math.random() * celebrationColors.length)];
            bubble.style.animationDuration = (3 + Math.random() * 2) + 's';

            const size = 15 + Math.random() * 25;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';

            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 5000);
        }, i * 75);
    }
}

/**
 * Creates hopeful bubbles for maybe response
 */
function createHopefulBubbles() {
    const hopefulColors = ['rgba(255,152,0,0.4)', 'rgba(245,124,0,0.4)', 'rgba(255,193,7,0.4)', 'rgba(255,235,59,0.4)'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'memory-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.background = hopefulColors[Math.floor(Math.random() * hopefulColors.length)];
            bubble.style.animationDuration = (4 + Math.random() * 2) + 's';

            const size = 18 + Math.random() * 30;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';

            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 6000);
        }, i * 100);
    }
}