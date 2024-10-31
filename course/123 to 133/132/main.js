/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);


// Concatenate Arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let allArr = [...arr1, ...arr2];
console.log(allArr);

// Copy Array
let copiedArr = [...arr1];
console.log(copiedArr);

// Push Inside Array
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYeadFriends = ["Sameh", "Mahmoud"];
allFriends.push(...thisYeadFriends)
console.log(allFriends);

// Use With Math Object
let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects
let objOne = {
    a: 1,
    b: 2,
};
let objTwo = {
    c: 4,
    d: 4,
};

console.log({...objOne, ...objTwo, e: 5});