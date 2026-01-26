//Підрахунок кількості повторень
//Дано масив:
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
// apple: 3,
// banana: 2,
// orange: 1
//}

const fn2 = fruits => {
  return fruits.reduce((total, item, index) => {
    if (!total[item]) {
      total[item] = 1;
    } else {
      total[item] += 1;
    }

    return total;
  }, {});
};
console.log("🚀 ~ fn2 ~ fn2:", fn2(fruits));
