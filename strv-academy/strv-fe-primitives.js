//________________________________________________________________//
// TypeScript can infer the type of variable, from the value.
//________________________________________________________________//
// // String
// let userName = "John"
// // Number
// let userAge = 25
// // Boolean
// let isSmart = true
// // Null
// const empty = null
// // Undefined
// const undef = undefined
//________________________________________________________________//
// This is how to assign a type to a variable
//________________________________________________________________//
var userName = "John";
var userAge = 25;
var isSmart = true;
var empty = null;
var undef = undefined;
//________________________________________________________________//
// We should aviod using "any" type because TS wont know what type it is so it will basically ignore it.
//________________________________________________________________//
var printMessage = function (message) {
    console.log(message);
};
//________________________________________________________________//
// Instead we should use pass type as a string like this:
//________________________________________________________________//
var printMessageType = function (message) {
    console.log(message);
};
printMessageType('hello'); // This works correctly as string is passed to the function
// printMessageType(4) // This does not work as number is passed to the function when type of string is declared
