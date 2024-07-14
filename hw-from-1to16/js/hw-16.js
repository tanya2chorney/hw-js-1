//  Завдання 1
class Account {
  constructor({ login, email } = {}) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    console.log(`login:  ${this.login},  email:  ${this.email}`);
  }
}

const mango = new Account({
  login: `Mangozedog`,
  email: `mango@dog.woof`,
});
console.log(mango);
mango.getInfo();

// Завдання 2
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers.`
    );
  }
}
const poly = new User({
  name: "Poly",
  age: 20,
  followers: 100,
});
poly.getInfo();

// Завдання 3
class Storage {
  constructor() {
    this.item = [];
  }
  getItem() {
    return this.item;
  }
  addItem(item) {
    this.item.push(item);
  }
  removeItem(item) {
    const index = this.item.indexOf(item);
    if (index !== -1) {
      this.item.splice(index, 1);
    }
  }
}
const storage = new Storage();
storage.addItem("Car");
storage.addItem("Cat");
storage.addItem("House");
storage.removeItem("Cat");
console.log(storage.getItem());

// Завдання 4
class StringBuilder {
  constructor() {
    this.value = ".";
  }
  getValue() {
    return this.value;
  }
  append(value) {
    this.value += value;
  }
  prepend(value) {
    this.value = value += this.value;
  }
  pad(value) {
    this.append(value);
    this.prepend(value);
  }
}
const builder = new StringBuilder();
builder.append("^");
builder.prepend("^");
builder.pad("=");
console.log(builder.getValue());

// Завдання 5
class Car {
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    const { maxSpeed, speed, isOn, distance, price } = car;
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000,
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
