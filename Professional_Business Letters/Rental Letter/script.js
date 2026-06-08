const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const rentalDocument = document.getElementById('rentalDocument');

envelope.addEventListener('click', openRentalLetter);

function openRentalLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        rentalDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!rentalDocument.classList.contains('show')) {
            openRentalLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (rentalDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});