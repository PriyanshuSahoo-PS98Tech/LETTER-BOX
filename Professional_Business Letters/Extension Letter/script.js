const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const extensionDocument = document.getElementById('extensionDocument');

envelope.addEventListener('click', openExtensionLetter);

function openExtensionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        extensionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!extensionDocument.classList.contains('show')) {
            openExtensionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (extensionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});