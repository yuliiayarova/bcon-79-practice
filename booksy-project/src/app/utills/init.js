import { renderCategories } from "../render/categories";
import refs from "./refs";
import { fetchBookCategories } from "../services/get-books-categories";
import { renderBooks } from "../render/render-books";
import { fetchBooks } from "../services/fetch-books";

export function initCategories() {
  fetchBookCategories().then(data => {
    renderCategories(data, refs.categoriesList);
  });
}

export function initBooks() {
  fetchBooks().then(data => {
    renderBooks(data, refs.booksList);
  });
}
