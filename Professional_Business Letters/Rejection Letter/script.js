const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const rejectionDocument = document.getElementById('rejectionDocument');

envelope.addEventListener('click', openRejectionLetter);

function openRejectionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        rejectionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!rejectionDocument.classList.contains('show')) {
            openRejectionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (rejectionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});