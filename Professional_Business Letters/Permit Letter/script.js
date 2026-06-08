const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const permitDocument = document.getElementById('permitDocument');

envelope.addEventListener('click', openPermitLetter);

function openPermitLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        permitDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!permitDocument.classList.contains('show')) {
            openPermitLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (permitDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});