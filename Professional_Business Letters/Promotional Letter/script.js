const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const promotionalDocument = document.getElementById('promotionalDocument');

envelope.addEventListener('click', openPromotionalLetter);

function openPromotionalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        promotionalDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!promotionalDocument.classList.contains('show')) {
            openPromotionalLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (promotionalDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});