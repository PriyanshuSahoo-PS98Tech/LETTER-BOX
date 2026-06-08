const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const researchDocument = document.getElementById('researchDocument');

envelope.addEventListener('click', openResearchLetter);

function openResearchLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        researchDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!researchDocument.classList.contains('show')) {
            openResearchLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (researchDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});