const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const collaborationDocument = document.getElementById('collaborationDocument');

envelope.addEventListener('click', openCollaborationLetter);

function openCollaborationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        collaborationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!collaborationDocument.classList.contains('show')) {
            openCollaborationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (collaborationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});