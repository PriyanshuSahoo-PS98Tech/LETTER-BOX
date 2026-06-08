const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const vendorDocument = document.getElementById('vendorDocument');

envelope.addEventListener('click', openVendorLetter);

function openVendorLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        vendorDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!vendorDocument.classList.contains('show')) {
            openVendorLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (vendorDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});