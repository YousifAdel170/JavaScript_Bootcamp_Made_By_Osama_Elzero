let addClassInput = document.querySelector(".classes-to-add");
let removeClassInput = document.querySelector(".classes-to-remove");
let classListBar = document.querySelector("div[title = 'Current']");
// We should add elements [spans] inside this div
let holderDiv = document.querySelector(".assign .classes-list div");


function addRemove(){
    /* 1. Remove All Elements At The Start */
    document.querySelectorAll("span").forEach(el => el.remove());

    /* 2. Add ||  Remove  Classes */
    for(let i=0; i<this.value.trim().split(" ").length; i++){
        // If the user Adding Classes
        if(addClassInput.value)
            classListBar.classList.add(this.value.toLowerCase().trim().split(" ")[i]);
        else if(removeClassInput.value)
            classListBar.classList.remove(this.value.toLowerCase().trim().split(" ")[i]);
    }
    // Reset the input value 
    this.value = "";

    /* 3. Add || Remove Spans */
    // check if there any class
    if(classListBar.classList.length){
        holderDiv.textContent = "";
        // First we sort the array then Loop for the array that contains all the classes since the length not zero
        [...classListBar.classList].sort().forEach(el => {
            // Create Span for each class
            let createSpan = document.createElement("span");
            holderDiv.appendChild(createSpan);  // append the span to the div
            let createSpanTextNode = document.createTextNode(el);
            createSpan.appendChild(createSpanTextNode);
        })
    }
    // This measn the list is empty
    else
        holderDiv.textContent = "No Classes To Show";
    
};

addClassInput.onblur = addRemove;
removeClassInput.onblur = addRemove;
