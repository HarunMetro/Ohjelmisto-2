"use strict";

const input = prompt("How many dice should be rolled?");
const diceCount = Number(input);
const result = document.querySelector("#result");

if (
  input === null ||
  input.trim() === "" ||
  !Number.isSafeInteger(diceCount) ||
  diceCount < 1
) {
  result.textContent = "Please enter a positive whole number of dice.";
} else {
  let sum = 0;

  for (let roll = 0; roll < diceCount; roll++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }

  result.textContent = `The sum of ${diceCount} dice rolls is ${sum}.`;
}
