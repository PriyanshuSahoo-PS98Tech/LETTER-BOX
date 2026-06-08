const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const amendmentDocument = document.getElementById('amendmentDocument');

envelope.addEventListener('click', openAmendmentLetter);

function openAmendmentLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        amendmentDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!amendmentDocument.classList.contains('show')) {
            openAmendmentLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (amendmentDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});