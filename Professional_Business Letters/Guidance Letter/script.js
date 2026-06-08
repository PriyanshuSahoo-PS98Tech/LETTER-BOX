const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const guidanceDocument = document.getElementById('guidanceDocument');

envelope.addEventListener('click', openGuidanceLetter);

function openGuidanceLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        guidanceDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!guidanceDocument.classList.contains('show')) {
            openGuidanceLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (guidanceDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});