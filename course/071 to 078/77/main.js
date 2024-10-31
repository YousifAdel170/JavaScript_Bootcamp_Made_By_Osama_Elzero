/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

/* Display All list with its content on the console */
// allLis.forEach(function(element){
//     // Display li.active, li, li
//     console.log(element);
//     // Display contents of the list
//     console.log(element.innerHTML);
//     // Display the class name
//     console.log(element.className);
//     // Notice that nothing return
//     return element;
// })


// Notice that here when we click at specifc li it shows at the console
// allLis.forEach(function (element){
//     element.onclick = function(){
//         console.log(this)
//     }
// })

allLis.forEach(function (element){
    element.onclick = function(){
        // Remove class active from all li
        allLis.forEach(function(element){
            element.classList.remove("active");
        })
        // Add class active to this li
        this.classList.add("active");
        // Hide all divs 
       allDivs.forEach(function(element){
        element.style.display = "none";
       })
    }
})