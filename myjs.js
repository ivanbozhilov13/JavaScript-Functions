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
//Alert('Hello World!') is one way to print out the functions when calling her
console.log('Hello World'); //Another way to execute the command
document.write('Hello World'); //Another way to execute the command
var x = document.getElementById('greeting').innerHTML = 'Hello World!'; //Executing command
