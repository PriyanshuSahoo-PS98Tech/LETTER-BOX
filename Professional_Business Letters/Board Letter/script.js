const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const boardDocument = document.getElementById('boardDocument');

envelope.addEventListener('click', openBoardLetter);

function openBoardLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        boardDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!boardDocument.classList.contains('show')) {
            openBoardLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (boardDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});