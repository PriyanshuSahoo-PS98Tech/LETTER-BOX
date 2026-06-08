const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const circularDocument = document.getElementById('circularDocument');

envelope.addEventListener('click', openCircularLetter);

function openCircularLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        circularDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!circularDocument.classList.contains('show')) {
            openCircularLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (circularDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});