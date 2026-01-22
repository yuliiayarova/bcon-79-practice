// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};
const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");

btn1.onclick = fn1;

function fn1() {
  out1.textContent = obj1.two;
}

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");

btn2.onclick = fn2;

function fn2() {
  out2.textContent = obj2.five;
}

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");

btn3.onclick = fn3;

function fn3() {
  let res = "";
  for (const key in obj3) {
    if (obj3[key] === "hi") {
      res += obj3[key] + " ";
    }
  }
  out3.textContent = res;
}

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const out4 = document.querySelector(".out-4");
const btn4 = document.querySelector(".b-4");

btn4.onclick = fn4;

function fn4() {
  // let counter = 0;
  let res = "";
  for (const key in obj4) {
    // setTimeout(() => {
    res += `${key} ${obj4[key]} <br>`;
    // }, counter * 1000);
    // counter++;
  }
  out4.innerHTML = res;
}

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

const out5 = document.querySelector(".out-5");
const btn5 = document.querySelector(".b-5");

btn5.onclick = function () {
  fn5(obj5, out5);
};

function fn5(object, selector) {
  let res = "";
  for (const key in object) {
    res += `${key} ${object[key]} <br>`;
  }
  selector.innerHTML = res;
}

// Task 6

const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");
const input61 = document.querySelector(".i-61");
const input62 = document.querySelector(".i-62");
const obj6 = {
  b: 17,
  e: 22,
};

btn6.onclick = fn6;

function fn6() {
  const key = input61.value;
  const value = input62.value;
  obj6[key] = value;
  fn5(obj6, out6);
}
// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

const out7 = document.querySelector(".out-7");
const btn7 = document.querySelector(".b-7");
const input7 = document.querySelector(".i-7");

btn7.onclick = fn7;

function fn7() {
  const searchKey = input7.value;
  let res = 0;
  for (const key in obj7) {
    if (key === searchKey) {
      res = 1;
      break;
    }
  }
  out7.textContent = res;
}

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");

btn8.onclick = fn8;

function fn8() {
  let res = 0;
  for (const key in obj8) {
    if (input8.value === key) {
      res = obj8[key];
      break;
    }
  }
  out8.textContent = res;
}
// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");

btn9.onclick = fn9;

function fn9() {
  let res = "";
  for (const key in obj9) {
    if (obj9[key] === +input9.value) {
      res += `${key} `;
    }
  }
  out9.textContent = res;
}
// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");

btn10.onclick = function () {
  fn10(obj10, 22);
};

function fn10(object, value) {
  out10.textContent = Object.values(object).includes(value);
}

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const out11 = document.querySelector(".out-11");
const btn11 = document.querySelector(".b-11");
const input11 = document.querySelector(".i-11");

btn11.onclick = fn11;

function fn11() {
  const key = input11.value;
  delete obj11[key];
  fn5(obj11, out11);
}

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");
const input12 = document.querySelector(".i-12");

btn12.onclick = fn12;

function fn12() {
  const value = +input12.value;
  for (const key in obj12) {
    if (value === obj12[key]) {
      delete obj12[key];
    }
  }

  fn5(obj12, out12);
}

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

const out13 = document.querySelector(".out-13");
const btn13 = document.querySelector(".b-13");

btn13.onclick = fn13;

function fn13() {
  let sum = 0;
  let values = Object.values(obj13);
  for (const value of values) {
    if (typeof value === "number") {
      sum += value;
    }
    // if (!isNaN(value)) {
    //   sum += Number(value);
    // }
  }
  out13.textContent = sum;
}

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};
const out14 = document.querySelector(".out-14");
const btn14 = document.querySelector(".b-14");
btn14.onclick = fn14;

function fn14() {
  let res = "";
  for (const key in obj14) {
    res += `${obj14[key][0]} `;
  }
  out14.textContent = res;
}

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

const out15 = document.querySelector(".out-15");
const btn15 = document.querySelector(".b-15");
btn15.onclick = fn15;

function fn15() {
  // const values = Object.values(obj15);
  let arr = [];
  for (const key in obj15) {
    // arr = arr.concat(obj15[key]);
    arr = [...arr, ...obj15[key]];
  }
  out15.textContent = arr.join(" ");
}

// Task 16
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};

const out16 = document.querySelector(".out-16");
const btn16 = document.querySelector(".b-16");
btn16.onclick = fn16;

function fn16() {
  let res = "";
  for (const key in obj16) {
    res += `${obj16[key].name} `;
  }
  out16.textContent = res;
}

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

const out17 = document.querySelector(".out-17");
const btn17 = document.querySelector(".b-17");

btn17.onclick = fn17;

function fn17() {
  let res = "";
  for (const key in obj17) {
    if (obj17[key].age > 30) {
      res += `${obj17[key].name} `;
    }
  }
  out17.textContent = res;
}

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const out18 = document.querySelector(".out-18");
const btn18 = document.querySelector(".b-18");
const input18 = document.querySelector(".i-18");

btn18.onclick = fn18;

function fn18() {
  let res = "";
  let value = input18.value;
  if (obj18[value]) {
    res = obj18[value].join(" ");
  }

  out18.textContent = res;
}

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const out19 = document.querySelector(".out-19");
const btn19 = document.querySelector(".b-19");
const input19 = document.querySelector(".i-19");

btn19.onclick = fn19;

function fn19() {
  let lowerValue = input19.value.toLowerCase();
  let res = "";
  for (const key in obj19) {
    for (const element of obj19[key]) {
      if (element.toLowerCase() === lowerValue) {
        res = key;
        break;
      }
    }
  }

  out19.textContent = res;
}

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};

const out20 = document.querySelector(".out-20");
const btn20 = document.querySelector(".b-20");

btn20.onclick = fn20;

function fn20() {
  let res = "";
  for (const key in obj20) {
    for (const element of obj20[key]) {
      if (element[1] === 2) {
        res += `${element[0]} `;
      }
    }
  }
  out20.textContent = res;
}
