function Animal() {}

Animal.prototype.speak = function () {
  return "Animal speaking";
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return "Woof!";
};

Dog.prototype.constructor = Dog;

let myDog = new Dog();
console.log(myDog.speak()); // "Animal speaking"
console.log(myDog.bark()); // "Woof!"

console.log("The task is done");

