import { normalizeBooks } from "../utills/normalize-books";

export function renderBooks(books = [], el) {
  const booksList = normalizeBooks(books);
  const markup = booksList
    .map(
      ({
        title,
        author,
        price,
        book_image,
        book_image_width,
        book_image_height,
      }) => {
        return `<article class="books-item">
          <div class="books-item-cover">
            <img
              class="books-item-ill"
              src="${book_image}"
              alt="${title}"
              width="${book_image_width}"
              height="${book_image_height}"
            />
          </div>
          <div class="books-item-body">
            <h3 class="books-item-title">${title}</h3>
            <p class="books-item-descr">${author}</p>
            <p class="books-item-price">$${price}</p>
          </div>
          <button class="books-item-btn" type="button">Learn More</button>
        </article>`;
      }
    )
    .join("");
  el.innerHTML = markup;
}
