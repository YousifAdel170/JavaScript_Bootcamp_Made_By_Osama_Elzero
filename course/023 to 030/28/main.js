let a = "Elzero Web School";

/*  1. indexOf(value[Mand], start[option]  0 by default) */
console.log(a.indexOf("Web"));              //  7
console.log(a.indexOf("Web", 8));           //  -1 

/*  2. lastIndexOf(value[Mand], start[option] length by default) */
console.log(a.lastIndexOf("Web"));          //  7
console.log(a.lastIndexOf("Web", 6));       //  -1

// See The difference between indexOf & lastIndexOf
console.log(a.indexOf("o"));                //  5
console.log(a.lastIndexOf("o"));            //  15

/* 3. slice(start [Mand], end[option] not including the end) */
console.log(a.slice(2));
console.log(a.slice(9));

console.log(a.slice(0,6));

console.log(a.slice(-2));
console.log(a.slice(-5, -3));


/* 4. repeat()  [ES6] */
console.log(a.repeat(5));

/* 5. split(seperator[option], limit[option]) */
console.log(a.split());
console.log(a.split(" "));
console.log(a.split(""));
console.log(a.split("",2));
console.log(a.split("",6));