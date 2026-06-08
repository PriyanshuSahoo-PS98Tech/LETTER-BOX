const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const reviewDocument = document.getElementById('reviewDocument');

envelope.addEventListener('click', openReviewLetter);

function openReviewLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        reviewDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!reviewDocument.classList.contains('show')) {
            openReviewLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (reviewDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});