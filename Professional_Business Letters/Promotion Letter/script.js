const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const promotionDocument = document.getElementById('promotionDocument');

envelope.addEventListener('click', openPromotionLetter);

function openPromotionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        promotionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!promotionDocument.classList.contains('show')) {
            openPromotionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (promotionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});