let myFriends = [1, 2, "Osama", "Ahmed", 5,"Sayed", 9, "Ali"];
let onlyNames = [];
console.log("All Array: ");
for(let i=0; i<myFriends.length; i++)   console.log(myFriends[i]);

for(let i=0; i<myFriends.length; i++){
    if(typeof myFriends[i] ===  'string'){
        onlyNames.push(myFriends[i])
    }
}

console.log("\nOnly Names Array: ");
for(let i=0; i<onlyNames.length; i++)   console.log(onlyNames[i]);
