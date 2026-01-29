// Task 01
const btn1 = document.querySelector(".b-1");
const fn1 = () => (document.querySelector(".out-1").textContent = 1);
btn1.onclick = fn1;

// Task 02

// Task 03

// Task 04
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
const input4 = document.querySelector(".i-4");

const fn4 = () => (out4.textContent = input4.checked);
btn4.onclick = fn4;

// Task 05
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");
const input5 = document.querySelector(".i-5");

const fn5 = () => {
  //   if (input5.checked) {
  //     out5.textContent = input5.value;
  //   } else {
  //     out5.textContent = false;
  //   }
  out5.textContent = input5.checked ? input5.value : false;
};
btn5.onclick = fn5;

// Task 06
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const input6 = document.querySelector(".i-6");

const fn6 = () => (out6.textContent = input6.value);
btn6.onclick = fn6;

// Task 07
const btn7 = document.querySelector(".b-7");
const out71 = document.querySelector(".out-71");
const out72 = document.querySelector(".out-72");
const input7 = document.querySelector(".i-7");

const fn7 = () => {
  out71.textContent = input7.value;
  //   if (input7.value.length >= 6) {
  //     out72.textContent = 1;
  //   } else {
  //     out72.textContent = 0;
  //   }

  out72.textContent = input7.value.length >= 6 ? 1 : 0;
};
btn7.onclick = fn7;

// Task 08
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

const fn8 = () => (out8.innerHTML = `<div class="js2">new div</div>`);
btn8.onclick = fn8;
// Task 09
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const input9 = document.querySelector(".r-9");

const fn9 = () => {
  out9.textContent = input9.checked && input9.value;
};
btn9.onclick = fn9;
// Task 10
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
const input10 = document.querySelector(".i-10");

const fn10 = () => {
  console.log(input10.value);

  out10.style.background = input10.value;
};
btn10.onclick = fn10;
// Task 11

// Task 12

// Task 13

// Task 14

// Task 15

// Task 16
const btn16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");
const select16 = document.querySelector(".s-16");

const fn16 = () => {
  out16.textContent = select16.value;
};
btn16.onclick = fn16;

// Task 17
const out17 = document.querySelector(".out-17");
const select17 = document.querySelector(".s-17");

const fn17 = () => {
  out17.textContent = select17.selectedOptions[0].value;
};
select17.onchange = fn17;

// Task 18
const out18 = document.querySelector(".out-18");
const select18 = document.querySelector(".s-18");
const input18 = document.querySelector(".i-18");

const fn18 = () => {
  input18.value = select18.selectedOptions[0].value;
};
select18.onchange = fn18;

// Task 19
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");
const input19 = document.querySelector(".i-19");

const fn19 = () => {
  input19.value = out19.textContent;
};
btn19.onclick = fn19;

// Task 20

const select201 = document.querySelector(".s-201");
const select202 = document.querySelector(".s-202");

const fn20 = () => {
  select202.value = select201.value;
};
select201.onchange = fn20;
