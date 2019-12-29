const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timesUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const randHole = Math.floor(Math.random() * holes.length);
    const hole = holes[randHole];
    if (lastHole === hole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timesUp) peep();
    }, time);
}

function addScore() {
    score++;
    scoreBoard.textContent = score;
    this.classList.remove("up");
}

function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    timesUp = false;
    peep();
    setTimeout(() => {
        timesUp = true;
    }, 5000);
}

moles.forEach(mole => mole.addEventListener("click", addScore));
