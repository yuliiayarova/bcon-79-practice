//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");

btn1.onclick = fn1;

function fn1() {
  let arr1_res = [];
  arr1.forEach(element => {
    arr1_res.push(element * 2);
  });
  return (out1.textContent = arr1_res);
}

// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];

const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");

const fn2 = () => {
  let arr2_res = [];
  arr2.forEach(element => arr2_res.push(element / 2));
  return (out2.textContent = arr2_res);
};

btn2.onclick = fn2;

// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];

const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");

const fn3 = () => {
  let arr3_res = [];
  arr3.forEach(element => {
    if (typeof element === "number") {
      arr3_res.push(element);
    }
  });
  return (out3.textContent = arr3_res);
};

btn3.onclick = fn3;

// Task 4

const tasks4 = document.querySelectorAll(".task-4");
const out4 = document.querySelector(".out-4");

const fn4 = () => {
  const arr4_res = [];
  tasks4.forEach(task4 => {
    arr4_res.push(task4.dataset.value);
    // arr4_res.push(task4.getAttribute("data"));
  });
  out4.textContent = arr4_res.join(", ");
};
fn4();

// Task 5
const tasks5 = document.querySelectorAll(".task-5");
const out5 = document.querySelector(".out-5");
const arr5_res = [];

const fn5 = event => {
  arr5_res.push(event.target.getAttribute("data"));
  out5.textContent = arr5_res.join(" ");
};
tasks5.forEach(task5 => (task5.onclick = fn5));

// Task 6
const str6 = "helloworld";
const out6 = document.querySelector(".out-6");

const fn6 = () => {
  const arr6_res = str6.split("");
  out6.textContent = arr6_res;
};

fn6();

// Task 7
const str7 = "hello world hi mazai";
const out7 = document.querySelector(".out-7");

const fn7 = () => {
  const arr7_res = str7.split(" ");
  out7.textContent = arr7_res;
};

fn7();

// Task 8
const arr8 = [1, 2, 66, 77, 15];
const out8 = document.querySelector(".out-8");

const fn8 = () => {
  const arr8_res = arr8.join("-");
  out8.textContent = arr8_res;
};

fn8();

// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];
const out9 = document.querySelector(".out-9");

const fn9 = () => {
  const arr9_res = arr9.flat().join("-");
  out9.textContent = arr9_res;
};
fn9();

// Task 10
const obj10 = { name: "ivan", age: 15, sex: 1, id: 45 };
const out10 = document.querySelector(".out-10");

const fn10 = () => {
  const arr10 = Object.entries(obj10);
  const arr10_res = arr10.map(item => `${item[0]}=${item[1]}`).join("&");
  out10.textContent = arr10_res;
};

// function fn10() {
//   out10.textContent = new URLSearchParams(obj10).toString();
// }

fn10();

//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const out11 = document.querySelector(".out-11");

const fn11 = () => {
  out11.textContent = arr11.map(item => item * 2);
};

fn11();
// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];
const out12 = document.querySelector(".out-12");

const fn12 = () => {
  out12.textContent = arr12.map(item => item ** 2);
};

fn12();

// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out13 = document.querySelector(".out-13");

const fn13 = () => {
  const arr13_res = arr13.map(item => Number(item));
  console.log("🚀 ~ fn13 ~ arr13_res:", arr13_res);
};

fn13();

// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out14 = document.querySelector(".out-14");

const fn14 = () => {
  out14.textContent = arr14.filter(item => typeof item === "number");
};

fn14();

// Task 15
const arr15 = [3, 14, 15, 92, "6"];

const out15 = document.querySelector(".out-15");

const fn15 = () => {
  out15.textContent = arr15.filter(
    item => item % 2 === 0 && typeof item === "number"
  );
};

fn15();

// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];

const out16 = document.querySelector(".out-16");

const fn16 = () => {
  out16.textContent = arr16.filter(item => item > 14 && Number.isInteger(item));
};

fn16();

// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];

const out17 = document.querySelector(".out-17");

const fn17 = () => {
  out17.textContent = arr17.map(item => item.toLowerCase());
};

fn17();

// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];

const out18 = document.querySelector(".out-18");

const fn18 = () => {
  out18.textContent = arr18.reduce((acc, item, index) => {
    if (item % 2 === 0) {
      acc.push(index);
    }
    return acc;
  }, []);
};

fn18();

// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];

const out19 = document.querySelector(".out-19");

const fn19 = () => {
  arr19.forEach((item, index, arr19) => (arr19[index] = item.toLowerCase()));
  out19.textContent = arr19;
};

fn19();

const result = arr19.join(", ").toLowerCase().split(", ");
// console.log("🚀 ~ result:", result);

// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

const out20 = document.querySelector(".out-20");

const fn20 = () => {
  arr20.forEach((item, index, arr20) => {
    if (item < 0) arr20[index] = 0;
  });
  out20.textContent = arr20;
};

fn20();

// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;

// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr14_sum = "e";

// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];

//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
