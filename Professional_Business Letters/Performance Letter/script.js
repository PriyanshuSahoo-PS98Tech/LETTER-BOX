const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const performanceDocument = document.getElementById('performanceDocument');

envelope.addEventListener('click', openPerformanceLetter);

function openPerformanceLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        performanceDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!performanceDocument.classList.contains('show')) {
            openPerformanceLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (performanceDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});