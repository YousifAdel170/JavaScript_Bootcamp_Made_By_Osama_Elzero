class User{
    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary
    }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log("#".repeat(10)); 


console.log(userOne instanceof User);
console.log(userOne.constructor === User);
console.log(userOne.i === User);
console.log(userOne === User);
console.log(User);
console.log(userOne.constructor);