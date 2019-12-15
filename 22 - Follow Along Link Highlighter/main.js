const links = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function addHighlight() {
    const getCoords = this.getBoundingClientRect();
    const coords = {
        width: getCoords.width + 8,
        height: getCoords.height,
        left: getCoords.left + window.scrollX - 4,
        top: getCoords.top + window.scrollY
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(link => {
    link.addEventListener("mouseover", addHighlight);
});
