const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const benefitsDocument = document.getElementById('benefitsDocument');

envelope.addEventListener('click', openBenefitsLetter);

function openBenefitsLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        benefitsDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!benefitsDocument.classList.contains('show')) {
            openBenefitsLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (benefitsDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});