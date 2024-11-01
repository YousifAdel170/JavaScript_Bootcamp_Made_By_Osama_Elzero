class User {
    constructor(id, username, salary) {
        // Properties
        this.i = id;
        this.u = username || "Unknown";
        this.s = salary < 6000 ? salary + 500 : salary;
        this.msg = function () {
          return `Hello ${this.u} Your Salary Is ${this.s}`;
        };
      }
      // Methods
      writeMsg() {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
      }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg);   // Native Code
console.log(userOne);
console.log(userOne.writeMsg);  // Native Code
console.log(userOne.writeMsg());