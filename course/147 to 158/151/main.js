/* 
    Constructor Function
    - update properties 
    - bulit in constructors like String
*/

class User {
    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary;
    }
    updateName(newName){
        this.u = newName;
    }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Yousif");
console.log(userOne.u);

console.log("#".repeat(20));
console.log("$".repeat(20));

/* Notice that the normal string its type [string not object] but also using String constructor [advanced] */
let strOne = "Elzero";
let strTwo = new String("Elzero");
console.log(strOne);        
console.log(strTwo);         
console.log("#".repeat(20));
console.log(typeof strOne); // string
console.log(typeof strTwo); // object
console.log("#".repeat(20));
console.log(strOne instanceof String); // false
console.log(strTwo instanceof String); // true
console.log("#".repeat(20));
console.log(strOne.constructor === String); // true
console.log(strTwo.constructor === String); // true
console.log("#".repeat(20));
console.log("$".repeat(20));


let numOne = 100;
let numTwo = new Number(200);
console.log(numOne);        
console.log(numTwo);         
console.log("#".repeat(20));
console.log(typeof numOne); // Number
console.log(typeof numTwo); // object
console.log("#".repeat(20));
console.log(numOne instanceof Number); // false
console.log(numTwo instanceof Number); // true
console.log("#".repeat(20));
console.log(numOne.constructor === Number); // true
console.log(numTwo.constructor === Number); // true
console.log("#".repeat(20));
console.log("$".repeat(20));
