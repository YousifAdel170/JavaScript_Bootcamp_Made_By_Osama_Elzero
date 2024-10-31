let two = document.querySelector(".two");
let one = document.querySelector(".one");

window.onload = function(){
    two.focus();
};

one.onblur = function(){
    document.links[0].click();
}