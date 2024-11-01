class User {
    static countStatic = 0;
    countObject = 0;
    constructor(id, username, salary) {
        this.i = id,
            this.u = username,
            this.s = salary;
            User.countStatic++;
            this.countObject++;
    }
    sayHelloObject(){
        return `Hello From Class [NOT STATIC]`;
    }
    static sayHelloStatic(){
        return `Hello From Class [STATIC]`;
    }
}

let userOne = new User(100, "Elzero", 50000);
let userTwo = new User(101, "Elzero-1", 51000);

console.log(User.countStatic);      // value 2 [2 object created] [property for class not object]
console.log(User.countObject);      // Uncdefined because [property for object not class]
console.log("#".repeat(20));
console.log(userOne.countStatic);      // Uncdefined because [property for class not object]
console.log(userOne.countObject);      // value [1] [incremented once after object 1 created] because [property for object not object]
console.log(userTwo.countObject);      // value [1] [incremented once after object 1 created] because [property for object not object]
console.log("#".repeat(20));

console.log(User.sayHelloStatic()); // Will print the string because [class not object]
// console.log(User.sayHelloObject()); // Error [object not class]

// same here for object