const words = ["tacocat", "mate", "level", "academy", "ana"];

function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

const palindromeWords = words.filter(isPalindrome);

console.log("normal words:", words);
console.log("palindromes:", palindromeWords);
