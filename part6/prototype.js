// let computer = { cpu: 12 };
// let lenovo = {
//   screen: "HD",
//   __proto__: computer,
// };
// let tomHardware = {};
// console.log(`lenovo`, lenovo.__proto__);

let genCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genCar);

console.log(`genCar`, Object.getPrototypeOf(tesla));
