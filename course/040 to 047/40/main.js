/* 
    Create Array methods:
        1. new Array()
        2. []
*/

let myFriends = ["Ahmed", "Mohamed", "Ali", "Yousif"]

console.log(myFriends);

myFriends[2] = ["Sayed", "Osama"];
console.log(myFriends);

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);

console.log(`Hello ${myFriends[0][2]}`);
console.log(`Hello ${myFriends[2][1][2]}`);

myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends));
console.log(Array.isArray("myFriends"));