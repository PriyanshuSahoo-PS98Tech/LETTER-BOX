const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const managementDocument = document.getElementById('managementDocument');

envelope.addEventListener('click', openManagementLetter);

function openManagementLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        managementDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!managementDocument.classList.contains('show')) {
            openManagementLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (managementDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});