const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const shareholderDocument = document.getElementById('shareholderDocument');

envelope.addEventListener('click', openShareholderLetter);

function openShareholderLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        shareholderDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!shareholderDocument.classList.contains('show')) {
            openShareholderLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (shareholderDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});