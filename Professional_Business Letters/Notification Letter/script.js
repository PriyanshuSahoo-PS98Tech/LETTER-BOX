const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const notificationDocument = document.getElementById('notificationDocument');

envelope.addEventListener('click', openNotificationLetter);

function openNotificationLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        notificationDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!notificationDocument.classList.contains('show')) {
            openNotificationLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (notificationDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});