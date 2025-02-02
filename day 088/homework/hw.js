function countCharacters(str) {
    let charCount = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    return charCount;
}

console.log(countCharacters("aba")); // a: 2; b: 1
console.log(countCharacters("")); // empty
