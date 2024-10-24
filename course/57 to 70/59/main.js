/*
    Function
        - return
        - Automatic Semicolon Insertion [No line terminator allowed]
        - interrupting
*/

/* 1. return */
function sayHello(userName){
    return `Hello ${userName}`;
}
console.log(sayHello("Yousif"));
let resultString = sayHello("Adel");
console.log(resultString);

function sum(num1, num2){
    return num1 + num2;
}

let result = sum(10, 20);
console.log(result);


function sum1(num1, num2){
    return      // 2. Automatic Semicolon Insertion
    num1 + num2;
}

let result1 = sum1(10, 20);
console.log(result1);
console.log(result1 + 20);      


/* 3. Interrupting */

function generate(start, end){
    for(let i = start; i<=end; i++){
        console.log(i);
        if(i === 15)    return  `Interrupting`;
    }
}

generate(10, 20);