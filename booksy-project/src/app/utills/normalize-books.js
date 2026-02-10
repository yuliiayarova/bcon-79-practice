export function normalizeBooks(books = []) {
  return books.reduce((acc, book) => {
    const { books } = book;
    acc.push(books[0]);
    return acc;
  }, []);
}
