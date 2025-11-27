const name = "sp ";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`My name is ${name}and my repo count is ${repoCount}`);

const gameName = new String("sdp-sp-com");

// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("s"));


const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   sdp   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sdp.com/sdp%20pwr"

console.log(url);
console.log(url.replace("%20", "-"));

console.log(url.includes("sdp"));

console.log(gameName.split("-"));