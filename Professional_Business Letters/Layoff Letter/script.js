const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const layoffDocument = document.getElementById('layoffDocument');

envelope.addEventListener('click', openLayoffLetter);

function openLayoffLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        layoffDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!layoffDocument.classList.contains('show')) {
            openLayoffLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (layoffDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});