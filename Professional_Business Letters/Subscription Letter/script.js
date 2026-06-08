const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const subscriptionDocument = document.getElementById('subscriptionDocument');

envelope.addEventListener('click', openSubscriptionLetter);

function openSubscriptionLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        subscriptionDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!subscriptionDocument.classList.contains('show')) {
            openSubscriptionLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (subscriptionDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});