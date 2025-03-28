const dollarArray = [10, 25, 50, 100, 200];

const convertRate = 2.65;

const lariArray = dollarArray.map(dollar => dollar * convertRate);

console.log("dollar massive:", dollarArray);
console.log("lari massive:", lariArray);
