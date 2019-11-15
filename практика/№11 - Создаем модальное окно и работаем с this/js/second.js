let age = document.getElementById('age');

let showUsers = showUser.bind(age);

function showUser(surname, name) {
  console.log(this);
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUsers('Василий','Абдурахманович');
showUser.apply(age, ['Василий','Абдурахманович']);  // посмотрел в ответах...