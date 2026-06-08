const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const evictionDocument = document.getElementById('evictionDocument');

envelope.addEventListener('click', openEvictionLetter);

function openEvictionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        evictionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!evictionDocument.classList.contains('show')) {
            openEvictionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (evictionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});