// get the input element that insert in it the number of elements
let numberElement = document.querySelector("[name = 'elements']");

// get the input element that insert in it the text
let textElement = document.querySelector("[name = 'texts']");

// get the input element that used to set the choosed element whether than div or section
let selectedElement = document.querySelector("form select.input");

/* Get the background & color Elements [inputs] */
let bgColorElement = document.querySelector("[name = 'bg-color']");
let txtColorElement = document.querySelector("[name = 'txt-color']");

// get the input element that used to submit the form
let submit = document.querySelector("[name = 'create']");

// get the div container that contains all the result       
// Notice here will return only the first so we use element not elements :)
let myResult = document.querySelector("form .results");

document.forms[0].onsubmit = (e) => e.preventDefault();


//  the class name that entered to all the chosen elements
let classNameElement = "box";

//  the title name that entered to all the chosen elements
let titleName = "Element";

//  the first part of id name that entered to all the chosen elements
let idName = "id";

/* Variables to store the entered data from the user */
// the actually number of elements entered by the user
let numberElementsEntered;          
// the actually text that entered by the user
let textElementEntered;
// The actually Background entered by the user
let bgColorElementEntered;
// The actually Text Color entered by the user
let txtColorElementEntered;
// the actually type of the element that entered by the user whether it is div or section
let elementType;         

// Create Array contains all the created elements
let createElementArray = [];

/* 1. get the number that pressed */
numberElement.oninput = () => numberElementsEntered = numberElement.value;

/* 2. get the Text Entered  */
textElement.oninput = () => (textElementEntered = textElement.value.trim());

/* 3. get the background color Entered  */
bgColorElement.oninput = () => (bgColorElementEntered = bgColorElement.value);

/* 4. get the Text color Entered  */
txtColorElement.oninput = () => (txtColorElementEntered = txtColorElement.value);

submit.onclick = function(event){
    
    // This will remove all previous child elements of myResult
    myResult.innerHTML = '';
    
    /* Loop On the number of elements entered */
    for(let i=0; i<numberElement.value; i++){
        // Store the choosed element to be created
        (selectedElement.value === "Div") ? elementType = "div" : elementType = "section";
        
        // create the element
        createElementArray[i] =  document.createElement(elementType);    
        
        // set the class name for each
        createElementArray[i].className = classNameElement;            
        
        // set the id for each  
        createElementArray[i].id = `${idName}-${i+1}`;                  
        
        // Set the text that the user has been entered
        createElementArray[i].textContent = textElement.value.trim();
        
        // Append the div to the myresult div container
        myResult.appendChild(createElementArray[i]);

        console.log(createElementArray[i]);
        
        // Adding Text color & background color for the created elements
        createElementArray[i].style.color = `${txtColorElement.value}`;
        createElementArray[i].style.background = `${bgColorElement.value}`;
    }  
};

numberElement.onkeydown = function(event){
    if(["+", "-"].includes(event.key)) event.preventDefault();
}
textElement.onkeydown = function(event){
    if(["+", "-"].includes(event.key)) event.preventDefault();
}