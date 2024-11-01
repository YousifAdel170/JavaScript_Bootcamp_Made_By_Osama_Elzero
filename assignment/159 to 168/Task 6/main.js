// Write Your Generator Function Here
function* gen(){
    let i = 14;
    let diff = 140;
    while(true){
        yield i;
        i += diff;
        diff += 200; 
    }
}

/*
    

    14, 154, 494, 1034, 1774, 2714, 3854, 5194, 6734

    a. 154 - 14 = 140           b. 494 - 154 = 340
    c. 1034 − 494= 540          d. 1774 − 1034 = 740
    e. 2714−1774=940           ......
    ...

    sequence : 140, 340, 540, 740, 940, .... [increased by 200 each step]

    so first we will be 14 then add 140 then 
    at j=0  => i = 14, diff = 140       return 14   then i = 14 +140 = 154, diff = 140 +200 = 340
    at j=1  => i = 154, diff = 340      return 154  then i = 154 + 340 = 494, diff = 340 +200 = 540
    at j=2  => i = 494, diff= 540       return 494  then i =494 +540= 1034, diff = 540 +200 = 740
    ......
    ......
    ......
*/


let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}