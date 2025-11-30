/*
task1:
declarea a array named `teaFlavours` that contains the strings "green tea", "black tea", "oolong tea".
Access the first element of the array and store it in a variable named "firstTea"
*/

// let teaFlavours = ["green tea", "black tea", "oolong tea"];
// const firstTea = teaFlavours[0];
// console.log(firstTea);

//task2:

// let cities = ["London", "Tokyo", "Paris", "New York"];
// let favouriteCity = cities[2];
// console.log(favouriteCity);

//task3:

// let teaTypes = ["herbal tea", "white tea", "masala chai"];
// teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

// task4:

// let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited.push("Berlin");
// // citiesVisited[citiesVisited.length] = "Berlin"; // just another way
// console.log(citiesVisited);

//task5:

// teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

//task6: Soft Copy

// let popularTeas = ["green tea", "oolong tea", "chai"];
// let softCopyTeas = popularTeas;
// popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

//task7: Hard copy

// let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];
// // let hardCopyCities = topCities.slice();
// topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

//task8:

// let europeanCities = ["Paris", "Rome"];
// let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

//task9:

// let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
// let menuLength = teaMenu.length;
// console.log(menuLength);

//task10:

let cityBucketList = ["Kyoto", "London", "London", "Cape Town", "Vancouver"];
let isLondonList = cityBucketList.includes("London");
console.log(isLondonList);
