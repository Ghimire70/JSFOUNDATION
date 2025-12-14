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

// Task 1: Encapsulation Using Getters and Setters
// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount).
// Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

// Task 2: Polymorphism with Method Overriding
// Create a class Shape with a method area() that returns 0.
// Create two subclasses Circle and Rectangle that override the area() method to
// calculate the area of a circle and a rectangle, respectively.

//Task 1 Solution:
// class BankAccount {
//   #_balance = 0;

//   deposit(amount) {
//     this.#_balance += amount;
//     return `You successfully deposited rs.${this.#_balance}`;
//   }
//   withdraw(amount) {
//     if (amount > this.#_balance) {
//       return `Insufficient balance!`;
//     }
//     this.#_balance -= amount;
//     return `You withdrew amount rs.${amount}`;
//   }
//   get balance() {
//     return `Your remaining balance is rs.${this.#_balance}`;
//   }
//   set amount(value) {
//     if (value < 0) {
//       console.log("Error, can't be negative balance");
//     } else {
//       this.#_balance = value;
//     }
//   }
// }
// let user = new BankAccount();
// console.log(user.deposit(300000));
// console.log(user.withdraw(10000));
// console.log(user.balance);

//Task 2 Solution:

class Shape {
  area() {
    return 0;
  }
}
class Circle extends Shape {
  area() {
    return "The area of circle";
  }
}
class Rectangle extends Shape {
  area(){
    return "The area of rectangle"
  }
}

let shape = new Shape();
let circle = new Circle();
let rectangle = new Rectangle();
console.log(circle.area());
console.log(rectangle.area());


