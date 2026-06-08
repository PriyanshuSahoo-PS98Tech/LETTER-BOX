const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const regulatoryDocument = document.getElementById('regulatoryDocument');

envelope.addEventListener('click', openRegulatoryLetter);

function openRegulatoryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        regulatoryDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!regulatoryDocument.classList.contains('show')) {
            openRegulatoryLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (regulatoryDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});