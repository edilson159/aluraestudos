const taskListContainer = document.querySelector(".app__section-task-list");

const formTask = document.querySelector(".app__form-add-task ");
const toggleFormTaskBtn = document.querySelector(".app__button--add-task ");
const formLabel = document.querySelector(".app__form-label");
const textarea = document.querySelector(".app__form-textarea");

let tarefas = [];

const taskIconSvg = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF" />
    <path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E" />
</svg>
`;

const taskIconSvgActive = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#00F4BF" />
    <path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#fff" />
</svg>
`;

function creatTask(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");
  const svgIcon = document.createElement("svg");
  svgIcon.innerHTML = taskIconSvg;
  svgIcon.addEventListener("click", () => {
    changeCheck(tarefa);
    changeIcon(tarefa.concluida, svgIcon);
    console.log(tarefa.concluida);
  });

  const paragraph = document.createElement("p");
  paragraph.classList.add("app__section-task-list-item-description");

  paragraph.textContent = tarefa.descrição;

  li.appendChild(svgIcon);
  li.appendChild(paragraph);
  return li;
}

tarefas.forEach((task) => {
  const taskItem = creatTask(task);
  taskListContainer.appendChild(taskItem);
});

toggleFormTaskBtn.addEventListener("click", () => {
  formLabel.textContent = "Adicionando Tarefas";
  formTask.classList.toggle("hidden");
});

formTask.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const task = {
    descrição: textarea.value,
    concluida: false,
  };
  tarefas.push(task);
  const taskItem = creatTask(task);
  taskListContainer.appendChild(taskItem);
  textarea.value = "";
});

function removeForm(removeButton) {
  removeButton.addEventListener("click", () => {
    formTask.classList.add("hidden");
  });
}

const removeButton = document.querySelector(
  ".app__form-footer__button--cancel"
);
removeForm(removeButton);

function changeIcon(concluida, svgIcon) {
  if (concluida == true) {
    svgIcon.innerHTML = taskIconSvgActive;
  } else {
    svgIcon.innerHTML = taskIconSvg;
  }
}

function changeCheck(task) {
  task.concluida = !task.concluida;
}

const buttonCheck = document.querySelector(".app__section-task-icon-status");
