let start = 0;
let swappedName = "elZerO";
let result = [];
console.log(swappedName);

for(; start < swappedName.length; start++){
    if(swappedName[start] == swappedName[start].toLowerCase()) 
        result[start] = swappedName[start].toUpperCase();
    else
        result[start] = swappedName[start].toLowerCase();
}
console.log(result.join(""));
// Output
// "ELzERo"