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
const themeToggleBtn = document.querySelector("#themeToggle");
const bodyEl = document.body;

init();
formEl.addEventListener("submit", onFormSubmit);
taskList.addEventListener("click", onTasksClick);
themeToggleBtn.addEventListener("click", onToggleTheme);

function onFormSubmit(event) {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value.trim();
  const taskDesc = event.target.elements.taskDescription.value.trim();
  if (!taskName || !taskDesc) {
    return alert("All field must be filled");
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
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const taskId = Number(event.target.dataset.id);
  const filteredTasks = store.tasks.filter(task => taskId !== task.id);
  taskList.innerHTML = filteredTasks.map(createTaskMarkup).join("");
  store.tasks = filteredTasks;
}

function onToggleTheme() {
  bodyEl.classList.toggle("theme-light");
  bodyEl.classList.toggle("theme-dark");

  // const isLightTheme = bodyEl.classList.contains("theme-light");
  // return isLightTheme
  //   ? bodyEl.classList.replace("theme-light", "theme-dark")
  //   : bodyEl.classList.replace("theme-dark", "theme-light");
}
