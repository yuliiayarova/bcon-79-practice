const formEl = document.querySelector(".header-form");
const taskList = document.querySelector(".tasks-list");
const tasks = [
  { id: 1, name: "task1", description: "descr", completed: false },
  { id: 2, name: "task1", description: "descr", completed: false },
];

formEl.addEventListener("submit", handleFormSubmit);
taskList.addEventListener("click", handleButtonClick);
taskList.addEventListener("click", handleCheckboxClick);
renderTasks(tasks);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const taskName = form.elements.taskName.value.trim();
  const taskDescr = form.elements.taskDescription.value.trim();
  const task = {
    id: Date.now(),
    name: taskName,
    description: taskDescr,
    completed: false,
  };
  tasks.push(task);
  addTask(task);
  form.reset();
}

function addTask(task) {
  const taskMarkup = `<li class="task-list-item">
  <div>
  <input ${task.completed ? "checked" : ""} type="checkbox" />
   <button class="task-list-item-btn" id="${task.id}">Delete</button>
   </div>
  <h3 class="${task.completed ? "completed" : ""}">${task.name}</h3>
  <p class="${task.completed ? "completed" : ""}" > ${task.description}</p>
</li>`;

  taskList.insertAdjacentHTML("beforeend", taskMarkup);
}

function deleteTask(tasks, taskId) {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function handleButtonClick(event) {
  const clickedEl = event.target;
  if (clickedEl.nodeName === "BUTTON") {
    deleteTask(tasks, Number(clickedEl.id));
    renderTasks(tasks);
  }
}

function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.map(addTask);
}

function handleCheckboxClick(event) {
  if (event.target.nodeName !== "INPUT") {
    return;
  }
  const itemEl = event.target.closest(".task-list-item");
  // if (event.target.checked) {
  itemEl.querySelector("h3").classList.toggle("completed");
  itemEl.querySelector("p").classList.toggle("completed");
  // }
}
