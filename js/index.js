const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const num = document.getElementById("num");
let count = 0;

function increaseCount() {
    count++
    num.textContent =  count;
}

increaseCount();

function decreaseCount() {
    count--;
    num.textContent = count;
}

decreaseCount();

btnPlus.addEventListener("click", increaseCount);

btnMinus.addEventListener("click", decreaseCount);

