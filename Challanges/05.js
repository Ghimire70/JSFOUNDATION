// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions

// function squareNumbers(arr) {
//   return arr.map((num) => num * num);
// }
// console.log(squareNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions

// function filterEvenNumbers(arr) {
//   return arr.filter((num) => num % 2 == 0);
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and
// returns the sum of all positive numbers using filter() and reduce() with arrow functions

/*
function sumPositiveNumbers(arr) {
  const number = arr.filter((num) => num > 0);
  return number.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumPositiveNumbers([-10, 12, -3, 4, -5, 6, -7, 8, 10]));
*/

// Task 4: Transform Array of Objects
//Write a function getNames(arr) that takes an array of objects where each object has
//a name property, and returns an array of just the names using map() and arrow functions

/*
function getNames(arr) {
  const user = arr.map((user) => user.name);
  return user;
}
console.log(
  getNames([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Utsav", age: 20 },
  ])
);
*/

// Task 5: Find the Longest Word
//Write a function findLongestWord(arr) that takes an array of strings
//and returns the longest word using reduce() and an arrow function

function findLongestWord(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest ;
  });
}
console.log(findLongestWord(["apple", "banana", "cherry", "watermelon"]));
