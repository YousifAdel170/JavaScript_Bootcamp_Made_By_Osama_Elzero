// const userOne = {
//     id: 100, 
//     username: "Elzero",
//     salary: 5000,
// };
// const userTwo = {
//     id: 101, 
//     username: "Hassan",
//     salary: 6000,
// };
// const userThree = {
//     id: 102, 
//     username: "Sayed",
//     salary: 7000,
// };

function User(id, username, salary){
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
}


let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Elzero-2", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log("#".repeat(10));

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);
console.log("#".repeat(10));

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);
console.log("#".repeat(10));