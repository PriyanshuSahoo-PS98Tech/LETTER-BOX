const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const registrationDocument = document.getElementById('registrationDocument');

envelope.addEventListener('click', openRegistrationLetter);

function openRegistrationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        registrationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!registrationDocument.classList.contains('show')) {
            openRegistrationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (registrationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});