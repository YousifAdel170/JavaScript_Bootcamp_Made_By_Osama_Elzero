/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/


console.log(window.localStorage);
console.log(typeof window.localStorage);

/* setItem(property, Value) */
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "40px";

/* getItem(property) */
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

/*  removeItem(propery) 
    Notice here when we remove the color before changing the background color  
*/
// window.localStorage.removeItem("color");

/* Set color as background color in the page */
// document.body.style.backgroundColor = window.localStorage.color;

/*  removeItem(propery) 
    Notice here when we remove the color after changing the background color  
*/

/* removeItem(propery) */
// window.localStorage.removeItem("color");

/* clear():     clear All The properties of Local Storage */
// window.localStorage.clear();

/* key: get the property by the index */
console.log(window.localStorage.key(0));
console.log(window.localStorage.key(1));
console.log(window.localStorage.key(2));