let a = "Elzero Web School";

/* 1. include this methods [slice, charAt] => Zero */
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

/* 2. return H 8 times */
console.log(a.substr(-4).charAt(0).toUpperCase().repeat(8));

/* 3. Return array [Elzero] */
console.log(a.substring(0,6));

/* 4. use only substr method + template literals => Elzero School */
console.log(`${a.substr(0, 6)} ${a.substr(11)}`);

/* 5. Dynamic & string may change => eLZERO WEB SCHOOl */
console.log(a.charAt(0).toLowerCase() + a.substring(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1).toLowerCase() );
