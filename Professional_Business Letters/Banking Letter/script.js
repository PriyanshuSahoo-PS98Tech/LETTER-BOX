const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const bankingDocument = document.getElementById('bankingDocument');

envelope.addEventListener('click', openBankingLetter);

function openBankingLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        bankingDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!bankingDocument.classList.contains('show')) {
            openBankingLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (bankingDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});