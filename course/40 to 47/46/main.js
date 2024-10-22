
/* concat method */
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

let myNewFriends = ["Samar", "Sameh"];

let schoolFriends = ["John", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends);

console.log(allFriends);

allFriends = myFriends.concat(myNewFriends, schoolFriends, [1,2]);
console.log(allFriends);

allFriends = myFriends.concat(myNewFriends, "Yousif", schoolFriends, [1,2]);
console.log(allFriends);


/* join() default , */
console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" | "));
console.log(allFriends.join(" | ").toUpperCase());
