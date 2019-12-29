const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll(".timer__button");
let countdown;

function startTimer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displaySeconds(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displaySeconds(secondsLeft);
    }, 1000);
}

function displaySeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const displayTimer = `${minutes}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
    timerDisplay.textContent = displayTimer;
    document.title = `Timer: ${displayTimer}`;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? "0" : ""}${minutes} ${hour > 12 ? "PM" : "AM"}`;
}

function buttonTimer() {
    const seconds = this.dataset.time;
    startTimer(seconds);
}

buttons.forEach(button => {
    button.addEventListener("click", buttonTimer);
});
document.customForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    startTimer(minutes * 60);
    this.reset();
});
