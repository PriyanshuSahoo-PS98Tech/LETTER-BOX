const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const paymentDocument = document.getElementById('paymentDocument');

envelope.addEventListener('click', openPaymentLetter);

function openPaymentLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        paymentDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!paymentDocument.classList.contains('show')) {
            openPaymentLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (paymentDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});