const h1El = document.getElementById("answer-currency");
console.log(h1El);
const themeEl = document.getElementById("THEME");
const inputEl = document.getElementById("input-currency");
console.log(inputEl);
const selectEl = document.getElementById("option-currency")
function calculate(){
    h1El.innerHTML = "The currency =" + " " + inputEl.value / selectEl.value 
}
btn.addEventListener('click', calculate );