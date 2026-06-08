// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const recommendationDocument = document.getElementById('recommendationDocument');

// Event Listeners
envelope.addEventListener('click', openRecommendation);

/**
 * Opens the recommendation letter with professional document animation
 */
function openRecommendation() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        recommendationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

/**
 * Professional keyboard navigation support
 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!recommendationDocument.classList.contains('show')) {
            openRecommendation();
        }
    }

    if (event.key === 'Escape') {
        if (recommendationDocument.classList.contains('show')) {
            // Allow natural browser behavior for professional use
        }
    }
});

/**
 * Professional print functionality
 */
window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (recommendationDocument.classList.contains('show')) {
            // Allow natural print behavior
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});