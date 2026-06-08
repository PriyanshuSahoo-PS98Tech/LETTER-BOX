const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const partnershipDocument = document.getElementById('partnershipDocument');

envelope.addEventListener('click', openPartnershipLetter);

function openPartnershipLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        partnershipDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!partnershipDocument.classList.contains('show')) {
            openPartnershipLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (partnershipDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});