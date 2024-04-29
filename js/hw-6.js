// Завдання 1
let number = 1;
while (number < 11 ){
    console.log(number);
    number += 1;
}

// Завдання 2
let allNumbers = 21;
for(let i = 1; i < allNumbers; i ++ ){
    if(i % 2 === 1){
        continue;
    }
    console.log('парне число:',i)
}

// Завдання 3 
let multiplier = 11;
for(let i = 1; i < multiplier; i ++){
    let result = 7 * i;
    console.log(`${7} * ${i} = ${result}`);
}

// Завдання 4
let number2 = 1;
while (number2 < 6 ){
    alert(number2);
    number2 ++;
}

// Завдання 5
let seven = 11;
for(let i = 1; i < seven; i += 1){
    if(i === 7){
        break;
    }
    console.log(i);
}

// Завдання 6
let n = 11;
for(let i = 1; i < 20; i += 1){
    if(i >= n){
        break;
    }
    console.log(i);
}

// Завдання 7
let number3 = 0;
while (number3 < 21 ){
    number3 += 1;
    if(number3 % 3 === 0){
        continue;
    }
    console.log(number3);
}





