const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const submissionDocument = document.getElementById('submissionDocument');

envelope.addEventListener('click', openSubmissionLetter);

function openSubmissionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        submissionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!submissionDocument.classList.contains('show')) {
            openSubmissionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (submissionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});