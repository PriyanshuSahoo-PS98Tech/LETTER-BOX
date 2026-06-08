const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const terminationDocument = document.getElementById('terminationDocument');

envelope.addEventListener('click', openTerminationLetter);

function openTerminationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        terminationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!terminationDocument.classList.contains('show')) {
            openTerminationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (terminationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});