"use strict";

const input = prompt("Enter a year:");
const year = Number(input);
const result = document.querySelector("#result");

if (input === null || input.trim() === "" || !Number.isInteger(year)) {
  result.textContent = "Please enter a valid whole year.";
} else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  result.textContent = `${year} is a leap year.`;
} else {
  result.textContent = `${year} is not a leap year.`;
}
