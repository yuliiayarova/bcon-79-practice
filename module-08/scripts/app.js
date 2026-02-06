// TODO: Get posts info
// console.log(posts);

const postsContainer = document.querySelector(".cards");
const form = document.querySelector(".search-form");
const toastEl = document.querySelector(".toast");
const spinnerEl = document.querySelector(".spinner");

form.addEventListener("submit", onSearchFormSubmit);

renderPosts(posts);

function renderPosts(posts = []) {
  if (posts.length === 0) {
    return;
  }

  const markup = posts
    .map(
      ({
        id,
        title,
        body,
        tags,
        reactions: { likes, dislikes },
        views,
        userId,
        coverImage,
      }) => {
        return `<li class="card border-dark mb-3" data-userid="${userId}" data-postId="${id}" >
            <img
              src="${coverImage}"
              class="card-img-top"
              alt="${title}"
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>history</small>
                      </li>
                  
                    ${createTags(tags)}
                  </ul>
                </div>

                <ul class="card-meta-likes">
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-up"></i> <small>${likes}</small>
                  </li>
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-down"></i> <small>${dislikes}</small>
                  </li>
                </ul>

                <p class="card-meta-views m-0 text-black-50 fw-lighter">
                  <i class="bi bi-eye"></i> <small>305</small>
                </p>
              </div>
              <hr />
              <p class="card-text">
                ${body}
              </p>
            </div>
          </li>`;
      }
    )
    .join("");

  postsContainer.innerHTML = "";
  postsContainer.insertAdjacentHTML("beforeend", markup);
}

function createTags(tags) {
  return tags
    .map(tag => {
      `  
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>american</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${tag}</small>
                    </li>`;
    })
    .join("");
}

function searchPosts(searchQuery) {
  return posts.filter(({ title, body }) => {
    return (
      title.toLowerCase().includes(searchQuery) ||
      body.toLowerCase().includes(searchQuery)
    );
  });
}

function onSearchFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const query = form.elements.searchQuery.value.trim().toLowerCase();

  showToast(query);

  if (!query) return;
  spinnerEl.classList.remove("d-none");

  setTimeout(() => {
    const searchedPost = searchPosts(query);
    renderPosts(searchedPost);
    spinnerEl.classList.add("d-none");

    form.reset();
  }, 1000);
}

function showToast(searchQuery) {
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl);

  if (!searchQuery) {
    toast.show();
    return;
  }
  toast.hide();
}
