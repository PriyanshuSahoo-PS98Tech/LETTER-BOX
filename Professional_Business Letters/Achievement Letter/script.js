const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const achievementDocument = document.getElementById('achievementDocument');

envelope.addEventListener('click', openAchievementLetter);

function openAchievementLetter() {
    envelope.classList.add('envelope-opening');

    setTimeout(() => {
        envelopeContainer.classList.add('hidden');
    }, 700);

    setTimeout(() => {
        achievementDocument.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 900);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (!achievementDocument.classList.contains('show')) {
            openAchievementLetter();
        }
    }
});

window.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        if (achievementDocument.classList.contains('show')) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});