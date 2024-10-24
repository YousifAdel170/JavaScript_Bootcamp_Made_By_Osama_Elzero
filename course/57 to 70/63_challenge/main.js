/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a , b , c){
    (typeof a === "string")
    // This means that a is string 
    ? (typeof b === "number")
        // this means that a is string and b is number & c is boolean of course :)
        ? ( c == true)
            ? (console.log(`"Hello ${a}, Your Age Is ${b}, You Are Available For Hire"`)) 
            : (console.log(`"Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire"`))
        // this means that a is string and c is number & b is boolean of course :)
        :  (b == true)
            ? (console.log(`"Hello ${a}, Your Age Is ${c}, You Are Available For Hire"`)) 
            : (console.log(`"Hello ${a}, Your Age Is ${c}, You Are Not Available For Hire"`))
    // this means that a is not string, so we need to check if b or c is the string
    :   (typeof b === "string")
        // this means that b is string
        ? (typeof a === "number")
            // this means that b is string & a is number so c is boolean
            ? (c == true)   
                ? (console.log(`"Hello ${b}, Your Age Is ${a}, You Are Available For Hire"`)) 
                : (console.log(`"Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire"`))

            // this means that b is string & c is number so a is boolean
            : (a == true)
                ? (console.log(`"Hello ${b}, Your Age Is ${c}, You Are Available For Hire"`)) 
                : (console.log(`"Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire"`))
        // this means that c is string
        : (typeof a === "number")
            // this means that c is string & a is number so b is boolean
            ? (b == true) 
                ? (console.log(`"Hello ${c}, Your Age Is ${a}, You Are Available For Hire"`))  
                : (console.log(`"Hello ${c}, Your Age Is ${a}, You Are Not Available For Hire"`))
            // this means that c is string & b is number so a is boolean
            : (a == true) 
                ? (console.log(`"Hello ${c}, Your Age Is ${b}, You Are Available For Hire"`))  
                : (console.log(`"Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire"`))
    ;


    // (typeof a === 'string') 
    // ? console.log(`Hello ${a},`)
    // : (typeof b === 'string') 
    // ? console.log(`Hello ${b},`) 
    // : console.log(`Hello ${c},`);
    
    // (typeof a === 'number') 
    // ? console.log(`Your Age Is ${a},`) 
    // : (typeof b === 'number') 
    // ? console.log(`Your Age Is ${b},`) 
    // : console.log(`Your Age Is ${c},`);

    // (typeof a === 'boolean') 
    // ? ((a === true) ? console.log("You Are Available For Hire") : console.log("You Are Not Available For Hire")) 
    // : (typeof b === 'boolean') 
    // ? ((b === true) ? console.log("You Are Available For Hire") : console.log("You Are Not Available For Hire")) 
    // : ((c === true) ? console.log("You Are Available For Hire") : console.log("You Are Not Available For Hire")) ;
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"