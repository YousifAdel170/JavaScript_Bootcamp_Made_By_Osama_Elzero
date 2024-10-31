/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context
*/

console.log(this);                      // window => object
console.log(this === window);           //  true

myVar = 100;
console.log(window.myVar);              // 100
console.log(this.myVar);                // 100

function sayHello(){
    console.log(this);
    return this;
}
sayHello();                             // window
console.log(sayHello() === window);     //  true

document.getElementById('cl').onclick = function(){
    console.log(this);
};

let user = {
    age: 22,
    ageInDays: function(){
        console.log(this);              // user
        return this.age * 365;    
    }
}


console.log(user.age);
console.log(user.ageInDays());