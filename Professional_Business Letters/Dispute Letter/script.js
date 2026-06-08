const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const disputeDocument = document.getElementById('disputeDocument');

envelope.addEventListener('click', openDisputeLetter);

function openDisputeLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        disputeDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!disputeDocument.classList.contains('show')) {
            openDisputeLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (disputeDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});