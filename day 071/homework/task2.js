function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const radius = 5;
const area = calculateArea(radius);
console.log(`the area of radius${radius} is ${area}.`);
