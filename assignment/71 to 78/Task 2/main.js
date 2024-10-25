let myString = "EElllzzzzzzzeroo";

// Elzero

let text = myString.split("").filter(function(element, index, array){
    // Notice that here index of e will get the first index that e is there 
        // console.log(`The Index of ${element} is ${array.indexOf(element)}`);
        // console.log(`The Index: ${index}`);
        // console.log("#################")
    return array.indexOf(element) === index;
    // Other Solution
    // return array[index] !== array[index + 1];
}).join("");
console.log(text);
