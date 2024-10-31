let element = document.getElementById("my-div");

/* First Way */
element.style.color = "red";
element.style.fontWeight = "bold"; 

/* Second Way */
element.style.cssText = "color: green; background-color: yellow; text-align: center;"


/* Third Way: Access Inline Styling */
element.style.removeProperty("color");
element.style.setProperty("color", "blue", "important");

/* Fourth Way: Access External style sheet */
// if there more than one style sheet will appear
console.log(document.styleSheets);  
// Access first style sheet file 
console.log(document.styleSheets[0]);  
// display all rules [styling div, section, ...] of first style sheet file 
console.log(document.styleSheets[0].rules);        
// display first rule [say div] 
console.log(document.styleSheets[0].rules[0]);   
// display all the properties of the first rule [say div] 
console.log(document.styleSheets[0].rules[0].style);   
// remove property from div from the first css file 
document.styleSheets[0].rules[0].style.removeProperty("line-height");
console.log(document.styleSheets[0].rules[0].style);   
// add property to div inside the first css file 
document.styleSheets[0].rules[0].style.setProperty("font-weight", "bold", "important");
console.log(document.styleSheets[0].rules[0].style);   