function rightKick(kick) {
  const number = +kick;

  if (kickForInvalid(number)) {
    displayingNumber.innerHTML += "<div>valor invalido</div>";
    return;
  }

  if (numberIsHightOrthanAllowed(number)) {
    displayingNumber.innerHTML += `<div>valor invalido: Fale um número entre ${lowerValue} e ${highestValue}</div>`;
    return;
  }

  if (number == numberSecret) {
    document.body.innerHTML = `
    <h2>Você acertou !</h2>
    <h3>O número secreto era ${numberSecret}</h3>
    <button id='jogar novamente' class='btn-jogar'>Jogar novamente </button>
    `;
  } else if (number > numberSecret) {
    displayingNumber.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
  } else {
    displayingNumber.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
  }
}
function kickForInvalid(number) {
  return Number.isNaN(number);
}

function numberIsHightOrthanAllowed(number) {
  return number > highestValue || number < lowerValue;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar novamente") {
    window.location.reload();
  }
});
