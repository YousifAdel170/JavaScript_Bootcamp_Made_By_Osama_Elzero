let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

/* unshift(elemenets to be added at the first of the array) */
myFriends.unshift("Osama", "Yousif");

console.log(myFriends);

/* push(elemenets to be added at the end of the array) */
myFriends.push("Mohamed", "Adel");

console.log(myFriends);

/* shift() don't take any parameters, it remove the first element on the array */
let first = myFriends.shift();

console.log(myFriends);
console.log(`The first element removed was ${first}`);

/* pop() don't take any parameters, it remove the last element on the array */
let last = myFriends.pop();

console.log(myFriends);
console.log(`The last element removed was ${last}`);