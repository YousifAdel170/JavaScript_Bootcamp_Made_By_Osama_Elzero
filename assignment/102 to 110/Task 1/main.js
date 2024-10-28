let result = window.prompt("Print Number From - To","10-20");
// console.log(result);
// console.log(result.trim().length);
let firstNum = +result.trim().split("-")[0];
let secondNum = +result.trim().split("-")[1];

if(result.trim().split("-").length !== 2)
    console.log("You have enetered a Wrong Pattern ");
else{
    if(firstNum < secondNum){
        for(let i= firstNum; i<=secondNum; i++)
            console.log(i);
    }else{
        for(let i= secondNum.length[1]; i<=firstNum; i++)
            console.log(i);
    }
}
// // 10-15

// 10
// 11
// 12
// 13
// 14
// 15


// // 20-10

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20