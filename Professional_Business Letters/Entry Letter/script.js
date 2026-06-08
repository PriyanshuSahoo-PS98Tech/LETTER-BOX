const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const entryDocument = document.getElementById('entryDocument');

envelope.addEventListener('click', openEntryLetter);

function openEntryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        entryDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!entryDocument.classList.contains('show')) {
            openEntryLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (entryDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});