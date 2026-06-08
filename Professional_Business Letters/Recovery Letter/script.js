const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const recoveryDocument = document.getElementById('recoveryDocument');

envelope.addEventListener('click', openRecoveryLetter);

function openRecoveryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        recoveryDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!recoveryDocument.classList.contains('show')) {
            openRecoveryLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (recoveryDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});