//Number

let balance = 120
let anotherBalance = new Number(120)

// console.log(typeof balance);
// console.log(typeof anotherBalance.valueOf());

// console.log(typeof balance)
// console.log(typeof anotherBalance)

//boolean
// let isActive = true
// let isReallyActive = new Boolean(true) //not recommended 

// null and undefined

// let firstname = null
// let lastname = undefined
// console.log(firstname)
// console.log(lastname)

//string

let myString = "Hello"
let myStringone = 'Hola'
let username = 'james'

let greetMessage = `Hello ${username} !`
let demoOne = `Value is ${2*2}` 

// console.log(greetMessage);
// console.log(demoOne);


//symbols: always has the uniqeness even when you give the same value.
let sm1 = Symbol("gems")
let sm2 = Symbol("gems")

console.log(sm1 == sm2);



