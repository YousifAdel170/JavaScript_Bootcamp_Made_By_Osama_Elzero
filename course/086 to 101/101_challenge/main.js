/* Body Styling */
document.body.style.setProperty("margin", "0px");
document.body.style.setProperty("padding", "0px");
document.body.style.setProperty("font-family", "Arial");

/* Start Header Section */
let headerCreation = document.createElement("header");
headerCreation.className = "website-head";
document.body.prepend(headerCreation);
/* Header Styling */
headerCreation.style.setProperty("display", "flex");
headerCreation.style.setProperty("align-items", "center");
headerCreation.style.setProperty("justify-content", "space-between");
headerCreation.style.setProperty("height", "10%");
headerCreation.style.setProperty("margin-left", "auto");
headerCreation.style.setProperty("margin-right", "auto");
headerCreation.style.setProperty("padding-left", "15px");
headerCreation.style.setProperty("padding-right", "15px");

let logoDiv = document.createElement("div");
logoDiv.className = "logo"
let logoText = document.createTextNode("Elzero");
headerCreation.prepend(logoDiv);
logoDiv.append(logoText);
// Logo Styling
logoDiv.style.setProperty("color", "green");
logoDiv.style.setProperty("font-weight", "bold");
logoDiv.style.setProperty("font-size", "22px");

let ulElement = document.createElement("ul");
ulElement.className = "menu"
headerCreation.append(ulElement);
/* Header Styling */
ulElement.style.setProperty("display", "flex");
ulElement.style.setProperty("justify-content", "space-between");

let liElements = []
let liTextNode = [];
let numberOfLinks = 4;

let liTexts = ["Home", "About", "Services", "contact"];
for(let i = 0; i<numberOfLinks; i++){
    liElements[i] = document.createElement("li");
    ulElement.append(liElements[i]);
    liTextNode[i] = document.createTextNode(liTexts[i]);
    liElements[i].appendChild(liTextNode[i]);
    // List Styling
    liElements[i].style.setProperty("list-style", "none");
    liElements[i].style.setProperty("margin-left", "20px");

}
/* End Header Section */

/* Start Content Div Section */
let contentCreation = document.createElement("div");
contentCreation.className = "content";
document.body.append(contentCreation);
/* Content Section Styling */
contentCreation.style.setProperty("min-height", "calc(100vh - 140px)");
contentCreation.style.setProperty("background-color", "#eee");
contentCreation.style.setProperty("padding", "20px 15px");
contentCreation.style.setProperty("margin-right", "auto");
contentCreation.style.setProperty("margin-left", "auto");
contentCreation.style.setProperty("display", "grid");
contentCreation.style.setProperty("gap", "40px");
// contentCreation.style.setProperty("width", "100%");
contentCreation.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(300px, 1fr))");

let productDivs = [];
let productSpans = [];
let productTextNode;
let spanTextNode;
let numberOfProducts = 15;

for(let i = 0; i<numberOfProducts; i++){
    productDivs[i] = document.createElement("div");
    productDivs[i].className = "product";
    contentCreation.append(productDivs[i]);
    productDivs[i].style.setProperty("background-color", "white");
    // productDivs[i].style.setProperty("padding", "20px");
    productDivs[i].style.setProperty("display", "flex");
    productDivs[i].style.setProperty("justify-content", "center");
    productDivs[i].style.setProperty("align-items", "center");
    productDivs[i].style.setProperty("flex-direction", "column");
    productDivs[i].style.setProperty("text-align", "center");
    productDivs[i].style.setProperty("color", "#777");
    productDivs[i].style.setProperty("border-radius", "6px");


    productTextNode = document.createTextNode("Product");
    productDivs[i].append(productTextNode);

    productSpans[i] = document.createElement("span");
    productDivs[i].prepend(productSpans[i]);
    productSpans[i].style.setProperty("font-size", "22px");
    productSpans[i].style.setProperty("font-weight", "bold");
    productSpans[i].style.setProperty("margin-bottom", "5px");
    productSpans[i].style.setProperty("color", "#000");


    spanTextNode = document.createTextNode(`${i + 1}`);
    productSpans[i].prepend(spanTextNode);
}

/* End Content Div Section */

/* Start Footer Section */
let footerCreation = document.createElement("footer");
footerCreation.className = "footer";
let footerTextNode = document.createTextNode("Copyright 2024");
footerCreation.append(footerTextNode);
document.body.append(footerCreation);

footerCreation.style.setProperty("color", "white");
footerCreation.style.setProperty("background-color", "green");
footerCreation.style.setProperty("height", "50px");
footerCreation.style.setProperty("display", "flex");
footerCreation.style.setProperty("justify-content", "center");
footerCreation.style.setProperty("align-items", "center");
/* End Footer Section */