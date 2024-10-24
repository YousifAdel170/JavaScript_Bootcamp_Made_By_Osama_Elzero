/* Nested Function */

// Ex 1 
// function sayMessage(fName, lName){
//     let message = `Hello`;
//     function concatMsg(){
//         message = `${message} ${fName} ${lName}`;
//     }
    
//     concatMsg();
//     return message;
// }

// console.log(sayMessage("Yousif", "Adel"));

// Ex 2
// function sayMessage(fName, lName){
//     let message = `Hello`;
//     function concatMsg(){
//         return `${message} ${fName} ${lName}`;
//     }
    
    
//     return concatMsg();
// }

// console.log(sayMessage("Yousif", "Adel"));

// Ex3
function sayMessage(fName, lName){
    let message = `Hello`;


    function getFullName(){
        return `${fName} ${lName}`;
    }

    function concatMsg(){
        return `${message} ${getFullName()}`;
    }
    
    
    return concatMsg();
}

console.log(sayMessage("Yousif", "Adel"));