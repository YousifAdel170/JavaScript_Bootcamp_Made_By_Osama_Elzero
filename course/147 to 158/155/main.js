/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User {
    constructor(id, username) {
        this.i = id;
        this.u = username;
    }
    sayHello() {
        return `Hello ${this.u}`;
    }
}

let userOne = new User (100, "Elzero");
console.log(User.prototype);

let str = "Elzero";     // made by String built in constructor
console.log(String.prototype);  // all these features that will be printed [str can use any feature of them]