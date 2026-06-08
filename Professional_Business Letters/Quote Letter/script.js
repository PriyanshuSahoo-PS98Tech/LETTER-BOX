const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const quoteDocument = document.getElementById('quoteDocument');

envelope.addEventListener('click', openQuoteLetter);

function openQuoteLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        quoteDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!quoteDocument.classList.contains('show')) {
            openQuoteLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (quoteDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});