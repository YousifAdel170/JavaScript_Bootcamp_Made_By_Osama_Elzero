let uname = document.querySelector("#uname");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let selector = document.querySelector("select");


if(window.sessionStorage.length){
    uname.value = sessionStorage.getItem("username") || "";
    email.value = sessionStorage.getItem("email") || "";
    pass.value = sessionStorage.getItem("password") || "";
    selector.value = sessionStorage.getItem("option") || "";
}


uname.addEventListener("blur", function(){
    window.sessionStorage.setItem("username", uname.value);
});
email.addEventListener("blur", function(){
    window.sessionStorage.setItem("email", email.value);
});
pass.addEventListener("blur", function(){
    window.sessionStorage.setItem("password", pass.value);
});
selector.addEventListener("change", function(){
    window.sessionStorage.setItem("option", selector.value);
});