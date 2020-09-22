
/*Functions are core arguments in JS. 
Declare a Function. Paramaters*/
function hello(){
    console.log('Hello World!');
}
hello(); //On this line we call the function to execute

function getArea(width, height){
    let result = width * height;
    return result;
}
getArea(10, 10);
console.log(getArea(10, 10));

//Second way to write the function getArea
function getArea(width, height){
    return width * height;
}
getArea(20,20);
console.log(getArea(20,20));

//Calucating area of Triangle + parameters
function getArea(width, height){
    let result = (width * height ) / 2;
    return result;
}
let firstTriangle = getArea(10, 10);
let secondTriangle = getArea(100, 100);
console.log(getArea(10,10));
console.log(getArea(100, 100));

//Returinig values in an array
function getSize(width, height, depth){
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3,2,3);
var areaTwo = getSize(3,2,3);
console.log(getSize(3,3,3));
console.log(getSize(3,2,3));

/*The following functions uses local scope, which is better
than global scope. Variables are only stored in the given
function and dont have to be remembered by the page the
whole time. To do so you must declare the variables inside
the function usind variables to initialise.*/
function getArea(){
    let width = 5;
    let height = 10;
    return width * height;
}
console.log(getArea(5,5));

//Printing the last element of an array
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
let firstItem = myAlphabet[0];
console.log(firstItem);

//
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  companies.forEach(function(companies){
    console.log(companies);
  });

  //f
  let array = [
      'hello',
      'neverever',
      'foreverandever',
      'wholetthedogsout',
      'goodbyemylover'
  ];
  console.log(array.map(array => array.length));

  //
  const smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
  ];

const prices = smartPhones.map(smartPhones => smartPhones.price);
console.log(prices);

//
const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
];

let variable = items.find((item) => {
    return item.name === 'Book';
});
console.log(variable);

//
function compareIntegers(num1, num2){
    if(num1 > num2){
        return console.log(`bigger than 20`);
    } else {
        return console.log(`smaller than 20`);
    }
}
compareIntegers(10,20);

//Console log bigger number by having two parameters
function greaterNum(x, y){
    if (x > y){
        return 'x is bigger';
    } else if (x < y){
        return 'y is bigger';
    }
}
console.log(greaterNum(10, 15));
console.log(greaterNum(20, 10));

//Console.log hello world in 3 different languages
function helloWorld(lan){
    if (lan === 'it'){
        return 'Ciao Mondo!';
    } else if (lan === 'en'){
        return 'Hello World!';
    } else if (lan === 'de'){
        return 'Hallo Welt!';
    }
}
console.log(helloWorld('de'));
console.log(helloWorld('it'));
console.log(helloWorld('en'));

//Console log function with three grades
function assignGrade(score){
    if (score > 90){
        return 'A';
    } else if (score > 80){
        return 'B';
    } else if (score > 70){
        return 'C';
    } else if (score > 60){
        return 'D';
    } else if (score > 50){
        return 'F';
    }
}
console.log(assignGrade(65));
console.log(assignGrade(98));
console.log(assignGrade(78));

//Console log 2 paramets and their pluralized form
function pluralize(noun, number){
    if (number != 0 && noun != 'sheep' && noun != 'cat'){
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log(pluralize('dog', 2));
console.log(pluralize('cat', 1));

//
let sale = true;
if (sale){
    console.log('Time to Buy!');
}
sale = false;
if(sale){
    console.log('You need more money!');
}

let firsLetter = '';
let name = 'Ivan';
firsLetter = name[0];
console.log(firsLetter);
let first = 'Ivan'
let last = first[first.length-1];
console.log(last);

//
function addFive(){
    let sum = 0;
    sum += 5;
    return sum;
}
addFive(10);