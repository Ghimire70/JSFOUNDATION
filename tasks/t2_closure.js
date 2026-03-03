// Task 1: Creating a Counter Using Closures
// Create a function createCounter() that returns a function which increments and returns a
// counter value each time it is called.
// Task 2: Rate Limiter Function
// Create a function rateLimiter(fn, limit) that returns a new function.
// The returned function allows calling fn only once within a limit time in milliseconds.
// If it is called again before the limit is reached, it should return "Rate limit exceeded".
// Task 3: Memoization Function
// Write a function memoize(fn) that returns a memoized version of fn.
// The memoized function should cache the results of function calls,
// and return the cached result if the same inputs are provided again.

//------starts here-------//

//task1

// function createCounter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }

// let increment = createCounter();
// console.log(increment());

function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "Rate limit exceeded";
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// ---- Task 1 ----
console.log("--- Task 1: Counter ---");
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// ---- Task 2 ----
console.log("\n--- Task 2: Rate Limiter ---");
const greet = (name) => `Hello, ${name}!`;
const limitedGreet = rateLimiter(greet, 2000);
console.log(limitedGreet("Bahadur")); // Hello, bahadur!
console.log(limitedGreet("Bob")); // Rate limit exceeded
console.log(limitedGreet("Carol")); // Rate limit exceeded
setTimeout(() => {
  console.log(limitedGreet("Damaru")); // Hello, Damaru!
}, 2000);

// ---- Task 3 ----
console.log("\n--- Task 3: Memoize ---");
const square = (n) => n * n;
const memoSquare = memoize(square);
console.log(memoSquare(5)); // 25 (calculated)
console.log(memoSquare(5)); // 25 (from cache)
console.log(memoSquare(6)); // 36 (calculated)
console.log(memoSquare(6)); // 36 (from cache)
