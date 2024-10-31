let user = {
    age: 20,
    doubleAge: function(){
        // return user.age * 2;
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

// First Case
let obj = Object.create({});
obj.a = 100;
console.log(obj);

// Second Case
let copyObj = Object.create(user);
console.log("Second Case: ");
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
copyObj.age = 30;
console.log("Second Case After Modify The age & using user.age in the user object: ");
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

// To fix this we need to use this.age * 2 instead of user.age * 2 in the doubleAge fuction in the user object 