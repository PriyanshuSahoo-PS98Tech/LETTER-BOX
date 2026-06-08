// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const reflectionCard = document.getElementById('reflectionCard');
const contemplationContainer = document.getElementById('contemplationContainer');

// Event Listeners
envelope.addEventListener('click', openReflectionLetter);

/**
 * Opens the reflection letter with graceful envelope animation
 */
function openReflectionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        reflectionCard.classList.add('show');
        createContemplationEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates graceful floating contemplation effects
 */
function createContemplationEffects() {
    const effectTypes = ['orb', 'wave', 'orb', 'wave', 'orb'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const effect = document.createElement('div');
            effect.className = 'contemplation-effect';

            const type = effectTypes[Math.floor(Math.random() * effectTypes.length)];
            if (type === 'orb') {
                effect.innerHTML = '<div class="floating-orb"></div>';
            } else {
                effect.innerHTML = '<div class="floating-wave"></div>';
            }

            effect.style.left = Math.random() * 100 + '%';
            effect.style.animationDelay = Math.random() * 3 + 's';
            effect.style.animationDuration = (4 + Math.random() * 3) + 's';
            contemplationContainer.appendChild(effect);

            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 7000);
        }, i * 150);
    }
}

/**
 * Clears all contemplation effects
 */
function clearContemplation() {
    contemplationContainer.innerHTML = '';
}

/**
 * Handles response to the reflection letter with thoughtful feedback
 */
function handleResponse(response) {
    const insightButton = document.querySelector('.insight-button');
    const wisdomButton = document.querySelector('.wisdom-button');

    if (response === 'insight') {
        insightButton.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
        insightButton.textContent = 'Enlightening Thoughts! 🌟';
        insightButton.style.transform = 'scale(1.1)';
        wisdomButton.style.opacity = '0.5';

        // Create insight effects
        createInsightEffects();

        setTimeout(() => {
            insightButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        wisdomButton.style.background = 'linear-gradient(135deg, #4facfe, #00f2fe)';
        wisdomButton.textContent = 'Profound Understanding! 🔮';
        insightButton.style.opacity = '0.5';

        // Create wisdom effects
        createWisdomEffects();
    }
}

/**
 * Creates insight effects for contemplation response
 */
function createInsightEffects() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const insight = document.createElement('div');
            insight.className = 'contemplation-effect';
            insight.innerHTML = '<div class="floating-orb" style="background: radial-gradient(circle, rgba(240, 147, 251, 0.8), rgba(245, 87, 108, 0.3)); box-shadow: 0 0 15px rgba(240, 147, 251, 0.7);"></div>';
            insight.style.left = Math.random() * 100 + '%';
            insight.style.animationDuration = (3 + Math.random() * 2) + 's';
            contemplationContainer.appendChild(insight);

            setTimeout(() => {
                if (insight.parentNode) {
                    insight.parentNode.removeChild(insight);
                }
            }, 5000);
        }, i * 40);
    }
}

/**
 * Creates wisdom effects for wisdom response
 */
function createWisdomEffects() {
    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            const wisdom = document.createElement('div');
            wisdom.className = 'contemplation-effect';

            if (i % 2 === 0) {
                wisdom.innerHTML = '<div class="floating-wave" style="background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.8), transparent);"></div>';
            } else {
                wisdom.innerHTML = '<div class="floating-orb" style="background: radial-gradient(circle, rgba(79, 172, 254, 0.8), rgba(0, 242, 254, 0.3)); box-shadow: 0 0 12px rgba(79, 172, 254, 0.6);"></div>';
            }

            wisdom.style.left = Math.random() * 100 + '%';
            wisdom.style.animationDuration = (4 + Math.random() * 2) + 's';
            contemplationContainer.appendChild(wisdom);

            setTimeout(() => {
                if (wisdom.parentNode) {
                    wisdom.parentNode.removeChild(wisdom);
                }
            }, 6000);
        }, i * 60);
    }
}