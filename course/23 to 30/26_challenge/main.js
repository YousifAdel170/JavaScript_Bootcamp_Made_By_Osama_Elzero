let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

/* 1. Find The smallest number in all variables and return integer */
console.log(Math.trunc(Math.min(a, b, c,d)));

/* 2. Use Variable a,d one time to get the needed output   => 10000 */
console.log(Math.pow(a, Math.round(d)));
/* OR */
// console.log(Math.pow(a, Math.floor(d)));


/* 3. Get Integer '2' From d variable in 4 methods */
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(+d.toFixed(0));

/* 2. Use Variable b,d one time to get the needed output */
    /* a. 66.67 String */
    // console.log(((Math.floor(b) /  Math.ceil(d)).toFixed(2)).toString());
        // Or
    console.log(((Math.floor(b) /  Math.ceil(d)).toFixed(2)));

   
    /* b. 67 number */
    // console.log(Number(((Math.floor(b) /  Math.ceil(d)).toFixed(0))));
    // Or
    console.log(Math.round(Number(((Math.floor(b) /  Math.ceil(d))))));

