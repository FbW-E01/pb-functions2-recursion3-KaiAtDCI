function fibonaci(n, numbers = []) {
   if (n === 0) return [0];
   if (n === 1) return [0,1];
   if (n === numbers.length - 1) return numbers;
   if (numbers.length === 0) numbers = [0,1];
   const newValue = numbers[numbers.length-1] + numbers[numbers.length-2];
   numbers.push(newValue);
   return fibonaci (n, numbers);
}

console.log(fibonaci(8));
