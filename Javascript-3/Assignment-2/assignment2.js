'use strict';

const count = Number(prompt('Number of participants:'));
const names = [];

for (let i = 0; i < count; i++) {
  names.push(prompt(`Name of participant ${i + 1}:`));
}
names.sort((a, b) => a.localeCompare(b));

const ol = document.getElementById('participants');
for (const name of names) {
  ol.innerHTML += `<li>${name}</li>`;
}