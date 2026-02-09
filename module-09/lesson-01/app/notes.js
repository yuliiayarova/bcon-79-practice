import refs from "./refs.js";
import { saveLS } from "./storage-settings.js";
import { store } from "./store.js";
import { g, STORAGE_KEY } from "./variables.js";

export function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const noteData = {
    ...Object.fromEntries(new FormData(form)),
    id: g.generate(10),
  };

  store.notes = [...store.notes, noteData];
  saveLS(STORAGE_KEY.notes, store.notes);

  //* insert markup to list
  refs.notesList.insertAdjacentHTML("beforeend", createNote(noteData));

  form.reset();
}

export function renderNotesMarkup(notes = []) {
  if (notes === undefined) {
    return;
  }

  if (notes.length === 0) {
    refs.notesList.innerHTML = "";
    return;
  }
  const markup = notes.map(createNote).join("");

  refs.notesList.innerHTML = markup;
}

export function createNote({ id, name, body }) {
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

export function deleteNote(event) {
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
