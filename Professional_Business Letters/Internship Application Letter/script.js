const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const internshipDocument = document.getElementById('internshipDocument');

envelope.addEventListener('click', openInternshipLetter);

function openInternshipLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        internshipDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!internshipDocument.classList.contains('show')) {
            openInternshipLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (internshipDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});