/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User{
    // Private property [only this class can see it]
    #e; 
    constructor(id, username, expectedSalary){
        this.i = id;
        this.u = username;
        this.#e = expectedSalary;
    }

    getSalary(){
        return `${parseInt(this.#e)}`;
    }
}


let userOne = new User (100, "Elzero", "5000 Geneh");
console.log(userOne.getSalary());
console.log("#".repeat(20));


class Admin extends User{ 
    constructor(i, name, eSalary){
        super(i, name, eSalary);
        this.e = eSalary;
    }
}
let userAdmin = new Admin (100, "Elzero", "5000 Geneh");
console.log(userAdmin.e);
console.log(userAdmin.getSalary());


// Experiment