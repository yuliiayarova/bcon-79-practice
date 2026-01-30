const store = {
  tasks: [
    {
      id: 1,
      taskName: "task1",
      taskDesc: "task1desc",
    },
    {
      id: 2,
      taskName: "task2",
      taskDesc: "task2desc",
    },
  ],
};
const formEl = document.querySelector(".header-form");
const taskList = document.querySelector(".tasks-list");
const themeToggle = document.querySelector("#themeToggle");

init();
formEl.addEventListener("submit", onFormSubmit);
taskList.addEventListener("click", onTasksClick);
themeToggle.addEventListener("click", onToggleTheme);

function onFormSubmit(event) {
  event.preventDefault();
  const taskDesc = event.target.elements.taskDescription.value.trim();
  const taskName = event.target.elements.taskName.value.trim();
  if (!taskName || !taskDesc) {
    return alert("Всі поля мають бути заповнені!");
  }
  const task = {
    id: Date.now(),
    taskName,
    taskDesc,
  };

  store.tasks = [...store.tasks, task];

  taskList.insertAdjacentHTML("beforeend", createTaskMarkup(task));
  event.target.reset();
}

function createTaskMarkup(task) {
  return `<li class="task-list-item">
  <button class="task-list-item-btn" data-id="${task.id}">Delete</button>
  <h3>${task.taskName}</h3>
  <p>${task.taskDesc}</p>
</li>`;
}

function init() {
  if (store.tasks.length === 0) {
    return;
  }
  taskList.innerHTML = store.tasks.map(createTaskMarkup).join("");
}

function onTasksClick(event) {
  const currentEl = event.target;
  if (currentEl.nodeName !== "BUTTON") {
    return;
  }
  const taskID = +currentEl.dataset.id;
  const filteredTasks = store.tasks.filter(task => taskID !== task.id);
  taskList.innerHTML = filteredTasks.map(createTaskMarkup).join("");
  store.tasks = filteredTasks;
}

function onToggleTheme(event) {
  const bodyEL = event.target.closest("body");
  const isLightTheme = bodyEL.classList.contains("theme-light");
  if (isLightTheme) {
    bodyEL.classList.replace("theme-light", "theme-dark");
    return;
  }
  bodyEL.classList.replace("theme-dark", "theme-light");
}
