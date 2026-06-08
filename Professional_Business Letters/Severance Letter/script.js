const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const severanceDocument = document.getElementById('severanceDocument');

envelope.addEventListener('click', openSeveranceLetter);

function openSeveranceLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        severanceDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!severanceDocument.classList.contains('show')) {
            openSeveranceLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (severanceDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});