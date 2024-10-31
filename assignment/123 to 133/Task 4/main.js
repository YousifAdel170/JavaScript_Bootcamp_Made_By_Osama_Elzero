let theNumber = 100020003000;

// Needed Output
// 123

// steps
// console.log(theNumber.toString());
// console.log(theNumber.toString().split(""))
// console.log(new Set(theNumber.toString().split("")))
// console.log(Array.from(new Set(theNumber.toString().split(""))))
// console.log(Array.from(new Set(theNumber.toString())).sort())
console.log(+Array.from(new Set(theNumber.toString())).sort().join(""))