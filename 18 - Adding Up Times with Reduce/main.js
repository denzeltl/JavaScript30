const dataTimes = document.querySelectorAll("[data-time]");
const dataList = [...dataTimes];

const dataListTime = dataList
    .map(function(list) {
        return list.dataset.time;
    })
    .map(function(time) {
        const [mins, secs] = time.split(":").map(parseFloat);
        return mins * 60 + secs;
    })
    .reduce(function(total, num) {
        return total + num;
    });

let secondsLeft = dataListTime;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, minutes, secondsLeft);
