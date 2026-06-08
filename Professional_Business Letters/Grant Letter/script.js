const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const grantDocument = document.getElementById('grantDocument');

envelope.addEventListener('click', openGrantLetter);

function openGrantLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        grantDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!grantDocument.classList.contains('show')) {
            openGrantLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (grantDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});