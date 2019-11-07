let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


loop: for (let i = 1; i < 3; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = +prompt("Во сколько обойдется?", '');
	if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
			a != "" && b != "" && a.length < 50) {
		appData.expenses[a] = b;
		console.log("готово");
	}	else {
		// вернуться к вопросу заново
		i=0;
		continue loop;
	}
}

/* let i = 1;

loop: do {
	i++;
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = +prompt("Во сколько обойдется?", '');
	if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
			a != "" && b != "" && a.length < 50) {
		appData.expenses[a] = b;
		console.log("готово");
	}	else {
		// вернуться к вопросу заново
		i=1;
		continue loop;
	}
} while (i < 3); */


/* let i = 1;

loop: while (i < 3) {
	i++;
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = +prompt("Во сколько обойдется?", '');
	if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
			a != "" && b != "" && a.length < 50) {
		appData.expenses[a] = b;
		console.log("готово");
	}	else {
		// вернуться к вопросу заново
		i=1;
		continue loop;
	}
} */

	appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на один день: " + appData.moneyPerDay);

(appData.moneyPerDay > 0 && appData.moneyPerDay < 100) ? console.log("Вы имеете низкий уровень достатка") : 
(appData.moneyPerDay > 100 && appData.moneyPerDay > 2000) ? console.log("Вы имеете средний уровень достатка") :
(appData.moneyPerDay > 2000) ? console.log("Вы имеете высокий уровень достатка") :
console.log("Сдайте бутылки что-ли");

