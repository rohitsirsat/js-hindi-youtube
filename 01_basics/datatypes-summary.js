//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  // console.log("Hello world");
};

// console.log(typeof anotherId);
// console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ----------Example for stack----------
let myYoutubeName = "hiteshchaudhary";

let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName);
// ----------Example for stack----------

// ----------Example for heap----------
let userOne = {
  email: "Hs4wI@example.com",
  name: "hitesh",
};

let userTwo = userOne; // shallow copy
userTwo.email = "9w5gk@example.com";

console.log(userOne.email);
console.log(userTwo.email);
// ----------Example for heap----------
