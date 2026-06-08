const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const appealDocument = document.getElementById('appealDocument');

envelope.addEventListener('click', openAppealLetter);

function openAppealLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        appealDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!appealDocument.classList.contains('show')) {
            openAppealLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (appealDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});