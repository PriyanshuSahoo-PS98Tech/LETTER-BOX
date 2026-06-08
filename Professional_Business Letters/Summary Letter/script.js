const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const summaryDocument = document.getElementById('summaryDocument');

envelope.addEventListener('click', openSummaryLetter);

function openSummaryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        summaryDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!summaryDocument.classList.contains('show')) {
            openSummaryLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (summaryDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});