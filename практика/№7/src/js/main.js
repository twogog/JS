'use strict';

let start = document.getElementById('start'),

/* --------------------Моя бредовая идея о том, как можно было собрать элементы в массив------ */
    table = document.querySelector('.result-table'),
    tablechildrens = table.querySelectorAll('*'),
    blocks = [];

for (let i = 1; i < tablechildrens.length; i+=2) {
  blocks[i] = (tablechildrens[i]);
}

let filtered = blocks.filter(function (el) {
  return el != null;
});

console.log(filtered);
// filtered[7].style.background = 'red';
/* --------------------Моя бредовая идея о том, как можно было собрать элементы в массив------ */

let expenses = document.querySelectorAll('.expenses-item'),
    btn = document.getElementsByTagName('button'),
    btn1 = btn[0],
    btn2 = btn[1],
    btn3 = btn[2],
    income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

console.log(expenses);
// expenses[2].style.background = 'black';

console.log(btn1);
console.log(btn2);
console.log(btn3);

console.log(sum);

