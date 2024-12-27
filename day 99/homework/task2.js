const compareNumbers = (a = 10, b = 20) => a > b ? a : b;

console.log(compareNumbers(15, 25)); // 25
console.log(compareNumbers(30));     // 30 (b becomes 20)
console.log(compareNumbers());       // 20 (a becomes 10, b becomes 20)
