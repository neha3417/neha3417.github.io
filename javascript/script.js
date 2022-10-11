
const revealButton = document.querySelector(".reveal-button");
const hiddenSection = document.querySelector(".hidden-section");

/* Callback function */
function revealSection() {
    if (hiddenSection.classList.contains("reveal")) {
        hiddenSection.classList.remove("reveal");
    } else {
        hiddenSection.classList.add("reveal");
    }
}

/* Event listener */
revealButton.addEventListener("click", revealSection, false);