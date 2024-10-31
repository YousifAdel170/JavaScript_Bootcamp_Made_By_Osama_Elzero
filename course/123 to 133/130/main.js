/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 15];

// let check = nums.some(function(e){
//     console.log("Test");    // will be printed 6 times
//     return e > 5;       // return true if there any number > 5
// });

// check = nums.some((e) => e > 5 );
// console.log(check);

// let check = nums.some(function(e){
//     console.log(this);    // will be window 6 times because this means window
//     return e > 5;       // return true if there any number > 5
// });
// console.log(check);

// let myNumber = 5;
// let myNumber = 10;
// let check = nums.some(function(e){
//     console.log(this);    // will be nums 6 times because this means this array [nums]
//     return e > this;       // return true if there any number > 5
// }, myNumber);
// console.log(check);

// function checkValues(arr, val){
//     return arr.some(function(e){
//         return e === val;
//     });
// }
function checkValues(arr, val){
    return arr.some((e) => e === val);
}
console.log(checkValues(nums, 20));

let range = {
    min: 10, 
    max: 20,
};

let checkNumberRange = nums.some(function(e){
    return (e >= this.min) && (e <= this.max);
}, range);
console.log(checkNumberRange);