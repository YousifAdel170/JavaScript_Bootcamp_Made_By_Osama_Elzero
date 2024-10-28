let myDiv = document.createElement("div");
myDiv.textContent = "10";
document.body.appendChild(myDiv);

let counter = setInterval(countDown, 1000);

function countDown(){
    myDiv.innerHTML -= 1;
    if(myDiv.innerHTML === "5"){
        window.open("https://elzero.org", "_blank", "width=400, height=400, left=400, top=10").focus();
    }else if (myDiv.innerHTML === "0"){
        clearInterval(counter);
    }
}