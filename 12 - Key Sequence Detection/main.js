const pressedKey = [];
const secretCode = "denzel";

window.addEventListener("keyup", e => {
    pressedKey.push(e.key);
    pressedKey.splice(-7, pressedKey.length - secretCode.length);

    if (pressedKey.join("") === secretCode) {
        cornify_add();
    }
});
