const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const requestDocument = document.getElementById('requestDocument');

envelope.addEventListener('click', openRequestLetter);

function openRequestLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        requestDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!requestDocument.classList.contains('show')) {
            openRequestLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (requestDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});