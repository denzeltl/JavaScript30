const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const height = y / this.offsetHeight;
    const percent = `${Math.round(height * 100)}%`;
    const min = 0.4;
    const max = 4;
    const playbackRate = height * (max - min) + min;

    speedBar.style.height = percent;
    speedBar.textContent = `${playbackRate.toFixed(1)}x`;
    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);
