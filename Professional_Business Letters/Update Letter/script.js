const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const updateDocument = document.getElementById('updateDocument');

envelope.addEventListener('click', openUpdateLetter);

function openUpdateLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        updateDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!updateDocument.classList.contains('show')) {
            openUpdateLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (updateDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});