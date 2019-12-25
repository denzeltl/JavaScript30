const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener("click", logText));
button.addEventListener(
    "click",
    () => {
        console.log("CLICKED!!!");
    },
    {
        once: true
    }
);
