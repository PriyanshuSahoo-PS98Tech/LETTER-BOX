const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const feedbackDocument = document.getElementById('feedbackDocument');

envelope.addEventListener('click', openFeedbackLetter);

function openFeedbackLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        feedbackDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!feedbackDocument.classList.contains('show')) {
            openFeedbackLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (feedbackDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});