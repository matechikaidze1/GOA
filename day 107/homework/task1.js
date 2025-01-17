function sumOfTwoLargest() {
    const numbers = [42, 18, 67, 53, 94]; 
    
    console.log("numbers:", numbers);
  
    const sortedNumbers = numbers.sort((a, b) => b - a);
    const sum = sortedNumbers[0] + sortedNumbers[1];
    
    console.log("two largest numbers:", sortedNumbers[0], "and", sortedNumbers[1]);
    return sum;
  }
  
  const result = sumOfTwoLargest();
  console.log("sum of two largest numbers:", result);
  