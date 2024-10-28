console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];
if(myP.hasAttribute("data-src"))   {
    if (myP.getAttribute("data-src" === ""))    myP.removeAttribute();
    else    myP.setAttribute("data-src", "New Value");
}

if(myP.hasAttributes()) console.log("Has Attributes");

if(document.getElementsByTagName("div")[0].hasAttributes()){
    console.log("Div Has Attributes");
}
else console.log("Div Hasn\'t attributes");