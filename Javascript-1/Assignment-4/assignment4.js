"use strict";

const name = prompt("What is the student's name?");
const result = document.querySelector("#result");

if (name === null || name.trim() === "") {
  result.textContent = "No student name was entered.";
} else {
  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  const house = houses[Math.floor(Math.random() * houses.length)];
  result.textContent = `${name.trim()}, you are ${house}.`;
}
