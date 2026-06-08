const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const leaseDocument = document.getElementById('leaseDocument');

envelope.addEventListener('click', openLeaseLetter);

function openLeaseLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        leaseDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!leaseDocument.classList.contains('show')) {
            openLeaseLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (leaseDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});