const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const interviewDocument = document.getElementById('interviewDocument');

envelope.addEventListener('click', openInterviewLetter);

function openInterviewLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        interviewDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!interviewDocument.classList.contains('show')) {
            openInterviewLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (interviewDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});