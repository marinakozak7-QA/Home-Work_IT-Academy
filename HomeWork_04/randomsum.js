//a
let number = 15;
let parts = 3;
let result = [];
let sum = 0;

for (let i = 0; i < parts - 1; i++) {
    let random = Math.random();
    let randomNumber = Math.floor(random * number);
    result.push(randomNumber);
    sum += randomNumber;
}

result.push(number - sum);
console.log(result);

// b
result = [];
sum = 0;

for (let i = 0; i < parts - 1; i++) {
    let random = Math.random();
    let part = Math.round(random * number * 100) / 100;
    result.push(part);
    sum += part;
    number -= part;
}
result.push(Math.round((number - sum) * 100) / 100);
console.log(result);