function sort(values, indices) {
    return values.map((_, i) => values[indices.indexOf(i)]);
}

console.log(sort(['x', 'y', 'z'], [1, 2, 0])); // z x y
console.log(sort(['z', 'x', 'y'], [0, 2, 1])); // z y x
