const images = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", debounce(slideImage));

function slideImage(e) {
    images.forEach(image => {
        const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
        const imageBottom = image.offsetTop + image.height;
        if (slideInAt > image.offsetTop && window.scrollY < imageBottom) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    });
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
