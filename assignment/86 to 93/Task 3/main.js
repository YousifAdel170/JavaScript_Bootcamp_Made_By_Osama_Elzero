let userInput = document.querySelector("input[name =  dollar]");
let usDoller  = document.querySelector("span.dollar");
let egyPound  = document.querySelector("span.egyptian");

userInput.oninput = function (event) {
    egyPound.textContent = `{${userInput.value}}`;
    usDoller.textContent = `{${(userInput.value * 15.6).toFixed(2)}}`;
};


userInput.onkeydown = (e) => {
    if (["+", "-", "e"].includes(e.key)) e.preventDefault();
};
document.forms[0].onsubmit= (event) => event.preventDefault();
