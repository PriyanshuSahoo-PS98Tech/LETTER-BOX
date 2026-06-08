const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const collectionDocument = document.getElementById('collectionDocument');

envelope.addEventListener('click', openCollectionLetter);

function openCollectionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        collectionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!collectionDocument.classList.contains('show')) {
            openCollectionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (collectionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});