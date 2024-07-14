// // Завдання 1 
// let firstTextBox = prompt(`Введіть свій текст вперше`);
// let secondTextBox = prompt(`Введіть всій текст вдруге`);

// let firstResult = firstTextBox.length > 0;
// let secondResult = secondTextBox.length > 0;

// if( firstResult && secondResult){
//     alert(`Всі поля заповнені`)
// } else{
//     alert(`Не всі поля заповнені`)
// } 

// // Завдання 2
// let firstNumber = Number(prompt(`Введіть перше число`));
// let secondNumber = Number(prompt(`Введіть друге число`));
// let sum = firstNumber + secondNumber;
// if(sum > 10){
//     alert(`Сума більша за 10`)
// }else{
//     alert(`Сума менша або дорівнює 10`)
// }

// // Завдання 3
// let text = prompt('Введіть свій текст');
// let javaScript = text.includes(`JavaScript`);
// console.log(javaScript);
// if(javaScript){
//     alert(`Текст містить слово JavaScript`)
// }else{
//     alert(`Текст не містить слово JavaScript`)
//  }

// // Завдвння 4
// let number = prompt(`Введіть своє число`);
// if(number >= 10 && number <= 20){
//     alert(`Число входить в діапазон від 10 до 20`)
// }else{
//     alert(`Число не входить в діапазон від 10 до 20`)
// }

// // Завдання 5
// let Name = prompt(`Введіть своє ім'я`);
// let email = prompt(`Введіть свію електронну пошту`);
// let password = prompt(`Введіть свій пароль`);

// let resultName = (Name.length >= 3);
// let resultEmail = (email.includes(`@`));
// let resultPassword = (password.length >= 6);

// if(resultName && resultEmail  && resultPassword){
//     alert(`Всі данні введено правильно`)
// } else{
//     alert(`Дані введено не правильно`)
// }








// 1зірка - 500ніч
// 2зірки - 1000ніч
// 3зірки - 1500ніч
// 4зірки - 2000ніч
// 5зірок - 2500ніч

// let star = Number(prompt(`Введіть кількість зірок`));
// // console.log(typeof star);
// let price;

// if(star === 1){
//     price = 500;
// }else if(star === 2){
//     price = 1000;
// }else if(star === 3){
//     price = 1500;
// }else if(star === 4){
//     price = 2000;
// }else if(star === 5){
//     price = 2500;
// }else{
//     alert(`Ви ввели не правильну кількість зірок.`)
// }
// console.log(price)

// switch(star){
//     default:
//         alert(`Ви ввели не правильну кількість зірок.`)
//         break;
//     case 1:
//         price = 500;
//         break;
//     case 2:
//         price = 1000;
//         break;
//     case 3:
//         price = 1500;
//         break;
//     case 4:
//         price = 2000;
//         break;
//     case 5:
//         price = 2500;
// }
// console.log(price)


// 1-2 зірки - 500 грн
// 3-4 зірки - 1000грн
// 5 зірок - 1500грн
// let star =Number(prompt(`Введіть кількість зірок готелю`));
// let price;

// if(star === 1 || star === 2){
//     price = 500;
// }else if(star === 3 || star === 4){
//     price = 1000;
// }else if(star === 5){
//     price = 1500;
// }else{
//     alert(`Ви ввели не правильну кількість зірок.`)
// }


// if(3 === 1 && 3 === 2){
//     price = 500;
// }else if(false){
//     price = 1000;
// }else if(false){
//     price = 1500;
// }else{
//     alert(`Ви ввели не правильну кількість зірок.`)
// }

// switch(star){
//     case 1:
//     case 2:
//         price = 500;
//     break;
//     case 3:
//     case 4:
//         price = 1000;
//     break;
//     case 5:
//         price = 1500;
//     break;
//     default:
//         alert(`Ви ввели не правильну кількість зірок.`)
// }
// console.log(price)


// let userRole = "hjdfbvjhsbvk";

// switch(userRole){
//     case "editer": 
//        alert(`you have half`);
//        break;
//     case "admin": 
//        alert(`you have full`);
//        break;
//     case "user": 
//        alert(`you can read`);
//        break;
//     default: 
//        alert(`Access  denied `);
// }