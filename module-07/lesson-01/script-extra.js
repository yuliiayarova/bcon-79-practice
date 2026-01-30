// Task 1

// Task 2

// Task 3
// const input31 = document.querySelector("#first-input");
// const input32 = document.querySelector("#second-input");
// const btn = document.querySelector("button");
// Task 4
// const btn = document.querySelector("button");
// const p = document.querySelectorAll("p");

// btn.addEventListener("click", event => {
//   p.forEach((p, index) => (p.textContent = index));
// });

// Task 5
// const inputTest = document.querySelector("#test");
// const inputResult = document.querySelector("#result");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const valueNum = Number(inputTest.value);

//   if (Number.isNaN(valueNum)) {
//     alert("Ввели не число");
//     inputResult.disabled = true;
//     inputResult.value = "";
//     return;
//   }

//   inputResult.value = valueNum ** 2;
//   inputResult.disabled = false;
// });

// Task 6
// const listEl = document.createElement("ul");
// document.querySelector("h1").append(listEl);
// do {
//   const message = prompt("Enter data");
//   if (message === null) {
//     break;
//   } else if (message === "") {
//     continue;
//   } else {
//     const itemEl = `<li>${message}</li>`;
//     listEl.insertAdjacentHTML("beforeend", itemEl);
//   }
// } while (true);

// Task 7
// const aEl = document.querySelectorAll("a");
// aEl.forEach(item =>
//   item.addEventListener("mouseenter", event => (item.title = item.textContent))
// );

// Task 8
// const spansEl = document.querySelectorAll("span");
// spansEl.forEach(span => span.addEventListener("click", addRedColor));
// function addRedColor(event) {
//   this.style.backgroundColor = "tomato";
//   this.removeEventListener("click", addRedColor);
//   this.addEventListener("click", addGreenColor);
// }
// function addGreenColor(event) {
//   this.style.backgroundColor = "lightgreen";
//   this.removeEventListener("click", addGreenColor);
//   this.addEventListener("click", addRedColor);
// }

// Task 9

const olEl = document.querySelector("ol");
const btn = document.querySelector("button");

btn.onclick = addLiItem;
olEl.onclick = onClickList;

function addLiItem() {
  const liEl = document.createElement("li");
  liEl.textContent = "пункт";
  olEl.append(liEl);
}

function onClickList(event) {
  if (event.target.tagName === "OL") {
    return;
  }
  event.target.textContent += "!";
}

// Task 10

// Task 11

// Task 12

// Task 13

// Task 14
