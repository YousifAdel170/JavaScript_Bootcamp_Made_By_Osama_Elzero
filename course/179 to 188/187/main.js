/*
  Async & Await With Try, Catch, Finally
*/
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Iam The Good Promise");
//         reject(Error("Iam The Bad Promise"));
//     }, 3000);
// });
// async function readData() {
//     console.log("Before Promise");
//     try{
//         console.log(await myPromise);
//     }catch(reason){
//         console.log(`Reason: ${reason}`);
//     }finally{
//         console.log("After Promise");
//     }

// }
// readData();


/* Fetch */
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Iam The Good Promise");
        // reject(Error("Iam The Bad Promise"));
    }, 3000);
});
async function fetchData() {
    console.log("Before Fetch");
    try{
        let myData = await fetch("https://api.github.com/users/YousifAdel170/repos");
        // console.log(myData);                    // Response
        // console.log(myData.json());            // Promise
        console.log(await myData.json())         // Data
    }catch(reason){
        console.log(`Reason: ${reason}`);
    }finally{
        console.log("After Promise");
    }

}
fetchData();