const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const agreementDocument = document.getElementById('agreementDocument');

envelope.addEventListener('click', openAgreementLetter);

function openAgreementLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        agreementDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!agreementDocument.classList.contains('show')) {
            openAgreementLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (agreementDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});