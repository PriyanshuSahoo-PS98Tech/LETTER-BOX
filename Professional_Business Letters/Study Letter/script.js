const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const studyDocument = document.getElementById('studyDocument');

envelope.addEventListener('click', openStudyLetter);

function openStudyLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        studyDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!studyDocument.classList.contains('show')) {
            openStudyLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (studyDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});