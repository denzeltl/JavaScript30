const speed = document.querySelector(".speed");
const arrow = document.querySelector(".arrow");

navigator.geolocation.watchPosition(
    data => {
        speed.textContent = data.coords.speed;
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    err => {
        alert("OH NO!! : " + err);
    }
);
