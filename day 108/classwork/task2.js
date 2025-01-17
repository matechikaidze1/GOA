function longestDifferentString(s) {
    let seen = new Map();
    let start = 0;
    let maxLength = 0;
    let longestSub = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        seen.set(char, i);

        if (i - start + 1 > maxLength) {
            maxLength = i - start + 1;
            longestSub = s.slice(start, i + 1);
        }
    }

    return longestSub;
}

console.log(longestDifferentString("annannan")); // an
console.log(longestDifferentString("eiffel")); // eifl
console.log(longestDifferentString("asdw")); // asdw
