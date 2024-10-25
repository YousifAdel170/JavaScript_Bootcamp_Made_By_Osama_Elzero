/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function(acc, current){
    console.log(acc.length > current.length ? acc : current);
    console.log("######################");
    return acc.length > current.length ? acc : current;
})
console.log(check);


let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let remover = removeChars.filter(function(acc, current){
    return !acc.startsWith("@")
}).reduce(function(acc, current){
    return `${acc}` + `${current}`.toLowerCase();
});
console.log(remover);