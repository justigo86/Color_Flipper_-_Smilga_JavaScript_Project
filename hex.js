const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("button");
const color = document.querySelector("main");
const span = document.querySelector("span");

const clickButton = () => {
    document.body.style.background = color.value;
    span.textContent = color.value;
}

const makeColor = () => {
    let char = '';
    for(i = 0; i < 6; i++) {
        let rand = hex[Math.floor(Math.random() * hex.length)];
        char += rand;
    }
    return char;
}

let randomColor = () => {
    color.value = "#" + makeColor();
    clickButton();
}

button.addEventListener("click", randomColor);