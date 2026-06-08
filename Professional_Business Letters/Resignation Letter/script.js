// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const resignationDocument = document.getElementById('resignationDocument');

// Event Listeners
envelope.addEventListener('click', openResignation);

/**
 * Opens the resignation letter with professional document animation
 */
function openResignation() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        resignationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

/**
 * Professional keyboard navigation support
 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!resignationDocument.classList.contains('show')) {
            openResignation();
        }
    }

    if (event.key === 'Escape') {
        if (resignationDocument.classList.contains('show')) {
            // Allow natural browser behavior for professional use
        }
    }
});

/**
 * Professional print functionality
 */
window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (resignationDocument.classList.contains('show')) {
            // Allow natural print behavior
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});