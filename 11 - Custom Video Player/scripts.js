// Select Elements
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const bar = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const playBtn = document.querySelector(".toggle");
const ranges = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll(".player__button");

// Functions
function playVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function pauseIcon() {
    if (video.paused) {
        playBtn.textContent = "►";
    } else {
        playBtn.textContent = "II";
    }
}

function adjustSlider() {
    video[this.name] = this.value;
}

function skipVideo() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function adjustProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrubVideo(e) {
    const scrubTime = (e.offsetX / bar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Add event listeners
video.addEventListener("click", playVideo);
video.addEventListener("play", pauseIcon);
video.addEventListener("pause", pauseIcon);
video.addEventListener("timeupdate", adjustProgress);
let scrubClick = false;
bar.addEventListener("click", scrubVideo);
bar.addEventListener("mousemove", e => {
    if (scrubClick) {
        scrubVideo(e);
    } else {
    }
});
bar.addEventListener("mousedown", () => (scrubClick = true));
bar.addEventListener("mouseup", () => (scrubClick = false));
playBtn.addEventListener("click", playVideo);
ranges.forEach(slider => slider.addEventListener("change", adjustSlider));
skipButtons.forEach(button => button.addEventListener("click", skipVideo));
