/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

/* First Case */
// const myPromise = new Promise((resolvedFunction, rejectFunction) => {
//     let connect = true;
//     if(connect){
//         resolvedFunction("Connection Established");
//     }else{
//         rejectFunction(Error("Connection Faild"));
//     }
// }).then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );
// // Here will give my Pending State Because it printed before the promise being done [cause the above is asynchronous, below is synchronous]
// console.log(myPromise);



/* Second Code */
const myPromise = new Promise((resolvedFunction, rejectFunction) => {
    let connect = true;
    if(connect){
        resolvedFunction("Connection Established");
    }else{
        rejectFunction(Error("Connection Faild"));
    }
});


// To see the state after the promise being done [we need to seperate then from it]
console.log(myPromise);
myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
);
// Other Way
let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Good ${rejectValue}`);

myPromise.then(resolver, rejecter);