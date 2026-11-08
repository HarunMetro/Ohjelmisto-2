"use strict";

'use strict';
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt('Number of sides on the dice:'));
const ul = document.getElementById('list');
let roll;
do {
  roll = rollDice(sides);
  ul.innerHTML += `<li>${roll}</li>`;
} while (roll !== sides);