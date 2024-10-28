let myDiv = document.querySelector("div");

// setInterval(function(){
//     console.log("Anonymous Hello");
// }, 1000);


// setInterval(fun, 1000);

// function fun(){
//     console.log("Hello");
// }


// setInterval(fun, 1000, "Yousif", 22);

// function fun(user, age){
//     console.log(`Hello ${user}, Age: ${age}`);
// }

function countDown(){
    myDiv.innerHTML -= 1;
    if(myDiv.innerHTML === "0")
        clearInterval(counter);
}

let counter = setInterval(countDown, 1000);

