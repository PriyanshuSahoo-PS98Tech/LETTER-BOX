const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const propertyDocument = document.getElementById('propertyDocument');

envelope.addEventListener('click', openPropertyLetter);

function openPropertyLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        propertyDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!propertyDocument.classList.contains('show')) {
            openPropertyLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (propertyDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});