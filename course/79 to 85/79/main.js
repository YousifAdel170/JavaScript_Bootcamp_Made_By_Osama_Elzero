console.log(typeof window);
console.log(typeof window.location);
console.log(typeof window.location.href);

// window.location.assign("https://www.google.com/") // will make the page go to  google page


let user = {
    // Properties
    theName: "Yousif", 
    theAge: 22,
    // Methods
    sayHello: function (){
        return  `Hello`;
    },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());