export default function isOfLegalAge(fild) {
  const dateOfBirth = new Date(fild.value);
  if (!validateAge(dateOfBirth)) {
    fild.setCustomValidity("O usuário não é maior de idade");
  }
}

function validateAge(data) {
  const dateCurrent = new Date();
  const datePlus18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dateCurrent >= datePlus18;
}
