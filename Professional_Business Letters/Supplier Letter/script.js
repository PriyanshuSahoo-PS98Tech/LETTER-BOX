const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const supplierDocument = document.getElementById('supplierDocument');

envelope.addEventListener('click', openSupplierLetter);

function openSupplierLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        supplierDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!supplierDocument.classList.contains('show')) {
            openSupplierLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (supplierDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});