
/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JS"));
// console.log(txt.replaceAll("@", "JS"));

let re = /@/ig;
// console.log(txt.replace(re, "JS"));
console.log(txt.replace(/@/ig, "JS"));