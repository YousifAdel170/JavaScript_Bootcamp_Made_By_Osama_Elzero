// Dynamic Property Name    => save the property into a variable
let myVar = "country";

let user = {
    theName: "Yousif",
    theAge: 22, 
    "country": "Egypt",
    "country-of": "EGY",
};


console.log(user.country);
console.log(user["country"]);
console.log(user[myVar]);
// console.log(user.myVar);        // Undefineds
console.log(user["country-of"]);
console.log(user["theName"]);
console.log(user.theName);
