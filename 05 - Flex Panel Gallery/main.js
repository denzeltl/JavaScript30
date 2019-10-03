const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function activePanel(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("active-panel");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", activePanel));
