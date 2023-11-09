function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

console.log(listaDeTeclas);
//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  console.log(instrumento);

  tecla.onclick = function () {
    tocaSom(idAudio);
    console.log(idAudio);
  };
  tecla.onkeydown = function () {
    tecla.classList.add("ativa");
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
