// window.localStorage.clear();
let createElement = document.createElement("div");
createElement.className = "container";
document.body.appendChild(createElement);
/* Styling the div [container] */
createElement.style.display = "flex";
createElement.style.justifyContent = "space-between";
createElement.style.padding = "20px 30px";
createElement.style.marginLeft = "auto";
createElement.style.marginRight = "auto";
createElement.style.backgroundColor = "#eee";

let fontFamily = ["open sans", "cairo", "Roboto"];
let color = ["red", "green", "yellow", "blue", "orange", "purple"];

let selectElement = document.createElement("select");
selectElement.setAttribute("name", "family");
selectElement.setAttribute("id", "boxFamily");
createElement.appendChild(selectElement);
for(let i=0; i<fontFamily.length; i++){
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", `${fontFamily[i]}`);
    optionElement.textContent = `${fontFamily[i]}`;
    selectElement.appendChild(optionElement);
}
selectElementStyling();
selectElement.addEventListener("change", function(e){
    window.localStorage.setItem("fontFamily", e.currentTarget.value);
    createEl.style.fontFamily = e.currentTarget.value;
});

selectElement = document.createElement("select");
selectElement.setAttribute("name", "size");
selectElement.setAttribute("id", "boxSize");
createElement.appendChild(selectElement);
for(let i=16; i<=30; i++){
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", `${i}px`);
    optionElement.textContent = `${i}px`;
    selectElement.appendChild(optionElement);
}
selectElementStyling();
selectElement.addEventListener("change", function(e){
    window.localStorage.setItem("fontSize", e.currentTarget.value);
    createEl.style.fontSize = e.currentTarget.value;
});


selectElement = document.createElement("select");
selectElement.setAttribute("name", "color");
selectElement.setAttribute("id", "boxColor");
createElement.appendChild(selectElement);
for(let i=0; i<color.length; i++){
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", `${color[i]}`);
    optionElement.textContent = `${color[i]}`;
    selectElement.appendChild(optionElement);
}
selectElementStyling();
selectElement.addEventListener("change", function(e){
    window.localStorage.setItem("color", e.currentTarget.value);
    createEl.style.color = e.currentTarget.value;
});

function selectElementStyling(){
    selectElement.style.backgroundColor = "#ddd";
    selectElement.style.padding = "10px 20px";
    selectElement.style.fontWeight = "bold";
    selectElement.style.borderRadius = "6px";
}
let createEl = document.createElement("div");
createEl.className = "test";
createEl.textContent = "Test";
document.body.appendChild(createEl);

if(window.localStorage.length){
    let fontFam = document.querySelector("#boxFamily").value = window.localStorage.getItem("fontFamily");
    let fontSiz = document.querySelector("#boxSize").value = window.localStorage.getItem("fontSize");
    let box_Col = document.querySelector("#boxColor").value = window.localStorage.getItem("color");
    createEl.style.fontFamily = fontFam;
    createEl.style.fontSize = fontSiz;
    createEl.style.color = box_Col;
}else{
    createEl.style.fontFamily = document.querySelector("#boxFamily").value;
    createEl.style.fontSize = document.querySelector("#boxSize").value;
    createEl.style.color = document.querySelector("#boxColor").value;
}

createEl.style.width = "100%";
createEl.style.height = "500px";
createEl.style.margin = "30px auto";
createEl.style.paddingLeft = "30px";
createEl.style.paddingRight = "30px";
createEl.style.backgroundColor = "#ddd";
createEl.style.fontWeight = "bold";
createEl.style.display = "flex";
createEl.style.justifyContent = "center";
createEl.style.alignItems = "center";
