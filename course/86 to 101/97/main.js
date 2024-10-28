/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

element.before(createdP);
element.before("Hello Before");

element.prepend("Prepend");
element.prepend(createdP);
element.append(createdP);
element.append("Append");

element.after(createdP);
element.after("Hello After");


element.remove();
