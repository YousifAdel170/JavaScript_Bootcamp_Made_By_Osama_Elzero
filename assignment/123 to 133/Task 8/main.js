let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
// 210

// notice that 210 = 30*7 [value in any array of both * length of both array]

console.log((n1.push(...n2)) * Math.max(...n2))