let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

/* Convertion of cases  */
console.log("Task 1 :")
console.log(`   Before: ${swappingCases}`);
let swape = swappingCases.split("").map(function(element){
    return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
}).join("");
console.log(`   After : ${swape}`);


/* Inversion of number  */
console.log("Task 2 :")
console.log(`   Before: ${invertedNumbers}`);
let invert = invertedNumbers.map(function(element){
    return -element;
});
console.log(`   After : ${invert}`);


/* Ignore the numbers  */
console.log("Task 3 :")
console.log(`   Before: ${ignoreNumbers}`);
let ignore = ignoreNumbers.split("").map(function(element){
    return isNaN(parseInt(element)) ? element : "";
}).join("");
console.log(`   After : ${ignore}`);

