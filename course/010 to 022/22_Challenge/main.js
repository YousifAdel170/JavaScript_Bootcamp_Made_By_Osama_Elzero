/* Challenge 1  */
console.log("Challenge 1: ");
let a = 10, 
    b = "20", 
    c = 80;

console.log(++a + +b++ + +c++ - +a++);                          // Result: 100    
    /*
        11 + 20 + 80 - 11 = 100
        a = 10 then 11 then 12
        b = 20 then 21
        c = 80 then 81

        this meas lastly 
        a = 12, b = 21, c = 81 
    */
console.log(++a + -b + +c++ - -a++ + +a);                       //  100
    /*
        13 + (-21) + 81 - (-13) + 14 = 100
        a = 12 then 13 then 14
        b = 21
        c = 81 then 82

        this meas lastly 
        a = 14, b = 21, c = 82 
    */
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);      //  100
    /*
        81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
        a = 14 then 13 then 12
        b = 21 then 22
        c = 82 then 81

        this meas lastly 
        a = 12, b = 22, c = 81 
    */

console.log("Challenge 2: ");
let d = "-100", e = "20", f = 30, g = true;
console.log(-d * e);
console.log(-d + (++e * ++g) + ++f);