"use strict"; //стандарт ES6

// let answer = prompt("Есть ли вам 18?", "Да");
// let Answer = +prompt("Есть ли вам 18?", "Да");
// console.log(typeof(Answer));

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    payment = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost = +prompt("Во сколько обойдется?", ""),
    payment1 = prompt("Введите ещё одну статью расходов в этом месяце", ""),
    cost1 = +prompt("Во сколько обойдется?", "");

let appData = {
  budget: money,
  timeData : time,
  expenses: {
    payment : cost,
    payment1 : cost1
  },
  optionalExpenses: {

  },
  income: [],
  savings: false
};

let sum = ((appData.budget/30)-
((appData.expenses.payment+appData.expenses.payment1)/30));

if (sum >= 0) {
  alert("Ваш бюджет на один день = " + sum +" рублей :)");
} else {
  alert("Поздравляем, вы бомж :)");
}