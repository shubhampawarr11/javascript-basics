"use strict"; // treat all JS Code as newer version

// alert(3 + 3) // we are using node.js, not browser

console.log(3
    +
3) // code readability should be high

console.log("SP");

let name = "SP" // string
let age = 18; // number
let isLoggedIn = false // boolean
let value; // undefined
let sum = null; // null value means it is empty
let huge = 90987655446543378n; // For numbers larger than the Number
let sym = Symbol("id"); // A unique and immutable identifier

// number => 2 to power 53
// bigInt => Big Values Present
// string => ""
// boolean => true/false
// null => standalone value
// undefined => when you not define the value
// symbol => to find uniqueness we use symbol

// object

console.log(typeof undefined); // Type: undefined
console.log(typeof null); // Type: object