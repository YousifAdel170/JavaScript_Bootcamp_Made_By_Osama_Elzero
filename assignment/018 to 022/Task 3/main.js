let num = "10";

// Solution One
console.log(num * (true + true)); // 20

// Solution Two
console.log(+num + +num); // 20

// Solution Three
console.log(num * (true + true + true) - num); // 20

// Solution Four
console.log(Number(num) + Number(num)); // 20