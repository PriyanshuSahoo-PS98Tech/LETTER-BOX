const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const evaluationDocument = document.getElementById('evaluationDocument');

envelope.addEventListener('click', openEvaluationLetter);

function openEvaluationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        evaluationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!evaluationDocument.classList.contains('show')) {
            openEvaluationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (evaluationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});