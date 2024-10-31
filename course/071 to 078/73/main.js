let numbers = [11, 20, 2, 5, 17, 10];
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

/* See The Difference between map & filter */
console.log("Map: ");
let addMap = numbers.map(function(element){
    return element * 2;
});
console.log(addMap);

console.log("Filter: ");
let addFilter = numbers.filter(function(element){
    return element * 2;
    // return element * 2 ? true : false ;      // That's what actually happens
});
console.log(addFilter);     // Notice return all the array because all numbers return true


/* Filter all the names that starts with character "A"  */
console.log("All Friends that starts with \"A\": ");
let filterA = friends.filter(function(element){
    return element.startsWith("A");
});
console.log(filterA);

/* Filter all the even numbers */
console.log("All Even Numbers: ");
let filterEven = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(filterEven);