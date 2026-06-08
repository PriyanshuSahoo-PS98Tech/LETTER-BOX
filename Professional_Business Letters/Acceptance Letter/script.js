const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelopeContainer");
const acceptanceDocument = document.getElementById("acceptanceDocument");

envelope.addEventListener("click", openAcceptanceLetter);

function openAcceptanceLetter() {
    envelope.classList.add("envelope-opening");

    setTimeout(() => {
        envelopeContainer.classList.add("hidden");
    }, 700);

    setTimeout(() => {
        acceptanceDocument.classList.add("show");
        document.body.style.overflow = "hidden";
    }, 900);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        if (!acceptanceDocument.classList.contains("show")) {
            openAcceptanceLetter();
        }
    }
});

window.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "p") {
        if (acceptanceDocument.classList.contains("show")) {
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }
});
