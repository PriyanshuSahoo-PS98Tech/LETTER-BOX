const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const refusalDocument = document.getElementById('refusalDocument');

envelope.addEventListener('click', openRefusalLetter);

function openRefusalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        refusalDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!refusalDocument.classList.contains('show')) {
            openRefusalLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (refusalDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});