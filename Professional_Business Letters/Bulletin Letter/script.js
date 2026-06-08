const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const bulletinDocument = document.getElementById('bulletinDocument');

envelope.addEventListener('click', openBulletinLetter);

function openBulletinLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        bulletinDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!bulletinDocument.classList.contains('show')) {
            openBulletinLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (bulletinDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});