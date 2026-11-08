"use strict";

'use strict';
function concat(arr) {
  let result = '';
  for (const item of arr) {
    result += item;
  }
  return result;
}

const band = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
document.getElementById('result').innerHTML = concat(band);