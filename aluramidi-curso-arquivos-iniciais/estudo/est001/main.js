function tocaSom (idElementoAudio) {
   document.querySelector(idElementoAudio).play();
}
 
const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto
for ( let contador = 0; contador < listaDeTeclas.length; contador++) {
   
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1] ;
   const idAudio = `#som_${instrumento}`;

   console.log(idAudio);
   listaDeTeclas[contador].onclick= function () {
      tocaSom('#som_tecla_pom');
   } ;

   tecla.onkeydown = function (){
      tecla.classList.add('ativa');
   }

   tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
   }

}
