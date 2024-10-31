// Needed Output
// Set(3) {10, 20, 2}
// 2

let setOfNumbers = new Set ();
setOfNumbers.add(10);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).indexOf(setOfNumbers.size - 1));