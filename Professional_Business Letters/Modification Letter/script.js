const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const modificationDocument = document.getElementById('modificationDocument');

envelope.addEventListener('click', openModificationLetter);

function openModificationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        modificationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!modificationDocument.classList.contains('show')) {
            openModificationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (modificationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});