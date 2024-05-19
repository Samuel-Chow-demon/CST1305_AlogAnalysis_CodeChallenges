
// User recursion method
var fib = function(n) { 
    return (n === 0 || n === 1) ? n : fib(n - 1) + fib(n - 2);
};

console.log(`Fibonacci of 5 : ${fib(5)}`);
console.log(`Fibonacci of 10 : ${fib(10)}`);
console.log(`Fibonacci of 2 : ${fib(2)}`);
console.log(`Fibonacci of 0 : ${fib(0)}`);
console.log(`Fibonacci of 1 : ${fib(1)}`);