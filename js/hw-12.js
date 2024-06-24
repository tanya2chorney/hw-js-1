// Завдання 1

const user = {
  hobby: `diving`,
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`key: ${user[key]}`);
}

// Завдання 2

const obj = {
  firstValue: 1500,
  secondValue: 2500,
  thirdtValue: 3500,
  fourthValue: 4500,
};
const countProps = function (obj) {
  return Object.keys(obj).length;
};
const result = countProps(obj);
console.log(result);

//  Завдання 3
const employees = {
  firstEmployee: 10,
  secondEmployee: 9,
  thirdEmployee: 5,
  fourthEmployee: 11,
  fifthEmployee: 1,
};
const findBestEmployee = function (employees) {
  const arrTasks = Object.values(employees);
  const max = Math.max(...arrTasks);
  return max;
};

const result2 = findBestEmployee(employees);
console.log(result2);

// Завдання 4

const salariesEmployees = {
  firstEmployee: 1000,
  secondEmployee: 900,
  thirdEmployee: 500,
  fourthEmployee: 1100,
  fifthEmployee: 100,
};
const countTotalSalary = function (salariesEmployees) {
  let sum = 0;
  const salaries = Object.values(salariesEmployees);
  for (const salary of salaries) {
    sum += salary;
  }
  return sum;
};
const result3 = countTotalSalary(salariesEmployees);
console.log(result3);

// Завдання 5
const arr = [
    { prop: 'Ноутбук', price: 1000, available: true },
    { prop: 'Мишка', price: 300, available: false },
    { prop: 'Клавіатура', price: 350, available: true },
    { prop: 'Монітор', price: 2000, available: false },
  
];

function getAllPropValues(arr, prop) {
    const propValues = [];
    for (const item of arr) {
      if (item[prop] !== undefined) {
        propValues.push(item[prop]);
      }
    }
    return propValues;
  }

  const result4 = getAllPropValues(arr, 'prop');
  console.log(result4);


// Завдання 6
const products = [
    { name: 'Ноутбук', price: 1000, quantity: 3 },
    { name: 'Мишка', price: 300, quantity: 4 },
    { name: 'Клавіатура', price: 350, quantity: 1 },
    { name: 'Монітор', price: 2000, quantity: 2 },
  ];

  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * (product.quantity || 1);
      }
    }
    return totalPrice;
  }
  const totalLaptopPrice = calculateTotalPrice(products, 'Ноутбук');
console.log(`Загальна вартість Ноутбуків: ${totalLaptopPrice}`);

const totalMousePrice = calculateTotalPrice(products, 'Мишка');
console.log(`Загальна вартість Мишок: ${totalMousePrice}`);