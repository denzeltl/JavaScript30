const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100;

hero.addEventListener("mousemove", shadow);

function shadow(e) {
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    let walkX = Math.round((x / width) * walk - walk / 2);
    let walkY = Math.round((y / height) * walk - walk / 2);

    text.style.textShadow = `${walkX}px ${walkY}px 0 #bbb`;
}
