const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const reportDocument = document.getElementById('reportDocument');

envelope.addEventListener('click', openReportLetter);

function openReportLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        reportDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!reportDocument.classList.contains('show')) {
            openReportLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (reportDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});