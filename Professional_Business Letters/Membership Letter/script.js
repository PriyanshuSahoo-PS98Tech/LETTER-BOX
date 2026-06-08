const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const membershipDocument = document.getElementById('membershipDocument');

envelope.addEventListener('click', openMembershipLetter);

function openMembershipLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        membershipDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!membershipDocument.classList.contains('show')) {
            openMembershipLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (membershipDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});