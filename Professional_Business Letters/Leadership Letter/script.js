const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const leadershipDocument = document.getElementById('leadershipDocument');

envelope.addEventListener('click', openLeadershipLetter);

function openLeadershipLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        leadershipDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!leadershipDocument.classList.contains('show')) {
            openLeadershipLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (leadershipDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});