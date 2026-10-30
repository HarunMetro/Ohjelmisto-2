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