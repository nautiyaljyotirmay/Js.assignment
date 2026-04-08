let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

let result = "NO";

if (current >= 100 && current <= 999) {
    let str = current.toString();
    let middleDigit = parseInt(str[1]);

    if (middleDigit === seed) {
        result = "YES";
    }
}
