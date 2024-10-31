let a = 21;
let b = 20;
/*
    Notice here:   
        console.log(`${a}_${b}`);                                // 21_20
        console.log(`${a}_${b}${a}_${b}`);                       // 21_2021_20                 
        console.log(`${a}_${b}${a}_${b}${a}_${b}`);             // 21_2021_2021_20
        console.log(`${a}_${b}${a}_${b}${a}_${b}${a}_${b}`);   // 21_2021_2021_2021_20
        So Elzero Want _21_2021_2021_2021_20_ then first we add _ and at the end we add _ and inside we add this 4 times
*/

console.log( `_` + `${a}_${b}`.repeat(4) + `_`);
        //   _     21_2021_2021_2021_20    _