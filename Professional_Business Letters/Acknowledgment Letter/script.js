const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const acknowledgmentDocument = document.getElementById('acknowledgmentDocument');

envelope.addEventListener('click', openAcknowledgmentLetter);

function openAcknowledgmentLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        acknowledgmentDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!acknowledgmentDocument.classList.contains('show')) {
            openAcknowledgmentLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (acknowledgmentDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});