const sum = (a = 0, b = 5) => a + b;

console.log(sum(3, 4)); // 7
console.log(sum(3));    // 8 (b switches to 5)
console.log(sum());     // 5 (a becomes 0, b becomes 5)
