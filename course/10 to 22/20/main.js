let a = "10", b = 20, c = true;

console.log(a + b);         // 1020
console.log(+a + b);        // 30

console.log(a - b);         // -10

console.log("" - b);        // looked like 0 - 20 = -20
console.log("" + b);        // looked like 0 + 20 = 20

console.log(false - true);  // 0 - 1 = -1

console.log(a + b + c);     // 1020true
console.log(+a + b + c);    // 10 + 20 + 1 = 31
