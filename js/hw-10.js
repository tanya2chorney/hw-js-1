// Завдання 1
const buttonRef = document.querySelector(".btn");
const handleBtnClick = () => {
  alert("Hello World!");
};
buttonRef.addEventListener(`click`, handleBtnClick);

// Завдання 2
const checkGuess = function () {
  const userGuess = parseInt(document.getElementById("guessField").value);
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber === userGuess) {
    document.getElementById("guessResult").textContent =
      "Вітаємо! Ви вгадали число!";
  } else {
    document.getElementById(
      "guessResult"
    ).textContent = `Спробуйте ще раз. Правильне число: ${randomNumber}`;
  }
};

const numberUser = document.getElementById("guessField");

// Завдання 3
let clickCount = 0;
const clickButton = document.getElementById("clickButton");
const clickCountElement = document.getElementById("clickCount");

clickButton.addEventListener("click", () => {
  clickCount++;
  clickCountElement.textContent = clickCount;
});

// Завдання 4
const applyCallbackToEachElement = (arr, callback) => {
 let result = [];
  for (const numder of arr) {
    result.push(callback(numder));
  }
  return result;

};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const callback = (number) => {
  return Math.pow(number, 2);
};

const result = applyCallbackToEachElement(arr, callback);
console.log(result);

// Завдання 5 
const calculateDiscountedPrice = (price, discount, callback) => {
    return callback(price, discount);
  };
  
  const showDiscountedPrice = (price, discount) => {
    const discountedPrice = price * (1 - discount / 100);
    return discountedPrice;
  };
  
  console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice));