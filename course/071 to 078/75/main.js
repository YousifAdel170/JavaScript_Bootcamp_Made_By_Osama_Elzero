let nums = [10, 20, 15, 30];

// let add = nums.reduce(function(accumlator, currentElement, currentIndex, array){
//     console.log(`Accumlator: ${accumlator}`);
//     console.log(`Current Element: ${currentElement}`);
//     console.log(`Current Index: ${currentIndex}`);
//     console.log(`Array: ${array}`);
//     console.log(`#####################################`);
    
//     return accumlator + currentElement;
// });
// console.log(add);


let addWithInitial = nums.reduce(function(accumlator, currentElement, currentIndex, array){
    console.log(`Accumlator: ${accumlator}`);
    console.log(`Current Element: ${currentElement}`);
    console.log(`Current Index: ${currentIndex}`);
    console.log(`Array: ${array}`);
    console.log(`#####################################`);
    
    return accumlator + currentElement;
}, 1);
console.log(addWithInitial);
