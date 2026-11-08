"use strict";

'use strict';
const numbers = [];
let n = Number(prompt('Enter a number (0 to stop):'));
while (n !== 0) {
  numbers.push(n);
  n = Number(prompt('Enter a number (0 to stop):'));
}
numbers.sort((a, b) => b - a);
for (const num of numbers) {
  console.log(num);
}