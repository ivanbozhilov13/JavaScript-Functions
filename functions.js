//Functions in JS. Both ES5 and ES6
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
function equalityCheck(a, b){
    let equality = a === b;
    return equality;
}
console.log(equalityCheck(1, true)); //Output: true
console.log(equalityCheck(0, "0")); //Output: false. Second 0 is a String
console.log(equalityCheck(1, 1)); //Output: false  

//Same function as above but done with if...else statement
function equalityCheck2(a, b){
    if(typeof(a) === typeof(b)){
        return true;
    }  else if (typeof(a) !== typeof(b)){
        return false;
    }
}
console.log(equalityCheck(1, true)); //Output: true
console.log(equalityCheck(0, "0")); //Output: false. Second 0 is a String
console.log(equalityCheck(1, 1));

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

//
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

//Check if a String is empty or not using a function
function isEmpty(word) {
    return word === "";
    //return word.length === 0;
    //return !word;
    /*return if(word ==== ""){
        return true;
    } else if (word !== ""){
        return false
        */
    }
console.log(isEmpty(""));

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
//console.log(myObj.hasOwnProperty('gift'));

//
// Setup
function multiplyAll(arr) {
    var product = 1;

    for(let i = 0; i < arr.length; i++){
        
    }
  
  //console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
  

    