const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const alertDocument = document.getElementById('alertDocument');

envelope.addEventListener('click', openAlertLetter);

function openAlertLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        alertDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!alertDocument.classList.contains('show')) {
            openAlertLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (alertDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});