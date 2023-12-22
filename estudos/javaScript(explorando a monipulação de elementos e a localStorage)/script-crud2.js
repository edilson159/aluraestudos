const addTaskBtn = document.querySelector(".app__button--add-task");

const formAddTask = document.querySelector(".app__form-add-task");

const textArea = document.querySelector(".app__form-textarea");

const cancelButon = document.querySelector(".app__form-footer__button--cancel");

const btnRemoveCompletede = document.querySelector("#btn-remover-concluidas");

const btnRemoveAll = document.querySelector("#btn-remover-todas");

const ulTasks = document.querySelector(".app__section-task-list");

const paragraphDescriptionTask = document.querySelector(
  ".app__section-active-task-description"
);

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let SelectedTask = null;
let liSelectedTask = null;

function updateTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
updateTasks(tasks);

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
  paragraph.textContent = task.description;
  paragraph.classList.add("app__section-task-list-item-description");

  const button = document.createElement("button");
  button.classList.add("app_button-edit");

  button.onclick = () => {
    const newDescription = prompt("Qual é o novo nome da sua tarefa?");
    if (newDescription) {
      paragraph.textContent = newDescription;
      task.description = newDescription;
    }
  };

  const imgButton = document.createElement("img");
  imgButton.setAttribute("src", "./imagens/edit.png");
  button.append(imgButton);

  li.append(svg);
  li.append(paragraph);
  li.append(button);

  if (task.complete) {
    li.classList.add("app__section-task-list-item-complete");
    console.log(li);
    button.setAttribute("disabled", "disabled");
  } else {
    function activeTask(li, paragraphDescriptionTask, task, SelectedTask) {
      li.onclick = () => {
        document
          .querySelectorAll(".app__section-task-list-item-active")
          .forEach((Element) => {
            Element.classList.remove("app__section-task-list-item-active");
          });

        if (SelectedTask == task) {
          paragraphDescriptionTask.textContent = "";
          SelectedTask = null;
          liSelectedTask = null;
          return;
        }
        SelectedTask = task;
        liSelectedTask = li;
        paragraphDescriptionTask.textContent = task.description;

        li.classList.add("app__section-task-list-item-active");
      };
    }
  }

  activeTask(li, paragraphDescriptionTask, task, SelectedTask);

  return li;
}
creatTask(tasks);

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
      description: textArea.value,
      completed: false,
    };
    tasks.push(task);
    const elementTask = creatTask(task);
    ulTasks.append(elementTask);
    textArea.value = "";
    formAddTask.classList.add("hidden");
  });
}
onSubmit(formAddTask);

function cancelForm(cancelButon, formAddTask) {
  cancelButon.addEventListener("click", (evento) => {
    formAddTask.classList.add("hidden");
    textArea.value = "";
  });
}

cancelForm(cancelButon, formAddTask);

function traverseArray(creatTask) {
  tasks.forEach((task) => {
    const elementTask = creatTask(task);
    ulTasks.append(elementTask);
  });
}

traverseArray(creatTask);

document.addEventListener("focusFinished", () => {
  if (SelectedTask && liSelectedTask) {
    liSelectedTask.classList.remove("app__section-task-list-item-active");
    liSelectedTask.classList.add("app__section-task-list-item-complete");
    console.log(liSelectedTask);
    liSelectedTask.querySelector("button").setAttribute("disabled", "disabled");
    SelectedTask.complete = true;
    updateTasks();
  }
});

function removingCompletedTasks(selector) {
  const removeTasks = (completeOnly) => {
    //const selector = completeOnly ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
    let selector = ".app__section-task-list-item";

    if (completeOnly) {
      selector = ".app__section-task-list-item-complete";
    }
    document.querySelectorAll("selector").forEach(element => {
      element.remove;
    });
    tasks = completeOnly ? tasks.filter(task => !task.complete) : [];

    updateTasks();
  };
  btnRemoveCompletede.onclick = () => removeTasks(true);
  btnRemoveAll.onclick = () => removeTasks(false);
}

removingCompletedTasks('selector');
