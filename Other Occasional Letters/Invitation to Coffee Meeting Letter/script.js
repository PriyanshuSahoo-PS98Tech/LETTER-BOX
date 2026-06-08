document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const coffeeDocument = document.getElementById('coffeeDocument');

    let isOpened = false;

    function openCoffeeLetter() {
        if (isOpened) return;
        isOpened = true;

        envelope.classList.add('envelope-opening');

        setTimeout(function () {
            envelopeContainer.classList.add('hidden');
        }, 750);

        setTimeout(function () {
            coffeeDocument.classList.add('show');
            document.body.style.overflow = 'hidden';
        }, 950);
    }

    envelope.addEventListener('click', openCoffeeLetter);

    envelope.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openCoffeeLetter();
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') {
            if (coffeeDocument.classList.contains('show')) {
                setTimeout(function () {
                    window.print();
                }, 100);
            }
        }
    });
});