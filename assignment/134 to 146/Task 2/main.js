let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRE = /os\d*o/ig;
console.log(specialNames.match(specialNamesRE));

// Output
// ['Os10O', 'OsO', 'Os100O']

