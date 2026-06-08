const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const complaintDocument = document.getElementById('complaintDocument');

envelope.addEventListener('click', openComplaintLetter);

function openComplaintLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        complaintDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!complaintDocument.classList.contains('show')) {
            openComplaintLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (complaintDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});