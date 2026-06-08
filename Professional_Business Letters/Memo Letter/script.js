const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const memoDocument = document.getElementById('memoDocument');

envelope.addEventListener('click', openMemoLetter);

function openMemoLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        memoDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!memoDocument.classList.contains('show')) {
            openMemoLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (memoDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});