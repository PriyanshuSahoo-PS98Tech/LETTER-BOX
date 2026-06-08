const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const loanDocument = document.getElementById('loanDocument');

envelope.addEventListener('click', openLoanLetter);

function openLoanLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        loanDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!loanDocument.classList.contains('show')) {
            openLoanLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (loanDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});