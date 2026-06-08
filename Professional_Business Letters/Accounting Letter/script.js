const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const accountingDocument = document.getElementById('accountingDocument');

envelope.addEventListener('click', openAccountingLetter);

function openAccountingLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        accountingDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!accountingDocument.classList.contains('show')) {
            openAccountingLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (accountingDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});