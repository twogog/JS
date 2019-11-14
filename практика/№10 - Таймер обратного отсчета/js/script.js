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

// Timer
  let deadline = '2019-11-16';

  function getTimerRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60));
        // days = Math.floor((t/1000/60/60/24);
    
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let t = getTimerRemaining(endtime);

      // console.log(String(t.seconds).length);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

      if (String(t.hours).length < 2) {
        hours.textContent = '0' + t.hours;
      }
      if (String(t.minutes).length < 2) {
        minutes.textContent = '0' + t.minutes;
      }
      if (String(t.seconds).length < 2) {
        seconds.textContent = '0' + t.seconds;
      }

      if (t.total < 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);
});