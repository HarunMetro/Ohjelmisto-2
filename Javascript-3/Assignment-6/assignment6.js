"use strict";

'use strict';
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const ul = document.getElementById('list');
let roll;
do {
  roll = rollDice();
  ul.innerHTML += `<li>${roll}</li>`;
} while (roll !== 6);