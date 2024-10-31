// let myP = document.querySelector("p");


// // Notice here took the paragraph but not with its children [text + childern] only tag p with its attributes
// let myP = document.querySelector("p").cloneNode(); 

// Notice here took the paragraph with its children [text + childern] tag p with its attributes & childern
let myP = document.querySelector("p").cloneNode(true); 
// Notice that we here access the copy version of p not the original [to change the id][id shouldn't be repeated in the page] 
myP.id =  `${myP.id}-cloned`;

let myDiv = document.querySelector("div");

/* Notice here when we append the element: We moved the element from its old location to this new location */
myDiv.appendChild(myP);

/* cloneNode() => Take copy of the element with all the properties 
    => () means false   : take copy of the element with all attributes but not its children
    => (true)           : take copy of the element with all attributes with its children
*/
