const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const creditDocument = document.getElementById('creditDocument');

envelope.addEventListener('click', openCreditLetter);

function openCreditLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        creditDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!creditDocument.classList.contains('show')) {
            openCreditLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (creditDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});