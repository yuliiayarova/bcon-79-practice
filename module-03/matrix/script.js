// Task 1
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = fn1;

function fn1() {
  let res = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      res += "*";
    }
    res += "_";
  }
  out1.textContent = res;
}

// Task 2
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = fn2;

function fn2() {
  let res = "";
  for (let i = 0; i < 3; i++) {
    res += i + 1 + "<br>";
    for (let j = 0; j < 3; j++) {
      res += "*_";
    }

    res += "<br />";
  }
  out2.innerHTML = res;
}

// Task 3

const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = fn3;

function fn3() {
  let res = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      res += "*_";
    }
    res += "<br />";
  }
  out3.innerHTML = res;
}

// Task 4
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

btn4.onclick = fn4;

function fn4() {
  let res = "";
  for (let i = 0; i < 3; i++) {
    res += `${i + 1}_ `;
    for (let j = 0; j < 5; j++) {
      res += `${j + 1}* `;
    }
  }
  out4.textContent = res;
}
// Task 5
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = fn5;

function fn5() {
  let res = "";
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
      if (k % 2 === 0) {
        res += 1;
      } else {
        res += 0;
      }
    }
    res += "<br />";
  }
  out5.innerHTML = res;
}

// Task 6

const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

btn6.onclick = fn6;

function fn6() {
  let res = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 7; j++) {
      if (j % 2 === 1 && j % 3 !== 0) {
        res += 1;
      } else if (j % 2 === 0 && j % 3 !== 0) {
        res += 0;
      } else {
        res += "x";
      }
    }
    res += "<br />";
  }
  out6.innerHTML = res;
}

// Task 7
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");

btn7.onclick = fn7;

function fn7() {
  let res = "";
  for (let i = 1; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      res += "*";
    }
    res += "<br />";
  }
  out7.innerHTML = res;
}

// Task 8
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = fn8;

function fn8() {
  let res = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      res += "*";
    }
    res += "<br />";
  }
  out8.innerHTML = res;
}

// Task 9
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = fn9;

function fn9() {
  let res = "";
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
      res += `${j}_`;
    }
    res += "<br />";
  }
  out9.innerHTML = res;
}

// Task 10
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = fn10;

function fn10() {
  let res = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 10; j++) {
      let num = i * 10 + j;
      if (num < 10) {
        res += `0${num}_`;
      } else {
        res += `${num}_`;
      }
    }
    res += "<br />";
  }
  out10.innerHTML = res;
}
