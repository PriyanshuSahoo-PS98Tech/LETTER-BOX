const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const executiveDocument = document.getElementById('executiveDocument');

envelope.addEventListener('click', openExecutiveLetter);

function openExecutiveLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        executiveDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!executiveDocument.classList.contains('show')) {
            openExecutiveLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (executiveDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});