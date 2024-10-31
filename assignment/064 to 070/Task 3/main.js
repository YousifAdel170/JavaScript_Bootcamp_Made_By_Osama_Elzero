
        // Currying Function
// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
// }

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

        // Arrow Function
let checker = (zName) => (status) => (salary) => {
    if(status === "Available")
        return `${zName}, My Salary Is ${salary}`;
    else
        return `Iam Not Avaialble`;
};

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble