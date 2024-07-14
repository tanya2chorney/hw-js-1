// Завдання 1
const btn = document.getElementById('btn');
console.log(btn);
const textBox = document.getElementById('textbox');
console.log(textBox);
btn.textContent = textBox.textContent;
console.log(btn);

// Завдання 2
const img = document.getElementById('imgRoad');
img.src = '/hw-17DOM/img/coffee.jpg';

// Завдання 3 
const link = document.querySelector('a');
link.href = 'https://www.youtube.com/@AZOVmedia';
const imgSecond = document.querySelector('.img');
imgSecond.alt = 'road';
console.log(imgSecond);

// Завдання 4
const ulElem = document.querySelector('ul');
const liFirstElem = ulElem.firstChild;
liFirstElem.textContent ='змінений текст першого елемента' ;

