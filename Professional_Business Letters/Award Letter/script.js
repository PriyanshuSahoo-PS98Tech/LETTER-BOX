const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const awardDocument = document.getElementById('awardDocument');

envelope.addEventListener('click', openAwardLetter);

function openAwardLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        awardDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!awardDocument.classList.contains('show')) {
            openAwardLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (awardDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});