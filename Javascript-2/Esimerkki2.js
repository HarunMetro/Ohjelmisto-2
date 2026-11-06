document.querySelector("#target").innerHTML = "Testi";

const numerot = [];

while (true) {
    const syote = prompt("Anna numero (tyhjä syöte lopettaa):");

    if (syote === null || syote.trim() === "") {
        break;
    }

    const numero = Number(syote);

    if (Number.isFinite(numero)) {
        numerot.push(numero);
    } else {
        console.log("Syöte ei ollut kelvollinen numero.");
    }
}

numerot.sort((a, b) => a - b);
console.log("Numerot suuruusjärjestyksessä:", numerot);

"use strict";

// 6. Use prompt to ask the user for a number. Print “even” or “odd”.

const number = parseInt(prompt("Please enter a number:"));

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// 7. Ask for the user’s age and print “minor” if under 18, “young adult” 
// if 18–29, “middle aged” if 30–64, and “retirement age” if 65 or more.

const age = parseInt(prompt("Please enter your age:"));

if (age < 18) {
    console.log("minor");
} else if (age >= 18 && age <= 29) {
    console.log("young adult");
} else if (age >= 30 && age <= 64) {
    console.log("middle aged");
} else {
    console.log("retirement age");
}

// 8. Print all numbers from 1 to 20 that are divisible by 3, using a for loop.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 9. Use a while loop that asks for a weight until the user gives a positive number.for ()

let weight = prompt("Enter your weight (kg):");

while (weight <= 0) {
    weight = prompt("Enter your weight (kg):");
}

console.log(`Your weight is ${weight} kg.`);


// 10. Make a switch that takes a cabin class “A”, “B” or “C” and prints a different message
//     for each, with a default case.

const cabinClasss = prompt("Enter your cabin class (A, B, or C):").toUpperCase();

switch (cabinClasss) {
    case "A":
        console.log("You have chosen first class.");
        break;
    case "B":
        console.log("You have chosen business class.");
        break;
    case "C":
        console.log("You have chosen economy class.");
        break;
    default:
        console.log("Invalid cabin class.");
        break;
}

// 11. Create the array ["Frank", "Scott", "Jasmine", "Don"]. 
// Loop it with a normal for loop, then again with for...of.

const names = ["Frank", "Scott", "Jasmine", "Don"];

for (let i = 0; i < names.length; i++) {
    console.log(`name: ${names[i]}`);
}

for (const name of names) {
    console.log(`name: ${name}`);
}

// 12. Write a function sum(numbers) that takes an array and returns the sum of its items. Then write the same function as an arrow function.
// 13. Write a function greet(name, times) that prints Hello <name>! the given number of times, using a template string.
// 14. Create an array of 3 student objects (name, credits). Loop through it and print Anna has 120 credits. for each. Then print only the students who have more than 100 credits.
// 15. Write a function that takes an array and returns a new array with every number doubled (without changing the original).
// 16. Write a page with <p id="target"></p> and use JavaScript to print “Good morning, Frank!” into it with innerHTML.