import refs from "./refs.js";
import { saveLS } from "./storage-settings.js";
import { store } from "./store.js";
import { STORAGE_KEY } from "./variables.js";

export function setTheme(theme) {
  const currTheme = theme ?? "light";
  currTheme === "light"
    ? refs.themeToggler
    : refs.themeToggler.setAttribute("checked", "");
  refs.themeToggler.value.currTheme;
  document.documentElement.setAttribute("data-bs-theme", currTheme);
  store.appTheme = currTheme;
}

export function onTogglerClick(event) {
  const currTheme = store.appTheme === "light" ? "dark" : "light";
  setTheme(currTheme);
  saveLS(STORAGE_KEY.appTheme, currTheme);
}
