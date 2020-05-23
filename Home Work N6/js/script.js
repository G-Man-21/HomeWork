let li = document.createElement('li'),
    ul = document.querySelector('.menu'),
    block = document.getElementsByClassName('column'),
    lol = document.getElementsByClassName('adv'),
    title = document.getElementById('title'),
    qst = prompt('Что вы думаете о технике Apple?'),
    prom = document.getElementById('prompt');


li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
ul.appendChild(li);

title.innerHTML = 'Мы продаем только подлинную технику Apple';

document.body.style.background = 'url("img/apple_true.jpg") center no-repeat';

prom.innerHTML = qst;


block[1].removeChild(lol[0]);


