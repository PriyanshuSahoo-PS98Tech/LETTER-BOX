const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const insuranceDocument = document.getElementById('insuranceDocument');

envelope.addEventListener('click', openInsuranceLetter);

function openInsuranceLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        insuranceDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!insuranceDocument.classList.contains('show')) {
            openInsuranceLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (insuranceDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});