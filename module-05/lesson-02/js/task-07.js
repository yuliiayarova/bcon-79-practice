// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

const savePassword = password => {
  return function (str) {
    return str === password;
  };
};

const checkPassword = savePassword("asd123");
console.log("🚀 ~ checkPassword:", checkPassword);

let isChecked = checkPassword("asd123");
console.log("🚀 ~ isChecked:", isChecked);

isChecked = checkPassword("fhgdhh");
console.log("🚀 ~ isChecked:", isChecked);
