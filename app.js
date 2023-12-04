// JavaScript in "script.js"
const smallImages = document.querySelectorAll(".small-image");
const imageModal = document.getElementById("image-modal");
const largeImage = document.getElementById("large-image");
const closeButton = document.getElementById("close-button");

smallImages.forEach((image) => {
    image.addEventListener("click", () => {
        imageModal.style.display = "block";
        largeImage.src = image.getAttribute("data-large");
    });
});

closeButton.addEventListener("click", () => {
    imageModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }
});

//Zurück-Button auf den Seiten, die auf die jeweils vorherige Seite zurückleitet.
const zurueckButton = document.getElementsById("zurueckButton");


