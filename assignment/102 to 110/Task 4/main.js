let myDiv = document.createElement("div");
myDiv.textContent = "10";
document.body.appendChild(myDiv);

let counter = setInterval(countDown, 1000);

function countDown(){
    myDiv.innerHTML -= 1;
    if(myDiv.innerHTML === "0"){
        clearInterval(counter);
        location.href = "https://elzero.org"
    }
}