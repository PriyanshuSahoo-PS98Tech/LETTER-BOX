const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const orderDocument = document.getElementById('orderDocument');

envelope.addEventListener('click', openOrderLetter);

function openOrderLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        orderDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!orderDocument.classList.contains('show')) {
            openOrderLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (orderDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});