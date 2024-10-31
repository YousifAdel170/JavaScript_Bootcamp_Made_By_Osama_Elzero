let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// Note: (words.indexOf("Facebook"))  = 1

console.log(words[((words.indexOf("Facebook")) + (words.indexOf("Facebook")))][0].slice(((words.indexOf("Facebook")) + (words.indexOf("Facebook")))).toUpperCase()); // ZERO