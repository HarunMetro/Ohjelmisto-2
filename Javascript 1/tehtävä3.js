"use strict";

const n1 = Number(prompt("Give the first number: "));
const n2 = Number(prompt("Give the second number: "));
const n3 = Number(prompt("Give the third number: "));

const sum = n1 + n2 + n3;
const product = n1 * n2 * n3;
const average = sum / 3;

document.write(`
  <p>Sum: ${sum}</p>
  <p>Product: ${product}</p>
  <p>Average: ${average}</p>

