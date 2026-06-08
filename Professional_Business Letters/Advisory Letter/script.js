const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const advisoryDocument = document.getElementById('advisoryDocument');

envelope.addEventListener('click', openAdvisoryLetter);

function openAdvisoryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        advisoryDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!advisoryDocument.classList.contains('show')) {
            openAdvisoryLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (advisoryDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});