'use strict';

const number = []

for (let i = 0; i < 5; i++) {
    number.push(Number(prompt(`Enter number ${i + 1}:`)));
}
for (let i = number.length - 1; i >= 0; i--) {
  console.log(number[i]);
}
