/* Ternary operator */

let theName = "Mona", theGender = "Female", theAge = 30;

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr": "Mrs";
console.log(result);

console.log(theGender === "Male" ? "Mr": "Mrs");

theAge < 20 
? console.log(20) 
: theAge > 20 && theAge <60 
? console.log("20 to 60") 
: theAge > 60 
? console.log("Larger Than 60") 
: console.log("Unknown");

