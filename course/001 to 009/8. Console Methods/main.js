/* Add Log message  */
console.log("This is a Log Message");

/* Add Error Message */
console.error("This is error message");

/* Add Table to the console */
console.table(["Osama", "Ahmed", "Mohamed"]);

/* Style specific text in the console [single styling] */
console.log("This is %cMy Log", "color: red; font-size: 40px");

/* Style specific text in the console [Multiple styling] */
console.log("This is %cMy %cLog", "color: red; font-size: 40px", "color: green; font-size: 60px");


/* Style specific text in the console [Multiple styling] */
console.log("This is %cMy %cLog %cLog", 
    "color: red; font-size: 40px", 
    "color: green; font-size: 60px",
    "color: blue; font-size: 80px");