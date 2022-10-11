

/* Selecting DOM element */
const button = document.querySelector("button");

/* Callback function */
function alertButton() {
    alert('Hi Person  ');
}

/* Event listener */
button.addEventListener("click", alertButton, false);