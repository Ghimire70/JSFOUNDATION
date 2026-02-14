//Clousure is basically functions that remember the environment in which
//they where created

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
