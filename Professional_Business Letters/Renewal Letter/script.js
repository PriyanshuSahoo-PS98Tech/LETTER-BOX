const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const renewalDocument = document.getElementById('renewalDocument');

envelope.addEventListener('click', openRenewalLetter);

function openRenewalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        renewalDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!renewalDocument.classList.contains('show')) {
            openRenewalLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (renewalDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});