//  Завдання 1 
const friends = ['Mango', ' Poly', ' Kiwi', ' Ajax'];
let string = '';
// for
for(let i = 0; i < friends.length; i += 1){
 string += friends[i];
}
console.log(string);
// join()
string = friends.join();
console.log(string);


// Завдання 2 
let cards = ['Картка - 1',
             'Картка - 2',
             'Картка - 3', 
             'Картка - 4', 
             'Картка - 5'];

// Видалення
console.log(cards.indexOf('Картка - 3'));
cards.splice(2, 1);
// Додавання
cards.splice(4, 0, 'Картка - 6')
console.log(cards);
