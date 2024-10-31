/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(counter, my.indexOf("Gamal")).concat( my.slice(zero, counter).reverse())); 

// ["Elham", "Mazero"]
console.log(my.slice(my.indexOf("Mazero"), counter).reverse()); 

// "Elzero"
console.log(my[my.indexOf("Elham")].slice(zero, my.indexOf("Elham")).concat(my[my.indexOf("Mazero")].slice(my.indexOf("Elham")))); 

// "rO"
console.log(my[my.indexOf("Mazero")][my.indexOf("Gamal")].concat(my[my.indexOf("Mazero")][my.indexOf("Ameer")].toUpperCase())); 