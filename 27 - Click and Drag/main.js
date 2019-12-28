const slider = document.querySelector(".items");
let mouseDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
    mouseDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
    mouseDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseleave", () => {
    mouseDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", e => {
    if (!mouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});
