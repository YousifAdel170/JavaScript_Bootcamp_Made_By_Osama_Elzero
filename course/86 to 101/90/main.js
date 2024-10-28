
/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);





/* Creating 100 Divs  */
// let myMainElement = [];
// let myHeading = [];
// let myParagraph = [];


// let myHeadingText = [] 
// let myParagraphText = [];

// for(let i = 0; i<100; i++){
//     myMainElement[i] = document.createElement("div");
//     myHeading[i] = document.createElement("h2");
//     myParagraph[i] = document.createElement("p");
    
//     myHeadingText[i] = document.createTextNode(`Product Title ${i+1}`);
//     myParagraphText[i] =  document.createTextNode(`Product Decription ${i+1}`); 

//     myHeading[i].className = "heading";
//     myParagraph[i].className = "description";

//     myHeading[i].appendChild(myHeadingText[i]);
//     myParagraph[i].appendChild(myParagraphText[i]);
    
//     myMainElement[i].appendChild(myHeading[i]);
//     myMainElement[i].appendChild(myParagraph[i]);


//     document.body.appendChild(myMainElement[i]);
// }






