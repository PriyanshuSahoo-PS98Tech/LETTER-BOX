const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const professionalDocument = document.getElementById('professionalDocument');

envelope.addEventListener('click', openProfessionalLetter);

function openProfessionalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        professionalDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!professionalDocument.classList.contains('show')) {
            openProfessionalLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (professionalDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});