const lowerValue = 1;
const highestValue = 100;
const elementMn = document.querySelector("#menor-valor");
const elementMo = document.querySelector("#maior-valor");

const numberSecret = generatesRandomNumber();

function generatesRandomNumber(params) {
  return parseInt(Math.random() * highestValue + 1);
}

console.log("numero secreto", numberSecret);

elementMn.innerHTML = lowerValue
elementMo.innerHTML = highestValue;