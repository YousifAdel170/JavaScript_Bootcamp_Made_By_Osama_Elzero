let mainDivs = [];
let mainImgs = [];
let imgAttrs = [];

for(let i=0; i<10; i++){
    mainDivs[i] = document.createElement("div");
    mainImgs[i] = document.createElement("img");
    imgAttrs[i] = document.createAttribute("src");
    mainImgs[i].setAttribute("decoding", "async");
    mainImgs[i].setAttributeNode(imgAttrs[i]);
    document.body.appendChild(mainDivs[i]);
    mainDivs[i].appendChild(mainImgs[i]);
    document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    document.images[i].alt = "Elzero Logo";
}

