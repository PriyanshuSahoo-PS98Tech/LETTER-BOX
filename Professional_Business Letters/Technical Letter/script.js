const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const technicalDocument = document.getElementById('technicalDocument');

envelope.addEventListener('click', openTechnicalLetter);

function openTechnicalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        technicalDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!technicalDocument.classList.contains('show')) {
            openTechnicalLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (technicalDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});