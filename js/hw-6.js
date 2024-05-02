// // Завдання 1
// let number = 1;
// while (number < 11 ){
//     console.log(number);
//     number += 1;
// }

// // Завдання 2
// let allNumbers = 21;
// for(let i = 1; i < allNumbers; i ++ ){
//     if(i % 2 === 3){
//         continue;
//     }
//     console.log('парне число:',i)
// }

// // Завдання 3 
// let multiplier = 11;
// for(let i = 1; i < multiplier; i ++){
//     let result = 7 * i;
//     console.log(`${7} * ${i} = ${result}`);
// }

// // Завдання 4
// let number2 = 1;
// while (number2 < 6 ){
//     alert(number2);
//     number2 ++;
// }

// // Завдання 5
// let seven = 11;
// for(let i = 1; i < seven; i += 1){
//     if(i === 7){
//         break;
//     }
//     console.log(i);
// }

// // Завдання 6
// let n = 11;
// for(let i = 1; i < 20; i += 1){
//     if(i >= n){
//         break;
//     }
//     console.log(i);
// }

// // Завдання 7
// let number3 = 0;
// while (number3 < 21 ){
//     number3 += 1;
//     if(number3 % 3 === 0){
//         continue;
//     }
//     console.log(number3);
// }





// const nameArray = ['Дмитро', 'Tanya','Артем', 'Саша', 'Данило', 'Іван', 'Вадим', 'Тимур', 'Кирило', 'Аня', 'Марія'];
// console.log(nameArray.length);
// // console.log(nameArray[5]);
// const searchName = prompt('Введіть ім\'я');
// let messagy = ' ';
// // for(let i = 0; i <= nameArray.length; i += 1){
// //     console.log(nameArray[0])
// //    if(nameArray[i] === surchName){
// //     messagy = 'Ім\'я знайдено';
// //     break;
// //    } 
   
// // }

// // for (const name of nameArray) {
// //     if(name === surchName){
// //             messagy = 'Ім\'я знайдено';
// //             break;
// //            } 
// // }

// console.log(nameArray.includes('Іван'));
// const resultSearch = nameArray.includes(searchName) ? 'Ім\'я знайдено' : 'Такого імені не знайдено';
//  console.log(resultSearch);
// console.log(messagy);



const numbers = [1, 12, 5, 6, 55, 16, 45, 87, 7, 52];
let minNumber = numbers[0];
for(const number of numbers){
    if(number < minNumber){
        minNumber = number;

    }
}
// // сonsole.log(minNumber);
// const numbers = [1, 4, 3, 2, 5, 7];
// let minNumber = numbers[0];

// for (const number of numbers) {
//     if (number < minNumber) {
//         minNumber = number;
//     }
// }

// console.log(minNumber);