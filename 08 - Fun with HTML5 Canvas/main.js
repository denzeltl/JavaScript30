const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let endX = 0;
let endY = 0;
let hue = 0;
let lineSize = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set Context Settings
ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = "10";

// Draw Function
function draw(e) {
    if (isDrawing === false) return;

    // Draw on Canvas
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [endX, endY] = [e.offsetX, e.offsetY];

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 70 || ctx.lineWidth <= 5) {
        lineSize = !lineSize;
    }

    if (lineSize === true) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener("mousedown", e => {
    isDrawing = true;
    [endX, endY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
