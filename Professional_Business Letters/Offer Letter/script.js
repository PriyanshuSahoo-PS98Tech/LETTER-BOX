// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const offerDocument = document.getElementById('offerDocument');

// Event Listeners
envelope.addEventListener('click', openOffer);

/**
 * Opens the offer letter with professional document animation
 */
function openOffer() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        offerDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

/**
 * Professional keyboard navigation support
 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!offerDocument.classList.contains('show')) {
            openOffer();
        }
    }
});

/**
 * Professional print functionality
 */
window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (offerDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});