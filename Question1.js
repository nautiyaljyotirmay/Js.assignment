let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let count = 0;

for (let x = L; x <= R; x++) {
    
    if (x % K !== 0) continue;

    let str = x.toString();

    if (str.includes('0')) continue;

    let sum = 0;
    for (let digit of str) {
        sum += parseInt(digit);
    }

    if (isPrime(sum)) {
        count++;
    }
}
