"use strict";

'use strict';
const numbers = [];
while (true) {
  const n = Number(prompt('Enter a number:'));
  if (numbers.includes(n)) {
    alert('This number has already been given.');
    break;
  }
  numbers.push(n);
}
numbers.sort((a, b) => a - b);
for (const num of numbers) {
  console.log(num);
}
