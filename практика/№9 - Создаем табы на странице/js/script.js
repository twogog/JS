window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {                     //Удаление класса show и добавление класса hide
    for (let i = a; i < tabContent.length; i++) {  
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);                               //Прячем все табы кроме первого

  function showTabContent(b) {                     //Удаление класса hide и добавление класса show
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');      //Нужно для след. функции
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) { //Делигирование событий, ищем нужный таб
    let target = event.target;                       
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

});