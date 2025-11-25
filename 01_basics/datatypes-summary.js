// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (non primitive)

// Array, Objects, Functions

let username = "Alice";

const score = 100;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 358694737287399134n
console.log(typeof bigNumber);

const heros = ['shaktiman', 'naagraj', 'deno'];
console.log(typeof heros);

let myObj = {
    name: "sp",
    age: 21,
}
console.log(typeof myObj);

const myFunction = function () {
    console.log("Hello World");
}
myFunction();
