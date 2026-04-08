let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPalindrome(num) {
    let str = num.toString();
    let rev = str.split('').reverse().join('');
    return str === rev;
}

let found = false;

for (let X = 0; X <= 10000; X++) {
    let value = N + X;

    if (isPalindrome(value) && value % K === 0) {
        alert(X);
        found = true;
        break;
    }
}

if (!found) {
    alert(-1);
}
