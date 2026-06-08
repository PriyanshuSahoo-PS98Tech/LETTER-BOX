const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const claimDocument = document.getElementById('claimDocument');

envelope.addEventListener('click', openClaimLetter);

function openClaimLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        claimDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!claimDocument.classList.contains('show')) {
            openClaimLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (claimDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});