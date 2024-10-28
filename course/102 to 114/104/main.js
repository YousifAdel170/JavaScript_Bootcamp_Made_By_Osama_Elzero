/* setTimeout(Function, Timeout, Additional Params) */
setTimeout(function(){
  console.log("This is The Anonymous Function with the Timeout")
}, 500);

setTimeout( timeoutMsg, 1000);

function timeoutMsg (){
  console.log("This is TimeoutMsg Without Parameters called after timeout");
}

let counter = setTimeout( timeoutMsgWithParamers, 3000, "Yousif", 22);
setTimeout( timeoutMsgWithParamers("Adel", 22), 1500);  // Won't wait cause it pass the arguments first

function timeoutMsgWithParamers (user, age){
  console.log(`Name: ${user}, Age: ${age}`);
}

console.log(`The identifier of setTimeout that print Yousif & 22: ${counter}`);


/* clearTimeout(Identifier) */
let btn = document.querySelector("button");
// btn.onclick = function(){
//   clearTimeout(counter);
// };
btn.onclick = function(){
  clearTimeout(3);
};