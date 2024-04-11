// Завдання 1
const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

// Завдання 2
const email = "tanyachorney214@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

// Завдання 3
const firstWord = `My `;
const secondWord = `name `;
const thirdWord = `is `;
const fullName = firstWord + secondWord + thirdWord + `Viktor.`
console.log(fullName);

// Завдання 4 
const userName = `Олександро!`;
const payment = 300; 
alert(`Дякуємо ${userName} До сплати ${payment} гривень.`)


// >= 90 - відмінно, 
// 80-90 - добре,
// 80-70 - задовільно, 
// 50-40 - не задовільно,
// let grade = 100;
// let grade = Number(prompt("Введіть свїй бал"));
// console.log(typeof grade);

// if(grade >= 90) {
// alert("Відмінно")
//     } else if(grade >= 80 && grade < 90){
//         alert("добре")
//     } else if(grade >= 70 && grade < 80){
//         alert("задовільна")
//     } else{
//         alert("не задовільна")
//     }


// Тернатний оператор

// (grade >= 90) ?  alert("Ти молодець!") : alert("Ти не молодець:(");