//  Завдання 1
const users = [
    {name: 'Alex', age: 14,},
    {name: 'Noah', age: 20,},
    {name: 'Olivia', age: 17,},
    {name: 'Mia', age: 19,},
];

const names = users.map(user => user.name);
console.log(names);

// Завдання 2
const usersEyeColor = [
    { name: "John", eyeColor: "blue" },
    { name: "Alice", eyeColor: "brown" },
    { name: "Bob", eyeColor: "green" },
    { name: "Gulliver", eyeColor: "green" },
];
const getUsersByEyeColor = (color) => {
    return usersEyeColor.filter(user => user.eyeColor === color);
}
const greenEyedUsers = getUsersByEyeColor("green");
console.log(greenEyedUsers);

// Завдання 3 
const usersGender = [
    { name: "John", gender: "boy" },
    { name: "Alice", gender: "girl" },
    { name: "Bob", gender: "boy" },
    { name: "Gulliver", gender: "boy" },
];

const getUsersGender = (gender) => {
return usersGender.filter(user => user.gender === gender);
};
const boysUsers = getUsersGender(`boy`);
console.log(boysUsers);

// Завдання 4
const usersIsActive = [
    { name: "John", isActive: true },
    { name: "Alice", isActive: false },
    { name: "Bob", isActive: false },
    { name: "Gulliver", isActive: true },
];
const activeUsers = usersIsActive.filter(user => user.isActive);
console.log(activeUsers);

// Завдання 5 
const usersEmail = [
    { name: "John", email: `john@gmail.com` },
    { name: "Alice", email: `alice@gmail.com` },
    { name: "Bob", email: `bob@gmail.com` },
    { name: "Gulliver", email: `gulliver@gmail.com` },
];
const getUsersEmail = (email) => {
    return usersEmail.find(user => user.email === email);
};
const emailFunction = getUsersEmail(`gulliver@gmail.com`);
console.log(emailFunction);

// Завдання 6
const usersAge = [
    {name: 'Alex', age: 14,},
    {name: 'Noah', age: 20,},
    {name: 'Olivia', age: 17,},
    {name: 'Mia', age: 13,},
    {name: 'John', age: 5,},
    {name: 'Alice', age: 25,},
    {name: 'Bob', age: 10,},
    {name: 'Gulliver', age: 6,},
];
const age = usersAge.filter(user => user.age >= 6 && user.age <= 15);
console.log(age);

















