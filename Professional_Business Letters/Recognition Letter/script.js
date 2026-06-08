const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const recognitionDocument = document.getElementById('recognitionDocument');

envelope.addEventListener('click', openRecognitionLetter);

function openRecognitionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        recognitionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!recognitionDocument.classList.contains('show')) {
            openRecognitionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (recognitionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});