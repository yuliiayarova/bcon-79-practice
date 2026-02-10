export function fetchBookCategories() {
  return fetch("https://books-backend.p.goit.global/books/category-list").then(
    res => {
      return res.json();
    }
  );
}
