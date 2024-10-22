/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let counterAdmin;           // counter to store the number of admins before stop
let counterEmployees;       // counter to store the number of Employees in each

for(counterAdmin = 0; counterAdmin < myAdmins.length; counterAdmin++)
    if(myAdmins[counterAdmin] === "Stop")    break;

document.write(`<div>We Have ${counterAdmin} Admins</div>`);

mainLoop: for(let i = 0; i < counterAdmin; i++){
    counterEmployees = 0;
    document.write(`<hr/>`);
    document.write(`<div>The Admin For Team ${i + 1} is ${myAdmins[i]}</div>`);
    document.write(`<h2>Team Members: </h2>`)
    nestedLoop: for(let j = 0; j<myEmployees.length; j++){
        if(myAdmins[i][0] == myEmployees[j][0]){
            counterEmployees++;
            document.write(`<p> - ${counterEmployees} is ${myEmployees[j]}</p>`);
        }
    }
}
