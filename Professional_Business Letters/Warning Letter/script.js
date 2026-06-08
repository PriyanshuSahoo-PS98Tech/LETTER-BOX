const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const warningDocument = document.getElementById('warningDocument');

envelope.addEventListener('click', openWarningLetter);

function openWarningLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        warningDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!warningDocument.classList.contains('show')) {
            openWarningLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (warningDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});