const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const invoiceDocument = document.getElementById('invoiceDocument');

envelope.addEventListener('click', openInvoiceLetter);

function openInvoiceLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        invoiceDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!invoiceDocument.classList.contains('show')) {
            openInvoiceLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (invoiceDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});