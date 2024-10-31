let element = document.getElementById("my-div");

// Display the whole class names
console.log(element.classList);

// Display all length of the classes
console.log(element.classList.length);

// Display all type of the classes
console.log(typeof element.classList);

// contains => return true if the class exist, false if the class does't exist
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));

// return the class of the index
console.log(element.classList.item("3"));       //  [Token]

// the element will add these classes when the element gets clicked [Tokens]
element.onclick = function(){
    element.classList.add("add-one", "add-two");
};

// the element will remove these classes when the element gets clicked  [Tokens]
element.onclick = function(){
    element.classList.remove("one", "two");
};

// the element will toggle [remove if the class exist, add if the class not there]  [Token]
element.onclick = function(){
    element.classList.toggle("one");
};
