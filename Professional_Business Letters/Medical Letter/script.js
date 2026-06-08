const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const medicalDocument = document.getElementById('medicalDocument');

envelope.addEventListener('click', openMedicalLetter);

function openMedicalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        medicalDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!medicalDocument.classList.contains('show')) {
            openMedicalLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (medicalDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});