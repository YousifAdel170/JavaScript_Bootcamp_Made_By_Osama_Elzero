let nums = [2, 12, 11, 5, 10, 1, 99];

let resultArrow = nums.reduce((accumlator, current) => current%2 === 0 ? accumlator * current : accumlator + current, 1);  

let result = nums.reduce(function(accumlator, current){
    let res = (current%2 === 0) ? current * accumlator :  current + accumlator;
    return res;
}, 1) 


console.log(result);

// 500
