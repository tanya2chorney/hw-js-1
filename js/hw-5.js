//  Завдання 1
let drink = prompt(`Оберіть напій`);
switch(drink){
    case "кава":
        alert(`Ви обрали каву`);
        break;
    case "чай":
        alert(`Ви обрали чай`);
        break;
    case "сік":
        alert(`Ви обрали сік`);
        break;
    default:
        alert(`Ви нічого не обрали`);
}

//  Завдання 2
let day = prompt(`Ведіть день тиждня`);
switch(day){
    case "понеділок":
        alert(`робочий день`);
        break;
    case "вівторок":
        alert(`робочий день`);
        break;
    case "середа":
        alert(`робочий день`);
        break;
    case "четвер":
        alert(`робочий день`);
        break;
    case "п'ятниця":
        alert(`робочий день`);
        break;
    case "субота":
        alert(`вихідний день`);
        break;
    case "неділя":
        alert(`вихідний день`);
        break;
    default:
        alert(`ви нічого не ввели`);
}

// Завдання 3
let month = Number(prompt(`Ведіть номер місяця`));
switch(month){
    case 1:
    case 2:
    case 12:
        alert(`Зима`);
        break;
    case 3:
    case 4:
    case 5:
        alert(`Весна`);
        break;
    case 6:
    case 7:
    case 8:
        alert(`Літо`);
        break;
    case 9:
    case 10:
    case 11:
        alert(`Осінь`);
        break;
    default:
        alert(`ви нічого не ввели`);
}


// Завдання 4
let monthDay = Number(prompt(`Ведіть номер місяця`));
switch(monthDay){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert(`31 день`);
        break;
    case 2:
        alert(`29 днів`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert(`30 днів`);
        break;
    default:
        alert(`ви нічого не ввели`);
}

//  Завдання 5
let color = prompt(`Оберіть колір`);
switch(color){
    case "червоний":
        alert(`стоп`);
        break;
    case "жовтий":
        alert(`чекати`);
        break;
    case "зелений":
        alert(`йти`);
        break;
    default:
        alert(`Ви нічого не ввели`);
}

// Завдання 6
let number1 = Number(prompt('Введіть перше число'));
let number2 = Number(prompt('Введіть друге число'));
let sign = prompt('Яку дію ви виконаєте: +, -, * чи /');
let result;
switch(sign){
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        alert(`Ви нічого не ввели`);
}
