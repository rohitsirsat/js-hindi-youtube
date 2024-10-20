const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com"); // another way of creating string [print this into browser console to see interesting properties]

console.log("gameName ==> " + gameName[0]);
console.log("gameName ==> " + gameName.__proto__);

console.log("gameName ==> " + gameName.length);
console.log("gameName ==> " + gameName.toUpperCase());
console.log("gameName ==> " + gameName.charAt(2));
console.log("gameName ==> " + gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log("anotherString ==> " + anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log("url ==> " + url.replace("%20", "-"));

console.log("url ==> " + url.includes("sundar"));

// const gameName = new String("hitesh-hc-com");

// const realName = new String("rohit-ro");
// console.log("realName ==> " + realName.split(""));

console.log("gameName ==> " + gameName.split("-"));
