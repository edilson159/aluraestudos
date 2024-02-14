export default function isOfLegalAge(fild) {
  const dateOfBirth = new Date(fild.value);
  validateAge(dateOfBirth);
  console.log(validateAge(dateOfBirth));
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
