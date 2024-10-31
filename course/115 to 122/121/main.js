/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
    theName: "Yousif",
    theAge: 22,
    skills: ["ROS", "C", "HTML", "CSS", "JS"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
}

const {theName: n, theAge: a, skills: [one, two, , four], addresses: {egypt: e}} = user;

console.log(n);
console.log(a);
console.log(one);
console.log(two);
console.log(four);
console.log(e);

