const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const marketingDocument = document.getElementById('marketingDocument');

envelope.addEventListener('click', openMarketingLetter);

function openMarketingLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        marketingDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!marketingDocument.classList.contains('show')) {
            openMarketingLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (marketingDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});