//1. `for` Loop that runs through array untill it finds the certain element and store all the elements before that certain one in a new array.
// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];
// for (let i = 0; i < teas.length; i++) {
//   if (teas[i] === "chai") {
//     break;
//   }
//   selectedTeas.push(teas[i]);
// }
// console.log(selectedTeas);

//2. `for` loop that loops through the array skipping one element and storing others in another array.

// let cities = ["London", "New York", "Paris", "Berlin"];
// let myCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === "Paris" || cities[i] === "paris" ) {
//         continue;
//     }
//     myCities.push(cities[i]);
// }
// console.log(myCities);

/*
let cities = ["London", "New York", "Paris", "Berlin"];
let selCities = [];

for (let i = 0; i < cities.length; i++) {
  selCities.push(cities[i]);
  if (cities[i] === "Paris") {
    selCities.pop("Paris");
  }
}
console.log(selCities);
*/

//3. `for-of` loop to iterate through array of numbers and stop when a certain number is found and store the numbers before it in a certain array.

// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers = [];
// for (const num of numbers) {
//   if (num === 4) {
//     break;
//   }
//   smallNumbers.push(num);
// }
// console.log(smallNumbers);

//4. for-of loop to do as task no.2

// let teas = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredTeas = [];
// for (const elements of teas) {
//   if (elements === "herbal tea") {
//     continue;
//   }
//   preferredTeas.push(elements);
// }
// console.log(preferredTeas);

//5. "for-in" loop task with the objects

// let citiesPopulation = {
//   London: 8900000,
//   "New York": 8400000,
//   Paris: 2200000,
//   Berlin: 3500000,
// };
// let cityNewPopulation = {};
// // console.log(Object.values(citiesPopulation));
// for (const city in citiesPopulation) {
//   if (city == "Berlin") {
//     break;
//   }
//   cityNewPopulation[city] = citiesPopulation[city];
// }
// console.log(cityNewPopulation);

//6. "for-in" loop to loop through an object containing city population. Skip city with population below 2 million.

// let worldCities = {
//   Paris: 2200000,
//   Sydney: 5000000,
//   Tokyo: 9000000,
//   Berlin: 3500000,
// };
// let largeCities = {};
// for (const city in worldCities) {
//   if (worldCities[city] < 3000000) {
//     continue;
//   }
//   largeCities[city] = worldCities[city];
// }
// console.log(largeCities);

//7. `for-each` loop to do as no 2

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let avilableTeas = [];
// teaCollection.forEach(function name(tea) {
//   if (tea === "chai") {
//     return;
//   }
//   avilableTeas.push(tea);
// });
// console.log(avilableTeas);

//8. "forEach" loop

// let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let traveledCities = [];
// myWorldCities.forEach((city) => {
//   if (city === "Sydney") {
//     return;
//   }
//   traveledCities.push(city);
// });
// console.log(traveledCities);

//9. "for" loop that iterates through the array '[2,5,7,9]'. Skip 7 and multiply others by 2. Store the results in a new array named doubledNumbers.

// let myNumbers = [2, 5, 7, 9];
// let doubledNumbers = [];
// for (let i = 0; i < myNumbers.length; i++) {
//   if (myNumbers[i] === 7) {
//     continue;
//   }
//   doubledNumbers.push(myNumbers[i] * 2);
// }
// console.log(doubledNumbers);

//10. "for-of" loop to stop at certain length of string

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of myTeas) {
  if (tea.length > 10) {
    continue; //use break to finish the loop here.
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
