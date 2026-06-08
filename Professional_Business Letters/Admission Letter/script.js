const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const admissionDocument = document.getElementById('admissionDocument');

envelope.addEventListener('click', openAdmissionLetter);

function openAdmissionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        admissionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!admissionDocument.classList.contains('show')) {
            openAdmissionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (admissionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});