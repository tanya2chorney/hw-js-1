//  Завдання 1
const user = {
  hobby: `skydiving`,
  premium: false,
  mood: "happy",
};
const { hobby, premium, mood } = user;
console.log(hobby, premium, mood);

// Завдання 2
const obj = {
  firstValue: 1500,
  secondValue: 2500,
  thirdValue: 3500,
  fourthValue: 4500,
};
const { firstValue, secondValue, thirdValue, fourthValue } = obj;
console.log(firstValue, secondValue, thirdValue, fourthValue);

// Завдання 3
const employees = {
  firstEmployee: 10,
  secondEmployee: 9,
  thirdEmployee: 5,
  fourthEmployee: 11,
  fifthEmployee: 1,
};
const {
  firstEmployee,
  secondEmployee,
  thirdEmployee,
  fourthEmployee,
  fifthEmployee,
} = employees;
console.log(
  firstEmployee,
  secondEmployee,
  thirdEmployee,
  fourthEmployee,
  fifthEmployee
);

// Завдання 4
const salariesEmployees = {
  firstEmp: 1000,
  secondEmp: 900,
  thirdEmp: 500,
  fourthEmp: 1100,
  fifthEmp: 100,
};
const { firstEmp, secondEmp, thirdEmp, fourthEmp, fifthEmp } =
  salariesEmployees;
console.log(firstEmp, secondEmp, thirdEmp, fourthEmp, fifthEmp);

// Завдання 5
const arr = [
  { prop: "Ноутбук", price: 1000, available: true },
  { prop: "Мишка", price: 300, available: false },
  { prop: "Клавіатура", price: 350, available: true },
  { prop: "Монітор", price: 2000, available: false },
];
const [firstObj] = arr;
console.log(firstObj);
const { prop, price, available } = firstObj;
console.log(prop, price, available);

// Завдання 6
const products = [
  { name: "Ноутбук", price: 1000, quantity: 3 },
  { name: "Мишка", price: 300, quantity: 4 },
  { name: "Клавіатура", price: 350, quantity: 1 },
  { name: "Монітор", price: 2000, quantity: 2 },
];
const [firstProduct] = products;
const { name, secondPrice, quantity } = firstProduct;
console.log(name, secondPrice, quantity);

//   Завдання 7
class Account {
  constructor(initialBalance) {
    this.balance = initialBalance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactionHistory.push(`Deposited $${amount}`);
    } else {
      console.error("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactionHistory.push(`Withdrawn $${amount}`);
    } else {
      console.error("Invalid withdrawal amount or insufficient balance.");
    }
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

const myAccount = new Account(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance:", myAccount.getBalance());
console.log("Transaction history:", myAccount.getTransactionHistory());
