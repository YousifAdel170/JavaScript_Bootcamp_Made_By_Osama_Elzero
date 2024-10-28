let createDiv = document.createElement("div");
let createH2 = document.createElement("h2");
let createP = document.createElement("p");
let createSpan = document.createElement("span");

createSpan.textContent = "x";
createH2.textContent = "Welcome";
createP.textContent = "Welcome To Elzero Web School";

createDiv.appendChild(createSpan);
createDiv.appendChild(createH2);
createDiv.appendChild(createP);
document.body.appendChild(createDiv);

createDiv.style.textAlign = "center";
createDiv.style.margin = "100px auto";
createDiv.style.padding = "15px 100px";
createDiv.style.fontFamily = "arial";
createDiv.style.backgroundColor = "#eee";
createDiv.style.width = "fit-content";
createDiv.style.position = "relative";
createDiv.style.display = "none";

createSpan.style.position = "absolute";
createSpan.style.display = "flex";
createSpan.style.justifyContent = "center";
createSpan.style.alignItems = "center";
createSpan.style.cursor = "pointer";
createSpan.style.backgroundColor = "red";
createSpan.style.color = "white";
createSpan.style.width = "25px";
createSpan.style.height = "25px";
createSpan.style.borderRadius = "50%";
createSpan.style.top = "-10px";
createSpan.style.right = "-10px";



window.onload = setTimeout(function(){
    createDiv.style.display = "block";
}, 5000);

createSpan.onclick = function(){
    createDiv.style.display = "none";
}