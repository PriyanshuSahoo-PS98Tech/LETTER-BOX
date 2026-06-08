// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const applicationDocument = document.getElementById('applicationDocument');

// Event Listeners
envelope.addEventListener('click', openApplication);

/**
 * Opens the job application with professional document animation
 */
function openApplication() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        applicationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

/**
 * Professional keyboard navigation support
 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!applicationDocument.classList.contains('show')) {
            openApplication();
        }
    }

    if (event.key === 'Escape') {
        if (applicationDocument.classList.contains('show')) {
            // Allow natural browser behavior for professional use
        }
    }
});

/**
 * Professional print functionality
 */
window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (applicationDocument.classList.contains('show')) {
            // Allow natural print behavior
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});