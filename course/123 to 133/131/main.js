/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
    20: "Place 1",
    30: "Place 2",
    // 10: "Place 3",
    50: "Place 3",
    40: "Place 4",
};

let mainLocation = 15;

// save all the keys of the locations object into array [array of string]
let arrayLocations =  Object.keys(locations);
console.log(arrayLocations);

let arrayNumbersLocations =  arrayLocations.map(function(n){
    return +n;
});
console.log(arrayNumbersLocations);

let checkLocations = arrayNumbersLocations.every(function(e){
    return e > this;
}, mainLocation)
console.log(checkLocations);