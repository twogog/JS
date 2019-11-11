'use strict';

let menu = document.querySelectorAll('.menu-item'),
    menus = document.querySelector('.menu'),
    li = document.createElement('li'),
    bg = document.querySelector('body'),
    title = document.getElementById('title'),
    wrapper = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    answer = document.getElementById('prompt');

// Восстановить порядок в меню, добавить пятый пункт
menu.forEach(function(item, i, mass) {
  mass[1].textContent = 'Второй пункт';
  mass[2].textContent = 'Третий пункт';
});

menus.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

// Заменить картинку заднего фона на другую из папки img
bg.style.background = 'url(img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
wrapper[1].removeChild(adv);

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let ask = prompt('Как Вы относитесь к технике Apple?', '');

answer.innerHTML = ask;


