const addTaskBtn = document.querySelector(".app__button--add-task");

const formAddTask = document.querySelector(".app__form-add-task");

const textArea = document.querySelector(".app__form-textarea");

const removeButon = document.querySelector(".app__form-footer__button--cancel");

const tasks = [];

function creatTask(task) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
    <svg>
        <svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>

    `;
  const Paragraph = document.createElement("p");
  Paragraph.textContent = task.descricao;
  const button = document.createElement("button");
  const imgButton = document.createElement("img");

  imgButton.setAttribute("src", "./imagens/edit.png");
  button.append(imgButton);

  li.append(svg);
  li.append(Paragraph);
  li.append(button);
}

function showForm(addTaskBtn) {
  addTaskBtn.addEventListener("click", () => {
    formAddTask.classList.remove("hidden");
  });
}
showForm(addTaskBtn);

function onSubmit(formAddTask) {
  formAddTask.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const task = {
      descricao: textArea.value,
      concluida: false,
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    textArea.value = "";
  });
}
onSubmit(removeButon, formAddTask);

function removeForm(removeButon) {
  removeButon.addEventListener("click", () => {
    formAddTask.classList.add("hidden");
    textArea.value = "";
  });
}

removeForm(removeButon, addTaskBtn);
