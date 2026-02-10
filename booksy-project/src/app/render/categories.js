export function renderCategories(categories = [], el) {
  const markup = categories
    .map(({ list_name }) => {
      return `
        <li class="sidebar-item">
          <button type="button" class="sidebar-btn" data-category="${list_name}">
            ${list_name || "All categories"}
          </button>
        </li>
        `;
    })
    .join("");
  el.innerHTML = markup;
}
