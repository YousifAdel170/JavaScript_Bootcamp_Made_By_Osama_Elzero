let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

/* 1. indexOf(element, start search from index what)
    wii search from the beginning
*/
console.log(myFriends.indexOf("Ahmed"));        // search from 0 to end
console.log(myFriends.indexOf("Ahmed", 2));     // search from 2 to end

/* 2. lastIndexOf(element, start search from index what)
        will seacrch from the end
*/
console.log(myFriends.lastIndexOf("Ahmed"));     // search from end to 0
console.log(myFriends.lastIndexOf("Ahmed", 2));  // search from 2 to 0
console.log(myFriends.lastIndexOf("Ahmed", -2));  // search from pre last element to 0 [ 2 from the end]

/* 3. includes(element, start index)  [ES7]
    check if the array icludes this element from the specified starting index
*/
console.log(myFriends.includes("Ahmed")); // from 0 to end
console.log(myFriends.includes("Ahmed", 2)); // from 0 to end


if(myFriends.lastIndexOf("Osama") === -1)    console.log("Not Found");