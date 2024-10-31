let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log(theName.split(""));
console.log([...theName])
console.log(Array.from(new Set(theName)));
console.log([...(new Set(theName))]);
console.log(Array.from(theName));
console.log(Object.values(theName));