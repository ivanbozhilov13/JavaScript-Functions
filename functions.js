//Functions in JS. ES5
function hello(){
    console.log('Hello World!'); //The output we expect and want to the console
}
hello(); //We are calling the function and loggin to the console

//Returning the first index and the last one of the array
function example(firstOne, lastOne){
    let arr = [1,2,3,80,-500];
    firstOne = arr[0];
    lastOne = arr[arr.length-1];
    return firstOne;
}
console.log(example());

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

//function
function randomNumber(num){
    "use strict";
    return Math.floor(Math.random() * 10);
}
console.log(randomNumber());

//ES6 Spread operator... In this example we use to copy effectively the values from arr to arr2
let arr = [1,2,3,4,5,6];
let arr2 = [...arr];
console.log(arr2);

//ES6 Function with three arguments passed to it
const createPerson = (name, age, gender) => ({name, age, gender});
   "use strict";
    console.log(createPerson("Zodiac Hasbro", 56, "male"));

//ES6 Arrow function with two arguments inside the brackets.
const len = (num1) => num1 % 2 === 1;
console.log(len(9));   










  

