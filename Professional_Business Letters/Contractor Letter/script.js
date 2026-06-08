const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const contractorDocument = document.getElementById('contractorDocument');

envelope.addEventListener('click', openContractorLetter);

function openContractorLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        contractorDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!contractorDocument.classList.contains('show')) {
            openContractorLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (contractorDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});