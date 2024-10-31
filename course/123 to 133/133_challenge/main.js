/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];


// Correct solution: we need to get 30 * 7 = 210 [we have 30 in both arrays [notice that the length of both is 7]]
console.log(Math.max(...n2) * [...n1,...n2].length); // 210
// Long Solution [but this using functions]
// console.log(+Array.from(new Set([...n1, ...n2].join("").split(""))).map((n) => +n).filter(num => num !==Math.max(...Array.from(new Set([...n1, ...n2].join("").split(""))).map((n) => +n))).sort().reverse().join(""))
// console.log(n1.push(...n2)* Math.max(...n2));

