const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const instructionDocument = document.getElementById('instructionDocument');

envelope.addEventListener('click', openInstructionLetter);

function openInstructionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        instructionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!instructionDocument.classList.contains('show')) {
            openInstructionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (instructionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});