/* Default Function parameters */

// 1. Default Function Parameter is undefined
function sayHello(userName){
    console.log(`Hello ${userName}`);
}

sayHello("Yousif");
sayHello();

// 2. Old Strategies
    //  a. Condition
    function sayHelloAge(userName, age){
        if(age === undefined)   age = "Unknown";
        console.log(`Welcome ${userName}, Your Age is ${age}`);
    }
    
    sayHelloAge("Yousif");
    sayHelloAge();

    //  b. Logical OR || 
    function sayHelloAgeLog(userName, age){
        age = age || "Unknown"
        console.log(`Welcome ${userName}, Your Age is ${age}`);
    }
    
    sayHelloAgeLog("Yousif");
    sayHelloAgeLog();

// 3. ES6 Method
function sayHelloES6 (userName = "Unknown", age = "Unknown"){
    console.log(`Hello ${userName}, Your Age is ${age}`);
}

sayHelloES6("Yousif", 22);
sayHelloES6();