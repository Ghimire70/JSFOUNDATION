// Task 1: Bind the Correct Context
// Create an object person with properties name and a method introduce().
// Use the bind() method to ensure the method works correctly when passed
// to another function.
// Task 2: Using call() to Invoke a Function with Different Contexts
// Write a function introduce() that uses the this keyword to introduce
// a person by name. Then, invoke introduce() using call() to introduce
// different people with the same function.
// Task 3: Using apply() to Pass Arguments with Context
// Create a function sum() that accepts two numbers and uses this to
// access a multiplier value. Then, invoke sum() with different contexts
// using apply(), passing the numbers as an array.

/*
//Task1
const person = {
  name: "DJ.cherry",
  introduce() {
    console.log(`Hi nice to meet you!\nThey call me ${this.name}.`);
  },
};

//raw introduce
const rawIntroduce = person.introduce;
console.log(rawIntroduce);

//bound introduce
const boundIntroduce = person.introduce.bind(person);
console.log(boundIntroduce());

//practical method by passing to another function
// function callIntroduction(fn){
//   return fn();
// }
// console.log(callIntroduction(boundIntroduce));
*/

/*
//Task2

function introduce() {
  console.log(`Hi, my name is ${this.name}. I am ${this.age} years old`);
}

const person1 = { name: "Ray", age: 12 };
const person2 = { name: "Shawn", age: 22 };
const person3 = { name: "Dwan", age: 26 };

introduce.call(person1);
introduce.call(person2);
introduce.call(person3);
*/

//Task 3

function sum(a, b) {
  const result = (a + b) * this.multiplier;
  console.log(`(${a}+${b})*${this.multiplier} = ${result}`);
}

const context1 = { multiplier: 1 };
const context2 = { multiplier: 2 };
const context3 = { multiplier: 3 };

sum.apply(context1, [2, 3]);
sum.apply(context2, [3, 5]);
sum.apply(context3, [4, 6]);
