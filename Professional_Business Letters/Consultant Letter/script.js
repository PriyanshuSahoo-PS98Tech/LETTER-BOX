const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const consultantDocument = document.getElementById('consultantDocument');

envelope.addEventListener('click', openConsultantLetter);

function openConsultantLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        consultantDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!consultantDocument.classList.contains('show')) {
            openConsultantLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (consultantDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});