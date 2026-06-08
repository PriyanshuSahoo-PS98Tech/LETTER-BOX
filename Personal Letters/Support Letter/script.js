// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const supportCard = document.getElementById('supportCard');
const supportContainer = document.getElementById('supportContainer');

// Event Listeners
envelope.addEventListener('click', openSupportLetter);

/**
 * Opens the support letter with comforting envelope animation
 */
function openSupportLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        supportCard.classList.add('show');
        createSupportEffects();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates gentle floating support effects
 */
function createSupportEffects() {
    const supportIcons = ['🤗', '🌻', '💪', '🌈', '🤝', '🌟', '💝'];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const support = document.createElement('div');
            support.className = 'support-effect';
            support.style.left = Math.random() * 100 + '%';
            support.textContent = supportIcons[Math.floor(Math.random() * supportIcons.length)];
            support.style.animationDelay = Math.random() * 2 + 's';
            support.style.animationDuration = (4 + Math.random() * 2) + 's';
            support.style.fontSize = (16 + Math.random() * 8) + 'px';
            supportContainer.appendChild(support);

            setTimeout(() => {
                if (support.parentNode) {
                    support.parentNode.removeChild(support);
                }
            }, 6000);
        }, i * 150);
    }
}

/**
 * Clears all support effects
 */
function clearSupport() {
    supportContainer.innerHTML = '';
}

/**
 * Handles response to the support letter with caring feedback
 */
function handleResponse(response) {
    const comfortButton = document.querySelector('.comfort-button');
    const strengthButton = document.querySelector('.strength-button');

    if (response === 'comfort') {
        comfortButton.style.background = 'linear-gradient(135deg, #96ceb4, #57c4a5)';
        comfortButton.textContent = 'Feeling Embraced 🌸';
        comfortButton.style.transform = 'scale(1.1)';
        strengthButton.style.opacity = '0.5';

        // Create comfort effects
        createComfortEffects();

        setTimeout(() => {
            comfortButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        strengthButton.style.background = 'linear-gradient(135deg, #45b7d1, #2a9fbc)';
        strengthButton.textContent = 'Growing Stronger 🦋';
        comfortButton.style.opacity = '0.5';

        // Create empowerment effects
        createEmpowermentEffects();
    }
}

/**
 * Creates comfort effects for comfort response
 */
function createComfortEffects() {
    const comfortIcons = ['🤗', '🌸', '💝', '🌈', '🕊️'];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const comfort = document.createElement('div');
            comfort.className = 'support-effect';
            comfort.style.left = Math.random() * 100 + '%';
            comfort.textContent = comfortIcons[Math.floor(Math.random() * comfortIcons.length)];
            comfort.style.animationDuration = (3 + Math.random() * 2) + 's';
            comfort.style.fontSize = (18 + Math.random() * 10) + 'px';
            supportContainer.appendChild(comfort);

            setTimeout(() => {
                if (comfort.parentNode) {
                    comfort.parentNode.removeChild(comfort);
                }
            }, 5000);
        }, i * 40);
    }
}

/**
 * Creates empowerment effects for strength response
 */
function createEmpowermentEffects() {
    const empowermentIcons = ['💪', '🦋', '🌟', '⚡', '🔥'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const empowerment = document.createElement('div');
            empowerment.className = 'support-effect';
            empowerment.style.left = Math.random() * 100 + '%';
            empowerment.textContent = empowermentIcons[Math.floor(Math.random() * empowermentIcons.length)];
            empowerment.style.animationDuration = (4 + Math.random() * 2) + 's';
            empowerment.style.fontSize = (17 + Math.random() * 6) + 'px';
            supportContainer.appendChild(empowerment);

            setTimeout(() => {
                if (empowerment.parentNode) {
                    empowerment.parentNode.removeChild(empowerment);
                }
            }, 6000);
        }, i * 60);
    }
}