window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Timer 

    let deadline = '2018-11-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

    //Модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = 'auto';
    });


    let modalbut = document.querySelectorAll('.description-btn');

    modalbut.forEach(function callback(currentValue, i) {
        modalbut[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            modalbut[i].classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    //Форма отправки без JSON и с ним                  input в форме должен содержать name!!!!!
    
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');   // JSON

        let formData = new FormData(form);                 //Все, что ответил пользователь в форме

        let obj = {};                                      //нужно для JSON
        formData.forEach(function (value, key) {           //formData преобразуется в читабельный вид
            obj[key] = value;                              //нужно не только для JSON
        });

        let json = JSON.stringify(obj);                    //преобразуем объект в JSON формат

        // request.send(formData);
        request.send(json);                                //JSON отправляется на сервер

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    //Вторая форма отправки, без JSON

    let contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);                 //Все, что ответил пользователь в форме

        request.send(formData);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = '';
        }
    });
    

});

