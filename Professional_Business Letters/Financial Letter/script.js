const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const financialDocument = document.getElementById('financialDocument');

envelope.addEventListener('click', openFinancialLetter);

function openFinancialLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        financialDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!financialDocument.classList.contains('show')) {
            openFinancialLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (financialDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});