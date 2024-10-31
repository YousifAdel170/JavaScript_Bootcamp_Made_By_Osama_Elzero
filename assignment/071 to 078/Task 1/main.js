let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let text = mix.map(function(element){
    return isNaN(parseInt(element)) ? element : "";
}).reduce(function(accumlator, current){
    return accumlator + current;
});
console.log(text);