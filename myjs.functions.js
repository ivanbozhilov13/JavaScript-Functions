/*Functions are core arguments in JS. 
Declare a Function. Paramaters*/
function hello(){
    console.log('Hello World!');
}
hello(); //On this line we call the function to execute

//Function with tho parameters passed inside
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

//Printing the first element of an array
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

  //Usind arrow function. Just one line of code
  let array = [
      'hello',
      'neverever',
      'foreverandever',
      'wholetthedogsout',
      'goodbyemylover'
  ];
  console.log(array.map(array => array.length));

  //Logging all the prices of the smartphones
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

//Comparing two arguments
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

//ES6 
let vals = [5, 9, 2, 4, 8, 20, 23];
vals = vals.filter(x => x % 2 === 0); //This is ES6 syntax. Shorter more precise and easier to read
console.log(vals); 


//Removing duplicates using new Set()
let arr = [1,1,1,2,2,3,4,5,5,7];
console.log(new Set(arr));

//Using for loop to remove duplicates
let a = [1,1,1,2,2,3,4,5,5,7];
let b = [];
let len = a.length;

for(let i = 0; i < len; i++){
    if(b.indexOf(a[i]) === -1){
        b.push(a[i]);
    }
}
console.log(b);

/*Game of Golf with conditional statements. Complete the function using conditionals 
so that to every strokes corresponds a string:
Strokes	Return:
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

//We can use an else...if conditional 
function golfScore(par, strokes) {
    if (strokes === 1){
        return 'Hole in one!';
    }
    else if (strokes <= par - 2){
        return 'Eagle';
    }
    else if (strokes === par  - 1){
        return 'Birdie';
    }
    else if (strokes === par){
        return 'Par';
    }
    else if (strokes === par + 1){
        return 'Bogey';
    }
    else if (strokes === par +2){
        return 'Double Bogey';
    }
    else if (strokes >= par + 3){
        return 'Go Home!'
    }
}   
console.log(golfScore(5,4)); //Trying different values to check if the function works
console.log(golfScore(2, 4)); //Same as above
console.log(golfScore(1,1));  //Same as above

//Switch statement
function caseInSwitch(val){ //We are switching the value inside to check which one matches
    let answer = "";
    switch(val){
        case 1: answer = 'alpha';
        break;
        case 2: answer = 'beta';
        break;
        case 3: answer = 'gamma';
        break;
        case 4: answer = 'delta';
        break;
    }
    return answer;
}
console.log(caseInSwitch(1)); //Testing different values to see which what the programm logs
console.log(caseInSwitch(4));
console.log(caseInSwitch(3));


//Switch statement
function switchOff(val){
    let answer = "";
    switch(val){
        case 1: answer = 'apple';
        break;
        case 2: answer = 'bird';
        break;
        case 3: answer = 'cat';
        break;
        default: answer = 'stuff';
        break;
    }
    return answer;
}
console.log(switchOff(3))  //Testing one of the cases
console.log(switchOff(5)); //Testing the default statement. Workd as else in if...else

//Switch statement. Cases can be Strings as well, not only numbers
function chainToSwitch(val) {
    var answer = "";
      switch(val) {
      case 'bob':
      answer = "Marley";
      break;
      
      case 42:
      answer = "The Answer";
      break;
  
      case 1:
      answer = "There is no #1";
      break;
    
      case 99:
      answer = "Missed me by this much!";
      break;
  
      default:
      answer = "Ate Nine";
      break;
    }
    // Only change code above this line
    return answer;
  }
  console.log(chainToSwitch('bob'));
  console.log(chainToSwitch(3));
  
//Counting card BlackJack function
let count = 0;
function cards(card){
    switch(card){
        case 1:
        case 2:   
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;
        case 7:
        case 8:
        case 9:
        count + 0;
        break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
        count--;
        break;
    }
    if( count > 0){
        return count + " " + 'Bet!';
    }   else {
        return count + " " + 'Hold!';
    }
}
console.log(cards('j'));

//Object literal
//const Book1 = {
   // title: 'Book one',
    //author: 'John Doe',
   // year: '2013',
    //getSummary: function(){
        //return `${this.title} was written by ${this.author} in ${this.year  }`;
//}
//}
//console.log(Book1.getSummary());


//Constructor 
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//Instatiating the object
const book1 = new Book('Book1', 'John Doe', 2013);
const book2 = new Book('Book2', 'Jane Doe', 2016);
// console.log(book1.year);

    