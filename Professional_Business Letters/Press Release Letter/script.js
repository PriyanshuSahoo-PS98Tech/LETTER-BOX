const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const pressDocument = document.getElementById('pressDocument');

envelope.addEventListener('click', openPressRelease);

function openPressRelease() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        pressDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!pressDocument.classList.contains('show')) {
            openPressRelease();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (pressDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});