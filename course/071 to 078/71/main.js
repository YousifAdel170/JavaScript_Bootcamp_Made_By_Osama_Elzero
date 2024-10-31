/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

console.log("Regular Way: ");
for(let i = 0; i < myNums.length; i++){
    newArray.push(myNums[i] * 2);
}

console.log(newArray);

console.log("Map Way: ");
let addSelf = myNums.map(function(element, index, arr){
    return element * 2;
    // console.log(`current element: ${element}`);
    // console.log(`current index: ${index}`);
    // console.log(`arr: ${arr}`);
    // console.log(`This argument: ${this}`);
}, 15)
console.log(addSelf);

console.log("Map Way [Arrow Function]: ");
let addSelfArrow = myNums.map((element) => element * 2);
console.log(addSelfArrow);

function addition(num){
    return num * 2 ;
}

console.log("Pass Function as Argument: ");
let add = myNums.map(addition);
console.log(add);