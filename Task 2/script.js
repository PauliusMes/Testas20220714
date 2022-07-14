/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const buttonPresed = document.getElementById("btn__element");
buttonPresed.addEventListener("click", counter);
let count = 0;

function counter() {
count++;
document.getElementById("btn__state").textContent = count;
console.log(count);
};
