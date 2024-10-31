const user = {
    theName: "Yousif",
    theAge: 22,
    theTitle: "Engineer",
    theCountry: "EGY",
    theColor: "Black",
    skills: {
        html: 70,
        css: 80,
    },
};

showDetails(user);

// function showDetails(obj){
//     console.log(`Your Name: ${obj.theName}`);
//     console.log(`Your Age: ${obj.theAge}`);
//     console.log(`Your css skill progress: ${obj.skills.css}`);
// }

// function showDetails({theName, theAge, skills: {css}} = user){
//     console.log(`Your Name: ${theName}`);
//     console.log(`Your Age: ${theAge}`);
//     console.log(`Your css skill progress: ${css}`);
// }

function showDetails({theName: n, theAge: a, skills: {css: c}} = user){
    console.log(`Your Name: ${n}`);
    console.log(`Your Age: ${a}`);
    console.log(`Your css skill progress: ${c}`);
}