/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

// const user = {
//     theName: "Yousif",
//     theAge: 22,
//     theTitle: "Engineer",
//     theCountry: "EGY",
// };

// const { theName, theAge, theCountry} = user;
// console.log(theName);
// console.log(theAge);
// console.log(theCountry);
// // console.log(theTitle);       // ERROR to fix it user.theTitle


// const { theName: n, theAge: a, theCountry: c} = user;
// console.log(n);
// console.log(a);
// console.log(c);


// const { theName: n, theAge: a, theCountry, theColor = "red"} = user;
// console.log(n);
// console.log(a);
// console.log(theColor);


// const user = {
//     theName: "Yousif",
//     theAge: 22,
//     theTitle: "Engineer",
//     theCountry: "EGY",
//     theColor: "Black",
// };
// const { theName: n, theAge: a, theCountry, theColor:color = "red"} = user;
// console.log(n);
// // console.log(theName);        // error because u update its name to n
// console.log(a);
// console.log(color);


const user = {
    theName: "Yousif",
    theAge: 22,
    theTitle: "Engineer",
    theCountry: "EGY",
    theColor: "Black",
    skills: {
        html: 70,
        css: 80,
    }
};
// const { theName: n, theAge: a, theCountry, theColor:color = "red"} = user;
// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(color);
// console.log(`My HTML Skill: ${user.skills.html}`);  // Old Way

// const { theName: n, theAge: a, theCountry, theColor:color = "red", skills} = user;       // 1
// const { theName: n, theAge: a, theCountry, theColor:color = "red", skills: {html, css}} = user;       // 2
// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(color);
// // console.log(`My HTML Skill: ${skills}`);  // Object Object                               //  1
// console.log(`My HTML Skill: ${html}`);  
// console.log(`My CSS Skill: ${css}`);  



// const { theName: n, theAge: a, theCountry, theColor:color = "red", skills: {html: h, css}} = user;       // 2
// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(color);
// // console.log(`My HTML Skill: ${skills}`);  // Object Object                               //  1
// console.log(`My HTML Skill: ${h}`);  
// console.log(`My CSS Skill: ${css}`);  



// const { html: skillOne, css: skillTwo} = user.skills;   
// console.log(`My HTML Skill: ${skillOne}`);  
// console.log(`My CSS Skill: ${skillTwo}`);  

const { html, css} = user.skills;   
console.log(`My HTML Skill: ${html}`);  
console.log(`My CSS Skill: ${css}`);  