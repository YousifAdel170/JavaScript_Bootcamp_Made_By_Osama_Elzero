let date = new Date();

let month = ["Jan", "Feb", "Mar", "April", "May", "June", "July"
    , "Aug", "Sept", "October", "Nov", "Dec"];

date.setDate(0);

console.log(date);
console.log(`Previous Month Is ${month[date.getMonth()]} And Last Day Is ${date.getDate()}`)



// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"