const startCameraButton = document.querySelector("[data-video-botao ]");
const fildCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const takePhotoButton = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-mensagem]");
const sendPhotoButton = document.querySelector("[data-enviar]");

let imageURL = "";

startCameraButton.addEventListener("click", async function () {
  const startVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  startCameraButton.style.display = "none";
  fildCamera.style.display = "block";
  video.srcObject = startVideo;
});

takePhotoButton.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.heigth);
  imageURL = canvas.toDataURL("image/jpeg");

  fildCamera.style.display = "none";
  message.style.display = "block";
});

sendPhotoButton.addEventListener("click", () => {
  const receberDadosExistetes = localStorage.getItem("cadastro");
  const convertRetorno = JSON.parse(receberDadosExistetes);

  convertRetorno.imagem = imageURL;

  localStorage.setItem("cadastro", JSON.stringify(convertRetorno));

  window.location.href = "../pages/abrir-conta-form-3.html";
});
