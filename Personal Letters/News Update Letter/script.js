// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const newsupdateCard = document.getElementById('newsupdateCard');
const papersContainer = document.getElementById('papersContainer');

// Event Listeners
envelope.addEventListener('click', openNewsUpdate);

/**
 * Opens the news update letter with informative envelope animation
 */
function openNewsUpdate() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 600);

    setTimeout(() => {
        newsupdateCard.classList.add('show');
        createInfoPapers();
        document.body.style.overflow = 'hidden';
    }, 800);
}

/**
 * Creates flowing info papers effect
 */
function createInfoPapers() {
    const papers = ['📄', '📝', '📋', '📊', '📈'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const paper = document.createElement('div');
            paper.className = 'info-paper';
            paper.style.left = Math.random() * 100 + '%';
            paper.textContent = papers[Math.floor(Math.random() * papers.length)];
            paper.style.animationDelay = Math.random() * 2 + 's';
            paper.style.animationDuration = (4 + Math.random() * 2) + 's';
            paper.style.fontSize = (16 + Math.random() * 6) + 'px';
            papersContainer.appendChild(paper);

            setTimeout(() => {
                if (paper.parentNode) {
                    paper.parentNode.removeChild(paper);
                }
            }, 6000);
        }, i * 125);
    }
}

/**
 * Clears all info papers
 */
function clearPapers() {
    papersContainer.innerHTML = '';
}

/**
 * Handles response to the news update with appropriate feedback
 */
function handleResponse(response) {
    const moreButton = document.querySelector('.more-button');
    const thanksButton = document.querySelector('.thanks-button');

    if (response === 'more') {
        moreButton.style.background = 'linear-gradient(135deg, #9b59b6, #8e44ad)';
        moreButton.textContent = 'Let\'s Chat More! 💬';
        moreButton.style.transform = 'scale(1.1)';
        thanksButton.style.opacity = '0.5';

        // Create curiosity papers
        createCuriosityPapers();

        setTimeout(() => {
            moreButton.style.transform = 'scale(1)';
        }, 300);
    } else {
        thanksButton.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        thanksButton.textContent = 'You\'re Welcome! 🤗';
        moreButton.style.opacity = '0.5';

        // Create appreciation papers
        createAppreciationPapers();
    }
}

/**
 * Creates curiosity papers for wanting more info
 */
function createCuriosityPapers() {
    const curiosityPapers = ['❓', '🤔', '💭', '🔍', '📖'];

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const paper = document.createElement('div');
            paper.className = 'info-paper';
            paper.style.left = Math.random() * 100 + '%';
            paper.textContent = curiosityPapers[Math.floor(Math.random() * curiosityPapers.length)];
            paper.style.animationDuration = (3.5 + Math.random() * 2) + 's';
            paper.style.fontSize = (18 + Math.random() * 6) + 'px';
            papersContainer.appendChild(paper);

            setTimeout(() => {
                if (paper.parentNode) {
                    paper.parentNode.removeChild(paper);
                }
            }, 5500);
        }, i * 50);
    }
}

/**
 * Creates appreciation papers for thanking
 */
function createAppreciationPapers() {
    const appreciationPapers = ['😊', '🙏', '💚', '👍', '✨'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const paper = document.createElement('div');
            paper.className = 'info-paper';
            paper.style.left = Math.random() * 100 + '%';
            paper.textContent = appreciationPapers[Math.floor(Math.random() * appreciationPapers.length)];
            paper.style.animationDuration = (4 + Math.random() * 2) + 's';
            paper.style.fontSize = (17 + Math.random() * 5) + 'px';
            papersContainer.appendChild(paper);

            setTimeout(() => {
                if (paper.parentNode) {
                    paper.parentNode.removeChild(paper);
                }
            }, 6000);
        }, i * 70);
    }
}