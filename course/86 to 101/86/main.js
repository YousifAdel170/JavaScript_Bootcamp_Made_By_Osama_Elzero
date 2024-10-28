let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements);
console.log(myTagElements[0]);
console.log(myTagElements[1]);

myTagElements[1].innerHTML = "test";
console.log(myTagElements[1]);

let myClassElements = document.getElementsByClassName("my-span");
console.log(myClassElements);
console.log(myClassElements[1]);


let myQueryElement = document.querySelector(".special");    // will print first  
console.log(myQueryElement);
let myQueryElements = document.querySelectorAll("span");
console.log(myQueryElements);
console.log(myQueryElements[0]);


console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].one);
console.log(document.forms[0].one.value);
console.log(document.links);
console.log(document.links[1]);
console.log(document.links[1].href);