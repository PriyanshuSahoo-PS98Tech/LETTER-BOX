const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const applicationDocument = document.getElementById('applicationDocument');

envelope.addEventListener('click', openApplicationLetter);

function openApplicationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        applicationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!applicationDocument.classList.contains('show')) {
            openApplicationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (applicationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});