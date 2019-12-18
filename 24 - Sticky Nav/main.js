const navbar = document.getElementById("main");
const offsetNavbarTop = navbar.offsetTop;

function stickyNav() {
    if (window.scrollY >= offsetNavbarTop) {
        document.body.style.paddingTop = `${navbar.offsetHeight}px`;
        document.body.classList.add("sticky");
    } else {
        document.body.style.paddingTop = `0`;
        document.body.classList.remove("sticky");
    }
}

window.addEventListener("scroll", stickyNav);
