let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle))               console.log("Found");
if(haystack.indexOf(needle) !== needle)     console.log("Found");
if(haystack.lastIndexOf(needle) !== needle) console.log("Found");