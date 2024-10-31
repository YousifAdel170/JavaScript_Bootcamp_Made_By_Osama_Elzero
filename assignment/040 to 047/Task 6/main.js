let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

arr1.splice(0,2);
console.log(arr1);
console.log((allArrs.concat(arr2[arr2.indexOf('F')], arr1, arr2[arr2.indexOf('Y')])).join("").toLowerCase()); // fxy