// Task-1
const ar1 = ["string", 45, true, "hello"];
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = fn1;

function fn1() {
  out1.textContent = `[${ar1}]`;
  //   out1.textContent = ar1;
}
// Task-2
const ar2 = ["string", 45, true, "hello"];
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = fn2;

function fn2() {
  let res = "";
  for (const element of ar2) {
    res += `${element} `;
  }
  out2.textContent = res;
}

// Task-3
const ar3 = ["string", 45, true, "hello"];
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = fn3;

function fn3() {
  out3.textContent = ar3.length;
}
// Task-4

const ar4 = Array.from(Array(10).keys(), x => x + 1);
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

btn4.onclick = fn4;

function fn4() {
  out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}

// Task-5

const ar5 = Array.from(Array(10).keys(), x => (x + 1) * 10);
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = fn5;

function fn5() {
  out5.textContent = ar5[0] + ar5[2] + ar5[3];
}

// Task-6
const ar6 = ["Yuliia", "Scorpio", "Wednesday", "November"];
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

btn6.onclick = fn6;

function fn6() {
  //   let res = "";
  //   for (const element of ar6) {
  //     res += `${element} `;
  //   }
  let res = ar6.join(" ");
  out6.textContent = res;
}

// Task-7
const ar7 = [];
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");

btn7.onclick = fn7;

function fn7() {
  ar7[7] = "vietnam";
  ar7[6] = "turkey";
  ar7[5] = "italy";
  let res = "";

  for (const element of ar7) {
    res += `${element} `;
  }
  out7.textContent = res;
}

// Task-8
const ar8 = [];
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const out81 = document.querySelector(".out-8-1");

btn8.onclick = fn8;

function fn8() {
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;
  let res = "";
  for (const element of ar8) {
    res += `${element}-`;
  }
  out8.textContent = res;
  out81.textContent = ar8.length;
}
// Task-9
const ar9 = Array.from(Array(10).keys(), x => x + 1);
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = fn9;

function fn9() {
  let lastElement = ar9[ar9.length - 1];
  out9.textContent = lastElement;
}

// Task-10

const ar10 = [100, 200, 300, 400, 700, 121];
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = fn10;

function fn10() {
  let sum = ar10[1] + ar10[ar10.length - 1];
  out10.textContent = sum;
}

// Task-11

const ar11 = [2, 3, 4, 5, 6, 7];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = fn11;

function fn11() {
  let res = "";
  let temp = ar11[2];
  ar11[2] = ar11[4];
  ar11[4] = temp;
  for (const element of ar11) {
    res += `${element} `;
  }
  out11.textContent = res;
}

// Task-12
const ar12 = ["test", "west", "list", "class", "best"];
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = fn12;

function fn12() {
  // const temp = ar12[0];
  // ar12[0] = ar12[ar12.length - 1];
  // ar12[ar12.length - 1] = temp;

  const firstEl = ar12.at(0);
  const lastEl = ar12.at(-1);
  ar12[0] = lastEl;
  ar12[ar12.length - 1] = firstEl;

  out12.textContent = ar12.join(" ");
}

// Task-13
const ar13 = ["test", "west", "list", "class", "best"];
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = fn13;

function fn13() {
  let res = "";
  for (let i = 0; i < ar13.length; i++) {
    res += `${i} ${ar13[i]} `;
  }
  out13.textContent = res;
}

// Task-14
const ar14 = [1, 2, 3, "hello", 66];
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = fn14;

function fn14() {
  let res = "";
  for (let i = ar14.length - 1; i >= 0; i--) {
    res += `${ar14[i]} `;
  }
  out14.textContent = res;
}
// Task-15
const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn15.onclick = fn15;

function fn15() {
  let res = "";
  for (const element of ar15) {
    if (element > 0) {
      res += `${element} `;
    }
  }
  out15.textContent = res;
}
// Task-16

const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn16 = document.querySelector(".b-16");
const outOdd = document.querySelector(".out-16-odd");
const outEven = document.querySelector(".out-16-even");

btn16.onclick = fn16;

function fn16() {
  let ar16_even = [];
  let ar16_odd = [];
  let oddCounter = 0;
  let evenCounter = 0;
  for (let i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
      ar16_even[evenCounter] = ar16[i];
      evenCounter++;
    } else {
      ar16_odd[oddCounter] = ar16[i];
      oddCounter++;
    }
  }

  // for (const element of ar16) {
  //   if (element % 2 === 0) {
  //     ar16_even.push(element);
  //   } else {
  //     ar16_odd.push(element);
  //   }
  // }
  outOdd.textContent = ar16_odd.join(" ");
  outEven.textContent = ar16_even.join(" ");
}

// Task-17
const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = fn17;

function fn17() {
  // let counter = 0;
  // for (let i = 0; i < ar17.length; i++) {
  //   if (ar17[i] > 3) {
  //     counter++;
  //   }
  // }
  let filteredArr = [];
  for (const element of ar17) {
    if (element > 3) {
      // counter++;
      filteredArr.push(element);
    }
  }

  out17.textContent = filteredArr.length;
}

// Task-18

const ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
const btn18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");

btn18.onclick = fn18;

function fn18() {
  let max = ar18[0];
  for (let i = 1; i < ar18.length; i++) {
    if (max < ar18[i]) {
      max = ar18[i];
    }
  }
  out18.textContent = max;
}

// Task-19
const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");

btn19.onclick = fn19;

function fn19() {
  let min = ar19[0];
  for (let i = 0; i < ar19.length; i++) {
    if (min > ar19[i]) {
      min = ar19[i];
    }
  }
  out19.textContent = ar19.indexOf(min);
}
// Task-20

const ar20 = [4, 5, 6, 7, 8, 9, 10];
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");

btn20.onclick = fn20;
function fn20() {
  let sum = 0;
  for (let i = 0; i < ar20.length; i++) {
    sum += ar20[i];
  }
  out20.textContent = sum;
}
