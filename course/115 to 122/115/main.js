/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1, b = 2, c = 3, d = 4;
let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
// /* First case */
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

/* Second case */
// [a, b, c, d] = myFriends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

/* Third Case */
// myFriends = ["A", "B", "C", "D"];
// [a, b, c] = myFriends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

/* Fourth Case */
// myFriends = ["Hello", "Hello", "Hello", "Hello"];
// [a, b, c, d, e] = myFriends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// /* Notice that both below undefined  */
// console.log(myFriends[4]);
// console.log(e);


/* Fifth Case */
// myFriends = ["Hello", "Hello", "Hello", "Hello"];
// [a, b, c, d, e = "Osama"] = myFriends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// // console.log(myFriends[4]);   // Undefined 
// // console.log(e);              // Osama    

/* Sixth Case */
myFriends = ["Hello-1", "Hello-2", "Hello-3", "Hello-4"];
[a, , c] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
