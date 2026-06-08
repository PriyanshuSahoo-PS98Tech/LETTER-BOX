// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const blessingCard = document.getElementById('blessingCard');
const divineContainer = document.getElementById('divineContainer');

// Event Listeners
envelope.addEventListener('click', openBlessingLetter);

/**
 * Opens the blessing letter with divine envelope animation
 */
function openBlessingLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        blessingCard.classList.add('show');
        createDivineEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates divine floating blessing effects
 */
function createDivineEffects() {
    const divineSymbols = ['✞', '🕊️', '✨', '👼', '☩', '✝', '🌟'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const divine = document.createElement('div');
            divine.className = 'divine-effect';
            divine.style.left = Math.random() * 100 + '%';
            divine.textContent = divineSymbols[Math.floor(Math.random() * divineSymbols.length)];
            divine.style.animationDelay = Math.random() * 2 + 's';
            divine.style.animationDuration = (4 + Math.random() * 2) + 's';
            divine.style.fontSize = (16 + Math.random() * 8) + 'px';
            divine.style.color = ['#daa520', '#87ceeb', '#ffffff', '#ffd700'][Math.floor(Math.random() * 4)];
            divineContainer.appendChild(divine);

            setTimeout(() => {
                if (divine.parentNode) {
                    divine.parentNode.removeChild(divine);
                }
            }, 6000);
        }, i * 120);
    }
}

/**
 * Clears all divine effects
 */
function clearDivine() {
    divineContainer.innerHTML = '';
}

/**
 * Handles response to the blessing letter with divine feedback
 */
function handleResponse(response) {
    const blessingButton = document.querySelector('.blessing-button');
    const prayerButton = document.querySelector('.prayer-button');

    if (response === 'blessing') {
        blessingButton.style.background = 'linear-gradient(135deg, #ffd700, #daa520)';
        blessingButton.textContent = 'Heart Full of Grace! 🌟';
        blessingButton.style.transform = 'scale(1.1)';
        prayerButton.style.opacity = '0.5';

        // Create divine light effects
        createDivineLightEffects();

        setTimeout(() => {
            blessingButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        prayerButton.style.background = 'linear-gradient(135deg, #ffffff, #87ceeb)';
        prayerButton.textContent = 'United in Prayer! 🕊️';
        prayerButton.style.color = '#4682b4';
        blessingButton.style.opacity = '0.5';

        // Create prayer effects
        createPrayerEffects();
    }
}

/**
 * Creates divine light effects for blessing response
 */
function createDivineLightEffects() {
    const lightSymbols = ['✨', '🌟', '💫', '⭐', '✞'];

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const light = document.createElement('div');
            light.className = 'divine-effect';
            light.style.left = Math.random() * 100 + '%';
            light.textContent = lightSymbols[Math.floor(Math.random() * lightSymbols.length)];
            light.style.animationDuration = (2 + Math.random() * 2) + 's';
            light.style.fontSize = (18 + Math.random() * 10) + 'px';
            light.style.color = '#ffd700';
            light.style.textShadow = '0 0 10px rgba(255,215,0,0.8)';
            divineContainer.appendChild(light);

            setTimeout(() => {
                if (light.parentNode) {
                    light.parentNode.removeChild(light);
                }
            }, 4000);
        }, i * 25);
    }
}

/**
 * Creates prayer effects for prayer response
 */
function createPrayerEffects() {
    const prayerSymbols = ['🙏', '🕊️', '☩', '✝', '👼'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const prayer = document.createElement('div');
            prayer.className = 'divine-effect';
            prayer.style.left = Math.random() * 100 + '%';
            prayer.textContent = prayerSymbols[Math.floor(Math.random() * prayerSymbols.length)];
            prayer.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            prayer.style.fontSize = (17 + Math.random() * 6) + 'px';
            prayer.style.color = '#87ceeb';
            prayer.style.textShadow = '0 0 8px rgba(135,206,235,0.6)';
            divineContainer.appendChild(prayer);

            setTimeout(() => {
                if (prayer.parentNode) {
                    prayer.parentNode.removeChild(prayer);
                }
            }, 5500);
        }, i * 35);
    }
}