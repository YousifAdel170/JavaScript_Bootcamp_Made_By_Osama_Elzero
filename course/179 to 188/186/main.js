
/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

/* First Case */
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the Good Promise");
//         // reject("I am the Bad Promise");
//     }, 3000);
// });
// function readData(){
//     console.log("Before Promise");
//     myPromise.then((resolved) => console.log(resolved));
//     console.log("After Promise");
// }
// readData();

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am the Good Promise");
        // reject(Error("I am the Bad Promise"));
    }, 3000);
});
async function readData(){
    console.log("Before Promise");
    console.log(await myPromise.catch((reject) => reject));
    console.log("After Promise");
}
readData();