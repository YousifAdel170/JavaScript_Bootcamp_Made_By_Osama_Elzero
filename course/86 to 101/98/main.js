let span = document.querySelector(".two");

console.log(span.nextSibling);
console.log(span.nextElementSibling);
console.log(span.previousSibling);
console.log(span.previousElementSibling);

span.previousElementSibling.remove();

span.onclick = function(){
    // span.nextElementSibling.remove();
    span.parentElement.style.opacity = "0.5";
}