//  Task 1
// const goods = new Goods("apple", 23.5);
// console.log(goods);

//  Task 2
// const goods = new Goods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400
// );

// console.log(goods);

//  Task 3
// const goods = new Goods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400
// );
// console.log(goods);
// document.querySelector(".out-3").append(goods.draw());

//  Task 4

// const products = new Goods(
//   "banana",
//   42,
//   "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
//   200
// );
// console.log("🚀 ~ products:", products);
// document.querySelector(".out-4").append(products.draw());

//  Task 5

// const goods2 = new InheriteGoods(
//   "banana",
//   42,
//   "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
//   200
// );
// console.log("🚀 ~ goods2:", goods2);

//  Task 6
// const goods = new InheriteGoods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400,
//   true
// );
// console.log(goods);

//  Task 7
// const goods = new InheriteGoods(
//   "apple",
//   23.5,
//   "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png",
//   400,
//   true
// );
// console.log(goods);
// // І тепер виведемо на сторінку
// document.querySelector(".out-7").append(goods.draw());

//  Task 8

// const account = new Valid("account@gmail.com", "12345qwe");
// console.log("🚀 ~ account:", account);

//  Task 9
// const account = new Valid("account@gmail.com", "12345qwe");
// const isValid = account.validate();
// console.log("🚀 ~ isValid:", isValid);
// console.log("🚀 ~ account:", account);

//  Task 10

//  Task 11

// const newAccount = new ExtendedValid("yuliia@gmail.com", "qweqwe123");
// console.log("🚀 ~ newAccount:", newAccount);
// const isValid = newAccount.validate();
// console.log("🚀 ~ isValid:", isValid);

//  Task 12
const account1 = new ExtendedValid("test@ua.ua", "qwertyu");
console.log(account1.validate());
console.log(account1.isValid);
console.log(account1.error_message);

const account2 = new ExtendedValid("test@ua.ua", "qwe");
console.log(account2.validate());
console.log(account2.isValid);
console.log(account2.error_message);

const account3 = new ExtendedValid("", "qwertyu");
console.log(account3.validate());
console.log(account3.isValid);
console.log(account3.error_message);
