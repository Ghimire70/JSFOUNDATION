let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);