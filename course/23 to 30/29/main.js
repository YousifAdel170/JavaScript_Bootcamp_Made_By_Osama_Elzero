let a = "Elzero Web School";

/* 1. substring( start [Mand], end [option] not including end) */
console.log("substring Method:");
console.log(a.substring(2));
console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10));
console.log(a.substring(-10, 6));
console.log(a.length);
console.log(a.substring(17));
console.log(a.substring(a.length - 1));
console.log(a.substring(a.length - 5));
console.log(a.substring(a.length - 5, a.length - 3));

/* 2. substr(start [Mand], characters to extract ) */
console.log("Substr Method");
console.log(a.substr(0));
console.log(a.substr(0, 6));
console.log(a.substr(-1));
console.log(a.substr(-5, 2));
console.log(a.substr(-10, 3));

/* 3. includes(value [mand], start[opt] default 0) [es6] */
console.log("includes Method");
console.log(a.includes("Web"));
console.log(a.includes("web", 8));

/* 4. startWith(value [mand], start[opt] default 0) [es6] */
console.log("startWith Method");
console.log(a.startsWith("E"));
console.log(a.startsWith("E", 5));
console.log(a.startsWith("z", 2));
console.log(a.startsWith("zer", 2));

/* 5. endsWith(value [mand], start[opt] default 0) [es6] */
console.log("endsWith Method");
console.log(a.endsWith("l"));
console.log(a.endsWith("E", 5));
console.log(a.endsWith("ro", 6));