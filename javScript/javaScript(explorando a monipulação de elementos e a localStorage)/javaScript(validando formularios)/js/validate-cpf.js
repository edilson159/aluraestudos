export default function itsACpf(fild) {
  const cpf = fild.value.replace(/\.|-/g, "");
  if (validateRepeatingDigit(cpf) || validateOneDigit(cpf) || validateSecundDigit(cpf)) {
    fild.setCustomValidity('Esse CPF não é valido!')
  }
}

function validateRepeatingDigit(cpf) {
  const repeatingDigit = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  return repeatingDigit.includes(cpf);
}

function validateOneDigit(cpf) {
  let sum = 0;
  let multiplier = 10;

  for (let size = 0; size < 9; size++) {
    sum += cpf[size] * multiplier;
    multiplier--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[9];
}


function validateSecundDigit(cpf) {
  let sum = 0;
  let multiplier = 11;

  for (let size = 0; size < 10; size++) {
    sum += cpf[size] * multiplier;
    multiplier--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[10];

}


