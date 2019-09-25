const controlInputs = document.querySelectorAll(".controls input");

function applyData() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name);
}

controlInputs.forEach(input => input.addEventListener("change", applyData));

controlInputs.forEach(input => input.addEventListener("mousemove", applyData));
