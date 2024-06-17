// Завдання 1
const bankAccount = {
  ownerName: "John Doe",
  accountNumber: "1234567890",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Гроші успішно додано. Залишок на рахунку: ${this.balance} грн`
    );
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Готівка видачі: ${amount} грн. Залишок на рахунку: ${this.balance} грн`
      );
    } else {
      console.log("Недостатньо коштів на рахунку.");
    }
  },
};

bankAccount.deposit(200);
bankAccount.withdraw(50);

//   Завдання 2

const weather = {
  temperature: null,
  humibity: null,
  windSpeed: null,

  checkTemperature() {
    if (this.temperature < 0) {
      console.log("Температура нижче 0 градусів Цельсія");
      return true;
    } else {
      console.log("Температура вище 0 градусів Цельсія");
      return false;
    }
  },
};


weather.temperature = prompt(`введіть температуру`);
weather.checkTemperature();

// Завдання 3

const user = {
    name: "Alex",
    email: null,
    password: null,

    login() {
        if (this.email.includes("@") && this.password.length >= 6) {
            console.log("Дані введено правильно");
        } else {
            console.log("Дані введено неправильно");
        }
    },
};

user.name = prompt("Введіть вашу електронну пошту");
user.password = prompt("Введіть ваш пароль");
user.login();
 
// Завдання 4
const movie = {
    title: "Thor",
    director: "Kenneth Branagh",
    year: 2011,
    rating: 7,

    checkrating() {
        if (this.rating > 8){
            console.log("Рейтинг фільму вище 8");
            document.getElementById("title").style.color = "green";
        }else {
            console.log("Рейтинг фільмуі 8 нище або");
        }
    },
}
document.getElementById("title").textContent = movie.title;
document.getElementById("director").textContent = movie.director;
document.getElementById("year").textContent = movie.year;
document.getElementById("rating").textContent = movie.rating;
movie.checkrating();






