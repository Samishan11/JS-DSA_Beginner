//  statice method and this is a block scope
const name = "Harry";
console.log(name);

//  this is a block scope but you can change the value
let address = "Nepal";
address = "USA";
console.log(address);

// this is a functional scope/ global scope and this can be change if you use es6 or + i recommend to not use var instate of it you can use const and let
var age = 20;
age = 25;
console.log(age);
