function sumEvenFibonacci(limit) {
    let sum = 0;
    let a = 1;
    let b = 2;
  
    while (a <= limit) {
      if (a % 2 === 0) {
        sum += a;
      }
  
      const temp = a + b;
      a = b;
      b = temp;
    }
  
    return sum;
  }
  
  const limit = 4000000;
  const result = sumEvenFibonacci(limit);
  
  console.log(`The sum of even-valued terms in the Fibonacci sequence below ${limit} is: ${result}`);
  