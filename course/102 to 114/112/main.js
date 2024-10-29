/*
  target : is the element that triggered the event (e.g., the user clicked on)
  currentTarget:  is the element that the event listener is attached to.
*/

let myLis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

// console.log(myLis[0].dataset);
// console.log(typeof myLis[0].dataset);


// window.localStorage.clear();

// check if there an Saved color at the local storage
if(window.localStorage.color){
    // 1. add current color to the div
    exp.style.backgroundColor = window.localStorage.color;
    
    // 2. Loop on all list and Remove all active class
    myLis.forEach((li) => {
      li.classList.remove("active");
    });

    // 3. add active class to this element
    document.querySelector(`[data-color="${window.localStorage.color}"]`).classList.add("active");
}


myLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // 1. Loop on all list and Remove all active class
    myLis.forEach((li) => {
      li.classList.remove("active");
    });
    // 2. Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    
    // 3. add current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);

    // 4. add current color to the div
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});