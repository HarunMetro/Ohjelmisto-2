"use strict";

'use strict';
function even(arr) {
  const result = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}

const original = [2, 7, 4];
const evens = even(original);
console.log(original);
console.log(evens);