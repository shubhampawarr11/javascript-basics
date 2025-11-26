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


// ***** Memory Allocation in JS *****

// Stack (Primitive)

let myYoutubename = "spdotcom";

let anothername = myYoutubename;
anothername = "chaikesathcode";

console.log(myYoutubename);
console.log(anothername);


// Heap (Non-Primitive)

let userOne = {
    email: "user@gogle.com",
    upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "sp@google.com"

console.log(userOne.email);
console.log(userTwo.email);