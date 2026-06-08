const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const trainingDocument = document.getElementById('trainingDocument');

envelope.addEventListener('click', openTrainingLetter);

function openTrainingLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        trainingDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!trainingDocument.classList.contains('show')) {
            openTrainingLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (trainingDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});