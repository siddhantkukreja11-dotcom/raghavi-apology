const musicBtn = document.querySelector(".music-btn");
const song = document.getElementById("song");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {
        song.play();
        musicBtn.textContent = "⏸ Pause Music";
        isPlaying = true;
    } else {
        song.pause();
        musicBtn.textContent = "🎵 Play Mast Magan";
        isPlaying = false;
    }

});
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

        document.querySelector(".hero").classList.remove("hidden");

    }, 5000);

});