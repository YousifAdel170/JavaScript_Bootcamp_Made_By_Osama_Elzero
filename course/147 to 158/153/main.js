// Parent Class
class User{
    constructor(id, username){
        this.i = id, 
        this.u = username 
    }
    sayHello(){
        return `Hello ${this.u}`;
    }
}

// Derived Class
class Admin extends User{
    constructor(ids, name, permissions){
        super(ids, name);
        this.p = permissions;
        
    }
}


let userAdmin = new Admin(100, "Yousif", true);
console.log(userAdmin.i);
console.log(userAdmin.u);
console.log(userAdmin.p);
console.log(userAdmin.sayHello());


// Super class
class Super extends Admin{
    constructor(id, name, per, ability){
        super(id, name, per);
        this.a = ability;
    }
}
console.log("#".repeat(20));
let userSuper = new Super(100, "Yousif", true, "super");
console.log(userSuper.i);
console.log(userSuper.u);
console.log(userSuper.p);
console.log(userSuper.a);
console.log(userSuper.sayHello());
