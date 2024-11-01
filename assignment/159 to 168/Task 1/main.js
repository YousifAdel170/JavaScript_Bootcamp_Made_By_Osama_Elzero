let birthDate = new Date("Feb 24,2002");
// let birthday = new Date("Oct 25, 82");

let dateNow = new Date();

let seconds = (dateNow - birthDate) / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let month = days / 30;
let year = month / 12;


console.log(`Seconds: ${seconds.toFixed(0)}`);
console.log(`Minutes: ${minutes.toFixed(0)}`);
console.log(`Hours: ${hours.toFixed(0)}`);
console.log(`Days: ${days.toFixed(0)}`);
console.log(`Months: ${month.toFixed(0)}`);
console.log(`Years: ${year.toFixed(0)}`);


// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"