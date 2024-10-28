console.log(document.getElementById("elzero"));                 //  1
console.log(document.getElementsByName("js")[0]);               //  2
console.log(document.getElementsByClassName("element")[0]);     //  3
console.log(document.getElementsByTagName("div")[0]);           //  4

console.log(document.querySelector('.element'));                //  5
console.log(document.querySelector('#elzero'));                 //  6
console.log(document.querySelector('[name = "js"]'));           //  7
console.log(document.querySelector('div')[0]);                  //  8

console.log(document.querySelectorAll('.element')[0]);          //  9
console.log(document.querySelectorAll('#elzero')[0]);           //  10
console.log(document.querySelectorAll('[name = "js"]')[0]);     //  11
console.log(document.querySelectorAll('div')[0]);               //  12

console.log(document.body.firstElementChild);                   //  13
console.log(document.body.children[0]);                         //  14
console.log(document.body.childNodes[0]);                       //  15

