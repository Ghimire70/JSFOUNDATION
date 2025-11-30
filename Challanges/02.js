// Perform the following mathematical operations
// on the provided variables a and b
// Add
// Subtract
// Multiply
// Divide
// Increment
// Decrement
// Reminder

function operations(a, b) {
  let add = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;
  let rem = a % b;

  let inrA = a + 1;
  let inrB = b + 1;

  return {
    addition: add,
    subtraction: sub,
    multiplication: mul,
    division: div,
    remainder: rem,
    increment_a: inrA,
    increment_b: inrB,
  };
}
console.log(operations(388, 57));
