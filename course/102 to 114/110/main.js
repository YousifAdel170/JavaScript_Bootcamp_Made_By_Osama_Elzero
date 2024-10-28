/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");
window.onscroll = function(){
  if(window.scrollY >= 600)
    btn.style.display = "block";
  else
    btn.style.display = "none";
}

btn.onclick = function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}