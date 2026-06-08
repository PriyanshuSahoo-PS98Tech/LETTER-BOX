const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const announcementDocument = document.getElementById('announcementDocument');

envelope.addEventListener('click', openAnnouncementLetter);

function openAnnouncementLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        announcementDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!announcementDocument.classList.contains('show')) {
            openAnnouncementLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (announcementDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});