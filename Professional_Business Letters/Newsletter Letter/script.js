const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const newsletterDocument = document.getElementById('newsletterDocument');

envelope.addEventListener('click', openNewsletterLetter);

function openNewsletterLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        newsletterDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!newsletterDocument.classList.contains('show')) {
            openNewsletterLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (newsletterDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});