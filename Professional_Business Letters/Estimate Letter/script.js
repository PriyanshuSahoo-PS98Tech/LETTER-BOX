const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const estimateDocument = document.getElementById('estimateDocument');

envelope.addEventListener('click', openEstimateLetter);

function openEstimateLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        estimateDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!estimateDocument.classList.contains('show')) {
            openEstimateLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (estimateDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});