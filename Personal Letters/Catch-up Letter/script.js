// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const catchupCard = document.getElementById('catchupCard');
const bubblesContainer = document.getElementById('bubblesContainer');

// Event Listeners
envelope.addEventListener('click', openCatchupLetter);

/**
 * Opens the catch-up letter with friendly envelope animation
 */
function openCatchupLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        catchupCard.classList.add('show');
        createConnectionBubbles();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates rising connection bubbles effect
 */
function createConnectionBubbles() {
    const colors = ['#66a6ff', '#ff6b9d', '#89f7fe', '#a8edea', '#d299c2'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'connection-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            bubble.style.animationDelay = Math.random() * 3 + 's';
            bubble.style.animationDuration = (4 + Math.random() * 2) + 's';
            bubble.style.width = (8 + Math.random() * 6) + 'px';
            bubble.style.height = bubble.style.width;
            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 6000);
        }, i * 150);
    }
}

/**
 * Clears all connection bubbles
 */
function clearBubbles() {
    bubblesContainer.innerHTML = '';
}

/**
 * Handles response to the catch-up letter with appropriate feedback
 */
function handleResponse(response) {
    const replyButton = document.querySelector('.reply-button');
    const callButton = document.querySelector('.call-button');

    if (response === 'reply') {
        replyButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        replyButton.textContent = 'Perfect! Looking Forward to It! 💚';
        replyButton.style.transform = 'scale(1.1)';
        callButton.style.opacity = '0.5';

        // Create chat bubbles
        createChatBubbles();

        setTimeout(() => {
            replyButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        callButton.style.background = 'linear-gradient(135deg, #ff9800, #f57c00)';
        callButton.textContent = 'Can\'t Wait to Hear Your Voice! 🧡';
        replyButton.style.opacity = '0.5';

        // Create call bubbles
        createCallBubbles();
    }
}

/**
 * Creates chat bubbles for messaging response
 */
function createChatBubbles() {
    const chatColors = ['#4caf50', '#8bc34a', '#cddc39', '#00bcd4', '#03a9f4'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'connection-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.backgroundColor = chatColors[Math.floor(Math.random() * chatColors.length)];
            bubble.style.borderRadius = Math.random() > 0.5 ? '50%' : '20%';
            bubble.style.animationDuration = (3 + Math.random() * 2) + 's';
            bubble.style.width = (10 + Math.random() * 8) + 'px';
            bubble.style.height = bubble.style.width;
            bubblesContainer.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 5000);
        }, i * 60);
    }
}

/**
 * Creates call bubbles for phone response
 */
function createCallBubbles() {
    const callColors = ['#ff9800', '#f57c00', '#ff5722', '#e64a19', '#d84315'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'connection-bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.backgroundColor = callColors[Math.floor(Math.random() * callColors.length)];
            bubble.style.borderRadius = '50%';
            bubble.style.animationDuration = (4 + Math.random() * 2) + 's';
            bubble.style.width = (9 + Math.random() * 5) + 'px';
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