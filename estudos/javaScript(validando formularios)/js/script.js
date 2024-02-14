import itsACpf from "./check-cpf.js";
import isOfLegalAge from "./validate-age.js";

const fildsTheForm = document.querySelectorAll('[required]')

fildsTheForm.forEach((fild) => {
    fild.addEventListener('blur', () => checkFild(fild))
})

function checkFild(fild) {
    if (fild.name == 'cpf' && fild.value.length >= 11) {
        itsACpf(fild)
    }

    if (fild.name == 'aniversario' && fild.value != "") {
        isOfLegalAge(fild)
    }
}