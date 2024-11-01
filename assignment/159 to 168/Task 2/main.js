
let months = 10 * 12;
let days = months * 31;
let hours = 24 * days;
let mins = hours * 60;
let secs = mins * 60;
let ms = secs * 1000;

let date = new Date(ms);

date.setSeconds(1);

console.log(date);
// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"