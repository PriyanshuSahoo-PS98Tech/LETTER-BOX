const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const assessmentDocument = document.getElementById('assessmentDocument');

envelope.addEventListener('click', openAssessmentLetter);

function openAssessmentLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        assessmentDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!assessmentDocument.classList.contains('show')) {
            openAssessmentLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (assessmentDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});