console.log(calc(10, 20));

let calculator = calc(10,20);
console.log(calculator);

// Notice the difference between below [Not Working] & in line 13 [work]
// console.log(calc1(1, 2));    // Error
// There people name the anonymous function to help them in tracing the errors
let calc1 = function (n1, n2){
    return n1 + n2;
}

// console.log(calc1(1, 2));    // Good

function calc(n1, n2){
    return n1+n2;
}


/* Used When we want to do specific action if something pressed , or if there delay before function to start */

function sayHello (){
    console.log("Hello");
}

// 1. When the button pressed => the console will appear that the button pressed
// document.getElementById("show").onclick = function () {
//     console.log("Button Pressed");
// };
document.getElementById("show").onclick = sayHello;

// 2. Timeout for specific time then do the function
setTimeout(function(){
    console.log("2 seconds Delay Done");
}, 2000);