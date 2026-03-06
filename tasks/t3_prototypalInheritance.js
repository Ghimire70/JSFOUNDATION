// Task 1: Create Inheritance Using Prototypes
// Create a constructor Animal with a method makeSound().
// Then create a constructor Dog that inherits from Animal and
// adds a method bark()
// Task 2: Shape and Rectangle Inheritance
// Create a constructor function Shape that
// takes color as a parameter and has a method getColor() that returns the color.
// Create another constructor Rectangle that inherits from
// Shape and adds properties width and height.
// Add a method getArea() to Rectangle that returns the area of the rectangle.

/*
// Task 1: Create Inheritance Using Prototypes
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says: ${this.sound}!`);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
  }
  bark() {
    console.log(`${this.name} fetches the ball! \nThe rex says ${this.sound}.`);
  }
}

//usage------------------------------------
// const dog = new Animal("Dog", "Woof");
// const cat = new Animal("Cat", "meow");
// dog.makeSound();
// cat.makeSound();

// const dog = new Dog("Rex");
// dog.bark();
*/

// Task 2: Shape and Rectangle Inheritance

function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return `${this.color}`;
};

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    const area = this.width * this.height;
    console.log(
      `The rectangle with height ${this.height} and width ${this.width} has its area ${area}\nAnd its color is ${this.getColor()}`,
    );
  }
}

//usage------------------------------------
const rectangle = new Rectangle("blue", 5, 10);
rectangle.getArea();
rectangle.getColor();
