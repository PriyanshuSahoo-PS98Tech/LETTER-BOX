const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const taxDocument = document.getElementById('taxDocument');

envelope.addEventListener('click', openTaxLetter);

function openTaxLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        taxDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!taxDocument.classList.contains('show')) {
            openTaxLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (taxDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});