// Task 1: Creating a Simple Generator
// Create a generator function numberGenerator() that yields numbers from 1 to 3.
// Task 2: Create a Custom Iterator
// Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.
// Each call to .next() should return the next number in the range until it reaches end.
// Task 3: Generator Function for Fibonacci Sequence
// Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci
// sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).
// Use the next() method to get the next Fibonacci number.

/*
// Task 1: Creating a Simple Generator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
*/

/*
//Task2: Create a Custom Iterator
function rangeIterator(start, end) {
  let current = start;

  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const iter = rangeIterator(1, 3);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
*/

//Task3: Generator Function for Fibonacci Sequence
function* fibonacciGenerator() {
  let a = 1,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacciGenerator();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

//js foundation ends here
