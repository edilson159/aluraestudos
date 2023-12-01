const addTaskBtn = document.querySelector(".app__button--add-task");

const formAddTask = document.querySelector(".app__form-add-task");

const textArea = document.querySelector(".app__form-textarea");

const removeButon = document.querySelector(".app__form-footer__button--cancel");

const ulTasks = document.querySelector(".app__section-task-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function creatTask(task) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
        <svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>

    `;
  const paragraph = document.createElement("p");
  paragraph.textContent = task.descricao;
  paragraph.classList.add('app__section-task-list-item-description')

  const button = document.createElement("button");
  button.classList.add('app_button-edit')

  const imgButton = document.createElement("img");
  imgButton.setAttribute("src", "./imagens/edit.png");
  button.append(imgButton);

  li.append(svg);
  li.append(paragraph);
  li.append(button);

  return li;
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
    const elementTask = creatTask(task)
    ulTasks.append(elementTask)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    textArea.value = "";
    formAddTask.classList.add('hidden')
  });
}
onSubmit(formAddTask, removeButon);

function removeForm(removeButon, formAddTask) {
  removeButon.addEventListener("click", (evento) => {
    formAddTask.classList.add("hidden");
    textArea.value = "";
  });
}

removeForm(removeButon, formAddTask);

function traverseArray (creatTask) {
  tasks.forEach((task) => {
  console.log(task)
  const elementTask = creatTask(task);
  ulTasks.append(elementTask);
  
});
}

traverseArray(creatTask)

