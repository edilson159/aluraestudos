import itsACpf from "./validate-cpf.js";
import isOfLegalAge from "./validate-age.js";

const fildsTheForm = document.querySelectorAll("[required]");
const form = document.querySelector('[data-formulario]')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const listAnswersta = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'rg': e.target.elements['rg'].value,
        'cpf': e.target.elements['cpf'].value,
        'aniversario': e.target.elements['aniversario'].value
    }
    localStorage.setItem('cadastro', JSON.stringify(listAnswersta))
    window.location.href = '../pages/abrir-conta-form-2.html'
})

fildsTheForm.forEach((fild) => {
  fild.addEventListener("blur", () => checkFild(fild));
  fild.addEventListener("ivalid", (event) => event.preventDefault());
});

const errorTypes = [
  "valueMissing",
  "patternMismatch",
  "tooShort",
  "customError",
];

const messages = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar.",
  },
  termos: {
    valueMissing: "Você deve aceitar nossos termos antes de continuar.",
  },
};

function checkFild(fild) {
  let message = "";
  fild.setCustomValidity('')  
  if (fild.name == "cpf" && fild.value.length >= 11) {
    itsACpf(fild);
  }

  if (fild.name == "aniversario" && fild.value != "") {
    isOfLegalAge(fild);
  }
  errorTypes.forEach((erro) => {
    if (fild.validity[erro]) {
      message = messages[fild.name][erro];
      console.log(message);
    }
  });
  const messageError = fild.parentNode.querySelector(".mensagem-erro");
  const validateTheImput = fild.checkValidity();

  if (!validateTheImput) {
    messageError.textContent = message;
  } else {
    messageError.textContent = "";
  }
}
