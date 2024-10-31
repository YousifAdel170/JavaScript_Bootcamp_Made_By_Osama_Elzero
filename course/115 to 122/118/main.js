const user = {
    theName: "Yousif",
    theAge: 22,
    theTitle: "Engineer",
    theCountry: "EGY",
};
console.log("Normal Way: ");
console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);

// console.log("\nVariables Way: ");
// const theName = user.theName;
// const theAge = user.theAge;
// const theTitle = user.theTitle;
// const theCountry = user.theCountry;
// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);


console.log("\nDestructuring Object Way: ");
// const {theName, theAge, theTitle, theCountry} = user;
({theName, theAge, theTitle, theCountry} = user);
({theName, theAge, theCountry} = user);
console.log(theName);
console.log(theAge);
// console.log(theTitle);
console.log(theCountry);

