/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData(){
//     return new Promise((res, rej) => {
//         let users = ["Osama"];
//         // users = [];
//         if(users.length > 0)    res("Users Found");
//         else                    rej("Users aren't Found");
//     });
// }

// getData().then(
//     (resValue) => console.log(resValue),
//     (rejValue) => console.log(rejValue)
// )


// function getData(){
//     let users = ["Osama"];
//     // users = [];
//     if(users.length > 0)    return Promise.resolve("Users Found");
//     else                    return Promise.reject("Users aren't Found");
// }

// getData().then(
//     (resValue) =>   console.log(resValue),
//     (rejValue) =>   console.log(rejValue)
// );



async function getData(){
    let users = ["Osama"];
    // users = [];
    if(users.length > 0)    return "Users Found";
    // else                    return "Users aren't Found";
    else                    throw new Error("No Users Found"); 
}

console.log(getData());

getData().then(
    (resValue) =>   console.log(resValue),
    (rejValue) =>   console.log(rejValue)
);
