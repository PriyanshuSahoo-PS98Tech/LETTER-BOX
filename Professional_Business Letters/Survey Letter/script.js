const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const surveyDocument = document.getElementById('surveyDocument');

envelope.addEventListener('click', openSurveyLetter);

function openSurveyLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        surveyDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!surveyDocument.classList.contains('show')) {
            openSurveyLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (surveyDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});