

function playNoise(e) {
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return NULL;

    keys.classList.add("playing");;
    audio.currentTime = 0;
    audio.play();

    stopTime(function(){
        keys.classList.remove("playing");
    }, 100);
}

window.addEventListener("keydown", playNoise);