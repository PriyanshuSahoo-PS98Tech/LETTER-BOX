const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const complianceDocument = document.getElementById('complianceDocument');

envelope.addEventListener('click', openComplianceLetter);

function openComplianceLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        complianceDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!complianceDocument.classList.contains('show')) {
            openComplianceLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (complianceDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});