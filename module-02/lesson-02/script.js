//  Task 1
// Кнопка .b-1 запускає функцію fn1. Функція повинна виводити в .out-1 рядок вигляду:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.

const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = fn1;

function fn1() {
  let result = "";
  for (let i = 1; i <= 16; i++) {
    result += i + "_";
  }
  out1.textContent = result;
}

//  Task 2
// Кнопка .b-2 запускає функцію fn2. Функція повинна виводити в .out-2 рядок вигляду:
//     12_14_16_18_20_22_24_26_28_30_32_34_36_38_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.

const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = fn2;

function fn2() {
  let result = "";
  for (let i = 12; i <= 38; i += 2) {
    result += i + "_";
  }
  out2.textContent = result;
}

//  Task 3
// Кнопка .b-3 запускає функцію fn3. Функція повинна виводити в .out-3 рядок вигляду:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.

const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = fn3;

function fn3() {
  let result = "";
  for (let i = 25; i >= 7; i--) {
    result += i + "_";
  }
  out3.textContent = result;
}

//  Task 4
// Кнопка .b-4 запускає функцію fn4. Функція повинна виводити в .out-4 рядок вигляду:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// від 77 до 35 з кроком 3. Роздільник - знак підкреслення. Завдання вирішується за допомогою циклу.

const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

btn4.onclick = fn4;

function fn4() {
  let result = "";
  for (let i = 77; i >= 35; i -= 3) {
    result += i + "_";
  }
  out4.textContent = result;
}

//  Task 5
// Кнопка .b-5 запускає функцію fn5. Функція повинна виводити в .out-5 рядок вигляду:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// від 1 до 17 з кроком 1. Роздільник - знак підкреслення та зірочка (якщо число непарне, і дві зірочки, якщо парне). Завдання вирішується за допомогою циклу.

const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = fn5;
function fn5() {
  let result = "";

  for (let i = 1; i <= 17; i++) {
    if (i % 2 === 0) {
      result += i + "_**";
    } else {
      result += i + "_*";
    }
  }
  out5.textContent = result;
}
//  Task 6
// Кнопка .b-6 запускає функцію fn6. Функція повинна виводити в .out-6 рядок вигляду:
//
// ******<br>
// ******<br>
// ******<br>
//
// Завдання вирішується за допомогою циклу. В кожній ітерації цикл виводить 6 зірочок. Перенесення рядка - br. Кількість рядків (ітерацій, повторень) циклу вводить користувач в i-6.
//

const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const input6 = document.querySelector(".i-6");

btn6.onclick = fn6;

function fn6() {
  let result = "";
  for (let i = 1; i <= +input6.value; i++) {
    result += "******<br>";
  }
  out6.innerHTML = result;
  input6.value = "";
}

//  Task 7
// Є input .i-7, куди користувач може ввести число більше нуля (перевірок не робимо, приймаємо як факт).
// Після натискання кнопки .b-7 повинна запускатися функція fn7, яка виводить в .out-7 числа від введеного користувачем до нуля включно.
// Роздільник - знак підкреслення. Якщо користувач ввів 4 і натиснув кнопку, ми отримаємо:
// 4_3_2_1_0_
// Завдання вирішується за допомогою циклу.

const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
const input7 = document.querySelector(".i-7");

btn7.onclick = fn7;

function fn7() {
  let result = "";
  for (let i = +input7.value; i >= 0; i--) {
    result += `${i}_`;
  }
  out7.textContent = result;
  input7.value = "";
}

//  Task 8
// Є input .i-81 та .i-82, куди користувач може ввести числа більше нуля (перевірок не робимо, приймаємо як факт).
// Вважаємо, що друге число завжди більше першого.
// Після натискання кнопки .b-8 повинна запускатися функція fn8, яка виводить в .out-8 числа від першого введеного до другого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
//  4_5_6_7_8_
// Завдання вирішується за допомогою циклу.

const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const input81 = document.querySelector(".i-81");
const input82 = document.querySelector(".i-82");

btn8.onclick = fn8;

function fn8() {
  let result = "";
  for (let i = +input81.value; i <= +input82.value; i++) {
    result += i + "_";
  }
  out8.textContent = result;
  input81.value = "";
  input82.value = "";
}

//  Task 9
// Є input .i-91 та .i-92, куди користувач може ввести числа.
// Після натискання кнопки .b-9 повинна запускатися функція fn9, яка виводить в .out-9 числа від меншого введеного до більшого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
// 4_5_6_7_8_
// якщо ввів 8 і 6, то отримаємо
// 6_7_8_
// Завдання вирішується за допомогою циклу. Підказка - спочатку робимо перевірку, а потім запускаємо цикл.
// цикл - один

const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const input91 = document.querySelector(".i-91");
const input92 = document.querySelector(".i-92");

btn9.onclick = fn9;

function fn9() {
  let a = Number.parseFloat(input91.value);
  let b = Number.parseFloat(input92.value);
  let temp = b;
  if (a > b) {
    b = a;
    a = temp;
  }
  let result = "";
  for (let i = a; i <= b; i++) {
    result += i + "_";
  }
  out9.textContent = result;
  input91.value = "";
  input92.value = "";
}

//  Task 10
// Кнопка .b-10 запускає функцію fn10. Функція повинна виводити в .out-10 парні роки від 1950 до 1970 включно.
// Роздільник - знак підкреслення. Завдання вирішується через цикл, а парність - через крок (рівний 2).

const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = fn10;

function fn10() {
  let result = "";
  for (let i = 1950; i <= 1970; i += 2) {
    result += `${i}_`;
  }
  out10.textContent = result;
}

//  Task 11
// Кнопка .b-11 запускає функцію fn11. Функція повинна:
// - отримати всі div.div-11 у змінну divs11
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: divs[i].innerHTML
// - вивести в .out-11 вміст кожного блоку. Роздільник - знак підкреслення.
// В результаті повинно вийти так:
//     one_3_4_two_

const btn11 = document.querySelector(".b-11");
const divs11 = document.querySelectorAll(".div-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = fn11;

function fn11() {
  let result = "";
  for (let i = 0; i < divs11.length; i++) {
    result += divs11[i].innerHTML + "_";
  }
  out11.textContent = result;
}

//  Task 12
// Кнопка .b-12 запускає функцію fn12. Функція повинна:
// - отримати всі div.div-12
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: elem[i]
// - застосувати до кожного elem[i].style.background = ‘orange’

const btn12 = document.querySelector(".b-12");
const divs12 = document.querySelectorAll(".div-12");

btn12.onclick = fn12;

function fn12() {
  for (let i = 0; i < divs12.length; i++) {
    divs12[i].style.background = "orange";
  }
}

//  Task 13
// За допомогою циклу привласніть всім input .i-13 value рівне:
// - для першого  1
// - для другого  2
// - для третього 3

const inputs13 = document.querySelectorAll(".i-13");
const btn13 = document.querySelector(".b-13");

btn13.onclick = fn13;

function fn13() {
  for (let i = 0; i < inputs13.length; i++) {
    inputs13[i].value = i + 1;
  }
}

//  Task 14
// Кнопка .b-14 запускає функцію fn14. Функція повинна:
// - отримати всі input.i-14
// - перебрати їх за допомогою циклу. Звернення до елемента виглядає так: elem[i]
// - вивести в .out-14 value вибраного input
// Перевірити, чи вибраний елемент, можна за допомогою elem[i].checked.

const inputs14 = document.querySelectorAll(".i-14");
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = fn14;
function fn14() {
  let result = "";

  for (let i = 0; i < inputs14.length; i++) {
    if (inputs14[i].checked) {
      result = inputs14[i].value;
      out14.textContent = result;
      return;
    }
  }
}

//  Task 15
// Кнопка .b-15 запускає функцію fn15. Функція повинна виводити наступну послідовність в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Підказка (10 - i) + '_' + i + '_'

const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn15.onclick = fn15;

function fn15() {
  let result = "";
  for (let i = 0; i <= 10; i++) {
    result += 10 - i + "_" + i + "_";
  }
  out15.textContent = result;
}
