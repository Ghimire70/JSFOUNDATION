/*
let car1 = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car1.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.utsav = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.utsav());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.utsav());

class Veichle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
let car = new Veichle("Toyota", "Corolla");
// console.log(car.start());

class Car extends Veichle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}
let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Veichle("Toyota", "Corolla");
// console.log(vehOne.make);

//Encapsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `Rs. ${this.#balance}/-`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

*/

//Abstraction
class CoffeMachine {
  start() {
    // Call DB
    // Filter value
    return `Starting the coffe machine...`;
  }
  brewCoffee() {
    // Complex Calculation
    return `Brewing coffee`;
  }
  pressStartButton() {
    let msgone = this.start();
    let msgtwo = this.brewCoffee();
    return `${msgone} + ${msgtwo}`;
  }
}
let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

//Polymorphism

class Bird {
  fly() {
    return `Flying bird....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly but Swim....`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//Static method
//static is the method which can only be called by the class itself

class Calulator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calulator()
// console.log(miniCalc.add(2,3)); => this way is not allowed so commented

// console.log(Calulator.add(2,3));

//Getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", 50000);
console.log(emp.salary);
