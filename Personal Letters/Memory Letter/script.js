// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const memoryCard = document.getElementById('memoryCard');
const memoriesContainer = document.getElementById('memoriesContainer');

// Event Listeners
envelope.addEventListener('click', openMemoryLetter);

/**
 * Opens the memory letter with nostalgic envelope animation
 */
function openMemoryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        memoryCard.classList.add('show');
        createMemoryEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates nostalgic floating memory effects
 */
function createMemoryEffects() {
    const memoryIcons = ['📸', '🎭', '🌟', '🎪', '🏛️', '📖', '🎨'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const memory = document.createElement('div');
            memory.className = 'memory-effect';
            memory.style.left = Math.random() * 100 + '%';
            memory.textContent = memoryIcons[Math.floor(Math.random() * memoryIcons.length)];
            memory.style.animationDelay = Math.random() * 2 + 's';
            memory.style.animationDuration = (3 + Math.random() * 2) + 's';
            memory.style.fontSize = (16 + Math.random() * 8) + 'px';
            memoriesContainer.appendChild(memory);

            setTimeout(() => {
                if (memory.parentNode) {
                    memory.parentNode.removeChild(memory);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Clears all memory effects
 */
function clearMemories() {
    memoriesContainer.innerHTML = '';
}

/**
 * Handles response to the memory letter with nostalgic feedback
 */
function handleResponse(response) {
    const memoryButton = document.querySelector('.memory-button');
    const treasureButton = document.querySelector('.treasure-button');

    if (response === 'memory') {
        memoryButton.style.background = 'linear-gradient(135deg, #d2691e, #8b4513)';
        memoryButton.textContent = 'Unforgettable Moments! 🎭';
        memoryButton.style.transform = 'scale(1.1)';
        treasureButton.style.opacity = '0.5';

        // Create nostalgic effects
        createNostalgicEffects();

        setTimeout(() => {
            memoryButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        treasureButton.style.background = 'linear-gradient(135deg, #daa520, #b8860b)';
        treasureButton.textContent = 'Eternal Treasures 💎';
        memoryButton.style.opacity = '0.5';

        // Create treasure effects
        createTreasureEffects();
    }
}

/**
 * Creates nostalgic effects for memory response
 */
function createNostalgicEffects() {
    const nostalgicIcons = ['📸', '🎭', '🌟', '🎪', '🏛️'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const effect = document.createElement('div');
            effect.className = 'memory-effect';
            effect.style.left = Math.random() * 100 + '%';
            effect.textContent = nostalgicIcons[Math.floor(Math.random() * nostalgicIcons.length)];
            effect.style.animationDuration = (2 + Math.random() * 2) + 's';
            effect.style.fontSize = (18 + Math.random() * 10) + 'px';
            memoriesContainer.appendChild(effect);

            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 4000);
        }, i * 30);
    }
}

/**
 * Creates treasure effects for treasure response
 */
function createTreasureEffects() {
    const treasureIcons = ['💎', '🏆', '🎖️', '👑', '🏛️'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const treasure = document.createElement('div');
            treasure.className = 'memory-effect';
            treasure.style.left = Math.random() * 100 + '%';
            treasure.textContent = treasureIcons[Math.floor(Math.random() * treasureIcons.length)];
            treasure.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            treasure.style.fontSize = (17 + Math.random() * 6) + 'px';
            memoriesContainer.appendChild(treasure);

            setTimeout(() => {
                if (treasure.parentNode) {
                    treasure.parentNode.removeChild(treasure);
                }
            }, 5500);
        }, i * 50);
    }
}