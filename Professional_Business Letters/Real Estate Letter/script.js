const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const realEstateDocument = document.getElementById('realEstateDocument');

envelope.addEventListener('click', openRealEstateLetter);

function openRealEstateLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        realEstateDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!realEstateDocument.classList.contains('show')) {
            openRealEstateLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (realEstateDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});