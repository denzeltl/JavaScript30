const cities = [];
const searchBar = document.querySelector(".search");
const list = document.querySelector(".suggestions");

fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
    .then(response => response.json())
    .then(json => {
        cities.push(...json);
    });

searchBar.addEventListener("change", displayInputtedWord);
searchBar.addEventListener("keyup", displayInputtedWord);

function matchInputtedWord(inputtedWord, cities) {
    return cities.filter(place => {
        const regex = new RegExp(inputtedWord, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayInputtedWord() {
    const matchArray = matchInputtedWord(this.value, cities);
    const html = matchArray
        .map(place => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
        })
        .join("");
    list.innerHTML = html;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
