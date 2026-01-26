//Фільтрування за частковим збігом
//Дано масив об'єктів:

const products = [
  { name: "Apple iPhone", category: "phones" },
  { name: "Samsung Galaxy", category: "phones" },
  { name: "Sony TV", category: "electronics" },
  { name: "LG TV", category: "electronics" },
];
//Завдання: За допомогою filter залиште лише ті продукти, назва яких містить "TV".
//Очікуваний результат:

//[
// { name: 'Sony TV', category: 'electronics' },
// { name: 'LG TV', category: 'electronics' }
//]

const result = products
  .filter(product => product.name.includes("TV"))
  .map(product => {
    return { ...product };
  });

console.log("🚀 ~ result:", result);
console.log("🚀 ~ products:", products);
