document.links[0].onclick = function (event){
    console.log("Google", event);
    event.preventDefault();
};

let userInput = document.querySelector("[name = 'username']");
let ageInput = document.querySelector("[name = 'age']");

// Access the first form
document.forms[0].onsubmit = function (event){
    let userValid = false;
    let ageValid = false;

    console.log(userInput.value);
    console.log(userInput.value.length);

    if(userInput.value !== "" && userInput.value.length<=10){
        userValid = true;
        if(ageInput.value !== "")   ageValid = true;
    }
    if(userValid === false || ageValid === false)   
        event.preventDefault();
};
