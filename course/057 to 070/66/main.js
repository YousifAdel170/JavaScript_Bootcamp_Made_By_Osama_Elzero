/* Regular Function */

function print(){
    return 10;
}

console.log(print());

/* Assign regular function to variable */
let  a = function (){
    return 10;
};

console.log(a());


/* Arrow Function [arrow operator => ] */
let b = () => {
    return 15;
}; 
console.log(b());

// shortcut for one statement code for arrow function
let c = () => 3;
console.log(c()); 

// if there is no parameters
let d = _ => 4;
console.log(d()); 


let e = (num) => num;
// OR let e = num => num;       // Only if there is one parameter
console.log(e(50));


let sum = (num1, num2) => num1+num2 ;
// OR let sum = num1, num2 => num1+num2 ;     // will give me an ERROR because Only one parameter can done this 

console.log(sum(20,30));