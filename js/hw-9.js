// // Завдання 1
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };
// const myArray = ["Mango", "Poly", "Ajax"];
// logItems(myArray);

// // Завдання 2
// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(" ");
//   const wordCount = words.length;
//   const totalPrice = wordCount * pricePerWord;
//   return totalPrice;
// };
// const message = "1 22 33 5";
// const pricePerWord = 15;
// const result = calculateEngravingPrice(message, pricePerWord);
// console.log(`Вартість гравіювання: ${result}`);

// // Завдання 3
// const findLongestWord = function (string) {
//   const words = string.split(" ");
//   let longestWord = null;

//   for (const word of words) {
//     if (!longestWord || word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };
// const string =
//   "Функція — це підпрограма, незалежна частина коду, призначена для виконання конкретного завдання.";
// const result2 = findLongestWord(string);
// console.log(`Найдовше слово: ${result2}`);

// // Завдання 4
// const formatString = function (string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     const truncatedString = string.slice(0, 40) + "...";
//     return truncatedString;
//   }
// };

// const string2 =
//   "Це рядок, який має більше 40 символів і потребує форматування.";
// formatString(string2);
// console.log(formatString(string2));

// const string3 =
//   "Це рядок, не має 40 символів.";
// formatString(string3);
// console.log(formatString(string3));

// // Завдання 5
// const checkForSpam = function (message) {
//     return message.includes("spam") || message.includes("sale");
// };

// const message2 = 'Цей текст містить spam';
// checkForSpam(message2);
// console.log(checkForSpam(message2));

// const message3 = 'Цей текст не містить реклами';
// checkForSpam(message3);
// console.log(checkForSpam(message3));

// // Завдання 6 

// const numbers = [];
// let input;

// do {
//     input = prompt('Введіть число:');
//     if (input !== null) {
//         const parsedInput = parseFloat(input);
//         if (!isNaN(parsedInput)) {
//             numbers.push(parsedInput);
//         } else {
//             alert('Було введено не число, попробуйте ще раз.');
//         }
//     }
// } while (input !== null);

// if (numbers.length > 0) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number;
//     }
//     console.log(`Загальна сума чисел дорівнює ${total}`);
// } else {
//     console.log('Масив чисел порожній.');
// }
