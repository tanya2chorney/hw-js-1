// Завдання 1
let threeNumbers = [20, 15, 65];
console.table(threeNumbers);
threeNumbers[1] = 10;
console.table(threeNumbers);

// Завдання 2
let threeString = ['house', 'tree', 'flower'];
console.table(threeString);
threeString[3] = 'cat';
console.table(threeString);

// Завдання 3
// const numbers = [1, 5, 8, 6, 7];
// let result = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     result += numbers[i];
// }
// console.log(result);

// Завдання 4
const fiveNumbers = [1, 5, 8, 6, 7];
for(let i = 0; i < fiveNumbers.length; i += 1){
    console.table(fiveNumbers[i]);
}

// Завдання 5
const fiveString = ['one', 'two', 'number', 'letter', 'point'];
let oneString = fiveString[0];
for(let i = 0; i < fiveString.length; i += 1){
    const word = fiveString[i];
    if(word.length > 5){
        console.log(word);
    }
}

// Завдання 6
const tenNumbers = [12, 4, 65, 88, 45, 100, 8, 16, 22, 49];
let maxNumber = tenNumbers[0];
for(const number of tenNumbers){
    if(number > maxNumber){
        maxNumber = number;
    }
}
console.log(maxNumber);

// Завдання 7
const tenNumbers2 = [12, 4, 65, 88, 45, 100, 8, 16, 22, 49];
for(const number of tenNumbers2){
    if(number % 2 === 0){
        console.log('Парні числа: ', number);
    }
}






// код по знаходженню мінімального значення в масиві, який ми розглядати на уроці
// Версія яка працює 

// const numbers2 = [1, 12, 5, 6, 55, 16, 45, 87, 7, 52];
// let minNumber = numbers2[0];
// for(const number of numbers2){
//     if(number < minNumber){
//         minNumber = number;

//     }
// }
// console.log(minNumber);



// Версія яка на уроці не працювала

// const numbers = [1, 12, 5, 6, 55, 16, 45, 87, 7, 52];
// let minNumber = numbers[0];
// for(const number of numbers){
//     console.log(numbers);
//     if(number < minNumber){
//         console.log(number);
//         minNumber = number;

//     }
// }
