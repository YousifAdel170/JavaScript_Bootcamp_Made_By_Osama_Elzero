// function itsMe() {
//     return `Iam A Normal Function`;
// }

// Ex 1
let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function


// Ex 2
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org