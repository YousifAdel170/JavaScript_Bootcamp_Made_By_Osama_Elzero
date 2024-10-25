let user = {};
// Equal to the below method
let user1 = new Object();


let user2 = {
    age: 20,
};

console.log(user2);
user2.age = 50;
user2.age = 50;
console.log(user2);
user2["country"] = "EGY";
console.log(user2);
user2.sayHello = function(){
    return `Hello`;
};
console.log(user2);
console.log(user2.sayHello());

let user3 = new Object({
    age: 70,
});
console.log(user3.age);


