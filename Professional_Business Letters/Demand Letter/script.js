const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const demandDocument = document.getElementById('demandDocument');

envelope.addEventListener('click', openDemandLetter);

function openDemandLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        demandDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!demandDocument.classList.contains('show')) {
            openDemandLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (demandDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});