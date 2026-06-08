const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const coverDocument = document.getElementById('coverDocument');

envelope.addEventListener('click', openCoverLetter);

function openCoverLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        coverDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!coverDocument.classList.contains('show')) {
            openCoverLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (coverDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});