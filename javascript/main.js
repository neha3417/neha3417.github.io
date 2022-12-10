//play noise

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return null;
    keys.classList.add("playing");;
    audio.currentTime = 0;
    audio.play();

    setTimeout(function(){
        keys.classList.remove("playing");
    }, 100);
}

//event listener

window.addEventListener("keydown", playSound);

