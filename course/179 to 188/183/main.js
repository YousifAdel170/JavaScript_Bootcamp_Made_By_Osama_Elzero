/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/YousifAdel170/repos").then((result) => {
    let myData = result.json();
    // console.log(myData);                  // promise
    // console.log(typeof myData);        // Object
    return myData;
}).then((full) => {
    full.length = 6;
    return full;
}).then((sixRepos) => {
    console.log(sixRepos[0]);
    console.log(sixRepos[0].name);
});