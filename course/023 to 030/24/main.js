/* toSting() */
console.log((100).toString());

/* Two Dots */
console.log(100..toString());
console.log(100.005.toString());

/* toFixed() */
console.log(100.5555555.toFixed(2));

/* parseInt() */
console.log(parseInt("100"));
console.log(Number("100"));
console.log(+("100"));

console.log(parseInt("100 Osama"));
console.log(Number("100 Osama"));
console.log(+("100 Osama"));

console.log(parseInt("Osama 100 Osama"));

/* parseFloat() */
console.log(parseFloat("100.00004"));
console.log(parseInt("100.4"));

/* isInteger() [ES6] */
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100));
console.log(Number.isInteger(100.56));

/* isNanN() [ES6] */
console.log(Number.isNaN("100"));           //  False
console.log(Number.isNaN(100));             //  False
console.log(Number.isNaN(100.56));          //  False
console.log(Number.isNaN("Osama" / 20));    //  True