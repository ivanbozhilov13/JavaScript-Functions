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

function operator(is_nice){
     return is_nice ? 'good' : 'not so good';
}
console.log(operator('not good',));