function countArea(shape, ...dimensions) {
    if (shape === "rectangle") {
        if (dimensions.length === 2) {
            let [width, height] = dimensions;
            return width * height;
        } else {
            return "invalid input (rectangle)";
        }
    } 
    else if (shape === "circle") {
        if (dimensions.length === 1) {
            let radius = dimensions[0];
            return Math.PI * Math.pow(radius, 2);
        } else {
            return "invalid input (circle)";
        }
    } 
    else if (shape === "triangle") {
        if (dimensions.length === 3) {
            let [base, height, _] = dimensions;
            return 0.5 * base * height;
        } else {
            return "invalid input (triangle)";
        }
    } 
    else {
        return "shape not recognized";
    }
}

// ---------------------------------------------------------

console.log(countArea("rectangle", 5, 10));

console.log(countArea("circle", 7));

console.log(countArea("triangle", 10, 5, 6));
