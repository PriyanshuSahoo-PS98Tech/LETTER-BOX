const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const disciplinaryDocument = document.getElementById('disciplinaryDocument');

envelope.addEventListener('click', openDisciplinaryLetter);

function openDisciplinaryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        disciplinaryDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!disciplinaryDocument.classList.contains('show')) {
            openDisciplinaryLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (disciplinaryDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});