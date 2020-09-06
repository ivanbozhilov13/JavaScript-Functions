/*Function are foundamental in JavaScript. Their usage is highly spread in all 
environments of the language. Is vital to master them and learn how to use them
properly*/
function sayHello(greetings){
    let salute = greetings;
    return salute;
}
let el = document.getElementById('greeting');
el.textContent = sayHello('Hello World!');