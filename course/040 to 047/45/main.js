let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

/* slice(start, end) [take a slice from the array] 
    [Don't affect the original Array] */
console.log(myFriends);
console.log(myFriends.slice());         // from start to end
console.log(myFriends.slice(1));        //  from Sayed to end
console.log(myFriends.slice(1, 3));     //  Sayed Ali
console.log(myFriends.slice(-3));       //  Osama to end
console.log(myFriends.slice(1, -2));    //  from Sayed to Osama
console.log(myFriends.slice(-4, -2));   //  Ali  Osama

/* splice(start, deleted_count, Adding_elements)    
    [affect the original Array] */

myFriends.splice(0, 0, "Sameer", "Samara");
// Sameer Samara Ahmed to end
console.log(myFriends);

myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
myFriends.splice(0, 1, "Sameer", "Samara")
// Sameer Samara Sayed to end
console.log(myFriends);

myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
myFriends.splice(0, 2, "Sameer", "Samara")
// Sameer Samara Ali to end
console.log(myFriends);

myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
myFriends.splice(1, 2, "Sameer", "Samara")
// Ahmed Sameer Samara Osama to end
console.log(myFriends);


