const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const grievanceDocument = document.getElementById('grievanceDocument');

envelope.addEventListener('click', openGrievanceLetter);

function openGrievanceLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        grievanceDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!grievanceDocument.classList.contains('show')) {
            openGrievanceLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (grievanceDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});