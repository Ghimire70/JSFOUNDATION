const person = {
  name: "Mark",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Ajay" });
boundGreet();

//learn bind, call and apply
