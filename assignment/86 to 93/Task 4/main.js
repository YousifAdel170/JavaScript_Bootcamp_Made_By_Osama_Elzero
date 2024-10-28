/* Get the two divs */
let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

/* Swap The Title */
let twoTitle = firstDiv.title;
firstDiv.title = secondDiv.title;
secondDiv.title = twoTitle;


// Save the number 2 since it is the length of the Number of the Divs [we have only 2 divs]
// so we get the length of the className array
let twoLength = document.getElementsByTagName("div").length;

/* Swap the text contents */
let oneText = secondDiv.textContent;
secondDiv.textContent = `${firstDiv.textContent} ${twoLength}`;
firstDiv.textContent = oneText;