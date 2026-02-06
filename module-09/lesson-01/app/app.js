//* app store

const store = {
  notes: [
    // { id: 1, name: "Mango", body: "Mango is cute" },
    // { id: 2, name: "Ajax", body: "Ajax is awesome" },
    // { id: 3, name: "Poly", body: "Poly is nice" },
  ],
  appTheme: "light",
};

//* generate id instance
const g = new GenerateId();

const STORAGE_KEY = { notes: "notes", appTheme: "app-theme" };

//* elements
const form = document.querySelector(".js-form");
const notesList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const btnDelete = document.querySelector(".js-delete-button");
const themeToggler = document.querySelector(".js-theme-toggler");

setTheme(loadLS(STORAGE_KEY.appTheme));

//* listeners
form.addEventListener("submit", onFormSubmit);
notesList.addEventListener("click", deleteNote);
themeToggler.addEventListener("click", onTogglerClick);

const notesData = loadLS(STORAGE_KEY.notes);
if (notesData !== undefined) {
  store.notes = [...notesData];
  renderNotesMarkup(notesData);
}

//* functions
function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const noteData = {
    ...Object.fromEntries(new FormData(form)),
    id: g.generate(10),
  };

  store.notes = [...store.notes, noteData];
  saveLS(STORAGE_KEY.notes, store.notes);

  //* insert markup to list
  notesList.insertAdjacentHTML("beforeend", createNote(noteData));

  form.reset();
}

function renderNotesMarkup(notes = []) {
  if (notes === undefined) {
    return;
  }

  if (notes.length === 0) {
    notesList.innerHTML = "";
    return;
  }
  const markup = notes.map(createNote).join("");

  notesList.innerHTML = markup;
}

function createNote({ id, name, body }) {
  return `<li class="card js-card">
              <h5 class="card-header">${name}</h5>
              <div class="card-body">
                <p class="card-text">
                  ${body}
                </p>
                <button
                  class="btn btn-primary js-delete-button"
                  type="button"
                  data-noteId="${id}"
                >
                  Delete
                </button>
              </div>
            </li>`;
}

// * local storage service
function saveLS(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error.message);
  }
}

function loadLS(key) {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error.message);
  }
}

function deleteNote(event) {
  const currEl = event.target;
  if (!currEl.classList.contains("js-delete-button")) {
    return;
  }
  const id = currEl.dataset.noteid;
  const filteredNotes = store.notes.filter(note => {
    return note.id !== id;
  });
  store.notes = [...filteredNotes];
  renderNotesMarkup(store.notes);
  saveLS(STORAGE_KEY.notes, store.notes);
}

function setTheme(theme) {
  const currTheme = theme ?? "light";
  currTheme === "light"
    ? themeToggler
    : themeToggler.setAttribute("checked", "");
  themeToggler.value.currTheme;
  document.documentElement.setAttribute("data-bs-theme", currTheme);
  store.appTheme = currTheme;
}

function onTogglerClick(event) {
  const currTheme = store.appTheme === "light" ? "dark" : "light";
  setTheme(currTheme);
  saveLS(STORAGE_KEY.appTheme, currTheme);
}
