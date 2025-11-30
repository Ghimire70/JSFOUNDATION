// problem1:

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum += i;
//   i++;
// }
// console.log(sum);

//problem2:

// let countdown = [];
// j = 5;
// while (j > 0) {
//   countdown.push(j);
//   j--;
// }
// console.log("Countdown:" + countdown);

//problem3: works in browser only

// let teaCollection = []
// let
// do {
//    tea = prompt(`Enter your favourite tea (type "stop" to finish)`)
//    if (tea!== "stop") {
//     teaCollection.push(tea);
//    }
// } while (tea !== "stop");
// console.log(teaCollection);

//problem4:

// let total = 0;
// let k = 1;
// do {
//   total += k;
//   k++;
// } while (k <= 3);
// console.log(total);

//problem5:

// let numbers = [2, 4, 6];
// let multipliedNumbers = [];
// let takenNumber;
// for (l = 0; l < numbers.length; l++) {
//   //   takenNumber = numbers[l] * 2;
//   //  multipliedNumbers.push(takenNumber);
//   multipliedNumbers.push(numbers[l] * 2);
// }
// console.log(multipliedNumbers);

//problem6:

let cities = ["Paris", "New york", "Tokyo", "London"];
let cityList = [];
for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);
