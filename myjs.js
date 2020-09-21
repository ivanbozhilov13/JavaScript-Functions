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
var arrayExample = [3,4,5,'hello','whatever'];
function theLastOne(arr) {
    return arr[arr.length - 1];
 }
 console.log(theLastOne(arrayExample))