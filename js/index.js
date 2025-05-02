const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const num = document.getElementById("num");
const saveBtn = document.getElementById("save-btn");
const paragraph = document.createElement("p");
let count = 0;
const flowContainer = document.querySelector(".flow-container");
paragraph.classList.add("saved-count");
flowContainer.appendChild(paragraph);

function increaseCount() {
    count++
    num.textContent =  count;
}

increaseCount();

function decreaseCount() {
    if(count >= 1)
    count--;
    num.textContent = count;
}

decreaseCount();

// Create save button

function saveCount() {
    let countSum = count;
    paragraph.textContent = `Saved count: ${countSum}`;
    num.textContent = 0;
    count = 0;
}

saveCount();

saveBtn.addEventListener("click", saveCount);

btnPlus.addEventListener("click", increaseCount);

btnMinus.addEventListener("click", decreaseCount);

