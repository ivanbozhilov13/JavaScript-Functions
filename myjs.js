/*Function are foundamental in JavaScript. Their usage is highly spread in all 
environments of the language. Is vital to master them and learn how to use them
properly*/
/*This example we have a functions that prints 'Hello World!' inside the doc.
Function's name is greeting and inside the brackets we have its parameters.
the with the DOM doc. we access the doc's ID and print on screen 'Hello World'*/
function greeting(greet){
    return greet; /*All the comands that go after 'retur' inside the function are NOT
                  executed by the compiler! We can have several different 'return' commands 
                  though.*/  
}
//alert('Hello World!') is one way to print out the functions when calling her
//console.log('Hello World');//Another way to execute the command
//document.write('Hello World');//Another way to execute the command
let x = document.getElementById('greeting').innerHTML = 'Hello World!';//Executing command


//Function with 2 numbers. Parameters declared ( )
function getArea(width, height){ //This a function declarations
    let area = width * height; //Instruction what we want the fucntion to do
    return area; //returning the result
};
var el = document.getElementById('area'); //Seelecting within which element to call the funct.
el.textContent = getArea(5, 5);


//This is a function expression
let area = function (width1, height1){ //Function declared as anonymous. Names is omitted.
    return width1 * height1; //Function expression cant be called earlier before the 
                            //the interpreter finds her
};
let size = area(6, 6); //Automatically these values are assigned to the parametrs of function
let x1 = document.getElementById('area1').innerHTML = size;
document.write(size); 

//Function with the greater > operator comparison 
function greaterThan(val){
    if(val > 100){
        return "Number is greater than 100";
    }
    if(val > 10){
        return "Number is greater than 10";
    }
    return "Number is smaller than 10";
}
greaterThan(10);
document.write();

//Function if-else
function hello(val){
    var result = " ";
    if (val > 10){
        return "Val is greater than 10";
    } else {
        return "Val is smaller than 10";
    }
    return result;
}
console.log(hello(20));
    

//Function if-else
function hi(val){
    if (val > 5 ){
        return val * 5;
    } else {
        return val * 10;
    }
}
console.log(hi(10));

//Function if-else
function xxx(numb){
    if (numb > 10){
        return numb * 10;
    } else {
        return numb / 10;
    }
}
console.log(xxx(50));

//Function === comparison. Three === means strictly equal so of the exact same type
function compar(comp){
    if (comp == "3"){
        return comp;
    }
}
console.log(compar("3"));

//Function comparison ==
function compar1(comp1){
    if (comp1 == 5){
        return comp1;
    }
}
console.log(compar1("5"));

function compar2(comp2){
    if (comp2 == "5"){
        return comp2;
    }
}
console.log(compar2("5"));

//Function else-if: used for multiple conditions to test
function testElseIf(val){
    if (val > 10){
        return "Bigger than 10";
    } else if (val < 10){
        return "Smaller than 10";
    } else {
        return "Value is betweem 10 & 5"
    }
}
console.log(testElseIf(7));

//Multiple if-else statements
function testSize(num){
    if (num < 5){
        return "Tiny";
    }
    else if(num < 15){
        return "Medium";
    }
    else if (num < 20){
        return "Large";
    }
    else if (num >= 20){
        return "Huge";
    }
    return "Change me";
}
console.log(testSize(7));

//Golf Game with par and strokes
var names = ["Hole-in-one!", "Eagle","Birdie","Par"
,"Bogey", "Double Bogey","Go home!"];

function golfScore(par, strokes){
    if (strokes == 1){
        return "Hole-in-one!";
    }
    else if (strokes <= -2){
        return "Eagle";
    }
    else if (strokes == par -1){
        return "Birdie";
    }
    else if (strokes == par){
        return "Par";
    }
    else if (strokes == par +1){
        return "Bogey";
    }
    else if (strokes == par + 2){
        return "Double Bogey";
    }
    else if (stokes >= par +3){
        return "Go Home!";
    }
}
console.log(golfScore(5,4));

//Function with switch statement
function caseInSwtich(val){
    switch(val){
        case 1:
            return 'alpha';
            break;
        
        case 2:
            return 'beta';
            break;

        case 3:
            return 'gamma';

        case 4:
            return 'delta';
            break;
    }
}
console.log(caseInSwtich(1));

//Multiple identical Switch Statements
function sequentialSizes(val){
    switch(val){
        case 1:
        case 2:
        case 3:
            return "Low";

        case 4:
        case 5:
        case 6:
            return "Middle";

        case 7:
        case 8:
        case 9:
            return "High";
    }
}
sequentialSizes(1);
console.log(sequentialSizes(1));

//Checking for a property in an Object
function checkForProp(obj, checkProp){
    checkForProp = {
        car: 'Mercedes',
        dress: 'Versace',
        age: 30
    };
    return Mercedes;
}
console.log(checkForProp.hasOwnProperty('car'));

/*Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, 
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").*/
function greaterNum(num1, num2){
    if (num1 > num2){
        return "The greater number of 5 and 10 is 10";
    } else if (num1 < num2) {
        return "Num2 is greater than num1";
    }
}
//asdasdasdadas
console.log(greaterNum(10, 5));
console.log(greaterNum(50, 100));

/*Multiply the first n elements of an array to create the product of those elements. 
Using a for loop, you could do this:*/

// For loops for adding all the values inside the array
var arr = [ 2, 3, 4, 5, 6];

let total = 10;
for (let i = 0; i < arr.length; i++){
    total += arr[i];
}
console.log(total);

//For loop in a function to multiply all the values of an array
function multiplyAll(arr){
    let product = 1;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

//Checking an object if it has a certain property by using a function
function checkObj(obj, checkProp){
    let myObj = {
        gift: 'Pony',
        pet: 'Kitten',
        bed: 'Sleigh',
        city: 'Seattle'
    }
    if(obj.hasOwnProperty(checkForProp)){
        return obj[checkForProp];
    } else {
        return "Not Found";
    }
}

/*Change the code so that all variables are declared using let or const. 
Use let when you want the variable to change, 
and const when you want the variable to remain constant. 
Also, rename variables declared with const to conform to common practices, 
meaning constants should be in all caps.*/
function printManyTimes(str) {
    "use strict";
    
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
 }
  printManyTimes("freeCodeCamp");
  
//Example of a arrow function 
const elem = (arr1, arr2) => {
    "strict mode"
    return arr1.concat(arr2);
}
console.log(elem([1,2], [10,20,30]));

