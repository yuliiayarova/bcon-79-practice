export function fetchBooks(category = "") {
  return fetch("https://books-backend.p.goit.global/books/top-books").then(
    res => {
      return res.json();
    }
  );
}
