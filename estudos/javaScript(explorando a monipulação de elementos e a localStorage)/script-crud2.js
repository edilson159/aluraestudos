const addTaskBtn = document.querySelector(".app__button--add-task");
const formAddTask = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTasks = document.querySelector(".app__section-task-list");
const paraghaphDescriptionTask = document.querySelector(
  ".app__section-active-task-description"
);

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let selectedTask = null;
let liSelectedTask = null;

function updateTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const cancelButton = document.querySelector(
  ".app__form-footer__button--cancel");
const deleteButton = document.querySelector(
  ".app__form-footer__button--delete");
const removeCompletedTasksBtn = document.querySelector('#btn-remover-concluidas')
const removeAllTasksBtn = document.querySelector('#btn-remover-todas')

function createElementTasks(task) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
  <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
  `;

  const paraghaph = document.createElement("p");
  paraghaph.classList.add("app__section-task-list-item-description");
  paraghaph.textContent = task.description;

  const button = document.createElement("button");
  button.classList.add("app_button-edit");
  const imageButton = document.createElement("img");

  button.onclick = () => {
    const newDescription = prompt("Qual é a nova definição da sua tarefa?");
    if (newDescription) {
      paraghaph.textContent = newDescription;
      task.description = newDescription;
      updateTasks();
    }
  };

  imageButton.setAttribute("src", "imagens/edit.png");
  button.append(imageButton);

  li.append(svg);
  li.append(paraghaph);
  li.append(button);

  if (task.complet) {
    li.classList.add('app__section-task-list-item-complete')
    button.setAttribute('disabled','disabled')
  } else {
     li.onclick = () => {
    document
      .querySelectorAll(".app__section-task-list-item-active")
      .forEach((element) => {
        element.classList.remove("app__section-task-list-item-active");
      });
    if (selectedTask == task) {
      paraghaphDescriptionTask.textContent = "";
      selectedTask = null;
      liSelectedTask = null
      return;
    }
    selectedTask = task;
    liSelectedTask = li
    paraghaphDescriptionTask.textContent = task.description;

    li.classList.add("app__section-task-list-item-active");
  };
  }

  return li;
}

function showForm(addTaskBtn, formAddTask) {
  addTaskBtn.addEventListener("click", () => {
  formAddTask.classList.toggle("hidden");
});
}
showForm(addTaskBtn, formAddTask)

function onSubmit(formAddTask,tasks, ulTasks) {
  formAddTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = {
    description: textArea.value,
  };
  tasks.push(task);
  const elementTask = createElementTasks(task);
  ulTasks.append(elementTask);
  textArea.value = "";
  formAddTask.classList.add("hidden");
  updateTasks();
});
}
onSubmit(formAddTask,tasks, ulTasks)

function traverseArray(createElementTasks) {
  tasks.forEach((task) => {
  const elementTask = createElementTasks(task);
  ulTasks.append(elementTask);
});
}
traverseArray(createElementTasks)

function cancelTask(cancelButton) {
  cancelButton.addEventListener("click", () => {
  textArea.value = "";
  formAddTask.classList.add("hidden");
});
}
cancelTask(cancelButton) 

function deleteTask(deleteButton) {
  deleteButton.addEventListener("click", () => {
  textArea.value = "";
});
}
deleteTask(deleteButton)


document.addEventListener('focusFinished', () => {
  if (selectedTask && liSelectedTask) {
    liSelectedTask.classList.remove('app__section-task-list-item-active')
    liSelectedTask.classList.add('app__section-task-list-item-complete')
    liSelectedTask.querySelector('button').setAttribute('disabled','disabled')
    selectedTask.complet = true
    updateTasks()
  }
})

const removeTasks = (completedOnly) => {
  const selector = completedOnly ? '.app__section-task-list-item-complete' : ".app__section-task-list-item"
  document.querySelectorAll(selector).forEach(element => {
    element.remove()
  });
  tasks = completedOnly ? tasks.filter(task => !task.complet) : []
  updateTasks()
}

removeCompletedTasksBtn.onclick = () => removeTasks(true)
removeAllTasksBtn.onclick = () => removeTasks(false)