// 1
// let a = 7;
// let b = 9;
// console.log(a * b);

// 2
let c = 7;
let d = 9;
const out2 = document.querySelector(".out-2");
console.log("🚀 ~ out2:", out2);
out2.textContent = c / d;

// 3
let e = 3;
let f = 5;
const out3 = document.querySelector(".out-3");
console.log("🚀 ~ out3:", out3);
out3.textContent = e + f;

// 4
let e1 = "3";
let f1 = 5;
const out4 = document.querySelector(".out-4");
console.log("🚀 ~ out4:", out4);
out4.textContent = e1 + f1;

// 5
let e2 = 3;
let f2 = 0;
const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;

// 6
let e3 = 3;
let f3 = "Hello";
const out6 = document.querySelector(".out-6");
console.log("🚀 ~ out6:", out6);
out6.textContent = e3 + f2;

// 7
let e4 = 3;
let f4 = "Hello";
const out7 = document.querySelector(".out-7");
console.log("🚀 ~ out7:", out7);
out7.textContent = e4 * f4;

// 8
const b8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const i8 = document.querySelector(".i-8");
b8.onclick = click;

function click() {
  out8.textContent = i8.value;
  i8.value = "";
}

// 9
const b9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const i9 = document.querySelector(".i-9");

b9.onclick = t9;

function t9() {
  out9.textContent = i9.value;
  i9.value = "";
}

// 10
const b10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
const input10 = document.querySelector(".i-10");

b10.onclick = t10;

function t10() {
  out10.textContent = input10.value * 20;
}

// 11
const b11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const input11 = document.querySelector(".i-11");

b11.onclick = t11;

function t11() {
  out11.textContent = input11.value + 55;
}

// 12
const input12_1 = document.querySelector(".i-12-1");
const input12_2 = document.querySelector(".i-12-2");
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");

btn12.onclick = t12;

function t12() {
  out12.textContent = `Hello ${input12_1.value} ${input12_2.value} `;
  input12_1.value = "";
  input12_2.value = "";
}

// 13
// const btn13 = document.querySelector(".b-13");
// const a = document.querySelector(".i-13-1");
// const b = document.querySelector(".i-13-2");
// const out13 = document.querySelector(".out-13");

// btn13.onclick = t13;

// function t13() {
//   out13.textContent = Number.parseFloat(a.value) + Number.parseFloat(b.value);
//   a.value = "";
//   b.value = "";
// }

// 14
const btn14 = document.querySelector(".b-14");
const input14 = document.querySelector(".i-14");

btn14.onclick = t14;

function t14() {
  input14.value = "Go";
}

// 15
const btn15 = document.querySelector(".b-15");
const input15 = document.querySelector(".i-15");

btn15.onclick = t15;

function t15() {
  input15.style.border = "4px solid red";
}

// 16
const btn16 = document.querySelector(".b-16");
const input16_1 = document.querySelector(".i-16-1");
const input16_2 = document.querySelector(".i-16-2");
const out16 = document.querySelector(".out-16");

btn16.onclick = t16;

function t16() {
  out16.textContent = input16_1.value + input16_2.value;
}

// 17
const btn17 = document.querySelector(".b-17");
const input17 = document.querySelector(".i-17");
const out17_1 = document.querySelector(".out-17-1");

btn17.onclick = t17;

function t17() {
  out17_1.textContent = Number.parseFloat(input17.value);
  input17.value = "";
}

// 18
const btn18 = document.querySelector(".b-18");
const input18 = document.querySelector(".i-18");
const out18 = document.querySelector(".out-18");

btn18.onclick = t18;

function t18() {
  const a = Number.parseFloat(input18.value);
  // const a = input18.value;
  out18.textContent = parseFloat(a);
  input18.value = "";
}

// 19
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");
const input19_1 = document.querySelector(".i-19-1");
const input19_2 = document.querySelector(".i-19-2");

btn19.onclick = t19;

function t19() {
  out19.textContent =
    Number.parseFloat(input19_1.value) + Number.parseFloat(input19_2.value);
  // out19.textContent = input19_1.value + input19_2.value;
}

// 20
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");

btn20.onclick = t20;

let count = 0;

function t20() {
  count++;
  out20.textContent = count;
}
