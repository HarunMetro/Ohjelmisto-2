"use strict";

const input = prompt("Enter a whole number:");
const number = Number(input);
const result = document.querySelector("#result");

if (
  input === null ||
  input.trim() === "" ||
  !Number.isSafeInteger(number)
) {
  result.textContent = "Please enter a valid whole number.";
} else {
  let isPrime = number >= 2;

  for (let divisor = 2; isPrime && divisor * divisor <= number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
    }
  }

  result.textContent = isPrime
    ? `${number} is a prime number.`
    : `${number} is not a prime number.`;
}
