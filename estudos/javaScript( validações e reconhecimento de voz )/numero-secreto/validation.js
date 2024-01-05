function rightKick(kick) {
    const number = +kick

    if (kickforinvalid(number)) {
        displayingNumber.innerHTML += '<div>valor inválido</div>'
    }

    if (numberIsGreaterOrLessThnAllowed(number)) {
        displayingNumber.innerHTML += `<div>valor invalido: Fale um numero entre ${lowerValue} e ${highestValue}</div>`
    }

    if(number == numberSecret) {
        document.body.innerHTML = `
          <h2>Você acertou!</h2>
          <h3>O número secreto era ${numberSecret}</h3>
        `
    }
}


function kickforinvalid(number) {
    return Number.isNaN(number)
}

function numberIsGreaterOrLessThnAllowed(number) {
    return number > highestValue || number < lowerValue
}
numberIsGreaterOrLessThnAllowed()