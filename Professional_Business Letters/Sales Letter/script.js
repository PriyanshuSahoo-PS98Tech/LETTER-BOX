const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const salesDocument = document.getElementById('salesDocument');

envelope.addEventListener('click', openSalesLetter);

function openSalesLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        salesDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!salesDocument.classList.contains('show')) {
            openSalesLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (salesDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});