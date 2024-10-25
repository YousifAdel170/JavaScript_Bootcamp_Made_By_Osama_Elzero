let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let text = myArray.reduce(function(accumlator, current){
    return accumlator.concat(current);
}, []).reduce(function(accumlator, current){
    return accumlator + current;
})
console.log(text);

// Solution using Arrow Function

let textArrow = myArray.reduce((accumlator, current) => accumlator.concat(current), [])
.reduce((accumlator, current) => accumlator + current)
console.log(textArrow);