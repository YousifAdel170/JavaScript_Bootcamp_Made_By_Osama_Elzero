let myP = document.querySelector("p");

myP.onclick = function(){
    console.log("Message From Onclick from the original Paragraph");
};

function one(){
    console.log("Message From Function one added To onclik");
}
function two(){
    console.log("Message From Function two added To onclik");
}

// Overwrite on the previous anonymous function
myP.onclick = one;

// Overwrite on the previous one function
myP.onclick = two;

// Notice here the previous function executed & also this function exectued [the 3 functions below will be executed [There is no overwrite]]
myP.addEventListener("click", function(){
    console.log("Message from addEventListener");
});
myP.addEventListener("click", one);
myP.addEventListener("click", two);

// ******************************************

// Notice here should give me an error but it is not showing error , thats why we will use addEventListener
window.onload = "Osama";                    // NO ERROR
// But here will show the error
// myP.addEventListener("click", "string"); // ERROR

// ******************************************

// Clone the paragraph when it has been clicked & set class named : cloned to the cloned element
myP.onclick = function(){
    // Save the exact element into the new p
    let newP = myP.cloneNode(true);
    newP.className = "cloned";
    document.body.appendChild(newP);
}

let cloned = document.querySelector(".cloned");

// I want to print something when the user clicked the cloned element
    // Problem: Old Way [Produce An ERROR] because the document in the default don't have the cloned element
            // cloned.onclick = function(){
            //     console.log("Cloned Element has been Clicked");
            // }

    // Solution: use addEvenetListener [event]
document.addEventListener("click", function(event){
    console.log(event.target);
    if(event.target.className === "cloned") 
        console.log("Cloned Element has been Clicked");
});
