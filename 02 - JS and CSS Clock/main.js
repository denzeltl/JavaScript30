const secondsHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

const setDate = () => {
    const getDate = new Date();

    const seconds = getDate.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;

    const mins = getDate.getMinutes();
    const minutesDegree = (mins / 60) * 360 + 90;

    const hours = getDate.getHours();
    const hoursDegree = (hours / 12) * 360 + 90;

    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minsHand.style.transform = `rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

    if (secondsDegree === 90) {
        secondsHand.style.transition = "none";
        secondsHand.style.transitionTimingFunction = "none";
    } else {
        secondsHand.style.transition = "all 0.05s";
        secondsHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    }
};

setInterval(setDate, 1000);
