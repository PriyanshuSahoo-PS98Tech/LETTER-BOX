const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const cancellationDocument = document.getElementById('cancellationDocument');

envelope.addEventListener('click', openCancellationLetter);

function openCancellationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        cancellationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!cancellationDocument.classList.contains('show')) {
            openCancellationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (cancellationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});