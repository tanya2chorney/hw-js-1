// Завдання 1 
let firstTextBox = prompt(`Введіть свій текст вперше`);
let secondTextBox = prompt(`Введіть всій текст вдруге`);

let firstResult = firstTextBox.length > 0;
let secondResult = secondTextBox.length > 0;

if( firstResult && secondResult){
    alert(`Всі поля заповнені`)
} else{
    alert(`Не всі поля заповнені`)
} 

// Завдання 2
let firstNumber = Number(prompt(`Введіть перше число`));
let secondNumber = Number(prompt(`Введіть друге число`));
let sum = firstNumber + secondNumber;
if(sum > 10){
    alert(`Сума більша за 10`)
}else{
    alert(`Сума менша або дорівнює 10`)
}

// Завдання 3
let text = prompt('Введіть свій текст');
let javaScript = text.includes(`JavaScript`);
console.log(javaScript);
if(javaScript){
    alert(`Текст містить слово JavaScript`)
}else{
    alert(`Текст не містить слово JavaScript`)
 }

// Завдвння 4
let number = prompt(`Введіть своє число`);
if(number >= 10 && number <= 20){
    alert(`Число входить в діапазон від 10 до 20`)
}else{
    alert(`Число не входить в діапазон від 10 до 20`)
}

// Завдання 5
let Name = prompt(`Введіть своє ім'я`);
let email = prompt(`Введіть свію електронну пошту`);
let password = prompt(`Введіть свій пароль`);

let resultName = (Name.length >= 3);
let resultEmail = (email.includes(`@`));
let resultPassword = (password.length >= 6);

if(resultName && resultEmail  && resultPassword){
    alert(`Всі данні введено правильно`)
} else{
    alert(`Дані введено не правильно`)
}