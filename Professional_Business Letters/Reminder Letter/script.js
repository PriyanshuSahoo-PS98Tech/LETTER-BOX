const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const reminderDocument = document.getElementById('reminderDocument');

envelope.addEventListener('click', openReminderLetter);

function openReminderLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        reminderDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!reminderDocument.classList.contains('show')) {
            openReminderLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (reminderDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});