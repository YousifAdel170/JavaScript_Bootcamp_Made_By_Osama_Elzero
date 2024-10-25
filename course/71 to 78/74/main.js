let sentence = "I Love Food Code Too Playing Much";

// Filter Words more than 4 characters
let filterFourChar = sentence.split(" ").filter(function(element) {
    return element.length <= 4;
}).join(" ");
console.log(filterFourChar);

let ignoreNumbers = "Elz123er4o";

// Using Map
let ignoreMap = ignoreNumbers.split("").map(function(element){
    return isNaN(parseInt(element)) ? element : "";
}).join("");
console.log(ignoreMap);

// Using Filter
let ignoreFilter = ignoreNumbers.split("").filter(function(element){
    return isNaN(parseInt(element));
}).join("");
console.log(ignoreFilter);

// Filter sting & multiply the number with itself
let mix = "A13BS2ZX";

let mixture = mix.split("").filter(function(element){
    return !isNaN(parseInt(element));
}).map(function(element){
    return element * element;
}).join(" | ");

console.log(mixture);