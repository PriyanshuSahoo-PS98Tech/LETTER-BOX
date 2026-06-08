const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const scholarshipDocument = document.getElementById('scholarshipDocument');

envelope.addEventListener('click', openScholarshipLetter);

function openScholarshipLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        scholarshipDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!scholarshipDocument.classList.contains('show')) {
            openScholarshipLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (scholarshipDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});