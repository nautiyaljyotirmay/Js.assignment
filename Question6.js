let base = +prompt("Enter base:");
let distance = +prompt("Enter distance:");
let minutesLate = +prompt("Enter minutesLate:");
let seed = +prompt("Enter seed:");

let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += Math.floor(fare * 0.1);
}

if (seed % 2 === 1) {
    fare -= seed;
} else {
    fare += seed;
}

fare = Math.ceil(fare / 5) * 5;

alert("Final Fare = " + fare);
