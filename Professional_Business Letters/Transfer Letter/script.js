const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const transferDocument = document.getElementById('transferDocument');

envelope.addEventListener('click', openTransferLetter);

function openTransferLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        transferDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!transferDocument.classList.contains('show')) {
            openTransferLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (transferDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});