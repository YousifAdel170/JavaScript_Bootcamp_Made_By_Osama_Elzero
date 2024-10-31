/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
console.log(`Without Set:`);
console.log(myData);
// let myUniqueData = new Set ();
// myUniqueData.add(1).add(1).add(2).add(3);

let myUniqueData = new Set (myData);
console.log(`With Set:`);
console.log(myUniqueData);
// console.log(myUniqueData[0]);       // Undefined [can't access using index]
console.log(`Size: ${myUniqueData.size}`);
myUniqueData.add(1).add(1).add(1).add(2).add(3).add(5);
console.log(`With Set After Added Elements to the Set:`);
console.log(myUniqueData);

console.log("Delete Elements");
console.log(myUniqueData.delete(2));        // search for number 2 [True] & delete the element
console.log(myUniqueData.delete(20));       // search for number 20 [false]
myUniqueData.delete(2);                     // search for number 2 [false] [already deleted]
console.log(myUniqueData);

console.log(`Is set has A: ${myUniqueData.has('A')}`);          
console.log(`Is set has A: ${myUniqueData.has('a'.toUpperCase())}`);           

myUniqueData.clear();                       // delete all elements
console.log(myUniqueData);
console.log(myUniqueData.size);