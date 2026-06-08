const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const mergerDocument = document.getElementById('mergerDocument');

envelope.addEventListener('click', openMergerLetter);

function openMergerLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        mergerDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!mergerDocument.classList.contains('show')) {
            openMergerLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (mergerDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});