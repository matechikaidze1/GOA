function isSortedAndHow(array) {
    const ascending = array.slice().sort((a, b) => a - b);
    const descending = array.slice().sort((a, b) => b - a);
    
    if (JSON.stringify(array) === JSON.stringify(ascending)) {
        return "yes, ascending";
    } else if (JSON.stringify(array) === JSON.stringify(descending)) {
        return "yes, descending";
    } else {
        return "no";
    }
}

console.log(isSortedAndHow([1, 2, 3, 4, 5])); // ascending
console.log(isSortedAndHow([5, 4, 3, 2, 1])); // descending
console.log(isSortedAndHow([1, 3, 2, 4, 5])); // no
