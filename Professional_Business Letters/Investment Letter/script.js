const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const investmentDocument = document.getElementById('investmentDocument');

envelope.addEventListener('click', openInvestmentLetter);

function openInvestmentLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        investmentDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!investmentDocument.classList.contains('show')) {
            openInvestmentLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (investmentDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});