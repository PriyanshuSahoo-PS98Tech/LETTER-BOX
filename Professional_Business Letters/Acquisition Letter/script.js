const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const acquisitionDocument = document.getElementById('acquisitionDocument');

envelope.addEventListener('click', openAcquisitionLetter);

function openAcquisitionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        acquisitionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!acquisitionDocument.classList.contains('show')) {
            openAcquisitionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (acquisitionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});