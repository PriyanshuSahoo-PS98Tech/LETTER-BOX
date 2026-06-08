// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const sympathyCard = document.getElementById('sympathyCard');
const bubblesContainer = document.getElementById('bubblesContainer');

// Event Listeners
envelope.addEventListener('click', openSympathyLetter);

/**
 * Opens the sympathy letter with gentle envelope animation
 */
function openSympathyLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 800);

    setTimeout(() => {
        sympathyCard.classList.add('show');
        createGentleBubbles();
        document.body.style.overflow = 'hidden';
    }, 1000);
}

/**
 * Creates gentle rising bubbles effect
 */
function createGentleBubbles() {
    const colors = ['#e3f2fd', '#bbdefb', '#90caf9', '#d1c4e9', '#e1bee7'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'gentle-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            bubble.style.animationDelay = Math.random() * 3 + 's';
            bubble.style.animationDuration = (5 + Math.random() * 2) + 's';
            bubble.style.width = (4 + Math.random() * 4) + 'px';
            bubble.style.height = bubble.style.width;
            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 7000);
        }, i * 200);
    }
}

/**
 * Clears all gentle bubbles
 */
function clearBubbles() {
    bubblesContainer.innerHTML = '';
}

/**
 * Handles response to the sympathy letter with appropriate feedback
 */
function handleResponse(response) {
    const comfortButton = document.querySelector('.comfort-button');
    const supportButton = document.querySelector('.support-button');

    if (response === 'comfort') {
        comfortButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        comfortButton.textContent = 'Feeling Your Love 💚';
        comfortButton.style.transform = 'scale(1.05)';
        supportButton.style.opacity = '0.6';

        // Create healing bubbles
        createHealingBubbles();

        setTimeout(() => {
            comfortButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        supportButton.style.background = 'linear-gradient(135deg, #ff7043, #f4511e)';
        supportButton.textContent = 'Here for You Always 🤗';
        comfortButton.style.opacity = '0.6';

        // Create support bubbles
        createSupportBubbles();
    }
}

/**
 * Creates healing bubbles for gratitude response
 */
function createHealingBubbles() {
    const healingColors = ['#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'gentle-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.backgroundColor = healingColors[Math.floor(Math.random() * healingColors.length)];
            bubble.style.borderRadius = '50%';
            bubble.style.animationDuration = (4 + Math.random() * 2) + 's';
            bubble.style.width = (6 + Math.random() * 4) + 'px';
            bubble.style.height = bubble.style.width;
            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 6000);
        }, i * 80);
    }
}

/**
 * Creates support bubbles for need help response
 */
function createSupportBubbles() {
    const supportColors = ['#ff7043', '#ff8a65', '#ffab91', '#ffccbc', '#fbe9e7'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'gentle-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.backgroundColor = supportColors[Math.floor(Math.random() * supportColors.length)];
            bubble.style.borderRadius = '50%';
            bubble.style.animationDuration = (5 + Math.random() * 2) + 's';
            bubble.style.width = (5 + Math.random() * 3) + 'px';
            bubble.style.height = bubble.style.width;
            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 7000);
        }, i * 100);
    }
}