const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const customerDocument = document.getElementById('customerDocument');

envelope.addEventListener('click', openCustomerLetter);

function openCustomerLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        customerDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!customerDocument.classList.contains('show')) {
            openCustomerLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (customerDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});