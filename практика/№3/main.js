'use strict';

let money, time;

function start() {
  money = +prompt ("Ваш бюджет на месяц?", "");
  time = prompt ("Введите дату в формате YYYY-MM-DD", "");
  while(isNaN(money) || money == "" || money == null) {
    money = +prompt ("Ваш бюджет на месяц?", "");
  }
}

start();
    
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};


function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");
  
      if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
          console.log ("done");
  
          appData.expenses[a] = b;
      } else {                            
          console.log ("bad result");
          i--;
      }
  }
}

chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    alert ("Это минимальный уровень достатка!");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert ("Это средний уровень достатка!");
  } else if (appData.moneyPerDay > 2000) {
    alert ("Это высокий уровень достатка!");
  } else {
    alert ("Произошла ошибка");
  }
}

detectLevel();

function checkSavings() {
  if(appData.savings == true) {
    for (let i = 1; i < 2; i++) {
      let save = +prompt("Какова сумма накоплений?", ""),
          percent = + prompt("Под какой процент?", "");
      
      if ( typeof(save)==='number' && typeof(save) != null && save != "" && !isNaN(save)) {
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита " + appData.monthIncome.toFixed() + "руб.");
      } else {
        i--;
        alert("Введите корректные данные!");
      }
    }
  }
}

checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let a = i,
        b = prompt ("Статья необязательных расходов?", "");

    if ( typeof(b)==='string' && typeof(b) != null && b != "" && isNaN(b)) {
        console.log ("done");
        appData.optionalExpenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }
  }
}

chooseOptExpenses();