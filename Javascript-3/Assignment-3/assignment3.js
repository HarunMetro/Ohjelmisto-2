'use strict';

const dogs = [];
for (let i = 0; i < 6; i++) {
  dogs.push(prompt(`Name of dog ${i + 1}:`));
}
dogs.sort((a, b) => b.localeCompare(a));

const ul = document.getElementById('list');
for (const dog of dogs) {
  ul.innerHTML += `<li>${dog}</li>`;
}