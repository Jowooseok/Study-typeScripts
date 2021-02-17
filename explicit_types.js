"use strict";
// explicit types
var character;
var age;
var isLoggedIn;
// arrays
var fruits = [];
fruits.push('ho');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false); //error
console.log(mixed);
var uid;
// objects
var appleOne;
appleOne = { name: 'hi', age: 30 };
var appleTwo;
appleTwo = {
    name: 'hi',
    age: 20,
    colour: 'red',
    skills: [],
};
