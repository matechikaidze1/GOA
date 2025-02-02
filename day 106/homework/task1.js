function toUnderscore(string) {
    if (typeof string === 'number') return string.toString();
    
    return string.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

console.log(toUnderscore("KataTraining"));
console.log(toUnderscore("TrainingInJavascript"));
console.log(toUnderscore("Chikaidze2Mate"));
console.log(toUnderscore(123));
