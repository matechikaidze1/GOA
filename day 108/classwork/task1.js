function firstNonRepeatedCharacter(input) {
    if (typeof input !== "string" || input.length === 0) {
        return "false";
    }

    const charCount = {};

    for (const char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of input) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return "false";
}

console.log(firstNonRepeatedCharacter("hannah"));
console.log(firstNonRepeatedCharacter("abbia"));
