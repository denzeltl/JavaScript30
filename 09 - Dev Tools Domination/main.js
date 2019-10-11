const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log(`using backticks easily with variables`);

// Styled
console.log("%cTest", "font-size: 30px;");

// warning!
console.warn("Oh No");

// Error :|
console.error("This is an Error");

// Info
console.info("crocos eat 3-4 people per year");

// Testing
console.assert(1 === 2, "ERROR");

// clearing
// console.clear();

// Viewing DOM Elements
console.dir("element");

// Grouping together
console.group();
console.groupend();

// counting
console.count("word");

// timing
console.time();
