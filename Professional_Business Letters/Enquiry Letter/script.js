const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const enquiryDocument = document.getElementById('enquiryDocument');

envelope.addEventListener('click', openEnquiryLetter);

function openEnquiryLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        enquiryDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!enquiryDocument.classList.contains('show')) {
            openEnquiryLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (enquiryDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});