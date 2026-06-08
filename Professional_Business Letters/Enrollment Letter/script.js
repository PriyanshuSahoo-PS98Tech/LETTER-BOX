const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const enrollmentDocument = document.getElementById('enrollmentDocument');

envelope.addEventListener('click', openEnrollmentLetter);

function openEnrollmentLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        enrollmentDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!enrollmentDocument.classList.contains('show')) {
            openEnrollmentLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (enrollmentDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});