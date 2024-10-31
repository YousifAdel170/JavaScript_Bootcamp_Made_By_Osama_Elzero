let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];


// [[, a, ], [b, , ], [c , , ]] = [arr3, arr2, arr1];
/* Other Solution */

([ , a, , b, , , c] = arr3.concat(arr2, arr1));

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed