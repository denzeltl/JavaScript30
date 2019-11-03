const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

function addItem(e) {
    e.preventDefault();
    const name = this.querySelector("[name = 'item']").value;
    const item = {
        name,
        done: false
    };

    items.push(item);
    showItems(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

function showItems(items, itemsList) {
    itemsList.innerHTML = items
        .map((item, i) => {
            return `
            <li>
                <input type='checkbox' id='item${i}' data-index='${i}' ${item.done ? "checked" : ""} />
                <label for='item${i}'>${item.name}</label>
            </li>
        `;
        })
        .join("");
}

function toggleDone(e) {
    if (e.target.matches("input")) {
        const index = e.target.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem("items", JSON.stringify(items));
    }
}

showItems(items, itemsList);
