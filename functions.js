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

//
function profitableGamble(prob, size, pay){
    if(prob * size > pay){
        return true;
    } else {
        return false;
    }
}
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));

//
function isSameNum(num1, num2){
    if(num1 === num2){                  /*Same but shortert. just Add return ===...:
                                        return num1 === num2;
                                        This way if it's not true then logically is false.*/
        return true;
    }   else {
        return false;
    }
}
console.log(isSameNum(10, 10));
console.log(isSameNum(10, '10'));

//Counting whether is even or odd
function oddOrEven(s){
    let len = s.length;
    if(len % 2 === 0){
        return true;
    }   else if (len % 2 === 1) {
        return false;
    }
    }
    console.log(oddOrEven('apples'));
    console.log(oddOrEven('pears'));
    console.log(oddOrEven('cherry'));

/*The object is decalred outside the function which means that it has a global scope
and can be accessed by console.log. In the case scneario of being inside the function then 
it cant be found and it otuputs udefined.*/
let myObj = {
    gift: 'pony',
    pet: 'kitten',
    bed: 'sleigh',
    city: 'Seattle'
};  
function checkObj(obj, checkProp) {
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    else {
        return "Not found";
    }
    }
console.log(myObj.hasOwnProperty('gift')); //This method return either true or false

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
function lookUpProfile(name, prop){
    for (let i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            if (contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            }   else {
                return "No such contact";
            }
        }
    }
    return 'No such property';
}
console.log(lookUpProfile("Akira", "likes"));

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










  

