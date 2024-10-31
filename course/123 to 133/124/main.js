/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data
    // Set
let mySet = new Set ([1, 1, 1, 2, 3, "A"]);
console.log(mySet);
    // Weak Set
let myWeakSet = new WeakSet ([{A: 1, B: 2}]);
console.log(myWeakSet);

// Size                             [This feature only in Set]
console.log(mySet.size);

// keys [alias to values]           [This feature only in Set]
// let iterator = mySet.keys();         // same as below
let iterator = mySet.values();
console.log(iterator);
// console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next());
// Notice here that at the end this showed [done: true]


// forEach                            [This feature only in Set]
mySet.forEach((el) => console.log(el));

console.log("#".repeat(50));