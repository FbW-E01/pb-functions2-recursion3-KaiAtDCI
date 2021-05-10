function fibonaci(n, accu = 0) {
    if (n === 0) return accu;
    return fibonaci( n - 1, accu += n);
}

console.log(fibonaci(1));
console.log(fibonaci(2));
console.log(fibonaci(3));
console.log(fibonaci(4));
