let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log("Before:");
console.log(chars);
let numberCounter = 0;
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


/*
    - Loop to get the number of data types [number] in the array
    - save the number value into temp variable & set value "" to the number
    - unshift the temp value into the beginning of the array
*/
for(let i=0; i<chars.length; i++){
    if(typeof chars[i] === "number"){
        let temp = chars[i];
        numberCounter++;
        chars[i] = "";
        chars.unshift(temp);
    }       
}

/*
    remove all the elements of the array that have "" value
*/
chars = chars.filter(function(e){
    return e !== "";
})

chars.copyWithin(0, numberCounter, numberCounter*2);
console.log("After:");
console.log(chars);

