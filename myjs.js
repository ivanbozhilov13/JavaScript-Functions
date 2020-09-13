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

//Function with the greater operator comparison 
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




                    
                                                        

