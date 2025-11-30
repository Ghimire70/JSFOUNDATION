// Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array

// function filterNumbers(arr) {
//   const result = arr.filter((item) => typeof item === "number");
//   return result;
// }
// console.log(filterNumbers(["spray", 434, "elite", 3434, "hello", 999]));

// Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array

// function reverseArray(arr) {
//   return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4]));

// Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array

// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([1, 2, 3, 4, 5, 7]));

// Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 4, 5]));

// Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr) {
  return arr.flat();
}
console.log(flattenArray([1, 2, 3, 4, [5, 6]]));