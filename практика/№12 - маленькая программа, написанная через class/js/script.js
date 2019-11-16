window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
    let btn = document.querySelector('.btn');

    alert('Сейчас мы создадим блок по вашему желанию');
    
    let color = prompt('Задайте цвет блока на английском: white, blue, grey, pink...', '');
    let text = prompt('Напишите нужный вам текст', '');
    let heigh = prompt('Укажите высоту в формате: 200px', '');
    let widt = prompt('Укажите ширину в формате: 100px', '');
    let align = prompt('Как выровнять текст: center, justify, left, right, start, end', '');
    let fonts = prompt('Укажите размер шрифта в формате: 30px', '');
    let fontcolor = prompt('Задайте цвет текста на английском: white, blue, grey, pink...', '');

    class Options {
        constructor(height, width, bg, fontSize, textAlign, fontColor) {
            this.height = heigh;
            this.width = widt;
            this.bg = color;
            this.fontSize = fonts;
            this.textAlign = align;
            this.fontColor = fontcolor;
        }
        newDiv() {
            let p = document.createElement("div");
            return document.body.appendChild(p),
                p.textContent = text,
                p.style.cssText = `height: ${this.height};
                                   width: ${this.width};
                                   background-color: ${this.bg};
                                   font-size: ${this.fontSize};
                                   text-align: ${this.textAlign};
                                   color: ${this.fontColor};`;
            
        }
    }

    btn.addEventListener('click', function() {
        if (heigh != null && heigh != '') {
            let options = new Options();
            options.newDiv();
        } else {
            alert('Обязательно введите высоту и ширину! Перезагрузите страницу.');
        }
    });

    
});