const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const waitlistDocument = document.getElementById('waitlistDocument');

envelope.addEventListener('click', openWaitlistLetter);

function openWaitlistLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        waitlistDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!waitlistDocument.classList.contains('show')) {
            openWaitlistLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (waitlistDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});