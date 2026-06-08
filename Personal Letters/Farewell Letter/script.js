// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const farewellCard = document.getElementById('farewellCard');
const leavesContainer = document.getElementById('leavesContainer');

// Event Listeners
envelope.addEventListener('click', openFarewellLetter);

/**
 * Opens the farewell letter with gentle envelope animation
 */
function openFarewellLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        farewellCard.classList.add('show');
        createMemoryLeaves();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates drifting memory leaves effect
 */
function createMemoryLeaves() {
    const leaves = ['🍂', '🍃', '🌿', '🍁', '🌾'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const leaf = document.createElement('div');
            leaf.className = 'memory-leaf';
            leaf.style.left = Math.random() * 100 + '%';
            leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
            leaf.style.animationDelay = Math.random() * 3 + 's';
            leaf.style.animationDuration = (5 + Math.random() * 2) + 's';
            leaf.style.fontSize = (16 + Math.random() * 6) + 'px';
            leavesContainer.appendChild(leaf);

            setTimeout(() => {
                if (leaf.parentNode) {
                    leaf.parentNode.removeChild(leaf);
                }
            }, 7000);
        }, i * 150);
    }
}

/**
 * Clears all memory leaves
 */
function clearLeaves() {
    leavesContainer.innerHTML = '';
}

/**
 * Handles response to the farewell letter with appropriate feedback
 */
function handleResponse(response) {
    const wishesButton = document.querySelector('.wishes-button');
    const connectButton = document.querySelector('.connect-button');

    if (response === 'wishes') {
        wishesButton.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        wishesButton.textContent = 'Will Miss You! 💚';
        wishesButton.style.transform = 'scale(1.1)';
        connectButton.style.opacity = '0.5';

        // Create gratitude leaves
        createGratitudeLeaves();

        setTimeout(() => {
            wishesButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        connectButton.style.background = 'linear-gradient(135deg, #2196f3, #1976d2)';
        connectButton.textContent = 'Let\'s Keep in Touch! 🌐';
        wishesButton.style.opacity = '0.5';

        // Create connection leaves
        createConnectionLeaves();
    }
}

/**
 * Creates gratitude leaves for appreciation response
 */
function createGratitudeLeaves() {
    const gratitudeLeaves = ['💚', '🙏', '😊', '✨', '🌟'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const leaf = document.createElement('div');
            leaf.className = 'memory-leaf';
            leaf.style.left = Math.random() * 100 + '%';
            leaf.textContent = gratitudeLeaves[Math.floor(Math.random() * gratitudeLeaves.length)];
            leaf.style.animationDuration = (4 + Math.random() * 2) + 's';
            leaf.style.fontSize = (18 + Math.random() * 6) + 'px';
            leavesContainer.appendChild(leaf);

            setTimeout(() => {
                if (leaf.parentNode) {
                    leaf.parentNode.removeChild(leaf);
                }
            }, 6000);
        }, i * 60);
    }
}

/**
 * Creates connection leaves for staying in touch response
 */
function createConnectionLeaves() {
    const connectionLeaves = ['📱', '💻', '📧', '🌐', '🔗'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const leaf = document.createElement('div');
            leaf.className = 'memory-leaf';
            leaf.style.left = Math.random() * 100 + '%';
            leaf.textContent = connectionLeaves[Math.floor(Math.random() * connectionLeaves.length)];
            leaf.style.animationDuration = (4.5 + Math.random() * 2) + 's';
            leaf.style.fontSize = (17 + Math.random() * 5) + 'px';
            leavesContainer.appendChild(leaf);

            setTimeout(() => {
                if (leaf.parentNode) {
                    leaf.parentNode.removeChild(leaf);
                }
            }, 6500);
        }, i * 80);
    }
}