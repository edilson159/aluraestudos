export default function itsACpf(fild) {
  const cpf = fild.value.replace(/\.|-/g, "");
  checkRepeatingNumbers(cpf)
  console.log(checkRepeatingNumbers(cpf));
}

function checkRepeatingNumbers(cpf) {
  const repeatingNumbers =
  [
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
  return repeatingNumbers.includes(cpf)
}
