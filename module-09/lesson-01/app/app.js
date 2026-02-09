import refs from "./refs.js";
import { store } from "./store.js";
import { STORAGE_KEY, g } from "./variables.js";
import { setTheme, onTogglerClick } from "./theme-settings.js";
import {
  onFormSubmit,
  renderNotesMarkup,
  createNote,
  deleteNote,
} from "./notes.js";
import { saveLS, loadLS } from "./storage-settings.js";

setTheme(loadLS(STORAGE_KEY.appTheme));

//* listeners
refs.form.addEventListener("submit", onFormSubmit);
refs.notesList.addEventListener("click", deleteNote);
refs.themeToggler.addEventListener("click", onTogglerClick);

const notesData = loadLS(STORAGE_KEY.notes);
if (notesData !== undefined) {
  store.notes = [...notesData];
  renderNotesMarkup(notesData);
}
